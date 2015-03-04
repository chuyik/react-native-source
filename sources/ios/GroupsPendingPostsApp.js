__d("GroupsPendingPostsApp",["DliteLoadingComponent","GroupRoute","React","THGroupPendingPostsView","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var DliteLoadingComponent/*o*/ = require/*t*/("DliteLoadingComponent"),
        GroupRoute/*a*/ = require/*t*/("GroupRoute"),
        React/*s*/ = require/*t*/("React"),
        THGroupPendingPostsView/*l*/ = require/*t*/("THGroupPendingPostsView");
    require/*t*/("THRoutingConfig").initialize();
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
    module/*i*/.exports = u
});