__d("GraphQLStoreNodeRangeTracker",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID = {}
    }
    var a = Object.freeze([]);
    o.prototype.addRangeIDForNodeID = function(global/*e*/, require/*t*/) {
        this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[require/*t*/] = this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[require/*t*/] || {}, this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[require/*t*/][global/*e*/] = !0
    }, o.prototype.getRangeIDsForNodeID = function(global/*e*/) {
        var require/*t*/ = this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[global/*e*/];
        return require/*t*/ ? Object.keys(require/*t*/) : a
    }, o.prototype.clearRangeIDsForNodeID = function(global/*e*/) {
        var require/*t*/ = this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[global/*e*/];
        require/*t*/ && delete this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[global/*e*/]
    }, module/*i*/.exports = o
});