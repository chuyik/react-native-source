__d("GroupsPendingPostsApp",["DliteLoadingComponent","GroupRoute","React","THGroupPendingPostsView","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLoadingComponent"),
        exports/*a*/ = require/*t*/("GroupRoute"),
        DliteLoadingComponent/*s*/ = require/*t*/("React"),
        GroupRoute/*l*/ = require/*t*/("THGroupPendingPostsView");
    require/*t*/("THRoutingConfig").initialize();
    var u = DliteLoadingComponent/*s*/.createClass({
        displayName: "GroupsPendingPostsApp",
        React/*render*/: function() {
            return DliteLoadingComponent/*s*/.createElement(o, {
                component: GroupRoute/*l*/,
                THGroupPendingPostsView/*route*/: new exports/*a*/(null, {
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