'use strict';
RID.setModule("config/Meta", function() {
    var reactors = RID.getModule("config/Meta/Reactors");
    var components = RID.getModule("config/Meta/Components");
    var upgrades = RID.getModule("config/Meta/Upgrades");
    var research = RID.getModule("config/Meta/Research");

    var data = {
        version : 1,
        startingMoney : 1,
        startingResearchPoints : 0,
        maxBonusTicks : 4e3,
        minBonusTicks : 10,
        offlineSlower : 10,
        reactors : reactors,
        components : components,
        upgrades : upgrades,
        research : research,
        achievements : [],
    };
    data.componentsById = {};
    var i;
    for (i in data.components) {
        data.componentsById[data.components[i].id] = data.components[i];
    }
    data.componentsByType = {};
    for (i in data.components) {
        var c = data.components[i].type;
        if (!data.componentsByType[c]) {
            /** @type {!Array} */
            data.componentsByType[c] = [];
        }
        data.componentsByType[c].push(data.components[i]);
    }
    data.reactorsById = {};
    for (i in data.reactors) {
        data.reactorsById[data.reactors[i].id] = data.reactors[i];
    }
    data.upgradesById = {};
    for (i in data.upgrades) {
        data.upgradesById[data.upgrades[i].id] = data.upgrades[i];
    }
    data.researchById = {};
    for (i in data.research) {
        data.researchById[data.research[i].id] = data.research[i];
    }
    data.achievementsById = {};
    for (i in data.achievements) {
        data.achievementsById[data.achievements[i].id] = data.achievements[i];
    }
    return data;
}());
