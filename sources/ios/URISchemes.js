__d("URISchemes",["createObjectFrom"],function (e, t, n, r, i) {
    "use strict";
    var createObjectFrom/*o*/ = t("createObjectFrom"),
        a = createObjectFrom/*o*/(["fb", "fb-ama", "fb-messenger", "fbcf", "fbconnect", "fbrpc", "file", "ftp", "http", "https", "mailto", "ms-app", "itms", "itms-apps", "itms-services", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "react"]),
        s = {
            isAllowed: function(e) {
                return e ? a.hasOwnProperty(e.toLowerCase()) : !0
            }
        };
    i.exports = s
});