__d("RCTMainBundle",["Bundler","GroupsFeedApp","GroupsPermalinkApp","GroupsPendingPostsApp","GroupsPostSearchApp","GroupsReportedPostsApp","DliteCatalystProfiler"],function (global/*e*/, require/*GroupsPostSearchApp/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*GroupsPostSearchApp/*t*/*/("Bundler");
    o.registerConfig([{
        appKey: "GroupsFeedApp",
        exports/*Bundler/*GroupsFeedApp/*GroupsPermalinkApp/*GroupsPendingPostsApp/*component*/*/*/*/*/: function() {
            return require/*GroupsPostSearchApp/*t*/*/("GroupsFeedApp")
        }
    }, {
        appKey: "GroupsPermalinkApp",
        exports/*Bundler/*GroupsFeedApp/*GroupsPermalinkApp/*GroupsPendingPostsApp/*component*/*/*/*/*/: function() {
            return require/*GroupsPostSearchApp/*t*/*/("GroupsPermalinkApp")
        }
    }, {
        appKey: "GroupsPendingPostsApp",
        exports/*Bundler/*GroupsFeedApp/*GroupsPermalinkApp/*GroupsPendingPostsApp/*component*/*/*/*/*/: function() {
            return require/*GroupsPostSearchApp/*t*/*/("GroupsPendingPostsApp")
        }
    }, {
        appKey: "GroupsPostSearchApp",
        exports/*Bundler/*GroupsFeedApp/*GroupsPermalinkApp/*GroupsPendingPostsApp/*component*/*/*/*/*/: function() {
            return require/*GroupsPostSearchApp/*t*/*/("GroupsPostSearchApp")
        }
    }, {
        appKey: "GroupsReportedPostsApp",
        exports/*Bundler/*GroupsFeedApp/*GroupsPermalinkApp/*GroupsPendingPostsApp/*component*/*/*/*/*/: function() {
            return require/*GroupsPostSearchApp/*t*/*/("GroupsReportedPostsApp")
        }
    }]), require/*GroupsPostSearchApp/*t*/*/("DliteCatalystProfiler").install(), module/*i*/.exports = o
});