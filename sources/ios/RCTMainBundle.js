__d("RCTMainBundle",["Bundler","GroupsFeedApp","GroupsPermalinkApp","GroupsPendingPostsApp","GroupsPostSearchApp","GroupsReportedPostsApp","DliteCatalystProfiler"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Bundler");
    o.registerConfig([{
        appKey: "GroupsFeedApp",
        component: function() {
            return require/*t*/("GroupsFeedApp")
        }
    }, {
        appKey: "GroupsPermalinkApp",
        component: function() {
            return require/*t*/("GroupsPermalinkApp")
        }
    }, {
        appKey: "GroupsPendingPostsApp",
        component: function() {
            return require/*t*/("GroupsPendingPostsApp")
        }
    }, {
        appKey: "GroupsPostSearchApp",
        component: function() {
            return require/*t*/("GroupsPostSearchApp")
        }
    }, {
        appKey: "GroupsReportedPostsApp",
        component: function() {
            return require/*t*/("GroupsReportedPostsApp")
        }
    }]), require/*t*/("DliteCatalystProfiler").install(), module/*i*/.exports = o
});