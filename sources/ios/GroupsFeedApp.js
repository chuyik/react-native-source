__d("GroupsFeedApp",["DliteLoadingComponent","GroupRoute","React","THGroupView","View","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLoadingComponent"),
        a = require/*t*/("GroupRoute"),
        s = require/*t*/("React"),
        l = require/*t*/("THGroupView"),
        u = require/*t*/("View");
    require/*t*/("THRoutingConfig").initialize();
    var c = s.createClass({
        displayName: "GroupsFeedApp",
        render: function() {
            var global/*e*/ = s.createElement(u, {
                style: {
                    paddingTop: this.props.topInset
                }
            }, l.getFakeStoryView());
            return s.createElement(o, {
                component: l,
                route: new a(null, {
                    group: this.props.group
                }),
                loadingView: global/*e*/,
                refetchRoute: !0,
                passProps: this.props
            })
        }
    });
    module/*i*/.exports = c
});