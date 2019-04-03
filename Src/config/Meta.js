'use strict';
define(["config/Meta/Reactors", "config/Meta/Components", "config/Meta/Upgrades", "config/Meta/Research"], function(reactors, components, upgrades, research) {
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
        purchases : [{
            id : "bonusticks1",
            name : "12 000 bonus ticks",
            bonusTicks : 12e3,
            type : "bonusTicks",
            description : "",
            price_kreds : 30,
            price_usd : 2.99
        }, {
            id : "bonusticks2",
            name : "30 000 bonus ticks",
            bonusTicks : 3e4,
            type : "bonusTicks",
            description : '<b style="color:red;font-size:0.9em">+50% more!</b>',
            price_kreds : 50,
            price_usd : 4.99
        }, {
            id : "bonusticks3",
            name : "150 000 bonus ticks",
            bonusTicks : 15e4,
            type : "bonusTicks",
            description : '<b style="color:red;font-size:0.9em">+240% more!</b>',
            price_kreds : 110,
            price_usd : 9.99
        }, {
            id : "researchproduction",
            name : "5x research points production",
            description : '<b style="color:red;font-size:0.9em">That will speed things up!</b>',
            multiplayer : 5,
            type : "oneTime",
            price_kreds : 110,
            price_usd : 9.99,
            allowOnce : true
        }, {
            id : "researchproduction2",
            name : "8x research points production",
            description : '<b style="color:red;font-size:0.9em">Get tech even faster!</b>',
            multiplayer : 8,
            type : "oneTime",
            price_kreds : 110,
            price_usd : 9.99,
            allowOnce : true,
            requiredPurchase : "researchproduction"
        }, {
            id : "extraticks",
            name : "+4 extra ticks per second",
            description : '<b style="color:red;font-size:0.9em">What a boost!</b>',
            bonusTicks : 4,
            type : "oneTime",
            price_kreds : 225,
            price_usd : 19.99,
            allowOnce : true
        }, {
            id : "extramoney",
            name : "x3 money",
            description : '<b style="color:red;font-size:0.9em">Three times more money. wow!</b>',
            multiplayer : 3,
            type : "oneTime",
            price_kreds : 225,
            price_usd : 19.99,
            allowOnce : true,
            requiredPurchase : "extraticks"
        }, {
            id : "bonusticks4",
            name : "600 000 bonus ticks",
            bonusTicks : 6e5,
            type : "bonusTicks",
            description : '<b style="color:red;font-size:0.9em">+560% more!</b>',
            price_kreds : 225,
            price_usd : 19.99
        }, {
            id : "bonusticks5",
            name : "2 000 000 bonus ticks",
            bonusTicks : 2e6,
            type : "bonusTicks",
            description : '<b style="color:red;font-size:0.9em">+2122% more!</b>',
            price_kreds : 565,
            price_usd : 49.99
        }]
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
    data.purchasesById = {};
    for (i in data.purchases) {
        data.purchasesById[data.purchases[i].id] = data.purchases[i];
    }
    return data;
});
