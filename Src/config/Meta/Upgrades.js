'use strict';
define([], function() {
    return [{
        id : "officeSellPower",
        name : "Office sell power",
        group : "1",
        price : 1e3,
        priceIncrease : 10,
        requiresResearch : "office",
        bonus : {
            type : "powerSellAmount",
            componentTypeId : "office",
            multiplayer : 2
        }
    }, {
        id : "bankEffectiveness",
        name : "Bank effectiveness",
        group : "1",
        price : 1e13,
        priceIncrease : 4,
        requiresResearch : "bank",
        bonus : {
            type : "powerToMoneyAmountBonusMultiplayer",
            componentId : "bank",
            multiplayer : 1.25
        }
    }, {
        id : "researchCenterAmount",
        name : "Research center",
        group : "1",
        price : 25e3,
        priceIncrease : 1.78,
        requiresResearch : "researchCenter",
        bonus : {
            type : "researchPointsProduction",
            componentTypeId : "researchCenter",
            multiplayer : 1.25
        }
    }, {
        id : "boilerHouseSellAmount",
        name : "Boiler house sell amount",
        group : "1",
        price : 5e7,
        priceIncrease : 2.8,
        requiresResearch : "boilerHouse",
        bonus : {
            type : "heatSellAmount",
            componentId : "boilerHouse",
            multiplayer : 1.4
        }
    }, {
        id : "generatorMaxHeat",
        name : "Generator max heat",
        group : "d",
        price : 1e3,
        priceIncrease : 3.7,
        requiresResearch : "solarCell",
        bonus : {
            type : "maxHeatMultiplayer",
            componentTypeId : "generator",
            multiplayer : 2
        }
    }, {
        id : "generatorConvertPower",
        name : "Generator effectiveness",
        group : "d",
        price : 400,
        priceIncrease : 1.5,
        requiresResearch : "solarCell",
        bonus : {
            type : "heatToPower",
            componentTypeId : "generator",
            multiplayer : 1.25
        }
    }, {
        id : "heatExchangerMaxHeat",
        name : "Heat exchanger max heat",
        group : "d",
        price : 2e6,
        priceIncrease : 2.6,
        requiresResearch : "heatExchanger",
        bonus : {
            type : "maxHeatMultiplayer",
            componentId : "heatExchanger",
            multiplayer : 2
        }
    }, {
        id : "heatBatteryMaxHeat",
        name : "Heat sink max heat",
        group : "d",
        price : 2e7,
        priceIncrease : 4,
        allowSelling : true,
        requiresResearch : "heatBattery",
        bonus : {
            type : "maxHeatMultiplayer",
            componentId : "heatBattery",
            multiplayer : 2
        }
    }, {
        id : "battery",
        name : "Power battery size",
        group : "d",
        price : 300,
        priceIncrease : 2,
        requiresResearch : "battery",
        bonus : {
            type : "maxPower",
            componentId : "battery",
            multiplayer : 2
        }
    }, {
        id : "isolationEffectiveness",
        name : "Isolation effectiveness",
        group : "d",
        price : 5e4,
        priceIncrease : 10,
        allowSelling : true,
        requiresResearch : "isolation",
        bonus : {
            type : "isolationEffectiveness",
            componentId : "isolation",
            method : "sum",
            multiplayer : 1
        }
    }, {
        id : "WaterPumpProduction",
        name : "Water pump production",
        group : "d",
        price : 8e10,
        priceIncrease : 1.98,
        requiresResearch : "waterPump",
        bonus : {
            type : "waterProduction",
            componentId : "waterPump",
            multiplayer : 1.5
        }
    }, {
        id : "GroundwaterPumpProduction",
        name : "Groundwater pump prod.",
        group : "d",
        price : 64e10,
        priceIncrease : 2,
        requiresResearch : "groundwaterPump",
        bonus : {
            type : "waterProduction",
            componentId : "groundwaterPump",
            multiplayer : 1.5
        }
    }, {
        id : "waterElementsMaxWater",
        name : "Water elem. max water",
        group : "d",
        price : 3e10,
        priceIncrease : 2,
        requiresResearch : "waterPump",
        bonus : {
            type : "maxWater",
            componentTypeId : "waterElement",
            multiplayer : 1.5
        }
    }, {
        id : "generatorMaxWater",
        name : "Generators max water",
        group : "d",
        price : 2e10,
        priceIncrease : 1.45,
        requiresResearch : "waterPipe",
        bonus : {
            type : "maxWater",
            componentTypeId : "generator",
            multiplayer : 1.25
        }
    }, {
        id : "heatInletOutletMaxHeat",
        name : "Heat inlet&outlet max heat",
        icon : "heatInlet",
        group : "d",
        price : 1e15,
        priceIncrease : 2.7,
        requiresResearch : "undergroundHeatPipes",
        bonus : {
            type : "maxHeatMultiplayer",
            componentTypeId : "heatInletOutletElement",
            multiplayer : 2
        }
    }, {
        id : "heatInletMaxTransfer",
        name : "Heat inlet max transfer",
        group : "d",
        price : 1e15,
        priceIncrease : 1.5,
        requiresResearch : "undergroundHeatPipes",
        bonus : {
            type : "heatInletMaxTransferMultiplayer",
            componentId : "heatInlet",
            multiplayer : 1.3
        }
    }, {
        id : "circulatorEffectiveness",
        name : "Circulator effectiveness",
        group : "d",
        price : 1e18,
        priceIncrease : 2.1,
        allowSelling : true,
        requiresResearch : "circulator",
        bonus : {
            type : "circulatorEffectiveness",
            componentId : "circulator",
            method : "sum",
            multiplayer : .25
        }
    }, {
        id : "nuclearCell7Production",
        name : "Balduranium cell",
        firstBuyWarning : "If you are using this cell, upgrading heat production may overheat components adjacent to it. Make sure components can take the heat! Are you sure you want to buy?",
        group : "a",
        price : 2.5e21,
        priceIncrease : 1.78,
        allowSelling : true,
        requiresResearch : "nuclearCell7",
        bonus : {
            type : "heatProduction",
            componentId : "nuclearCell7",
            multiplayer : 1.25
        }
    }, {
        id : "nuclearCell7Life",
        name : "Balduranium cell lifetime",
        group : "a",
        price : 1.25e22,
        priceIncrease : 8,
        requiresResearch : "nuclearCell7",
        bonus : {
            type : "lifetime",
            componentId : "nuclearCell7",
            multiplayer : 2
        }
    }, {
        id : "nuclearCell6Production",
        name : "Curiom cell",
        firstBuyWarning : "If you are using this cell, upgrading heat production may overheat components adjacent to it. Make sure components can take the heat! Are you sure you want to buy?",
        group : "a",
        price : 5E19,
        priceIncrease : 1.78,
        allowSelling : true,
        requiresResearch : "nuclearCell6",
        bonus : {
            type : "heatProduction",
            componentId : "nuclearCell6",
            multiplayer : 1.25
        }
    }, {
        id : "nuclearCell6Life",
        name : "Curiom cell lifetime",
        group : "a",
        price : 2.5E20,
        priceIncrease : 8,
        requiresResearch : "nuclearCell6",
        bonus : {
            type : "lifetime",
            componentId : "nuclearCell6",
            multiplayer : 2
        }
    }, {
        id : "nuclearCell5Production",
        name : "Protactium cell",
        firstBuyWarning : "If you are using this cell, upgrading heat production may overheat components adjacent to it. Make sure components can take the heat! Are you sure you want to buy?",
        group : "a",
        price : 1E18,
        priceIncrease : 1.78,
        allowSelling : true,
        requiresResearch : "nuclearCell5",
        bonus : {
            type : "heatProduction",
            componentId : "nuclearCell5",
            multiplayer : 1.25
        }
    }, {
        id : "nuclearCell5Life",
        name : "Protactium cell lifetime",
        group : "a",
        price : 5E18,
        priceIncrease : 8,
        requiresResearch : "nuclearCell5",
        bonus : {
            type : "lifetime",
            componentId : "nuclearCell5",
            multiplayer : 2
        }
    }, {
        id : "nuclearCell4Production",
        name : "Thorium cell",
        firstBuyWarning : "If you are using this cell, upgrading heat production may overheat components adjacent to it. Make sure components can take the heat! Are you sure you want to buy?",
        group : "a",
        price : 1E16,
        priceIncrease : 1.78,
        allowSelling : true,
        requiresResearch : "nuclearCell4",
        bonus : {
            type : "heatProduction",
            componentId : "nuclearCell4",
            multiplayer : 1.25
        }
    }, {
        id : "nuclearCell4Life",
        name : "Thorium cell lifetime",
        group : "a",
        price : 5E16,
        priceIncrease : 8,
        requiresResearch : "nuclearCell4",
        bonus : {
            type : "lifetime",
            componentId : "nuclearCell4",
            multiplayer : 2
        }
    }, {
        id : "nuclearCell3Production",
        name : "Fusion cell",
        firstBuyWarning : "If you are using this cell, upgrading heat production may overheat components adjacent to it. Make sure components can take the heat! Are you sure you want to buy?",
        group : "a",
        price : 1E14,
        priceIncrease : 1.78,
        allowSelling : true,
        requiresResearch : "nuclearCell3",
        bonus : {
            type : "heatProduction",
            componentId : "nuclearCell3",
            multiplayer : 1.25
        }
    }, {
        id : "nuclearCell3Life",
        name : "Fusion cell lifetime",
        group : "a",
        price : 5E14,
        priceIncrease : 8,
        requiresResearch : "nuclearCell3",
        bonus : {
            type : "lifetime",
            componentId : "nuclearCell3",
            multiplayer : 2
        }
    }, {
        id : "nuclearCell2Production",
        name : "Thermonuclear cell",
        firstBuyWarning : "If you are using this cell, upgrading heat production may overheat components adjacent to it. Make sure components can take the heat! Are you sure you want to buy?",
        group : "a",
        price : 1E11,
        priceIncrease : 1.78,
        allowSelling : true,
        requiresResearch : "nuclearCell2",
        bonus : {
            type : "heatProduction",
            componentId : "nuclearCell2",
            multiplayer : 1.25
        }
    }, {
        id : "nuclearCell2Life",
        name : "Thermonuclear cell lifetime",
        group : "a",
        price : 5E11,
        priceIncrease : 8,
        requiresResearch : "nuclearCell2",
        bonus : {
            type : "lifetime",
            componentId : "nuclearCell2",
            multiplayer : 2
        }
    }, {
        id : "nuclearCellProduction",
        name : "Nuclear cell",
        firstBuyWarning : "If you are using this cell, upgrading heat production may overheat components adjacent to it. Make sure components can take the heat! Are you sure you want to buy?",
        group : "a",
        price : 1E10,
        priceIncrease : 1.78,
        allowSelling : true,
        requiresResearch : "nuclearCell",
        bonus : {
            type : "heatProduction",
            componentId : "nuclearCell",
            multiplayer : 1.25
        }
    }, {
        id : "nuclearCellLife",
        name : "Nuclear cell lifetime",
        group : "a",
        price : 5E10,
        priceIncrease : 8,
        requiresResearch : "nuclearCell",
        bonus : {
            type : "lifetime",
            componentId : "nuclearCell",
            multiplayer : 2
        }
    }, {
        id : "gasBurnerProduction",
        name : "Gas burner",
        firstBuyWarning : "If you are using this cell, upgrading heat production may overheat components adjacent to it. Make sure components can take the heat! Are you sure you want to buy?",
        group : "a",
        price : 8E7,
        priceIncrease : 1.78,
        allowSelling : true,
        requiresResearch : "gasBurner",
        bonus : {
            type : "heatProduction",
            componentId : "gasBurner",
            multiplayer : 1.25
        }
    }, {
        id : "gasBurnerLife",
        name : "Gas burner lifetime",
        group : "a",
        price : 25E7,
        priceIncrease : 8,
        requiresResearch : "gasBurner",
        bonus : {
            type : "lifetime",
            componentId : "gasBurner",
            multiplayer : 2
        }
    }, {
        id : "coalBurnerProduction",
        name : "Coal burner",
        firstBuyWarning : "If you are using this cell, upgrading heat production may overheat components adjacent to it. Make sure components can take the heat! Are you sure you want to buy?",
        group : "a",
        price : 125E3,
        priceIncrease : 1.78,
        allowSelling : true,
        requiresResearch : "coalBurner",
        bonus : {
            type : "heatProduction",
            componentId : "coalBurner",
            multiplayer : 1.25
        }
    }, {
        id : "coalBurnerLife",
        name : "Coal burner lifetime",
        group : "a",
        price : 5E6,
        priceIncrease : 8,
        requiresResearch : "coalBurner",
        bonus : {
            type : "lifetime",
            componentId : "coalBurner",
            multiplayer : 2
        }
    }, {
        id : "solarCellProduction",
        name : "Solar cells",
        firstBuyWarning : "If you are using this cell, upgrading heat production may overheat components adjacent to it. Make sure components can take the heat! Are you sure you want to buy?",
        group : "a",
        price : 1E3,
        priceIncrease : 3.165,
        allowSelling : true,
        requiresResearch : "solarCell",
        bonus : {
            type : "heatProduction",
            componentId : "solarCell",
            multiplayer : 1.5
        }
    }, {
        id : "solarCellLife",
        name : "Solar cells lifetime",
        group : "a",
        price : 1E4,
        priceIncrease : 10,
        requiresResearch : "solarCell",
        bonus : {
            type : "lifetime",
            componentId : "solarCell",
            multiplayer : 2
        }
    }, {
        id : "windTurbineProduction",
        name : "Wind turbine",
        group : "a",
        price : 250,
        priceIncrease : 2.8,
        allowSelling : true,
        bonus : {
            type : "powerProduction",
            componentId : "windTurbine",
            multiplayer : 1.5
        }
    }, {
        id : "windTurbineLife",
        name : "Wind turbine lifetime",
        group : "a",
        price : 15,
        priceIncrease : 12,
        bonus : {
            type : "lifetime",
            componentId : "windTurbine",
            multiplayer : 2
        }
    }];
});
