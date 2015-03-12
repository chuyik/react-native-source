__d("GraphQLStoreNodeRangeTracker",[],function (e, t, n, r, i) {
    "use strict";

    function o() {
        this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID = {}
    }
    var a = Object.freeze([]);
    o.prototype.addRangeIDForNodeID = function(e, t) {
        this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[t] = this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[t] || {}, this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[t][e] = !0
    }, o.prototype.getRangeIDsForNodeID = function(e) {
        var t = this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[e];
        return t ? Object.keys(t) : a
    }, o.prototype.clearRangeIDsForNodeID = function(e) {
        var t = this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[e];
        t && delete this.$GraphQLStoreNodeRangeTracker_rangeIDsByNodeID[e]
    }, i.exports = o
});