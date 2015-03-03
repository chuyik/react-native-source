__d("GroupsReportedPostsApp",["DliteLoadingComponent","GroupRoute","React","THGroupReportedPostsView","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLoadingComponent"),
        exports/*a*/ = require/*t*/("GroupRoute"),
        DliteLoadingComponent/*s*/ = require/*t*/("React"),
        GroupRoute/*l*/ = require/*t*/("THGroupReportedPostsView");
    require/*t*/("THRoutingConfig").initialize();
    var u = DliteLoadingComponent/*s*/.createClass({
        displayName: "GroupsReportedPostsApp",
        React/*render*/: function() {
            return DliteLoadingComponent/*s*/.createElement(o, {
                component: GroupRoute/*l*/,
                THGroupReportedPostsView/*route*/: new exports/*a*/(null, {
                    group: this.props.group
                }),
                THRoutingConfig/*passProps*/: {
                    navBarHeight: this.props.navBarHeight,
                    bottomPadding: this.props.bottomPadding,
                    propertyToUpdate: this.props.propertyToUpdate
                }
            })
        }
    });
    module/*i*/.exports = u
});