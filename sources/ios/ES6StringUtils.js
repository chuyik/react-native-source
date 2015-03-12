__d("ES6StringUtils",[],function (e, t, n, r, i) {
    var o = {
        fromCodePoint: function() {
            for (var e = [], t = 0, n = arguments.length; n > t; t++) e.push(arguments[t]);
            if (String.fromCodePoint) return String.fromCodePoint.apply(this, e);
            for (var r = [], i = 0; i < e.length; i++) {
                var o = Number(e[i]);
                if (!isFinite(o) || 0 > o || o > 1114111 || Math.floor(o) != o) throw RangeError("Invalid code point: " + e[i]);
                65536 > o ? r.push(String.fromCharCode(o)) : (o -= 65536, r.push(String.fromCharCode((o >> 10) + 55296), String.fromCharCode(o % 1024 + 56320)))
            }
            return r.join("")
        },
        codePointAt: function(e) {
            "use strict";
            if (String.prototype.codePointAt) return String.prototype.codePointAt.call(this, e);
            if (null === this || void 0 === this) throw TypeError("Invalid context: " + this);
            var t = String(this),
                n = t.length;
            if (e = e ? Number(e) : 0, e != e && (e = 0), 0 > e || e >= n) return void 0;
            var r = t.charCodeAt(e);
            if (r >= 55296 && 56319 >= r && n > e + 1) {
                var i = t.charCodeAt(e + 1);
                if (i >= 56320 && 57343 >= i) return 1024 * (r - 55296) + i - 56320 + 65536
            }
            return r
        }
    };
    i.exports = o
});