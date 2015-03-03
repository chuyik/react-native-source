__d("FBStoryMenu",["ActionRow","FBAlertManager","FBGroupJoinState","FeedbackSubscriptionActions","FeedbackPoller","GroupBlockUserAction","GroupRemoveUserAction","GroupPinPostAction","Image","NativeModules","Popover","ReactGraphQL","React","ReportToAdminAction","RouteHandler","StoryDeleteActions","StyleSheet","TouchableOpacity","View","fbt","getStoryLocation","isEmpty","ix","keyOf","logError"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ActionRow"),
        exports/*a*/ = require/*t*/("FBAlertManager"),
        ActionRow/*s*/ = require/*t*/("FBGroupJoinState"),
        FBAlertManager/*l*/ = require/*t*/("FeedbackSubscriptionActions"),
        FBGroupJoinState/*u*/ = require/*t*/("FeedbackPoller"),
        FeedbackSubscriptionActions/*c*/ = require/*t*/("GroupBlockUserAction"),
        FeedbackPoller/*p*/ = require/*t*/("GroupRemoveUserAction"),
        GroupBlockUserAction/*d*/ = require/*t*/("GroupPinPostAction"),
        GroupRemoveUserAction/*h*/ = require/*t*/("Image"),
        GroupPinPostAction/*f*/ = require/*t*/("NativeModules"),
        Image/*m*/ = require/*t*/("Popover"),
        NativeModules/*g*/ = require/*t*/("ReactGraphQL"),
        Popover/*_*/ = require/*t*/("React"),
        ReactGraphQL/*y*/ = require/*t*/("ReportToAdminAction"),
        React/*v*/ = GroupPinPostAction/*f*/.RKCurrentViewer,
        ReportToAdminAction/*S*/ = GroupPinPostAction/*f*/.RKDeviceManager,
        RouteHandler/*b*/ = GroupPinPostAction/*f*/.RKTreehouseManager,
        StoryDeleteActions/*R*/ = GroupPinPostAction/*f*/.RKPasteboard,
        StyleSheet/*w*/ = require/*t*/("RouteHandler"),
        TouchableOpacity/*C*/ = require/*t*/("StoryDeleteActions"),
        View/*E*/ = require/*t*/("StyleSheet"),
        fbt/*D*/ = require/*t*/("TouchableOpacity"),
        getStoryLocation/*T*/ = require/*t*/("View"),
        isEmpty/*x*/ = require/*t*/("fbt"),
        ix/*P*/ = require/*t*/("getStoryLocation"),
        keyOf/*I*/ = require/*t*/("isEmpty"),
        logError/*F*/ = require/*t*/("ix"),
        L = require/*t*/("keyOf"),
        M = require/*t*/("logError"),
        Q = L({
            chevronRef: null
        }),
        A = L({
            popRef: null
        }),
        k = "GroupDeletePostAndRemoveUserActionLink",
        O = Popover/*_*/.createClass({
            displayName: "FBStoryMenu",
            propTypes: {
                onStoryReported: Popover/*_*/.PropTypes.func,
                editPostCallback: Popover/*_*/.PropTypes.func,
                onPinUnpinStory: Popover/*_*/.PropTypes.func,
                pinPostSource: Popover/*_*/.PropTypes.string
            },
            mixins: [NativeModules/*g*/.Mixin],
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
                this.refs[Q].measure(function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
                    this.refs[A].openWithArrow({
                        left: module/*i*/ + requireDynamic/*n*/ / 2,
                        top: o,
                        height: requireLazy/*r*/
                    })
                }.bind(this))
            },
            copyStoryDebugData: function() {
                StoryDeleteActions/*R*/.setPasteboardString(this.props.story.id), console.log({
                    story_id: this.props.story.id
                }), this.refs[A].close()
            },
            printStoryInfo: function() {
                var global/*e*/ = {};
                global/*e*/[this.props.story.id] = this.props.story, console.log(global/*e*/), this.refs[A].close()
            },
            copyStory: function() {
                var global/*e*/ = this.props.story;
                StoryDeleteActions/*R*/.setPasteboardString(global/*e*/.message && global/*e*/.message.text || global/*e*/.attachments[0] && (global/*e*/.attachments[0].url || global/*e*/.attachments[0].target && global/*e*/.attachments[0].target.url || global/*e*/.attachments[0].media.image_menu.uri) || global/*e*/.url), this.refs[A].close()
            },
            editPost: function() {
                this.props.editPostCallback(), this.refs[A].close()
            },
            deleteStoryConfirm: function() {
                this.refs[A].close(), exports/*a*/.alertWithArgs({
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Delete Post?"],
                        desc: "Title of confirmation message for deleting exports/*a*/ post"
                    }),
                    message: isEmpty/*x*/({
                        type: "text",
                        texts: ["You're about to delete this post."],
                        desc: "Confirmation message for deleting exports/*a*/ post."
                    }),
                    buttons: [{
                        "delete": isEmpty/*x*/({
                            type: "text",
                            texts: ["Delete"],
                            desc: "Confirmation button for deleting exports/*a*/ post."
                        })
                    }, {
                        cancel: isEmpty/*x*/({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for deleting exports/*a*/ comment."
                        })
                    }]
                }, this.deleteStory)
            },
            deleteStory: function(global/*e*/) {
                if ("cancel" != global/*e*/) {
                    FBGroupJoinState/*u*/.unregister(this.props.story.feedback.id), this.props.onStoryDeleted && this.props.onStoryDeleted();
                    var require/*t*/ = this.props.story,
                        requireDynamic/*n*/ = ix/*P*/(this.context.route);
                    TouchableOpacity/*C*/.deleteStory(require/*t*/.id, requireDynamic/*n*/)
                }
            },
            deleteStoryAndRemoveUserConfirm: function() {
                this.refs[A].close(), exports/*a*/.alertWithArgs({
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Delete Post and Remove User?"],
                        desc: "Title of confirmation message for deleting exports/*a*/ post and removing the user from the group"
                    }),
                    message: isEmpty/*x*/({
                        type: "text",
                        texts: ["You're about to delete this post and remove this user from the group."],
                        desc: "Confirmation message for deleting exports/*a*/ post and removing author from the group"
                    }),
                    buttons: [{
                        "delete": isEmpty/*x*/({
                            type: "text",
                            texts: ["Confirm"],
                            desc: "Confirmation button for deleting exports/*a*/ post and removing the poster from the group"
                        })
                    }, {
                        cancel: isEmpty/*x*/({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for deleting exports/*a*/ post and removing the poster from the group"
                        })
                    }]
                }, this.deleteStoryAndRemoveUser)
            },
            deleteStoryAndRemoveUser: function(global/*e*/) {
                "cancel" !== global/*e*/ && (this.deleteStory(global/*e*/), FeedbackPoller/*p*/.removeMemberFromGroup(this.props.story.actors[0].id, this.props.group.id, this.onRemoveMemberSuccess))
            },
            onRemoveMemberSuccess: function() {
                RouteHandler/*b*/ && RouteHandler/*b*/.didRemoveMember && RouteHandler/*b*/.didRemoveMember(this.props.story.actors[0].id)
            },
            deleteStoryAndBlockUserConfirm: function() {
                this.refs[A].close(), exports/*a*/.alertWithArgs({
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Delete Post and Block User?"],
                        desc: "Title of confirmation message for deleting exports/*a*/ post and blocking the user from the group"
                    }),
                    message: isEmpty/*x*/({
                        type: "text",
                        texts: ["You're about to delete this post and block this user from the group."],
                        desc: "Confirmation message for deleting exports/*a*/ post."
                    }),
                    buttons: [{
                        "delete": isEmpty/*x*/({
                            type: "text",
                            texts: ["Confirm"],
                            desc: "Confirmation button for deleting exports/*a*/ post and blocking the poster."
                        })
                    }, {
                        cancel: isEmpty/*x*/({
                            type: "text",
                            texts: ["Cancel"],
                            desc: "Cancel button for deleting exports/*a*/ post and blocking the poster."
                        })
                    }]
                }, this.deleteStoryAndBlockUser)
            },
            deleteStoryAndBlockUser: function(global/*e*/) {
                "cancel" !== global/*e*/ && (this.deleteStory(global/*e*/), FeedbackSubscriptionActions/*c*/.blockUserFromGroup(this.props.story.actors[0].id, this.props.group.id, this.onBlockSuccess))
            },
            onBlockSuccess: function() {
                RouteHandler/*b*/ && RouteHandler/*b*/.didBlockMember && RouteHandler/*b*/.didBlockMember(this.props.story.actors[0].id)
            },
            copyLink: function() {
                StoryDeleteActions/*R*/.setPasteboardString(this.props.story.url), this.refs[A].close()
            },
            reportToAdmin: function() {
                var global/*e*/ = this.refs[A];
                ReactGraphQL/*y*/.reportStoryToAdmin({
                    groupID: this.props.group.id,
                    storyID: this.props.story.id,
                    onFailure: function(require/*t*/) {
                        global/*e*/.close(function() {
                            M(require/*t*/)
                        })
                    },
                    onSuccess: function() {
                        global/*e*/.close(function() {
                            exports/*a*/.alert(isEmpty/*x*/({
                                type: "text",
                                texts: ["Thank you. This post has been reported."],
                                desc: "Message after the viewer has successfully reported exports/*a*/ post to group admin"
                            }))
                        })
                    }
                })
            },
            pinPost: function() {
                GroupBlockUserAction/*d*/.updatePinnedPost(this.props.group.id, this.props.story.id, !0, this.props.pinPostSource, this.props.onPinUnpinStory), this.refs[A].close()
            },
            unpinPost: function() {
                GroupBlockUserAction/*d*/.updatePinnedPost(this.props.group.id, this.props.story.id, !1, this.props.pinPostSource, this.props.onPinUnpinStory), this.refs[A].close()
            },
            reportStory: function() {
                var global/*e*/ = this.props.story,
                    require/*t*/ = this.refs[A];
                RouteHandler/*b*/.reportStoryURL({
                    actionType: "RESOLVE_PROBLEM",
                    hideableToken: global/*e*/.hideable_token,
                    trackingCodes: global/*e*/.tracking,
                    storyGraphQLID: global/*e*/.id,
                    storyRenderLocation: "group"
                }, function(global/*e*/) {
                    require/*t*/.close(function() {
                        this.props.onStoryReported && this.props.onStoryReported(), StyleSheet/*w*/.getCallback({
                            typeList: ["URL"],
                            params: {
                                url: global/*e*/
                            }
                        })()
                    }.bind(this))
                }.bind(this), function(global/*e*/) {
                    require/*t*/.close(function() {
                        M(global/*e*/)
                    })
                })
            },
            changeSubscribeStatus: function(global/*e*/) {
                var require/*t*/ = this.props.story.feedback;
                global/*e*/ ? FBAlertManager/*l*/.handleFeedbackSubscribe(require/*t*/.id) : FBAlertManager/*l*/.handleFeedbackUnsubscribe(require/*t*/.id), this.refs[A].close()
            },
            renderPopoverContent: function() {
                var global/*e*/ = [];
                this.props.story.url && (global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "copyLink",
                    onPress: this.copyLink,
                    iconSource: logError/*F*/("ActionSheetIconCopy"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Copy Link to Post"],
                        desc: "Button to copy link to post to paste board"
                    })
                })), global/*e*/.push(Image/*m*/.renderSeparator())), this.props.group && this.props.group.admin_aware_group.is_viewer_admin && (0 === this.props.group.admin_aware_group.group_pinned_stories.count || keyOf/*I*/(this.props.group.admin_aware_group.group_pinned_stories.edges) ? global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "pinPost",
                    onPress: this.pinPost,
                    iconSource: logError/*F*/("ActionSheetIconSavePhoto"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Pin Post"],
                        desc: "Button to pin exports/*a*/ post to the group"
                    })
                })) : this.props.story.id === this.props.group.admin_aware_group.group_pinned_stories.edges[0].node.id && global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "unpinPost",
                    onPress: this.unpinPost,
                    iconSource: logError/*F*/("ActionSheetIconReport"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Unpin Post"],
                        desc: "Button to upin exports/*a*/ post in exports/*a*/ group"
                    })
                })));
                var require/*t*/ = this.props.story.feedback.is_viewer_subscribed,
                    requireDynamic/*n*/ = this.changeSubscribeStatus.bind(this, !require/*t*/);
                return require/*t*/ ? (global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "unsubscribeToStory",
                    onPress: requireDynamic/*n*/,
                    iconSource: logError/*F*/("ActionSheetIconGetNotifications"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Stop Notifications"],
                        desc: "Button to unsubscribe to comments on exports/*a*/ post"
                    })
                })), global/*e*/.push(Image/*m*/.renderSeparator())) : this.props.story.feedback.can_viewer_subscribe && (global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "subscribeToStory",
                    onPress: requireDynamic/*n*/,
                    iconSource: logError/*F*/("ActionSheetIconGetNotifications"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Get Notifications"],
                        desc: "Button to subscribe to comments on exports/*a*/ post"
                    })
                })), global/*e*/.push(Image/*m*/.renderSeparator())), this.props.editPostCallback && this.props.story.can_viewer_edit && (global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "editPost",
                    onPress: this.editPost,
                    iconSource: logError/*F*/("ActionSheetIconCompose"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Edit Post"],
                        desc: "Button to edit post"
                    })
                })), global/*e*/.push(Image/*m*/.renderSeparator())), this.props.group && !this.props.group.admin_aware_group.is_viewer_admin && this.props.group.admin_aware_group.viewer_join_state === ActionRow/*s*/.member && this.props.viewer.actor.id !== this.props.story.actors[0].id && (global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "reportToAdmin",
                    onPress: this.reportToAdmin,
                    iconSource: logError/*F*/("ActionSheetIconReport"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Report to Admin"],
                        desc: "Button to report story to exports/*a*/ group admin"
                    })
                })), global/*e*/.push(Image/*m*/.renderSeparator())), this.props.group && this.props.viewer.actor.id !== this.props.story.actors[0].id && (global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "reportStory",
                    onPress: this.reportStory,
                    iconSource: logError/*F*/("ActionSheetIconReport"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["keyOf/*I*/ don'require/*t*/ like this post"],
                        desc: "Button to report story to FB as spam/etc"
                    })
                })), global/*e*/.push(Image/*m*/.renderSeparator())), React/*v*/.isEmployee && (global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "copyId",
                    onPress: this.copyStoryDebugData,
                    iconSource: logError/*F*/("ActionSheetIconCopy"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["[fb] Copy Story Debug Data"],
                        desc: "fb-only option to copy story debug data to pasteboard"
                    })
                })), global/*e*/.push(Image/*m*/.renderSeparator()), ReportToAdminAction/*S*/.isSimulator && (global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "printInfo",
                    onPress: this.printStoryInfo,
                    iconSource: logError/*F*/("ActionSheetIconSavePhoto"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["[fb] Print Story Info"],
                        desc: "fb-only option to print story info"
                    })
                })), global/*e*/.push(Image/*m*/.renderSeparator()))), global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "copyStory",
                    onPress: this.copyStory,
                    iconSource: logError/*F*/("ActionSheetIconCopy"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Copy Story Text"],
                        desc: "Button to copy story text to paste board"
                    })
                })), this.props.story.can_viewer_delete && (global/*e*/.push(Image/*m*/.renderSeparator()), global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "deleteStoryConfirm",
                    onPress: this.deleteStoryConfirm,
                    iconSource: logError/*F*/("ActionSheetIconDelete"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Delete"],
                        desc: "menu button to delete story if viewer is the author"
                    })
                })), this.props.group && this.props.group.admin_aware_group.is_viewer_admin && this.props.story.actors[0].id != this.props.viewer.actor.id && (!keyOf/*I*/(this.props.story.action_links) && this.props.story.action_links.some(function(global/*e*/) {
                    global/*e*/.__type__ && global/*e*/.__type__.name === k
                }) && (global/*e*/.push(Image/*m*/.renderSeparator()), global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "deleteStoryAndRemoveUserConfirm",
                    onPress: this.deleteStoryAndRemoveUserConfirm,
                    iconSource: logError/*F*/("ActionSheetIconReport"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Delete and Remove User"],
                        desc: "menu button to delete story and remove poster from group"
                    })
                }))), global/*e*/.push(Image/*m*/.renderSeparator()), global/*e*/.push(Popover/*_*/.createElement(o, {
                    key: "deleteStoryAndBlockUserConfirm",
                    onPress: this.deleteStoryAndBlockUserConfirm,
                    iconSource: logError/*F*/("ActionSheetIconReport"),
                    title: isEmpty/*x*/({
                        type: "text",
                        texts: ["Delete and Block User"],
                        desc: "menu button to delete story and ban poster from group"
                    })
                })))), global/*e*/
            },
            render: function() {
                return Popover/*_*/.createElement(fbt/*D*/, {
                    ref: Q,
                    onPress: this.open
                }, Popover/*_*/.createElement(getStoryLocation/*T*/, {
                    style: N.button
                }, Popover/*_*/.createElement(GroupRemoveUserAction/*h*/, {
                    source: logError/*F*/("storyChevron"),
                    style: N.chevronIcon
                }), Popover/*_*/.createElement(Image/*m*/, {
                    ref: A,
                    contentFactory: this.renderPopoverContent
                })))
            }
        }),
        N = View/*E*/.create({
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