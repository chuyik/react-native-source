__d("FilteredSearchSource",["AbstractSearchSource"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        this.$FilteredSearchSource_filterFunc = global/*e*/, AbstractSearchSource/*this.$FilteredSearchSource_searchSource*/ = require/*exports/*t*/*/
    }
    var a = require/*exports/*t*/*/("AbstractSearchSource");
    for (var s in a) a.hasOwnProperty(s) && (o[s] = a[s]);
    var l = null === a ? null : a.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = a, o.prototype.bootstrapImpl = function(global/*e*/) {
        "use strict";
        AbstractSearchSource/*this.$FilteredSearchSource_searchSource*/.bootstrap(global/*e*/)
    }, o.prototype.searchImpl = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        "use strict";
        var requireLazy/*r*/ = function(global/*e*/, requireDynamic/*n*/) {
            global/*e*/ = this.$FilteredSearchSource_filterEntries(global/*e*/, requireDynamic/*n*/), require/*exports/*t*/*/(global/*e*/, requireDynamic/*n*/)
        }.bind(this);
        AbstractSearchSource/*this.$FilteredSearchSource_searchSource*/.search(global/*e*/, requireLazy/*r*/, requireDynamic/*n*/)
    }, o.prototype.$FilteredSearchSource_filterEntries = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        var requireDynamic/*n*/ = this.$FilteredSearchSource_filterFunc;
        return global/*e*/.filter(function(global/*e*/) {
            return requireDynamic/*n*/(global/*e*/, require/*exports/*t*/*/)
        })
    }, module/*i*/.exports = o
});