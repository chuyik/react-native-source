__d("THCommentMetadata",["LayoutAnimation","FBEditHistoryPopover","FBLikersPopover","FeedbackLikeAction","Image","NativeModulesDeprecated","React","ReactGraphQL","StyleSheet","Text","THAnimations","THColors","THSounds","TimerMixin","TimeStamp","TouchableBounce","TouchableWithoutFeedback","View","fbt","ix","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("LayoutAnimation"),
        a = require/*t*/("FBEditHistoryPopover"),
        s = require/*t*/("FBLikersPopover"),
        l = require/*t*/("FeedbackLikeAction"),
        u = require/*t*/("Image"),
        c = require/*t*/("NativeModulesDeprecated"),
        p = require/*t*/("React"),
        d = require/*t*/("ReactGraphQL"),
        h = require/*t*/("StyleSheet"),
        f = require/*t*/("Text"),
        m = require/*t*/("THAnimations"),
        g = require/*t*/("THColors"),
        _ = require/*t*/("THSounds"),
        y = require/*t*/("TimerMixin"),
        v = require/*t*/("TimeStamp"),
        S = require/*t*/("TouchableBounce"),
        b = require/*t*/("TouchableWithoutFeedback"),
        R = require/*t*/("View"),
        w = require/*t*/("fbt"),
        C = require/*t*/("ix"),
        E = require/*t*/("keyOf"),
        D = c.RKTreehouseManager,
        T = E({
            likersPopRef: null
        }),
        x = E({
            editsPopRef: null
        }),
        P = "likeButton",
        I = p.createClass({
            displayName: "THCommentMetadata",
            mixins: [d.Mixin, y],
            propTypes: {
                comment: p.PropTypes.object.isRequired,
                pendingText: p.PropTypes.string
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
                        }(a.getQuery("comment"))
                    }
                }
            },
            onLikePress: function(global/*e*/) {
                this.props.comment.feedback.does_viewer_like || D && D.playSound(_.likeComment), l.handleLikeChange(this.props.comment.feedback.id, !this.props.comment.feedback.does_viewer_like), this.requestAnimationFrame(global/*e*/), o.configureNext(m.layout.like)
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
                if (this.props.pendingText) return p.createElement(R, {
                    style: F.metadataContainer
                }, p.createElement(f, {
                    key: "pending",
                    style: F.text
                }, this.props.pendingText));
                var global/*e*/, require/*t*/ = this.props.comment,
                    requireDynamic/*n*/ = require/*t*/.feedback,
                    requireLazy/*r*/ = requireDynamic/*n*/.does_viewer_like;
                global/*e*/ = C(requireLazy/*r*/ ? "thCommentLikeIcon" : "thCommentLikeNormalIcon");
                var module/*i*/;
                requireDynamic/*n*/.likers.count > 0 && (module/*i*/ = [p.createElement(f, {
                    key: "middot",
                    style: F.text
                }, "·"), p.createElement(S, {
                    key: "likeCount",
                    onPress: this.showLikers
                }, p.createElement(R, {
                    style: F.countContainer
                }, p.createElement(u, {
                    source: global/*e*/,
                    style: F.icon
                }), p.createElement(f, {
                    style: [F.text, requireLazy/*r*/ && F.liked]
                }, requireDynamic/*n*/.likers.count), p.createElement(s, {
                    ref: T,
                    feedback: requireDynamic/*n*/,
                    circularProfilePictures: !0,
                    closeOnRowPress: !D,
                    closeTextColor: g.groupsAccent
                })))]);
                var o;
                require/*t*/.edit_history.count && (o = [p.createElement(f, {
                    key: "middot",
                    style: F.text
                }, "·"), p.createElement(S, {
                    key: "edited",
                    onPress: this.showEdits
                }, p.createElement(R, null, p.createElement(f, {
                    style: F.text
                }, w({
                    type: "text",
                    texts: ["Edited"],
                    desc: "Comment was edited."
                })), p.createElement(a, {
                    ref: x,
                    comment: require/*t*/
                })))]);
                var l;
                return requireDynamic/*n*/.can_viewer_like && (l = [p.createElement(f, {
                    key: "middot",
                    style: F.text
                }, "·"), p.createElement(S, {
                    key: "like",
                    ref: P,
                    onPressWithCompletion: this.onLikePress
                }, p.createElement(R, null, p.createElement(f, {
                    style: F.text
                }, w(requireDynamic/*n*/.does_viewer_like ? {
                    type: "text",
                    texts: ["Unlike"],
                    desc: "Unlike a comment."
                } : {
                    type: "text",
                    texts: ["Like"],
                    desc: "Like the comment."
                }))))]), p.createElement(b, {
                    onPress: this.onRowPress,
                    onPressIn: this.onRowPressIn,
                    onPressOut: this.onRowPressOut
                }, p.createElement(R, {
                    style: F.metadataContainer
                }, p.createElement(v, {
                    style: F.text,
                    time: this.props.comment.created_time,
                    shorten: !0
                }), o, l, module/*i*/))
            }
        }),
        F = h.create({
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
                color: g.groupsAccent
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
                color: g.feedbackFadedText,
                fontSize: 12,
                paddingRight: 5,
                height: 16
            }
        });
    module/*i*/.exports = I
});