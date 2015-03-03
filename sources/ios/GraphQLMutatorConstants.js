__d("GraphQLMutatorConstants",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = {
        APPEND: "append",
        exports/*PREPEND*/: "prepend",
        REMOVE: "remove",
        NODE_DELETE_HANDLER: "node_delete",
        RANGE_ADD_HANDLER: "range_add",
        RANGE_DELETE_HANDLER: "range_delete",
        HANDLER_TYPES: {},
        OPTIMISTIC_UPDATE: "optimistic",
        SERVER_UPDATE: "server",
        POLLER_UPDATE: "poller",
        UPDATE_TYPES: {},
        RANGE_OPERATIONS: {}
    };
    o.HANDLER_TYPES[o.NODE_DELETE_HANDLER] = !0, o.HANDLER_TYPES[o.RANGE_ADD_HANDLER] = !0, o.HANDLER_TYPES[o.RANGE_DELETE_HANDLER] = !0, o.UPDATE_TYPES[o.OPTIMISTIC_UPDATE] = !0, o.UPDATE_TYPES[o.SERVER_UPDATE] = !0, o.UPDATE_TYPES[o.POLLER_UPDATE] = !0, o.RANGE_OPERATIONS[o.APPEND] = !0, o.RANGE_OPERATIONS[o.exports/*PREPEND*/] = !0, o.RANGE_OPERATIONS[o.REMOVE] = !0, module/*i*/.exports = o
});