__d("EventPluginRegistry",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        if (u)
            for (var global/*e*/ in c) {
                var require/*t*/ = c[global/*e*/],
                    requireDynamic/*n*/ = u.indexOf(global/*e*/);
                if (requireDynamic/*n*/ > -1 || l(0, "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.", global/*e*/), !p.plugins[requireDynamic/*n*/]) {
                    require/*t*/.extractEvents || l(0, "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.", global/*e*/), p.plugins[requireDynamic/*n*/] = require/*t*/;
                    var requireLazy/*r*/ = require/*t*/.eventTypes;
                    for (var module/*i*/ in requireLazy/*r*/) a(requireLazy/*r*/[module/*i*/], require/*t*/, module/*i*/) || l(0, "EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.", module/*i*/, global/*e*/)
                }
            }
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        p.eventNameDispatchConfigs.hasOwnProperty(requireDynamic/*n*/) && l(0, "EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.", requireDynamic/*n*/), p.eventNameDispatchConfigs[requireDynamic/*n*/] = global/*e*/;
        var requireLazy/*r*/ = global/*e*/.phasedRegistrationNames;
        if (requireLazy/*r*/) {
            for (var module/*i*/ in requireLazy/*r*/)
                if (requireLazy/*r*/.hasOwnProperty(module/*i*/)) {
                    var o = requireLazy/*r*/[module/*i*/];
                    s(o, require/*t*/, requireDynamic/*n*/)
                }
            return !0
        }
        return global/*e*/.registrationName ? (s(global/*e*/.registrationName, require/*t*/, requireDynamic/*n*/), !0) : !1
    }

    function s(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        p.registrationNameModules[global/*e*/] && l(0, "EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.", global/*e*/), p.registrationNameModules[global/*e*/] = require/*t*/, p.registrationNameDependencies[global/*e*/] = require/*t*/.eventTypes[requireDynamic/*n*/].dependencies
    }
    var l = require/*t*/("invariant"),
        u = null,
        c = {},
        p = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            injectEventPluginOrder: function(global/*e*/) {
                u && l(0, "EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."), u = Array.prototype.slice.call(global/*e*/), o()
            },
            injectEventPluginsByName: function(global/*e*/) {
                var require/*t*/ = !1;
                for (var requireDynamic/*n*/ in global/*e*/)
                    if (global/*e*/.hasOwnProperty(requireDynamic/*n*/)) {
                        var requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/];
                        c.hasOwnProperty(requireDynamic/*n*/) && c[requireDynamic/*n*/] === requireLazy/*r*/ || (c[requireDynamic/*n*/] && l(0, "EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.", requireDynamic/*n*/), c[requireDynamic/*n*/] = requireLazy/*r*/, require/*t*/ = !0)
                    }
                require/*t*/ && o()
            },
            getPluginModuleForEvent: function(global/*e*/) {
                var require/*t*/ = global/*e*/.dispatchConfig;
                if (require/*t*/.registrationName) return p.registrationNameModules[require/*t*/.registrationName] || null;
                for (var requireDynamic/*n*/ in require/*t*/.phasedRegistrationNames)
                    if (require/*t*/.phasedRegistrationNames.hasOwnProperty(requireDynamic/*n*/)) {
                        var requireLazy/*r*/ = p.registrationNameModules[require/*t*/.phasedRegistrationNames[requireDynamic/*n*/]];
                        if (requireLazy/*r*/) return requireLazy/*r*/
                    }
                return null
            },
            _resetEventPlugins: function() {
                u = null;
                for (var global/*e*/ in c) c.hasOwnProperty(global/*e*/) && delete c[global/*e*/];
                p.plugins.length = 0;
                var require/*t*/ = p.eventNameDispatchConfigs;
                for (var requireDynamic/*n*/ in require/*t*/) require/*t*/.hasOwnProperty(requireDynamic/*n*/) && delete require/*t*/[requireDynamic/*n*/];
                var requireLazy/*r*/ = p.registrationNameModules;
                for (var module/*i*/ in requireLazy/*r*/) requireLazy/*r*/.hasOwnProperty(module/*i*/) && delete requireLazy/*r*/[module/*i*/]
            }
        };
    module/*i*/.exports = p
});