__d("EventPluginRegistry",["invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        if (u)
            for (var e in c) {
                var t = c[e],
                    n = u.indexOf(e);
                if (n > -1 || invariant/*l*/(0, "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.", e), !p.plugins[n]) {
                    t.extractEvents || invariant/*l*/(0, "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.", e), p.plugins[n] = t;
                    var r = t.eventTypes;
                    for (var i in r) a(r[i], t, i) || invariant/*l*/(0, "EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.", i, e)
                }
            }
    }

    function a(e, t, n) {
        p.eventNameDispatchConfigs.hasOwnProperty(n) && invariant/*l*/(0, "EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.", n), p.eventNameDispatchConfigs[n] = e;
        var r = e.phasedRegistrationNames;
        if (r) {
            for (var i in r)
                if (r.hasOwnProperty(i)) {
                    var o = r[i];
                    s(o, t, n)
                }
            return !0
        }
        return e.registrationName ? (s(e.registrationName, t, n), !0) : !1
    }

    function s(e, t, n) {
        p.registrationNameModules[e] && invariant/*l*/(0, "EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.", e), p.registrationNameModules[e] = t, p.registrationNameDependencies[e] = t.eventTypes[n].dependencies
    }
    var invariant/*l*/ = t("invariant"),
        u = null,
        c = {},
        p = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            injectEventPluginOrder: function(e) {
                u && invariant/*l*/(0, "EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."), u = Array.prototype.slice.call(e), o()
            },
            injectEventPluginsByName: function(e) {
                var t = !1;
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var r = e[n];
                        c.hasOwnProperty(n) && c[n] === r || (c[n] && invariant/*l*/(0, "EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.", n), c[n] = r, t = !0)
                    }
                t && o()
            },
            getPluginModuleForEvent: function(e) {
                var t = e.dispatchConfig;
                if (t.registrationName) return p.registrationNameModules[t.registrationName] || null;
                for (var n in t.phasedRegistrationNames)
                    if (t.phasedRegistrationNames.hasOwnProperty(n)) {
                        var r = p.registrationNameModules[t.phasedRegistrationNames[n]];
                        if (r) return r
                    }
                return null
            },
            _resetEventPlugins: function() {
                u = null;
                for (var e in c) c.hasOwnProperty(e) && delete c[e];
                p.plugins.length = 0;
                var t = p.eventNameDispatchConfigs;
                for (var n in t) t.hasOwnProperty(n) && delete t[n];
                var r = p.registrationNameModules;
                for (var i in r) r.hasOwnProperty(i) && delete r[i]
            }
        };
    i.exports = p
});