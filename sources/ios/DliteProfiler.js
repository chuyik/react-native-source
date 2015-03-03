__d("DliteProfiler",["emptyFunction","forEachObject","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("emptyFunction"),
        a = require/*t*/("forEachObject"),
        s = require/*t*/("invariant"),
        l = {},
        u = {},
        c = {
            stop: o
        },
        p = {
            instrumentMethods: function(global/*e*/, require/*t*/) {
                a(require/*t*/, function(require/*t*/, requireDynamic/*n*/) {
                    global/*e*/[requireDynamic/*n*/] = p.instrument(require/*t*/, global/*e*/[requireDynamic/*n*/])
                })
            },
            instrument: function(global/*e*/, require/*t*/) {
                if (__DEV__) {
                    var requireDynamic/*n*/ = [],
                        requireLazy/*r*/ = function() {
                            var requireLazy/*r*/ = l,
                                module/*i*/ = arguments,
                                o = function() {
                                    requireLazy/*r*/ = require/*t*/.apply(this, module/*i*/)
                                }.bind(this);
                            if (requireDynamic/*n*/.forEach(function(require/*t*/) {
                                    o = require/*t*/.bind(this, global/*e*/, o)
                                }, this), o(), requireLazy/*r*/ === l) throw new Error("DliteProfiler: Handler did not invoke original function.");
                            return requireLazy/*r*/
                        };
                    return requireLazy/*r*/.attachHandler = function(global/*e*/) {
                        requireDynamic/*n*/.push(global/*e*/)
                    }, requireLazy/*r*/.detachHandler = function(global/*e*/) {
                        var require/*t*/ = requireDynamic/*n*/.indexOf(global/*e*/);
                        require/*t*/ >= 0 && requireDynamic/*n*/.splice(require/*t*/, 1)
                    }, requireLazy/*r*/.displayName = "(instrumented " + global/*e*/ + ")", requireLazy/*r*/
                }
                return require/*t*/.attachHandler = o, require/*t*/.detachHandler = o, require/*t*/
            },
            instrumentAsync: function(global/*e*/) {
                return __DEV__ ? (u[global/*e*/] && u[global/*e*/].onStart(), {
                    stop: function() {
                        u[global/*e*/] && u[global/*e*/].onStop()
                    }
                }) : c
            },
            attachAsyncHandler: function(global/*e*/, require/*t*/) {
                __DEV__ && (u.hasOwnProperty(global/*e*/) && s(0, "DliteProfiler: Async handler with name `%s` already exists.", global/*e*/), u[global/*e*/] = require/*t*/)
            },
            detachAsyncHandler: function(global/*e*/) {
                __DEV__ && (u.hasOwnProperty(global/*e*/) || s(0, "DliteProfiler: Async handler with name `%s` does not exist.", global/*e*/), delete u[global/*e*/])
            }
        };
    module/*i*/.exports = p
});