__d("ReactMultiChild",["ReactComponent","ReactMultiChildUpdateTypes","flattenChildren","instantiateReactComponent","shouldUpdateReactComponent"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        _.push({
            parentID: global/*e*/,
            parentNode: null,
            type: ReactMultiChildUpdateTypes/*d*/.INSERT_MARKUP,
            markupIndex: y.push(require/*t*/) - 1,
            textContent: null,
            fromIndex: null,
            toIndex: requireDynamic/*n*/
        })
    }

    function a(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        _.push({
            parentID: global/*e*/,
            parentNode: null,
            type: ReactMultiChildUpdateTypes/*d*/.MOVE_EXISTING,
            markupIndex: null,
            textContent: null,
            fromIndex: require/*t*/,
            toIndex: requireDynamic/*n*/
        })
    }

    function s(global/*e*/, require/*t*/) {
        _.push({
            parentID: global/*e*/,
            parentNode: null,
            type: ReactMultiChildUpdateTypes/*d*/.REMOVE_NODE,
            markupIndex: null,
            textContent: null,
            fromIndex: require/*t*/,
            toIndex: null
        })
    }

    function l(global/*e*/, require/*t*/) {
        _.push({
            parentID: global/*e*/,
            parentNode: null,
            type: ReactMultiChildUpdateTypes/*d*/.TEXT_CONTENT,
            markupIndex: null,
            textContent: require/*t*/,
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
    var ReactComponent/*p*/ = require/*t*/("ReactComponent"),
        ReactMultiChildUpdateTypes/*d*/ = require/*t*/("ReactMultiChildUpdateTypes"),
        flattenChildren/*h*/ = require/*t*/("flattenChildren"),
        instantiateReactComponent/*f*/ = require/*t*/("instantiateReactComponent"),
        shouldUpdateReactComponent/*m*/ = require/*t*/("shouldUpdateReactComponent"),
        g = 0,
        _ = [],
        y = [],
        v = {
            Mixin: {
                mountChildren: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = flattenChildren/*h*/(global/*e*/),
                        requireLazy/*r*/ = [],
                        module/*i*/ = 0;
                    this._renderedChildren = requireDynamic/*n*/;
                    for (var o in requireDynamic/*n*/) {
                        var a = requireDynamic/*n*/[o];
                        if (requireDynamic/*n*/.hasOwnProperty(o)) {
                            var s = instantiateReactComponent/*f*/(a, null);
                            requireDynamic/*n*/[o] = s;
                            var l = this._rootNodeID + o,
                                u = s.mountComponent(l, require/*t*/, this._mountDepth + 1);
                            s._mountIndex = module/*i*/, requireLazy/*r*/.push(u), module/*i*/++
                        }
                    }
                    return requireLazy/*r*/
                },
                updateTextContent: function(global/*e*/) {
                    g++;
                    var require/*t*/ = !0;
                    try {
                        var requireDynamic/*n*/ = this._renderedChildren;
                        for (var requireLazy/*r*/ in requireDynamic/*n*/) requireDynamic/*n*/.hasOwnProperty(requireLazy/*r*/) && this._unmountChildByName(requireDynamic/*n*/[requireLazy/*r*/], requireLazy/*r*/);
                        this.setTextContent(global/*e*/), require/*t*/ = !1
                    } finally {
                        g--, g || (require/*t*/ ? c() : u())
                    }
                },
                updateChildren: function(global/*e*/, require/*t*/) {
                    g++;
                    var requireDynamic/*n*/ = !0;
                    try {
                        this._updateChildren(global/*e*/, require/*t*/), requireDynamic/*n*/ = !1
                    } finally {
                        g--, g || (requireDynamic/*n*/ ? c() : u())
                    }
                },
                _updateChildren: function(global/*e*/, require/*t*/) {
                    var requireDynamic/*n*/ = flattenChildren/*h*/(global/*e*/),
                        requireLazy/*r*/ = this._renderedChildren;
                    if (requireDynamic/*n*/ || requireLazy/*r*/) {
                        var module/*i*/, o = 0,
                            a = 0;
                        for (module/*i*/ in requireDynamic/*n*/)
                            if (requireDynamic/*n*/.hasOwnProperty(module/*i*/)) {
                                var s = requireLazy/*r*/ && requireLazy/*r*/[module/*i*/],
                                    l = s && s._currentElement,
                                    u = requireDynamic/*n*/[module/*i*/];
                                if (shouldUpdateReactComponent/*m*/(l, u)) this.moveChild(s, a, o), o = Math.max(s._mountIndex, o), s.receiveComponent(u, require/*t*/), s._mountIndex = a;
                                else {
                                    s && (o = Math.max(s._mountIndex, o), this._unmountChildByName(s, module/*i*/));
                                    var c = instantiateReactComponent/*f*/(u, null);
                                    this._mountChildByNameAtIndex(c, module/*i*/, a, require/*t*/)
                                }
                                a++
                            }
                        for (module/*i*/ in requireLazy/*r*/) !requireLazy/*r*/.hasOwnProperty(module/*i*/) || requireDynamic/*n*/ && requireDynamic/*n*/[module/*i*/] || this._unmountChildByName(requireLazy/*r*/[module/*i*/], module/*i*/)
                    }
                },
                unmountChildren: function() {
                    var global/*e*/ = this._renderedChildren;
                    for (var require/*t*/ in global/*e*/) {
                        var requireDynamic/*n*/ = global/*e*/[require/*t*/];
                        requireDynamic/*n*/.unmountComponent && requireDynamic/*n*/.unmountComponent()
                    }
                    this._renderedChildren = null
                },
                moveChild: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                    global/*e*/._mountIndex < requireDynamic/*n*/ && a(this._rootNodeID, global/*e*/._mountIndex, require/*t*/)
                },
                createChild: function(global/*e*/, require/*t*/) {
                    o(this._rootNodeID, require/*t*/, global/*e*/._mountIndex)
                },
                removeChild: function(global/*e*/) {
                    s(this._rootNodeID, global/*e*/._mountIndex)
                },
                setTextContent: function(global/*e*/) {
                    l(this._rootNodeID, global/*e*/)
                },
                _mountChildByNameAtIndex: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    var module/*i*/ = this._rootNodeID + require/*t*/,
                        o = global/*e*/.mountComponent(module/*i*/, requireLazy/*r*/, this._mountDepth + 1);
                    global/*e*/._mountIndex = requireDynamic/*n*/, this.createChild(global/*e*/, o), this._renderedChildren = this._renderedChildren || {}, this._renderedChildren[require/*t*/] = global/*e*/
                },
                _unmountChildByName: function(global/*e*/, require/*t*/) {
                    this.removeChild(global/*e*/), global/*e*/._mountIndex = null, global/*e*/.unmountComponent(), delete this._renderedChildren[require/*t*/]
                }
            }
        };
    module/*i*/.exports = v
});