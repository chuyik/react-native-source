__d("Map",["guid","isNode","toIterator","_shouldPolyfillES6Collection"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var guid/*o*/ = require/*t*/("guid"),
        isNode/*a*/ = require/*t*/("isNode"),
        toIterator/*s*/ = require/*t*/("toIterator"),
        _shouldPolyfillES6Collection/*l*/ = require/*t*/("_shouldPolyfillES6Collection");
    module/*i*/.exports = function(global/*e*/, require/*t*/) {
        function requireDynamic/*n*/(global/*e*/) {
            "use strict";
            if (!p(this)) throw new TypeError("Wrong map object type.");
            if (c(this), null != global/*e*/)
                for (var require/*t*/, requireDynamic/*n*/ = toIterator/*s*/(global/*e*/); !(require/*t*/ = requireDynamic/*n*/.next()).done;) {
                    if (!p(require/*t*/.value)) throw new TypeError("Expected iterable items to be pair objects.");
                    this.set(require/*t*/.value[0], require/*t*/.value[1])
                }
        }

        function requireLazy/*r*/(global/*e*/, require/*t*/) {
            "use strict";
            if (!p(global/*e*/) || !global/*e*/._mapData) throw new TypeError("Object is not isNode/*a*/ map.");
            if (-1 === [g, y, _].indexOf(require/*t*/)) throw new Error("Invalid iteration kind.");
            this._map = global/*e*/, this._nextIndex = 0, this._kind = require/*t*/
        }

        function module/*i*/(global/*e*/, require/*t*/) {
            if (p(require/*t*/)) {
                var requireDynamic/*n*/ = R(require/*t*/);
                return global/*e*/._objectIndex[requireDynamic/*n*/]
            }
            var requireLazy/*r*/ = v + require/*t*/;
            return "string" == typeof require/*t*/ ? global/*e*/._stringIndex[requireLazy/*r*/] : global/*e*/._otherIndex[requireLazy/*r*/]
        }

        function u(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = null == requireDynamic/*n*/;
            if (p(require/*t*/)) {
                var module/*i*/ = R(require/*t*/);
                requireLazy/*r*/ ? delete global/*e*/._objectIndex[module/*i*/] : global/*e*/._objectIndex[module/*i*/] = requireDynamic/*n*/
            } else {
                var guid/*o*/ = v + require/*t*/;
                "string" == typeof require/*t*/ ? requireLazy/*r*/ ? delete global/*e*/._stringIndex[guid/*o*/] : global/*e*/._stringIndex[guid/*o*/] = requireDynamic/*n*/ : requireLazy/*r*/ ? delete global/*e*/._otherIndex[guid/*o*/] : global/*e*/._otherIndex[guid/*o*/] = requireDynamic/*n*/
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
            return null != global/*e*/ && ("object" == typeof global/*e*/ || "function" == typeof global/*e*/)
        }

        function d(global/*e*/, require/*t*/) {
            return {
                value: global/*e*/,
                done: require/*t*/
            }
        }

        function h(global/*e*/) {
            return b ? Object.isExtensible(global/*e*/) : !0
        }

        function f(global/*e*/) {
            var require/*t*/;
            switch (global/*e*/.nodeType) {
                case 1:
                    require/*t*/ = global/*e*/.uniqueID;
                    break;
                case 9:
                    require/*t*/ = global/*e*/.documentElement.uniqueID;
                    break;
                default:
                    return null
            }
            return require/*t*/ ? S + require/*t*/ : null
        }
        if (!_shouldPolyfillES6Collection/*l*/("Map")) return global/*e*/.Map;
        var m, g = "key",
            _ = "value",
            y = "key+value",
            v = "$map_";
        __DEV__ && (m = "$size" + guid/*o*/());
        var S = "IE_HASH_";
        requireDynamic/*n*/.prototype.clear = function() {
            "use strict";
            c(this)
        }, requireDynamic/*n*/.prototype.has = function(global/*e*/) {
            "use strict";
            var require/*t*/ = module/*i*/(this, global/*e*/);
            return !(null == require/*t*/ || !this._mapData[require/*t*/])
        }, requireDynamic/*n*/.prototype.set = function(global/*e*/, require/*t*/) {
            "use strict";
            var requireDynamic/*n*/ = module/*i*/(this, global/*e*/);
            return null != requireDynamic/*n*/ && this._mapData[requireDynamic/*n*/] ? this._mapData[requireDynamic/*n*/][1] = require/*t*/ : (requireDynamic/*n*/ = this._mapData.push([global/*e*/, require/*t*/]) - 1, u(this, global/*e*/, requireDynamic/*n*/), __DEV__ ? this[m] += 1 : this.size += 1), this
        }, requireDynamic/*n*/.prototype.get = function(global/*e*/) {
            "use strict";
            var requireDynamic/*n*/ = module/*i*/(this, global/*e*/);
            return null == requireDynamic/*n*/ ? require/*t*/ : this._mapData[requireDynamic/*n*/][1]
        }, requireDynamic/*n*/.prototype["delete"] = function(global/*e*/) {
            "use strict";
            var requireDynamic/*n*/ = module/*i*/(this, global/*e*/);
            return null != requireDynamic/*n*/ && this._mapData[requireDynamic/*n*/] ? (u(this, global/*e*/, require/*t*/), this._mapData[requireDynamic/*n*/] = require/*t*/, __DEV__ ? this[m] -= 1 : this.size -= 1, !0) : !1
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
            for (var requireLazy/*r*/ = global/*e*/.bind(requireDynamic/*n*/ || require/*t*/), module/*i*/ = this._mapData, guid/*o*/ = 0; guid/*o*/ < module/*i*/.length; guid/*o*/++) {
                var isNode/*a*/ = module/*i*/[guid/*o*/];
                null != isNode/*a*/ && requireLazy/*r*/(isNode/*a*/[1], isNode/*a*/[0], this)
            }
        }, requireDynamic/*n*/.prototype[toIterator/*s*/.ITERATOR_SYMBOL] = requireDynamic/*n*/.prototype.entries, requireLazy/*r*/.prototype.next = function() {
            "use strict";
            if (!this instanceof requireDynamic/*n*/) throw new TypeError("Expected to be called on isNode/*a*/ MapIterator.");
            var global/*e*/ = this._map,
                requireLazy/*r*/ = this._nextIndex,
                module/*i*/ = this._kind;
            if (null == global/*e*/) return d(require/*t*/, !0);
            for (var guid/*o*/ = global/*e*/._mapData; requireLazy/*r*/ < guid/*o*/.length;) {
                var isNode/*a*/ = guid/*o*/[requireLazy/*r*/];
                if (requireLazy/*r*/ += 1, this._nextIndex = requireLazy/*r*/, isNode/*a*/) {
                    if (module/*i*/ === g) return d(isNode/*a*/[0], !1);
                    if (module/*i*/ === _) return d(isNode/*a*/[1], !1);
                    if (module/*i*/) return d(isNode/*a*/, !1)
                }
            }
            return this._map = require/*t*/, d(require/*t*/, !0)
        }, requireLazy/*r*/.prototype[toIterator/*s*/.ITERATOR_SYMBOL] = function() {
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
                    require/*t*/ = guid/*o*/(),
                    requireDynamic/*n*/ = 0;
                return function(requireLazy/*r*/) {
                    if (requireLazy/*r*/[require/*t*/]) return requireLazy/*r*/[require/*t*/];
                    if (!b && requireLazy/*r*/.propertyIsEnumerable && requireLazy/*r*/.propertyIsEnumerable[require/*t*/]) return requireLazy/*r*/.propertyIsEnumerable[require/*t*/];
                    if (!b && isNode/*a*/(requireLazy/*r*/) && f(requireLazy/*r*/)) return f(requireLazy/*r*/);
                    if (!b && requireLazy/*r*/[require/*t*/]) return requireLazy/*r*/[require/*t*/];
                    if (h(requireLazy/*r*/)) {
                        if (requireDynamic/*n*/ += 1, b) Object.defineProperty(requireLazy/*r*/, require/*t*/, {
                            enumerable: !1,
                            writable: !1,
                            configurable: !1,
                            value: requireDynamic/*n*/
                        });
                        else if (requireLazy/*r*/.propertyIsEnumerable) requireLazy/*r*/.propertyIsEnumerable = function() {
                            return global/*e*/.apply(this, arguments)
                        }, requireLazy/*r*/.propertyIsEnumerable[require/*t*/] = requireDynamic/*n*/;
                        else {
                            if (!isNode/*a*/(requireLazy/*r*/)) throw new Error("Unable to set isNode/*a*/ non-enumerable property on object.");
                            requireLazy/*r*/[require/*t*/] = requireDynamic/*n*/
                        }
                        return requireDynamic/*n*/
                    }
                    throw new Error("Non-extensible objects are not allowed as keys.")
                }
            }();
        return requireDynamic/*n*/
    }(Function("return this")())
});