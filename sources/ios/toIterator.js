__d("toIterator",[],function (e, t, n, r, i) {
    var o = "key",
        a = "value",
        s = "key+value",
        l = "function" == typeof Symbol ? Symbol.iterator : "@@iterator",
        u = function() {
            return Array.prototype[l] && String.prototype[l] ? function(e) {
                return e[l]()
            } : function() {
                function e(e, t) {
                    "use strict";
                    if (!Array.isArray(e)) throw new TypeError("Object is not an Array");
                    this.$ArrayIterator_iteratedObject = e, this.$ArrayIterator_kind = t, this.$ArrayIterator_nextIndex = 0
                }

                function t(e) {
                    "use strict";
                    if ("string" != typeof e) throw new TypeError("Object is not a string");
                    this.$StringIterator_iteratedString = e, this.$StringIterator_nextIndex = 0
                }

                function n(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }
                return e.prototype.next = function() {
                        "use strict";
                        if (!this instanceof e) throw new TypeError("Object is not an ArrayIterator");
                        if (null == this.$ArrayIterator_iteratedObject) return n(void 0, !0);
                        var t = this.$ArrayIterator_iteratedObject,
                            r = this.$ArrayIterator_iteratedObject.length,
                            i = this.$ArrayIterator_nextIndex,
                            l = this.$ArrayIterator_kind;
                        return i >= r ? (this.$ArrayIterator_iteratedObject = void 0, n(void 0, !0)) : (this.$ArrayIterator_nextIndex = i + 1, l === o ? n(i, !1) : l === a ? n(t[i], !1) : l === s ? n([i, t[i]], !1) : void 0)
                    }, e.prototype["@@iterator"] = function() {
                        "use strict";
                        return this
                    }, t.prototype.next = function() {
                        "use strict";
                        if (!this instanceof t) throw new TypeError("Object is not a StringIterator");
                        if (null == this.$StringIterator_iteratedString) return n(void 0, !0);
                        var e = this.$StringIterator_nextIndex,
                            r = this.$StringIterator_iteratedString,
                            i = r.length;
                        if (e >= i) return this.$StringIterator_iteratedString = void 0, n(void 0, !0);
                        var o, a = r.charCodeAt(e);
                        if (55296 > a || a > 56319 || e + 1 === i) o = r[e];
                        else {
                            var s = r.charCodeAt(e + 1);
                            o = 56320 > s || s > 57343 ? r[e] : r[e] + r[e + 1]
                        }
                        return this.$StringIterator_nextIndex = e + o.length, n(o, !1)
                    }, t.prototype["@@iterator"] = function() {
                        "use strict";
                        return this
                    },
                    function(n, r) {
                        return "string" == typeof n ? new t(n) : Array.isArray(n) ? new e(n, r || a) : n[l]()
                    }
            }()
        }();
    Object.assign(u, {
        KIND_KEY: o,
        KIND_VALUE: a,
        KIND_KEY_VAL: s,
        ITERATOR_SYMBOL: l
    }), i.exports = u
});