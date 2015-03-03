__d("TimerMixin",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
            return function(requireLazy/*r*/, module/*i*/) {
                var o = global/*e*/(function() {
                    require/*exports/*t*/*/.call(this, o), requireLazy/*r*/.apply(this, arguments)
                }.bind(this), module/*i*/);
                return this[requireDynamic/*n*/] ? this[requireDynamic/*n*/].push(o) : this[requireDynamic/*n*/] = [o], o
            }
        },
        a = function(global/*e*/, require/*exports/*t*/*/) {
            return function(requireDynamic/*n*/) {
                if (this[require/*exports/*t*/*/]) {
                    var requireLazy/*r*/ = this[require/*exports/*t*/*/].indexOf(requireDynamic/*n*/); - 1 !== requireLazy/*r*/ && this[require/*exports/*t*/*/].splice(requireLazy/*r*/, 1)
                }
                global/*e*/(requireDynamic/*n*/)
            }
        },
        s = "TimerMixin_timeouts",
        l = a(clearTimeout, s),
        u = o(setTimeout, l, s),
        c = "TimerMixin_intervals",
        p = a(clearInterval, c),
        d = o(setInterval, function() {}, c),
        h = "TimerMixin_immediates",
        f = a(clearImmediate, h),
        m = o(setImmediate, f, h),
        g = "TimerMixin_rafs",
        _ = a(cancelAnimationFrame, g),
        y = o(requestAnimationFrame, _, g),
        v = {
            componentWillUnmount: function() {
                this[s] && this[s].forEach(this.clearTimeout), this[c] && this[c].forEach(this.clearInterval), this[h] && this[h].forEach(this.clearImmediate), this[g] && this[g].forEach(this.cancelAnimationFrame)
            },
            setTimeout: u,
            clearTimeout: l,
            setInterval: d,
            clearInterval: p,
            setImmediate: m,
            clearImmediate: f,
            requestAnimationFrame: y,
            cancelAnimationFrame: _
        };
    module/*i*/.exports = v
});