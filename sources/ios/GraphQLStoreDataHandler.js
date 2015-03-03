__d("GraphQLStoreDataHandler",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = {},
        exports/*a*/ = {
            __dataID__: !0,
            __masked__: !0,
            __range__: !0,
            __status__: !0
        },
        s = {
            getID: function(global/*e*/) {
                return global/*e*/.__dataID__
            },
            createPointerWithID: function(global/*e*/) {
                return {
                    __dataID__: global/*e*/
                }
            },
            isClientID: function(global/*e*/) {
                return "client:" === global/*e*/.substring(0, 7)
            },
            isClientOnlyID: function(global/*e*/) {
                return this.isClientID(global/*e*/) && !o[global/*e*/]
            },
            updateClientServerIDMap: function(global/*e*/, require/*t*/) {
                o[global/*e*/] = require/*t*/
            },
            getServerIDForClientID: function(global/*e*/) {
                return o[global/*e*/] || null
            },
            isMetadataKey: function(global/*e*/) {
                return exports/*a*/[global/*e*/] || !1
            }
        };
    module/*i*/.exports = s
});