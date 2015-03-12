__d("TimerMixin",[],function (e, t, n, r, i) {
    "use strict";
    var o = function(e, t, n) {
            return function(r, i) {
                var o = e(function() {
                    t.call(this, o), r.apply(this, arguments)
                }.bind(this), i);
                return this[n] ? this[n].push(o) : this[n] = [o], o
            }
        },
        a = function(e, t) {
            return function(n) {
                if (this[t]) {
                    var r = this[t].indexOf(n); - 1 !== r && this[t].splice(r, 1)
                }
                e(n)
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
    i.exports = v
});