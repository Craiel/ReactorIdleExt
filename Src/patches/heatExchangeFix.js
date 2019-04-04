(function(){

    console.log("Applying Heat Exchange Fix");
    var calculator = RID.getModule("calculators/Calculator");


    calculator.prototype.calculateHeat = function() {
        var e = this.reactor.getTiles()
            , a = []
            , r = [];
        for (let o in e) {
            var n = e[o];
            if (n && n.getStrategy() && n.getStrategy().calculateHeat)
                n.getStrategy().calculateHeat();
            if (n && n.getStrategy()){
                if (n.getStrategy().inputToOutputHeat)
                    a.push(n);
                if (n.getStrategy().acceptInletHeat)
                    r.push(n);
            }
        }
        for (let o in a)
            a[o].getStrategy().inputToOutputHeat(r);

        let components = getBalanceComponents(this.reactor);
        components.forEach(balanceComponent);
    };

    function balanceComponent(component){
        var normals = component.filter(function(t){
            return t.getMeta().givesHeatOut;
        });
        var batteries = component.filter(function(t){
            return t.getMeta().acceptsHeat && !t.getMeta().givesHeatOut;
        });
        var batteryFactor = 100;
        var divisor = normals.length + batteries.length*batteryFactor;

        var totalHeat = 0;
        component.forEach(function(t) {
            totalHeat += t.getHeat();
        });
        var heatPerTile = totalHeat / divisor;
        normals.forEach(function(t) {
            t.setHeat(heatPerTile);
        });
        batteries.forEach(function(t) {
            t.setHeat(heatPerTile*batteryFactor);
        });
    }

    function getBalanceComponents(reactor){
        let tiles = reactor.getTiles();
        for (let xy in tiles) {
            tiles[xy]._touched = false;
        }
        let components = [];
        for (let xy in tiles) {
            let n = tiles[xy];
            if (!n._touched && n.getStrategy() && n.getStrategy().balanceHeat)
                components.push(getComponent(tiles[xy], true));
        }
        return components;
    }

    function getComponent(tile, isBalancer){
        let neighbours = tile.findOffsetTiles([[-1, 0], [0, -1], [1, 0], [0, 1]]);
        let component = [tile];
        tile._touched = true;
        neighbours.forEach(function(n){
            if (n._touched)
                return;
            let nm = n.getMeta();
            let nHasHeat = nm && (nm.acceptsHeat || nm.givesHeatOut);
            if (!nHasHeat)
                return;

            let ns = n.getStrategy();
            let nIsBalancer = ns && (ns.balanceHeat);
            if ((isBalancer && nHasHeat) || nIsBalancer){
                component = component.concat(getComponent(n, nIsBalancer));
            }
        });
        return component;
    }

}());
