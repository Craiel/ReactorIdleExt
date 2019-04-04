RID.setModule("calculators/UpgradeCalculator", function() {
    var e = function(e) {
        this.reactor = e, this.game = e.getGame()
        var t = this,
            n = function(e, n, o) {
                if (n.componentId) "sum" == n.method ? e.components[n.componentId][o] += n.multiplayer : e.components[n.componentId][o] *= n.multiplayer
                else if (n.componentTypeId) {
                    var r = t.reactor.getGame().getMeta().componentsByType[n.componentTypeId]
                    if ("sum" == n.method)
                        for (var u in r) e.components[r[u].id][o] += n.multiplayer
                    else
                        for (var u in r) e.components[r[u].id][o] *= n.multiplayer
                } else console.error("Unknown handling for upgrade meta: " + n.id)
            },
            o = function(e) {
                return Math.round(100 * (e - 1))
            }
        this.bonusCalculators = {
            powerProduction: {
                getInfoText: function(e) {
                    return "Increases power production by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "powerProductionMultiplayer")
                }
            },
            heatProduction: {
                getInfoText: function(e) {
                    return "Increases heat production by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "heatProductionMultiplayer")
                }
            },
            lifetime: {
                getInfoText: function(e) {
                    return "Increases lifetime by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "lifetimeMultiplayer")
                }
            },
            maxHeatMultiplayer: {
                getInfoText: function(e) {
                    return "Increases max heat by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "maxHeatMultiplayer")
                }
            },
            powerToMoneyAmountBonusMultiplayer: {
                getInfoText: function(e) {
                    return "Increases bank base bonus by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "powerToMoneyAmountBonusMultiplayer")
                }
            },
            heatSellAmount: {
                getInfoText: function(e) {
                    return "Increases heat sell amount by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "bulkHeatSellMultiplayer")
                }
            },
            researchPointsProduction: {
                getInfoText: function(e) {
                    return "Increases research production by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "researchPointsProductionMultiplayer")
                }
            },
            powerSellAmount: {
                getInfoText: function(e) {
                    return "Increases power sell amount by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "powerSellAmountMultiplayer")
                }
            },
            heatToPower: {
                getInfoText: function(e) {
                    return "Increases heat to power conversion by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "heatToPowerConversionMultiplayer")
                }
            },
            maxPower: {
                getInfoText: function(e) {
                    return "Increases reactor max power by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "maxPowerMultiplayer")
                }
            },
            isolationEffectiveness: {
                getInfoText: function(e) {
                    return "Increases isolation effectiveness by " + o(e.multiplayer + 1) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "isolationMultiplayer")
                }
            },
            waterProduction: {
                getInfoText: function(e) {
                    return "Increases water production by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "waterProductionMultiplayer")
                }
            },
            maxWater: {
                getInfoText: function(e) {
                    return "Increases max water by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "maxWaterMultiplayer")
                }
            },
            circulatorEffectiveness: {
                getInfoText: function(e) {
                    return "Increases circulator effectiveness by " + o(e.multiplayer + 1) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "circulatorMaxPowerMultiplayer")
                }
            },
            heatInletMaxTransferMultiplayer: {
                getInfoText: function(e) {
                    return "Increases heat inlet max transfer by " + o(e.multiplayer) + "%"
                },
                getBonus: function(e, t) {
                    n(t, e, "heatInletMaxTransferMultiplayer")
                }
            }
        }
    };

    e.prototype.getInfoText = function(e) {
        return e && e.bonus ? this.bonusCalculators[e.bonus.type] ? this.bonusCalculators[e.bonus.type].getInfoText(e.bonus) : (console.error("Unknown bonus type: " + e.bonus.type), "") : ""
    };

    e.prototype.getBonuses = function() {
        var e = {
            components: {}
        };

        for (var t in this.game.getMeta().components) {
            var n = this.game.getMeta().components[t]
            e.components[n.id] = {
                powerProductionMultiplayer: 1,
                heatProductionMultiplayer: 1,
                waterProductionMultiplayer: 1,
                lifetimeMultiplayer: 1,
                maxHeatMultiplayer: 1,
                maxWaterMultiplayer: 1,
                powerToMoneyAmountBonusMultiplayer: 1,
                bulkHeatSellMultiplayer: 1,
                researchPointsProductionMultiplayer: 1,
                powerSellAmountMultiplayer: 1,
                heatToPowerConversionMultiplayer: 1,
                maxPowerMultiplayer: 1,
                isolationMultiplayer: 1,
                heatInletMaxTransferMultiplayer: 1,
                circulatorMaxPowerMultiplayer: 1
            }
        }
        var o = this.reactor.getUpgrades()
        for (var t in o) {
            var r = this.reactor.getGame().getMeta().upgradesById[t]
            if (r)
                for (var u = 0; u < o[t]; u++) this.bonusCalculators[r.bonus.type] || console.error("Invalid bonus type:" + r.bonus.type), this.bonusCalculators[r.bonus.type].getBonus(r.bonus, e)
        }
        return e
    };

    return e
}());