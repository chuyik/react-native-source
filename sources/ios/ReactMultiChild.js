__d("ReactMultiChild",["ReactComponent","ReactMultiChildUpdateTypes","flattenChildren","instantiateReactComponent","shouldUpdateReactComponent"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        _.push({
            parentID: e,
            parentNode: null,
            type: ReactMultiChildUpdateTypes/*d*/.INSERT_MARKUP,
            markupIndex: y.push(t) - 1,
            textContent: null,
            fromIndex: null,
            toIndex: n
        })
    }

    function a(e, t, n) {
        _.push({
            parentID: e,
            parentNode: null,
            type: ReactMultiChildUpdateTypes/*d*/.MOVE_EXISTING,
            markupIndex: null,
            textContent: null,
            fromIndex: t,
            toIndex: n
        })
    }

    function s(e, t) {
        _.push({
            parentID: e,
            parentNode: null,
            type: ReactMultiChildUpdateTypes/*d*/.REMOVE_NODE,
            markupIndex: null,
            textContent: null,
            fromIndex: t,
            toIndex: null
        })
    }

    function l(e, t) {
        _.push({
            parentID: e,
            parentNode: null,
            type: ReactMultiChildUpdateTypes/*d*/.TEXT_CONTENT,
            markupIndex: null,
            textContent: t,
            fromIndex: null,
            toIndex: null
        })
    }

    function u() {
        _.length && (ReactComponent/*p*/.BackendIDOperations.dangerouslyProcessChildrenUpdates(_, y), c())
    }

    function c() {
        _.length = 0, y.length = 0
    }
    var ReactComponent/*p*/ = t("ReactComponent"),
        ReactMultiChildUpdateTypes/*d*/ = t("ReactMultiChildUpdateTypes"),
        flattenChildren/*h*/ = t("flattenChildren"),
        instantiateReactComponent/*f*/ = t("instantiateReactComponent"),
        shouldUpdateReactComponent/*m*/ = t("shouldUpdateReactComponent"),
        g = 0,
        _ = [],
        y = [],
        v = {
            Mixin: {
                mountChildren: function(e, t) {
                    var n = flattenChildren/*h*/(e),
                        r = [],
                        i = 0;
                    this._renderedChildren = n;
                    for (var o in n) {
                        var a = n[o];
                        if (n.hasOwnProperty(o)) {
                            var s = instantiateReactComponent/*f*/(a, null);
                            n[o] = s;
                            var l = this._rootNodeID + o,
                                u = s.mountComponent(l, t, this._mountDepth + 1);
                            s._mountIndex = i, r.push(u), i++
                        }
                    }
                    return r
                },
                updateTextContent: function(e) {
                    g++;
                    var t = !0;
                    try {
                        var n = this._renderedChildren;
                        for (var r in n) n.hasOwnProperty(r) && this._unmountChildByName(n[r], r);
                        this.setTextContent(e), t = !1
                    } finally {
                        g--, g || (t ? c() : u())
                    }
                },
                updateChildren: function(e, t) {
                    g++;
                    var n = !0;
                    try {
                        this._updateChildren(e, t), n = !1
                    } finally {
                        g--, g || (n ? c() : u())
                    }
                },
                _updateChildren: function(e, t) {
                    var n = flattenChildren/*h*/(e),
                        r = this._renderedChildren;
                    if (n || r) {
                        var i, o = 0,
                            a = 0;
                        for (i in n)
                            if (n.hasOwnProperty(i)) {
                                var s = r && r[i],
                                    l = s && s._currentElement,
                                    u = n[i];
                                if (shouldUpdateReactComponent/*m*/(l, u)) this.moveChild(s, a, o), o = Math.max(s._mountIndex, o), s.receiveComponent(u, t), s._mountIndex = a;
                                else {
                                    s && (o = Math.max(s._mountIndex, o), this._unmountChildByName(s, i));
                                    var c = instantiateReactComponent/*f*/(u, null);
                                    this._mountChildByNameAtIndex(c, i, a, t)
                                }
                                a++
                            }
                        for (i in r) !r.hasOwnProperty(i) || n && n[i] || this._unmountChildByName(r[i], i)
                    }
                },
                unmountChildren: function() {
                    var e = this._renderedChildren;
                    for (var t in e) {
                        var n = e[t];
                        n.unmountComponent && n.unmountComponent()
                    }
                    this._renderedChildren = null
                },
                moveChild: function(e, t, n) {
                    e._mountIndex < n && a(this._rootNodeID, e._mountIndex, t)
                },
                createChild: function(e, t) {
                    o(this._rootNodeID, t, e._mountIndex)
                },
                removeChild: function(e) {
                    s(this._rootNodeID, e._mountIndex)
                },
                setTextContent: function(e) {
                    l(this._rootNodeID, e)
                },
                _mountChildByNameAtIndex: function(e, t, n, r) {
                    var i = this._rootNodeID + t,
                        o = e.mountComponent(i, r, this._mountDepth + 1);
                    e._mountIndex = n, this.createChild(e, o), this._renderedChildren = this._renderedChildren || {}, this._renderedChildren[t] = e
                },
                _unmountChildByName: function(e, t) {
                    this.removeChild(e), e._mountIndex = null, e.unmountComponent(), delete this._renderedChildren[t]
                }
            }
        };
    i.exports = v
});