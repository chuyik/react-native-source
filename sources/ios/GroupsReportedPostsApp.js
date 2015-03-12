__d("GroupsReportedPostsApp",["DliteLoadingComponent","GroupRoute","React","THGroupReportedPostsView","THRoutingConfig"],function (e, t, n, r, i) {
    "use strict";
    var DliteLoadingComponent/*o*/ = t("DliteLoadingComponent"),
        GroupRoute/*a*/ = t("GroupRoute"),
        React/*s*/ = t("React"),
        THGroupReportedPostsView/*l*/ = t("THGroupReportedPostsView");
    t("THRoutingConfig").initialize();
    var u = React/*s*/.createClass({
        displayName: "GroupsReportedPostsApp",
        render: function() {
            return React/*s*/.createElement(DliteLoadingComponent/*o*/, {
                component: THGroupReportedPostsView/*l*/,
                route: new GroupRoute/*a*/(null, {
                    group: this.props.group
                }),
                passProps: {
                    navBarHeight: this.props.navBarHeight,
                    bottomPadding: this.props.bottomPadding,
                    propertyToUpdate: this.props.propertyToUpdate
                }
            })
        }
    });
    i.exports = u
});