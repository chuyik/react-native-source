__d("GraphQLConstants",[],function (e, t, n, r, i) {
    "use strict";
    var o = {
        CHECKIN_SEARCH_QUERY: "checkin_search_query",
        CLIENT_SESSION: "client_session",
        CLIENT_SESSION_ID: "client_session_id",
        CURSOR: "cursor",
        EDGES: "edges",
        ENTITY_SEARCH: "entities_named",
        GRAPH_SEARCH_QUERY: "graph_search_query",
        GROUP: "group_address",
        NODE: "node",
        NODES: "nodes",
        PAGE_INFO: "page_info",
        STORY: "story",
        USERNAME: "username",
        VIEWER: "viewer",
        CUSTOM_ROOTCALLS: {},
        IDLESS_ROOTCALLS: {},
        RANGE_CALLS: {
            after: !0,
            before: !0,
            client_session: !0,
            find: !0,
            first: !0,
            last: !0,
            surrounds: !0,
            wrapper: !0
        },
        VIEWER_CLIENT_ID: "client:viewer",
        DUMMY_CURSOR_ID: "client:cursor"
    };
    o.CUSTOM_ROOTCALLS[o.ENTITY_SEARCH] = !0, o.CUSTOM_ROOTCALLS[o.GROUP] = !0, o.CUSTOM_ROOTCALLS[o.STORY] = !0, o.CUSTOM_ROOTCALLS[o.USERNAME] = !0, o.CUSTOM_ROOTCALLS[o.CHECKIN_SEARCH_QUERY] = !0, o.CUSTOM_ROOTCALLS[o.GRAPH_SEARCH_QUERY] = !0, o.IDLESS_ROOTCALLS[o.CHECKIN_SEARCH_QUERY] = !0, i.exports = o
});