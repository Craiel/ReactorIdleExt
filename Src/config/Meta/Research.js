'use strict';
RID.setModule("config/Meta/Research", function() {
    return [{
        id : "researchCenter",
        group : "1",
        name : "Research center",
        description : "Produces research points",
        price : 100,
        max : 1
    }, {
        id : "researchCenter2",
        group : "1",
        name : "Advanced research center",
        description : "Produces more research points",
        requiresResearch : "gasBurner",
        priceResearchPoints : 3e6,
        max : 1
    }, {
        id : "researchCenter3",
        group : "1",
        name : "Super research center",
        description : "Produces more research points",
        requiresResearch : "nuclearCell5",
        priceResearchPoints : 125e15,
        max : 1
    }, {
        id : "office",
        group : "1",
        name : "Office",
        description : "Sells power automatically",
        requiresResearch : "researchCenter",
        priceResearchPoints : 500,
        max : 1
    }, {
        id : "office2",
        group : "1",
        name : "Office 2",
        description : "Bigger office can sell much more power.",
        requiresResearch : "coalBurner",
        priceResearchPoints : 5e4,
        max : 1
    }, {
        id : "office3",
        group : "1",
        name : "Office 3",
        description : "Bigger office can sell much more power.",
        requiresResearch : "nuclearCell",
        priceResearchPoints : 4e8,
        max : 1
    }, {
        id : "office4",
        group : "1",
        name : "Office 4",
        description : "Bigger office can sell much more power.",
        requiresResearch : "nuclearCell2",
        priceResearchPoints : 1e10,
        max : 1
    }, {
        id : "office5",
        group : "1",
        name : "Office 5",
        description : "Bigger office can sell much more power.",
        requiresResearch : "nuclearCell4",
        priceResearchPoints : 4e13,
        max : 1
    }, {
        id : "bank2",
        group : "1",
        name : "Bank",
        description : "Boosts office sales",
        requiresResearch : "nuclearCell3",
        priceResearchPoints : 3e11,
        max : 1
    }, {
        id : "chronometer",
        group : "1",
        name : "Chronometer update",
        description : "+1 tick per second",
        requiresResearch : "researchCenter",
        priceResearchPoints : 1e4,
        priceIncrease : 1e3,
        max : 5
    }, {
        id : "battery",
        group : "c",
        name : "Batteries",
        description : "Batteries increase reactor max power.",
        requiresResearch : "windTurbineAutoRebuild",
        priceResearchPoints : 250,
        max : 1
    }, {
        id : "isolation",
        group : "c",
        name : "Isolation",
        description : "Isolation increases heat output of adjacent elements.",
        requiresResearch : "solarCell",
        priceResearchPoints : 12e3,
        max : 1
    }, {
        id : "heatExchanger",
        group : "c",
        name : "Heat exchangers",
        description : "Transfer heat between adjacent components.",
        requiresResearch : "gasBurner",
        priceResearchPoints : 15e4,
        max : 1
    }, {
        id : "undergroundHeatPipes",
        group : "c",
        name : "Underground heat pipes",
        icon : "heatInlet",
        description : "Heat distribution without huge pipe network",
        requiresResearch : "nuclearCell4",
        priceResearchPoints : 2e14,
        max : 1
    }, {
        id : "heatBattery",
        group : "c",
        name : "Heat sink",
        description : "Holds huge amount of heat.",
        requiresResearch : "heatExchanger",
        priceResearchPoints : 1e6,
        max : 1
    }, {
        id : "boilerHouse",
        group : "c",
        name : "Boiler house",
        description : "Takes heat from heat sink and sells it in a bulk.",
        requiresResearch : "heatBattery",
        priceResearchPoints : 5e6,
        max : 1
    }, {
        id : "waterPump",
        group : "c",
        name : "Water pump",
        description : "Cools generators so they produce more power.",
        requiresResearch : "nuclearCell2",
        priceResearchPoints : 6e9,
        max : 1
    }, {
        id : "waterPipe",
        group : "c",
        name : "Water pipe",
        description : "Expands water pump effective area",
        requiresResearch : "waterPump",
        priceResearchPoints : 2e9,
        max : 1
    }, {
        id : "groundwaterPump",
        group : "c",
        name : "Groundwater pump",
        description : "Cools generators so they produce more power.",
        requiresResearch : "nuclearCell3",
        priceResearchPoints : 12e11,
        max : 1
    }, {
        id : "generator3",
        group : "c",
        name : "Generator 3",
        description : "Converts huge amount of heat to power.",
        requiresResearch : "nuclearCell3",
        priceResearchPoints : 25e12,
        max : 1
    }, {
        id : "generator4",
        group : "c",
        name : "Generator 4",
        description : "Converts huge amount of heat to power.",
        requiresResearch : "nuclearCell4",
        priceResearchPoints : 625e12,
        max : 1
    }, {
        id : "circulator",
        group : "c",
        name : "Circulator",
        description : "Increases generator max water if placed adjacent to it.",
        requiresResearch : "nuclearCell5",
        priceResearchPoints : 125e13,
        max : 1
    }, {
        id : "generator5",
        group : "c",
        name : "Generator 5",
        description : "Converts huge amount of heat to power.",
        requiresResearch : "nuclearCell6",
        priceResearchPoints : 6875e13,
        max : 1
    }, {
        id : "nuclearCell7",
        group : "a",
        name : "Balduranium cells",
        description : "Opens balduranium technology",
        requiresResearch : "nuclearCell6",
        priceResearchPoints : 625e16,
        max : 1
    }, {
        id : "nuclearCell7AutoRebuild",
        group : "a",
        name : "Balduranium cell man.",
        description : "Balduranium cells are automatically replaced.",
        icon : "nuclearCell7",
        requiresResearch : "nuclearCell7",
        priceResearchPoints : 8E17,
        max : 1
    }, {
        id : "nuclearCell6",
        group : "a",
        name : "Curium cells",
        description : "Opens curium technology",
        requiresResearch : "nuclearCell5",
        priceResearchPoints : 125E15,
        max : 1
    }, {
        id : "nuclearCell6AutoRebuild",
        group : "a",
        name : "Curium cell man.",
        description : "Curium cells are automatically replaced.",
        icon : "nuclearCell6",
        requiresResearch : "nuclearCell6",
        priceResearchPoints : 8E15,
        max : 1
    }, {
        id : "nuclearCell5",
        group : "a",
        name : "Protactonium cells",
        description : "Opens protactonium technology",
        requiresResearch : "nuclearCell4",
        priceResearchPoints : 25E14,
        max : 1
    }, {
        id : "nuclearCell5AutoRebuild",
        group : "a",
        name : "Protactonium cell man.",
        description : "Protactonium cells are automatically replaced.",
        icon : "nuclearCell5",
        requiresResearch : "nuclearCell5",
        priceResearchPoints : 8E13,
        max : 1
    }, {
        id : "nuclearCell4",
        group : "a",
        name : "Thorium cells",
        description : "Opens thorium technology",
        requiresResearch : "nuclearCell3",
        priceResearchPoints : 5E13,
        max : 1
    }, {
        id : "nuclearCell4AutoRebuild",
        group : "a",
        name : "Thorium cell manager",
        description : "Thorium cells are automatically replaced.",
        icon : "nuclearCell4",
        requiresResearch : "nuclearCell4",
        priceResearchPoints : 8E11,
        max : 1
    }, {
        id : "nuclearCell3",
        group : "a",
        name : "Fusion cells",
        description : "Opens fusion technology",
        requiresResearch : "nuclearCell2",
        priceResearchPoints : 5E11,
        max : 1
    }, {
        id : "nuclearCell3AutoRebuild",
        group : "a",
        name : "Fusion cell manager",
        description : "Fusion cells are automatically replaced.",
        icon : "nuclearCell3",
        requiresResearch : "nuclearCell3",
        priceResearchPoints : 8E9,
        max : 1
    }, {
        id : "nuclearCell2",
        group : "a",
        name : "Thermonuclear cells",
        description : "Opens thermonuclear technology",
        requiresResearch : "nuclearCell",
        priceResearchPoints : 5E9,
        max : 1
    }, {
        id : "nuclearCell2AutoRebuild",
        group : "a",
        name : "Thermonuc. cell manager",
        description : "Thermonuclear cells are automatically replaced.",
        icon : "nuclearCell2",
        requiresResearch : "nuclearCell2",
        priceResearchPoints : 2E9,
        max : 1
    }, {
        id : "nuclearCell",
        group : "a",
        name : "Nuclear cells",
        description : "Opens nuclear technology",
        requiresResearch : "gasBurner",
        priceResearchPoints : 2E8,
        max : 1
    }, {
        id : "nuclearCellAutoRebuild",
        group : "a",
        name : "Nuclear cell manager",
        description : "Nuclear cells are automatically replaced.",
        icon : "nuclearCell",
        requiresResearch : "nuclearCell",
        priceResearchPoints : 1E8,
        max : 1
    }, {
        id : "gasBurner",
        group : "a",
        name : "Gas burner",
        description : "Opens gas technology",
        requiresResearch : "coalBurner",
        priceResearchPoints : 2E6,
        max : 1
    }, {
        id : "gasBurnerAutoRebuild",
        group : "a",
        name : "Gas burner manager",
        description : "Gas burners are automatically replaced.",
        icon : "gasBurner",
        requiresResearch : "gasBurner",
        priceResearchPoints : 1E6,
        max : 1
    }, {
        id : "coalBurner",
        group : "a",
        name : "Coal burner",
        description : "Opens coal technology",
        requiresResearch : "solarCell",
        priceResearchPoints : 5E4,
        max : 1
    }, {
        id : "coalBurnerAutoRebuild",
        group : "a",
        name : "Coal burner manager",
        description : "Coal burners are automatically replaced.",
        icon : "coalBurner",
        requiresResearch : "coalBurner",
        priceResearchPoints : 15E3,
        max : 1
    }, {
        id : "solarCell",
        group : "a",
        name : "Solar cells",
        description : "Opens solar cell technology",
        requiresResearch : "researchCenter",
        priceResearchPoints : 2500,
        max : 1
    }, {
        id : "solarCellAutoRebuild",
        group : "a",
        name : "Solar cell manager",
        description : "Solar cells are automatically replaced.",
        icon : "solarCell",
        requiresResearch : "solarCell",
        priceResearchPoints : 1E3,
        max : 1
    }, {
        id : "windTurbineAutoRebuild",
        group : "a",
        name : "Wind turbine manager",
        description : "Wind turbines are automatically replaced.",
        icon : "windTurbine",
        requiresResearch : "researchCenter",
        priceResearchPoints : 100,
        max : 1
    }];
}());
