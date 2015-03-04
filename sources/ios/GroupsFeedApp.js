__d("GroupsFeedApp",["DliteLoadingComponent","GroupRoute","React","THGroupView","View","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var DliteLoadingComponent/*o*/ = require/*t*/("DliteLoadingComponent"),
        GroupRoute/*a*/ = require/*t*/("GroupRoute"),
        React/*s*/ = require/*t*/("React"),
        THGroupView/*l*/ = require/*t*/("THGroupView"),
        View/*u*/ = require/*t*/("View");
    require/*t*/("THRoutingConfig").initialize();
    var c = React/*s*/.createClass({
        displayName: "GroupsFeedApp",
        render: function() {
            var global/*e*/ = React/*s*/.createElement(View/*u*/, {
                style: {
                    paddingTop: this.props.topInset
                }
            }, THGroupView/*l*/.getFakeStoryView());
            return React/*s*/.createElement(DliteLoadingComponent/*o*/, {
                component: THGroupView/*l*/,
                route: new GroupRoute/*a*/(null, {
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