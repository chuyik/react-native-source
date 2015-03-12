__d("SearchSourceCallbackManager",["createObjectFrom","invariant"],function (e, t, n, r, i) {
    function o(e) {
        "use strict";
        this.$SearchSourceCallbackManager_parseFn = e.parseFn, "function" != typeof this.$SearchSourceCallbackManager_parseFn && invariant/*l*/(0, "Your config must specify a parse function."), this.$SearchSourceCallbackManager_matchFn = e.matchFn, "function" != typeof this.$SearchSourceCallbackManager_matchFn && invariant/*l*/(0, "Your config must specify a match function."), this.$SearchSourceCallbackManager_alwaysPrefixMatch = e.alwaysPrefixMatch || !1, this.$SearchSourceCallbackManager_indexFn = e.indexFn || a, this.reset()
    }

    function a(e) {
        return [e.getTitle(), e.getKeywordString()].join(" ")
    }
    var createObjectFrom/*s*/ = t("createObjectFrom"),
        invariant/*l*/ = t("invariant");
    o.prototype.search = function(e, t, n) {
        "use strict";
        var r = this.$SearchSourceCallbackManager_executeCallback(e, t, n);
        if (r) return 0;
        this.$SearchSourceCallbackManager_allRequests.push({
            queryString: e,
            callback: t,
            options: n
        });
        var i = this.$SearchSourceCallbackManager_allRequests.length - 1;
        return this.$SearchSourceCallbackManager_pendingCallbackIDs.push(i), i
    }, o.prototype.$SearchSourceCallbackManager_executeCallback = function(e, t) {
        "use strict";
        var n = this.$SearchSourceCallbackManager_getMatchingIDs(e),
            r = !!this.$SearchSourceCallbackManager_exhaustedQueryStrings[e];
        if (!n.length) return t([], e), r;
        var i = n.map(function(e) {
            return this.$SearchSourceCallbackManager_entriesMap[e]
        }, this);
        return t(i, e), r
    }, o.prototype.$SearchSourceCallbackManager_runPendingCallbacks = function() {
        "use strict";
        var e = this.$SearchSourceCallbackManager_pendingCallbackIDs;
        this.$SearchSourceCallbackManager_pendingCallbackIDs = [], e.forEach(this.$SearchSourceCallbackManager_executePendingAndCleanUp, this)
    }, o.prototype.$SearchSourceCallbackManager_executePendingAndCleanUp = function(e) {
        "use strict";
        var t = this.$SearchSourceCallbackManager_allRequests[e];
        if (t) {
            var n = this.$SearchSourceCallbackManager_executeCallback(t.queryString, t.callback, t.options);
            return n ? void delete this.$SearchSourceCallbackManager_allRequests[e] : void this.$SearchSourceCallbackManager_pendingCallbackIDs.push(e)
        }
    }, o.prototype.reset = function() {
        "use strict";
        this.$SearchSourceCallbackManager_entriesMap = {}, this.$SearchSourceCallbackManager_textMap = {}, this.$SearchSourceCallbackManager_localCache = {}, this.$SearchSourceCallbackManager_queryCache = {}, this.$SearchSourceCallbackManager_exhaustedQueryStrings = {}, this.$SearchSourceCallbackManager_pendingCallbackIDs = [], this.$SearchSourceCallbackManager_allRequests = [void 0]
    }, o.prototype.addLocalEntries = function(e) {
        "use strict";
        e.forEach(function(e) {
            var t = e.getUniqueID(),
                n = this.$SearchSourceCallbackManager_indexFn(e);
            this.$SearchSourceCallbackManager_entriesMap[t] = e, this.$SearchSourceCallbackManager_textMap[t] = n;
            var r = this.$SearchSourceCallbackManager_parseFn(n);
            r.tokens.forEach(function(e) {
                this.$SearchSourceCallbackManager_localCache.hasOwnProperty(e) || (this.$SearchSourceCallbackManager_localCache[e] = {}), this.$SearchSourceCallbackManager_localCache[e][t] = !0
            }, this)
        }, this), this.$SearchSourceCallbackManager_runPendingCallbacks()
    }, o.prototype.addQueryEntries = function(e, t) {
        "use strict";
        var n = this.$SearchSourceCallbackManager_getMatchingIDs(t),
            r = this.$SearchSourceCallbackManager_parseFn(t).flatValue;
        this.$SearchSourceCallbackManager_queryCache[r] = createObjectFrom/*s*/(n, !0), e.forEach(function(e) {
            var t = e.getUniqueID();
            this.$SearchSourceCallbackManager_entriesMap[t] = e, this.$SearchSourceCallbackManager_textMap[t] = this.$SearchSourceCallbackManager_indexFn(e), this.$SearchSourceCallbackManager_queryCache[r][t] = !0
        }, this), this.$SearchSourceCallbackManager_runPendingCallbacks()
    }, o.prototype.unsubscribe = function(e) {
        "use strict";
        delete this.$SearchSourceCallbackManager_allRequests[e]
    }, o.prototype.removeEntry = function(e) {
        "use strict";
        delete this.$SearchSourceCallbackManager_entriesMap[e]
    }, o.prototype.getAllEntriesMap = function() {
        "use strict";
        return this.$SearchSourceCallbackManager_entriesMap
    }, o.prototype.setQueryStringAsExhausted = function(e) {
        "use strict";
        this.$SearchSourceCallbackManager_exhaustedQueryStrings[e] = !0
    }, o.prototype.unsetQueryStringAsExhausted = function(e) {
        "use strict";
        delete this.$SearchSourceCallbackManager_exhaustedQueryStrings[e]
    }, o.prototype.$SearchSourceCallbackManager_getMatchingIDs = function(e) {
        "use strict";
        var t = this.$SearchSourceCallbackManager_applyMandatorySort(e, this.$SearchSourceCallbackManager_findLocalMatches(e)),
            n = this.$SearchSourceCallbackManager_applyMandatorySort(e, this.$SearchSourceCallbackManager_findQueryMatches(e)),
            r = t.concat(n),
            i = {},
            o = [];
        return r.forEach(function(e) {
            i[e] || void 0 === this.$SearchSourceCallbackManager_entriesMap[e] || (o.push(e), i[e] = !0)
        }, this), o
    }, o.prototype.$SearchSourceCallbackManager_applyMandatorySort = function(e, t) {
        "use strict";

        function n(e, t) {
            if (r[e] !== r[t]) return r[e] ? -1 : 1;
            var n = i[e],
                o = i[t];
            if (n.getOrder() !== o.getOrder()) return n.getOrder() - o.getOrder();
            var a = n.getTitle().length,
                createObjectFrom/*s*/ = o.getTitle().length;
            return a !== createObjectFrom/*s*/ ? a - createObjectFrom/*s*/ : n.getUniqueID() - o.getUniqueID()
        }
        var r = this.$SearchSourceCallbackManager_getExtendedMatchMap(e, t),
            i = this.$SearchSourceCallbackManager_entriesMap;
        return t.sort(n).slice()
    }, o.prototype.$SearchSourceCallbackManager_getExtendedMatchMap = function(e, t) {
        "use strict";
        var n = {};
        return t.forEach(function(t) {
            n[t] = this.$SearchSourceCallbackManager_matchFn(e, this.$SearchSourceCallbackManager_textMap[t])
        }, this), n
    }, o.prototype.$SearchSourceCallbackManager_findLocalMatches = function(e) {
        "use strict";
        var t = this.$SearchSourceCallbackManager_parseFn(e, this.$SearchSourceCallbackManager_alwaysPrefixMatch),
            n = this.$SearchSourceCallbackManager_alwaysPrefixMatch ? t.sortedTokens : t.tokens,
            r = n.length,
            i = t.isPrefixQuery ? r - 1 : null,
            o = {},
            a = {},
            createObjectFrom/*s*/ = {},
            invariant/*l*/ = !1,
            u = {},
            c = 0;
        n.forEach(function(e, t) {
            if (!u.hasOwnProperty(e)) {
                c++, u[e] = !0;
                for (var n in this.$SearchSourceCallbackManager_localCache) {
                    var r = n === e && !o.hasOwnProperty(n),
                        p = !1;
                    if (r || (p = (this.$SearchSourceCallbackManager_alwaysPrefixMatch || i === t) && 0 === n.indexOf(e)), r || p) {
                        n === e ? (a.hasOwnProperty(n) && (invariant/*l*/ = !0), o[n] = !0) : ((o.hasOwnProperty(n) || a.hasOwnProperty(n)) && (invariant/*l*/ = !0), a[n] = !0);
                        for (var d in this.$SearchSourceCallbackManager_localCache[n])(0 === t || createObjectFrom/*s*/.hasOwnProperty(d) && createObjectFrom/*s*/[d] == c - 1) && (createObjectFrom/*s*/[d] = c)
                    }
                }
            }
        }, this);
        var p = Object.keys(createObjectFrom/*s*/).filter(function(e) {
            return createObjectFrom/*s*/[e] == c
        });
        return (invariant/*l*/ || r > c) && (p = this.$SearchSourceCallbackManager_filterResultsUsingStringMatch(e, p)), p
    }, o.prototype.$SearchSourceCallbackManager_findQueryMatches = function(e) {
        "use strict";
        var t = this.$SearchSourceCallbackManager_parseFn(e).flatValue,
            n = this.$SearchSourceCallbackManager_findBestQueryCacheResults(t);
        return this.$SearchSourceCallbackManager_queryCache.hasOwnProperty(t) ? n : this.$SearchSourceCallbackManager_filterResultsUsingStringMatch(e, n)
    }, o.prototype.$SearchSourceCallbackManager_findBestQueryCacheResults = function(e) {
        "use strict";
        var t = 0,
            n = null,
            r = this.$SearchSourceCallbackManager_queryCache;
        return Object.keys(r).forEach(function(r) {
            0 === e.indexOf(r) && r.length > t && (t = r.length, n = r)
        }), r.hasOwnProperty(n) ? Object.keys(r[n]) : []
    }, o.prototype.$SearchSourceCallbackManager_filterResultsUsingStringMatch = function(e, t) {
        "use strict";
        return t.filter(function(t) {
            return this.$SearchSourceCallbackManager_matchFn(e, this.$SearchSourceCallbackManager_textMap[t])
        }, this)
    }, i.exports = o
});