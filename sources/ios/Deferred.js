__d("Deferred",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        return global/*e*/ ? _.call(global/*e*/, require/*exports/*t*/*/) : g
    }

    function a(global/*e*/, require/*exports/*t*/*/) {
        return require/*exports/*t*/*/ < global/*e*/.length ? o(global/*e*/, require/*exports/*t*/*/) : g
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
    s.prototype.addCallback = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.$Deferred_addCallback(u, this.$Deferred_retrieveOrCreate(d), global/*e*/, require/*exports/*t*/*/, a(arguments, 2))
    }, s.prototype.removeCallback = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.$Deferred_removeCallback(this.$Deferred_retrieveOrCreate(d), global/*e*/, require/*exports/*t*/*/)
    }, s.prototype.addCompleteCallback = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.$Deferred_addCallback(null, this.$Deferred_retrieveOrCreate(m), global/*e*/, require/*exports/*t*/*/, a(arguments, 2))
    }, s.prototype.removeCompleteCallback = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.$Deferred_removeCallback(this.$Deferred_retrieveOrCreate(m), global/*e*/, require/*exports/*t*/*/)
    }, s.prototype.addErrback = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.$Deferred_addCallback(c, this.$Deferred_retrieveOrCreate(h), global/*e*/, require/*exports/*t*/*/, a(arguments, 2))
    }, s.prototype.removeErrback = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.$Deferred_removeCallback(this.$Deferred_retrieveOrCreate(h), global/*e*/, require/*exports/*t*/*/)
    }, s.prototype.addCancelback = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.$Deferred_addCallback(p, this.$Deferred_retrieveOrCreate(f), global/*e*/, require/*exports/*t*/*/, a(arguments, 2))
    }, s.prototype.removeCancelback = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.$Deferred_removeCallback(this.$Deferred_retrieveOrCreate(f), global/*e*/, require/*exports/*t*/*/)
    }, s.prototype.getStatus = function() {
        "use strict";
        return this.$Deferred_status
    }, s.prototype.setStatus = function(global/*e*/) {
        "use strict";
        var require/*exports/*t*/*/;
        return this.$Deferred_status = global/*e*/, this.callbackArgs = o(arguments, 1), global/*e*/ === c ? require/*exports/*t*/*/ = h : global/*e*/ === u ? require/*exports/*t*/*/ = d : global/*e*/ === p && (require/*exports/*t*/*/ = f), require/*exports/*t*/*/ && this.$Deferred_runCallbacks(this[require/*exports/*t*/*/], this.callbackArgs), this.$Deferred_runCallbacks(this[m], this.callbackArgs), this
    }, s.prototype.setTimeout = function(global/*e*/) {
        "use strict";
        this.timeout && this.clearTimeout(), this.$Deferred_boundFail = this.$Deferred_boundFail || this.fail.bind(this), this.timeout = window.setTimeout(this.$Deferred_boundFail, global/*e*/)
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
    }, s.prototype.$Deferred_notify = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return y.call(require/*exports/*t*/*/, global/*e*/), this.setStatus.apply(this, require/*exports/*t*/*/)
    }, s.prototype.$Deferred_retrieveOrCreate = function(global/*e*/) {
        "use strict";
        return this[global/*e*/] || (this[global/*e*/] = [])
    }, s.prototype.then = function(global/*e*/) {
        "use strict";
        var global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/ = new s,
            module/*i*/ = o(arguments, 0);
        "function" == typeof module/*i*/[0] && (global/*e*/ = module/*i*/.shift()), "function" == typeof module/*i*/[0] && (require/*exports/*t*/*/ = module/*i*/.shift()), "function" == typeof module/*i*/[0] && (requireDynamic/*n*/ = module/*i*/.shift());
        var a = module/*i*/.shift();
        if (global/*e*/) {
            var l = [this.$Deferred_thenCallback, this, requireLazy/*r*/, "succeed", global/*e*/, a].concat(module/*i*/);
            this.addCallback.apply(this, l)
        } else this.addCallback(requireLazy/*r*/.succeed, requireLazy/*r*/);
        if (require/*exports/*t*/*/) {
            var u = [this.$Deferred_thenCallback, this, requireLazy/*r*/, "fail", require/*exports/*t*/*/, a].concat(module/*i*/);
            this.addErrback.apply(this, u)
        } else this.addErrback(requireLazy/*r*/.fail, requireLazy/*r*/);
        if (requireDynamic/*n*/) {
            var c = [this.$Deferred_thenCallback, this, requireLazy/*r*/, "cancel", requireDynamic/*n*/, a].concat(module/*i*/);
            this.addCancelback.apply(this, c)
        } else this.addCancelback(requireLazy/*r*/.cancel, requireLazy/*r*/);
        return requireLazy/*r*/
    }, s.prototype.$Deferred_addCallback = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
        "use strict";
        var o = this.getStatus();
        return !global/*e*/ && o !== l || o === global/*e*/ ? requireDynamic/*n*/.apply(requireLazy/*r*/ || this, module/*i*/.concat(this.callbackArgs)) : require/*exports/*t*/*/.push(requireDynamic/*n*/, requireLazy/*r*/, module/*i*/), this
    }, s.prototype.$Deferred_removeCallback = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        "use strict";
        for (var requireLazy/*r*/ = 0; requireLazy/*r*/ < global/*e*/.length; requireLazy/*r*/ += 3)
            if (global/*e*/[requireLazy/*r*/] === require/*exports/*t*/*/ && (!requireDynamic/*n*/ || global/*e*/[requireLazy/*r*/ + 1] === requireDynamic/*n*/)) {
                if (global/*e*/.splice(requireLazy/*r*/, 3), requireDynamic/*n*/) break;
                requireLazy/*r*/ -= 3
            }
        return this
    }, s.prototype.pipe = function(global/*e*/) {
        "use strict";
        this.addCallback(global/*e*/.succeed, global/*e*/).addErrback(global/*e*/.fail, global/*e*/).addCancelback(global/*e*/.cancel, global/*e*/)
    }, s.prototype.$Deferred_runCallbacks = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < (global/*e*/ || g).length; requireDynamic/*n*/ += 3) global/*e*/[requireDynamic/*n*/].apply(global/*e*/[requireDynamic/*n*/ + 1] || this, (global/*e*/[requireDynamic/*n*/ + 2] || g).concat(require/*exports/*t*/*/))
    }, s.prototype.$Deferred_thenCallback = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
        "use strict";
        var module/*i*/ = o(arguments, 4),
            a = requireDynamic/*n*/.apply(requireLazy/*r*/, module/*i*/);
        a instanceof s ? a.pipe(global/*e*/) : global/*e*/[require/*exports/*t*/*/](a)
    }, s.STATUS_UNKNOWN = l, s.STATUS_SUCCEEDED = u, s.STATUS_CANCELED = p, s.STATUS_FAILED = c, module/*i*/.exports = s
});