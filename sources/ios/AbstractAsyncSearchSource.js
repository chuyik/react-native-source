__d("AbstractAsyncSearchSource",["AbstractSearchSource","SearchSourceCallbackManager","SearchableEntry","TokenizeUtil","copyProperties","emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        this.$AbstractAsyncSearchSource_bootstrapRequests = global/*e*/.bootstrapRequests, this.$AbstractAsyncSearchSource_queryRequests = global/*e*/.queryRequests, this.$AbstractAsyncSearchSource_auxiliaryFields = global/*e*/.auxiliaryFields, this.$AbstractAsyncSearchSource_asyncErrorHandler = global/*e*/.asyncErrorHandler || emptyFunction/*p*/, this.$AbstractAsyncSearchSource_packageResult = global/*e*/.packageFn || this.$AbstractAsyncSearchSource_defaultPackageFn, this.$AbstractAsyncSearchSource_getAllForEmptyQuery = global/*e*/.getAllForEmptyQuery, this.$AbstractAsyncSearchSource_bootstrapEntries = [], this.$AbstractAsyncSearchSource_callbackManager = new SearchSourceCallbackManager/*s*/({
            parseFn: TokenizeUtil/*u*/.parse,
            matchFn: TokenizeUtil/*u*/.isQueryMatch,
            indexFn: global/*e*/.indexFn
        }), this.$AbstractAsyncSearchSource_sendRequestImpl = require/*t*/, this.$AbstractAsyncSearchSource_normalizeResponse = requireDynamic/*n*/
    }
    var AbstractSearchSource/*a*/ = require/*t*/("AbstractSearchSource"),
        SearchSourceCallbackManager/*s*/ = require/*t*/("SearchSourceCallbackManager"),
        SearchableEntry/*l*/ = require/*t*/("SearchableEntry"),
        TokenizeUtil/*u*/ = require/*t*/("TokenizeUtil"),
        copyProperties/*c*/ = require/*t*/("copyProperties"),
        emptyFunction/*p*/ = require/*t*/("emptyFunction");
    for (var d in AbstractSearchSource/*a*/) AbstractSearchSource/*a*/.hasOwnProperty(d) && (o[d] = AbstractSearchSource/*a*/[d]);
    var h = null === AbstractSearchSource/*a*/ ? null : AbstractSearchSource/*a*/.prototype;
    o.prototype = Object.create(h), o.prototype.constructor = o, o.__superConstructor__ = AbstractSearchSource/*a*/, o.prototype.bootstrapImpl = function(global/*e*/) {
        "use strict";
        if (!this.$AbstractAsyncSearchSource_bootstrapRequests || !this.$AbstractAsyncSearchSource_bootstrapRequests.length) return void global/*e*/();
        var require/*t*/ = this.$AbstractAsyncSearchSource_bootstrapRequests.length,
            requireDynamic/*n*/ = 0;
        this.$AbstractAsyncSearchSource_bootstrapRequests.forEach(function(requireLazy/*r*/) {
            this.$AbstractAsyncSearchSource_sendRequest({}, requireLazy/*r*/, function(requireLazy/*r*/) {
                this.$AbstractAsyncSearchSource_callbackManager.addLocalEntries(requireLazy/*r*/), this.$AbstractAsyncSearchSource_bootstrapEntries = this.$AbstractAsyncSearchSource_bootstrapEntries.concat(requireLazy/*r*/), requireDynamic/*n*/++, requireDynamic/*n*/ === require/*t*/ && (global/*e*/(), global/*e*/ = null)
            }.bind(this))
        }.bind(this))
    }, o.prototype.searchImpl = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        if (this.$AbstractAsyncSearchSource_getAllForEmptyQuery && "" === global/*e*/) return void this.getBootstrappedEntries(function(requireDynamic/*n*/) {
            require/*t*/(requireDynamic/*n*/, global/*e*/)
        });
        var requireLazy/*r*/ = null,
            module/*i*/ = {},
            o = this.$AbstractAsyncSearchSource_callbackManager.search(global/*e*/, function(requireDynamic/*n*/) {
                requireLazy/*r*/ ? requireDynamic/*n*/.forEach(function(global/*e*/) {
                    var require/*t*/ = global/*e*/.getUniqueID();
                    module/*i*/[require/*t*/] || (requireLazy/*r*/.push(global/*e*/), module/*i*/[require/*t*/] = !0)
                }) : (requireLazy/*r*/ = requireDynamic/*n*/, requireLazy/*r*/.forEach(function(global/*e*/) {
                    module/*i*/[global/*e*/.getUniqueID()] = !0
                })), require/*t*/(requireLazy/*r*/, global/*e*/)
            }, requireDynamic/*n*/);
        if (o && this.$AbstractAsyncSearchSource_queryRequests && this.$AbstractAsyncSearchSource_queryRequests.length) {
            var AbstractSearchSource/*a*/ = {
                    value: global/*e*/,
                    existing_ids: requireLazy/*r*/ && requireLazy/*r*/.map(function(global/*e*/) {
                        return global/*e*/.getUniqueID()
                    }).join(",")
                },
                SearchSourceCallbackManager/*s*/ = this.$AbstractAsyncSearchSource_queryRequests.length;
            this.$AbstractAsyncSearchSource_queryRequests.forEach(function(require/*t*/) {
                this.$AbstractAsyncSearchSource_sendRequest(AbstractSearchSource/*a*/, require/*t*/, function(require/*t*/) {
                    this.$AbstractAsyncSearchSource_addQueryResults(require/*t*/, global/*e*/), SearchSourceCallbackManager/*s*/--, SearchSourceCallbackManager/*s*/ || this.$AbstractAsyncSearchSource_callbackManager.setQueryStringAsExhausted(global/*e*/)
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
    }, o.prototype.$AbstractAsyncSearchSource_sendRequest = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        this.$AbstractAsyncSearchSource_sendRequestImpl(global/*e*/, require/*t*/, function(global/*e*/) {
            return requireDynamic/*n*/(this.$AbstractAsyncSearchSource_normalizeResponse(global/*e*/, this.$AbstractAsyncSearchSource_packageResult).filter(function(global/*e*/) {
                return !!global/*e*/
            }))
        }.bind(this), this.$AbstractAsyncSearchSource_asyncErrorHandler)
    }, o.prototype.$AbstractAsyncSearchSource_addLocalResults = function(global/*e*/) {
        "use strict";
        this.$AbstractAsyncSearchSource_callbackManager.addLocalEntries(global/*e*/)
    }, o.prototype.$AbstractAsyncSearchSource_addQueryResults = function(global/*e*/, require/*t*/) {
        "use strict";
        global/*e*/.length && this.$AbstractAsyncSearchSource_callbackManager.addQueryEntries(global/*e*/, require/*t*/)
    }, o.prototype.$AbstractAsyncSearchSource_defaultPackageFn = function(global/*e*/, require/*t*/) {
        "use strict";
        var requireDynamic/*n*/ = global/*e*/.title || global/*e*/.text,
            requireLazy/*r*/ = global/*e*/.uniqueID || global/*e*/.uid;
        return requireDynamic/*n*/ && requireLazy/*r*/ ? new SearchableEntry/*l*/({
            uniqueID: requireLazy/*r*/,
            order: global/*e*/.order || global/*e*/.index || require/*t*/,
            title: requireDynamic/*n*/,
            subtitle: global/*e*/.subtitle || global/*e*/.category || global/*e*/.subtext,
            keywordString: global/*e*/.keywordString || global/*e*/.tokens,
            type: global/*e*/.type,
            photo: global/*e*/.photo,
            uri: global/*e*/.uri || global/*e*/.path,
            auxiliaryData: this.$AbstractAsyncSearchSource_getAuxiliaryData(global/*e*/)
        }) : null
    }, o.prototype.$AbstractAsyncSearchSource_getAuxiliaryData = function(global/*e*/) {
        "use strict";
        var require/*t*/;
        if (this.$AbstractAsyncSearchSource_auxiliaryFields) {
            require/*t*/ = {};
            for (var requireDynamic/*n*/ in this.$AbstractAsyncSearchSource_auxiliaryFields) {
                var requireLazy/*r*/ = this.$AbstractAsyncSearchSource_auxiliaryFields[requireDynamic/*n*/];
                require/*t*/[requireDynamic/*n*/] = global/*e*/[requireLazy/*r*/]
            }
        }
        return global/*e*/.aux_data && (require/*t*/ = require/*t*/ || {}, copyProperties/*c*/(require/*t*/, global/*e*/.aux_data)), require/*t*/
    }, module/*i*/.exports = o
});