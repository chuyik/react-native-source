__d("GraphQLStoreNodeRangeTracker",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID = {}
    }
    var a = Object.freeze([]);
    o.prototype.addRangeIDForNodeID = function(global/*e*/, require/*exports/*t*/*/) {
        this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[require/*exports/*t*/*/] = this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[require/*exports/*t*/*/] || {}, this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[require/*exports/*t*/*/][global/*e*/] = !0
    }, o.prototype.getRangeIDsForNodeID = function(global/*e*/) {
        var require/*exports/*t*/*/ = this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[global/*e*/];
        return require/*exports/*t*/*/ ? Object.keys(require/*exports/*t*/*/) : a
    }, o.prototype.clearRangeIDsForNodeID = function(global/*e*/) {
        var require/*exports/*t*/*/ = this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[global/*e*/];
        require/*exports/*t*/*/ && delete this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[global/*e*/]
    }, module/*i*/.exports = o
});