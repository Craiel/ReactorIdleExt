(function(){

    function q_convertToHHMM(i) {
        var t = parseInt(Number(i)),
            n = Math.round(60 * (Number(i) - t));
        return r = t + "h " + n + "m", "NaNh NaNm" == r && (r = "Inf"), r
    }

    function bySortedValue(i, t, n) {
        var e = [];
        for (var o in i) e.push([o, i[o]]);
        e.sort(function(i, t) {
            return i[1] < t[1] ? 1 : i[1] > t[1] ? -1 : 0
        });
        for (var l = e.length; l--;) t.call(n, e[l][0], e[l][1])
    }

    function q_number_to_str(i) {
        q_dg = {
            6: "million",
            9: "billion",
            12: "trillion",
            15: "quadrillion",
            18: "quintillion",
            21: "sextillion",
            24: "septillion",
            27: "octillion",
            30: "nonillion",
            33: "decillion",
            36: "undecillion",
            39: "duodecillion",
            42: "tredecillion",
            45: "quattuordecillion",
            48: "quindecillion",
            51: "sexdecillion",
            54: "septendecillion",
            57: "octodecillion",
            60: "novemdecillion",
            63: "vigintillion"
        };
        var t = [6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63].reverse();
        return digit = i, digit_str = digit.toString(), digit_len = digit_str.length, digit_string = "", $.each(t, function(i, t) {
            return digit_len >= t ? (digit_string = "$" + (parseInt(digit_str.substr(0, digit_len + 2 - t)) / 100).toString() + " " + q_dg[t], !1) : void 0
        }), digit_string ? digit_string : ""
    }

    function q_str_to_number(i) {
        return q_nominations = {
            million: 6,
            billion: 9,
            trillion: 12,
            quadrillion: 15,
            quintillion: 18,
            sextillion: 21,
            septillion: 24,
            octillion: 27,
            nonillion: 30,
            decillion: 33,
            undecillion: 36,
            duodecillion: 39,
            tredecillion: 42,
            quattuordecillion: 45,
            quindecillion: 48,
            sexdecillion: 51,
            septendecillion: 54,
            octodecillion: 57,
            novemdecillion: 60,
            vigintillion: 63
        }, q_dg = i.split(" "), q_dg[0] * parseInt("1" + "0".repeat(q_nominations[q_dg[1]]))
    }

    function q_get_components() {
        var i = [],
            t = {};
        $(".component").each(function() {
            c = $(this).attr("class"), a = c.replace("component", ""), i.push(a)
        }), i.sort();

        for (var n = null, e = 0, o = 0; o < i.length; o++) i[o] != n ? (e > 1 && (bccs = e - 1, t[n] = bccs), n = i[o], e = 1) : e++;
        var l = "";
        return bySortedValue(t, function(i, t) {
            l = i + ": " + t + "<br />" + l
        }), l
    }

    function q_updateEverything() {
        if(RID.isRunning === false) {
            return;
        }

        0 == $("#q_loader").length && $(".overviewBox").prepend('<div id="q_loader" class="textLine"><span class="productionTitle">Battery remaining: </span><span id="batteryTime" class="power">Loading..</span></div>');

        q_d = {
            income: q_str_to_number($("#income").html()),
            powerProduction: q_str_to_number($("#powerProduction").html()),
            maxPower: q_str_to_number($("#maxPower").html()),
            currentPower: q_str_to_number($("#power").html())
        };

        q_ticks = 5;
        q_batteryLeft = q_d.maxPower - q_d.currentPower;
        q_powerToBattery = q_d.powerProduction - q_d.income;
        q_timeleft = q_convertToHHMM(q_batteryLeft / q_powerToBattery / q_ticks / 3600);

        $("#batteryTime").html(q_timeleft);
        q_total_income = q_powerToBattery + q_d.income;
        q_income_30 = q_total_income * q_ticks * 1800;

        0 == $("#q_future_income").length && $(".overviewBox").prepend('<div id="q_future_income" class="textLine"><span class="productionTitle">Money /30 min: </span><span id="income30" class="money">Loading..</span></div>');
        $("#income30").html(q_number_to_str(q_income_30));

        0 == $("#q_get_list").length && $(".components").append('<div style="padding-top: 10px; clear: both;"><a style="cursor: pointer;" id="q_get_list">Refresh list</a> <span style="color: #696969;">|</span> <a style="cursor: pointer;" id="q_get_list_close">Close</a></div>');
        $("#q_get_list").click(function() {
            q_components = q_get_components(), 0 == $(".q_comp_list").length ? $(".components").append('<div style="padding-top: 10px; clear: both;" class="q_comp_list">' + q_components + "</div>") : $(".q_comp_list").html(q_components)
        });
        
        $("#q_get_list_close").click(function() {
            $(".q_comp_list").html("")
        });
    }

    setInterval(q_updateEverything, 5e3);
}());