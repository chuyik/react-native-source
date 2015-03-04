__d("Bundler",["invariant","renderApplication","RCTRenderingPerf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var invariant/*a*/ = require/*t*/("invariant"),
        renderApplication/*s*/ = require/*t*/("renderApplication");
    __DEV__ && require/*t*/("RCTRenderingPerf");
    var l = {};
    o.registerConfig = function(global/*e*/) {
        for (var require/*t*/ = 0; require/*t*/ < global/*e*/.length; ++require/*t*/) global/*e*/[require/*t*/].run ? o.registerRunnable(global/*e*/[require/*t*/].appKey, global/*e*/[require/*t*/].run) : o.registerComponent(global/*e*/[require/*t*/].appKey, global/*e*/[require/*t*/].component)
    }, o.registerComponent = function(global/*e*/, require/*t*/) {
        return l[global/*e*/] = {
            run: function(global/*e*/) {
                return renderApplication/*s*/(require/*t*/(), global/*e*/.initialProps, global/*e*/.rootTag)
            }
        }, global/*e*/
    }, o.registerRunnable = function(global/*e*/, require/*t*/) {
        return l[global/*e*/] = {
            run: require/*t*/
        }, global/*e*/
    }, o.runApplication = function(global/*e*/, require/*t*/) {
        console.log('Running application "' + global/*e*/ + '" with appParams: ', require/*t*/), l[global/*e*/] && l[global/*e*/].run || invariant/*a*/(0, "Application " + global/*e*/ + " has not been registered."), l[global/*e*/].run(require/*t*/)
    }, module/*i*/.exports = o
});