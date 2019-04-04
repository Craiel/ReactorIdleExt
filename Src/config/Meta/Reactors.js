'use strict';
RID.setModule("config/Meta/Reactors", function() {
    return [{
        id : "mini",
        name : "Island",
        design : "backyard",
        price : 0,
        maxPower : 50,
        width : 22,
        height : 15,
        layout : "wwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwww  wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.  wwwwwwwwwwwwwwwww       wwwwwwwwwwwwwwww    wwwwwwwwwwwwwwwww    wwwwwwwwwwwwwwwwww   www   wwwwwwwwwwwww. www  w.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwwwwwwww wwwwwwwwwwwww.wwwwww.   ww wwwwwwwwwwwwwwww. wwwwwwwwwwwwwwwwwwwwwwwwwwww"
    }, {
        id : "medium",
        name : "Village",
        design : "village",
        price : 1e6,
        maxPower : 100,
        width : 22,
        height : 15,
        layout : "               wwwwwww              wwwwwwww www    .ww   wwwwwwwwwwww     .ww   wwwwwwwww.www     ww    wwwwwwwwwww     .w    .wwwwwwwwwwww        wwwwwwwwwwwwwww      wwwwwwwwwwwwwwwww   .www  wwwwwwwwwwwwww www.  wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww  .wwwwwwwwwwwwwwww.    wwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
    }, {
        id : "big",
        name : "Region",
        design : "region",
        price : 1e11,
        maxPower : 100,
        width : 22,
        height : 16,
        layout : "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwww.wwwwwww wwwwww   .wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww. w  wwwwwwwwwwwwwww      ww.www w   wwww           w    . www                   wwww               .  ww                    wwwwwww.              wwwwwwwwww            wwwwwwwwwwwww         wwwwwwwwwwww.         wwwwwwwwwwwww         "
    }, {
        id : "huge",
        name : "City",
        design : "city",
        price : 1e14,
        maxPower : 100,
        width : 22,
        height : 16,
        layout : "            . wwwwwwww           .     wwwww                   www              .   wwww                   .ww                  wwww                 wwwww                  wwww                  wwww                  wwww                    ww                   www                  wwww     .             .ww                  wwww .        . .   wwwwww"
    }, {
        id : "challenge1",
        name : "Single heat cell",
        design : "region",
        price : 1e15,
        maxPower : 100,
        width : 21,
        height : 17,
        heatCellsAllowed : 1,
        researchComponentsDisabled : true,
        layout : "wwwwwwwwwwwwwwwwwwwwww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   wwwwwwwwwwwwwwwwwwwwww"
    }, {
        id : "metropolis",
        name : "Metropolis",
        design : "metropolis",
        price : 5e16,
        maxPower : 100,
        width : 23,
        height : 17,
        layout : "w         www         w                                                                                                                   w                     ww                     ww                     w                                                                                                                                                                 w         www         w"
    }, {
        id : "challenge2",
        name : "Four heat cell",
        design : "region",
        price : 125e16,
        maxPower : 100,
        width : 21,
        height : 17,
        heatCellsAllowed : 4,
        researchComponentsDisabled : true,
        layout : "wwwwwwwwwwwwwwwwwwwwww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   wwwwwwwwwwwwwwwwwwwwww"
    }, {
        id : "mainland",
        name : "Mainland",
        design : "city",
        price : 3e19,
        maxPower : 100,
        width : 25,
        height : 21,
        layout : "wwwwwwwwwwwwwwwwwwwwwwwwwww                     www                       ww                       ww                       ww                       ww                       ww                       ww                       ww                       ww                       ww                       ww                       ww                       ww                       ww                       ww                       ww                       www                     wwwwwwwwwwwwwwwwwwwwwwwwwww"
    }, {
        id : "challenge3",
        name : "Eight heat cell",
        design : "region",
        price : 75e19,
        maxPower : 100,
        width : 21,
        height : 17,
        heatCellsAllowed : 8,
        researchComponentsDisabled : true,
        layout : "wwwwwwwwwwwwwwwwwwwwww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   ww                   wwwwwwwwwwwwwwwwwwwwww"
    }, {
        id : "continent",
        name : "Continent",
        design : "backyard",
        price : 2.0999999999999998E22,
        maxPower : 100,
        width : 25,
        height : 21,
        layout : "wwwwwwwwwwwwwwwwwwwwwwwww                                                                                                                                                                                                                                                                                                                                                                                                                                                                  wwwwwwwwwwwwwwwwwwwwwwwww"
    }];
}());
