__d("ClientIDs",["randomInt"],function (e, t, n, r, i) {
    var randomInt/*o*/ = t("randomInt"),
        a = {},
        s = {
            getNewClientID: function() {
                var e = Date.now(),
                    t = e + ":" + (randomInt/*o*/(0, 4294967295) + 1);
                return a[t] = !0, t
            },
            isExistingClientID: function(e) {
                return !!a[e]
            }
        };
    i.exports = s
});