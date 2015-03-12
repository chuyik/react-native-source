__d("THPendingPostUnitView",["FBAlertManager","GroupPendingPostAction","NativeMethodsMixin","React","ReactGraphQL","StyleSheet","THFeedButton","THStoryView","View","fbt","keyMirror"],function (e, t, n, r, i) {
    "use strict";
    var FBAlertManager/*o*/ = t("FBAlertManager"),
        GroupPendingPostAction/*a*/ = t("GroupPendingPostAction"),
        NativeMethodsMixin/*s*/ = t("NativeMethodsMixin"),
        React/*l*/ = t("React"),
        ReactGraphQL/*u*/ = t("ReactGraphQL"),
        StyleSheet/*c*/ = t("StyleSheet"),
        THFeedButton/*p*/ = t("THFeedButton"),
        THStoryView/*d*/ = t("THStoryView"),
        View/*h*/ = t("View"),
        fbt/*f*/ = t("fbt"),
        keyMirror/*m*/ = t("keyMirror"),
        g = keyMirror/*m*/({
            undecided: null,
            accepted: null,
            ignored: null
        }),
        _ = React/*l*/.createClass({
            displayName: "THPendingPostUnitView",
            propTypes: {
                story: React/*l*/.PropTypes.object.isRequired,
                propertyToUpdate: React/*l*/.PropTypes.number
            },
            mixins: [ReactGraphQL/*u*/.Mixin, NativeMethodsMixin/*s*/],
            statics: {
                queries: {
                    story: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THPendingPostUnitView_story", "Story", [new n.Field("id")], [t.__frag(e)], {
                                scope: "THPendingPostUnitView_story"
                            })
                        }(THStoryView/*d*/.getQuery("story"))
                    },
                    group: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THPendingPostUnitView_group", "Group", [new n.Field("id")], [t.__frag(e)], {
                                scope: "THPendingPostUnitView_group"
                            })
                        }(THStoryView/*d*/.getQuery("group"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    acceptedState: g.undecided,
                    animationID: null
                }
            },
            onAccept: function() {
                this.mutatePendingPost(g.accepted)
            },
            onIgnore: function() {
                this.mutatePendingPost(g.ignored)
            },
            mutatePendingPost: function(e) {
                this.setState({
                    acceptedState: e
                }), this.props.updateChangedCount(1), GroupPendingPostAction/*a*/.mutatePendingPost({
                    groupID: this.props.group.id,
                    storyID: this.props.story.id,
                    approved: e === g.accepted,
                    onFailure: this.onGraphQLFailure
                })
            },
            onGraphQLFailure: function(e) {
                console.log("Pending post error: ", e), this.setState({
                    acceptedState: g.undecided
                }), this.props.updateChangedCount(-1), FBAlertManager/*o*/.alert(fbt/*f*/({
                    type: "text",
                    texts: ["Failed to process pending post action."],
                    desc: "Error message for pending posts."
                }))
            },
            renderButtonRow: function() {
                if (this.state.acceptedState !== g.undecided) return null;
                var e = fbt/*f*/({
                        type: "text",
                        texts: ["Approve"],
                        desc: "Button for an Admin to approve GroupPendingPostAction/*a*/ pending post in GroupPendingPostAction/*a*/ group"
                    }),
                    t = fbt/*f*/({
                        type: "text",
                        texts: ["Ignore"],
                        desc: "Button for an Admin to ignore GroupPendingPostAction/*a*/ pending post in GroupPendingPostAction/*a*/ group"
                    });
                return React/*l*/.createElement(View/*h*/, {
                    style: y.buttonRow
                }, React/*l*/.createElement(THFeedButton/*p*/, {
                    onPress: this.onAccept,
                    isPositive: !0,
                    text: e
                }), React/*l*/.createElement(THFeedButton/*p*/, {
                    onPress: this.onIgnore,
                    isPositive: !1,
                    text: t
                }))
            },
            render: function() {
                return React/*l*/.createElement(View/*h*/, {
                    style: [v[this.state.acceptedState], y.container]
                }, React/*l*/.createElement(THStoryView/*d*/, {
                    story: this.props.story,
                    navigator: this.props.navigator,
                    context: this.props.context,
                    group: this.props.group
                }), this.renderButtonRow())
            }
        }),
        y = StyleSheet/*c*/.create({
            container: {
                padding: 15
            },
            buttonRow: {
                flexDirection: "row",
                marginTop: 20
            },
            visible: {
                opacity: 1
            },
            washedOut: {
                opacity: .5
            }
        }),
        v = {};
    v[g.undecided] = y.visible, v[g.accepted] = y.visible, v[g.ignored] = y.washedOut, i.exports = _
});