__d("SyntheticEvent",["PooledClass","emptyFunction","getEventTarget"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*PooledClass/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*PooledClass/*n*/*/) {
        this.dispatchConfig = global/*e*/, emptyFunction/*this.dispatchMarker*/ = require/*exports/*t*/*/, getEventTarget/*this.nativeEvent*/ = requireDynamic/*PooledClass/*n*/*/;
        var requireLazy/*r*/ = this.constructor.Interface;
        for (var module/*i*/ in requireLazy/*r*/)
            if (requireLazy/*r*/.hasOwnProperty(module/*i*/)) {
                var o = requireLazy/*r*/[module/*i*/];
                this[module/*i*/] = o ? o(requireDynamic/*PooledClass/*n*/*/) : requireDynamic/*PooledClass/*n*/*/[module/*i*/]
            }
        var a = null != requireDynamic/*PooledClass/*n*/*/.defaultPrevented ? requireDynamic/*PooledClass/*n*/*/.defaultPrevented : requireDynamic/*PooledClass/*n*/*/.returnValue === !1;
        this.isDefaultPrevented = a ? s.thatReturnsTrue : s.thatReturnsFalse, this.isPropagationStopped = s.thatReturnsFalse
    }
    var a = require/*exports/*t*/*/("PooledClass"),
        s = require/*exports/*t*/*/("emptyFunction"),
        l = require/*exports/*t*/*/("getEventTarget"),
        u = {
            type: null,
            target: l,
            currentTarget: s.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(global/*e*/) {
                return global/*e*/.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
    Object.assign(o.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var global/*e*/ = getEventTarget/*this.nativeEvent*/;
            global/*e*/.preventDefault ? global/*e*/.preventDefault() : global/*e*/.returnValue = !1, this.isDefaultPrevented = s.thatReturnsTrue
        },
        stopPropagation: function() {
            var global/*e*/ = getEventTarget/*this.nativeEvent*/;
            global/*e*/.stopPropagation ? global/*e*/.stopPropagation() : global/*e*/.cancelBubble = !0, this.isPropagationStopped = s.thatReturnsTrue
        },
        persist: function() {
            this.isPersistent = s.thatReturnsTrue
        },
        isPersistent: s.thatReturnsFalse,
        destructor: function() {
            var global/*e*/ = this.constructor.Interface;
            for (var require/*exports/*t*/*/ in global/*e*/) this[require/*exports/*t*/*/] = null;
            this.dispatchConfig = null, emptyFunction/*this.dispatchMarker*/ = null, getEventTarget/*this.nativeEvent*/ = null
        }
    }), o.Interface = u, o.augmentClass = function(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*PooledClass/*n*/*/ = this,
            requireLazy/*r*/ = Object.create(requireDynamic/*PooledClass/*n*/*/.prototype);
        Object.assign(requireLazy/*r*/, global/*e*/.prototype), global/*e*/.prototype = requireLazy/*r*/, global/*e*/.prototype.constructor = global/*e*/, global/*e*/.Interface = Object.assign({}, requireDynamic/*PooledClass/*n*/*/.Interface, require/*exports/*t*/*/), global/*e*/.augmentClass = requireDynamic/*PooledClass/*n*/*/.augmentClass, a.addPoolingTo(global/*e*/, a.threeArgumentPooler)
    }, a.addPoolingTo(o, a.threeArgumentPooler), module/*i*/.exports = o
});