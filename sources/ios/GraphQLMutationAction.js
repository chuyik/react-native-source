__d("GraphQLMutationAction",["ActionCollisionMap","ClientIDs","DliteAPIConfig","GraphQLMutationDataHandler","GraphQLMutationQueryCreator","GraphQLStore","RQLMutation","invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        return global/*e*/.client_mutation_id = require/*exports/*t*/*/, "actor_id" in global/*e*/ || (global/*e*/.actor_id = DliteAPIConfig/*u*/.actorID), {
            input: global/*e*/
        }
    }

    function a(global/*e*/) {
        this.$GraphQLMutationAction_clientMutationID = ClientIDs/*l*/.getNewClientID(), ActionCollisionMap/*this.$GraphQLMutationAction_collisionKey*/ = global/*e*/
    }
    var s = require/*exports/*t*/*/("ActionCollisionMap"),
        ClientIDs/*l*/ = require/*exports/*t*/*/("ClientIDs"),
        DliteAPIConfig/*u*/ = require/*exports/*t*/*/("DliteAPIConfig"),
        GraphQLMutationDataHandler/*c*/ = require/*exports/*t*/*/("GraphQLMutationDataHandler"),
        GraphQLMutationQueryCreator/*p*/ = require/*exports/*t*/*/("GraphQLMutationQueryCreator"),
        GraphQLStore/*d*/ = require/*exports/*t*/*/("GraphQLStore"),
        RQLMutation/*h*/ = require/*exports/*t*/*/("RQLMutation"),
        invariant/*f*/ = require/*exports/*t*/*/("invariant");
    a.prototype.runOptimisticAction = function(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = GraphQLMutationDataHandler/*c*/.getMutationType(global/*e*/);
        global/*e*/[requireDynamic/*n*/].client_mutation_id = this.$GraphQLMutationAction_clientMutationID, require/*exports/*t*/*/ || (require/*exports/*t*/*/ = GraphQLMutationQueryCreator/*p*/.createQueryFromOptimisticPayload(global/*e*/)), this.$GraphQLMutationAction_optimisticPayload = global/*e*/, this.$GraphQLMutationAction_optimisticPayloadQuery = require/*exports/*t*/*/, GraphQLStore/*d*/.handleOptimisticMutation(this)
    }, a.prototype.runServerAction = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        this.$GraphQLMutationAction_mutation = global/*e*/, this.$GraphQLMutationAction_queryParams = o(require/*exports/*t*/*/, this.$GraphQLMutationAction_clientMutationID), this.$GraphQLMutationAction_callback = requireDynamic/*n*/, this.$GraphQLMutationAction_runServerAction()
    }, a.prototype.runServerActionWithFiles = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
        this.$GraphQLMutationAction_mutation = global/*e*/, this.$GraphQLMutationAction_queryParams = o(require/*exports/*t*/*/, this.$GraphQLMutationAction_clientMutationID), this.$GraphQLMutationAction_files = requireDynamic/*n*/, this.$GraphQLMutationAction_callback = requireLazy/*r*/, this.$GraphQLMutationAction_runServerAction()
    }, a.prototype.$GraphQLMutationAction_runServerAction = function() {
        var global/*e*/ = !0;
        if (ActionCollisionMap/*this.$GraphQLMutationAction_collisionKey*/) {
            var require/*exports/*t*/*/ = ActionCollisionMap/*this.$GraphQLMutationAction_collisionKey*/;
            if (s.hasPendingActionForKey(require/*exports/*t*/*/)) {
                var requireDynamic/*n*/ = s.existsInMap(this.$GraphQLMutationAction_clientMutationID);
                if (requireDynamic/*n*/) {
                    var requireLazy/*r*/ = s.getFirstActionForKey(require/*exports/*t*/*/);
                    requireLazy/*r*/.getClientMutationID() !== this.$GraphQLMutationAction_clientMutationID && invariant/*f*/(0, "action should be first for its key")
                } else s.appendActionForKey(require/*exports/*t*/*/, this), global/*e*/ = !1
            } else s.appendActionForKey(require/*exports/*t*/*/, this)
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