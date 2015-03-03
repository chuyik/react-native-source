__d("ReactLegacyElement",["ReactCurrentOwner","invariant","monitorCodeUse","warning"],function (global/*e*/, require/*exports/*monitorCodeUse/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        if (g._isLegacyCallWarningEnabled) {
            var global/*e*/ = u.current,
                require/*exports/*monitorCodeUse/*t*/*/*/ = global/*e*/ && global/*e*/.constructor ? global/*e*/.constructor.displayName : "";
            require/*exports/*monitorCodeUse/*t*/*/*/ || (require/*exports/*monitorCodeUse/*t*/*/*/ = "Something"), ReactCurrentOwner/*h.hasOwnProperty*/(require/*exports/*monitorCodeUse/*t*/*/*/) || (h[require/*exports/*monitorCodeUse/*t*/*/*/] = !0, invariant/*d*/(!1, require/*exports/*monitorCodeUse/*t*/*/*/ + " is calling a React component directly. Use a factory or JSX instead. See: http://fb.me/react-legacyfactory"), warning/*p*/("react_legacy_factory_call", {
                version: 3,
                name: require/*exports/*monitorCodeUse/*t*/*/*/
            }))
        }
    }

    function a(global/*e*/) {
        var require/*exports/*monitorCodeUse/*t*/*/*/ = global/*e*/.prototype && "function" == typeof global/*e*/.prototype.mountComponent && "function" == typeof global/*e*/.prototype.receiveComponent;
        if (require/*exports/*monitorCodeUse/*t*/*/*/) invariant/*d*/(!1, "Did not expect to get a React class here. Use `Component` instead of `Component.type` or `this.constructor`.");
        else {
            if (!global/*e*/._reactWarnedForThisType) {
                try {
                    global/*e*/._reactWarnedForThisType = !0
                } catch (requireDynamic/*n*/) {}
                warning/*p*/("react_non_component_in_jsx", {
                    version: 3,
                    name: global/*e*/.name
                })
            }
            invariant/*d*/(!1, "This JSX uses a plain function. Only React components are valid in React's JSX transform.")
        }
    }

    function s(global/*e*/) {
        invariant/*d*/(!1, "Do not pass React.DOM." + global/*e*/.type + ' to JSX or createFactory. Use the string "' + global/*e*/ + '" instead.')
    }

    function l(global/*e*/, require/*exports/*monitorCodeUse/*t*/*/*/) {
        if ("function" == typeof require/*exports/*monitorCodeUse/*t*/*/*/)
            for (var requireDynamic/*n*/ in require/*exports/*monitorCodeUse/*t*/*/*/)
                if (require/*exports/*monitorCodeUse/*t*/*/*/.hasOwnProperty(requireDynamic/*n*/)) {
                    var requireLazy/*r*/ = require/*exports/*monitorCodeUse/*t*/*/*/[requireDynamic/*n*/];
                    if ("function" == typeof requireLazy/*r*/) {
                        var module/*i*/ = requireLazy/*r*/.bind(require/*exports/*monitorCodeUse/*t*/*/*/);
                        for (var o in requireLazy/*r*/) requireLazy/*r*/.hasOwnProperty(o) && (module/*i*/[o] = requireLazy/*r*/[o]);
                        global/*e*/[requireDynamic/*n*/] = module/*i*/
                    } else global/*e*/[requireDynamic/*n*/] = requireLazy/*r*/
                }
    }
    var u = require/*exports/*monitorCodeUse/*t*/*/*/("ReactCurrentOwner"),
        c = require/*exports/*monitorCodeUse/*t*/*/*/("invariant"),
        warning/*p*/ = require/*exports/*monitorCodeUse/*t*/*/*/("monitorCodeUse"),
        invariant/*d*/ = require/*exports/*monitorCodeUse/*t*/*/*/("warning"),
        h = {},
        f = {},
        m = {},
        g = {};
    g.wrapCreateFactory = function(global/*e*/) {
        var require/*exports/*monitorCodeUse/*t*/*/*/ = function(require/*exports/*monitorCodeUse/*t*/*/*/) {
            return "function" != typeof require/*exports/*monitorCodeUse/*t*/*/*/ ? global/*e*/(require/*exports/*monitorCodeUse/*t*/*/*/) : require/*exports/*monitorCodeUse/*t*/*/*/.isReactNonLegacyFactory ? (__DEV__ && s(require/*exports/*monitorCodeUse/*t*/*/*/), global/*e*/(require/*exports/*monitorCodeUse/*t*/*/*/.type)) : require/*exports/*monitorCodeUse/*t*/*/*/.isReactLegacyFactory ? global/*e*/(require/*exports/*monitorCodeUse/*t*/*/*/.type) : (__DEV__ && a(require/*exports/*monitorCodeUse/*t*/*/*/), require/*exports/*monitorCodeUse/*t*/*/*/)
        };
        return require/*exports/*monitorCodeUse/*t*/*/*/
    }, g.wrapCreateElement = function(global/*e*/) {
        var require/*exports/*monitorCodeUse/*t*/*/*/ = function(require/*exports/*monitorCodeUse/*t*/*/*/) {
            if ("function" != typeof require/*exports/*monitorCodeUse/*t*/*/*/) return global/*e*/.apply(this, arguments);
            var requireDynamic/*n*/;
            return require/*exports/*monitorCodeUse/*t*/*/*/.isReactNonLegacyFactory ? (__DEV__ && s(require/*exports/*monitorCodeUse/*t*/*/*/), requireDynamic/*n*/ = Array.prototype.slice.call(arguments, 0), requireDynamic/*n*/[0] = require/*exports/*monitorCodeUse/*t*/*/*/.type, global/*e*/.apply(this, requireDynamic/*n*/)) : require/*exports/*monitorCodeUse/*t*/*/*/.isReactLegacyFactory ? (require/*exports/*monitorCodeUse/*t*/*/*/._isMockFunction && (require/*exports/*monitorCodeUse/*t*/*/*/.type._mockedReactClassConstructor = require/*exports/*monitorCodeUse/*t*/*/*/), requireDynamic/*n*/ = Array.prototype.slice.call(arguments, 0), requireDynamic/*n*/[0] = require/*exports/*monitorCodeUse/*t*/*/*/.type, global/*e*/.apply(this, requireDynamic/*n*/)) : (__DEV__ && a(require/*exports/*monitorCodeUse/*t*/*/*/), require/*exports/*monitorCodeUse/*t*/*/*/.apply(null, Array.prototype.slice.call(arguments, 1)))
        };
        return require/*exports/*monitorCodeUse/*t*/*/*/
    }, g.wrapFactory = function(global/*e*/) {
        "function" != typeof global/*e*/ && c(0, "This is suppose to accept a element factory");
        var require/*exports/*monitorCodeUse/*t*/*/*/ = function() {
            return __DEV__ && o(), global/*e*/.apply(this, arguments)
        };
        return l(require/*exports/*monitorCodeUse/*t*/*/*/, global/*e*/.type), require/*exports/*monitorCodeUse/*t*/*/*/.isReactLegacyFactory = f, require/*exports/*monitorCodeUse/*t*/*/*/.type = global/*e*/.type, require/*exports/*monitorCodeUse/*t*/*/*/
    }, g.markNonLegacyFactory = function(global/*e*/) {
        return global/*e*/.isReactNonLegacyFactory = m, global/*e*/
    }, g.isValidFactory = function(global/*e*/) {
        return "function" == typeof global/*e*/ && global/*e*/.isReactLegacyFactory === f
    }, g._isLegacyCallWarningEnabled = !0, module/*i*/.exports = g
});