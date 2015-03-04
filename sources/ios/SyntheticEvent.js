__d("SyntheticEvent",["PooledClass","emptyFunction","getEventTarget"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        this.dispatchConfig = global/*e*/, this.dispatchMarker = require/*t*/, this.nativeEvent = requireDynamic/*n*/;
        var requireLazy/*r*/ = this.constructor.Interface;
        for (var module/*i*/ in requireLazy/*r*/)
            if (requireLazy/*r*/.hasOwnProperty(module/*i*/)) {
                var o = requireLazy/*r*/[module/*i*/];
                this[module/*i*/] = o ? o(requireDynamic/*n*/) : requireDynamic/*n*/[module/*i*/]
            }
        var PooledClass/*a*/ = null != requireDynamic/*n*/.defaultPrevented ? requireDynamic/*n*/.defaultPrevented : requireDynamic/*n*/.returnValue === !1;
        this.isDefaultPrevented = PooledClass/*a*/ ? emptyFunction/*s*/.thatReturnsTrue : emptyFunction/*s*/.thatReturnsFalse, this.isPropagationStopped = emptyFunction/*s*/.thatReturnsFalse
    }
    var PooledClass/*a*/ = require/*t*/("PooledClass"),
        emptyFunction/*s*/ = require/*t*/("emptyFunction"),
        getEventTarget/*l*/ = require/*t*/("getEventTarget"),
        u = {
            type: null,
            target: getEventTarget/*l*/,
            currentTarget: emptyFunction/*s*/.thatReturnsNull,
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
            var global/*e*/ = this.nativeEvent;
            global/*e*/.preventDefault ? global/*e*/.preventDefault() : global/*e*/.returnValue = !1, this.isDefaultPrevented = emptyFunction/*s*/.thatReturnsTrue
        },
        stopPropagation: function() {
            var global/*e*/ = this.nativeEvent;
            global/*e*/.stopPropagation ? global/*e*/.stopPropagation() : global/*e*/.cancelBubble = !0, this.isPropagationStopped = emptyFunction/*s*/.thatReturnsTrue
        },
        persist: function() {
            this.isPersistent = emptyFunction/*s*/.thatReturnsTrue
        },
        isPersistent: emptyFunction/*s*/.thatReturnsFalse,
        destructor: function() {
            var global/*e*/ = this.constructor.Interface;
            for (var require/*t*/ in global/*e*/) this[require/*t*/] = null;
            this.dispatchConfig = null, this.dispatchMarker = null, this.nativeEvent = null
        }
    }), o.Interface = u, o.augmentClass = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = this,
            requireLazy/*r*/ = Object.create(requireDynamic/*n*/.prototype);
        Object.assign(requireLazy/*r*/, global/*e*/.prototype), global/*e*/.prototype = requireLazy/*r*/, global/*e*/.prototype.constructor = global/*e*/, global/*e*/.Interface = Object.assign({}, requireDynamic/*n*/.Interface, require/*t*/), global/*e*/.augmentClass = requireDynamic/*n*/.augmentClass, PooledClass/*a*/.addPoolingTo(global/*e*/, PooledClass/*a*/.threeArgumentPooler)
    }, PooledClass/*a*/.addPoolingTo(o, PooledClass/*a*/.threeArgumentPooler), module/*i*/.exports = o
});