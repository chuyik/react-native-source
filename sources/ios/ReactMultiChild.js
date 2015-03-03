__d("ReactMultiChild",["ReactComponent","ReactMultiChildUpdateTypes","flattenChildren","instantiateReactComponent","shouldUpdateReactComponent"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*ReactComponent/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*ReactComponent/*n*/*/) {
        _.push({
            parentID: global/*e*/,
            ReactMultiChildUpdateTypes/*parentNode*/: null,
            flattenChildren/*type*/: d.INSERT_MARKUP,
            instantiateReactComponent/*markupIndex*/: y.push(require/*exports/*t*/*/) - 1,
            shouldUpdateReactComponent/*textContent*/: null,
            fromIndex: null,
            toIndex: requireDynamic/*ReactComponent/*n*/*/
        })
    }

    function a(global/*e*/, require/*exports/*t*/*/, requireDynamic/*ReactComponent/*n*/*/) {
        _.push({
            parentID: global/*e*/,
            ReactMultiChildUpdateTypes/*parentNode*/: null,
            flattenChildren/*type*/: d.MOVE_EXISTING,
            instantiateReactComponent/*markupIndex*/: null,
            shouldUpdateReactComponent/*textContent*/: null,
            fromIndex: require/*exports/*t*/*/,
            toIndex: requireDynamic/*ReactComponent/*n*/*/
        })
    }

    function s(global/*e*/, require/*exports/*t*/*/) {
        _.push({
            parentID: global/*e*/,
            ReactMultiChildUpdateTypes/*parentNode*/: null,
            flattenChildren/*type*/: d.REMOVE_NODE,
            instantiateReactComponent/*markupIndex*/: null,
            shouldUpdateReactComponent/*textContent*/: null,
            fromIndex: require/*exports/*t*/*/,
            toIndex: null
        })
    }

    function l(global/*e*/, require/*exports/*t*/*/) {
        _.push({
            parentID: global/*e*/,
            ReactMultiChildUpdateTypes/*parentNode*/: null,
            flattenChildren/*type*/: d.TEXT_CONTENT,
            instantiateReactComponent/*markupIndex*/: null,
            shouldUpdateReactComponent/*textContent*/: require/*exports/*t*/*/,
            fromIndex: null,
            toIndex: null
        })
    }

    function u() {
        _.length && (p.BackendIDOperations.dangerouslyProcessChildrenUpdates(_, y), c())
    }

    function c() {
        _.length = 0, y.length = 0
    }
    var p = require/*exports/*t*/*/("ReactComponent"),
        d = require/*exports/*t*/*/("ReactMultiChildUpdateTypes"),
        h = require/*exports/*t*/*/("flattenChildren"),
        f = require/*exports/*t*/*/("instantiateReactComponent"),
        m = require/*exports/*t*/*/("shouldUpdateReactComponent"),
        g = 0,
        _ = [],
        y = [],
        v = {
            Mixin: {
                mountChildren: function(global/*e*/, require/*exports/*t*/*/) {
                    var requireDynamic/*ReactComponent/*n*/*/ = h(global/*e*/),
                        requireLazy/*r*/ = [],
                        module/*i*/ = 0;
                    this._renderedChildren = requireDynamic/*ReactComponent/*n*/*/;
                    for (var o in requireDynamic/*ReactComponent/*n*/*/) {
                        var a = requireDynamic/*ReactComponent/*n*/*/[o];
                        if (requireDynamic/*ReactComponent/*n*/*/.hasOwnProperty(o)) {
                            var s = f(a, null);
                            requireDynamic/*ReactComponent/*n*/*/[o] = s;
                            var l = this._rootNodeID + o,
                                u = s.mountComponent(l, require/*exports/*t*/*/, this._mountDepth + 1);
                            s._mountIndex = module/*i*/, requireLazy/*r*/.push(u), module/*i*/++
                        }
                    }
                    return requireLazy/*r*/
                },
                updateTextContent: function(global/*e*/) {
                    g++;
                    var require/*exports/*t*/*/ = !0;
                    try {
                        var requireDynamic/*ReactComponent/*n*/*/ = this._renderedChildren;
                        for (var requireLazy/*r*/ in requireDynamic/*ReactComponent/*n*/*/) requireDynamic/*ReactComponent/*n*/*/.hasOwnProperty(requireLazy/*r*/) && this._unmountChildByName(requireDynamic/*ReactComponent/*n*/*/[requireLazy/*r*/], requireLazy/*r*/);
                        this.setTextContent(global/*e*/), require/*exports/*t*/*/ = !1
                    } finally {
                        g--, g || (require/*exports/*t*/*/ ? c() : u())
                    }
                },
                updateChildren: function(global/*e*/, require/*exports/*t*/*/) {
                    g++;
                    var requireDynamic/*ReactComponent/*n*/*/ = !0;
                    try {
                        this._updateChildren(global/*e*/, require/*exports/*t*/*/), requireDynamic/*ReactComponent/*n*/*/ = !1
                    } finally {
                        g--, g || (requireDynamic/*ReactComponent/*n*/*/ ? c() : u())
                    }
                },
                _updateChildren: function(global/*e*/, require/*exports/*t*/*/) {
                    var requireDynamic/*ReactComponent/*n*/*/ = h(global/*e*/),
                        requireLazy/*r*/ = this._renderedChildren;
                    if (requireDynamic/*ReactComponent/*n*/*/ || requireLazy/*r*/) {
                        var module/*i*/, o = 0,
                            a = 0;
                        for (module/*i*/ in requireDynamic/*ReactComponent/*n*/*/)
                            if (requireDynamic/*ReactComponent/*n*/*/.hasOwnProperty(module/*i*/)) {
                                var s = requireLazy/*r*/ && requireLazy/*r*/[module/*i*/],
                                    l = s && s._currentElement,
                                    u = requireDynamic/*ReactComponent/*n*/*/[module/*i*/];
                                if (m(l, u)) this.moveChild(s, a, o), o = Math.max(s._mountIndex, o), s.receiveComponent(u, require/*exports/*t*/*/), s._mountIndex = a;
                                else {
                                    s && (o = Math.max(s._mountIndex, o), this._unmountChildByName(s, module/*i*/));
                                    var c = f(u, null);
                                    this._mountChildByNameAtIndex(c, module/*i*/, a, require/*exports/*t*/*/)
                                }
                                a++
                            }
                        for (module/*i*/ in requireLazy/*r*/) !requireLazy/*r*/.hasOwnProperty(module/*i*/) || requireDynamic/*ReactComponent/*n*/*/ && requireDynamic/*ReactComponent/*n*/*/[module/*i*/] || this._unmountChildByName(requireLazy/*r*/[module/*i*/], module/*i*/)
                    }
                },
                unmountChildren: function() {
                    var global/*e*/ = this._renderedChildren;
                    for (var require/*exports/*t*/*/ in global/*e*/) {
                        var requireDynamic/*ReactComponent/*n*/*/ = global/*e*/[require/*exports/*t*/*/];
                        requireDynamic/*ReactComponent/*n*/*/.unmountComponent && requireDynamic/*ReactComponent/*n*/*/.unmountComponent()
                    }
                    this._renderedChildren = null
                },
                moveChild: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*ReactComponent/*n*/*/) {
                    global/*e*/._mountIndex < requireDynamic/*ReactComponent/*n*/*/ && a(this._rootNodeID, global/*e*/._mountIndex, require/*exports/*t*/*/)
                },
                createChild: function(global/*e*/, require/*exports/*t*/*/) {
                    o(this._rootNodeID, require/*exports/*t*/*/, global/*e*/._mountIndex)
                },
                removeChild: function(global/*e*/) {
                    s(this._rootNodeID, global/*e*/._mountIndex)
                },
                setTextContent: function(global/*e*/) {
                    l(this._rootNodeID, global/*e*/)
                },
                _mountChildByNameAtIndex: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*ReactComponent/*n*/*/, requireLazy/*r*/) {
                    var module/*i*/ = this._rootNodeID + require/*exports/*t*/*/,
                        o = global/*e*/.mountComponent(module/*i*/, requireLazy/*r*/, this._mountDepth + 1);
                    global/*e*/._mountIndex = requireDynamic/*ReactComponent/*n*/*/, this.createChild(global/*e*/, o), this._renderedChildren = this._renderedChildren || {}, this._renderedChildren[require/*exports/*t*/*/] = global/*e*/
                },
                _unmountChildByName: function(global/*e*/, require/*exports/*t*/*/) {
                    this.removeChild(global/*e*/), global/*e*/._mountIndex = null, global/*e*/.unmountComponent(), delete this._renderedChildren[require/*exports/*t*/*/]
                }
            }
        };
    module/*i*/.exports = v
});