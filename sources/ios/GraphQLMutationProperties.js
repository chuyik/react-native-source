__d("GraphQLMutationProperties",["GraphQLMutatorConstants","invariant","rql"],function (e, t, n, r, i) {
    "use strict";
    var GraphQLMutatorConstants/*o*/ = t("GraphQLMutatorConstants"),
        invariant/*a*/ = t("invariant"),
        rql/*s*/ = t("rql"),
        l = {},
        u = {},
        c = {};
    u.actor_subscribe = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "ActorSubscribeResponsePayload", [new e.Field("subscribee", [new e.Field("subscribers", null, null, null, null, null, {
                connection: !0
            }), new e.Field("subscribe_status"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.actor_unsubscribe = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "ActorUnsubscribeResponsePayload", [new e.Field("unsubscribee", [new e.Field("subscribers", null, null, null, null, null, {
                connection: !0
            }), new e.Field("subscribe_status"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.comment_create = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "CommentCreateResponsePayload", [new e.Field("feedback", [new e.Field("comments", null, null, null, null, null, {
                connection: !0
            }), new e.Field("top_level_comments", null, null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("comment", [new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("feedback_comment_edge", [new e.Field("cursor", null, null, null, null, null, {
                requisite: !0
            }), new e.Field("node", [new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new e.Field("source", [new e.Field("id", null, null, null, null, null, {
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
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "UndirectedStoryCreateResponsePayload", [new e.Field("story", [new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("feed_story_edge", [new e.Field("cursor", null, null, null, null, null, {
                requisite: !0
            }), new e.Field("node", null, null, null, null, null, {
                requisite: !0
            }), new e.Field("source")])])
        }()
    }, c.undirected_story_create = {
        "environment(tablet_site)": GraphQLMutatorConstants/*o*/.PREPEND
    }, u.story_delete = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "StoryDeleteResponsePayload", [new e.Field("deleted_story_id")])
        }()
    }, u.comment_delete = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "CommentDeleteResponsePayload", [new e.Field("feedback", [new e.Field("comments", null, null, null, null, null, {
                connection: !0
            }), new e.Field("top_level_comments", null, null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.comment_edit = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "CommentEditResponsePayload", [new e.Field("comment", [new e.Field("body"), new e.Field("edit_history", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("attachments", null, null, null, null, null, {
                plural: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.feedback_like = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "FeedbackLikeResponsePayload", [new e.Field("feedback", [new e.Field("does_viewer_like"), new e.Field("likers", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("like_sentence"), new e.Field("viewer_likes_sentence"), new e.Field("viewer_does_not_like_sentence"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.feedback_unlike = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "FeedbackUnlikeResponsePayload", [new e.Field("feedback", [new e.Field("does_viewer_like"), new e.Field("likers", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("like_sentence"), new e.Field("viewer_likes_sentence"), new e.Field("viewer_does_not_like_sentence"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.friend_remove = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "FriendRemoveResponsePayload", [new e.Field("unfriended_user", [new e.Field("friends", null, null, null, null, null, {
                connection: !0
            }), new e.Field("friendship_status"), new e.Field("subscribe_status"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.viewer_friend_requests_mark_all_seen = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "ViewerFriendRequestsMarkAllSeenResponsePayload", [new e.Field("viewer", [new e.Field("friending_possibilities", [new e.Field("unseen_count")], null, null, null, null, {
                connection: !0
            })])])
        }()
    }, u.friend_request_accept = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "FriendRequestAcceptResponsePayload", [new e.Field("viewer", [new e.Field("friending_possibilities", null, null, null, null, null, {
                connection: !0
            })]), new e.Field("friend_requester", [new e.Field("friends", null, null, null, null, null, {
                connection: !0
            }), new e.Field("friendship_status"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.friend_request_cancel = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "FriendRequestCancelResponsePayload", [new e.Field("cancelled_friend_requestee", [new e.Field("friendship_status"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.friend_request_delete = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "FriendRequestDeleteResponsePayload", [new e.Field("friend_requester", [new e.Field("friendship_status"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.friend_request_send = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "FriendRequestSendResponsePayload", [new e.Field("friend_requestees", [new e.Field("friendship_status"), new e.Field("id", null, null, null, null, null, {
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
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "GroupRequestToJoinResponsePayload", [new e.Field("group", [new e.Field("group_members", null, null, null, null, null, {
                connection: !0
            }), new e.Field("viewer_join_state"), new e.Field("viewer_subscription_level"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.group_leave = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "GroupLeaveResponsePayload", [new e.Field("group", [new e.Field("group_members", null, null, null, null, null, {
                connection: !0
            }), new e.Field("viewer_join_state"), new e.Field("viewer_subscription_level"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.viewer_messages_mark_all_seen = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "ViewerMessagesMarkAllSeenResponsePayload", [new e.Field("viewer", [new e.Field("message_threads", [new e.Field("unseen_count")], null, null, null, null, {
                connection: !0
            })])])
        }()
    }, u.message_thread_update_read_state = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "MessageThreadUpdateReadStateResponsePayload", [new e.Field("thread", [new e.Field("messages", [new e.Field("unread_count")], null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("viewer", [new e.Field("message_threads", [new e.Field("unseen_count")], null, null, null, null, {
                connection: !0
            })])])
        }()
    }, u.notification_story_mark_read = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "NotificationStoryMarkReadResponsePayload", [new e.Field("story", [new e.Field("seen_state"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.viewer_notifications_update_all_seen_state = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "ViewerNotificationsUpdateAllSeenStateResponsePayload", [new e.Field("viewer", [new e.Field("notification_stories", [new e.Field("unseen_count")], null, null, null, null, {
                connection: !0,
                nonFindable: !0
            })]), new e.Field("stories", [new e.Field("seen_state"), new e.Field("id", null, null, null, null, null, {
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
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "FeedbackSubscribeResponsePayload", [new e.Field("feedback", [new e.Field("can_viewer_subscribe"), new e.Field("is_viewer_subscribed"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.feedback_unsubscribe = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "FeedbackUnsubscribeResponsePayload", [new e.Field("feedback", [new e.Field("can_viewer_subscribe"), new e.Field("is_viewer_subscribed"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.message_send = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "MessageSendResponsePayload", [new e.Field("thread", [new e.Field("messages", null, null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("message", [new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("thread_message_edge", [new e.Field("cursor", null, null, null, null, null, {
                requisite: !0
            }), new e.Field("node", [new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new e.Field("source", [new e.Field("id", null, null, null, null, null, {
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
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "PageLikeResponsePayload", [new e.Field("page", [new e.Field("does_viewer_like"), new e.Field("page_likers", null, null, null, null, null, {
                connection: !0
            }), new e.Field("subscribe_status"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.page_unlike = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "PageUnlikeResponsePayload", [new e.Field("page", [new e.Field("does_viewer_like"), new e.Field("page_likers", null, null, null, null, null, {
                connection: !0
            }), new e.Field("subscribe_status"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.event_rsvp = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "EventRsvpResponsePayload", [new e.Field("event", [new e.Field("can_view_members"), new e.Field("can_viewer_invite"), new e.Field("can_viewer_join"), new e.Field("can_viewer_post"), new e.Field("can_viewer_share"), new e.Field("event_declines", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("event_decline_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("event_invitees", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("event_maybes", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("event_members", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("event_viewer_capability"), new e.Field("viewer_guest_status"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.event_invite = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "EventInviteResponsePayload", [new e.Field("event", [new e.Field("event_invitees", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("invitee_candidates", null, null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.event_remove = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "EventRemoveResponsePayload", [new e.Field("event", [new e.Field("can_view_members"), new e.Field("can_viewer_invite"), new e.Field("can_viewer_join"), new e.Field("can_viewer_post"), new e.Field("can_viewer_share"), new e.Field("event_declines", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("event_decline_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("event_invitees", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("event_maybes", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("event_members", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("event_viewer_capability"), new e.Field("viewer_guest_status"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.story_take_negative_action = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "StoryTakeNegativeActionResponsePayload", [new e.Field("negative_feedback_action", [new e.Field("already_completed"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.story_undo_negative_action = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "StoryUndoNegativeActionResponsePayload", [new e.Field("negative_feedback_action", [new e.Field("already_completed"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_select_mobile_preference = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdAccountSelectMobilePreferenceResponsePayload", [new e.Field("viewer", [new e.Field("ad_accounts", null, null, null, null, null, {
                connection: !0
            })])])
        }()
    }, u.ad_campaign_pause = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdCampaignPauseResponsePayload", [new e.Field("ad_campaign_group", [new e.Field("run_status_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("ad_campaign", [new e.Field("run_status_info"), new e.Field("adgroups", [new e.Field("edges", [new e.Field("node", [new e.Field("run_status_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new e.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new e.Field("page_info", [new e.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new e.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_campaign_activate = u.ad_campaign_pause, u.ad_campaign_group_pause = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdCampaignGroupPauseResponsePayload", [new e.Field("ad_campaign_group", [new e.Field("run_status_info"), new e.Field("ad_campaigns", [new e.Field("edges", [new e.Field("node", [new e.Field("run_status_info"), new e.Field("adgroups", [new e.Field("edges", [new e.Field("node", [new e.Field("run_status_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new e.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new e.Field("page_info", [new e.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new e.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new e.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new e.Field("page_info", [new e.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new e.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_campaign_group_activate = u.ad_campaign_group_pause, u.ad_campaign_group_edit = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdCampaignGroupEditResponsePayload", [new e.Field("ad_campaign_group", [new e.Field("name"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.adgroup_pause = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdgroupPauseResponsePayload", [new e.Field("ad_campaign_group", [new e.Field("run_status_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("ad_campaign", [new e.Field("run_status_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("adgroup", [new e.Field("run_status_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.adgroup_activate = u.adgroup_pause, u.adgroup_edit = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdgroupEditResponsePayload", [new e.Field("adgroup", [new e.Field("name"), new e.Field("preview_image"), new e.Field("creative", [new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("run_status_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("ad_campaign", [new e.Field("run_status_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("ad_campaign_group", [new e.Field("run_status_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_edit_spend_limit = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdAccountEditSpendLimitResponsePayload", [new e.Field("ad_account", [new e.Field("spend_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_remove_spend_limit = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdAccountRemoveSpendLimitResponsePayload", [new e.Field("ad_account", [new e.Field("spend_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_reset_spend_limit = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdAccountResetSpendLimitResponsePayload", [new e.Field("ad_account", [new e.Field("spend_info"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_notifications_update_seen_state = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdAccountNotificationsUpdateSeenStateResponsePayload", [new e.Field("ad_account", [new e.Field("adalerts_and_tips", [new e.Field("unseen_count")], null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("stories", [new e.Field("seen_state"), new e.Field("id", null, null, null, null, null, {
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
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdAudienceCreateResponsePayload", [new e.Field("ad_account_ad_audiences_edge", [new e.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new e.Field("node", [new e.Field("id", null, null, null, null, null, {
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
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdAudienceEditResponsePayload", [new e.Field("ad_audience", [new e.Field("name"), new e.Field("target_spec"), new e.Field("updated"), new e.Field("reach_estimate"), new e.Field("targeting_sentences", null, null, null, null, null, {
                plural: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_campaign_edit = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdCampaignEditResponsePayload", [new e.Field("ad_campaign", [new e.Field("name"), new e.Field("run_status_info"), new e.Field("daily_budget"), new e.Field("lifetime_budget"), new e.Field("lifetime_target_spend"), new e.Field("time_range"), new e.Field("today_target_spend"), new e.Field("target_spec"), new e.Field("adgroups", [new e.Field("edges", [new e.Field("node", [new e.Field("run_status_info"), new e.Field("lifetime_target_spend"), new e.Field("today_target_spend"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new e.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new e.Field("page_info", [new e.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new e.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("ad_campaign_group", [new e.Field("run_status_info"), new e.Field("lifetime_target_spend"), new e.Field("today_target_spend"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_campaign_group_create = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdCampaignGroupCreateResponsePayload", [new e.Field("ad_account_ad_campaign_groups_edge", [new e.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new e.Field("node", [new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                generated: !0,
                requisite: !0
            })]), new e.Field("ad_account", [new e.Field("currency"), new e.Field("timezone_info"), new e.Field("can_update_currency"), new e.Field("id", null, null, null, null, null, {
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
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdAccountEnableNotificationResponsePayload", [new e.Field("ad_account", [new e.Field("notification_settings", [new e.Field("settings", [new e.Field("enabled")], null, null, null, null, {
                plural: !0
            })]), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_disable_notification = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdAccountDisableNotificationResponsePayload", [new e.Field("ad_account", [new e.Field("notification_settings", [new e.Field("settings", [new e.Field("enabled")], null, null, null, null, {
                plural: !0
            })]), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.ad_account_mute_notifications = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "AdAccountMuteNotificationsResponsePayload", [new e.Field("ad_account", [new e.Field("notification_settings", [new e.Field("muted_until")]), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_business_invite = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "InstagramBusinessInviteResponsePayload", [new e.Field("instagram_business_role_set_edge", [new e.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new e.Field("node", [new e.Field("id", null, null, null, null, null, {
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
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "InstagramUserRoleUpdateResponsePayload", [new e.Field("instagram_user_role", [new e.Field("user_permission_role"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_user_role_create = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "InstagramUserRoleCreateResponsePayload", [new e.Field("instagram_role_set_instagram_user_role", [new e.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new e.Field("node", [new e.Field("id", null, null, null, null, null, {
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
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "InstagramUserRoleDeleteResponsePayload", [new e.Field("instagram_role_set", [new e.Field("instagram_user_roles", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_role_set_update = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "InstagramRoleSetUpdateResponsePayload", [new e.Field("instagram_role_set", [new e.Field("permission_role"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_role_set_delete = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "InstagramRoleSetDeleteResponsePayload", [new e.Field("instagram_business", [new e.Field("role_sets", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("instagram_users", [new e.Field("edges", [new e.Field("node", [new e.Field("assigned_user_roles", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new e.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new e.Field("page_info", [new e.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new e.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_ad_account_group_role_create = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "InstagramAdAccountGroupRoleCreateResponsePayload", [new e.Field("instagram_role_set_ad_account_group_role_edge", [new e.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new e.Field("node", [new e.Field("id", null, null, null, null, null, {
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
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "InstagramAdAccountGroupRoleUpdateResponsePayload", [new e.Field("instagram_ad_account_group_role", [new e.Field("ad_account_group_permission_role"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.instagram_ad_account_group_role_delete = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "InstagramAdAccountGroupRoleDeleteResponsePayload", [new e.Field("instagram_role_set", [new e.Field("ad_account_group_roles", null, null, null, null, null, {
                connection: !0,
                nonFindable: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.group_pin_story = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "GroupPinStoryResponsePayload", [new e.Field("group", [new e.Field("admin_aware_group", [new e.Field("group_pinned_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("group_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("group_pinned_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("group_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.group_unpin_story = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "GroupUnpinStoryResponsePayload", [new e.Field("group", [new e.Field("admin_aware_group", [new e.Field("group_pinned_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("group_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new e.Field("group_pinned_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("group_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.group_block = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "GroupBlockResponsePayload", [new e.Field("group", [new e.Field("group_stories", null, null, null, null, null, {
                connection: !0
            }), new e.Field("group_members", null, null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.group_remove_member = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "GroupRemoveMemberResponsePayload", [new e.Field("group", [new e.Field("group_members", null, null, null, null, null, {
                connection: !0
            }), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.support_dashboard_item_mark_as_read = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "SupportDashboardItemMarkAsReadResponsePayload", [new e.Field("support_dashboard_item", [new e.Field("is_unread"), new e.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })])
        }()
    }, u.support_dashboard_item_delete = function() {
        return function() {
            var e = rql/*s*/.__GraphQL;
            return new e.QueryFragment("GraphQLMutationProperties_f0", "SupportDashboardItemDeleteResponsePayload", [new e.Field("deleted_support_dashboard_item_id")])
        }()
    };
    var p = {
        getFatQueryForType: function(e) {
            if (e in u || invariant/*a*/(0, "Must have invariant/*a*/ fat query for the mutation type %rql/*s*/. Please see https://our.intern.facebook.com/intern/dex/graphql-mutations/mutations-in-dlite/.", e), !(e in l)) {
                var t = u[e];
                l[e] = t()
            }
            return l[e]
        },
        getRangeConfigForType: function(e) {
            var t = c[e];
            if (!t) return {};
            for (var n in t) t[n] !== GraphQLMutatorConstants/*o*/.PREPEND && t[n] !== GraphQLMutatorConstants/*o*/.APPEND && invariant/*a*/(0, "range config must map to either GraphQLMutatorConstants.APPEND/PREPEND");
            return t
        },
        __getAllRangeConfigs: function() {
            return c
        },
        setTemporaryFatQueryFactoryForType: function(e, t) {
            (u[e] || l[e]) && invariant/*a*/(0, "Cannot set temporary fat query for mutation type %rql/*s*/ which already has invariant/*a*/ fat query.", e), u[e] = t
        },
        setTemporaryRangeConfigForType: function(e, t) {
            c[e] && invariant/*a*/(0, "Cannot set temporary range config for mutation type %rql/*s*/ which already has invariant/*a*/ range config.", e);
            for (var n in t) t[n] !== GraphQLMutatorConstants/*o*/.PREPEND && t[n] !== GraphQLMutatorConstants/*o*/.APPEND && invariant/*a*/(0, "range config must map to either GraphQLMutatorConstants.APPEND/PREPEND");
            c[e] = t
        }
    };
    i.exports = p
});