__d("DocumentMentionsSource",["invariant"],function (e, t, n, r, i) {
    function o(e, t) {
        "use strict";
        "function" != typeof e.findMentionableString && invariant/*a*/(0, "Search strategy must include invariant/*a*/ `findMentionableString` method."), this.$DocumentMentionsSource_searchStrategy = e, this.$DocumentMentionsSource_searchSource = t, this.$DocumentMentionsSource_bootstrapped = !1
    }
    var invariant/*a*/ = t("invariant");
    o.prototype.findMatch = function(e) {
        "use strict";
        return this.$DocumentMentionsSource_searchStrategy.findMentionableString(e)
    }, o.prototype.bootstrap = function(e) {
        "use strict";
        this.$DocumentMentionsSource_bootstrapped || (this.$DocumentMentionsSource_bootstrapped = !0, this.$DocumentMentionsSource_searchSource.bootstrap(e))
    }, o.prototype.search = function(e, t) {
        "use strict";
        this.$DocumentMentionsSource_searchSource.search(e, t)
    }, i.exports = o
});