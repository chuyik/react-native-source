__d("FBStoryMenu",["ActionRow","FBAlertManager","FBGroupJoinState","FeedbackSubscriptionActions","FeedbackPoller","GroupBlockUserAction","GroupRemoveUserAction","GroupPinPostAction","Image","NativeModules","Popover","ReactGraphQL","React","ReportToAdminAction","RouteHandler","StoryDeleteActions","StyleSheet","TouchableOpacity","View","fbt","getStoryLocation","isEmpty","ix","keyOf","logError"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ActionRow/*o*/ = require/*t*/("ActionRow"),
        FBAlertManager/*a*/ = require/*t*/("FBAlertManager"),
        FBGroupJoinState/*s*/ = require/*t*/("FBGroupJoinState"),
        FeedbackSubscriptionActions/*l*/ = require/*t*/("FeedbackSubscriptionActions"),
        FeedbackPoller/*u*/ = require/*t*/("FeedbackPoller"),
        GroupBlockUserAction/*c*/ = require/*t*/("GroupBlockUserAction"),
        GroupRemoveUserAction/*p*/ = require/*t*/("GroupRemoveUserAction"),
        GroupPinPostAction/*d*/ = require/*t*/("GroupPinPostAction"),
        Image/*h*/ = require/*t*/("Image"),
        NativeModules/*f*/ = require/*t*/("NativeModules"),
        Popover/*m*/ = require/*t*/("Popover"),
        ReactGraphQL/*g*/ = require/*t*/("ReactGraphQL"),
        React/*_*/ = require/*t*/("React"),
        ReportToAdminAction/*y*/ = require/*t*/("ReportToAdminAction"),
        v = NativeModules/*f*/.RKCurrentViewer,
        S = NativeModules/*f*/.RKDeviceManager,
        b = NativeModules/*f*/.RKTreehouseManager,
        R = NativeModules/*f*/.RKPasteboard,
        RouteHandler/*w*/ = require/*t*/("RouteHandler"),
        StoryDeleteActions/*C*/ = require/*t*/("StoryDeleteActions"),
        StyleSheet/*E*/ = require/*t*/("StyleSheet"),
        TouchableOpacity/*D*/ = require/*t*/("TouchableOpacity"),
        View/*T*/ = require/*t*/("View"),
        fbt/*x*/ = require/*t*/("fbt"),
        getStoryLocation/*P*/ = require/*t*/("getStoryLocation"),
        isEmpty/*I*/ = require/*t*/("isEmpty"),
        ix/*F*/ = require/*t*/("ix"),
        keyOf/*L*/ = require/*t*/("keyOf"),
        logError/*M*/ = require/*t*/("logError"),
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
                    story: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("FBStoryMenu_story", "Story", [new global/*e*/.Field("id"), new global/*e*/.Field("url", null, null, [new global/*e*/.Callv("site", ["mobile"])]), new global/*e*/.Field("message", [new global/*e*/.Field("text")]), new global/*e*/.Field("actors", [new global/*e*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                plural: !0
                            }), new global/*e*/.Field("action_links", [new global/*e*/.Field("__type__", [new global/*e*/.Field("name"), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, null, null, null, {
                                plural: !0
                            }), new global/*e*/.Field("attachments", [new global/*e*/.Field("url", null, null, [new global/*e*/.Callv("site", ["mobile"])]), new global/*e*/.Field("target", [new global/*e*/.Field("url", null, null, [new global/*e*/.Callv("site", ["mobile"])]), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new global/*e*/.Field("media", [new global/*e*/.Field("image", [new global/*e*/.Field("uri")], null, null, "image_menu")])], null, null, null, null, {
                                plural: !0
                            }), new global/*e*/.Field("can_viewer_delete"), new global/*e*/.Field("can_viewer_edit"), new global/*e*/.Field("feedback", [new global/*e*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new global/*e*/.Field("is_viewer_subscribed"), new global/*e*/.Field("can_viewer_subscribe")], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new global/*e*/.Field("hideable_token"), new global/*e*/.Field("tracking")], null, {
                                scope: "FBStoryMenu_story"
                            })
                        }()
                    },
                    group: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("FBStoryMenu_group", "Group", [new global/*e*/.Field("id"), new global/*e*/.Field("admin_aware_group", [new global/*e*/.Field("is_viewer_admin"), new global/*e*/.Field("viewer_join_state"), new global/*e*/.Field("group_pinned_stories", [new global/*e*/.Field("count"), new global/*e*/.Field("edges", [new global/*e*/.Field("node", [new global/*e*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new global/*e*/.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBStoryMenu_group_1"
                            }), new global/*e*/.Field("page_info", [new global/*e*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new global/*e*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new global/*e*/.Callv("first", ["1"])], null, null, {
                                connection: !0
                            }), new global/*e*/.Field("id", null, null, null, null, null, {
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
                    viewer: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("FBStoryMenu_viewer", "Viewer", [new global/*e*/.Field("actor", [new global/*e*/.Field("id", null, null, null, null, null, {
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
                this.refs[Q].measure(function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, ActionRow/*o*/) {
                    this.refs[A].openWithArrow({
                        left: module/*i*/ + requireDynamic/*n*/ / 2,
                        top: ActionRow/*o*/,
                        height: requireLazy/*r*/
                    })
                }.bind(this))
            },
            copyStoryDebugData: function() {
                R.setPasteboardString(this.props.story.id), console.log({
                    story_id: this.props.story.id
                }), this.refs[A].close()
            },
            printStoryInfo: function() {
                var global/*e*/ = {};
                global/*e*/[this.props.story.id] = this.props.story, console.log(global/*e*/), this.refs[A].close()
            },
            copyStory: function() {
                var global/*e*/ = this.props.story;
                R.setPasteboardString(global/*e*/.message && global/*e*/.message.text || global/*e*/.attachments[0] && (global/*e*/.attachments[0].url || global/*e*/.attachments[0].target && global/*e*/.attachments[0].target.url || global/*e*/.attachments[0].media.image_menu.uri) || global/*e*/.url), this.refs[A].close()
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
            deleteStory: function(global/*e*/) {
                if ("cancel" != global/*e*/) {
                    FeedbackPoller/*u*/.unregister(this.props.story.feedback.id), this.props.onStoryDeleted && this.props.onStoryDeleted();
                    var require/*t*/ = this.props.story,
                        requireDynamic/*n*/ = getStoryLocation/*P*/(this.context.route);
                    StoryDeleteActions/*C*/.deleteStory(require/*t*/.id, requireDynamic/*n*/)
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
            deleteStoryAndRemoveUser: function(global/*e*/) {
                "cancel" !== global/*e*/ && (this.deleteStory(global/*e*/), GroupRemoveUserAction/*p*/.removeMemberFromGroup(this.props.story.actors[0].id, this.props.group.id, this.onRemoveMemberSuccess))
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
            deleteStoryAndBlockUser: function(global/*e*/) {
                "cancel" !== global/*e*/ && (this.deleteStory(global/*e*/), GroupBlockUserAction/*c*/.blockUserFromGroup(this.props.story.actors[0].id, this.props.group.id, this.onBlockSuccess))
            },
            onBlockSuccess: function() {
                b && b.didBlockMember && b.didBlockMember(this.props.story.actors[0].id)
            },
            copyLink: function() {
                R.setPasteboardString(this.props.story.url), this.refs[A].close()
            },
            reportToAdmin: function() {
                var global/*e*/ = this.refs[A];
                ReportToAdminAction/*y*/.reportStoryToAdmin({
                    groupID: this.props.group.id,
                    storyID: this.props.story.id,
                    onFailure: function(require/*t*/) {
                        global/*e*/.close(function() {
                            logError/*M*/(require/*t*/)
                        })
                    },
                    onSuccess: function() {
                        global/*e*/.close(function() {
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
                var global/*e*/ = this.props.story,
                    require/*t*/ = this.refs[A];
                b.reportStoryURL({
                    actionType: "RESOLVE_PROBLEM",
                    hideableToken: global/*e*/.hideable_token,
                    trackingCodes: global/*e*/.tracking,
                    storyGraphQLID: global/*e*/.id,
                    storyRenderLocation: "group"
                }, function(global/*e*/) {
                    require/*t*/.close(function() {
                        this.props.onStoryReported && this.props.onStoryReported(), RouteHandler/*w*/.getCallback({
                            typeList: ["URL"],
                            params: {
                                url: global/*e*/
                            }
                        })()
                    }.bind(this))
                }.bind(this), function(global/*e*/) {
                    require/*t*/.close(function() {
                        logError/*M*/(global/*e*/)
                    })
                })
            },
            changeSubscribeStatus: function(global/*e*/) {
                var require/*t*/ = this.props.story.feedback;
                global/*e*/ ? FeedbackSubscriptionActions/*l*/.handleFeedbackSubscribe(require/*t*/.id) : FeedbackSubscriptionActions/*l*/.handleFeedbackUnsubscribe(require/*t*/.id), this.refs[A].close()
            },
            renderPopoverContent: function() {
                var global/*e*/ = [];
                this.props.story.url && (global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "copyLink",
                    onPress: this.copyLink,
                    iconSource: ix/*F*/("ActionSheetIconCopy"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Copy Link to Post"],
                        desc: "Button to copy link to post to paste board"
                    })
                })), global/*e*/.push(Popover/*m*/.renderSeparator())), this.props.group && this.props.group.admin_aware_group.is_viewer_admin && (0 === this.props.group.admin_aware_group.group_pinned_stories.count || isEmpty/*I*/(this.props.group.admin_aware_group.group_pinned_stories.edges) ? global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "pinPost",
                    onPress: this.pinPost,
                    iconSource: ix/*F*/("ActionSheetIconSavePhoto"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Pin Post"],
                        desc: "Button to pin FBAlertManager/*a*/ post to the group"
                    })
                })) : this.props.story.id === this.props.group.admin_aware_group.group_pinned_stories.edges[0].node.id && global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "unpinPost",
                    onPress: this.unpinPost,
                    iconSource: ix/*F*/("ActionSheetIconReport"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Unpin Post"],
                        desc: "Button to upin FBAlertManager/*a*/ post in FBAlertManager/*a*/ group"
                    })
                })));
                var require/*t*/ = this.props.story.feedback.is_viewer_subscribed,
                    requireDynamic/*n*/ = this.changeSubscribeStatus.bind(this, !require/*t*/);
                return require/*t*/ ? (global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "unsubscribeToStory",
                    onPress: requireDynamic/*n*/,
                    iconSource: ix/*F*/("ActionSheetIconGetNotifications"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Stop Notifications"],
                        desc: "Button to unsubscribe to comments on FBAlertManager/*a*/ post"
                    })
                })), global/*e*/.push(Popover/*m*/.renderSeparator())) : this.props.story.feedback.can_viewer_subscribe && (global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "subscribeToStory",
                    onPress: requireDynamic/*n*/,
                    iconSource: ix/*F*/("ActionSheetIconGetNotifications"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Get Notifications"],
                        desc: "Button to subscribe to comments on FBAlertManager/*a*/ post"
                    })
                })), global/*e*/.push(Popover/*m*/.renderSeparator())), this.props.editPostCallback && this.props.story.can_viewer_edit && (global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "editPost",
                    onPress: this.editPost,
                    iconSource: ix/*F*/("ActionSheetIconCompose"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Edit Post"],
                        desc: "Button to edit post"
                    })
                })), global/*e*/.push(Popover/*m*/.renderSeparator())), this.props.group && !this.props.group.admin_aware_group.is_viewer_admin && this.props.group.admin_aware_group.viewer_join_state === FBGroupJoinState/*s*/.member && this.props.viewer.actor.id !== this.props.story.actors[0].id && (global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "reportToAdmin",
                    onPress: this.reportToAdmin,
                    iconSource: ix/*F*/("ActionSheetIconReport"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Report to Admin"],
                        desc: "Button to report story to FBAlertManager/*a*/ group admin"
                    })
                })), global/*e*/.push(Popover/*m*/.renderSeparator())), this.props.group && this.props.viewer.actor.id !== this.props.story.actors[0].id && (global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "reportStory",
                    onPress: this.reportStory,
                    iconSource: ix/*F*/("ActionSheetIconReport"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["isEmpty/*I*/ don'require/*t*/ like this post"],
                        desc: "Button to report story to FB as spam/etc"
                    })
                })), global/*e*/.push(Popover/*m*/.renderSeparator())), v.isEmployee && (global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "copyId",
                    onPress: this.copyStoryDebugData,
                    iconSource: ix/*F*/("ActionSheetIconCopy"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["[fb] Copy Story Debug Data"],
                        desc: "fb-only option to copy story debug data to pasteboard"
                    })
                })), global/*e*/.push(Popover/*m*/.renderSeparator()), S.isSimulator && (global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "printInfo",
                    onPress: this.printStoryInfo,
                    iconSource: ix/*F*/("ActionSheetIconSavePhoto"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["[fb] Print Story Info"],
                        desc: "fb-only option to print story info"
                    })
                })), global/*e*/.push(Popover/*m*/.renderSeparator()))), global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "copyStory",
                    onPress: this.copyStory,
                    iconSource: ix/*F*/("ActionSheetIconCopy"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Copy Story Text"],
                        desc: "Button to copy story text to paste board"
                    })
                })), this.props.story.can_viewer_delete && (global/*e*/.push(Popover/*m*/.renderSeparator()), global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "deleteStoryConfirm",
                    onPress: this.deleteStoryConfirm,
                    iconSource: ix/*F*/("ActionSheetIconDelete"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Delete"],
                        desc: "menu button to delete story if viewer is the author"
                    })
                })), this.props.group && this.props.group.admin_aware_group.is_viewer_admin && this.props.story.actors[0].id != this.props.viewer.actor.id && (!isEmpty/*I*/(this.props.story.action_links) && this.props.story.action_links.some(function(global/*e*/) {
                    global/*e*/.__type__ && global/*e*/.__type__.name === k
                }) && (global/*e*/.push(Popover/*m*/.renderSeparator()), global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "deleteStoryAndRemoveUserConfirm",
                    onPress: this.deleteStoryAndRemoveUserConfirm,
                    iconSource: ix/*F*/("ActionSheetIconReport"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Delete and Remove User"],
                        desc: "menu button to delete story and remove poster from group"
                    })
                }))), global/*e*/.push(Popover/*m*/.renderSeparator()), global/*e*/.push(React/*_*/.createElement(ActionRow/*o*/, {
                    key: "deleteStoryAndBlockUserConfirm",
                    onPress: this.deleteStoryAndBlockUserConfirm,
                    iconSource: ix/*F*/("ActionSheetIconReport"),
                    title: fbt/*x*/({
                        type: "text",
                        texts: ["Delete and Block User"],
                        desc: "menu button to delete story and ban poster from group"
                    })
                })))), global/*e*/
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
    module/*i*/.exports = O
});