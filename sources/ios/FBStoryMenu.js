__d("FBStoryMenu",["ActionRow","FBAlertManager","FBGroupJoinState","FeedbackSubscriptionActions","FeedbackPoller","GroupBlockUserAction","GroupRemoveUserAction","GroupPinPostAction","Image","NativeModules","Popover","ReactGraphQL","React","ReportToAdminAction","RouteHandler","StoryDeleteActions","StyleSheet","TouchableOpacity","View","fbt","getStoryLocation","isEmpty","ix","keyOf","logError"],function (e, t, n, r, i) {
    "use strict";
    var ActionRow/*o*/ = t("ActionRow"),
        FBAlertManager/*a*/ = t("FBAlertManager"),
        FBGroupJoinState/*s*/ = t("FBGroupJoinState"),
        FeedbackSubscriptionActions/*l*/ = t("FeedbackSubscriptionActions"),
        FeedbackPoller/*u*/ = t("FeedbackPoller"),
        GroupBlockUserAction/*c*/ = t("GroupBlockUserAction"),
        GroupRemoveUserAction/*p*/ = t("GroupRemoveUserAction"),
        GroupPinPostAction/*d*/ = t("GroupPinPostAction"),
        Image/*h*/ = t("Image"),
        NativeModules/*f*/ = t("NativeModules"),
        Popover/*m*/ = t("Popover"),
        ReactGraphQL/*g*/ = t("ReactGraphQL"),
        React/*_*/ = t("React"),
        ReportToAdminAction/*y*/ = t("ReportToAdminAction"),
        v = NativeModules/*f*/.RKCurrentViewer,
        S = NativeModules/*f*/.RKDeviceManager,
        b = NativeModules/*f*/.RKTreehouseManager,
        R = NativeModules/*f*/.RKPasteboard,
        RouteHandler/*w*/ = t("RouteHandler"),
        StoryDeleteActions/*C*/ = t("StoryDeleteActions"),
        StyleSheet/*E*/ = t("StyleSheet"),
        TouchableOpacity/*D*/ = t("TouchableOpacity"),
        View/*T*/ = t("View"),
        fbt/*x*/ = t("fbt"),
        getStoryLocation/*P*/ = t("getStoryLocation"),
        isEmpty/*I*/ = t("isEmpty"),
        ix/*F*/ = t("ix"),
        keyOf/*L*/ = t("keyOf"),
        logError/*M*/ = t("logError"),
        Q = keyOf/*L*/({
            chevronRef: null
        }),
        A = keyOf/*L*/({
            popRef: null
        }),
        k = "GroupDeletePostAndRemoveUserActionLink",
        O = React/*_*/.createClass({
            displayName: "FBStoryMenu",
            propTypes: {
                onStoryReported: React/*_*/.PropTypes.func,
                editPostCallback: React/*_*/.PropTypes.func,
                onPinUnpinStory: React/*_*/.PropTypes.func,
                pinPostSource: React/*_*/.PropTypes.string
            },
            mixins: [ReactGraphQL/*g*/.Mixin],
            statics: {
                queries: {
                    story: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("FBStoryMenu_story", "Story", [new e.Field("id"), new e.Field("url", null, null, [new e.Callv("site", ["mobile"])]), new e.Field("message", [new e.Field("text")]), new e.Field("actors", [new e.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                plural: !0
                            }), new e.Field("action_links", [new e.Field("__type__", [new e.Field("name"), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, null, null, null, {
                                plural: !0
                            }), new e.Field("attachments", [new e.Field("url", null, null, [new e.Callv("site", ["mobile"])]), new e.Field("target", [new e.Field("url", null, null, [new e.Callv("site", ["mobile"])]), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new e.Field("media", [new e.Field("image", [new e.Field("uri")], null, null, "image_menu")])], null, null, null, null, {
                                plural: !0
                            }), new e.Field("can_viewer_delete"), new e.Field("can_viewer_edit"), new e.Field("feedback", [new e.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new e.Field("is_viewer_subscribed"), new e.Field("can_viewer_subscribe")], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new e.Field("hideable_token"), new e.Field("tracking")], null, {
                                scope: "FBStoryMenu_story"
                            })
                        }()
                    },
                    group: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("FBStoryMenu_group", "Group", [new e.Field("id"), new e.Field("admin_aware_group", [new e.Field("is_viewer_admin"), new e.Field("viewer_join_state"), new e.Field("group_pinned_stories", [new e.Field("count"), new e.Field("edges", [new e.Field("node", [new e.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new e.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBStoryMenu_group_1"
                            }), new e.Field("page_info", [new e.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new e.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new e.Callv("first", ["1"])], null, null, {
                                connection: !0
                            }), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, {
                                scope: "FBStoryMenu_group"
                            })
                        }()
                    },
                    viewer: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("FBStoryMenu_viewer", "Viewer", [new e.Field("actor", [new e.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, {
                                scope: "FBStoryMenu_viewer"
                            })
                        }()
                    }
                }
            },
            open: function() {
                this.refs[Q].measure(function(e, t, n, r, i, ActionRow/*o*/) {
                    this.refs[A].openWithArrow({
                        left: i + n / 2,
                        top: ActionRow/*o*/,
                        height: r
                    })
                }.bind(this))
            },
            copyStoryDebugData: function() {
                R.setPasteboardString(this.props.story.id), console.log({
                    story_id: this.props.story.id
                }), this.refs[A].close()
            },
            printStoryInfo: function() {
                var e = {};
                e[this.props.story.id] = this.props.story, console.log(e), this.refs[A].close()
            },
            copyStory: function() {
                var e = this.props.story;
                R.setPasteboardString(e.message && e.message.text || e.attachments[0] && (e.attachments[0].url || e.attachments[0].target && e.attachments[0].target.url || e.attachments[0].media.image_menu.uri) || e.url), this.refs[A].close()
            },
            editPost: function() {
                this.props.editPostCallback(), this.refs[A].close()
            },
            deleteStoryConfirm: function() {
                this.refs[A].close(), FBAlertManager/*a*/.alertWithArgs({
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Delete Post?"],
                        desc: "Title of confirmation message for deleting FBAlertManager/*a*/ post"
                    }),
                    message: fbt/*x*/({
                        type: "text",
                        texts: ["You're about to delete this post."],
                        desc: "Confirmation message for deleting FBAlertManager/*a*/ post."
                    }),
                    buttons: [{
                        "delete": fbt/*x*/({
                            type: "text",
                            texts: ["Delete"],
                            desc: "Confirmation button for deleting FBAlertManager/*a*/ post."
                        })
                    }, {
                        cancel: fbt/*x*/({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for deleting FBAlertManager/*a*/ comment."
                        })
                    }]
                }, this.deleteStory)
            },
            deleteStory: function(e) {
                if ("cancel" != e) {
                    FeedbackPoller/*u*/.unregister(this.props.story.feedback.id), this.props.onStoryDeleted && this.props.onStoryDeleted();
                    var t = this.props.story,
                        n = getStoryLocation/*P*/(this.context.route);
                    StoryDeleteActions/*C*/.deleteStory(t.id, n)
                }
            },
            deleteStoryAndRemoveUserConfirm: function() {
                this.refs[A].close(), FBAlertManager/*a*/.alertWithArgs({
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Delete Post and Remove User?"],
                        desc: "Title of confirmation message for deleting FBAlertManager/*a*/ post and removing the user from the group"
                    }),
                    message: fbt/*x*/({
                        type: "text",
                        texts: ["You're about to delete this post and remove this user from the group."],
                        desc: "Confirmation message for deleting FBAlertManager/*a*/ post and removing author from the group"
                    }),
                    buttons: [{
                        "delete": fbt/*x*/({
                            type: "text",
                            texts: ["Confirm"],
                            desc: "Confirmation button for deleting FBAlertManager/*a*/ post and removing the poster from the group"
                        })
                    }, {
                        cancel: fbt/*x*/({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for deleting FBAlertManager/*a*/ post and removing the poster from the group"
                        })
                    }]
                }, this.deleteStoryAndRemoveUser)
            },
            deleteStoryAndRemoveUser: function(e) {
                "cancel" !== e && (this.deleteStory(e), GroupRemoveUserAction/*p*/.removeMemberFromGroup(this.props.story.actors[0].id, this.props.group.id, this.onRemoveMemberSuccess))
            },
            onRemoveMemberSuccess: function() {
                b && b.didRemoveMember && b.didRemoveMember(this.props.story.actors[0].id)
            },
            deleteStoryAndBlockUserConfirm: function() {
                this.refs[A].close(), FBAlertManager/*a*/.alertWithArgs({
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Delete Post and Block User?"],
                        desc: "Title of confirmation message for deleting FBAlertManager/*a*/ post and blocking the user from the group"
                    }),
                    message: fbt/*x*/({
                        type: "text",
                        texts: ["You're about to delete this post and block this user from the group."],
                        desc: "Confirmation message for deleting FBAlertManager/*a*/ post."
                    }),
                    buttons: [{
                        "delete": fbt/*x*/({
                            type: "text",
                            texts: ["Confirm"],
                            desc: "Confirmation button for deleting FBAlertManager/*a*/ post and blocking the poster."
                        })
                    }, {
                        cancel: fbt/*x*/({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for deleting FBAlertManager/*a*/ post and blocking the poster."
                        })
                    }]
                }, this.deleteStoryAndBlockUser)
            },
            deleteStoryAndBlockUser: function(e) {
                "cancel" !== e && (this.deleteStory(e), GroupBlockUserAction/*c*/.blockUserFromGroup(this.props.story.actors[0].id, this.props.group.id, this.onBlockSuccess))
            },
            onBlockSuccess: function() {
                b && b.didBlockMember && b.didBlockMember(this.props.story.actors[0].id)
            },
            copyLink: function() {
                R.setPasteboardString(this.props.story.url), this.refs[A].close()
            },
            reportToAdmin: function() {
                var e = this.refs[A];
                ReportToAdminAction/*y*/.reportStoryToAdmin({
                    groupID: this.props.group.id,
                    storyID: this.props.story.id,
                    onFailure: function(t) {
                        e.close(function() {
                            logError/*M*/(t)
                        })
                    },
                    onSuccess: function() {
                        e.close(function() {
                            FBAlertManager/*a*/.alert(fbt/*x*/({
                                type: "text",
                                texts: ["Thank you. This post has been reported."],
                                desc: "Message after the viewer has successfully reported FBAlertManager/*a*/ post to group admin"
                            }))
                        })
                    }
                })
            },
            pinPost: function() {
                GroupPinPostAction/*d*/.updatePinnedPost(this.props.group.id, this.props.story.id, !0, this.props.pinPostSource, this.props.onPinUnpinStory), this.refs[A].close()
            },
            unpinPost: function() {
                GroupPinPostAction/*d*/.updatePinnedPost(this.props.group.id, this.props.story.id, !1, this.props.pinPostSource, this.props.onPinUnpinStory), this.refs[A].close()
            },
            reportStory: function() {
                var e = this.props.story,
                    t = this.refs[A];
                b.reportStoryURL({
                    actionType: "RESOLVE_PROBLEM",
                    hideableToken: e.hideable_token,
                    trackingCodes: e.tracking,
                    storyGraphQLID: e.id,
                    storyRenderLocation: "group"
                }, function(e) {
                    t.close(function() {
                        this.props.onStoryReported && this.props.onStoryReported(), RouteHandler/*w*/.getCallback({
                            typeList: ["URL"],
                            params: {
                                url: e
                            }
                        })()
                    }.bind(this))
                }.bind(this), function(e) {
                    t.close(function() {
                        logError/*M*/(e)
                    })
                })
            },
            changeSubscribeStatus: function(e) {
                var t = this.props.story.feedback;
                e ? FeedbackSubscriptionActions/*l*/.handleFeedbackSubscribe(t.id) : FeedbackSubscriptionActions/*l*/.handleFeedbackUnsubscribe(t.id), this.refs[A].close()
            },
            renderPopoverContent: function() {
                var e = [];
                this.props.story.url && (e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "copyLink",
                    onPress: this.copyLink,
                    iconSource: ix/*F*/("ActionSheetIconCopy"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Copy Link to Post"],
                        desc: "Button to copy link to post to paste board"
                    })
                })), e.push(Popover/*m*/.renderSeparator())), this.props.group && this.props.group.admin_aware_group.is_viewer_admin && (0 === this.props.group.admin_aware_group.group_pinned_stories.count || isEmpty/*I*/(this.props.group.admin_aware_group.group_pinned_stories.edges) ? e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "pinPost",
                    onPress: this.pinPost,
                    iconSource: ix/*F*/("ActionSheetIconSavePhoto"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Pin Post"],
                        desc: "Button to pin FBAlertManager/*a*/ post to the group"
                    })
                })) : this.props.story.id === this.props.group.admin_aware_group.group_pinned_stories.edges[0].node.id && e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "unpinPost",
                    onPress: this.unpinPost,
                    iconSource: ix/*F*/("ActionSheetIconReport"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Unpin Post"],
                        desc: "Button to upin FBAlertManager/*a*/ post in FBAlertManager/*a*/ group"
                    })
                })));
                var t = this.props.story.feedback.is_viewer_subscribed,
                    n = this.changeSubscribeStatus.bind(this, !t);
                return t ? (e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "unsubscribeToStory",
                    onPress: n,
                    iconSource: ix/*F*/("ActionSheetIconGetNotifications"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Stop Notifications"],
                        desc: "Button to unsubscribe to comments on FBAlertManager/*a*/ post"
                    })
                })), e.push(Popover/*m*/.renderSeparator())) : this.props.story.feedback.can_viewer_subscribe && (e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "subscribeToStory",
                    onPress: n,
                    iconSource: ix/*F*/("ActionSheetIconGetNotifications"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Get Notifications"],
                        desc: "Button to subscribe to comments on FBAlertManager/*a*/ post"
                    })
                })), e.push(Popover/*m*/.renderSeparator())), this.props.editPostCallback && this.props.story.can_viewer_edit && (e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "editPost",
                    onPress: this.editPost,
                    iconSource: ix/*F*/("ActionSheetIconCompose"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Edit Post"],
                        desc: "Button to edit post"
                    })
                })), e.push(Popover/*m*/.renderSeparator())), this.props.group && !this.props.group.admin_aware_group.is_viewer_admin && this.props.group.admin_aware_group.viewer_join_state === FBGroupJoinState/*s*/.member && this.props.viewer.actor.id !== this.props.story.actors[0].id && (e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "reportToAdmin",
                    onPress: this.reportToAdmin,
                    iconSource: ix/*F*/("ActionSheetIconReport"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Report to Admin"],
                        desc: "Button to report story to FBAlertManager/*a*/ group admin"
                    })
                })), e.push(Popover/*m*/.renderSeparator())), this.props.group && this.props.viewer.actor.id !== this.props.story.actors[0].id && (e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "reportStory",
                    onPress: this.reportStory,
                    iconSource: ix/*F*/("ActionSheetIconReport"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["isEmpty/*I*/ don't like this post"],
                        desc: "Button to report story to FB as spam/etc"
                    })
                })), e.push(Popover/*m*/.renderSeparator())), v.isEmployee && (e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "copyId",
                    onPress: this.copyStoryDebugData,
                    iconSource: ix/*F*/("ActionSheetIconCopy"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["[fb] Copy Story Debug Data"],
                        desc: "fb-only option to copy story debug data to pasteboard"
                    })
                })), e.push(Popover/*m*/.renderSeparator()), S.isSimulator && (e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "printInfo",
                    onPress: this.printStoryInfo,
                    iconSource: ix/*F*/("ActionSheetIconSavePhoto"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["[fb] Print Story Info"],
                        desc: "fb-only option to print story info"
                    })
                })), e.push(Popover/*m*/.renderSeparator()))), e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "copyStory",
                    onPress: this.copyStory,
                    iconSource: ix/*F*/("ActionSheetIconCopy"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Copy Story Text"],
                        desc: "Button to copy story text to paste board"
                    })
                })), this.props.story.can_viewer_delete && (e.push(Popover/*m*/.renderSeparator()), e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "deleteStoryConfirm",
                    onPress: this.deleteStoryConfirm,
                    iconSource: ix/*F*/("ActionSheetIconDelete"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Delete"],
                        desc: "menu button to delete story if viewer is the author"
                    })
                })), this.props.group && this.props.group.admin_aware_group.is_viewer_admin && this.props.story.actors[0].id != this.props.viewer.actor.id && (!isEmpty/*I*/(this.props.story.action_links) && this.props.story.action_links.some(function(e) {
                    e.__type__ && e.__type__.name === k
                }) && (e.push(Popover/*m*/.renderSeparator()), e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "deleteStoryAndRemoveUserConfirm",
                    onPress: this.deleteStoryAndRemoveUserConfirm,
                    iconSource: ix/*F*/("ActionSheetIconReport"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Delete and Remove User"],
                        desc: "menu button to delete story and remove poster from group"
                    })
                }))), e.push(Popover/*m*/.renderSeparator()), e.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "deleteStoryAndBlockUserConfirm",
                    onPress: this.deleteStoryAndBlockUserConfirm,
                    iconSource: ix/*F*/("ActionSheetIconReport"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Delete and Block User"],
                        desc: "menu button to delete story and ban poster from group"
                    })
                })))), e
            },
            render: function() {
                return React/*_*/.createElement(TouchableOpacity/*D*/, {
                    ref: Q,
                    onPress: this.open
                }, React/*_*/.createElement(View/*T*/, {
                    style: N.button
                }, React/*_*/.createElement(Image/*h*/, {
                    source: ix/*F*/("storyChevron"),
                    style: N.chevronIcon
                }), React/*_*/.createElement(Popover/*m*/, {
                    ref: A,
                    contentFactory: this.renderPopoverContent
                })))
            }
        }),
        N = StyleSheet/*E*/.create({
            button: {
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white"
            },
            chevronIcon: {
                width: 12,
                height: 7
            }
        });
    i.exports = O
});