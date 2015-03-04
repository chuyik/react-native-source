__d("GraphQLMutationProperties",["GraphQLMutatorConstants","invariant","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var GraphQLMutatorConstants/*o*/ = require/*t*/("GraphQLMutatorConstants"),
        invariant/*a*/ = require/*t*/("invariant"),
        rql/*s*/ = require/*t*/("rql"),
        l = {},
        u = {},
        c = {};
    u.actor_subscribe = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "ActorSubscribeResponsePayload", [new global/*e*/.Field("subscribee", [new global/*e*/.Field("subscribers", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("subscribe_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.actor_unsubscribe = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "ActorUnsubscribeResponsePayload", [new global/*e*/.Field("unsubscribee", [new global/*e*/.Field("subscribers", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("subscribe_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.comment_create = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "CommentCreateResponsePayload", [new global/*e*/.Field("feedback", [new global/*e*/.Field("comments", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("top_level_comments", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("comment", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("feedback_comment_edge", [new global/*e*/.Field("cursor", null, null, null, null, null, {
                requisite: !0
            }), new global/*e*/.Field("node", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new global/*e*/.Field("source", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])])
        }()
    }, c.comment_create = {
        "": GraphQLMutatorConstants/*o*/.PREPEND
    }, u.undirected_story_create = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "UndirectedStoryCreateResponsePayload", [new global/*e*/.Field("story", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("feed_story_edge", [new global/*e*/.Field("cursor", null, null, null, null, null, {
                requisite: !0
            }), new global/*e*/.Field("node", null, null, null, null, null, {
                requisite: !0
            }), new global/*e*/.Field("source")])])
        }()
    }, c.undirected_story_create = {
        "environment(tablet_site)": GraphQLMutatorConstants/*o*/.PREPEND
    }, u.story_delete = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "StoryDeleteResponsePayload", [new global/*e*/.Field("deleted_story_id")])
        }()
    }, u.comment_delete = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "CommentDeleteResponsePayload", [new global/*e*/.Field("feedback", [new global/*e*/.Field("comments", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("top_level_comments", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.comment_edit = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "CommentEditResponsePayload", [new global/*e*/.Field("comment", [new global/*e*/.Field("body"), new global/*e*/.Field("edit_history", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("attachments", null, null, null, null, null, {
                plural: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.feedback_like = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "FeedbackLikeResponsePayload", [new global/*e*/.Field("feedback", [new global/*e*/.Field("does_viewer_like"), new global/*e*/.Field("likers", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("like_sentence"), new global/*e*/.Field("viewer_likes_sentence"), new global/*e*/.Field("viewer_does_not_like_sentence"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.feedback_unlike = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "FeedbackUnlikeResponsePayload", [new global/*e*/.Field("feedback", [new global/*e*/.Field("does_viewer_like"), new global/*e*/.Field("likers", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("like_sentence"), new global/*e*/.Field("viewer_likes_sentence"), new global/*e*/.Field("viewer_does_not_like_sentence"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.friend_remove = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "FriendRemoveResponsePayload", [new global/*e*/.Field("unfriended_user", [new global/*e*/.Field("friends", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("friendship_status"), new global/*e*/.Field("subscribe_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.viewer_friend_requests_mark_all_seen = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "ViewerFriendRequestsMarkAllSeenResponsePayload", [new global/*e*/.Field("viewer", [new global/*e*/.Field("friending_possibilities", [new global/*e*/.Field("unseen_count")], null, null, null, null, {
                connection: !0
            })])])
        }()
    }, u.friend_request_accept = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "FriendRequestAcceptResponsePayload", [new global/*e*/.Field("viewer", [new global/*e*/.Field("friending_possibilities", null, null, null, null, null, {
                connection: !0
            })]), new global/*e*/.Field("friend_requester", [new global/*e*/.Field("friends", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("friendship_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.friend_request_cancel = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "FriendRequestCancelResponsePayload", [new global/*e*/.Field("cancelled_friend_requestee", [new global/*e*/.Field("friendship_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.friend_request_delete = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "FriendRequestDeleteResponsePayload", [new global/*e*/.Field("friend_requester", [new global/*e*/.Field("friendship_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.friend_request_send = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "FriendRequestSendResponsePayload", [new global/*e*/.Field("friend_requestees", [new global/*e*/.Field("friendship_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                plural: !0
            })])
        }()
    }, u.group_request_to_join = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "GroupRequestToJoinResponsePayload", [new global/*e*/.Field("group", [new global/*e*/.Field("group_members", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("viewer_join_state"), new global/*e*/.Field("viewer_subscription_level"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.group_leave = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "GroupLeaveResponsePayload", [new global/*e*/.Field("group", [new global/*e*/.Field("group_members", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("viewer_join_state"), new global/*e*/.Field("viewer_subscription_level"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.viewer_messages_mark_all_seen = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "ViewerMessagesMarkAllSeenResponsePayload", [new global/*e*/.Field("viewer", [new global/*e*/.Field("message_threads", [new global/*e*/.Field("unseen_count")], null, null, null, null, {
                connection: !0
            })])])
        }()
    }, u.message_thread_update_read_state = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "MessageThreadUpdateReadStateResponsePayload", [new global/*e*/.Field("thread", [new global/*e*/.Field("messages", [new global/*e*/.Field("unread_count")], null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("viewer", [new global/*e*/.Field("message_threads", [new global/*e*/.Field("unseen_count")], null, null, null, null, {
                connection: !0
            })])])
        }()
    }, u.notification_story_mark_read = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "NotificationStoryMarkReadResponsePayload", [new global/*e*/.Field("story", [new global/*e*/.Field("seen_state"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.viewer_notifications_update_all_seen_state = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "ViewerNotificationsUpdateAllSeenStateResponsePayload", [new global/*e*/.Field("viewer", [new global/*e*/.Field("notification_stories", [new global/*e*/.Field("unseen_count")], null, null, null, null, {
                connection: !0,
                nonFindable: !0
            })]), new global/*e*/.Field("stories", [new global/*e*/.Field("seen_state"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                plural: !0
            })])
        }()
    }, u.feedback_subscribe = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "FeedbackSubscribeResponsePayload", [new global/*e*/.Field("feedback", [new global/*e*/.Field("can_viewer_subscribe"), new global/*e*/.Field("is_viewer_subscribed"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.feedback_unsubscribe = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "FeedbackUnsubscribeResponsePayload", [new global/*e*/.Field("feedback", [new global/*e*/.Field("can_viewer_subscribe"), new global/*e*/.Field("is_viewer_subscribed"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.message_send = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "MessageSendResponsePayload", [new global/*e*/.Field("thread", [new global/*e*/.Field("messages", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("message", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("thread_message_edge", [new global/*e*/.Field("cursor", null, null, null, null, null, {
                requisite: !0
            }), new global/*e*/.Field("node", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new global/*e*/.Field("source", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])])
        }()
    }, c.message_send = {
        "": GraphQLMutatorConstants/*o*/.APPEND
    }, c.instagram_business_invite = {
        "": GraphQLMutatorConstants/*o*/.PREPEND
    }, c.instagram_user_role_create = {
        "": GraphQLMutatorConstants/*o*/.PREPEND
    }, c.instagram_ad_account_group_role_create = {
        "": GraphQLMutatorConstants/*o*/.PREPEND
    }, u.page_like = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "PageLikeResponsePayload", [new global/*e*/.Field("page", [new global/*e*/.Field("does_viewer_like"), new global/*e*/.Field("page_likers", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("subscribe_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.page_unlike = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "PageUnlikeResponsePayload", [new global/*e*/.Field("page", [new global/*e*/.Field("does_viewer_like"), new global/*e*/.Field("page_likers", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("subscribe_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.event_rsvp = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "EventRsvpResponsePayload", [new global/*e*/.Field("event", [new global/*e*/.Field("can_view_members"), new global/*e*/.Field("can_viewer_invite"), new global/*e*/.Field("can_viewer_join"), new global/*e*/.Field("can_viewer_post"), new global/*e*/.Field("can_viewer_share"), new global/*e*/.Field("event_declines", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("event_decline_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("event_invitees", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("event_maybes", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("event_members", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("event_viewer_capability"), new global/*e*/.Field("viewer_guest_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.event_invite = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "EventInviteResponsePayload", [new global/*e*/.Field("event", [new global/*e*/.Field("event_invitees", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("invitee_candidates", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.event_remove = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "EventRemoveResponsePayload", [new global/*e*/.Field("event", [new global/*e*/.Field("can_view_members"), new global/*e*/.Field("can_viewer_invite"), new global/*e*/.Field("can_viewer_join"), new global/*e*/.Field("can_viewer_post"), new global/*e*/.Field("can_viewer_share"), new global/*e*/.Field("event_declines", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("event_decline_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("event_invitees", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("event_maybes", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("event_members", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("event_viewer_capability"), new global/*e*/.Field("viewer_guest_status"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.story_take_negative_action = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "StoryTakeNegativeActionResponsePayload", [new global/*e*/.Field("negative_feedback_action", [new global/*e*/.Field("already_completed"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.story_undo_negative_action = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "StoryUndoNegativeActionResponsePayload", [new global/*e*/.Field("negative_feedback_action", [new global/*e*/.Field("already_completed"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_select_mobile_preference = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdAccountSelectMobilePreferenceResponsePayload", [new global/*e*/.Field("viewer", [new global/*e*/.Field("ad_accounts", null, null, null, null, null, {
                connection: !0
            })])])
        }()
    }, u.ad_campaign_pause = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdCampaignPauseResponsePayload", [new global/*e*/.Field("ad_campaign_group", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("ad_campaign", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("adgroups", [new global/*e*/.Field("edges", [new global/*e*/.Field("node", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new global/*e*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new global/*e*/.Field("page_info", [new global/*e*/.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new global/*e*/.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_campaign_activate = u.ad_campaign_pause, u.ad_campaign_group_pause = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdCampaignGroupPauseResponsePayload", [new global/*e*/.Field("ad_campaign_group", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("ad_campaigns", [new global/*e*/.Field("edges", [new global/*e*/.Field("node", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("adgroups", [new global/*e*/.Field("edges", [new global/*e*/.Field("node", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new global/*e*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new global/*e*/.Field("page_info", [new global/*e*/.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new global/*e*/.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new global/*e*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new global/*e*/.Field("page_info", [new global/*e*/.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new global/*e*/.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_campaign_group_activate = u.ad_campaign_group_pause, u.ad_campaign_group_edit = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdCampaignGroupEditResponsePayload", [new global/*e*/.Field("ad_campaign_group", [new global/*e*/.Field("name"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.adgroup_pause = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdgroupPauseResponsePayload", [new global/*e*/.Field("ad_campaign_group", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("ad_campaign", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("adgroup", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.adgroup_activate = u.adgroup_pause, u.adgroup_edit = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdgroupEditResponsePayload", [new global/*e*/.Field("adgroup", [new global/*e*/.Field("name"), new global/*e*/.Field("preview_image"), new global/*e*/.Field("creative", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("run_status_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("ad_campaign", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("ad_campaign_group", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_edit_spend_limit = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdAccountEditSpendLimitResponsePayload", [new global/*e*/.Field("ad_account", [new global/*e*/.Field("spend_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_remove_spend_limit = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdAccountRemoveSpendLimitResponsePayload", [new global/*e*/.Field("ad_account", [new global/*e*/.Field("spend_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_reset_spend_limit = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdAccountResetSpendLimitResponsePayload", [new global/*e*/.Field("ad_account", [new global/*e*/.Field("spend_info"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_notifications_update_seen_state = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdAccountNotificationsUpdateSeenStateResponsePayload", [new global/*e*/.Field("ad_account", [new global/*e*/.Field("adalerts_and_tips", [new global/*e*/.Field("unseen_count")], null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("stories", [new global/*e*/.Field("seen_state"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                plural: !0
            })])
        }()
    }, u.ad_audience_create = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdAudienceCreateResponsePayload", [new global/*e*/.Field("ad_account_ad_audiences_edge", [new global/*e*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new global/*e*/.Field("node", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                generated: !0,
                requisite: !0
            })])])
        }()
    }, c.ad_audience_create = {
        "": GraphQLMutatorConstants/*o*/.PREPEND,
        "orderby(last_updated)": GraphQLMutatorConstants/*o*/.PREPEND
    }, u.ad_audience_edit = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdAudienceEditResponsePayload", [new global/*e*/.Field("ad_audience", [new global/*e*/.Field("name"), new global/*e*/.Field("target_spec"), new global/*e*/.Field("updated"), new global/*e*/.Field("reach_estimate"), new global/*e*/.Field("targeting_sentences", null, null, null, null, null, {
                plural: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_campaign_edit = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdCampaignEditResponsePayload", [new global/*e*/.Field("ad_campaign", [new global/*e*/.Field("name"), new global/*e*/.Field("run_status_info"), new global/*e*/.Field("daily_budget"), new global/*e*/.Field("lifetime_budget"), new global/*e*/.Field("lifetime_target_spend"), new global/*e*/.Field("time_range"), new global/*e*/.Field("today_target_spend"), new global/*e*/.Field("target_spec"), new global/*e*/.Field("adgroups", [new global/*e*/.Field("edges", [new global/*e*/.Field("node", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("lifetime_target_spend"), new global/*e*/.Field("today_target_spend"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new global/*e*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new global/*e*/.Field("page_info", [new global/*e*/.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new global/*e*/.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("ad_campaign_group", [new global/*e*/.Field("run_status_info"), new global/*e*/.Field("lifetime_target_spend"), new global/*e*/.Field("today_target_spend"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_campaign_group_create = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdCampaignGroupCreateResponsePayload", [new global/*e*/.Field("ad_account_ad_campaign_groups_edge", [new global/*e*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new global/*e*/.Field("node", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                generated: !0,
                requisite: !0
            })]), new global/*e*/.Field("ad_account", [new global/*e*/.Field("currency"), new global/*e*/.Field("timezone_info"), new global/*e*/.Field("can_update_currency"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, c.ad_campaign_group_create = {
        "orderby(ad_activity_status,reverse_start_time).for_run_status(ALL_NOT_ARCHIVED_OR_DELETED)": GraphQLMutatorConstants/*o*/.PREPEND
    }, u.ad_account_enable_notification = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdAccountEnableNotificationResponsePayload", [new global/*e*/.Field("ad_account", [new global/*e*/.Field("notification_settings", [new global/*e*/.Field("settings", [new global/*e*/.Field("enabled")], null, null, null, null, {
                plural: !0
            })]), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_disable_notification = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdAccountDisableNotificationResponsePayload", [new global/*e*/.Field("ad_account", [new global/*e*/.Field("notification_settings", [new global/*e*/.Field("settings", [new global/*e*/.Field("enabled")], null, null, null, null, {
                plural: !0
            })]), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_mute_notifications = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "AdAccountMuteNotificationsResponsePayload", [new global/*e*/.Field("ad_account", [new global/*e*/.Field("notification_settings", [new global/*e*/.Field("muted_until")]), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_business_invite = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "InstagramBusinessInviteResponsePayload", [new global/*e*/.Field("instagram_business_role_set_edge", [new global/*e*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new global/*e*/.Field("node", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                generated: !0,
                requisite: !0
            })])])
        }()
    }, u.instagram_user_role_update = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "InstagramUserRoleUpdateResponsePayload", [new global/*e*/.Field("instagram_user_role", [new global/*e*/.Field("user_permission_role"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_user_role_create = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "InstagramUserRoleCreateResponsePayload", [new global/*e*/.Field("instagram_role_set_instagram_user_role", [new global/*e*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new global/*e*/.Field("node", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                generated: !0,
                requisite: !0
            })])])
        }()
    }, u.instagram_user_role_delete = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "InstagramUserRoleDeleteResponsePayload", [new global/*e*/.Field("instagram_role_set", [new global/*e*/.Field("instagram_user_roles", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_role_set_update = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "InstagramRoleSetUpdateResponsePayload", [new global/*e*/.Field("instagram_role_set", [new global/*e*/.Field("permission_role"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_role_set_delete = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "InstagramRoleSetDeleteResponsePayload", [new global/*e*/.Field("instagram_business", [new global/*e*/.Field("role_sets", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("instagram_users", [new global/*e*/.Field("edges", [new global/*e*/.Field("node", [new global/*e*/.Field("assigned_user_roles", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new global/*e*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new global/*e*/.Field("page_info", [new global/*e*/.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new global/*e*/.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_ad_account_group_role_create = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "InstagramAdAccountGroupRoleCreateResponsePayload", [new global/*e*/.Field("instagram_role_set_ad_account_group_role_edge", [new global/*e*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new global/*e*/.Field("node", [new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                generated: !0,
                requisite: !0
            })])])
        }()
    }, u.instagram_ad_account_group_role_update = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "InstagramAdAccountGroupRoleUpdateResponsePayload", [new global/*e*/.Field("instagram_ad_account_group_role", [new global/*e*/.Field("ad_account_group_permission_role"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_ad_account_group_role_delete = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "InstagramAdAccountGroupRoleDeleteResponsePayload", [new global/*e*/.Field("instagram_role_set", [new global/*e*/.Field("ad_account_group_roles", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.group_pin_story = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "GroupPinStoryResponsePayload", [new global/*e*/.Field("group", [new global/*e*/.Field("admin_aware_group", [new global/*e*/.Field("group_pinned_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("group_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("group_pinned_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("group_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.group_unpin_story = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "GroupUnpinStoryResponsePayload", [new global/*e*/.Field("group", [new global/*e*/.Field("admin_aware_group", [new global/*e*/.Field("group_pinned_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("group_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new global/*e*/.Field("group_pinned_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("group_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.group_block = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "GroupBlockResponsePayload", [new global/*e*/.Field("group", [new global/*e*/.Field("group_stories", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("group_members", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.group_remove_member = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "GroupRemoveMemberResponsePayload", [new global/*e*/.Field("group", [new global/*e*/.Field("group_members", null, null, null, null, null, {
                connection: !0
            }), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.support_dashboard_item_mark_as_read = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "SupportDashboardItemMarkAsReadResponsePayload", [new global/*e*/.Field("support_dashboard_item", [new global/*e*/.Field("is_unread"), new global/*e*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.support_dashboard_item_delete = function() {
        return function() {
            var global/*e*/ = rql/*s*/.__GraphQL;
            return new global/*e*/.QueryFragment("GraphQLMutationProperties_f0", "SupportDashboardItemDeleteResponsePayload", [new global/*e*/.Field("deleted_support_dashboard_item_id")])
        }()
    };
    var p = {
        getFatQueryForType: function(global/*e*/) {
            if (global/*e*/ in u || invariant/*a*/(0, "Must have invariant/*a*/ fat query for the mutation type %rql/*s*/. Please see https://our.intern.facebook.com/intern/dex/graphql-mutations/mutations-in-dlite/.", global/*e*/), !(global/*e*/ in l)) {
                var require/*t*/ = u[global/*e*/];
                l[global/*e*/] = require/*t*/()
            }
            return l[global/*e*/]
        },
        getRangeConfigForType: function(global/*e*/) {
            var require/*t*/ = c[global/*e*/];
            if (!require/*t*/) return {};
            for (var requireDynamic/*n*/ in require/*t*/) require/*t*/[requireDynamic/*n*/] !== GraphQLMutatorConstants/*o*/.PREPEND && require/*t*/[requireDynamic/*n*/] !== GraphQLMutatorConstants/*o*/.APPEND && invariant/*a*/(0, "range config must map to either GraphQLMutatorConstants.APPEND/PREPEND");
            return require/*t*/
        },
        __getAllRangeConfigs: function() {
            return c
        },
        setTemporaryFatQueryFactoryForType: function(global/*e*/, require/*t*/) {
            (u[global/*e*/] || l[global/*e*/]) && invariant/*a*/(0, "Cannot set temporary fat query for mutation type %rql/*s*/ which already has invariant/*a*/ fat query.", global/*e*/), u[global/*e*/] = require/*t*/
        },
        setTemporaryRangeConfigForType: function(global/*e*/, require/*t*/) {
            c[global/*e*/] && invariant/*a*/(0, "Cannot set temporary range config for mutation type %rql/*s*/ which already has invariant/*a*/ range config.", global/*e*/);
            for (var requireDynamic/*n*/ in require/*t*/) require/*t*/[requireDynamic/*n*/] !== GraphQLMutatorConstants/*o*/.PREPEND && require/*t*/[requireDynamic/*n*/] !== GraphQLMutatorConstants/*o*/.APPEND && invariant/*a*/(0, "range config must map to either GraphQLMutatorConstants.APPEND/PREPEND");
            c[global/*e*/] = require/*t*/
        }
    };
    module/*i*/.exports = p
});