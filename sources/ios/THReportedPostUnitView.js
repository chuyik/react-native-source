__d("THReportedPostUnitView",["GroupReportedPostAction","NativeMethodsMixin","NativeModules","React","ReactGraphQL","FBAlertManager","StyleSheet","THFeedButton","THStoryView","View","fbt"],function (e, t, n, r, i) {
    "use strict";
    var GroupReportedPostAction/*o*/ = t("GroupReportedPostAction"),
        NativeMethodsMixin/*a*/ = t("NativeMethodsMixin"),
        NativeModules/*s*/ = t("NativeModules"),
        React/*l*/ = t("React"),
        ReactGraphQL/*u*/ = t("ReactGraphQL"),
        FBAlertManager/*c*/ = t("FBAlertManager"),
        StyleSheet/*p*/ = t("StyleSheet"),
        THFeedButton/*d*/ = t("THFeedButton"),
        THStoryView/*h*/ = t("THStoryView"),
        View/*f*/ = t("View"),
        fbt/*m*/ = t("fbt"),
        g = NativeModules/*s*/.RKTreehouseManager,
        _ = GroupReportedPostAction/*o*/.Actions,
        y = React/*l*/.createClass({
            displayName: "THReportedPostUnitView",
            propTypes: {
                story: React/*l*/.PropTypes.object.isRequired,
                propertyToUpdate: React/*l*/.PropTypes.number
            },
            mixins: [ReactGraphQL/*u*/.Mixin, NativeMethodsMixin/*a*/],
            statics: {
                queries: {
                    story: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THReportedPostUnitView_story", "Story", [new n.Field("id")], [t.__frag(e)], {
                                scope: "THReportedPostUnitView_story"
                            })
                        }(THStoryView/*h*/.getQuery("story"))
                    },
                    group: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("THReportedPostUnitView_group", "Group", [new e.Field("id"), new e.Field("group_reported_stories", [new e.Field("count")], null, null, "reported_stories", null, {
                                connection: !0
                            })], null, {
                                scope: "THReportedPostUnitView_group"
                            })
                        }()
                    }
                }
            },
            getInitialState: function() {
                return {
                    reviewState: _.Undecided,
                    animationID: null
                }
            },
            onRemove: function() {
                this.mutateReportedPost(_.Remove)
            },
            onRemoveAndBan: function() {
                this.mutateReportedPost(_.RemoveAndBan)
            },
            onIgnore: function() {
                this.mutateReportedPost(_.Ignore)
            },
            onFailure: function(e) {
                console.error("error: ", e), this.setState({
                    reviewState: _.Undecided
                }), this.props.updateChangedCount(-1), FBAlertManager/*c*/.alert(fbt/*m*/({
                    type: "text",
                    texts: ["Failed to process reported post action."],
                    desc: "Error message for pending posts."
                }))
            },
            mutateReportedPost: function(e) {
                this.setState({
                    reviewState: e
                }), this.props.updateChangedCount(1), GroupReportedPostAction/*o*/.mutateReportedPost({
                    groupID: this.props.group.id,
                    storyID: this.props.story.id,
                    action: e,
                    onFailure: this.onFailure
                })
            },
            updateNativeProperties: function() {
                g && g.updateGroupInfoProperty(this.props.group.id, this.props.propertyToUpdate, this.props.group.reported_stories.count - this.state.numberOfStoriesModified)
            },
            showUnimplemented: function() {
                FBAlertManager/*c*/.alert("This is not yet implemented. (T4771117)")
            },
            renderButtonRow: function() {
                if (this.state.reviewState !== _.Undecided) return null;
                var e = fbt/*m*/({
                        type: "text",
                        texts: ["Remove"],
                        desc: "Button for an Admin to remove NativeMethodsMixin/*a*/ reported post in NativeMethodsMixin/*a*/ group"
                    }),
                    t = fbt/*m*/({
                        type: "text",
                        texts: ["Remove & Block"],
                        desc: "Button for an Admin to remove NativeMethodsMixin/*a*/ reported post in NativeMethodsMixin/*a*/ group and ban the user"
                    }),
                    n = fbt/*m*/({
                        type: "text",
                        texts: ["Ignore"],
                        desc: "Button for an Admin to ignore NativeMethodsMixin/*a*/ reported post in NativeMethodsMixin/*a*/ group"
                    });
                return React/*l*/.createElement(View/*f*/, {
                    style: v.buttonRow
                }, React/*l*/.createElement(THFeedButton/*d*/, {
                    onPress: this.onRemove,
                    isPositive: !0,
                    text: e
                }), React/*l*/.createElement(THFeedButton/*d*/, {
                    onPress: this.onRemoveAndBan,
                    isPositive: !0,
                    text: t
                }), React/*l*/.createElement(THFeedButton/*d*/, {
                    onPress: this.onIgnore,
                    isPositive: !1,
                    text: n
                }))
            },
            render: function() {
                return React/*l*/.createElement(View/*f*/, {
                    style: [S[this.state.reviewState], v.container]
                }, React/*l*/.createElement(THStoryView/*h*/, {
                    story: this.props.story,
                    navigator: this.props.navigator,
                    context: this.props.context
                }), this.renderButtonRow())
            }
        }),
        v = StyleSheet/*p*/.create({
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
        S = {};
    S[_.Undecided] = v.visible, S[_.Remove] = v.washedOut, S[_.RemoveAndBan] = v.washedOut, S[_.Ignore] = v.visible, i.exports = y
});