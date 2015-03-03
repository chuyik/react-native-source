__d("THPendingPostUnitView",["FBAlertManager","GroupPendingPostAction","NativeMethodsMixin","React","ReactGraphQL","StyleSheet","THFeedButton","THStoryView","View","fbt","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBAlertManager"),
        exports/*a*/ = require/*t*/("GroupPendingPostAction"),
        FBAlertManager/*s*/ = require/*t*/("NativeMethodsMixin"),
        GroupPendingPostAction/*l*/ = require/*t*/("React"),
        NativeMethodsMixin/*u*/ = require/*t*/("ReactGraphQL"),
        React/*c*/ = require/*t*/("StyleSheet"),
        ReactGraphQL/*p*/ = require/*t*/("THFeedButton"),
        StyleSheet/*d*/ = require/*t*/("THStoryView"),
        THFeedButton/*h*/ = require/*t*/("View"),
        THStoryView/*f*/ = require/*t*/("fbt"),
        View/*m*/ = require/*t*/("keyMirror"),
        fbt/*g*/ = View/*m*/({
            undecided: null,
            keyMirror/*accepted*/: null,
            ignored: null
        }),
        _ = GroupPendingPostAction/*l*/.createClass({
            displayName: "THPendingPostUnitView",
            propTypes: {
                story: GroupPendingPostAction/*l*/.PropTypes.object.isRequired,
                propertyToUpdate: GroupPendingPostAction/*l*/.PropTypes.number
            },
            mixins: [NativeMethodsMixin/*u*/.Mixin, FBAlertManager/*s*/],
            statics: {
                queries: {
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THPendingPostUnitView_story", "Story", [new requireDynamic/*n*/.Field("id")], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THPendingPostUnitView_story"
                            })
                        }(StyleSheet/*d*/.getQuery("story"))
                    },
                    group: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THPendingPostUnitView_group", "Group", [new requireDynamic/*n*/.Field("id")], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THPendingPostUnitView_group"
                            })
                        }(StyleSheet/*d*/.getQuery("group"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    acceptedState: fbt/*g*/.undecided,
                    animationID: null
                }
            },
            onAccept: function() {
                this.mutatePendingPost(fbt/*g*/.keyMirror/*accepted*/)
            },
            onIgnore: function() {
                this.mutatePendingPost(fbt/*g*/.ignored)
            },
            mutatePendingPost: function(global/*e*/) {
                this.setState({
                    acceptedState: global/*e*/
                }), this.props.updateChangedCount(1), exports/*a*/.mutatePendingPost({
                    groupID: this.props.group.id,
                    storyID: this.props.story.id,
                    approved: global/*e*/ === fbt/*g*/.keyMirror/*accepted*/,
                    onFailure: this.onGraphQLFailure
                })
            },
            onGraphQLFailure: function(global/*e*/) {
                console.log("Pending post error: ", global/*e*/), this.setState({
                    acceptedState: fbt/*g*/.undecided
                }), this.props.updateChangedCount(-1), o.alert(THStoryView/*f*/({
                    type: "text",
                    texts: ["Failed to process pending post action."],
                    desc: "Error message for pending posts."
                }))
            },
            renderButtonRow: function() {
                if (this.state.acceptedState !== fbt/*g*/.undecided) return null;
                var global/*e*/ = THStoryView/*f*/({
                        type: "text",
                        texts: ["Approve"],
                        desc: "Button for an Admin to approve exports/*a*/ pending post in exports/*a*/ group"
                    }),
                    require/*t*/ = THStoryView/*f*/({
                        type: "text",
                        texts: ["Ignore"],
                        desc: "Button for an Admin to ignore exports/*a*/ pending post in exports/*a*/ group"
                    });
                return GroupPendingPostAction/*l*/.createElement(THFeedButton/*h*/, {
                    style: y.buttonRow
                }, GroupPendingPostAction/*l*/.createElement(ReactGraphQL/*p*/, {
                    onPress: this.onAccept,
                    isPositive: !0,
                    text: global/*e*/
                }), GroupPendingPostAction/*l*/.createElement(ReactGraphQL/*p*/, {
                    onPress: this.onIgnore,
                    isPositive: !1,
                    text: require/*t*/
                }))
            },
            render: function() {
                return GroupPendingPostAction/*l*/.createElement(THFeedButton/*h*/, {
                    style: [v[this.state.acceptedState], y.container]
                }, GroupPendingPostAction/*l*/.createElement(StyleSheet/*d*/, {
                    story: this.props.story,
                    navigator: this.props.navigator,
                    context: this.props.context,
                    group: this.props.group
                }), this.renderButtonRow())
            }
        }),
        y = React/*c*/.create({
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
        v = {};
    v[fbt/*g*/.undecided] = y.visible, v[fbt/*g*/.keyMirror/*accepted*/] = y.visible, v[fbt/*g*/.ignored] = y.washedOut, module/*i*/.exports = _
});