__d("URISchemes",["createObjectFrom"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("createObjectFrom"),
        exports/*a*/ = o(["fb", "fb-ama", "fb-messenger", "fbcf", "fbconnect", "fbrpc", "file", "ftp", "http", "https", "mailto", "ms-app", "itms", "itms-apps", "itms-services", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "react"]),
        createObjectFrom/*s*/ = {
            isAllowed: function(global/*e*/) {
                return global/*e*/ ? exports/*a*/.hasOwnProperty(global/*e*/.toLowerCase()) : !0
            }
        };
    module/*i*/.exports = createObjectFrom/*s*/
});