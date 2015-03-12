__d("ReactDefaultPerfAnalysis",[],function (e, t, n, r, i) {
    function o(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
            var r = e[n];
            t += r.totalTime
        }
        return t
    }

    function a(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var r, i = e[n];
            for (r in i.writes) i.writes[r].forEach(function(e) {
                t.push({
                    id: r,
                    type: p[e.type] || e.type,
                    args: e.args
                })
            })
        }
        return t
    }

    function s(e) {
        for (var t, n = {}, r = 0; r < e.length; r++) {
            var i = e[r],
                o = Object.assign({}, i.exclusive, i.inclusive);
            for (var a in o) t = i.displayNames[a].current, n[t] = n[t] || {
                componentName: t,
                inclusive: 0,
                exclusive: 0,
                render: 0,
                count: 0
            }, i.render[a] && (n[t].render += i.render[a]), i.exclusive[a] && (n[t].exclusive += i.exclusive[a]), i.inclusive[a] && (n[t].inclusive += i.inclusive[a]), i.counts[a] && (n[t].count += i.counts[a])
        }
        var s = [];
        for (t in n) n[t].exclusive >= c && s.push(n[t]);
        return s.sort(function(e, t) {
            return t.exclusive - e.exclusive
        }), s
    }

    function l(e, t) {
        for (var n, r = {}, i = 0; i < e.length; i++) {
            var o, a = e[i],
                s = Object.assign({}, a.exclusive, a.inclusive);
            t && (o = u(a));
            for (var l in s)
                if (!t || o[l]) {
                    var p = a.displayNames[l];
                    n = p.owner + " > " + p.current, r[n] = r[n] || {
                        componentName: n,
                        time: 0,
                        count: 0
                    }, a.inclusive[l] && (r[n].time += a.inclusive[l]), a.counts[l] && (r[n].count += a.counts[l])
                }
        }
        var d = [];
        for (n in r) r[n].time >= c && d.push(r[n]);
        return d.sort(function(e, t) {
            return t.time - e.time
        }), d
    }

    function u(e) {
        var t = {},
            n = Object.keys(e.writes),
            r = Object.assign({}, e.exclusive, e.inclusive);
        for (var i in r) {
            for (var o = !1, a = 0; a < n.length; a++)
                if (0 === n[a].indexOf(i)) {
                    o = !0;
                    break
                }!o && e.counts[i] > 0 && (t[i] = !0)
        }
        return t
    }
    var c = 1.2,
        p = {
            mountImageIntoNode: "set innerHTML",
            INSERT_MARKUP: "set innerHTML",
            MOVE_EXISTING: "move",
            REMOVE_NODE: "remove",
            TEXT_CONTENT: "set textContent",
            updatePropertyByID: "update attribute",
            deletePropertyByID: "delete attribute",
            updateStylesByID: "update styles",
            updateInnerHTMLByID: "set innerHTML",
            dangerouslyReplaceNodeWithMarkupByID: "replace"
        },
        d = {
            getExclusiveSummary: s,
            getInclusiveSummary: l,
            getDOMSummary: a,
            getTotalTime: o
        };
    i.exports = d
});