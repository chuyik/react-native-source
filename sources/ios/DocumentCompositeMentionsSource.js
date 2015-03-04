__d("DocumentCompositeMentionsSource",["emptyFunction","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        for (var requireDynamic/*n*/ = global/*e*/.getEntities(), requireLazy/*r*/ = require/*t*/; null === requireDynamic/*n*/[requireLazy/*r*/ - 1];) requireLazy/*r*/--;
        return global/*e*/.getText().slice(requireLazy/*r*/, require/*t*/)
    }

    function a(global/*e*/) {
        "use strict";
        global/*e*/.length > 0 || invariant/*l*/(0, "Must provide at least one DocumentMentionsSource."), this.$DocumentCompositeMentionsSource_sources = global/*e*/, this.$DocumentCompositeMentionsSource_bootstrapped = !1, this.$DocumentCompositeMentionsSource_currentMatch = null
    }
    var emptyFunction/*s*/ = require/*t*/("emptyFunction"),
        invariant/*l*/ = require/*t*/("invariant");
    a.prototype.bootstrap = function(global/*e*/) {
        "use strict";

        function require/*t*/() {
            requireDynamic/*n*/--, requireDynamic/*n*/ || global/*e*/()
        }
        if (!this.$DocumentCompositeMentionsSource_bootstrapped) {
            this.$DocumentCompositeMentionsSource_bootstrapped = !0, global/*e*/ = global/*e*/ || emptyFunction/*s*/;
            var requireDynamic/*n*/ = this.$DocumentCompositeMentionsSource_sources.length;
            this.$DocumentCompositeMentionsSource_sources.forEach(function(global/*e*/) {
                global/*e*/.bootstrap(require/*t*/)
            })
        }
    }, a.prototype.search = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        for (var requireLazy/*r*/, module/*i*/, a = this.$DocumentCompositeMentionsSource_sources.length, emptyFunction/*s*/ = o(global/*e*/, require/*t*/), invariant/*l*/ = 0; a > invariant/*l*/; invariant/*l*/++)
            if (requireLazy/*r*/ = this.$DocumentCompositeMentionsSource_sources[invariant/*l*/], module/*i*/ = requireLazy/*r*/.findMatch(emptyFunction/*s*/), null !== module/*i*/) {
                var u = module/*i*/.matchingString;
                return this.$DocumentCompositeMentionsSource_currentMatch = u, void requireLazy/*r*/.search(u, function(global/*e*/, require/*t*/) {
                    this.$DocumentCompositeMentionsSource_currentMatch === require/*t*/ && requireDynamic/*n*/(global/*e*/, module/*i*/.leadOffset)
                }.bind(this))
            }
        this.$DocumentCompositeMentionsSource_currentMatch = null, requireDynamic/*n*/(null, null)
    }, module/*i*/.exports = a
});