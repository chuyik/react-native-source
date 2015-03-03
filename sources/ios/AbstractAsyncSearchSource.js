__d("AbstractAsyncSearchSource",["AbstractSearchSource","SearchSourceCallbackManager","SearchableEntry","TokenizeUtil","copyProperties","emptyFunction"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*AbstractSearchSource/*n*/*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*AbstractSearchSource/*n*/*/) {
        "use strict";
        this.$AbstractAsyncSearchSource_bootstrapRequests = global/*e*/.bootstrapRequests, SearchSourceCallbackManager/*this.$AbstractAsyncSearchSource_queryRequests*/ = global/*e*/.queryRequests, SearchableEntry/*this.$AbstractAsyncSearchSource_auxiliaryFields*/ = global/*e*/.auxiliaryFields, TokenizeUtil/*this.$AbstractAsyncSearchSource_asyncErrorHandler*/ = global/*e*/.asyncErrorHandler || p, copyProperties/*this.$AbstractAsyncSearchSource_packageResult*/ = global/*e*/.packageFn || this.$AbstractAsyncSearchSource_defaultPackageFn, emptyFunction/*this.$AbstractAsyncSearchSource_getAllForEmptyQuery*/ = global/*e*/.getAllForEmptyQuery, this.$AbstractAsyncSearchSource_bootstrapEntries = [], this.$AbstractAsyncSearchSource_callbackManager = new s({
            parseFn: u.parse,
            matchFn: u.isQueryMatch,
            indexFn: global/*e*/.indexFn
        }), this.$AbstractAsyncSearchSource_sendRequestImpl = require/*exports/*t*/*/, this.$AbstractAsyncSearchSource_normalizeResponse = requireDynamic/*AbstractSearchSource/*n*/*/
    }
    var a = require/*exports/*t*/*/("AbstractSearchSource"),
        s = require/*exports/*t*/*/("SearchSourceCallbackManager"),
        l = require/*exports/*t*/*/("SearchableEntry"),
        u = require/*exports/*t*/*/("TokenizeUtil"),
        c = require/*exports/*t*/*/("copyProperties"),
        p = require/*exports/*t*/*/("emptyFunction");
    for (var d in a) a.hasOwnProperty(d) && (o[d] = a[d]);
    var h = null === a ? null : a.prototype;
    o.prototype = Object.create(h), o.prototype.constructor = o, o.__superConstructor__ = a, o.prototype.bootstrapImpl = function(global/*e*/) {
        "use strict";
        if (!this.$AbstractAsyncSearchSource_bootstrapRequests || !this.$AbstractAsyncSearchSource_bootstrapRequests.length) return void global/*e*/();
        var require/*exports/*t*/*/ = this.$AbstractAsyncSearchSource_bootstrapRequests.length,
            requireDynamic/*AbstractSearchSource/*n*/*/ = 0;
        this.$AbstractAsyncSearchSource_bootstrapRequests.forEach(function(requireLazy/*r*/) {
            this.$AbstractAsyncSearchSource_sendRequest({}, requireLazy/*r*/, function(requireLazy/*r*/) {
                this.$AbstractAsyncSearchSource_callbackManager.addLocalEntries(requireLazy/*r*/), this.$AbstractAsyncSearchSource_bootstrapEntries = this.$AbstractAsyncSearchSource_bootstrapEntries.concat(requireLazy/*r*/), requireDynamic/*AbstractSearchSource/*n*/*/++, requireDynamic/*AbstractSearchSource/*n*/*/ === require/*exports/*t*/*/ && (global/*e*/(), global/*e*/ = null)
            }.bind(this))
        }.bind(this))
    }, o.prototype.searchImpl = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*AbstractSearchSource/*n*/*/) {
        "use strict";
        if (emptyFunction/*this.$AbstractAsyncSearchSource_getAllForEmptyQuery*/ && "" === global/*e*/) return void this.getBootstrappedEntries(function(requireDynamic/*AbstractSearchSource/*n*/*/) {
            require/*exports/*t*/*/(requireDynamic/*AbstractSearchSource/*n*/*/, global/*e*/)
        });
        var requireLazy/*r*/ = null,
            module/*i*/ = {},
            o = this.$AbstractAsyncSearchSource_callbackManager.search(global/*e*/, function(requireDynamic/*AbstractSearchSource/*n*/*/) {
                requireLazy/*r*/ ? requireDynamic/*AbstractSearchSource/*n*/*/.forEach(function(global/*e*/) {
                    var require/*exports/*t*/*/ = global/*e*/.getUniqueID();
                    module/*i*/[require/*exports/*t*/*/] || (requireLazy/*r*/.push(global/*e*/), module/*i*/[require/*exports/*t*/*/] = !0)
                }) : (requireLazy/*r*/ = requireDynamic/*AbstractSearchSource/*n*/*/, requireLazy/*r*/.forEach(function(global/*e*/) {
                    module/*i*/[global/*e*/.getUniqueID()] = !0
                })), require/*exports/*t*/*/(requireLazy/*r*/, global/*e*/)
            }, requireDynamic/*AbstractSearchSource/*n*/*/);
        if (o && SearchSourceCallbackManager/*this.$AbstractAsyncSearchSource_queryRequests*/ && SearchSourceCallbackManager/*this.$AbstractAsyncSearchSource_queryRequests*/.length) {
            var a = {
                    value: global/*e*/,
                    existing_ids: requireLazy/*r*/ && requireLazy/*r*/.map(function(global/*e*/) {
                        return global/*e*/.getUniqueID()
                    }).join(",")
                },
                s = SearchSourceCallbackManager/*this.$AbstractAsyncSearchSource_queryRequests*/.length;
            SearchSourceCallbackManager/*this.$AbstractAsyncSearchSource_queryRequests*/.forEach(function(require/*exports/*t*/*/) {
                this.$AbstractAsyncSearchSource_sendRequest(a, require/*exports/*t*/*/, function(require/*exports/*t*/*/) {
                    this.$AbstractAsyncSearchSource_addQueryResults(require/*exports/*t*/*/, global/*e*/), s--, s || this.$AbstractAsyncSearchSource_callbackManager.setQueryStringAsExhausted(global/*e*/)
                }.bind(this))
            }, this)
        }
    }, o.prototype.getBootstrappedEntries = function(global/*e*/) {
        "use strict";
        return this.bootstrap(function() {
            return global/*e*/(this.$AbstractAsyncSearchSource_bootstrapEntries || [])
        }.bind(this))
    }, o.prototype.getAllEntriesMap = function() {
        "use strict";
        return this.$AbstractAsyncSearchSource_callbackManager.getAllEntriesMap()
    }, o.prototype.$AbstractAsyncSearchSource_sendRequest = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*AbstractSearchSource/*n*/*/) {
        "use strict";
        this.$AbstractAsyncSearchSource_sendRequestImpl(global/*e*/, require/*exports/*t*/*/, function(global/*e*/) {
            return requireDynamic/*AbstractSearchSource/*n*/*/(this.$AbstractAsyncSearchSource_normalizeResponse(global/*e*/, copyProperties/*this.$AbstractAsyncSearchSource_packageResult*/).filter(function(global/*e*/) {
                return !!global/*e*/
            }))
        }.bind(this), TokenizeUtil/*this.$AbstractAsyncSearchSource_asyncErrorHandler*/)
    }, o.prototype.$AbstractAsyncSearchSource_addLocalResults = function(global/*e*/) {
        "use strict";
        this.$AbstractAsyncSearchSource_callbackManager.addLocalEntries(global/*e*/)
    }, o.prototype.$AbstractAsyncSearchSource_addQueryResults = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        global/*e*/.length && this.$AbstractAsyncSearchSource_callbackManager.addQueryEntries(global/*e*/, require/*exports/*t*/*/)
    }, o.prototype.$AbstractAsyncSearchSource_defaultPackageFn = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        var requireDynamic/*AbstractSearchSource/*n*/*/ = global/*e*/.title || global/*e*/.text,
            requireLazy/*r*/ = global/*e*/.uniqueID || global/*e*/.uid;
        return requireDynamic/*AbstractSearchSource/*n*/*/ && requireLazy/*r*/ ? new l({
            uniqueID: requireLazy/*r*/,
            order: global/*e*/.order || global/*e*/.index || require/*exports/*t*/*/,
            title: requireDynamic/*AbstractSearchSource/*n*/*/,
            subtitle: global/*e*/.subtitle || global/*e*/.category || global/*e*/.subtext,
            keywordString: global/*e*/.keywordString || global/*e*/.tokens,
            type: global/*e*/.type,
            photo: global/*e*/.photo,
            uri: global/*e*/.uri || global/*e*/.path,
            auxiliaryData: this.$AbstractAsyncSearchSource_getAuxiliaryData(global/*e*/)
        }) : null
    }, o.prototype.$AbstractAsyncSearchSource_getAuxiliaryData = function(global/*e*/) {
        "use strict";
        var require/*exports/*t*/*/;
        if (SearchableEntry/*this.$AbstractAsyncSearchSource_auxiliaryFields*/) {
            require/*exports/*t*/*/ = {};
            for (var requireDynamic/*AbstractSearchSource/*n*/*/ in SearchableEntry/*this.$AbstractAsyncSearchSource_auxiliaryFields*/) {
                var requireLazy/*r*/ = SearchableEntry/*this.$AbstractAsyncSearchSource_auxiliaryFields*/[requireDynamic/*AbstractSearchSource/*n*/*/];
                require/*exports/*t*/*/[requireDynamic/*AbstractSearchSource/*n*/*/] = global/*e*/[requireLazy/*r*/]
            }
        }
        return global/*e*/.aux_data && (require/*exports/*t*/*/ = require/*exports/*t*/*/ || {}, c(require/*exports/*t*/*/, global/*e*/.aux_data)), require/*exports/*t*/*/
    }, module/*i*/.exports = o
});