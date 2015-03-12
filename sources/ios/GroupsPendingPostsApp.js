__d("GroupsPendingPostsApp",["DliteLoadingComponent","GroupRoute","React","THGroupPendingPostsView","THRoutingConfig"],function (e, t, n, r, i) {
    "use strict";
    var DliteLoadingComponent/*o*/ = t("DliteLoadingComponent"),
        GroupRoute/*a*/ = t("GroupRoute"),
        React/*s*/ = t("React"),
        THGroupPendingPostsView/*l*/ = t("THGroupPendingPostsView");
    t("THRoutingConfig").initialize();
    var u = React/*s*/.createClass({
        displayName: "GroupsPendingPostsApp",
        render: function() {
            return React/*s*/.createElement(DliteLoadingComponent/*o*/, {
                component: THGroupPendingPostsView/*l*/,
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