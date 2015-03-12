__d("RCTMainBundle",["Bundler","GroupsFeedApp","GroupsPermalinkApp","GroupsPendingPostsApp","GroupsPostSearchApp","GroupsReportedPostsApp","DliteCatalystProfiler"],function (e, t, n, r, i) {
    "use strict";
    var Bundler/*o*/ = t("Bundler");
    Bundler/*o*/.registerConfig([{
        appKey: "GroupsFeedApp",
        component: function() {
            return t("GroupsFeedApp")
        }
    }, {
        appKey: "GroupsPermalinkApp",
        component: function() {
            return t("GroupsPermalinkApp")
        }
    }, {
        appKey: "GroupsPendingPostsApp",
        component: function() {
            return t("GroupsPendingPostsApp")
        }
    }, {
        appKey: "GroupsPostSearchApp",
        component: function() {
            return t("GroupsPostSearchApp")
        }
    }, {
        appKey: "GroupsReportedPostsApp",
        component: function() {
            return t("GroupsReportedPostsApp")
        }
    }]), t("DliteCatalystProfiler").install(), i.exports = Bundler/*o*/
});