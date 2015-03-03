__d("THReportedPostUnitView",["GroupReportedPostAction","NativeMethodsMixin","NativeModules","React","ReactGraphQL","FBAlertManager","StyleSheet","THFeedButton","THStoryView","View","fbt"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GroupReportedPostAction"),
        exports/*a*/ = require/*t*/("NativeMethodsMixin"),
        GroupReportedPostAction/*s*/ = require/*t*/("NativeModules"),
        NativeMethodsMixin/*l*/ = require/*t*/("React"),
        NativeModules/*u*/ = require/*t*/("ReactGraphQL"),
        React/*c*/ = require/*t*/("FBAlertManager"),
        ReactGraphQL/*p*/ = require/*t*/("StyleSheet"),
        FBAlertManager/*d*/ = require/*t*/("THFeedButton"),
        StyleSheet/*h*/ = require/*t*/("THStoryView"),
        THFeedButton/*f*/ = require/*t*/("View"),
        THStoryView/*m*/ = require/*t*/("fbt"),
        View/*g*/ = GroupReportedPostAction/*s*/.RKTreehouseManager,
        fbt/*_*/ = o.Actions,
        y = NativeMethodsMixin/*l*/.createClass({
            displayName: "THReportedPostUnitView",
            propTypes: {
                story: NativeMethodsMixin/*l*/.PropTypes.object.isRequired,
                propertyToUpdate: NativeMethodsMixin/*l*/.PropTypes.number
            },
            mixins: [NativeModules/*u*/.Mixin, exports/*a*/],
            statics: {
                queries: {
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THReportedPostUnitView_story", "Story", [new requireDynamic/*n*/.Field("id")], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THReportedPostUnitView_story"
                            })
                        }(StyleSheet/*h*/.getQuery("story"))
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
                    reviewState: fbt/*_*/.Undecided,
                    animationID: null
                }
            },
            onRemove: function() {
                this.mutateReportedPost(fbt/*_*/.Remove)
            },
            onRemoveAndBan: function() {
                this.mutateReportedPost(fbt/*_*/.RemoveAndBan)
            },
            onIgnore: function() {
                this.mutateReportedPost(fbt/*_*/.Ignore)
            },
            onFailure: function(global/*e*/) {
                console.error("error: ", global/*e*/), this.setState({
                    reviewState: fbt/*_*/.Undecided
                }), this.props.updateChangedCount(-1), React/*c*/.alert(THStoryView/*m*/({
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
                View/*g*/ && View/*g*/.updateGroupInfoProperty(this.props.group.id, this.props.propertyToUpdate, this.props.group.reported_stories.count - this.state.numberOfStoriesModified)
            },
            showUnimplemented: function() {
                React/*c*/.alert("This is not yet implemented. (T4771117)")
            },
            renderButtonRow: function() {
                if (this.state.reviewState !== fbt/*_*/.Undecided) return null;
                var global/*e*/ = THStoryView/*m*/({
                        type: "text",
                        texts: ["Remove"],
                        desc: "Button for an Admin to remove exports/*a*/ reported post in exports/*a*/ group"
                    }),
                    require/*t*/ = THStoryView/*m*/({
                        type: "text",
                        texts: ["Remove & Block"],
                        desc: "Button for an Admin to remove exports/*a*/ reported post in exports/*a*/ group and ban the user"
                    }),
                    requireDynamic/*n*/ = THStoryView/*m*/({
                        type: "text",
                        texts: ["Ignore"],
                        desc: "Button for an Admin to ignore exports/*a*/ reported post in exports/*a*/ group"
                    });
                return NativeMethodsMixin/*l*/.createElement(THFeedButton/*f*/, {
                    style: v.buttonRow
                }, NativeMethodsMixin/*l*/.createElement(FBAlertManager/*d*/, {
                    onPress: this.onRemove,
                    isPositive: !0,
                    text: global/*e*/
                }), NativeMethodsMixin/*l*/.createElement(FBAlertManager/*d*/, {
                    onPress: this.onRemoveAndBan,
                    isPositive: !0,
                    text: require/*t*/
                }), NativeMethodsMixin/*l*/.createElement(FBAlertManager/*d*/, {
                    onPress: this.onIgnore,
                    isPositive: !1,
                    text: requireDynamic/*n*/
                }))
            },
            render: function() {
                return NativeMethodsMixin/*l*/.createElement(THFeedButton/*f*/, {
                    style: [S[this.state.reviewState], v.container]
                }, NativeMethodsMixin/*l*/.createElement(StyleSheet/*h*/, {
                    story: this.props.story,
                    navigator: this.props.navigator,
                    context: this.props.context
                }), this.renderButtonRow())
            }
        }),
        v = ReactGraphQL/*p*/.create({
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
    S[fbt/*_*/.Undecided] = v.visible, S[fbt/*_*/.Remove] = v.washedOut, S[fbt/*_*/.RemoveAndBan] = v.washedOut, S[fbt/*_*/.Ignore] = v.visible, module/*i*/.exports = y
});