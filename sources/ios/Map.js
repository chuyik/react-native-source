__d("Map",["guid","isNode","toIterator","_shouldPolyfillES6Collection"],function (global/*e*/, require/*toIterator/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*toIterator/*t*/*/("guid"),
        exports/*a*/ = require/*toIterator/*t*/*/("isNode"),
        guid/*s*/ = require/*toIterator/*t*/*/("toIterator"),
        isNode/*l*/ = require/*toIterator/*t*/*/("_shouldPolyfillES6Collection");
    module/*i*/.exports = function(global/*e*/, require/*toIterator/*t*/*/) {
        function requireDynamic/*n*/(global/*e*/) {
            "use strict";
            if (!p(this)) throw new TypeError("Wrong map object type.");
            if (c(this), _shouldPolyfillES6Collection/*null*/ != global/*e*/)
                for (var require/*toIterator/*t*/*/, requireDynamic/*n*/ = guid/*s*/(global/*e*/); !(require/*toIterator/*t*/*/ = requireDynamic/*n*/.next()).done;) {
                    if (!p(require/*toIterator/*t*/*/.value)) throw new TypeError("Expected iterable items to be pair objects.");
                    this.set(require/*toIterator/*t*/*/.value[0], require/*toIterator/*t*/*/.value[1])
                }
        }

        function requireLazy/*r*/(global/*e*/, require/*toIterator/*t*/*/) {
            "use strict";
            if (!p(global/*e*/) || !global/*e*/._mapData) throw new TypeError("Object is not exports/*a*/ map.");
            if (-1 === [g, y, _].indexOf(require/*toIterator/*t*/*/)) throw new Error("Invalid iteration kind.");
            this._map = global/*e*/, this._nextIndex = 0, this._kind = require/*toIterator/*t*/*/
        }

        function module/*i*/(global/*e*/, require/*toIterator/*t*/*/) {
            if (p(require/*toIterator/*t*/*/)) {
                var requireDynamic/*n*/ = R(require/*toIterator/*t*/*/);
                return global/*e*/._objectIndex[requireDynamic/*n*/]
            }
            var requireLazy/*r*/ = v + require/*toIterator/*t*/*/;
            return "string" == typeof require/*toIterator/*t*/*/ ? global/*e*/._stringIndex[requireLazy/*r*/] : global/*e*/._otherIndex[requireLazy/*r*/]
        }

        function u(global/*e*/, require/*toIterator/*t*/*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = _shouldPolyfillES6Collection/*null*/ == requireDynamic/*n*/;
            if (p(require/*toIterator/*t*/*/)) {
                var module/*i*/ = R(require/*toIterator/*t*/*/);
                requireLazy/*r*/ ? delete global/*e*/._objectIndex[module/*i*/] : global/*e*/._objectIndex[module/*i*/] = requireDynamic/*n*/
            } else {
                var o = v + require/*toIterator/*t*/*/;
                "string" == typeof require/*toIterator/*t*/*/ ? requireLazy/*r*/ ? delete global/*e*/._stringIndex[o] : global/*e*/._stringIndex[o] = requireDynamic/*n*/ : requireLazy/*r*/ ? delete global/*e*/._otherIndex[o] : global/*e*/._otherIndex[o] = requireDynamic/*n*/
            }
        }

        function c(global/*e*/) {
            return global/*e*/._mapData = [], global/*e*/._objectIndex = {}, global/*e*/._stringIndex = {}, global/*e*/._otherIndex = {}, __DEV__ && b ? void(global/*e*/.hasOwnProperty(m) ? global/*e*/[m] = 0 : (Object.defineProperty(global/*e*/, m, {
                value: 0,
                writable: !0
            }), Object.defineProperty(global/*e*/, "size", {
                set: function() {
                    throw console.error("PLEASE FIX ME: You are changing the map size property which should not be writable and will break in production."), new Error("The map size property is not writable.")
                },
                get: function() {
                    return global/*e*/[m]
                }
            }))) : void(global/*e*/.size = 0)
        }

        function p(global/*e*/) {
            return _shouldPolyfillES6Collection/*null*/ != global/*e*/ && ("object" == typeof global/*e*/ || "function" == typeof global/*e*/)
        }

        function d(global/*e*/, require/*toIterator/*t*/*/) {
            return {
                value: global/*e*/,
                done: require/*toIterator/*t*/*/
            }
        }

        function h(global/*e*/) {
            return b ? Object.isExtensible(global/*e*/) : !0
        }

        function f(global/*e*/) {
            var require/*toIterator/*t*/*/;
            switch (global/*e*/.nodeType) {
                case 1:
                    require/*toIterator/*t*/*/ = global/*e*/.uniqueID;
                    break;
                case 9:
                    require/*toIterator/*t*/*/ = global/*e*/.documentElement.uniqueID;
                    break;
                default:
                    return _shouldPolyfillES6Collection/*null*/
            }
            return require/*toIterator/*t*/*/ ? S + require/*toIterator/*t*/*/ : _shouldPolyfillES6Collection/*null*/
        }
        if (!isNode/*l*/("Map")) return global/*e*/.Map;
        var m, g = "key",
            _ = "value",
            y = "key+value",
            v = "$map_";
        __DEV__ && (m = "$size" + o());
        var S = "IE_HASH_";
        requireDynamic/*n*/.prototype.clear = function() {
            "use strict";
            c(this)
        }, requireDynamic/*n*/.prototype.has = function(global/*e*/) {
            "use strict";
            var require/*toIterator/*t*/*/ = module/*i*/(this, global/*e*/);
            return !(_shouldPolyfillES6Collection/*null*/ == require/*toIterator/*t*/*/ || !this._mapData[require/*toIterator/*t*/*/])
        }, requireDynamic/*n*/.prototype.set = function(global/*e*/, require/*toIterator/*t*/*/) {
            "use strict";
            var requireDynamic/*n*/ = module/*i*/(this, global/*e*/);
            return _shouldPolyfillES6Collection/*null*/ != requireDynamic/*n*/ && this._mapData[requireDynamic/*n*/] ? this._mapData[requireDynamic/*n*/][1] = require/*toIterator/*t*/*/ : (requireDynamic/*n*/ = this._mapData.push([global/*e*/, require/*toIterator/*t*/*/]) - 1, u(this, global/*e*/, requireDynamic/*n*/), __DEV__ ? this[m] += 1 : this.size += 1), this
        }, requireDynamic/*n*/.prototype.get = function(global/*e*/) {
            "use strict";
            var requireDynamic/*n*/ = module/*i*/(this, global/*e*/);
            return _shouldPolyfillES6Collection/*null*/ == requireDynamic/*n*/ ? require/*toIterator/*t*/*/ : this._mapData[requireDynamic/*n*/][1]
        }, requireDynamic/*n*/.prototype["delete"] = function(global/*e*/) {
            "use strict";
            var requireDynamic/*n*/ = module/*i*/(this, global/*e*/);
            return _shouldPolyfillES6Collection/*null*/ != requireDynamic/*n*/ && this._mapData[requireDynamic/*n*/] ? (u(this, global/*e*/, require/*toIterator/*t*/*/), this._mapData[requireDynamic/*n*/] = require/*toIterator/*t*/*/, __DEV__ ? this[m] -= 1 : this.size -= 1, !0) : !1
        }, requireDynamic/*n*/.prototype.entries = function() {
            "use strict";
            return new requireLazy/*r*/(this, y)
        }, requireDynamic/*n*/.prototype.keys = function() {
            "use strict";
            return new requireLazy/*r*/(this, g)
        }, requireDynamic/*n*/.prototype.values = function() {
            "use strict";
            return new requireLazy/*r*/(this, _)
        }, requireDynamic/*n*/.prototype.forEach = function(global/*e*/, requireDynamic/*n*/) {
            "use strict";
            if ("function" != typeof global/*e*/) throw new TypeError("Callback must be callable.");
            for (var requireLazy/*r*/ = global/*e*/.bind(requireDynamic/*n*/ || require/*toIterator/*t*/*/), module/*i*/ = this._mapData, o = 0; o < module/*i*/.length; o++) {
                var exports/*a*/ = module/*i*/[o];
                _shouldPolyfillES6Collection/*null*/ != exports/*a*/ && requireLazy/*r*/(exports/*a*/[1], exports/*a*/[0], this)
            }
        }, requireDynamic/*n*/.prototype[guid/*s*/.ITERATOR_SYMBOL] = requireDynamic/*n*/.prototype.entries, requireLazy/*r*/.prototype.next = function() {
            "use strict";
            if (!this instanceof requireDynamic/*n*/) throw new TypeError("Expected to be called on exports/*a*/ MapIterator.");
            var global/*e*/ = this._map,
                requireLazy/*r*/ = this._nextIndex,
                module/*i*/ = this._kind;
            if (_shouldPolyfillES6Collection/*null*/ == global/*e*/) return d(require/*toIterator/*t*/*/, !0);
            for (var o = global/*e*/._mapData; requireLazy/*r*/ < o.length;) {
                var exports/*a*/ = o[requireLazy/*r*/];
                if (requireLazy/*r*/ += 1, this._nextIndex = requireLazy/*r*/, exports/*a*/) {
                    if (module/*i*/ === g) return d(exports/*a*/[0], !1);
                    if (module/*i*/ === _) return d(exports/*a*/[1], !1);
                    if (module/*i*/) return d(exports/*a*/, !1)
                }
            }
            return this._map = require/*toIterator/*t*/*/, d(require/*toIterator/*t*/*/, !0)
        }, requireLazy/*r*/.prototype[guid/*s*/.ITERATOR_SYMBOL] = function() {
            return this
        };
        var b = function() {
                try {
                    return Object.defineProperty({}, "x", {}), !0
                } catch (global/*e*/) {
                    return !1
                }
            }(),
            R = function() {
                var global/*e*/ = Object.prototype.propertyIsEnumerable,
                    require/*toIterator/*t*/*/ = o(),
                    requireDynamic/*n*/ = 0;
                return function(requireLazy/*r*/) {
                    if (requireLazy/*r*/[require/*toIterator/*t*/*/]) return requireLazy/*r*/[require/*toIterator/*t*/*/];
                    if (!b && requireLazy/*r*/.propertyIsEnumerable && requireLazy/*r*/.propertyIsEnumerable[require/*toIterator/*t*/*/]) return requireLazy/*r*/.propertyIsEnumerable[require/*toIterator/*t*/*/];
                    if (!b && exports/*a*/(requireLazy/*r*/) && f(requireLazy/*r*/)) return f(requireLazy/*r*/);
                    if (!b && requireLazy/*r*/[require/*toIterator/*t*/*/]) return requireLazy/*r*/[require/*toIterator/*t*/*/];
                    if (h(requireLazy/*r*/)) {
                        if (requireDynamic/*n*/ += 1, b) Object.defineProperty(requireLazy/*r*/, require/*toIterator/*t*/*/, {
                            enumerable: !1,
                            writable: !1,
                            configurable: !1,
                            value: requireDynamic/*n*/
                        });
                        else if (requireLazy/*r*/.propertyIsEnumerable) requireLazy/*r*/.propertyIsEnumerable = function() {
                            return global/*e*/.apply(this, arguments)
                        }, requireLazy/*r*/.propertyIsEnumerable[require/*toIterator/*t*/*/] = requireDynamic/*n*/;
                        else {
                            if (!exports/*a*/(requireLazy/*r*/)) throw new Error("Unable to set exports/*a*/ non-enumerable property on object.");
                            requireLazy/*r*/[require/*toIterator/*t*/*/] = requireDynamic/*n*/
                        }
                        return requireDynamic/*n*/
                    }
                    throw new Error("Non-extensible objects are not allowed as keys.")
                }
            }();
        return requireDynamic/*n*/
    }(Function("return this")())
});