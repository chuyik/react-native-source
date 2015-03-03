__d("ReactMount",["DOMProperty","ReactBrowserEventEmitter","ReactCurrentOwner","ReactElement","ReactLegacyElement","ReactInstanceHandles","ReactPerf","containsNode","deprecated","getReactRootElementInContainer","instantiateReactComponent","invariant","shouldUpdateReactComponent","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = w(global/*e*/);
        return require/*t*/ && G.getID(require/*t*/)
    }

    function a(global/*e*/) {
        var require/*t*/ = s(global/*e*/);
        if (require/*t*/)
            if (F.hasOwnProperty(require/*t*/)) {
                var requireDynamic/*n*/ = F[require/*t*/];
                requireDynamic/*n*/ !== global/*e*/ && (c(requireDynamic/*n*/, require/*t*/) && E(0, "ReactMount: Two valid but unequal nodes with the same `%s`: %s", I, require/*t*/), F[require/*t*/] = global/*e*/)
            } else F[require/*t*/] = global/*e*/;
        return require/*t*/
    }

    function s(global/*e*/) {
        return global/*e*/ && global/*e*/.getAttribute && global/*e*/.getAttribute(I) || ""
    }

    function l(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = s(global/*e*/);
        requireDynamic/*n*/ !== require/*t*/ && delete F[requireDynamic/*n*/], global/*e*/.setAttribute(I, require/*t*/), F[require/*t*/] = global/*e*/
    }

    function u(global/*e*/) {
        return F.hasOwnProperty(global/*e*/) && c(F[global/*e*/], global/*e*/) || (F[global/*e*/] = G.findReactNodeByID(global/*e*/)), F[global/*e*/]
    }

    function c(global/*e*/, require/*t*/) {
        if (global/*e*/) {
            s(global/*e*/) !== require/*t*/ && E(0, "ReactMount: Unexpected modification of `%s`", I);
            var requireDynamic/*n*/ = G.findReactContainerForID(require/*t*/);
            if (requireDynamic/*n*/ && b(requireDynamic/*n*/, global/*e*/)) return !0
        }
        return !1
    }

    function p(global/*e*/) {
        delete F[global/*e*/]
    }

    function d(global/*e*/) {
        var require/*t*/ = F[global/*e*/];
        return require/*t*/ && c(require/*t*/, global/*e*/) ? void(N = require/*t*/) : !1
    }

    function h(global/*e*/) {
        N = null, v.traverseAncestors(global/*e*/, d);
        var require/*t*/ = N;
        return N = null, require/*t*/
    }
    var f = require/*t*/("DOMProperty"),
        m = require/*t*/("ReactBrowserEventEmitter"),
        g = require/*t*/("ReactCurrentOwner"),
        _ = require/*t*/("ReactElement"),
        y = require/*t*/("ReactLegacyElement"),
        v = require/*t*/("ReactInstanceHandles"),
        S = require/*t*/("ReactPerf"),
        b = require/*t*/("containsNode"),
        R = require/*t*/("deprecated"),
        w = require/*t*/("getReactRootElementInContainer"),
        C = require/*t*/("instantiateReactComponent"),
        E = require/*t*/("invariant"),
        D = require/*t*/("shouldUpdateReactComponent"),
        T = require/*t*/("warning"),
        x = y.wrapCreateElement(_.createElement),
        P = v.SEPARATOR,
        I = f.ID_ATTRIBUTE_NAME,
        F = {},
        L = 1,
        M = 9,
        Q = {},
        A = {};
    if (__DEV__) var k = {};
    var O = [],
        N = null,
        G = {
            _instancesByReactRootID: Q,
            scrollMonitor: function(global/*e*/, require/*t*/) {
                require/*t*/()
            },
            _updateRootComponent: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = require/*t*/.props;
                return G.scrollMonitor(requireDynamic/*n*/, function() {
                    global/*e*/.replaceProps(module/*i*/, requireLazy/*r*/)
                }), __DEV__ && (k[o(requireDynamic/*n*/)] = w(requireDynamic/*n*/)), global/*e*/
            },
            _registerComponent: function(global/*e*/, require/*t*/) {
                (!require/*t*/ || require/*t*/.nodeType !== L && require/*t*/.nodeType !== M) && E(0, "_registerComponent(...): Target container is not a DOM element."), m.ensureScrollValueMonitoring();
                var requireDynamic/*n*/ = G.registerContainer(require/*t*/);
                return Q[requireDynamic/*n*/] = global/*e*/, requireDynamic/*n*/
            },
            _renderNewRootComponent: S.measure("ReactMount", "_renderNewRootComponent", function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                T(null == g.current, "_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.");
                var requireLazy/*r*/ = C(global/*e*/, null),
                    module/*i*/ = G._registerComponent(requireLazy/*r*/, require/*t*/);
                return requireLazy/*r*/.mountComponentIntoNode(module/*i*/, require/*t*/, requireDynamic/*n*/), __DEV__ && (k[module/*i*/] = w(require/*t*/)), requireLazy/*r*/
            }),
            render: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                _.isValidElement(global/*e*/) || E(0, "renderComponent(): Invalid component element.%s", "string" == typeof global/*e*/ ? " Instead of passing an element string, make sure to instantiate it by passing it to React.createElement." : y.isValidFactory(global/*e*/) ? " Instead of passing a component class, make sure to instantiate it by passing it to React.createElement." : "undefined" != typeof global/*e*/.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
                var requireLazy/*r*/ = Q[o(require/*t*/)];
                if (requireLazy/*r*/) {
                    var module/*i*/ = requireLazy/*r*/._currentElement;
                    if (D(module/*i*/, global/*e*/)) return G._updateRootComponent(requireLazy/*r*/, global/*e*/, require/*t*/, requireDynamic/*n*/);
                    G.unmountComponentAtNode(require/*t*/)
                }
                var a = w(require/*t*/),
                    s = a && G.isRenderedByReact(a),
                    l = s && !requireLazy/*r*/,
                    u = G._renderNewRootComponent(global/*e*/, require/*t*/, l);
                return requireDynamic/*n*/ && requireDynamic/*n*/.call(u), u
            },
            constructAndRenderComponent: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = x(global/*e*/, require/*t*/);
                return G.render(requireLazy/*r*/, requireDynamic/*n*/)
            },
            constructAndRenderComponentByID: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = document.getElementById(requireDynamic/*n*/);
                return requireLazy/*r*/ || E(0, 'Tried to get element with id of "%s" but it is not present on the page.', requireDynamic/*n*/), G.constructAndRenderComponent(global/*e*/, require/*t*/, requireLazy/*r*/)
            },
            registerContainer: function(global/*e*/) {
                var require/*t*/ = o(global/*e*/);
                return require/*t*/ && (require/*t*/ = v.getReactRootIDFromNodeID(require/*t*/)), require/*t*/ || (require/*t*/ = v.createReactRootID()), A[require/*t*/] = global/*e*/, require/*t*/
            },
            unmountComponentAtNode: function(global/*e*/) {
                T(null == g.current, "unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.");
                var require/*t*/ = o(global/*e*/),
                    requireDynamic/*n*/ = Q[require/*t*/];
                return requireDynamic/*n*/ ? (G.unmountComponentFromNode(requireDynamic/*n*/, global/*e*/), delete Q[require/*t*/], delete A[require/*t*/], __DEV__ && delete k[require/*t*/], !0) : !1
            },
            unmountComponentFromNode: function(global/*e*/, require/*t*/) {
                for (global/*e*/.unmountComponent(), require/*t*/.nodeType === M && (require/*t*/ = require/*t*/.documentElement); require/*t*/.lastChild;) require/*t*/.removeChild(require/*t*/.lastChild)
            },
            findReactContainerForID: function(global/*e*/) {
                var require/*t*/ = v.getReactRootIDFromNodeID(global/*e*/),
                    requireDynamic/*n*/ = A[require/*t*/];
                if (__DEV__) {
                    var requireLazy/*r*/ = k[require/*t*/];
                    if (requireLazy/*r*/ && requireLazy/*r*/.parentNode !== requireDynamic/*n*/) {
                        s(requireLazy/*r*/) !== require/*t*/ && E(0, "ReactMount: Root element ID differed from reactRootID.");
                        var module/*i*/ = requireDynamic/*n*/.firstChild;
                        module/*i*/ && require/*t*/ === s(module/*i*/) ? k[require/*t*/] = module/*i*/ : console.warn("ReactMount: Root element has been removed from its original container. New container:", requireLazy/*r*/.parentNode)
                    }
                }
                return requireDynamic/*n*/
            },
            findReactNodeByID: function(global/*e*/) {
                var require/*t*/ = G.findReactContainerForID(global/*e*/);
                return G.findComponentRoot(require/*t*/, global/*e*/)
            },
            isRenderedByReact: function(global/*e*/) {
                if (1 !== global/*e*/.nodeType) return !1;
                var require/*t*/ = G.getID(global/*e*/);
                return require/*t*/ ? require/*t*/.charAt(0) === P : !1
            },
            getFirstReactDOM: function(global/*e*/) {
                for (var require/*t*/ = global/*e*/; require/*t*/ && require/*t*/.parentNode !== require/*t*/;) {
                    if (G.isRenderedByReact(require/*t*/)) return require/*t*/;
                    require/*t*/ = require/*t*/.parentNode
                }
                return null
            },
            findComponentRoot: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = O,
                    requireLazy/*r*/ = 0,
                    module/*i*/ = h(require/*t*/) || global/*e*/;
                for (requireDynamic/*n*/[0] = module/*i*/.firstChild, requireDynamic/*n*/.length = 1; requireLazy/*r*/ < requireDynamic/*n*/.length;) {
                    for (var o, a = requireDynamic/*n*/[requireLazy/*r*/++]; a;) {
                        var s = G.getID(a);
                        s ? require/*t*/ === s ? o = a : v.isAncestorIDOf(s, require/*t*/) && (requireDynamic/*n*/.length = requireLazy/*r*/ = 0, requireDynamic/*n*/.push(a.firstChild)) : requireDynamic/*n*/.push(a.firstChild), a = a.nextSibling
                    }
                    if (o) return requireDynamic/*n*/.length = 0, o
                }
                requireDynamic/*n*/.length = 0, E(0, "findComponentRoot(..., %s): Unable to find element. This probably means the DOM was unexpectedly mutated (global/*e*/.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.", require/*t*/, G.getID(global/*e*/))
            },
            getReactRootID: o,
            getID: a,
            setID: l,
            getNode: u,
            purgeID: p
        };
    G.renderComponent = R("ReactMount", "renderComponent", "render", this, G.render), module/*i*/.exports = G
});