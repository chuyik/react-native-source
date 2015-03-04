__d("ReactLegacyElement",["ReactCurrentOwner","invariant","monitorCodeUse","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        if (g._isLegacyCallWarningEnabled) {
            var global/*e*/ = ReactCurrentOwner/*u*/.current,
                require/*t*/ = global/*e*/ && global/*e*/.constructor ? global/*e*/.constructor.displayName : "";
            require/*t*/ || (require/*t*/ = "Something"), h.hasOwnProperty(require/*t*/) || (h[require/*t*/] = !0, warning/*d*/(!1, require/*t*/ + " is calling a React component directly. Use a factory or JSX instead. See: http://fb.me/react-legacyfactory"), monitorCodeUse/*p*/("react_legacy_factory_call", {
                version: 3,
                name: require/*t*/
            }))
        }
    }

    function a(global/*e*/) {
        var require/*t*/ = global/*e*/.prototype && "function" == typeof global/*e*/.prototype.mountComponent && "function" == typeof global/*e*/.prototype.receiveComponent;
        if (require/*t*/) warning/*d*/(!1, "Did not expect to get a React class here. Use `Component` instead of `Component.type` or `this.constructor`.");
        else {
            if (!global/*e*/._reactWarnedForThisType) {
                try {
                    global/*e*/._reactWarnedForThisType = !0
                } catch (requireDynamic/*n*/) {}
                monitorCodeUse/*p*/("react_non_component_in_jsx", {
                    version: 3,
                    name: global/*e*/.name
                })
            }
            warning/*d*/(!1, "This JSX uses a plain function. Only React components are valid in React's JSX transform.")
        }
    }

    function s(global/*e*/) {
        warning/*d*/(!1, "Do not pass React.DOM." + global/*e*/.type + ' to JSX or createFactory. Use the string "' + global/*e*/ + '" instead.')
    }

    function l(global/*e*/, require/*t*/) {
        if ("function" == typeof require/*t*/)
            for (var requireDynamic/*n*/ in require/*t*/)
                if (require/*t*/.hasOwnProperty(requireDynamic/*n*/)) {
                    var requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/];
                    if ("function" == typeof requireLazy/*r*/) {
                        var module/*i*/ = requireLazy/*r*/.bind(require/*t*/);
                        for (var o in requireLazy/*r*/) requireLazy/*r*/.hasOwnProperty(o) && (module/*i*/[o] = requireLazy/*r*/[o]);
                        global/*e*/[requireDynamic/*n*/] = module/*i*/
                    } else global/*e*/[requireDynamic/*n*/] = requireLazy/*r*/
                }
    }
    var ReactCurrentOwner/*u*/ = require/*t*/("ReactCurrentOwner"),
        invariant/*c*/ = require/*t*/("invariant"),
        monitorCodeUse/*p*/ = require/*t*/("monitorCodeUse"),
        warning/*d*/ = require/*t*/("warning"),
        h = {},
        f = {},
        m = {},
        g = {};
    g.wrapCreateFactory = function(global/*e*/) {
        var require/*t*/ = function(require/*t*/) {
            return "function" != typeof require/*t*/ ? global/*e*/(require/*t*/) : require/*t*/.isReactNonLegacyFactory ? (__DEV__ && s(require/*t*/), global/*e*/(require/*t*/.type)) : require/*t*/.isReactLegacyFactory ? global/*e*/(require/*t*/.type) : (__DEV__ && a(require/*t*/), require/*t*/)
        };
        return require/*t*/
    }, g.wrapCreateElement = function(global/*e*/) {
        var require/*t*/ = function(require/*t*/) {
            if ("function" != typeof require/*t*/) return global/*e*/.apply(this, arguments);
            var requireDynamic/*n*/;
            return require/*t*/.isReactNonLegacyFactory ? (__DEV__ && s(require/*t*/), requireDynamic/*n*/ = Array.prototype.slice.call(arguments, 0), requireDynamic/*n*/[0] = require/*t*/.type, global/*e*/.apply(this, requireDynamic/*n*/)) : require/*t*/.isReactLegacyFactory ? (require/*t*/._isMockFunction && (require/*t*/.type._mockedReactClassConstructor = require/*t*/), requireDynamic/*n*/ = Array.prototype.slice.call(arguments, 0), requireDynamic/*n*/[0] = require/*t*/.type, global/*e*/.apply(this, requireDynamic/*n*/)) : (__DEV__ && a(require/*t*/), require/*t*/.apply(null, Array.prototype.slice.call(arguments, 1)))
        };
        return require/*t*/
    }, g.wrapFactory = function(global/*e*/) {
        "function" != typeof global/*e*/ && invariant/*c*/(0, "This is suppose to accept a element factory");
        var require/*t*/ = function() {
            return __DEV__ && o(), global/*e*/.apply(this, arguments)
        };
        return l(require/*t*/, global/*e*/.type), require/*t*/.isReactLegacyFactory = f, require/*t*/.type = global/*e*/.type, require/*t*/
    }, g.markNonLegacyFactory = function(global/*e*/) {
        return global/*e*/.isReactNonLegacyFactory = m, global/*e*/
    }, g.isValidFactory = function(global/*e*/) {
        return "function" == typeof global/*e*/ && global/*e*/.isReactLegacyFactory === f
    }, g._isLegacyCallWarningEnabled = !0, module/*i*/.exports = g
});