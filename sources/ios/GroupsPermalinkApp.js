__d("GroupsPermalinkApp",["DliteLoadingComponent","FBSpinner","LegacyStoryPermalinkRoute","React","StoryPermalinkRoute","StyleSheet","THColors","THPermalinkView","View","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var DliteLoadingComponent/*o*/ = require/*t*/("DliteLoadingComponent"),
        FBSpinner/*a*/ = require/*t*/("FBSpinner"),
        LegacyStoryPermalinkRoute/*s*/ = require/*t*/("LegacyStoryPermalinkRoute"),
        React/*l*/ = require/*t*/("React"),
        StoryPermalinkRoute/*u*/ = require/*t*/("StoryPermalinkRoute"),
        StyleSheet/*c*/ = require/*t*/("StyleSheet"),
        THColors/*p*/ = require/*t*/("THColors"),
        THPermalinkView/*d*/ = require/*t*/("THPermalinkView"),
        View/*h*/ = require/*t*/("View");
    require/*t*/("THRoutingConfig").initialize();
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
                var global/*e*/ = React/*l*/.createElement(View/*h*/, {
                    style: g.fullScreenLoadingIndicator
                }, React/*l*/.createElement(FBSpinner/*a*/, null));
                return React/*l*/.createElement(View/*h*/, {
                    style: g.container
                }, React/*l*/.createElement(DliteLoadingComponent/*o*/, {
                    component: THPermalinkView/*d*/,
                    route: this.getContext().route,
                    loadingView: global/*e*/,
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
    module/*i*/.exports = m
});