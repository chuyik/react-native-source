__d("ReactElement", ["ReactContext", "ReactCurrentOwner", "warning"], function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: function () {
                return this._store ? this._store[t] : null
            },
            set: function (e) {
                warning /*u*/ (!1, "Don't set the " + t + " property of the component. Mutate the existing props object instead."), this._store[t] = e
            }
        })
    }

    function a(e) {
        try {
            var t = {
                props: !0
            };
            for (var n in t) o(e, n);
            p = !0
        } catch (r) {}
    }
    var ReactContext /*s*/ = t("ReactContext"),
        ReactCurrentOwner /*l*/ = t("ReactCurrentOwner"),
        warning /*u*/ = t("warning"),
        c = {
            key: !0,
            ref: !0
        },
        p = !1,
        ReactElement = function (e, t, n, r, i, o) {
            return this.type = e, this.key = t, this.ref = n, this._owner = r, this._context = i, __DEV__ && (this._store = {
                validated: !1,
                props: o
            }, p) ? void Object.freeze(this) : void(this.props = o)
        };
    __DEV__ && a(ReactElement.prototype),
        ReactElement.prototype._isReactElement = !0,
        ReactElement.createElement = function (type, config, children) {
            var r, i = {},
                o = null,
                a = null;
            if (null != config) {
                a = void 0 === config.ref ? null : config.ref, o = void 0 === config.key ? null : "" + config.key;
                for (r in config) config.hasOwnProperty(r) && !c.hasOwnProperty(r) && (i[r] = config[r])
            }
            var warning /*u*/ = arguments.length - 2;
            if (1 === warning /*u*/ ) i.children = children;
            else if (warning /*u*/ > 1) {
                for (var p = Array(warning /*u*/ ), h = 0; warning /*u*/ > h; h++) p[h] = arguments[h + 2];
                i.children = p
            }
            if (type.defaultProps) {
                var f = type.defaultProps;
                for (r in f) "undefined" == typeof i[r] && (i[r] = f[r])
            }
            return new ReactElement(type, o, a, ReactCurrentOwner /*l*/ .current, ReactContext /*s*/ .current, i)
        },
        ReactElement.createFactory = function (e) {
            var t = ReactElement.createElement.bind(null, e);
            return t.type = e, t
        },
        ReactElement.cloneAndReplaceProps = function (e, t) {
            var n = new ReactElement(e.type, e.key, e.ref, e._owner, e._context, t);
            return __DEV__ && (n._store.validated = e._store.validated), n
        },
        ReactElement.isValidElement = function (e) {
            var t = !(!e || !e._isReactElement);
            return t
        }, i.exports = ReactElement
});
