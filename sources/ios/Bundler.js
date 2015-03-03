__d("Bundler",["invariant","renderApplication","RCTRenderingPerf"],function (global/*invariant/*renderApplication/*e*/*/*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var a = require/*t*/("invariant"),
        exports/*s*/ = require/*t*/("renderApplication");
    __DEV__ && require/*t*/("RCTRenderingPerf");
    var l = {};
    o.registerConfig = function(global/*invariant/*renderApplication/*e*/*/*/) {
        for (var require/*t*/ = 0; require/*t*/ < global/*invariant/*renderApplication/*e*/*/*/.length; ++require/*t*/) global/*invariant/*renderApplication/*e*/*/*/[require/*t*/].run ? o.registerRunnable(global/*invariant/*renderApplication/*e*/*/*/[require/*t*/].appKey, global/*invariant/*renderApplication/*e*/*/*/[require/*t*/].run) : RCTRenderingPerf/*o.registerComponent*/(global/*invariant/*renderApplication/*e*/*/*/[require/*t*/].appKey, global/*invariant/*renderApplication/*e*/*/*/[require/*t*/].component)
    }, RCTRenderingPerf/*o.registerComponent*/ = function(global/*invariant/*renderApplication/*e*/*/*/, require/*t*/) {
        return l[global/*invariant/*renderApplication/*e*/*/*/] = {
            run: function(global/*invariant/*renderApplication/*e*/*/*/) {
                return exports/*s*/(require/*t*/(), global/*invariant/*renderApplication/*e*/*/*/.initialProps, global/*invariant/*renderApplication/*e*/*/*/.rootTag)
            }
        }, global/*invariant/*renderApplication/*e*/*/*/
    }, o.registerRunnable = function(global/*invariant/*renderApplication/*e*/*/*/, require/*t*/) {
        return l[global/*invariant/*renderApplication/*e*/*/*/] = {
            run: require/*t*/
        }, global/*invariant/*renderApplication/*e*/*/*/
    }, o.runApplication = function(global/*invariant/*renderApplication/*e*/*/*/, require/*t*/) {
        console.log('Running application "' + global/*invariant/*renderApplication/*e*/*/*/ + '" with appParams: ', require/*t*/), l[global/*invariant/*renderApplication/*e*/*/*/] && l[global/*invariant/*renderApplication/*e*/*/*/].run || a(0, "Application " + global/*invariant/*renderApplication/*e*/*/*/ + " has not been registered."), l[global/*invariant/*renderApplication/*e*/*/*/].run(require/*t*/)
    }, module/*i*/.exports = o
});