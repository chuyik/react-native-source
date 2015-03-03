__d("GroupsReportedPostsApp",["DliteLoadingComponent","GroupRoute","React","THGroupReportedPostsView","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLoadingComponent"),
        a = require/*t*/("GroupRoute"),
        s = require/*t*/("React"),
        l = require/*t*/("THGroupReportedPostsView");
    require/*t*/("THRoutingConfig").initialize();
    var u = s.createClass({
        displayName: "GroupsReportedPostsApp",
        render: function() {
            return s.createElement(o, {
                component: l,
                route: new a(null, {
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
    module/*i*/.exports = u
});