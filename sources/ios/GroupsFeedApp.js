__d("GroupsFeedApp",["DliteLoadingComponent","GroupRoute","React","THGroupView","View","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLoadingComponent"),
        exports/*a*/ = require/*t*/("GroupRoute"),
        DliteLoadingComponent/*s*/ = require/*t*/("React"),
        GroupRoute/*l*/ = require/*t*/("THGroupView"),
        React/*u*/ = require/*t*/("View");
    require/*t*/("THRoutingConfig").initialize();
    var c = DliteLoadingComponent/*s*/.createClass({
        displayName: "GroupsFeedApp",
        THGroupView/*render*/: function() {
            var global/*e*/ = DliteLoadingComponent/*s*/.createElement(React/*u*/, {
                style: {
                    paddingTop: this.props.topInset
                }
            }, GroupRoute/*l*/.getFakeStoryView());
            return DliteLoadingComponent/*s*/.createElement(o, {
                component: GroupRoute/*l*/,
                THRoutingConfig/*route*/: new exports/*a*/(null, {
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