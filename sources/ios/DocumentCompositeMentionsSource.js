__d("DocumentCompositeMentionsSource",["emptyFunction","invariant"],function (e, t, n, r, i) {
    function o(e, t) {
        for (var n = e.getEntities(), r = t; null === n[r - 1];) r--;
        return e.getText().slice(r, t)
    }

    function a(e) {
        "use strict";
        e.length > 0 || invariant/*l*/(0, "Must provide at least one DocumentMentionsSource."), this.$DocumentCompositeMentionsSource_sources = e, this.$DocumentCompositeMentionsSource_bootstrapped = !1, this.$DocumentCompositeMentionsSource_currentMatch = null
    }
    var emptyFunction/*s*/ = t("emptyFunction"),
        invariant/*l*/ = t("invariant");
    a.prototype.bootstrap = function(e) {
        "use strict";

        function t() {
            n--, n || e()
        }
        if (!this.$DocumentCompositeMentionsSource_bootstrapped) {
            this.$DocumentCompositeMentionsSource_bootstrapped = !0, e = e || emptyFunction/*s*/;
            var n = this.$DocumentCompositeMentionsSource_sources.length;
            this.$DocumentCompositeMentionsSource_sources.forEach(function(e) {
                e.bootstrap(t)
            })
        }
    }, a.prototype.search = function(e, t, n) {
        "use strict";
        for (var r, i, a = this.$DocumentCompositeMentionsSource_sources.length, emptyFunction/*s*/ = o(e, t), invariant/*l*/ = 0; a > invariant/*l*/; invariant/*l*/++)
            if (r = this.$DocumentCompositeMentionsSource_sources[invariant/*l*/], i = r.findMatch(emptyFunction/*s*/), null !== i) {
                var u = i.matchingString;
                return this.$DocumentCompositeMentionsSource_currentMatch = u, void r.search(u, function(e, t) {
                    this.$DocumentCompositeMentionsSource_currentMatch === t && n(e, i.leadOffset)
                }.bind(this))
            }
        this.$DocumentCompositeMentionsSource_currentMatch = null, n(null, null)
    }, i.exports = a
});