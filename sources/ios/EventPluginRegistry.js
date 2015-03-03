__d("EventPluginRegistry",["invariant"],function (global/*invariant/*e*/*/, require/*t*/, requireDynamic/*exports/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        if (u)
            for (var global/*invariant/*e*/*/ in c) {
                var require/*t*/ = c[global/*invariant/*e*/*/],
                    requireDynamic/*exports/*n*/*/ = u.indexOf(global/*invariant/*e*/*/);
                if (requireDynamic/*exports/*n*/*/ > -1 || l(0, "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.", global/*invariant/*e*/*/), !p.plugins[requireDynamic/*exports/*n*/*/]) {
                    require/*t*/.extractEvents || l(0, "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.", global/*invariant/*e*/*/), p.plugins[requireDynamic/*exports/*n*/*/] = require/*t*/;
                    var requireLazy/*r*/ = require/*t*/.eventTypes;
                    for (var module/*i*/ in requireLazy/*r*/) a(requireLazy/*r*/[module/*i*/], require/*t*/, module/*i*/) || l(0, "EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.", module/*i*/, global/*invariant/*e*/*/)
                }
            }
    }

    function a(global/*invariant/*e*/*/, require/*t*/, requireDynamic/*exports/*n*/*/) {
        p.eventNameDispatchConfigs.hasOwnProperty(requireDynamic/*exports/*n*/*/) && l(0, "EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.", requireDynamic/*exports/*n*/*/), p.eventNameDispatchConfigs[requireDynamic/*exports/*n*/*/] = global/*invariant/*e*/*/;
        var requireLazy/*r*/ = global/*invariant/*e*/*/.phasedRegistrationNames;
        if (requireLazy/*r*/) {
            for (var module/*i*/ in requireLazy/*r*/)
                if (requireLazy/*r*/.hasOwnProperty(module/*i*/)) {
                    var o = requireLazy/*r*/[module/*i*/];
                    s(o, require/*t*/, requireDynamic/*exports/*n*/*/)
                }
            return !0
        }
        return global/*invariant/*e*/*/.registrationName ? (s(global/*invariant/*e*/*/.registrationName, require/*t*/, requireDynamic/*exports/*n*/*/), !0) : !1
    }

    function s(global/*invariant/*e*/*/, require/*t*/, requireDynamic/*exports/*n*/*/) {
        p.registrationNameModules[global/*invariant/*e*/*/] && l(0, "EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.", global/*invariant/*e*/*/), p.registrationNameModules[global/*invariant/*e*/*/] = require/*t*/, p.registrationNameDependencies[global/*invariant/*e*/*/] = require/*t*/.eventTypes[requireDynamic/*exports/*n*/*/].dependencies
    }
    var l = require/*t*/("invariant"),
        u = null,
        c = {},
        p = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            injectEventPluginOrder: function(global/*invariant/*e*/*/) {
                u && l(0, "EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."), u = Array.prototype.slice.call(global/*invariant/*e*/*/), o()
            },
            injectEventPluginsByName: function(global/*invariant/*e*/*/) {
                var require/*t*/ = !1;
                for (var requireDynamic/*exports/*n*/*/ in global/*invariant/*e*/*/)
                    if (global/*invariant/*e*/*/.hasOwnProperty(requireDynamic/*exports/*n*/*/)) {
                        var requireLazy/*r*/ = global/*invariant/*e*/*/[requireDynamic/*exports/*n*/*/];
                        c.hasOwnProperty(requireDynamic/*exports/*n*/*/) && c[requireDynamic/*exports/*n*/*/] === requireLazy/*r*/ || (c[requireDynamic/*exports/*n*/*/] && l(0, "EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.", requireDynamic/*exports/*n*/*/), c[requireDynamic/*exports/*n*/*/] = requireLazy/*r*/, require/*t*/ = !0)
                    }
                require/*t*/ && o()
            },
            getPluginModuleForEvent: function(global/*invariant/*e*/*/) {
                var require/*t*/ = global/*invariant/*e*/*/.dispatchConfig;
                if (require/*t*/.registrationName) return p.registrationNameModules[require/*t*/.registrationName] || null;
                for (var requireDynamic/*exports/*n*/*/ in require/*t*/.phasedRegistrationNames)
                    if (require/*t*/.phasedRegistrationNames.hasOwnProperty(requireDynamic/*exports/*n*/*/)) {
                        var requireLazy/*r*/ = p.registrationNameModules[require/*t*/.phasedRegistrationNames[requireDynamic/*exports/*n*/*/]];
                        if (requireLazy/*r*/) return requireLazy/*r*/
                    }
                return null
            },
            _resetEventPlugins: function() {
                u = null;
                for (var global/*invariant/*e*/*/ in c) c.hasOwnProperty(global/*invariant/*e*/*/) && delete c[global/*invariant/*e*/*/];
                p.plugins.length = 0;
                var require/*t*/ = p.eventNameDispatchConfigs;
                for (var requireDynamic/*exports/*n*/*/ in require/*t*/) require/*t*/.hasOwnProperty(requireDynamic/*exports/*n*/*/) && delete require/*t*/[requireDynamic/*exports/*n*/*/];
                var requireLazy/*r*/ = p.registrationNameModules;
                for (var module/*i*/ in requireLazy/*r*/) requireLazy/*r*/.hasOwnProperty(module/*i*/) && delete requireLazy/*r*/[module/*i*/]
            }
        };
    module/*i*/.exports = p
});