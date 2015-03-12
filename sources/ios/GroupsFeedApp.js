__d("GroupsFeedApp",["DliteLoadingComponent","GroupRoute","React","THGroupView","View","THRoutingConfig"],function (e, t, n, r, i) {
    "use strict";
    var DliteLoadingComponent/*o*/ = t("DliteLoadingComponent"),
        GroupRoute/*a*/ = t("GroupRoute"),
        React/*s*/ = t("React"),
        THGroupView/*l*/ = t("THGroupView"),
        View/*u*/ = t("View");
    t("THRoutingConfig").initialize();
    var c = React/*s*/.createClass({
        displayName: "GroupsFeedApp",
        render: function() {
            var e = React/*s*/.createElement(View/*u*/, {
                style: {
                    paddingTop: this.props.topInset
                }
            }, THGroupView/*l*/.getFakeStoryView());
            return React/*s*/.createElement(DliteLoadingComponent/*o*/, {
                component: THGroupView/*l*/,
                route: new GroupRoute/*a*/(null, {
                    group: this.props.group
                }),
                loadingView: e,
                refetchRoute: !0,
                passProps: this.props
            })
        }
    });
    i.exports = c
});