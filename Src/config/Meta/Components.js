'use strict';
RID.setModule("config/Meta/Components", function() {
    return [{
        id : "windTurbine",
        name : "Wind turbine",
        description : "Produces power",
        group : "a",
        price : 1,
        lifetime : 10,
        refund : 0,
        strategy : {
            type : "Cell",
            powerProduction : .15
        }
    }, {
        id : "solarCell",
        name : "Solar cell",
        description : "Produces heat",
        group : "a",
        price : 200,
        lifetime : 100,
        refund : 0,
        requiresResearch : "solarCell",
        strategy : {
            type : "Cell",
            heatProduction : 3
        }
    }, {
        id : "coalBurner",
        name : "Coal burner",
        description : "Produces heat",
        group : "a",
        price : 1e5,
        lifetime : 400,
        refund : 0,
        requiresResearch : "coalBurner",
        strategy : {
            type : "Cell",
            heatProduction : 380
        }
    }, {
        id : "gasBurner",
        name : "Gas burner",
        description : "Produces heat",
        group : "a",
        price : 4e7,
        lifetime : 800,
        refund : 0,
        requiresResearch : "gasBurner",
        strategy : {
            type : "Cell",
            heatProduction : 75e3
        }
    }, {
        id : "nuclearCell",
        name : "Nuclear cell",
        description : "Produces heat",
        group : "a",
        price : 5e8,
        lifetime : 800,
        refund : 0,
        requiresResearch : "nuclearCell",
        strategy : {
            type : "Cell",
            heatProduction : 12e5
        }
    }, {
        id : "nuclearCell2",
        name : "Thermonuclear cell",
        description : "Produces heat",
        group : "a",
        price : 2e10,
        lifetime : 800,
        refund : 0,
        requiresResearch : "nuclearCell2",
        strategy : {
            type : "Cell",
            heatProduction : 5e7
        }
    }, {
        id : "nuclearCell3",
        name : "Fusion cell",
        description : "Produces heat.",
        group : "a",
        price : 8e11,
        lifetime : 800,
        refund : 0,
        requiresResearch : "nuclearCell3",
        strategy : {
            type : "Cell",
            heatProduction : 25e8
        }
    }, {
        id : "nuclearCell4",
        name : "Thorium cell",
        description : '<img src="./img/reactors/thoriumExample.png" style="float:right;margin: 5px;"/>Produces heat. Distributes heat up to distance of 2 tiles',
        group : "a",
        price : 72e12,
        lifetime : 800,
        refund : 0,
        requiresResearch : "nuclearCell4",
        strategy : {
            type : "Cell",
            heatProduction : 15e10,
            distributeSize : 2
        }
    }, {
        id : "nuclearCell5",
        name : "Protactium cell",
        description : "Produces heat. Distributes heat up to distance of 2 tiles.",
        group : "a",
        price : 504e13,
        lifetime : 800,
        refund : 0,
        requiresResearch : "nuclearCell5",
        strategy : {
            type : "Cell",
            heatProduction : 9e12,
            distributeSize : 2
        }
    }, {
        id : "nuclearCell6",
        name : "Curium cell",
        description : "Produces heat. Distributes heat up to distance of 3 tiles.",
        group : "a",
        price : 3024e14,
        lifetime : 800,
        refund : 0,
        requiresResearch : "nuclearCell6",
        strategy : {
            type : "Cell",
            heatProduction : 63e13,
            distributeSize : 3
        }
    }, {
        id : "nuclearCell7",
        name : "Balduranium cell",
        description : "Produces heat. Distributes heat diagonally up to 3 tiles away",
        group : "a",
        price : 1512e16,
        lifetime : 800,
        refund : 0,
        requiresResearch : "nuclearCell7",
        strategy : {
            type : "Cell",
            heatProduction : 315e14,
            distributeSize : 3,
            distributeType : "diagonal"
        }
    }, {
        id : "generator",
        name : "Generator",
        description : "Converts heat to power",
        group : "b",
        type : "generator",
        price : 500,
        maxHeat : 25,
        refund : 1,
        acceptsWater : false,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "solarCell",
        strategy : {
            type : "HeatToPowerConverter",
            convertHeatToPower : 3,
            waterEffectiveness : 0
        }
    }, {
        id : "generator2",
        name : "Generator 2",
        description : "Converts heat to power",
        group : "b",
        type : "generator",
        price : 25e5,
        maxHeat : 150,
        maxWater : 5e3,
        refund : 1,
        acceptsWater : true,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "gasBurner",
        strategy : {
            type : "HeatToPowerConverter",
            convertHeatToPower : 9,
            waterEffectiveness : 100
        }
    }, {
        id : "generator3",
        name : "Generator 3",
        description : "Converts heat to power.",
        group : "b",
        type : "generator",
        price : 1e13,
        maxHeat : 900,
        maxWater : 8e3,
        refund : 1,
        acceptsWater : true,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "generator3",
        strategy : {
            type : "HeatToPowerConverter",
            convertHeatToPower : 32,
            waterEffectiveness : 200
        }
    }, {
        id : "generator4",
        name : "Generator 4",
        description : "Converts heat to power.",
        group : "b",
        type : "generator",
        price : 5e16,
        maxHeat : 2200,
        maxWater : 22e3,
        refund : 1,
        acceptsWater : true,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "generator4",
        strategy : {
            type : "HeatToPowerConverter",
            convertHeatToPower : 96,
            waterEffectiveness : 400
        }
    }, {
        id : "generator5",
        name : "Generator 5",
        description : "Converts heat to power.",
        group : "b",
        type : "generator",
        price : 125e17,
        maxHeat : 4400,
        maxWater : 44e3,
        refund : 1,
        acceptsWater : true,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "generator5",
        strategy : {
            type : "HeatToPowerConverter",
            convertHeatToPower : 288,
            waterEffectiveness : 1200
        }
    }, {
        id : "heatExchanger",
        name : "Heat exchanger",
        description : '<img src="./img/reactors/heatExchangerExample.png" style="float:right;margin: 5px;"/>Tries to balance heat between adjacent components',
        group : "b2",
        price : 15E5,
        maxHeat : 15E3,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "heatExchanger",
        strategy : {
            type : "HeatExchanger"
        }
    }, {
        id : "heatInlet",
        name : "Heat inlet",
        type : "heatInletOutletElement",
        description : '<img src="./img/reactors/heatInletOutletExample.png" style="float:right;margin: 5px;"/>Takes in heat and distributes evenly to every heat outlet.',
        group : "b2",
        price : 25E13,
        maxHeat : 55E9,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : false,
        requiresResearch : "undergroundHeatPipes",
        strategy : {
            type : "HeatInlet",
            transferHeat : 38E9
        }
    }, {
        id : "heatOutlet",
        name : "Heat outlet",
        type : "heatInletOutletElement",
        description : '<img src="./img/reactors/heatInletOutletExample.png" style="float:right;margin: 5px;"/>Takes in heat only from heat inlets. Heat must be pulled out by exchangers.',
        group : "b2",
        price : 15E13,
        maxHeat : 55E9,
        refund : 1,
        acceptsHeat : false,
        givesHeatOut : true,
        requiresResearch : "undergroundHeatPipes",
        strategy : {
            type : "HeatOutlet"
        }
    }, {
        id : "isolation",
        name : "Isolation",
        description : "Increases heat output of heat producing cells",
        group : "c",
        price : 1E3,
        refund : 1,
        requiresResearch : "isolation",
        strategy : {
            type : "CellHeatProductionAmplifier",
            heatProductionBonus : .05
        }
    }, {
        id : "heatBattery",
        name : "Heat sink",
        description : "Absorbs heat. Does not give heat out and loses some of the heat each tick.",
        group : "c",
        price : 25E5,
        maxHeat : 1E7,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : false,
        requiresResearch : "heatBattery",
        strategy : {
            type : "HeatAbsorber",
            loseHeat : .05
        }
    }, {
        id : "boilerHouse",
        name : "Boiler house",
        description : "Sells heat in a bulk. Explodes if in direct contact with heat",
        group : "c",
        price : 15E6,
        maxHeat : 2E3,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "boilerHouse",
        strategy : {
            type : "BulkHeatToMoneyConverter",
            convertHeatToMoney : 18E3
        }
    }, {
        id : "battery",
        name : "Battery",
        description : "Increases max power you can have",
        group : "cc",
        price : 50,
        refund : 1,
        requiresResearch : "battery",
        strategy : {
            type : "MaxPowerIncrease",
            maxPowerIncrease : 100
        }
    }, {
        id : "waterPump",
        name : "Water pump",
        description : '<img src="./img/reactors/waterPumpExample.png" style="float:right;margin: 5px;"/> Cools generators so they produce much more power. Must be placed next to water.',
        type : "waterElement",
        group : "ee",
        price : 5E9,
        maxWater : 15E4,
        refund : 1,
        onlyNextToWater : true,
        acceptsWater : true,
        acceptsHeat : false,
        givesHeatOut : false,
        requiresResearch : "waterPump",
        strategy : {
            type : "WaterPump",
            waterProduction : 25E3,
            balancesWater : true
        }
    }, {
        id : "groundwaterPump",
        name : "Groundwater pump",
        description : "Pumps groundwater. Needs water pipe to distribute water.",
        type : "waterElement",
        group : "ee",
        price : 4E10,
        maxWater : 25E4,
        refund : 1,
        onlyNextToWater : false,
        acceptsWater : true,
        acceptsHeat : false,
        givesHeatOut : false,
        requiresResearch : "groundwaterPump",
        strategy : {
            type : "WaterPump",
            waterProduction : 67500,
            balancesWater : false
        }
    }, {
        id : "waterPipe",
        name : "Water pipe",
        description : "Expands water pumps effective area.",
        type : "waterElement",
        group : "ee",
        price : 15E8,
        maxWater : 1E5,
        refund : 1,
        acceptsWater : true,
        acceptsHeat : false,
        givesHeatOut : false,
        requiresResearch : "waterPipe",
        strategy : {
            type : "WaterExchanger"
        }
    }, {
        id : "circulator",
        name : "Circulator",
        description : "Moves water faster through generators, therefore increasing generator max water.",
        group : "ee",
        price : 25E16,
        refund : 1,
        requiresResearch : "circulator",
        strategy : {
            type : "Circulator",
            maxWaterBonus : .9
        }
    }, {
        id : "office",
        name : "Home office",
        description : "Sells small amount of power produced by wind turbines or other components.",
        type : "office",
        group : "d",
        price : 50,
        maxHeat : 10,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "office",
        strategy : {
            type : "PowerToMoneyConverter",
            maxSellPower : 5
        }
    }, {
        id : "office2",
        name : "Small office",
        description : "Sells power",
        type : "office",
        group : "d",
        price : 1E5,
        maxHeat : 10,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "office2",
        strategy : {
            type : "PowerToMoneyConverter",
            maxSellPower : 100
        }
    }, {
        id : "office3",
        name : "Medium office",
        description : "Sells power",
        type : "office",
        group : "d",
        price : 5E8,
        maxHeat : 10,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "office3",
        strategy : {
            type : "PowerToMoneyConverter",
            maxSellPower : 2500
        }
    }, {
        id : "office4",
        name : "Large office",
        description : "Sells power",
        type : "office",
        group : "d",
        price : 1E10,
        maxHeat : 10,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "office4",
        strategy : {
            type : "PowerToMoneyConverter",
            maxSellPower : 6E4
        }
    }, {
        id : "office5",
        name : "Huge office",
        description : "Sells power",
        type : "office",
        group : "d",
        price : 1E15,
        maxHeat : 10,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "office5",
        strategy : {
            type : "PowerToMoneyConverter",
            maxSellPower : 9E5
        }
    }, {
        id : "bank",
        name : "Bank",
        description : "Boosts office sales",
        group : "d",
        price : 4E12,
        maxHeat : 1,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "bank2",
        strategy : {
            type : "Bank",
            sellAmountBonus : 1.5
        }
    }, {
        id : "researchCenter",
        name : "Research center",
        description : "Gives you research points with what you can research new technologies",
        type : "researchCenter",
        group : "e",
        price : 100,
        maxHeat : 1,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "researchCenter",
        strategy : {
            type : "ResearchCenter",
            researchProduction : 1
        }
    }, {
        id : "researchCenter2",
        name : "Advanced research center",
        description : "Gives you research points with what you can research new technologies",
        type : "researchCenter",
        group : "e",
        price : 1E7,
        maxHeat : 100,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "researchCenter2",
        strategy : {
            type : "ResearchCenter",
            researchProduction : 8
        }
    }, {
        id : "researchCenter3",
        name : "Super research center",
        description : "Gives you research points with what you can research new technologies",
        type : "researchCenter",
        group : "e",
        price : 504E13,
        maxHeat : 100,
        refund : 1,
        acceptsHeat : true,
        givesHeatOut : true,
        requiresResearch : "researchCenter3",
        strategy : {
            type : "ResearchCenter",
            researchProduction : 40
        }
    }];
}());
