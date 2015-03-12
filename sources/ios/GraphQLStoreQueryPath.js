__d("GraphQLStoreQueryPath",["GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLStoreDataHandler","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        this.$GraphQLStoreQueryPath_root = e, this.$GraphQLStoreQueryPath_fields = []
    }
    var GraphQL_EXPERIMENTAL/*a*/ = t("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*s*/ = t("GraphQLConstants"),
        GraphQLStoreDataHandler/*l*/ = t("GraphQLStoreDataHandler"),
        invariant/*u*/ = t("invariant");
    o.prunePathForDataID = function(e, t) {
        return t && 1 === t.getLength() ? t : e === GraphQLConstants/*s*/.VIEWER_CLIENT_ID ? new o(new GraphQL_EXPERIMENTAL/*a*/.Query("viewer")) : GraphQLStoreDataHandler/*l*/.isClientID(e) ? (t || invariant/*u*/(0, "Cannot prune GraphQL_EXPERIMENTAL/*a*/ path to GraphQL_EXPERIMENTAL/*a*/ client ID without GraphQL_EXPERIMENTAL/*a*/ current path"), t) : new o(new GraphQL_EXPERIMENTAL/*a*/.Query("node", [e]))
    }, o.prototype.withField = function(e, t) {
        var n = this.$GraphQLStoreQueryPath_fields[this.$GraphQLStoreQueryPath_fields.length - 1];
        this.pushField(e);
        var r = t();
        return this.popField(), this.$GraphQLStoreQueryPath_fields[this.$GraphQLStoreQueryPath_fields.length - 1] !== n && invariant/*u*/(0, "Popped unexpected field from currentPath"), r
    }, o.prototype.pushField = function(e) {
        return this.$GraphQLStoreQueryPath_fields.push(e), this
    }, o.prototype.popField = function() {
        this.$GraphQLStoreQueryPath_fields.length > 0 || invariant/*u*/(0, "No fields to pop!"), this.$GraphQLStoreQueryPath_fields.pop()
    }, o.prototype.getLength = function() {
        return this.$GraphQLStoreQueryPath_fields.length + 1
    }, o.prototype.clone = function() {
        for (var e = new o(this.$GraphQLStoreQueryPath_root), t = 0; t < this.$GraphQLStoreQueryPath_fields.length; t++) e.pushField(this.$GraphQLStoreQueryPath_fields[t]);
        return e
    }, o.prototype.getQueryForFragment = function(e) {
        var t = this.$GraphQLStoreQueryPath_fields;
        if (0 === t.length) return new GraphQL_EXPERIMENTAL/*a*/.QueryWithValues(this.$GraphQLStoreQueryPath_root.shallowClone(this.$GraphQLStoreQueryPath_root.getOwnUnaliasedFields("id"), [e]));
        var n = t[t.length - 1],
            r = n.getInferredPrimaryKey();
        n = r ? n.shallowClone(n.getOwnUnaliasedFields(r), [e]) : n.shallowClone(null, [e]);
        for (var i = t.length - 2; i >= 0; i--) {
            var o = t[i];
            r = o.getInferredPrimaryKey(), n = o.shallowClone(r ? o.getOwnUnaliasedFields(r).concat(n) : [n])
        }
        return new GraphQL_EXPERIMENTAL/*a*/.QueryWithValues(this.$GraphQLStoreQueryPath_root.shallowClone(this.$GraphQLStoreQueryPath_root.getOwnUnaliasedFields("id").concat(n)))
    }, o.prototype.getJSONPath = function() {
        for (var e = ["$", "*"], t = 0; t < this.$GraphQLStoreQueryPath_fields.length; t++) {
            var n = this.$GraphQLStoreQueryPath_fields[t],
                r = n.getAlias() || n.getFieldName();
            e.push(r), n.isPlural() && e.push("*")
        }
        return e.join(".")
    }, o.prototype.toJSON = function() {
        return [this.$GraphQLStoreQueryPath_root.shallowClone(), this.$GraphQLStoreQueryPath_fields.map(function(e) {
            return e.shallowClone()
        })]
    }, o.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1],
            i = new o(GraphQL_EXPERIMENTAL/*a*/.Query.fromJSON(n));
        return i.$GraphQLStoreQueryPath_fields = r.map(GraphQL_EXPERIMENTAL/*a*/.Field.fromJSON), i
    }, i.exports = o
});