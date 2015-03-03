__d("DocumentMentionsSource",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        "use strict";
        "function" != typeof global/*e*/.findMentionableString && a(0, "Search strategy must include a `findMentionableString` method."), this.$DocumentMentionsSource_searchStrategy = global/*e*/, this.$DocumentMentionsSource_searchSource = require/*t*/, this.$DocumentMentionsSource_bootstrapped = !1
    }
    var a = require/*t*/("invariant");
    o.prototype.findMatch = function(global/*e*/) {
        "use strict";
        return this.$DocumentMentionsSource_searchStrategy.findMentionableString(global/*e*/)
    }, o.prototype.bootstrap = function(global/*e*/) {
        "use strict";
        this.$DocumentMentionsSource_bootstrapped || (this.$DocumentMentionsSource_bootstrapped = !0, this.$DocumentMentionsSource_searchSource.bootstrap(global/*e*/))
    }, o.prototype.search = function(global/*e*/, require/*t*/) {
        "use strict";
        this.$DocumentMentionsSource_searchSource.search(global/*e*/, require/*t*/)
    }, module/*i*/.exports = o
});