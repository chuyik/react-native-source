__d("DliteProfiler",["emptyFunction","forEachObject","invariant"],function (e, t, n, r, i) {
    "use strict";
    var emptyFunction/*o*/ = t("emptyFunction"),
        forEachObject/*a*/ = t("forEachObject"),
        invariant/*s*/ = t("invariant"),
        l = {},
        u = {},
        c = {
            stop: emptyFunction/*o*/
        },
        p = {
            instrumentMethods: function(e, t) {
                forEachObject/*a*/(t, function(t, n) {
                    e[n] = p.instrument(t, e[n])
                })
            },
            instrument: function(e, t) {
                if (__DEV__) {
                    var n = [],
                        r = function() {
                            var r = l,
                                i = arguments,
                                emptyFunction/*o*/ = function() {
                                    r = t.apply(this, i)
                                }.bind(this);
                            if (n.forEach(function(t) {
                                    emptyFunction/*o*/ = t.bind(this, e, emptyFunction/*o*/)
                                }, this), emptyFunction/*o*/(), r === l) throw new Error("DliteProfiler: Handler did not invoke original function.");
                            return r
                        };
                    return r.attachHandler = function(e) {
                        n.push(e)
                    }, r.detachHandler = function(e) {
                        var t = n.indexOf(e);
                        t >= 0 && n.splice(t, 1)
                    }, r.displayName = "(instrumented " + e + ")", r
                }
                return t.attachHandler = emptyFunction/*o*/, t.detachHandler = emptyFunction/*o*/, t
            },
            instrumentAsync: function(e) {
                return __DEV__ ? (u[e] && u[e].onStart(), {
                    stop: function() {
                        u[e] && u[e].onStop()
                    }
                }) : c
            },
            attachAsyncHandler: function(e, t) {
                __DEV__ && (u.hasOwnProperty(e) && invariant/*s*/(0, "DliteProfiler: Async handler with name `%invariant/*s*/` already exists.", e), u[e] = t)
            },
            detachAsyncHandler: function(e) {
                __DEV__ && (u.hasOwnProperty(e) || invariant/*s*/(0, "DliteProfiler: Async handler with name `%invariant/*s*/` does not exist.", e), delete u[e])
            }
        };
    i.exports = p
});