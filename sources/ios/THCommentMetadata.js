__d("THCommentMetadata",["LayoutAnimation","FBEditHistoryPopover","FBLikersPopover","FeedbackLikeAction","Image","NativeModulesDeprecated","React","ReactGraphQL","StyleSheet","Text","THAnimations","THColors","THSounds","TimerMixin","TimeStamp","TouchableBounce","TouchableWithoutFeedback","View","fbt","ix","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var LayoutAnimation/*o*/ = require/*t*/("LayoutAnimation"),
        FBEditHistoryPopover/*a*/ = require/*t*/("FBEditHistoryPopover"),
        FBLikersPopover/*s*/ = require/*t*/("FBLikersPopover"),
        FeedbackLikeAction/*l*/ = require/*t*/("FeedbackLikeAction"),
        Image/*u*/ = require/*t*/("Image"),
        NativeModulesDeprecated/*c*/ = require/*t*/("NativeModulesDeprecated"),
        React/*p*/ = require/*t*/("React"),
        ReactGraphQL/*d*/ = require/*t*/("ReactGraphQL"),
        StyleSheet/*h*/ = require/*t*/("StyleSheet"),
        Text/*f*/ = require/*t*/("Text"),
        THAnimations/*m*/ = require/*t*/("THAnimations"),
        THColors/*g*/ = require/*t*/("THColors"),
        THSounds/*_*/ = require/*t*/("THSounds"),
        TimerMixin/*y*/ = require/*t*/("TimerMixin"),
        TimeStamp/*v*/ = require/*t*/("TimeStamp"),
        TouchableBounce/*S*/ = require/*t*/("TouchableBounce"),
        TouchableWithoutFeedback/*b*/ = require/*t*/("TouchableWithoutFeedback"),
        View/*R*/ = require/*t*/("View"),
        fbt/*w*/ = require/*t*/("fbt"),
        ix/*C*/ = require/*t*/("ix"),
        keyOf/*E*/ = require/*t*/("keyOf"),
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
                    comment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THCommentMetadata_comment", "Comment", [new requireDynamic/*n*/.Field("feedback", [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new requireDynamic/*n*/.Field("can_viewer_like"), new requireDynamic/*n*/.Field("likers", [new requireDynamic/*n*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new requireDynamic/*n*/.Field("does_viewer_like")], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new requireDynamic/*n*/.Field("edit_history", [new requireDynamic/*n*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new requireDynamic/*n*/.Field("created_time"), new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THCommentMetadata_comment"
                            })
                        }(FBEditHistoryPopover/*a*/.getQuery("comment"))
                    }
                }
            },
            onLikePress: function(global/*e*/) {
                this.props.comment.feedback.does_viewer_like || D && D.playSound(THSounds/*_*/.likeComment), FeedbackLikeAction/*l*/.handleLikeChange(this.props.comment.feedback.id, !this.props.comment.feedback.does_viewer_like), this.requestAnimationFrame(global/*e*/), LayoutAnimation/*o*/.configureNext(THAnimations/*m*/.layout.like)
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
                var global/*e*/, require/*t*/ = this.props.comment,
                    requireDynamic/*n*/ = require/*t*/.feedback,
                    requireLazy/*r*/ = requireDynamic/*n*/.does_viewer_like;
                global/*e*/ = ix/*C*/(requireLazy/*r*/ ? "thCommentLikeIcon" : "thCommentLikeNormalIcon");
                var module/*i*/;
                requireDynamic/*n*/.likers.count > 0 && (module/*i*/ = [React/*p*/.createElement(Text/*f*/, {
                    key: "middot",
                    style: F.text
                }, "·"), React/*p*/.createElement(TouchableBounce/*S*/, {
                    key: "likeCount",
                    onPress: this.showLikers
                }, React/*p*/.createElement(View/*R*/, {
                    style: F.countContainer
                }, React/*p*/.createElement(Image/*u*/, {
                    source: global/*e*/,
                    style: F.icon
                }), React/*p*/.createElement(Text/*f*/, {
                    style: [F.text, requireLazy/*r*/ && F.liked]
                }, requireDynamic/*n*/.likers.count), React/*p*/.createElement(FBLikersPopover/*s*/, {
                    ref: T,
                    feedback: requireDynamic/*n*/,
                    circularProfilePictures: !0,
                    closeOnRowPress: !D,
                    closeTextColor: THColors/*g*/.groupsAccent
                })))]);
                var LayoutAnimation/*o*/;
                require/*t*/.edit_history.count && (LayoutAnimation/*o*/ = [React/*p*/.createElement(Text/*f*/, {
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
                    comment: require/*t*/
                })))]);
                var FeedbackLikeAction/*l*/;
                return requireDynamic/*n*/.can_viewer_like && (FeedbackLikeAction/*l*/ = [React/*p*/.createElement(Text/*f*/, {
                    key: "middot",
                    style: F.text
                }, "·"), React/*p*/.createElement(TouchableBounce/*S*/, {
                    key: "like",
                    ref: P,
                    onPressWithCompletion: this.onLikePress
                }, React/*p*/.createElement(View/*R*/, null, React/*p*/.createElement(Text/*f*/, {
                    style: F.text
                }, fbt/*w*/(requireDynamic/*n*/.does_viewer_like ? {
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
                }), LayoutAnimation/*o*/, FeedbackLikeAction/*l*/, module/*i*/))
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
    module/*i*/.exports = I
});