__d("GraphQLStoreQueryPath",["GraphQL_EXPERIMENTAL","GraphQLConstants","GraphQLStoreDataHandler","invariant"],function (global/*e*/, require/*invariant/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        this.$GraphQLStoreQueryPath_root = global/*e*/, exports/*this.$GraphQLStoreQueryPath_fields*/ = []
    }
    var a = require/*invariant/*t*/*/("GraphQL_EXPERIMENTAL"),
        GraphQL_EXPERIMENTAL/*s*/ = require/*invariant/*t*/*/("GraphQLConstants"),
        GraphQLConstants/*l*/ = require/*invariant/*t*/*/("GraphQLStoreDataHandler"),
        GraphQLStoreDataHandler/*u*/ = require/*invariant/*t*/*/("invariant");
    o.prunePathForDataID = function(global/*e*/, require/*invariant/*t*/*/) {
        return require/*invariant/*t*/*/ && 1 === require/*invariant/*t*/*/.getLength() ? require/*invariant/*t*/*/ : global/*e*/ === GraphQL_EXPERIMENTAL/*s*/.VIEWER_CLIENT_ID ? new o(new a.Query("viewer")) : GraphQLConstants/*l*/.isClientID(global/*e*/) ? (require/*invariant/*t*/*/ || GraphQLStoreDataHandler/*u*/(0, "Cannot prune a path to a client ID without a current path"), require/*invariant/*t*/*/) : new o(new a.Query("node", [global/*e*/]))
    }, o.prototype.withField = function(global/*e*/, require/*invariant/*t*/*/) {
        var requireDynamic/*n*/ = exports/*this.$GraphQLStoreQueryPath_fields*/[exports/*this.$GraphQLStoreQueryPath_fields*/.length - 1];
        this.pushField(global/*e*/);
        var requireLazy/*r*/ = require/*invariant/*t*/*/();
        return this.popField(), exports/*this.$GraphQLStoreQueryPath_fields*/[exports/*this.$GraphQLStoreQueryPath_fields*/.length - 1] !== requireDynamic/*n*/ && GraphQLStoreDataHandler/*u*/(0, "Popped unexpected field from currentPath"), requireLazy/*r*/
    }, o.prototype.pushField = function(global/*e*/) {
        return exports/*this.$GraphQLStoreQueryPath_fields*/.push(global/*e*/), this
    }, o.prototype.popField = function() {
        exports/*this.$GraphQLStoreQueryPath_fields*/.length > 0 || GraphQLStoreDataHandler/*u*/(0, "No fields to pop!"), exports/*this.$GraphQLStoreQueryPath_fields*/.pop()
    }, o.prototype.getLength = function() {
        return exports/*this.$GraphQLStoreQueryPath_fields*/.length + 1
    }, o.prototype.clone = function() {
        for (var global/*e*/ = new o(this.$GraphQLStoreQueryPath_root), require/*invariant/*t*/*/ = 0; require/*invariant/*t*/*/ < exports/*this.$GraphQLStoreQueryPath_fields*/.length; require/*invariant/*t*/*/++) global/*e*/.pushField(exports/*this.$GraphQLStoreQueryPath_fields*/[require/*invariant/*t*/*/]);
        return global/*e*/
    }, o.prototype.getQueryForFragment = function(global/*e*/) {
        var require/*invariant/*t*/*/ = exports/*this.$GraphQLStoreQueryPath_fields*/;
        if (0 === require/*invariant/*t*/*/.length) return new a.QueryWithValues(this.$GraphQLStoreQueryPath_root.shallowClone(this.$GraphQLStoreQueryPath_root.getOwnUnaliasedFields("id"), [global/*e*/]));
        var requireDynamic/*n*/ = require/*invariant/*t*/*/[require/*invariant/*t*/*/.length - 1],
            requireLazy/*r*/ = requireDynamic/*n*/.getInferredPrimaryKey();
        requireDynamic/*n*/ = requireLazy/*r*/ ? requireDynamic/*n*/.shallowClone(requireDynamic/*n*/.getOwnUnaliasedFields(requireLazy/*r*/), [global/*e*/]) : requireDynamic/*n*/.shallowClone(null, [global/*e*/]);
        for (var module/*i*/ = require/*invariant/*t*/*/.length - 2; module/*i*/ >= 0; module/*i*/--) {
            var o = require/*invariant/*t*/*/[module/*i*/];
            requireLazy/*r*/ = o.getInferredPrimaryKey(), requireDynamic/*n*/ = o.shallowClone(requireLazy/*r*/ ? o.getOwnUnaliasedFields(requireLazy/*r*/).concat(requireDynamic/*n*/) : [requireDynamic/*n*/])
        }
        return new a.QueryWithValues(this.$GraphQLStoreQueryPath_root.shallowClone(this.$GraphQLStoreQueryPath_root.getOwnUnaliasedFields("id").concat(requireDynamic/*n*/)))
    }, o.prototype.getJSONPath = function() {
        for (var global/*e*/ = ["$", "*"], require/*invariant/*t*/*/ = 0; require/*invariant/*t*/*/ < exports/*this.$GraphQLStoreQueryPath_fields*/.length; require/*invariant/*t*/*/++) {
            var requireDynamic/*n*/ = exports/*this.$GraphQLStoreQueryPath_fields*/[require/*invariant/*t*/*/],
                requireLazy/*r*/ = requireDynamic/*n*/.getAlias() || requireDynamic/*n*/.getFieldName();
            global/*e*/.push(requireLazy/*r*/), requireDynamic/*n*/.isPlural() && global/*e*/.push("*")
        }
        return global/*e*/.join(".")
    }, o.prototype.toJSON = function() {
        return [this.$GraphQLStoreQueryPath_root.shallowClone(), exports/*this.$GraphQLStoreQueryPath_fields*/.map(function(global/*e*/) {
            return global/*e*/.shallowClone()
        })]
    }, o.fromJSON = function(global/*e*/) {
        var require/*invariant/*t*/*/ = global/*e*/,
            requireDynamic/*n*/ = require/*invariant/*t*/*/[0],
            requireLazy/*r*/ = require/*invariant/*t*/*/[1],
            module/*i*/ = new o(a.Query.fromJSON(requireDynamic/*n*/));
        return module/*i*/.$GraphQLStoreQueryPath_fields = requireLazy/*r*/.map(a.Field.fromJSON), module/*i*/
    }, module/*i*/.exports = o
});