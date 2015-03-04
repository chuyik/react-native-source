__d("GraphQLMutationAction",["ActionCollisionMap","ClientIDs","DliteAPIConfig","GraphQLMutationDataHandler","GraphQLMutationQueryCreator","GraphQLStore","RQLMutation","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        return global/*e*/.client_mutation_id = require/*t*/, "actor_id" in global/*e*/ || (global/*e*/.actor_id = DliteAPIConfig/*u*/.actorID), {
            input: global/*e*/
        }
    }

    function a(global/*e*/) {
        this.$GraphQLMutationAction_clientMutationID = ClientIDs/*l*/.getNewClientID(), this.$GraphQLMutationAction_collisionKey = global/*e*/
    }
    var ActionCollisionMap/*s*/ = require/*t*/("ActionCollisionMap"),
        ClientIDs/*l*/ = require/*t*/("ClientIDs"),
        DliteAPIConfig/*u*/ = require/*t*/("DliteAPIConfig"),
        GraphQLMutationDataHandler/*c*/ = require/*t*/("GraphQLMutationDataHandler"),
        GraphQLMutationQueryCreator/*p*/ = require/*t*/("GraphQLMutationQueryCreator"),
        GraphQLStore/*d*/ = require/*t*/("GraphQLStore"),
        RQLMutation/*h*/ = require/*t*/("RQLMutation"),
        invariant/*f*/ = require/*t*/("invariant");
    a.prototype.runOptimisticAction = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = GraphQLMutationDataHandler/*c*/.getMutationType(global/*e*/);
        global/*e*/[requireDynamic/*n*/].client_mutation_id = this.$GraphQLMutationAction_clientMutationID, require/*t*/ || (require/*t*/ = GraphQLMutationQueryCreator/*p*/.createQueryFromOptimisticPayload(global/*e*/)), this.$GraphQLMutationAction_optimisticPayload = global/*e*/, this.$GraphQLMutationAction_optimisticPayloadQuery = require/*t*/, GraphQLStore/*d*/.handleOptimisticMutation(this)
    }, a.prototype.runServerAction = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        this.$GraphQLMutationAction_mutation = global/*e*/, this.$GraphQLMutationAction_queryParams = o(require/*t*/, this.$GraphQLMutationAction_clientMutationID), this.$GraphQLMutationAction_callback = requireDynamic/*n*/, this.$GraphQLMutationAction_runServerAction()
    }, a.prototype.runServerActionWithFiles = function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
        this.$GraphQLMutationAction_mutation = global/*e*/, this.$GraphQLMutationAction_queryParams = o(require/*t*/, this.$GraphQLMutationAction_clientMutationID), this.$GraphQLMutationAction_files = requireDynamic/*n*/, this.$GraphQLMutationAction_callback = requireLazy/*r*/, this.$GraphQLMutationAction_runServerAction()
    }, a.prototype.$GraphQLMutationAction_runServerAction = function() {
        var global/*e*/ = !0;
        if (this.$GraphQLMutationAction_collisionKey) {
            var require/*t*/ = this.$GraphQLMutationAction_collisionKey;
            if (ActionCollisionMap/*s*/.hasPendingActionForKey(require/*t*/)) {
                var requireDynamic/*n*/ = ActionCollisionMap/*s*/.existsInMap(this.$GraphQLMutationAction_clientMutationID);
                if (requireDynamic/*n*/) {
                    var requireLazy/*r*/ = ActionCollisionMap/*s*/.getFirstActionForKey(require/*t*/);
                    requireLazy/*r*/.getClientMutationID() !== this.$GraphQLMutationAction_clientMutationID && invariant/*f*/(0, "action should be first for its key")
                } else ActionCollisionMap/*s*/.appendActionForKey(require/*t*/, this), global/*e*/ = !1
            } else ActionCollisionMap/*s*/.appendActionForKey(require/*t*/, this)
        }
        global/*e*/ && (this.$GraphQLMutationAction_files ? RQLMutation/*h*/.sendWithFiles(this.$GraphQLMutationAction_mutation, this.$GraphQLMutationAction_queryParams, this.$GraphQLMutationAction_files, this.$GraphQLMutationAction_callback) : RQLMutation/*h*/.send(this.$GraphQLMutationAction_mutation, this.$GraphQLMutationAction_queryParams, this.$GraphQLMutationAction_callback))
    }, a.prototype.rerunServerAction = function() {
        this.$GraphQLMutationAction_mutation && this.$GraphQLMutationAction_queryParams || invariant/*f*/(0, "cannot redo server update without doing it the first time"), this.$GraphQLMutationAction_runServerAction()
    }, a.prototype.getClientMutationID = function() {
        return this.$GraphQLMutationAction_clientMutationID
    }, a.prototype.getOptimisticPayload = function() {
        return this.$GraphQLMutationAction_optimisticPayload
    }, a.prototype.getOptimisticPayloadQuery = function() {
        return this.$GraphQLMutationAction_optimisticPayloadQuery
    }, module/*i*/.exports = a
});