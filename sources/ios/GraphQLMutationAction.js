__d("GraphQLMutationAction",["ActionCollisionMap","ClientIDs","DliteAPIConfig","GraphQLMutationDataHandler","GraphQLMutationQueryCreator","GraphQLStore","RQLMutation","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        return e.client_mutation_id = t, "actor_id" in e || (e.actor_id = DliteAPIConfig/*u*/.actorID), {
            input: e
        }
    }

    function a(e) {
        this.$GraphQLMutationAction_clientMutationID = ClientIDs/*l*/.getNewClientID(), this.$GraphQLMutationAction_collisionKey = e
    }
    var ActionCollisionMap/*s*/ = t("ActionCollisionMap"),
        ClientIDs/*l*/ = t("ClientIDs"),
        DliteAPIConfig/*u*/ = t("DliteAPIConfig"),
        GraphQLMutationDataHandler/*c*/ = t("GraphQLMutationDataHandler"),
        GraphQLMutationQueryCreator/*p*/ = t("GraphQLMutationQueryCreator"),
        GraphQLStore/*d*/ = t("GraphQLStore"),
        RQLMutation/*h*/ = t("RQLMutation"),
        invariant/*f*/ = t("invariant");
    a.prototype.runOptimisticAction = function(e, t) {
        var n = GraphQLMutationDataHandler/*c*/.getMutationType(e);
        e[n].client_mutation_id = this.$GraphQLMutationAction_clientMutationID, t || (t = GraphQLMutationQueryCreator/*p*/.createQueryFromOptimisticPayload(e)), this.$GraphQLMutationAction_optimisticPayload = e, this.$GraphQLMutationAction_optimisticPayloadQuery = t, GraphQLStore/*d*/.handleOptimisticMutation(this)
    }, a.prototype.runServerAction = function(e, t, n) {
        this.$GraphQLMutationAction_mutation = e, this.$GraphQLMutationAction_queryParams = o(t, this.$GraphQLMutationAction_clientMutationID), this.$GraphQLMutationAction_callback = n, this.$GraphQLMutationAction_runServerAction()
    }, a.prototype.runServerActionWithFiles = function(e, t, n, r) {
        this.$GraphQLMutationAction_mutation = e, this.$GraphQLMutationAction_queryParams = o(t, this.$GraphQLMutationAction_clientMutationID), this.$GraphQLMutationAction_files = n, this.$GraphQLMutationAction_callback = r, this.$GraphQLMutationAction_runServerAction()
    }, a.prototype.$GraphQLMutationAction_runServerAction = function() {
        var e = !0;
        if (this.$GraphQLMutationAction_collisionKey) {
            var t = this.$GraphQLMutationAction_collisionKey;
            if (ActionCollisionMap/*s*/.hasPendingActionForKey(t)) {
                var n = ActionCollisionMap/*s*/.existsInMap(this.$GraphQLMutationAction_clientMutationID);
                if (n) {
                    var r = ActionCollisionMap/*s*/.getFirstActionForKey(t);
                    r.getClientMutationID() !== this.$GraphQLMutationAction_clientMutationID && invariant/*f*/(0, "action should be first for its key")
                } else ActionCollisionMap/*s*/.appendActionForKey(t, this), e = !1
            } else ActionCollisionMap/*s*/.appendActionForKey(t, this)
        }
        e && (this.$GraphQLMutationAction_files ? RQLMutation/*h*/.sendWithFiles(this.$GraphQLMutationAction_mutation, this.$GraphQLMutationAction_queryParams, this.$GraphQLMutationAction_files, this.$GraphQLMutationAction_callback) : RQLMutation/*h*/.send(this.$GraphQLMutationAction_mutation, this.$GraphQLMutationAction_queryParams, this.$GraphQLMutationAction_callback))
    }, a.prototype.rerunServerAction = function() {
        this.$GraphQLMutationAction_mutation && this.$GraphQLMutationAction_queryParams || invariant/*f*/(0, "cannot redo server update without doing it the first time"), this.$GraphQLMutationAction_runServerAction()
    }, a.prototype.getClientMutationID = function() {
        return this.$GraphQLMutationAction_clientMutationID
    }, a.prototype.getOptimisticPayload = function() {
        return this.$GraphQLMutationAction_optimisticPayload
    }, a.prototype.getOptimisticPayloadQuery = function() {
        return this.$GraphQLMutationAction_optimisticPayloadQuery
    }, i.exports = a
});