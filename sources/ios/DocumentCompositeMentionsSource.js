__d("DocumentCompositeMentionsSource",["emptyFunction","invariant"],function (global/*e*/, require/*exports/*invariant/*t*/*/*/, requireDynamic/*n*/, requireLazy/*emptyFunction/*r*/*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*invariant/*t*/*/*/) {
        for (var requireDynamic/*n*/ = global/*e*/.getEntities(), requireLazy/*emptyFunction/*r*/*/ = require/*exports/*invariant/*t*/*/*/; null === requireDynamic/*n*/[requireLazy/*emptyFunction/*r*/*/ - 1];) requireLazy/*emptyFunction/*r*/*/--;
        return global/*e*/.getText().slice(requireLazy/*emptyFunction/*r*/*/, require/*exports/*invariant/*t*/*/*/)
    }

    function a(global/*e*/) {
        "use strict";
        global/*e*/.length > 0 || l(0, "Must provide at least one DocumentMentionsSource."), this.$DocumentCompositeMentionsSource_sources = global/*e*/, this.$DocumentCompositeMentionsSource_bootstrapped = !1, this.$DocumentCompositeMentionsSource_currentMatch = null
    }
    var s = require/*exports/*invariant/*t*/*/*/("emptyFunction"),
        l = require/*exports/*invariant/*t*/*/*/("invariant");
    a.prototype.bootstrap = function(global/*e*/) {
        "use strict";

        function require/*exports/*invariant/*t*/*/*/() {
            requireDynamic/*n*/--, requireDynamic/*n*/ || global/*e*/()
        }
        if (!this.$DocumentCompositeMentionsSource_bootstrapped) {
            this.$DocumentCompositeMentionsSource_bootstrapped = !0, global/*e*/ = global/*e*/ || s;
            var requireDynamic/*n*/ = this.$DocumentCompositeMentionsSource_sources.length;
            this.$DocumentCompositeMentionsSource_sources.forEach(function(global/*e*/) {
                global/*e*/.bootstrap(require/*exports/*invariant/*t*/*/*/)
            })
        }
    }, a.prototype.search = function(global/*e*/, require/*exports/*invariant/*t*/*/*/, requireDynamic/*n*/) {
        "use strict";
        for (var requireLazy/*emptyFunction/*r*/*/, module/*i*/, a = this.$DocumentCompositeMentionsSource_sources.length, s = o(global/*e*/, require/*exports/*invariant/*t*/*/*/), l = 0; a > l; l++)
            if (requireLazy/*emptyFunction/*r*/*/ = this.$DocumentCompositeMentionsSource_sources[l], module/*i*/ = requireLazy/*emptyFunction/*r*/*/.findMatch(s), null !== module/*i*/) {
                var u = module/*i*/.matchingString;
                return this.$DocumentCompositeMentionsSource_currentMatch = u, void requireLazy/*emptyFunction/*r*/*/.search(u, function(global/*e*/, require/*exports/*invariant/*t*/*/*/) {
                    this.$DocumentCompositeMentionsSource_currentMatch === require/*exports/*invariant/*t*/*/*/ && requireDynamic/*n*/(global/*e*/, module/*i*/.leadOffset)
                }.bind(this))
            }
        this.$DocumentCompositeMentionsSource_currentMatch = null, requireDynamic/*n*/(null, null)
    }, module/*i*/.exports = a
});