__d("toIterator",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = "key",
        exports/*a*/ = "value",
        s = "key+value",
        l = "function" == typeof Symbol ? Symbol.iterator : "@@iterator",
        u = function() {
            return Array.prototype[l] && String.prototype[l] ? function(global/*e*/) {
                return global/*e*/[l]()
            } : function() {
                function global/*e*/(global/*e*/, require/*t*/) {
                    "use strict";
                    if (!Array.isArray(global/*e*/)) throw new TypeError("Object is not an Array");
                    this.$ArrayIterator_iteratedObject = global/*e*/, this.$ArrayIterator_kind = require/*t*/, this.$ArrayIterator_nextIndex = 0
                }

                function require/*t*/(global/*e*/) {
                    "use strict";
                    if ("string" != typeof global/*e*/) throw new TypeError("Object is not exports/*a*/ string");
                    this.$StringIterator_iteratedString = global/*e*/, this.$StringIterator_nextIndex = 0
                }

                function requireDynamic/*n*/(global/*e*/, require/*t*/) {
                    return {
                        value: global/*e*/,
                        done: require/*t*/
                    }
                }
                return global/*e*/.prototype.next = function() {
                        "use strict";
                        if (!this instanceof global/*e*/) throw new TypeError("Object is not an ArrayIterator");
                        if (null == this.$ArrayIterator_iteratedObject) return requireDynamic/*n*/(void 0, !0);
                        var require/*t*/ = this.$ArrayIterator_iteratedObject,
                            requireLazy/*r*/ = this.$ArrayIterator_iteratedObject.length,
                            module/*i*/ = this.$ArrayIterator_nextIndex,
                            l = this.$ArrayIterator_kind;
                        return module/*i*/ >= requireLazy/*r*/ ? (this.$ArrayIterator_iteratedObject = void 0, requireDynamic/*n*/(void 0, !0)) : (this.$ArrayIterator_nextIndex = module/*i*/ + 1, l === o ? requireDynamic/*n*/(module/*i*/, !1) : l === exports/*a*/ ? requireDynamic/*n*/(require/*t*/[module/*i*/], !1) : l === s ? requireDynamic/*n*/([module/*i*/, require/*t*/[module/*i*/]], !1) : void 0)
                    }, global/*e*/.prototype["@@iterator"] = function() {
                        "use strict";
                        return this
                    }, require/*t*/.prototype.next = function() {
                        "use strict";
                        if (!this instanceof require/*t*/) throw new TypeError("Object is not exports/*a*/ StringIterator");
                        if (null == this.$StringIterator_iteratedString) return requireDynamic/*n*/(void 0, !0);
                        var global/*e*/ = this.$StringIterator_nextIndex,
                            requireLazy/*r*/ = this.$StringIterator_iteratedString,
                            module/*i*/ = requireLazy/*r*/.length;
                        if (global/*e*/ >= module/*i*/) return this.$StringIterator_iteratedString = void 0, requireDynamic/*n*/(void 0, !0);
                        var o, exports/*a*/ = requireLazy/*r*/.charCodeAt(global/*e*/);
                        if (55296 > exports/*a*/ || exports/*a*/ > 56319 || global/*e*/ + 1 === module/*i*/) o = requireLazy/*r*/[global/*e*/];
                        else {
                            var s = requireLazy/*r*/.charCodeAt(global/*e*/ + 1);
                            o = 56320 > s || s > 57343 ? requireLazy/*r*/[global/*e*/] : requireLazy/*r*/[global/*e*/] + requireLazy/*r*/[global/*e*/ + 1]
                        }
                        return this.$StringIterator_nextIndex = global/*e*/ + o.length, requireDynamic/*n*/(o, !1)
                    }, require/*t*/.prototype["@@iterator"] = function() {
                        "use strict";
                        return this
                    },
                    function(requireDynamic/*n*/, requireLazy/*r*/) {
                        return "string" == typeof requireDynamic/*n*/ ? new require/*t*/(requireDynamic/*n*/) : Array.isArray(requireDynamic/*n*/) ? new global/*e*/(requireDynamic/*n*/, requireLazy/*r*/ || exports/*a*/) : requireDynamic/*n*/[l]()
                    }
            }()
        }();
    Object.assign(u, {
        KIND_KEY: o,
        KIND_VALUE: exports/*a*/,
        KIND_KEY_VAL: s,
        ITERATOR_SYMBOL: l
    }), module/*i*/.exports = u
});