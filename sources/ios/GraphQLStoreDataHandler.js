__d("GraphQLStoreDataHandler",[],function (e, t, n, r, i) {
    "use strict";
    var o = {},
        a = {
            __dataID__: !0,
            __masked__: !0,
            __range__: !0,
            __status__: !0
        },
        s = {
            getID: function(e) {
                return e.__dataID__
            },
            createPointerWithID: function(e) {
                return {
                    __dataID__: e
                }
            },
            isClientID: function(e) {
                return "client:" === e.substring(0, 7)
            },
            isClientOnlyID: function(e) {
                return this.isClientID(e) && !o[e]
            },
            updateClientServerIDMap: function(e, t) {
                o[e] = t
            },
            getServerIDForClientID: function(e) {
                return o[e] || null
            },
            isMetadataKey: function(e) {
                return a[e] || !1
            }
        };
    i.exports = s
});