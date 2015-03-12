__d("ReactMount",["DOMProperty","ReactBrowserEventEmitter","ReactCurrentOwner","ReactElement","ReactLegacyElement","ReactInstanceHandles","ReactPerf","containsNode","deprecated","getReactRootElementInContainer","instantiateReactComponent","invariant","shouldUpdateReactComponent","warning"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = getReactRootElementInContainer/*w*/(e);
        return t && G.getID(t)
    }

    function a(e) {
        var t = s(e);
        if (t)
            if (F.hasOwnProperty(t)) {
                var n = F[t];
                n !== e && (c(n, t) && invariant/*E*/(0, "ReactMount: Two valid but unequal nodes with the same `%s`: %s", I, t), F[t] = e)
            } else F[t] = e;
        return t
    }

    function s(e) {
        return e && e.getAttribute && e.getAttribute(I) || ""
    }

    function l(e, t) {
        var n = s(e);
        n !== t && delete F[n], e.setAttribute(I, t), F[t] = e
    }

    function u(e) {
        return F.hasOwnProperty(e) && c(F[e], e) || (F[e] = G.findReactNodeByID(e)), F[e]
    }

    function c(e, t) {
        if (e) {
            s(e) !== t && invariant/*E*/(0, "ReactMount: Unexpected modification of `%s`", I);
            var n = G.findReactContainerForID(t);
            if (n && containsNode/*b*/(n, e)) return !0
        }
        return !1
    }

    function p(e) {
        delete F[e]
    }

    function d(e) {
        var t = F[e];
        return t && c(t, e) ? void(N = t) : !1
    }

    function h(e) {
        N = null, ReactInstanceHandles/*v*/.traverseAncestors(e, d);
        var t = N;
        return N = null, t
    }
    var DOMProperty/*f*/ = t("DOMProperty"),
        ReactBrowserEventEmitter/*m*/ = t("ReactBrowserEventEmitter"),
        ReactCurrentOwner/*g*/ = t("ReactCurrentOwner"),
        ReactElement/*_*/ = t("ReactElement"),
        ReactLegacyElement/*y*/ = t("ReactLegacyElement"),
        ReactInstanceHandles/*v*/ = t("ReactInstanceHandles"),
        ReactPerf/*S*/ = t("ReactPerf"),
        containsNode/*b*/ = t("containsNode"),
        deprecated/*R*/ = t("deprecated"),
        getReactRootElementInContainer/*w*/ = t("getReactRootElementInContainer"),
        instantiateReactComponent/*C*/ = t("instantiateReactComponent"),
        invariant/*E*/ = t("invariant"),
        shouldUpdateReactComponent/*D*/ = t("shouldUpdateReactComponent"),
        warning/*T*/ = t("warning"),
        x = ReactLegacyElement/*y*/.wrapCreateElement(ReactElement/*_*/.createElement),
        P = ReactInstanceHandles/*v*/.SEPARATOR,
        I = DOMProperty/*f*/.ID_ATTRIBUTE_NAME,
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
            scrollMonitor: function(e, t) {
                t()
            },
            _updateRootComponent: function(e, t, n, r) {
                var i = t.props;
                return G.scrollMonitor(n, function() {
                    e.replaceProps(i, r)
                }), __DEV__ && (k[o(n)] = getReactRootElementInContainer/*w*/(n)), e
            },
            _registerComponent: function(e, t) {
                (!t || t.nodeType !== L && t.nodeType !== M) && invariant/*E*/(0, "_registerComponent(...): Target container is not a DOM element."), ReactBrowserEventEmitter/*m*/.ensureScrollValueMonitoring();
                var n = G.registerContainer(t);
                return Q[n] = e, n
            },
            _renderNewRootComponent: ReactPerf/*S*/.measure("ReactMount", "_renderNewRootComponent", function(e, t, n) {
                warning/*T*/(null == ReactCurrentOwner/*g*/.current, "_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.");
                var r = instantiateReactComponent/*C*/(e, null),
                    i = G._registerComponent(r, t);
                return r.mountComponentIntoNode(i, t, n), __DEV__ && (k[i] = getReactRootElementInContainer/*w*/(t)), r
            }),
            render: function(e, t, n) {
                ReactElement/*_*/.isValidElement(e) || invariant/*E*/(0, "renderComponent(): Invalid component element.%s", "string" == typeof e ? " Instead of passing an element string, make sure to instantiate it by passing it to React.createElement." : ReactLegacyElement/*y*/.isValidFactory(e) ? " Instead of passing a component class, make sure to instantiate it by passing it to React.createElement." : "undefined" != typeof e.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
                var r = Q[o(t)];
                if (r) {
                    var i = r._currentElement;
                    if (shouldUpdateReactComponent/*D*/(i, e)) return G._updateRootComponent(r, e, t, n);
                    G.unmountComponentAtNode(t)
                }
                var a = getReactRootElementInContainer/*w*/(t),
                    s = a && G.isRenderedByReact(a),
                    l = s && !r,
                    u = G._renderNewRootComponent(e, t, l);
                return n && n.call(u), u
            },
            constructAndRenderComponent: function(e, t, n) {
                var r = x(e, t);
                return G.render(r, n)
            },
            constructAndRenderComponentByID: function(e, t, n) {
                var r = document.getElementById(n);
                return r || invariant/*E*/(0, 'Tried to get element with id of "%s" but it is not present on the page.', n), G.constructAndRenderComponent(e, t, r)
            },
            registerContainer: function(e) {
                var t = o(e);
                return t && (t = ReactInstanceHandles/*v*/.getReactRootIDFromNodeID(t)), t || (t = ReactInstanceHandles/*v*/.createReactRootID()), A[t] = e, t
            },
            unmountComponentAtNode: function(e) {
                warning/*T*/(null == ReactCurrentOwner/*g*/.current, "unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.");
                var t = o(e),
                    n = Q[t];
                return n ? (G.unmountComponentFromNode(n, e), delete Q[t], delete A[t], __DEV__ && delete k[t], !0) : !1
            },
            unmountComponentFromNode: function(e, t) {
                for (e.unmountComponent(), t.nodeType === M && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild)
            },
            findReactContainerForID: function(e) {
                var t = ReactInstanceHandles/*v*/.getReactRootIDFromNodeID(e),
                    n = A[t];
                if (__DEV__) {
                    var r = k[t];
                    if (r && r.parentNode !== n) {
                        s(r) !== t && invariant/*E*/(0, "ReactMount: Root element ID differed from reactRootID.");
                        var i = n.firstChild;
                        i && t === s(i) ? k[t] = i : console.warn("ReactMount: Root element has been removed from its original container. New container:", r.parentNode)
                    }
                }
                return n
            },
            findReactNodeByID: function(e) {
                var t = G.findReactContainerForID(e);
                return G.findComponentRoot(t, e)
            },
            isRenderedByReact: function(e) {
                if (1 !== e.nodeType) return !1;
                var t = G.getID(e);
                return t ? t.charAt(0) === P : !1
            },
            getFirstReactDOM: function(e) {
                for (var t = e; t && t.parentNode !== t;) {
                    if (G.isRenderedByReact(t)) return t;
                    t = t.parentNode
                }
                return null
            },
            findComponentRoot: function(e, t) {
                var n = O,
                    r = 0,
                    i = h(t) || e;
                for (n[0] = i.firstChild, n.length = 1; r < n.length;) {
                    for (var o, a = n[r++]; a;) {
                        var s = G.getID(a);
                        s ? t === s ? o = a : ReactInstanceHandles/*v*/.isAncestorIDOf(s, t) && (n.length = r = 0, n.push(a.firstChild)) : n.push(a.firstChild), a = a.nextSibling
                    }
                    if (o) return n.length = 0, o
                }
                n.length = 0, invariant/*E*/(0, "findComponentRoot(..., %s): Unable to find element. This probably means the DOM was unexpectedly mutated (e.ReactCurrentOwner/*g*/., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.", t, G.getID(e))
            },
            getReactRootID: o,
            getID: a,
            setID: l,
            getNode: u,
            purgeID: p
        };
    G.renderComponent = deprecated/*R*/("ReactMount", "renderComponent", "render", this, G.render), i.exports = G
});