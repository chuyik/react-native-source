__d("ReactElement",["ReactContext","ReactCurrentOwner","warning"],function (global/*e*/, require/*exports/*ReactContext/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*ReactContext/*t*/*/*/) {
        Object.defineProperty(global/*e*/, require/*exports/*ReactContext/*t*/*/*/, {
            configurable: !1,
            ReactCurrentOwner/*enumerable*/: !0,
            warning/*get*/: function() {
                return this._store ? this._store[require/*exports/*ReactContext/*t*/*/*/] : null
            },
            set: function(global/*e*/) {
                u(!1, "Don'require/*exports/*ReactContext/*t*/*/*/ set the " + require/*exports/*ReactContext/*t*/*/*/ + " property of the component. Mutate the existing props object instead."), this._store[require/*exports/*ReactContext/*t*/*/*/] = global/*e*/
            }
        })
    }

    function a(global/*e*/) {
        try {
            var require/*exports/*ReactContext/*t*/*/*/ = {
                props: !0
            };
            for (var requireDynamic/*n*/ in require/*exports/*ReactContext/*t*/*/*/) o(global/*e*/, requireDynamic/*n*/);
            p = !0
        } catch (requireLazy/*r*/) {}
    }
    var s = require/*exports/*ReactContext/*t*/*/*/("ReactContext"),
        l = require/*exports/*ReactContext/*t*/*/*/("ReactCurrentOwner"),
        u = require/*exports/*ReactContext/*t*/*/*/("warning"),
        c = {
            key: !0,
            ref: !0
        },
        p = !1,
        d = function(global/*e*/, require/*exports/*ReactContext/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
            return this.type = global/*e*/, this.key = require/*exports/*ReactContext/*t*/*/*/, this.ref = requireDynamic/*n*/, this._owner = requireLazy/*r*/, this._context = module/*i*/, __DEV__ && (this._store = {
                validated: !1,
                props: o
            }, p) ? void Object.freeze(this) : void(this.props = o)
        };
    __DEV__ && a(d.prototype), d.prototype._isReactElement = !0, d.createElement = function(global/*e*/, require/*exports/*ReactContext/*t*/*/*/, requireDynamic/*n*/) {
        var requireLazy/*r*/, module/*i*/ = {},
            o = null,
            a = null;
        if (null != require/*exports/*ReactContext/*t*/*/*/) {
            a = void 0 === require/*exports/*ReactContext/*t*/*/*/.ref ? null : require/*exports/*ReactContext/*t*/*/*/.ref, o = void 0 === require/*exports/*ReactContext/*t*/*/*/.key ? null : "" + require/*exports/*ReactContext/*t*/*/*/.key;
            for (requireLazy/*r*/ in require/*exports/*ReactContext/*t*/*/*/) require/*exports/*ReactContext/*t*/*/*/.hasOwnProperty(requireLazy/*r*/) && !c.hasOwnProperty(requireLazy/*r*/) && (module/*i*/[requireLazy/*r*/] = require/*exports/*ReactContext/*t*/*/*/[requireLazy/*r*/])
        }
        var u = arguments.length - 2;
        if (1 === u) module/*i*/.children = requireDynamic/*n*/;
        else if (u > 1) {
            for (var p = Array(u), h = 0; u > h; h++) p[h] = arguments[h + 2];
            module/*i*/.children = p
        }
        if (global/*e*/.defaultProps) {
            var f = global/*e*/.defaultProps;
            for (requireLazy/*r*/ in f) "undefined" == typeof module/*i*/[requireLazy/*r*/] && (module/*i*/[requireLazy/*r*/] = f[requireLazy/*r*/])
        }
        return new d(global/*e*/, o, a, l.current, s.current, module/*i*/)
    }, d.createFactory = function(global/*e*/) {
        var require/*exports/*ReactContext/*t*/*/*/ = d.createElement.bind(null, global/*e*/);
        return require/*exports/*ReactContext/*t*/*/*/.type = global/*e*/, require/*exports/*ReactContext/*t*/*/*/
    }, d.cloneAndReplaceProps = function(global/*e*/, require/*exports/*ReactContext/*t*/*/*/) {
        var requireDynamic/*n*/ = new d(global/*e*/.type, global/*e*/.key, global/*e*/.ref, global/*e*/._owner, global/*e*/._context, require/*exports/*ReactContext/*t*/*/*/);
        return __DEV__ && (requireDynamic/*n*/._store.validated = global/*e*/._store.validated), requireDynamic/*n*/
    }, d.isValidElement = function(global/*e*/) {
        var require/*exports/*ReactContext/*t*/*/*/ = !(!global/*e*/ || !global/*e*/._isReactElement);
        return require/*exports/*ReactContext/*t*/*/*/
    }, module/*i*/.exports = d
});