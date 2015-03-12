__d("THCommentMetadata",["LayoutAnimation","FBEditHistoryPopover","FBLikersPopover","FeedbackLikeAction","Image","NativeModulesDeprecated","React","ReactGraphQL","StyleSheet","Text","THAnimations","THColors","THSounds","TimerMixin","TimeStamp","TouchableBounce","TouchableWithoutFeedback","View","fbt","ix","keyOf"],function (e, t, n, r, i) {
    "use strict";
    var LayoutAnimation/*o*/ = t("LayoutAnimation"),
        FBEditHistoryPopover/*a*/ = t("FBEditHistoryPopover"),
        FBLikersPopover/*s*/ = t("FBLikersPopover"),
        FeedbackLikeAction/*l*/ = t("FeedbackLikeAction"),
        Image/*u*/ = t("Image"),
        NativeModulesDeprecated/*c*/ = t("NativeModulesDeprecated"),
        React/*p*/ = t("React"),
        ReactGraphQL/*d*/ = t("ReactGraphQL"),
        StyleSheet/*h*/ = t("StyleSheet"),
        Text/*f*/ = t("Text"),
        THAnimations/*m*/ = t("THAnimations"),
        THColors/*g*/ = t("THColors"),
        THSounds/*_*/ = t("THSounds"),
        TimerMixin/*y*/ = t("TimerMixin"),
        TimeStamp/*v*/ = t("TimeStamp"),
        TouchableBounce/*S*/ = t("TouchableBounce"),
        TouchableWithoutFeedback/*b*/ = t("TouchableWithoutFeedback"),
        View/*R*/ = t("View"),
        fbt/*w*/ = t("fbt"),
        ix/*C*/ = t("ix"),
        keyOf/*E*/ = t("keyOf"),
        D = NativeModulesDeprecated/*c*/.RKTreehouseManager,
        T = keyOf/*E*/({
            likersPopRef: null
        }),
        x = keyOf/*E*/({
            editsPopRef: null
        }),
        P = "likeButton",
        I = React/*p*/.createClass({
            displayName: "THCommentMetadata",
            mixins: [ReactGraphQL/*d*/.Mixin, TimerMixin/*y*/],
            propTypes: {
                comment: React/*p*/.PropTypes.object.isRequired,
                pendingText: React/*p*/.PropTypes.string
            },
            statics: {
                queries: {
                    comment: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THCommentMetadata_comment", "Comment", [new n.Field("feedback", [new n.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new n.Field("can_viewer_like"), new n.Field("likers", [new n.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new n.Field("does_viewer_like")], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new n.Field("edit_history", [new n.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new n.Field("created_time"), new n.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(e)], {
                                scope: "THCommentMetadata_comment"
                            })
                        }(FBEditHistoryPopover/*a*/.getQuery("comment"))
                    }
                }
            },
            onLikePress: function(e) {
                this.props.comment.feedback.does_viewer_like || D && D.playSound(THSounds/*_*/.likeComment), FeedbackLikeAction/*l*/.handleLikeChange(this.props.comment.feedback.id, !this.props.comment.feedback.does_viewer_like), this.requestAnimationFrame(e), LayoutAnimation/*o*/.configureNext(THAnimations/*m*/.layout.like)
            },
            showLikers: function() {
                this.refs[T].open()
            },
            showEdits: function() {
                this.refs[x].open()
            },
            onRowPress: function() {
                this.refs[P].touchableHandlePress()
            },
            onRowPressIn: function() {
                this.refs[P].touchableHandleActivePressIn()
            },
            onRowPressOut: function() {
                this.refs[P].touchableHandleActivePressOut()
            },
            render: function() {
                if (this.props.pendingText) return React/*p*/.createElement(View/*R*/, {
                    style: F.metadataContainer
                }, React/*p*/.createElement(Text/*f*/, {
                    key: "pending",
                    style: F.text
                }, this.props.pendingText));
                var e, t = this.props.comment,
                    n = t.feedback,
                    r = n.does_viewer_like;
                e = ix/*C*/(r ? "thCommentLikeIcon" : "thCommentLikeNormalIcon");
                var i;
                n.likers.count > 0 && (i = [React/*p*/.createElement(Text/*f*/, {
                    key: "middot",
                    style: F.text
                }, "·"), React/*p*/.createElement(TouchableBounce/*S*/, {
                    key: "likeCount",
                    onPress: this.showLikers
                }, React/*p*/.createElement(View/*R*/, {
                    style: F.countContainer
                }, React/*p*/.createElement(Image/*u*/, {
                    source: e,
                    style: F.icon
                }), React/*p*/.createElement(Text/*f*/, {
                    style: [F.text, r && F.liked]
                }, n.likers.count), React/*p*/.createElement(FBLikersPopover/*s*/, {
                    ref: T,
                    feedback: n,
                    circularProfilePictures: !0,
                    closeOnRowPress: !D,
                    closeTextColor: THColors/*g*/.groupsAccent
                })))]);
                var LayoutAnimation/*o*/;
                t.edit_history.count && (LayoutAnimation/*o*/ = [React/*p*/.createElement(Text/*f*/, {
                    key: "middot",
                    style: F.text
                }, "·"), React/*p*/.createElement(TouchableBounce/*S*/, {
                    key: "edited",
                    onPress: this.showEdits
                }, React/*p*/.createElement(View/*R*/, null, React/*p*/.createElement(Text/*f*/, {
                    style: F.text
                }, fbt/*w*/({
                    type: "text",
                    texts: ["Edited"],
                    desc: "Comment was edited."
                })), React/*p*/.createElement(FBEditHistoryPopover/*a*/, {
                    ref: x,
                    comment: t
                })))]);
                var FeedbackLikeAction/*l*/;
                return n.can_viewer_like && (FeedbackLikeAction/*l*/ = [React/*p*/.createElement(Text/*f*/, {
                    key: "middot",
                    style: F.text
                }, "·"), React/*p*/.createElement(TouchableBounce/*S*/, {
                    key: "like",
                    ref: P,
                    onPressWithCompletion: this.onLikePress
                }, React/*p*/.createElement(View/*R*/, null, React/*p*/.createElement(Text/*f*/, {
                    style: F.text
                }, fbt/*w*/(n.does_viewer_like ? {
                    type: "text",
                    texts: ["Unlike"],
                    desc: "Unlike FBEditHistoryPopover/*a*/ comment."
                } : {
                    type: "text",
                    texts: ["Like"],
                    desc: "Like the comment."
                }))))]), React/*p*/.createElement(TouchableWithoutFeedback/*b*/, {
                    onPress: this.onRowPress,
                    onPressIn: this.onRowPressIn,
                    onPressOut: this.onRowPressOut
                }, React/*p*/.createElement(View/*R*/, {
                    style: F.metadataContainer
                }, React/*p*/.createElement(TimeStamp/*v*/, {
                    style: F.text,
                    time: this.props.comment.created_time,
                    shorten: !0
                }), LayoutAnimation/*o*/, FeedbackLikeAction/*l*/, i))
            }
        }),
        F = StyleSheet/*h*/.create({
            countContainer: {
                flexDirection: "row"
            },
            icon: {
                height: 16,
                marginRight: 2,
                width: 16,
                top: -1
            },
            liked: {
                color: THColors/*g*/.groupsAccent
            },
            metadataContainer: {
                flexWrap: "wrap",
                flex: 1,
                alignItems: "center",
                flexDirection: "row",
                paddingTop: 7,
                paddingBottom: 5
            },
            text: {
                color: THColors/*g*/.feedbackFadedText,
                fontSize: 12,
                paddingRight: 5,
                height: 16
            }
        });
    i.exports = I
});