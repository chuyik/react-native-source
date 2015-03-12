__d("GroupsPermalinkApp",["DliteLoadingComponent","FBSpinner","LegacyStoryPermalinkRoute","React","StoryPermalinkRoute","StyleSheet","THColors","THPermalinkView","View","THRoutingConfig"],function (e, t, n, r, i) {
    "use strict";
    var DliteLoadingComponent/*o*/ = t("DliteLoadingComponent"),
        FBSpinner/*a*/ = t("FBSpinner"),
        LegacyStoryPermalinkRoute/*s*/ = t("LegacyStoryPermalinkRoute"),
        React/*l*/ = t("React"),
        StoryPermalinkRoute/*u*/ = t("StoryPermalinkRoute"),
        StyleSheet/*c*/ = t("StyleSheet"),
        THColors/*p*/ = t("THColors"),
        THPermalinkView/*d*/ = t("THPermalinkView"),
        View/*h*/ = t("View");
    t("THRoutingConfig").initialize();
    var f = 10,
        m = React/*l*/.createClass({
            displayName: "GroupsPermalinkApp",
            getContext: function() {
                return this.props.story ? {
                    route: new StoryPermalinkRoute/*u*/(null, {
                        story: this.props.story,
                        defaultCommentCount: f
                    })
                } : this.props.legacystory ? {
                    route: new LegacyStoryPermalinkRoute/*s*/(null, {
                        story: this.props.legacystory,
                        defaultCommentCount: f
                    })
                } : void console.error("GroupsPermalinkApp must have either FBSpinner/*a*/ story or legacystory prop")
            },
            render: function() {
                var e = React/*l*/.createElement(View/*h*/, {
                    style: g.fullScreenLoadingIndicator
                }, React/*l*/.createElement(FBSpinner/*a*/, null));
                return React/*l*/.createElement(View/*h*/, {
                    style: g.container
                }, React/*l*/.createElement(DliteLoadingComponent/*o*/, {
                    component: THPermalinkView/*d*/,
                    route: this.getContext().route,
                    loadingView: e,
                    refetchRoute: !0,
                    passProps: {
                        groupPostNotifTTI: this.props,
                        topInset: this.props.topInset,
                        bottomInset: this.props.bottomInset
                    }
                }))
            }
        }),
        g = StyleSheet/*c*/.create({
            container: {
                backgroundColor: THColors/*p*/.backgroundWash,
                flex: 1
            },
            fullScreenLoadingIndicator: {
                alignItems: "center",
                paddingTop: 200
            }
        });
    i.exports = m
});