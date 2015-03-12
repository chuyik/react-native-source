__d("Bundler", ["invariant", "renderApplication", "RCTRenderingPerf"], function (e, t, n, r, i) {
    "use strict";

    function o() {}
    var invariant /*a*/ = t("invariant"),
        renderApplication /*s*/ = t("renderApplication");
    __DEV__ && t("RCTRenderingPerf");
    var l = {};
    o.registerConfig = function (e) {
        for (var t = 0; t < e.length; ++t) e[t].run ? o.registerRunnable(e[t].appKey, e[t].run) : o.registerComponent(e[t].appKey, e[t].component)
    }, o.registerComponent = function (e, t) {
        return l[e] = {
            run: function (params) {
                return renderApplication /*s*/ (t(), params.initialProps, params.rootTag)
            }
        }, e
    }, o.registerRunnable = function (e, t) {
        return l[e] = {
            run: t
        }, e
    }, o.runApplication = function (appName, params) {
        console.log('Running application "' + appName + '" with appParams: ', params),
            l[appName] && l[appName].run || invariant /*a*/ (0, "Application " + appName + " has not been registered."),
            l[appName].run(params)
    }, i.exports = o
});
