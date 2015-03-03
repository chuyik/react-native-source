__d("THReportedPostUnitView",["GroupReportedPostAction","NativeMethodsMixin","NativeModules","React","ReactGraphQL","FBAlertManager","StyleSheet","THFeedButton","THStoryView","View","fbt"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GroupReportedPostAction"),
        a = require/*t*/("NativeMethodsMixin"),
        s = require/*t*/("NativeModules"),
        l = require/*t*/("React"),
        u = require/*t*/("ReactGraphQL"),
        c = require/*t*/("FBAlertManager"),
        p = require/*t*/("StyleSheet"),
        d = require/*t*/("THFeedButton"),
        h = require/*t*/("THStoryView"),
        f = require/*t*/("View"),
        m = require/*t*/("fbt"),
        g = s.RKTreehouseManager,
        _ = o.Actions,
        y = l.createClass({
            displayName: "THReportedPostUnitView",
            propTypes: {
                story: l.PropTypes.object.isRequired,
                propertyToUpdate: l.PropTypes.number
            },
            mixins: [u.Mixin, a],
            statics: {
                queries: {
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THReportedPostUnitView_story", "Story", [new requireDynamic/*n*/.Field("id")], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THReportedPostUnitView_story"
                            })
                        }(h.getQuery("story"))
                    },
                    group: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("THReportedPostUnitView_group", "Group", [new global/*e*/.Field("id"), new global/*e*/.Field("group_reported_stories", [new global/*e*/.Field("count")], null, null, "reported_stories", null, {
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
            onFailure: function(global/*e*/) {
                console.error("error: ", global/*e*/), this.setState({
                    reviewState: _.Undecided
                }), this.props.updateChangedCount(-1), c.alert(m({
                    type: "text",
                    texts: ["Failed to process reported post action."],
                    desc: "Error message for pending posts."
                }))
            },
            mutateReportedPost: function(global/*e*/) {
                this.setState({
                    reviewState: global/*e*/
                }), this.props.updateChangedCount(1), o.mutateReportedPost({
                    groupID: this.props.group.id,
                    storyID: this.props.story.id,
                    action: global/*e*/,
                    onFailure: this.onFailure
                })
            },
            updateNativeProperties: function() {
                g && g.updateGroupInfoProperty(this.props.group.id, this.props.propertyToUpdate, this.props.group.reported_stories.count - this.state.numberOfStoriesModified)
            },
            showUnimplemented: function() {
                c.alert("This is not yet implemented. (T4771117)")
            },
            renderButtonRow: function() {
                if (this.state.reviewState !== _.Undecided) return null;
                var global/*e*/ = m({
                        type: "text",
                        texts: ["Remove"],
                        desc: "Button for an Admin to remove a reported post in a group"
                    }),
                    require/*t*/ = m({
                        type: "text",
                        texts: ["Remove & Block"],
                        desc: "Button for an Admin to remove a reported post in a group and ban the user"
                    }),
                    requireDynamic/*n*/ = m({
                        type: "text",
                        texts: ["Ignore"],
                        desc: "Button for an Admin to ignore a reported post in a group"
                    });
                return l.createElement(f, {
                    style: v.buttonRow
                }, l.createElement(d, {
                    onPress: this.onRemove,
                    isPositive: !0,
                    text: global/*e*/
                }), l.createElement(d, {
                    onPress: this.onRemoveAndBan,
                    isPositive: !0,
                    text: require/*t*/
                }), l.createElement(d, {
                    onPress: this.onIgnore,
                    isPositive: !1,
                    text: requireDynamic/*n*/
                }))
            },
            render: function() {
                return l.createElement(f, {
                    style: [S[this.state.reviewState], v.container]
                }, l.createElement(h, {
                    story: this.props.story,
                    navigator: this.props.navigator,
                    context: this.props.context
                }), this.renderButtonRow())
            }
        }),
        v = p.create({
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
    S[_.Undecided] = v.visible, S[_.Remove] = v.washedOut, S[_.RemoveAndBan] = v.washedOut, S[_.Ignore] = v.visible, module/*i*/.exports = y
});