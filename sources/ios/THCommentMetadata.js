__d("THCommentMetadata",["LayoutAnimation","FBEditHistoryPopover","FBLikersPopover","FeedbackLikeAction","Image","NativeModulesDeprecated","React","ReactGraphQL","StyleSheet","Text","THAnimations","THColors","THSounds","TimerMixin","TimeStamp","TouchableBounce","TouchableWithoutFeedback","View","fbt","ix","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutAnimation"),
        exports/*a*/ = require/*t*/("FBEditHistoryPopover"),
        LayoutAnimation/*s*/ = require/*t*/("FBLikersPopover"),
        FBEditHistoryPopover/*l*/ = require/*t*/("FeedbackLikeAction"),
        FBLikersPopover/*u*/ = require/*t*/("Image"),
        FeedbackLikeAction/*c*/ = require/*t*/("NativeModulesDeprecated"),
        Image/*p*/ = require/*t*/("React"),
        NativeModulesDeprecated/*d*/ = require/*t*/("ReactGraphQL"),
        React/*h*/ = require/*t*/("StyleSheet"),
        ReactGraphQL/*f*/ = require/*t*/("Text"),
        StyleSheet/*m*/ = require/*t*/("THAnimations"),
        Text/*g*/ = require/*t*/("THColors"),
        THAnimations/*_*/ = require/*t*/("THSounds"),
        THColors/*y*/ = require/*t*/("TimerMixin"),
        THSounds/*v*/ = require/*t*/("TimeStamp"),
        TimerMixin/*S*/ = require/*t*/("TouchableBounce"),
        TimeStamp/*b*/ = require/*t*/("TouchableWithoutFeedback"),
        TouchableBounce/*R*/ = require/*t*/("View"),
        TouchableWithoutFeedback/*w*/ = require/*t*/("fbt"),
        View/*C*/ = require/*t*/("ix"),
        fbt/*E*/ = require/*t*/("keyOf"),
        ix/*D*/ = FeedbackLikeAction/*c*/.RKTreehouseManager,
        keyOf/*T*/ = fbt/*E*/({
            likersPopRef: null
        }),
        x = fbt/*E*/({
            editsPopRef: null
        }),
        P = "likeButton",
        I = Image/*p*/.createClass({
            displayName: "THCommentMetadata",
            mixins: [NativeModulesDeprecated/*d*/.Mixin, THColors/*y*/],
            propTypes: {
                comment: Image/*p*/.PropTypes.object.isRequired,
                pendingText: Image/*p*/.PropTypes.string
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
                        }(exports/*a*/.getQuery("comment"))
                    }
                }
            },
            onLikePress: function(global/*e*/) {
                this.props.comment.feedback.does_viewer_like || ix/*D*/ && ix/*D*/.playSound(THAnimations/*_*/.likeComment), FBEditHistoryPopover/*l*/.handleLikeChange(this.props.comment.feedback.id, !this.props.comment.feedback.does_viewer_like), this.requestAnimationFrame(global/*e*/), o.configureNext(StyleSheet/*m*/.layout.like)
            },
            showLikers: function() {
                this.refs[keyOf/*T*/].open()
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
                if (this.props.pendingText) return Image/*p*/.createElement(TouchableBounce/*R*/, {
                    style: F.metadataContainer
                }, Image/*p*/.createElement(ReactGraphQL/*f*/, {
                    key: "pending",
                    style: F.text
                }, this.props.pendingText));
                var global/*e*/, require/*t*/ = this.props.comment,
                    requireDynamic/*n*/ = require/*t*/.feedback,
                    requireLazy/*r*/ = requireDynamic/*n*/.does_viewer_like;
                global/*e*/ = View/*C*/(requireLazy/*r*/ ? "thCommentLikeIcon" : "thCommentLikeNormalIcon");
                var module/*i*/;
                requireDynamic/*n*/.likers.count > 0 && (module/*i*/ = [Image/*p*/.createElement(ReactGraphQL/*f*/, {
                    key: "middot",
                    style: F.text
                }, "·"), Image/*p*/.createElement(TimerMixin/*S*/, {
                    key: "likeCount",
                    onPress: this.showLikers
                }, Image/*p*/.createElement(TouchableBounce/*R*/, {
                    style: F.countContainer
                }, Image/*p*/.createElement(FBLikersPopover/*u*/, {
                    source: global/*e*/,
                    style: F.icon
                }), Image/*p*/.createElement(ReactGraphQL/*f*/, {
                    style: [F.text, requireLazy/*r*/ && F.liked]
                }, requireDynamic/*n*/.likers.count), Image/*p*/.createElement(LayoutAnimation/*s*/, {
                    ref: keyOf/*T*/,
                    feedback: requireDynamic/*n*/,
                    circularProfilePictures: !0,
                    closeOnRowPress: !ix/*D*/,
                    closeTextColor: Text/*g*/.groupsAccent
                })))]);
                var o;
                require/*t*/.edit_history.count && (o = [Image/*p*/.createElement(ReactGraphQL/*f*/, {
                    key: "middot",
                    style: F.text
                }, "·"), Image/*p*/.createElement(TimerMixin/*S*/, {
                    key: "edited",
                    onPress: this.showEdits
                }, Image/*p*/.createElement(TouchableBounce/*R*/, null, Image/*p*/.createElement(ReactGraphQL/*f*/, {
                    style: F.text
                }, TouchableWithoutFeedback/*w*/({
                    type: "text",
                    texts: ["Edited"],
                    desc: "Comment was edited."
                })), Image/*p*/.createElement(exports/*a*/, {
                    ref: x,
                    comment: require/*t*/
                })))]);
                var FBEditHistoryPopover/*l*/;
                return requireDynamic/*n*/.can_viewer_like && (FBEditHistoryPopover/*l*/ = [Image/*p*/.createElement(ReactGraphQL/*f*/, {
                    key: "middot",
                    style: F.text
                }, "·"), Image/*p*/.createElement(TimerMixin/*S*/, {
                    key: "like",
                    ref: P,
                    onPressWithCompletion: this.onLikePress
                }, Image/*p*/.createElement(TouchableBounce/*R*/, null, Image/*p*/.createElement(ReactGraphQL/*f*/, {
                    style: F.text
                }, TouchableWithoutFeedback/*w*/(requireDynamic/*n*/.does_viewer_like ? {
                    type: "text",
                    texts: ["Unlike"],
                    desc: "Unlike exports/*a*/ comment."
                } : {
                    type: "text",
                    texts: ["Like"],
                    desc: "Like the comment."
                }))))]), Image/*p*/.createElement(TimeStamp/*b*/, {
                    onPress: this.onRowPress,
                    onPressIn: this.onRowPressIn,
                    onPressOut: this.onRowPressOut
                }, Image/*p*/.createElement(TouchableBounce/*R*/, {
                    style: F.metadataContainer
                }, Image/*p*/.createElement(THSounds/*v*/, {
                    style: F.text,
                    time: this.props.comment.created_time,
                    shorten: !0
                }), o, FBEditHistoryPopover/*l*/, module/*i*/))
            }
        }),
        F = React/*h*/.create({
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
                color: Text/*g*/.groupsAccent
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
                color: Text/*g*/.feedbackFadedText,
                fontSize: 12,
                paddingRight: 5,
                height: 16
            }
        });
    module/*i*/.exports = I
});