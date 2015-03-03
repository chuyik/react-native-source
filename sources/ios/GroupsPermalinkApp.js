__d("GroupsPermalinkApp",["DliteLoadingComponent","FBSpinner","LegacyStoryPermalinkRoute","React","StoryPermalinkRoute","StyleSheet","THColors","THPermalinkView","View","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLoadingComponent"),
        exports/*a*/ = require/*t*/("FBSpinner"),
        DliteLoadingComponent/*s*/ = require/*t*/("LegacyStoryPermalinkRoute"),
        FBSpinner/*l*/ = require/*t*/("React"),
        LegacyStoryPermalinkRoute/*u*/ = require/*t*/("StoryPermalinkRoute"),
        React/*c*/ = require/*t*/("StyleSheet"),
        StoryPermalinkRoute/*p*/ = require/*t*/("THColors"),
        StyleSheet/*d*/ = require/*t*/("THPermalinkView"),
        THColors/*h*/ = require/*t*/("View");
    require/*t*/("THRoutingConfig").initialize();
    var f = 10,
        THPermalinkView/*m*/ = FBSpinner/*l*/.createClass({
            displayName: "GroupsPermalinkApp",
            View/*getContext*/: function() {
                return this.props.story ? {
                    route: new LegacyStoryPermalinkRoute/*u*/(null, {
                        story: this.props.story,
                        THRoutingConfig/*defaultCommentCount*/: f
                    })
                } : this.props.legacystory ? {
                    route: new DliteLoadingComponent/*s*/(null, {
                        story: this.props.legacystory,
                        THRoutingConfig/*defaultCommentCount*/: f
                    })
                } : void console.error("GroupsPermalinkApp must have either exports/*a*/ story or legacystory prop")
            },
            render: function() {
                var global/*e*/ = FBSpinner/*l*/.createElement(THColors/*h*/, {
                    style: g.fullScreenLoadingIndicator
                }, FBSpinner/*l*/.createElement(exports/*a*/, null));
                return FBSpinner/*l*/.createElement(THColors/*h*/, {
                    style: g.container
                }, FBSpinner/*l*/.createElement(o, {
                    component: StyleSheet/*d*/,
                    route: this.View/*getContext*/().route,
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
        g = React/*c*/.create({
            container: {
                backgroundColor: StoryPermalinkRoute/*p*/.backgroundWash,
                flex: 1
            },
            fullScreenLoadingIndicator: {
                alignItems: "center",
                paddingTop: 200
            }
        });
    module/*i*/.exports = THPermalinkView/*m*/
});