__d("GraphQLStoreQueryPath",["GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLStoreDataHandler","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        this.$GraphQLStoreQueryPath_root = global/*e*/, this.$GraphQLStoreQueryPath_fields = []
    }
    var GraphQL_EXPERIMENTAL/*a*/ = require/*t*/("GraphQL_EXPERIMENTAL"),
        GraphQLConstants/*s*/ = require/*t*/("GraphQLConstants"),
        GraphQLStoreDataHandler/*l*/ = require/*t*/("GraphQLStoreDataHandler"),
        invariant/*u*/ = require/*t*/("invariant");
    o.prunePathForDataID = function(global/*e*/, require/*t*/) {
        return require/*t*/ && 1 === require/*t*/.getLength() ? require/*t*/ : global/*e*/ === GraphQLConstants/*s*/.VIEWER_CLIENT_ID ? new o(new GraphQL_EXPERIMENTAL/*a*/.Query("viewer")) : GraphQLStoreDataHandler/*l*/.isClientID(global/*e*/) ? (require/*t*/ || invariant/*u*/(0, "Cannot prune GraphQL_EXPERIMENTAL/*a*/ path to GraphQL_EXPERIMENTAL/*a*/ client ID without GraphQL_EXPERIMENTAL/*a*/ current path"), require/*t*/) : new o(new GraphQL_EXPERIMENTAL/*a*/.Query("node", [global/*e*/]))
    }, o.prototype.withField = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = this.$GraphQLStoreQueryPath_fields[this.$GraphQLStoreQueryPath_fields.length - 1];
        this.pushField(global/*e*/);
        var requireLazy/*r*/ = require/*t*/();
        return this.popField(), this.$GraphQLStoreQueryPath_fields[this.$GraphQLStoreQueryPath_fields.length - 1] !== requireDynamic/*n*/ && invariant/*u*/(0, "Popped unexpected field from currentPath"), requireLazy/*r*/
    }, o.prototype.pushField = function(global/*e*/) {
        return this.$GraphQLStoreQueryPath_fields.push(global/*e*/), this
    }, o.prototype.popField = function() {
        this.$GraphQLStoreQueryPath_fields.length > 0 || invariant/*u*/(0, "No fields to pop!"), this.$GraphQLStoreQueryPath_fields.pop()
    }, o.prototype.getLength = function() {
        return this.$GraphQLStoreQueryPath_fields.length + 1
    }, o.prototype.clone = function() {
        for (var global/*e*/ = new o(this.$GraphQLStoreQueryPath_root), require/*t*/ = 0; require/*t*/ < this.$GraphQLStoreQueryPath_fields.length; require/*t*/++) global/*e*/.pushField(this.$GraphQLStoreQueryPath_fields[require/*t*/]);
        return global/*e*/
    }, o.prototype.getQueryForFragment = function(global/*e*/) {
        var require/*t*/ = this.$GraphQLStoreQueryPath_fields;
        if (0 === require/*t*/.length) return new GraphQL_EXPERIMENTAL/*a*/.QueryWithValues(this.$GraphQLStoreQueryPath_root.shallowClone(this.$GraphQLStoreQueryPath_root.getOwnUnaliasedFields("id"), [global/*e*/]));
        var requireDynamic/*n*/ = require/*t*/[require/*t*/.length - 1],
            requireLazy/*r*/ = requireDynamic/*n*/.getInferredPrimaryKey();
        requireDynamic/*n*/ = requireLazy/*r*/ ? requireDynamic/*n*/.shallowClone(requireDynamic/*n*/.getOwnUnaliasedFields(requireLazy/*r*/), [global/*e*/]) : requireDynamic/*n*/.shallowClone(null, [global/*e*/]);
        for (var module/*i*/ = require/*t*/.length - 2; module/*i*/ >= 0; module/*i*/--) {
            var o = require/*t*/[module/*i*/];
            requireLazy/*r*/ = o.getInferredPrimaryKey(), requireDynamic/*n*/ = o.shallowClone(requireLazy/*r*/ ? o.getOwnUnaliasedFields(requireLazy/*r*/).concat(requireDynamic/*n*/) : [requireDynamic/*n*/])
        }
        return new GraphQL_EXPERIMENTAL/*a*/.QueryWithValues(this.$GraphQLStoreQueryPath_root.shallowClone(this.$GraphQLStoreQueryPath_root.getOwnUnaliasedFields("id").concat(requireDynamic/*n*/)))
    }, o.prototype.getJSONPath = function() {
        for (var global/*e*/ = ["$", "*"], require/*t*/ = 0; require/*t*/ < this.$GraphQLStoreQueryPath_fields.length; require/*t*/++) {
            var requireDynamic/*n*/ = this.$GraphQLStoreQueryPath_fields[require/*t*/],
                requireLazy/*r*/ = requireDynamic/*n*/.getAlias() || requireDynamic/*n*/.getFieldName();
            global/*e*/.push(requireLazy/*r*/), requireDynamic/*n*/.isPlural() && global/*e*/.push("*")
        }
        return global/*e*/.join(".")
    }, o.prototype.toJSON = function() {
        return [this.$GraphQLStoreQueryPath_root.shallowClone(), this.$GraphQLStoreQueryPath_fields.map(function(global/*e*/) {
            return global/*e*/.shallowClone()
        })]
    }, o.fromJSON = function(global/*e*/) {
        var require/*t*/ = global/*e*/,
            requireDynamic/*n*/ = require/*t*/[0],
            requireLazy/*r*/ = require/*t*/[1],
            module/*i*/ = new o(GraphQL_EXPERIMENTAL/*a*/.Query.fromJSON(requireDynamic/*n*/));
        return module/*i*/.$GraphQLStoreQueryPath_fields = requireLazy/*r*/.map(GraphQL_EXPERIMENTAL/*a*/.Field.fromJSON), module/*i*/
    }, module/*i*/.exports = o
});