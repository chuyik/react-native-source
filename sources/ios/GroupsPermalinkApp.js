__d("GroupsPermalinkApp",["DliteLoadingComponent","FBSpinner","LegacyStoryPermalinkRoute","React","StoryPermalinkRoute","StyleSheet","THColors","THPermalinkView","View","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLoadingComponent"),
        a = require/*t*/("FBSpinner"),
        s = require/*t*/("LegacyStoryPermalinkRoute"),
        l = require/*t*/("React"),
        u = require/*t*/("StoryPermalinkRoute"),
        c = require/*t*/("StyleSheet"),
        p = require/*t*/("THColors"),
        d = require/*t*/("THPermalinkView"),
        h = require/*t*/("View");
    require/*t*/("THRoutingConfig").initialize();
    var f = 10,
        m = l.createClass({
            displayName: "GroupsPermalinkApp",
            getContext: function() {
                return this.props.story ? {
                    route: new u(null, {
                        story: this.props.story,
                        defaultCommentCount: f
                    })
                } : this.props.legacystory ? {
                    route: new s(null, {
                        story: this.props.legacystory,
                        defaultCommentCount: f
                    })
                } : void console.error("GroupsPermalinkApp must have either a story or legacystory prop")
            },
            render: function() {
                var global/*e*/ = l.createElement(h, {
                    style: g.fullScreenLoadingIndicator
                }, l.createElement(a, null));
                return l.createElement(h, {
                    style: g.container
                }, l.createElement(o, {
                    component: d,
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
        g = c.create({
            container: {
                backgroundColor: p.backgroundWash,
                flex: 1
            },
            fullScreenLoadingIndicator: {
                alignItems: "center",
                paddingTop: 200
            }
        });
    module/*i*/.exports = m
});