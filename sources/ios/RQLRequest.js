__d("RQLRequest",[],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        this.$RQLRequest_name = e, this.$RQLRequest_query = t, this.$RQLRequest_callback = n
    }
    o.prototype.getName = function() {
        return this.$RQLRequest_name
    }, o.prototype.getQuery = function() {
        return this.$RQLRequest_query
    }, o.prototype.getCallback = function() {
        return this.$RQLRequest_callback
    }, i.exports = o
});