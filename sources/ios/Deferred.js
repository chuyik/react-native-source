__d("Deferred",[],function (e, t, n, r, i) {
    function o(e, t) {
        return e ? _.call(e, t) : g
    }

    function a(e, t) {
        return t < e.length ? o(e, t) : g
    }

    function s() {
        "use strict";
        this.$Deferred_status = l
    }
    var l = 0,
        u = 1,
        c = 2,
        p = 4,
        d = "callbacks",
        h = "errbacks",
        f = "cancelbacks",
        m = "completeCallbacks",
        g = [],
        _ = g.slice,
        y = g.unshift;
    s.prototype.addCallback = function(e, t) {
        "use strict";
        return this.$Deferred_addCallback(u, this.$Deferred_retrieveOrCreate(d), e, t, a(arguments, 2))
    }, s.prototype.removeCallback = function(e, t) {
        "use strict";
        return this.$Deferred_removeCallback(this.$Deferred_retrieveOrCreate(d), e, t)
    }, s.prototype.addCompleteCallback = function(e, t) {
        "use strict";
        return this.$Deferred_addCallback(null, this.$Deferred_retrieveOrCreate(m), e, t, a(arguments, 2))
    }, s.prototype.removeCompleteCallback = function(e, t) {
        "use strict";
        return this.$Deferred_removeCallback(this.$Deferred_retrieveOrCreate(m), e, t)
    }, s.prototype.addErrback = function(e, t) {
        "use strict";
        return this.$Deferred_addCallback(c, this.$Deferred_retrieveOrCreate(h), e, t, a(arguments, 2))
    }, s.prototype.removeErrback = function(e, t) {
        "use strict";
        return this.$Deferred_removeCallback(this.$Deferred_retrieveOrCreate(h), e, t)
    }, s.prototype.addCancelback = function(e, t) {
        "use strict";
        return this.$Deferred_addCallback(p, this.$Deferred_retrieveOrCreate(f), e, t, a(arguments, 2))
    }, s.prototype.removeCancelback = function(e, t) {
        "use strict";
        return this.$Deferred_removeCallback(this.$Deferred_retrieveOrCreate(f), e, t)
    }, s.prototype.getStatus = function() {
        "use strict";
        return this.$Deferred_status
    }, s.prototype.setStatus = function(e) {
        "use strict";
        var t;
        return this.$Deferred_status = e, this.callbackArgs = o(arguments, 1), e === c ? t = h : e === u ? t = d : e === p && (t = f), t && this.$Deferred_runCallbacks(this[t], this.callbackArgs), this.$Deferred_runCallbacks(this[m], this.callbackArgs), this
    }, s.prototype.setTimeout = function(e) {
        "use strict";
        this.timeout && this.clearTimeout(), this.$Deferred_boundFail = this.$Deferred_boundFail || this.fail.bind(this), this.timeout = window.setTimeout(this.$Deferred_boundFail, e)
    }, s.prototype.clearTimeout = function() {
        "use strict";
        window.clearTimeout(this.timeout), delete this.timeout
    }, s.prototype.succeed = function() {
        "use strict";
        return this.$Deferred_notify(u, arguments)
    }, s.prototype.fail = function() {
        "use strict";
        return this.$Deferred_notify(c, arguments)
    }, s.prototype.cancel = function() {
        "use strict";
        return delete this[d], delete this[h], this.$Deferred_notify(p, arguments)
    }, s.prototype.$Deferred_notify = function(e, t) {
        "use strict";
        return y.call(t, e), this.setStatus.apply(this, t)
    }, s.prototype.$Deferred_retrieveOrCreate = function(e) {
        "use strict";
        return this[e] || (this[e] = [])
    }, s.prototype.then = function(e) {
        "use strict";
        var e, t, n, r = new s,
            i = o(arguments, 0);
        "function" == typeof i[0] && (e = i.shift()), "function" == typeof i[0] && (t = i.shift()), "function" == typeof i[0] && (n = i.shift());
        var a = i.shift();
        if (e) {
            var l = [this.$Deferred_thenCallback, this, r, "succeed", e, a].concat(i);
            this.addCallback.apply(this, l)
        } else this.addCallback(r.succeed, r);
        if (t) {
            var u = [this.$Deferred_thenCallback, this, r, "fail", t, a].concat(i);
            this.addErrback.apply(this, u)
        } else this.addErrback(r.fail, r);
        if (n) {
            var c = [this.$Deferred_thenCallback, this, r, "cancel", n, a].concat(i);
            this.addCancelback.apply(this, c)
        } else this.addCancelback(r.cancel, r);
        return r
    }, s.prototype.$Deferred_addCallback = function(e, t, n, r, i) {
        "use strict";
        var o = this.getStatus();
        return !e && o !== l || o === e ? n.apply(r || this, i.concat(this.callbackArgs)) : t.push(n, r, i), this
    }, s.prototype.$Deferred_removeCallback = function(e, t, n) {
        "use strict";
        for (var r = 0; r < e.length; r += 3)
            if (e[r] === t && (!n || e[r + 1] === n)) {
                if (e.splice(r, 3), n) break;
                r -= 3
            }
        return this
    }, s.prototype.pipe = function(e) {
        "use strict";
        this.addCallback(e.succeed, e).addErrback(e.fail, e).addCancelback(e.cancel, e)
    }, s.prototype.$Deferred_runCallbacks = function(e, t) {
        "use strict";
        for (var n = 0; n < (e || g).length; n += 3) e[n].apply(e[n + 1] || this, (e[n + 2] || g).concat(t))
    }, s.prototype.$Deferred_thenCallback = function(e, t, n, r) {
        "use strict";
        var i = o(arguments, 4),
            a = n.apply(r, i);
        a instanceof s ? a.pipe(e) : e[t](a)
    }, s.STATUS_UNKNOWN = l, s.STATUS_SUCCEEDED = u, s.STATUS_CANCELED = p, s.STATUS_FAILED = c, i.exports = s
});