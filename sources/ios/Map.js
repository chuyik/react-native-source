__d("Map",["guid","isNode","toIterator","_shouldPolyfillES6Collection"],function (e, t, n, r, i) {
    var guid/*o*/ = t("guid"),
        isNode/*a*/ = t("isNode"),
        toIterator/*s*/ = t("toIterator"),
        _shouldPolyfillES6Collection/*l*/ = t("_shouldPolyfillES6Collection");
    i.exports = function(e, t) {
        function n(e) {
            "use strict";
            if (!p(this)) throw new TypeError("Wrong map object type.");
            if (c(this), null != e)
                for (var t, n = toIterator/*s*/(e); !(t = n.next()).done;) {
                    if (!p(t.value)) throw new TypeError("Expected iterable items to be pair objects.");
                    this.set(t.value[0], t.value[1])
                }
        }

        function r(e, t) {
            "use strict";
            if (!p(e) || !e._mapData) throw new TypeError("Object is not isNode/*a*/ map.");
            if (-1 === [g, y, _].indexOf(t)) throw new Error("Invalid iteration kind.");
            this._map = e, this._nextIndex = 0, this._kind = t
        }

        function i(e, t) {
            if (p(t)) {
                var n = R(t);
                return e._objectIndex[n]
            }
            var r = v + t;
            return "string" == typeof t ? e._stringIndex[r] : e._otherIndex[r]
        }

        function u(e, t, n) {
            var r = null == n;
            if (p(t)) {
                var i = R(t);
                r ? delete e._objectIndex[i] : e._objectIndex[i] = n
            } else {
                var guid/*o*/ = v + t;
                "string" == typeof t ? r ? delete e._stringIndex[guid/*o*/] : e._stringIndex[guid/*o*/] = n : r ? delete e._otherIndex[guid/*o*/] : e._otherIndex[guid/*o*/] = n
            }
        }

        function c(e) {
            return e._mapData = [], e._objectIndex = {}, e._stringIndex = {}, e._otherIndex = {}, __DEV__ && b ? void(e.hasOwnProperty(m) ? e[m] = 0 : (Object.defineProperty(e, m, {
                value: 0,
                writable: !0
            }), Object.defineProperty(e, "size", {
                set: function() {
                    throw console.error("PLEASE FIX ME: You are changing the map size property which should not be writable and will break in production."), new Error("The map size property is not writable.")
                },
                get: function() {
                    return e[m]
                }
            }))) : void(e.size = 0)
        }

        function p(e) {
            return null != e && ("object" == typeof e || "function" == typeof e)
        }

        function d(e, t) {
            return {
                value: e,
                done: t
            }
        }

        function h(e) {
            return b ? Object.isExtensible(e) : !0
        }

        function f(e) {
            var t;
            switch (e.nodeType) {
                case 1:
                    t = e.uniqueID;
                    break;
                case 9:
                    t = e.documentElement.uniqueID;
                    break;
                default:
                    return null
            }
            return t ? S + t : null
        }
        if (!_shouldPolyfillES6Collection/*l*/("Map")) return e.Map;
        var m, g = "key",
            _ = "value",
            y = "key+value",
            v = "$map_";
        __DEV__ && (m = "$size" + guid/*o*/());
        var S = "IE_HASH_";
        n.prototype.clear = function() {
            "use strict";
            c(this)
        }, n.prototype.has = function(e) {
            "use strict";
            var t = i(this, e);
            return !(null == t || !this._mapData[t])
        }, n.prototype.set = function(e, t) {
            "use strict";
            var n = i(this, e);
            return null != n && this._mapData[n] ? this._mapData[n][1] = t : (n = this._mapData.push([e, t]) - 1, u(this, e, n), __DEV__ ? this[m] += 1 : this.size += 1), this
        }, n.prototype.get = function(e) {
            "use strict";
            var n = i(this, e);
            return null == n ? t : this._mapData[n][1]
        }, n.prototype["delete"] = function(e) {
            "use strict";
            var n = i(this, e);
            return null != n && this._mapData[n] ? (u(this, e, t), this._mapData[n] = t, __DEV__ ? this[m] -= 1 : this.size -= 1, !0) : !1
        }, n.prototype.entries = function() {
            "use strict";
            return new r(this, y)
        }, n.prototype.keys = function() {
            "use strict";
            return new r(this, g)
        }, n.prototype.values = function() {
            "use strict";
            return new r(this, _)
        }, n.prototype.forEach = function(e, n) {
            "use strict";
            if ("function" != typeof e) throw new TypeError("Callback must be callable.");
            for (var r = e.bind(n || t), i = this._mapData, guid/*o*/ = 0; guid/*o*/ < i.length; guid/*o*/++) {
                var isNode/*a*/ = i[guid/*o*/];
                null != isNode/*a*/ && r(isNode/*a*/[1], isNode/*a*/[0], this)
            }
        }, n.prototype[toIterator/*s*/.ITERATOR_SYMBOL] = n.prototype.entries, r.prototype.next = function() {
            "use strict";
            if (!this instanceof n) throw new TypeError("Expected to be called on isNode/*a*/ MapIterator.");
            var e = this._map,
                r = this._nextIndex,
                i = this._kind;
            if (null == e) return d(t, !0);
            for (var guid/*o*/ = e._mapData; r < guid/*o*/.length;) {
                var isNode/*a*/ = guid/*o*/[r];
                if (r += 1, this._nextIndex = r, isNode/*a*/) {
                    if (i === g) return d(isNode/*a*/[0], !1);
                    if (i === _) return d(isNode/*a*/[1], !1);
                    if (i) return d(isNode/*a*/, !1)
                }
            }
            return this._map = t, d(t, !0)
        }, r.prototype[toIterator/*s*/.ITERATOR_SYMBOL] = function() {
            return this
        };
        var b = function() {
                try {
                    return Object.defineProperty({}, "x", {}), !0
                } catch (e) {
                    return !1
                }
            }(),
            R = function() {
                var e = Object.prototype.propertyIsEnumerable,
                    t = guid/*o*/(),
                    n = 0;
                return function(r) {
                    if (r[t]) return r[t];
                    if (!b && r.propertyIsEnumerable && r.propertyIsEnumerable[t]) return r.propertyIsEnumerable[t];
                    if (!b && isNode/*a*/(r) && f(r)) return f(r);
                    if (!b && r[t]) return r[t];
                    if (h(r)) {
                        if (n += 1, b) Object.defineProperty(r, t, {
                            enumerable: !1,
                            writable: !1,
                            configurable: !1,
                            value: n
                        });
                        else if (r.propertyIsEnumerable) r.propertyIsEnumerable = function() {
                            return e.apply(this, arguments)
                        }, r.propertyIsEnumerable[t] = n;
                        else {
                            if (!isNode/*a*/(r)) throw new Error("Unable to set isNode/*a*/ non-enumerable property on object.");
                            r[t] = n
                        }
                        return n
                    }
                    throw new Error("Non-extensible objects are not allowed as keys.")
                }
            }();
        return n
    }(Function("return this")())
});