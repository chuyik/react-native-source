__d("SyntheticEvent",["PooledClass","emptyFunction","getEventTarget"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        this.dispatchConfig = e, this.dispatchMarker = t, this.nativeEvent = n;
        var r = this.constructor.Interface;
        for (var i in r)
            if (r.hasOwnProperty(i)) {
                var o = r[i];
                this[i] = o ? o(n) : n[i]
            }
        var PooledClass/*a*/ = null != n.defaultPrevented ? n.defaultPrevented : n.returnValue === !1;
        this.isDefaultPrevented = PooledClass/*a*/ ? emptyFunction/*s*/.thatReturnsTrue : emptyFunction/*s*/.thatReturnsFalse, this.isPropagationStopped = emptyFunction/*s*/.thatReturnsFalse
    }
    var PooledClass/*a*/ = t("PooledClass"),
        emptyFunction/*s*/ = t("emptyFunction"),
        getEventTarget/*l*/ = t("getEventTarget"),
        u = {
            type: null,
            target: getEventTarget/*l*/,
            currentTarget: emptyFunction/*s*/.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
    Object.assign(o.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1, this.isDefaultPrevented = emptyFunction/*s*/.thatReturnsTrue
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this.isPropagationStopped = emptyFunction/*s*/.thatReturnsTrue
        },
        persist: function() {
            this.isPersistent = emptyFunction/*s*/.thatReturnsTrue
        },
        isPersistent: emptyFunction/*s*/.thatReturnsFalse,
        destructor: function() {
            var e = this.constructor.Interface;
            for (var t in e) this[t] = null;
            this.dispatchConfig = null, this.dispatchMarker = null, this.nativeEvent = null
        }
    }), o.Interface = u, o.augmentClass = function(e, t) {
        var n = this,
            r = Object.create(n.prototype);
        Object.assign(r, e.prototype), e.prototype = r, e.prototype.constructor = e, e.Interface = Object.assign({}, n.Interface, t), e.augmentClass = n.augmentClass, PooledClass/*a*/.addPoolingTo(e, PooledClass/*a*/.threeArgumentPooler)
    }, PooledClass/*a*/.addPoolingTo(o, PooledClass/*a*/.threeArgumentPooler), i.exports = o
});