__d("Set",["Map","toIterator","_shouldPolyfillES6Collection"],function (e, t, n, r, i) {
    var Map/*o*/ = t("Map"),
        toIterator/*a*/ = t("toIterator"),
        _shouldPolyfillES6Collection/*s*/ = t("_shouldPolyfillES6Collection");
    i.exports = function(e) {
        function t(e) {
            "use strict";
            if (null == this || "object" != typeof this && "function" != typeof this) throw new TypeError("Wrong set object type.");
            if (n(this), null != e)
                for (var t, r = toIterator/*a*/(e); !(t = r.next()).done;) this.add(t.value)
        }

        function n(e) {
            e._map = new Map/*o*/, e.size = e._map.size
        }
        return _shouldPolyfillES6Collection/*s*/("Set") ? (t.prototype.add = function(e) {
            "use strict";
            return this._map.set(e, e), this.size = this._map.size, this
        }, t.prototype.clear = function() {
            "use strict";
            n(this)
        }, t.prototype["delete"] = function(e) {
            "use strict";
            var t = this._map.delete(e);
            return this.size = this._map.size, t
        }, t.prototype.entries = function() {
            "use strict";
            return this._map.entries()
        }, t.prototype.forEach = function(e) {
            "use strict";
            for (var t, n = arguments[1], r = this._map.keys(); !(t = r.next()).done;) e.call(n, t.value, t.value, this)
        }, t.prototype.has = function(e) {
            "use strict";
            return this._map.has(e)
        }, t.prototype.values = function() {
            "use strict";
            return this._map.values()
        }, t.prototype[toIterator/*a*/.ITERATOR_SYMBOL] = t.prototype.values, t.prototype.keys = t.prototype.values, t) : e.Set
    }(Function("return this")())
});