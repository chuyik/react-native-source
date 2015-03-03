__d("SearchSourceCallbackManager",["createObjectFrom","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        "use strict";
        this.$SearchSourceCallbackManager_parseFn = global/*e*/.parseFn, "function" != typeof this.$SearchSourceCallbackManager_parseFn && l(0, "Your config must specify a parse function."), exports/*this.$SearchSourceCallbackManager_matchFn*/ = global/*e*/.matchFn, "function" != typeof exports/*this.$SearchSourceCallbackManager_matchFn*/ && l(0, "Your config must specify a match function."), createObjectFrom/*this.$SearchSourceCallbackManager_alwaysPrefixMatch*/ = global/*e*/.alwaysPrefixMatch || !1, invariant/*this.$SearchSourceCallbackManager_indexFn*/ = global/*e*/.indexFn || a, this.reset()
    }

    function a(global/*e*/) {
        return [global/*e*/.getTitle(), global/*e*/.getKeywordString()].join(" ")
    }
    var s = require/*t*/("createObjectFrom"),
        l = require/*t*/("invariant");
    o.prototype.search = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        var requireLazy/*r*/ = this.$SearchSourceCallbackManager_executeCallback(global/*e*/, require/*t*/, requireDynamic/*n*/);
        if (requireLazy/*r*/) return 0;
        this.$SearchSourceCallbackManager_allRequests.push({
            queryString: global/*e*/,
            callback: require/*t*/,
            options: requireDynamic/*n*/
        });
        var module/*i*/ = this.$SearchSourceCallbackManager_allRequests.length - 1;
        return this.$SearchSourceCallbackManager_pendingCallbackIDs.push(module/*i*/), module/*i*/
    }, o.prototype.$SearchSourceCallbackManager_executeCallback = function(global/*e*/, require/*t*/) {
        "use strict";
        var requireDynamic/*n*/ = this.$SearchSourceCallbackManager_getMatchingIDs(global/*e*/),
            requireLazy/*r*/ = !!this.$SearchSourceCallbackManager_exhaustedQueryStrings[global/*e*/];
        if (!requireDynamic/*n*/.length) return require/*t*/([], global/*e*/), requireLazy/*r*/;
        var module/*i*/ = requireDynamic/*n*/.map(function(global/*e*/) {
            return this.$SearchSourceCallbackManager_entriesMap[global/*e*/]
        }, this);
        return require/*t*/(module/*i*/, global/*e*/), requireLazy/*r*/
    }, o.prototype.$SearchSourceCallbackManager_runPendingCallbacks = function() {
        "use strict";
        var global/*e*/ = this.$SearchSourceCallbackManager_pendingCallbackIDs;
        this.$SearchSourceCallbackManager_pendingCallbackIDs = [], global/*e*/.forEach(this.$SearchSourceCallbackManager_executePendingAndCleanUp, this)
    }, o.prototype.$SearchSourceCallbackManager_executePendingAndCleanUp = function(global/*e*/) {
        "use strict";
        var require/*t*/ = this.$SearchSourceCallbackManager_allRequests[global/*e*/];
        if (require/*t*/) {
            var requireDynamic/*n*/ = this.$SearchSourceCallbackManager_executeCallback(require/*t*/.queryString, require/*t*/.callback, require/*t*/.options);
            return requireDynamic/*n*/ ? void delete this.$SearchSourceCallbackManager_allRequests[global/*e*/] : void this.$SearchSourceCallbackManager_pendingCallbackIDs.push(global/*e*/)
        }
    }, o.prototype.reset = function() {
        "use strict";
        this.$SearchSourceCallbackManager_entriesMap = {}, this.$SearchSourceCallbackManager_textMap = {}, this.$SearchSourceCallbackManager_localCache = {}, this.$SearchSourceCallbackManager_queryCache = {}, this.$SearchSourceCallbackManager_exhaustedQueryStrings = {}, this.$SearchSourceCallbackManager_pendingCallbackIDs = [], this.$SearchSourceCallbackManager_allRequests = [void 0]
    }, o.prototype.addLocalEntries = function(global/*e*/) {
        "use strict";
        global/*e*/.forEach(function(global/*e*/) {
            var require/*t*/ = global/*e*/.getUniqueID(),
                requireDynamic/*n*/ = invariant/*this.$SearchSourceCallbackManager_indexFn*/(global/*e*/);
            this.$SearchSourceCallbackManager_entriesMap[require/*t*/] = global/*e*/, this.$SearchSourceCallbackManager_textMap[require/*t*/] = requireDynamic/*n*/;
            var requireLazy/*r*/ = this.$SearchSourceCallbackManager_parseFn(requireDynamic/*n*/);
            requireLazy/*r*/.tokens.forEach(function(global/*e*/) {
                this.$SearchSourceCallbackManager_localCache.hasOwnProperty(global/*e*/) || (this.$SearchSourceCallbackManager_localCache[global/*e*/] = {}), this.$SearchSourceCallbackManager_localCache[global/*e*/][require/*t*/] = !0
            }, this)
        }, this), this.$SearchSourceCallbackManager_runPendingCallbacks()
    }, o.prototype.addQueryEntries = function(global/*e*/, require/*t*/) {
        "use strict";
        var requireDynamic/*n*/ = this.$SearchSourceCallbackManager_getMatchingIDs(require/*t*/),
            requireLazy/*r*/ = this.$SearchSourceCallbackManager_parseFn(require/*t*/).flatValue;
        this.$SearchSourceCallbackManager_queryCache[requireLazy/*r*/] = s(requireDynamic/*n*/, !0), global/*e*/.forEach(function(global/*e*/) {
            var require/*t*/ = global/*e*/.getUniqueID();
            this.$SearchSourceCallbackManager_entriesMap[require/*t*/] = global/*e*/, this.$SearchSourceCallbackManager_textMap[require/*t*/] = invariant/*this.$SearchSourceCallbackManager_indexFn*/(global/*e*/), this.$SearchSourceCallbackManager_queryCache[requireLazy/*r*/][require/*t*/] = !0
        }, this), this.$SearchSourceCallbackManager_runPendingCallbacks()
    }, o.prototype.unsubscribe = function(global/*e*/) {
        "use strict";
        delete this.$SearchSourceCallbackManager_allRequests[global/*e*/]
    }, o.prototype.removeEntry = function(global/*e*/) {
        "use strict";
        delete this.$SearchSourceCallbackManager_entriesMap[global/*e*/]
    }, o.prototype.getAllEntriesMap = function() {
        "use strict";
        return this.$SearchSourceCallbackManager_entriesMap
    }, o.prototype.setQueryStringAsExhausted = function(global/*e*/) {
        "use strict";
        this.$SearchSourceCallbackManager_exhaustedQueryStrings[global/*e*/] = !0
    }, o.prototype.unsetQueryStringAsExhausted = function(global/*e*/) {
        "use strict";
        delete this.$SearchSourceCallbackManager_exhaustedQueryStrings[global/*e*/]
    }, o.prototype.$SearchSourceCallbackManager_getMatchingIDs = function(global/*e*/) {
        "use strict";
        var require/*t*/ = this.$SearchSourceCallbackManager_applyMandatorySort(global/*e*/, this.$SearchSourceCallbackManager_findLocalMatches(global/*e*/)),
            requireDynamic/*n*/ = this.$SearchSourceCallbackManager_applyMandatorySort(global/*e*/, this.$SearchSourceCallbackManager_findQueryMatches(global/*e*/)),
            requireLazy/*r*/ = require/*t*/.concat(requireDynamic/*n*/),
            module/*i*/ = {},
            o = [];
        return requireLazy/*r*/.forEach(function(global/*e*/) {
            module/*i*/[global/*e*/] || void 0 === this.$SearchSourceCallbackManager_entriesMap[global/*e*/] || (o.push(global/*e*/), module/*i*/[global/*e*/] = !0)
        }, this), o
    }, o.prototype.$SearchSourceCallbackManager_applyMandatorySort = function(global/*e*/, require/*t*/) {
        "use strict";

        function requireDynamic/*n*/(global/*e*/, require/*t*/) {
            if (requireLazy/*r*/[global/*e*/] !== requireLazy/*r*/[require/*t*/]) return requireLazy/*r*/[global/*e*/] ? -1 : 1;
            var requireDynamic/*n*/ = module/*i*/[global/*e*/],
                o = module/*i*/[require/*t*/];
            if (requireDynamic/*n*/.getOrder() !== o.getOrder()) return requireDynamic/*n*/.getOrder() - o.getOrder();
            var a = requireDynamic/*n*/.getTitle().length,
                s = o.getTitle().length;
            return a !== s ? a - s : requireDynamic/*n*/.getUniqueID() - o.getUniqueID()
        }
        var requireLazy/*r*/ = this.$SearchSourceCallbackManager_getExtendedMatchMap(global/*e*/, require/*t*/),
            module/*i*/ = this.$SearchSourceCallbackManager_entriesMap;
        return require/*t*/.sort(requireDynamic/*n*/).slice()
    }, o.prototype.$SearchSourceCallbackManager_getExtendedMatchMap = function(global/*e*/, require/*t*/) {
        "use strict";
        var requireDynamic/*n*/ = {};
        return require/*t*/.forEach(function(require/*t*/) {
            requireDynamic/*n*/[require/*t*/] = exports/*this.$SearchSourceCallbackManager_matchFn*/(global/*e*/, this.$SearchSourceCallbackManager_textMap[require/*t*/])
        }, this), requireDynamic/*n*/
    }, o.prototype.$SearchSourceCallbackManager_findLocalMatches = function(global/*e*/) {
        "use strict";
        var require/*t*/ = this.$SearchSourceCallbackManager_parseFn(global/*e*/, createObjectFrom/*this.$SearchSourceCallbackManager_alwaysPrefixMatch*/),
            requireDynamic/*n*/ = createObjectFrom/*this.$SearchSourceCallbackManager_alwaysPrefixMatch*/ ? require/*t*/.sortedTokens : require/*t*/.tokens,
            requireLazy/*r*/ = requireDynamic/*n*/.length,
            module/*i*/ = require/*t*/.isPrefixQuery ? requireLazy/*r*/ - 1 : null,
            o = {},
            a = {},
            s = {},
            l = !1,
            u = {},
            c = 0;
        requireDynamic/*n*/.forEach(function(global/*e*/, require/*t*/) {
            if (!u.hasOwnProperty(global/*e*/)) {
                c++, u[global/*e*/] = !0;
                for (var requireDynamic/*n*/ in this.$SearchSourceCallbackManager_localCache) {
                    var requireLazy/*r*/ = requireDynamic/*n*/ === global/*e*/ && !o.hasOwnProperty(requireDynamic/*n*/),
                        p = !1;
                    if (requireLazy/*r*/ || (p = (createObjectFrom/*this.$SearchSourceCallbackManager_alwaysPrefixMatch*/ || module/*i*/ === require/*t*/) && 0 === requireDynamic/*n*/.indexOf(global/*e*/)), requireLazy/*r*/ || p) {
                        requireDynamic/*n*/ === global/*e*/ ? (a.hasOwnProperty(requireDynamic/*n*/) && (l = !0), o[requireDynamic/*n*/] = !0) : ((o.hasOwnProperty(requireDynamic/*n*/) || a.hasOwnProperty(requireDynamic/*n*/)) && (l = !0), a[requireDynamic/*n*/] = !0);
                        for (var d in this.$SearchSourceCallbackManager_localCache[requireDynamic/*n*/])(0 === require/*t*/ || s.hasOwnProperty(d) && s[d] == c - 1) && (s[d] = c)
                    }
                }
            }
        }, this);
        var p = Object.keys(s).filter(function(global/*e*/) {
            return s[global/*e*/] == c
        });
        return (l || requireLazy/*r*/ > c) && (p = this.$SearchSourceCallbackManager_filterResultsUsingStringMatch(global/*e*/, p)), p
    }, o.prototype.$SearchSourceCallbackManager_findQueryMatches = function(global/*e*/) {
        "use strict";
        var require/*t*/ = this.$SearchSourceCallbackManager_parseFn(global/*e*/).flatValue,
            requireDynamic/*n*/ = this.$SearchSourceCallbackManager_findBestQueryCacheResults(require/*t*/);
        return this.$SearchSourceCallbackManager_queryCache.hasOwnProperty(require/*t*/) ? requireDynamic/*n*/ : this.$SearchSourceCallbackManager_filterResultsUsingStringMatch(global/*e*/, requireDynamic/*n*/)
    }, o.prototype.$SearchSourceCallbackManager_findBestQueryCacheResults = function(global/*e*/) {
        "use strict";
        var require/*t*/ = 0,
            requireDynamic/*n*/ = null,
            requireLazy/*r*/ = this.$SearchSourceCallbackManager_queryCache;
        return Object.keys(requireLazy/*r*/).forEach(function(requireLazy/*r*/) {
            0 === global/*e*/.indexOf(requireLazy/*r*/) && requireLazy/*r*/.length > require/*t*/ && (require/*t*/ = requireLazy/*r*/.length, requireDynamic/*n*/ = requireLazy/*r*/)
        }), requireLazy/*r*/.hasOwnProperty(requireDynamic/*n*/) ? Object.keys(requireLazy/*r*/[requireDynamic/*n*/]) : []
    }, o.prototype.$SearchSourceCallbackManager_filterResultsUsingStringMatch = function(global/*e*/, require/*t*/) {
        "use strict";
        return require/*t*/.filter(function(require/*t*/) {
            return exports/*this.$SearchSourceCallbackManager_matchFn*/(global/*e*/, this.$SearchSourceCallbackManager_textMap[require/*t*/])
        }, this)
    }, module/*i*/.exports = o
});