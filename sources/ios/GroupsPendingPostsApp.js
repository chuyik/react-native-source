__d("GroupsPendingPostsApp",["DliteLoadingComponent","GroupRoute","React","THGroupPendingPostsView","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLoadingComponent"),
        a = require/*t*/("GroupRoute"),
        s = require/*t*/("React"),
        l = require/*t*/("THGroupPendingPostsView");
    require/*t*/("THRoutingConfig").initialize();
    var u = s.createClass({
        displayName: "GroupsPendingPostsApp",
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