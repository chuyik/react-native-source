__d("AbstractAsyncSearchSource",["AbstractSearchSource","SearchSourceCallbackManager","SearchableEntry","TokenizeUtil","copyProperties","emptyFunction"],function (e, t, n, r, i) {
    function o(e, t, n) {
        "use strict";
        this.$AbstractAsyncSearchSource_bootstrapRequests = e.bootstrapRequests, this.$AbstractAsyncSearchSource_queryRequests = e.queryRequests, this.$AbstractAsyncSearchSource_auxiliaryFields = e.auxiliaryFields, this.$AbstractAsyncSearchSource_asyncErrorHandler = e.asyncErrorHandler || emptyFunction/*p*/, this.$AbstractAsyncSearchSource_packageResult = e.packageFn || this.$AbstractAsyncSearchSource_defaultPackageFn, this.$AbstractAsyncSearchSource_getAllForEmptyQuery = e.getAllForEmptyQuery, this.$AbstractAsyncSearchSource_bootstrapEntries = [], this.$AbstractAsyncSearchSource_callbackManager = new SearchSourceCallbackManager/*s*/({
            parseFn: TokenizeUtil/*u*/.parse,
            matchFn: TokenizeUtil/*u*/.isQueryMatch,
            indexFn: e.indexFn
        }), this.$AbstractAsyncSearchSource_sendRequestImpl = t, this.$AbstractAsyncSearchSource_normalizeResponse = n
    }
    var AbstractSearchSource/*a*/ = t("AbstractSearchSource"),
        SearchSourceCallbackManager/*s*/ = t("SearchSourceCallbackManager"),
        SearchableEntry/*l*/ = t("SearchableEntry"),
        TokenizeUtil/*u*/ = t("TokenizeUtil"),
        copyProperties/*c*/ = t("copyProperties"),
        emptyFunction/*p*/ = t("emptyFunction");
    for (var d in AbstractSearchSource/*a*/) AbstractSearchSource/*a*/.hasOwnProperty(d) && (o[d] = AbstractSearchSource/*a*/[d]);
    var h = null === AbstractSearchSource/*a*/ ? null : AbstractSearchSource/*a*/.prototype;
    o.prototype = Object.create(h), o.prototype.constructor = o, o.__superConstructor__ = AbstractSearchSource/*a*/, o.prototype.bootstrapImpl = function(e) {
        "use strict";
        if (!this.$AbstractAsyncSearchSource_bootstrapRequests || !this.$AbstractAsyncSearchSource_bootstrapRequests.length) return void e();
        var t = this.$AbstractAsyncSearchSource_bootstrapRequests.length,
            n = 0;
        this.$AbstractAsyncSearchSource_bootstrapRequests.forEach(function(r) {
            this.$AbstractAsyncSearchSource_sendRequest({}, r, function(r) {
                this.$AbstractAsyncSearchSource_callbackManager.addLocalEntries(r), this.$AbstractAsyncSearchSource_bootstrapEntries = this.$AbstractAsyncSearchSource_bootstrapEntries.concat(r), n++, n === t && (e(), e = null)
            }.bind(this))
        }.bind(this))
    }, o.prototype.searchImpl = function(e, t, n) {
        "use strict";
        if (this.$AbstractAsyncSearchSource_getAllForEmptyQuery && "" === e) return void this.getBootstrappedEntries(function(n) {
            t(n, e)
        });
        var r = null,
            i = {},
            o = this.$AbstractAsyncSearchSource_callbackManager.search(e, function(n) {
                r ? n.forEach(function(e) {
                    var t = e.getUniqueID();
                    i[t] || (r.push(e), i[t] = !0)
                }) : (r = n, r.forEach(function(e) {
                    i[e.getUniqueID()] = !0
                })), t(r, e)
            }, n);
        if (o && this.$AbstractAsyncSearchSource_queryRequests && this.$AbstractAsyncSearchSource_queryRequests.length) {
            var AbstractSearchSource/*a*/ = {
                    value: e,
                    existing_ids: r && r.map(function(e) {
                        return e.getUniqueID()
                    }).join(",")
                },
                SearchSourceCallbackManager/*s*/ = this.$AbstractAsyncSearchSource_queryRequests.length;
            this.$AbstractAsyncSearchSource_queryRequests.forEach(function(t) {
                this.$AbstractAsyncSearchSource_sendRequest(AbstractSearchSource/*a*/, t, function(t) {
                    this.$AbstractAsyncSearchSource_addQueryResults(t, e), SearchSourceCallbackManager/*s*/--, SearchSourceCallbackManager/*s*/ || this.$AbstractAsyncSearchSource_callbackManager.setQueryStringAsExhausted(e)
                }.bind(this))
            }, this)
        }
    }, o.prototype.getBootstrappedEntries = function(e) {
        "use strict";
        return this.bootstrap(function() {
            return e(this.$AbstractAsyncSearchSource_bootstrapEntries || [])
        }.bind(this))
    }, o.prototype.getAllEntriesMap = function() {
        "use strict";
        return this.$AbstractAsyncSearchSource_callbackManager.getAllEntriesMap()
    }, o.prototype.$AbstractAsyncSearchSource_sendRequest = function(e, t, n) {
        "use strict";
        this.$AbstractAsyncSearchSource_sendRequestImpl(e, t, function(e) {
            return n(this.$AbstractAsyncSearchSource_normalizeResponse(e, this.$AbstractAsyncSearchSource_packageResult).filter(function(e) {
                return !!e
            }))
        }.bind(this), this.$AbstractAsyncSearchSource_asyncErrorHandler)
    }, o.prototype.$AbstractAsyncSearchSource_addLocalResults = function(e) {
        "use strict";
        this.$AbstractAsyncSearchSource_callbackManager.addLocalEntries(e)
    }, o.prototype.$AbstractAsyncSearchSource_addQueryResults = function(e, t) {
        "use strict";
        e.length && this.$AbstractAsyncSearchSource_callbackManager.addQueryEntries(e, t)
    }, o.prototype.$AbstractAsyncSearchSource_defaultPackageFn = function(e, t) {
        "use strict";
        var n = e.title || e.text,
            r = e.uniqueID || e.uid;
        return n && r ? new SearchableEntry/*l*/({
            uniqueID: r,
            order: e.order || e.index || t,
            title: n,
            subtitle: e.subtitle || e.category || e.subtext,
            keywordString: e.keywordString || e.tokens,
            type: e.type,
            photo: e.photo,
            uri: e.uri || e.path,
            auxiliaryData: this.$AbstractAsyncSearchSource_getAuxiliaryData(e)
        }) : null
    }, o.prototype.$AbstractAsyncSearchSource_getAuxiliaryData = function(e) {
        "use strict";
        var t;
        if (this.$AbstractAsyncSearchSource_auxiliaryFields) {
            t = {};
            for (var n in this.$AbstractAsyncSearchSource_auxiliaryFields) {
                var r = this.$AbstractAsyncSearchSource_auxiliaryFields[n];
                t[n] = e[r]
            }
        }
        return e.aux_data && (t = t || {}, copyProperties/*c*/(t, e.aux_data)), t
    }, i.exports = o
});