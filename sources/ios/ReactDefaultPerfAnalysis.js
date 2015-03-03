__d("ReactDefaultPerfAnalysis",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        for (var require/*t*/ = 0, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/];
            require/*t*/ += requireLazy/*r*/.totalTime
        }
        return require/*t*/
    }

    function a(global/*e*/) {
        for (var require/*t*/ = [], requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/, module/*i*/ = global/*e*/[requireDynamic/*n*/];
            for (requireLazy/*r*/ in module/*i*/.writes) module/*i*/.writes[requireLazy/*r*/].forEach(function(global/*e*/) {
                require/*t*/.push({
                    id: requireLazy/*r*/,
                    type: p[global/*e*/.type] || global/*e*/.type,
                    args: global/*e*/.args
                })
            })
        }
        return require/*t*/
    }

    function s(global/*e*/) {
        for (var require/*t*/, requireDynamic/*n*/ = {}, requireLazy/*r*/ = 0; requireLazy/*r*/ < global/*e*/.length; requireLazy/*r*/++) {
            var module/*i*/ = global/*e*/[requireLazy/*r*/],
                o = Object.assign({}, module/*i*/.exclusive, module/*i*/.inclusive);
            for (var a in o) require/*t*/ = module/*i*/.displayNames[a].current, requireDynamic/*n*/[require/*t*/] = requireDynamic/*n*/[require/*t*/] || {
                componentName: require/*t*/,
                inclusive: 0,
                exclusive: 0,
                render: 0,
                count: 0
            }, module/*i*/.render[a] && (requireDynamic/*n*/[require/*t*/].render += module/*i*/.render[a]), module/*i*/.exclusive[a] && (requireDynamic/*n*/[require/*t*/].exclusive += module/*i*/.exclusive[a]), module/*i*/.inclusive[a] && (requireDynamic/*n*/[require/*t*/].inclusive += module/*i*/.inclusive[a]), module/*i*/.counts[a] && (requireDynamic/*n*/[require/*t*/].count += module/*i*/.counts[a])
        }
        var s = [];
        for (require/*t*/ in requireDynamic/*n*/) requireDynamic/*n*/[require/*t*/].exclusive >= c && s.push(requireDynamic/*n*/[require/*t*/]);
        return s.sort(function(global/*e*/, require/*t*/) {
            return require/*t*/.exclusive - global/*e*/.exclusive
        }), s
    }

    function l(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/, requireLazy/*r*/ = {}, module/*i*/ = 0; module/*i*/ < global/*e*/.length; module/*i*/++) {
            var o, a = global/*e*/[module/*i*/],
                s = Object.assign({}, a.exclusive, a.inclusive);
            require/*t*/ && (o = u(a));
            for (var l in s)
                if (!require/*t*/ || o[l]) {
                    var p = a.displayNames[l];
                    requireDynamic/*n*/ = p.owner + " > " + p.current, requireLazy/*r*/[requireDynamic/*n*/] = requireLazy/*r*/[requireDynamic/*n*/] || {
                        componentName: requireDynamic/*n*/,
                        time: 0,
                        count: 0
                    }, a.inclusive[l] && (requireLazy/*r*/[requireDynamic/*n*/].time += a.inclusive[l]), a.counts[l] && (requireLazy/*r*/[requireDynamic/*n*/].count += a.counts[l])
                }
        }
        var d = [];
        for (requireDynamic/*n*/ in requireLazy/*r*/) requireLazy/*r*/[requireDynamic/*n*/].time >= c && d.push(requireLazy/*r*/[requireDynamic/*n*/]);
        return d.sort(function(global/*e*/, require/*t*/) {
            return require/*t*/.time - global/*e*/.time
        }), d
    }

    function u(global/*e*/) {
        var require/*t*/ = {},
            requireDynamic/*n*/ = Object.keys(global/*e*/.writes),
            requireLazy/*r*/ = Object.assign({}, global/*e*/.exclusive, global/*e*/.inclusive);
        for (var module/*i*/ in requireLazy/*r*/) {
            for (var o = !1, a = 0; a < requireDynamic/*n*/.length; a++)
                if (0 === requireDynamic/*n*/[a].indexOf(module/*i*/)) {
                    o = !0;
                    break
                }!o && global/*e*/.counts[module/*i*/] > 0 && (require/*t*/[module/*i*/] = !0)
        }
        return require/*t*/
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
    module/*i*/.exports = d
});