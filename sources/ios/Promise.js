__d("Promise",["ES6Promise","invariant","setImmediate","throwImmediate"],function (e, t, n, r, i) {
    var ES6Promise/*o*/ = t("ES6Promise"),
        a = ES6Promise/*o*/.prototype,
        invariant/*s*/ = t("invariant"),
        l = (t("setImmediate"), t("throwImmediate"));
    a.finally = function(e) {
        return this.then(e, e)
    }, a.done = function(e, t) {
        this.then(e, t).then(null, l)
    }, ES6Promise/*o*/.allObject = function(e) {
        Array.isArray(e) && invariant/*s*/(0, "expected an object, got an array instead");
        var t = Object.keys(e);
        return ES6Promise/*o*/.all(t.map(function(t) {
            return e[t]
        })).then(function(e) {
            var n = {};
            return e.forEach(function(e, r) {
                n[t[r]] = e
            }), n
        })
    }, i.exports = ES6Promise/*o*/
});