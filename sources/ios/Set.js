__d("Set",["Map","toIterator","_shouldPolyfillES6Collection"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*_shouldPolyfillES6Collection/*r*/*/, module/*i*/) {
    var o = require/*t*/("Map"),
        exports/*a*/ = require/*t*/("toIterator"),
        Map/*s*/ = require/*t*/("_shouldPolyfillES6Collection");
    module/*i*/.exports = function(global/*e*/) {
        function require/*t*/(global/*e*/) {
            "use strict";
            if (toIterator/*null*/ == this || "object" != typeof this && "function" != typeof this) throw new TypeError("Wrong set object type.");
            if (requireDynamic/*n*/(this), toIterator/*null*/ != global/*e*/)
                for (var require/*t*/, requireLazy/*_shouldPolyfillES6Collection/*r*/*/ = exports/*a*/(global/*e*/); !(require/*t*/ = requireLazy/*_shouldPolyfillES6Collection/*r*/*/.next()).done;) this.add(require/*t*/.value)
        }

        function requireDynamic/*n*/(global/*e*/) {
            global/*e*/._map = new o, global/*e*/.size = global/*e*/._map.size
        }
        return Map/*s*/("Set") ? (require/*t*/.prototype.add = function(global/*e*/) {
            "use strict";
            return this._map.set(global/*e*/, global/*e*/), this.size = this._map.size, this
        }, require/*t*/.prototype.clear = function() {
            "use strict";
            requireDynamic/*n*/(this)
        }, require/*t*/.prototype["delete"] = function(global/*e*/) {
            "use strict";
            var require/*t*/ = this._map.delete(global/*e*/);
            return this.size = this._map.size, require/*t*/
        }, require/*t*/.prototype.entries = function() {
            "use strict";
            return this._map.entries()
        }, require/*t*/.prototype.forEach = function(global/*e*/) {
            "use strict";
            for (var require/*t*/, requireDynamic/*n*/ = arguments[1], requireLazy/*_shouldPolyfillES6Collection/*r*/*/ = this._map.keys(); !(require/*t*/ = requireLazy/*_shouldPolyfillES6Collection/*r*/*/.next()).done;) global/*e*/.call(requireDynamic/*n*/, require/*t*/.value, require/*t*/.value, this)
        }, require/*t*/.prototype.has = function(global/*e*/) {
            "use strict";
            return this._map.has(global/*e*/)
        }, require/*t*/.prototype.values = function() {
            "use strict";
            return this._map.values()
        }, require/*t*/.prototype[exports/*a*/.ITERATOR_SYMBOL] = require/*t*/.prototype.values, require/*t*/.prototype.keys = require/*t*/.prototype.values, require/*t*/) : global/*e*/.Set
    }(Function("return this")())
});