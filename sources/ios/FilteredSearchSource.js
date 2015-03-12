__d("FilteredSearchSource",["AbstractSearchSource"],function (e, t, n, r, i) {
    function o(e, t) {
        "use strict";
        this.$FilteredSearchSource_filterFunc = e, this.$FilteredSearchSource_searchSource = t
    }
    var AbstractSearchSource/*a*/ = t("AbstractSearchSource");
    for (var s in AbstractSearchSource/*a*/) AbstractSearchSource/*a*/.hasOwnProperty(s) && (o[s] = AbstractSearchSource/*a*/[s]);
    var l = null === AbstractSearchSource/*a*/ ? null : AbstractSearchSource/*a*/.prototype;
    o.prototype = Object.create(l), o.prototype.constructor = o, o.__superConstructor__ = AbstractSearchSource/*a*/, o.prototype.bootstrapImpl = function(e) {
        "use strict";
        this.$FilteredSearchSource_searchSource.bootstrap(e)
    }, o.prototype.searchImpl = function(e, t, n) {
        "use strict";
        var r = function(e, n) {
            e = this.$FilteredSearchSource_filterEntries(e, n), t(e, n)
        }.bind(this);
        this.$FilteredSearchSource_searchSource.search(e, r, n)
    }, o.prototype.$FilteredSearchSource_filterEntries = function(e, t) {
        "use strict";
        var n = this.$FilteredSearchSource_filterFunc;
        return e.filter(function(e) {
            return n(e, t)
        })
    }, i.exports = o
});