__d("THPendingPostUnitView",["FBAlertManager","GroupPendingPostAction","NativeMethodsMixin","React","ReactGraphQL","StyleSheet","THFeedButton","THStoryView","View","fbt","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBAlertManager"),
        a = require/*t*/("GroupPendingPostAction"),
        s = require/*t*/("NativeMethodsMixin"),
        l = require/*t*/("React"),
        u = require/*t*/("ReactGraphQL"),
        c = require/*t*/("StyleSheet"),
        p = require/*t*/("THFeedButton"),
        d = require/*t*/("THStoryView"),
        h = require/*t*/("View"),
        f = require/*t*/("fbt"),
        m = require/*t*/("keyMirror"),
        g = m({
            undecided: null,
            accepted: null,
            ignored: null
        }),
        _ = l.createClass({
            displayName: "THPendingPostUnitView",
            propTypes: {
                story: l.PropTypes.object.isRequired,
                propertyToUpdate: l.PropTypes.number
            },
            mixins: [u.Mixin, s],
            statics: {
                queries: {
                    story: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THPendingPostUnitView_story", "Story", [new requireDynamic/*n*/.Field("id")], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THPendingPostUnitView_story"
                            })
                        }(d.getQuery("story"))
                    },
                    group: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THPendingPostUnitView_group", "Group", [new requireDynamic/*n*/.Field("id")], [require/*t*/.__frag(global/*e*/)], {
                                scope: "THPendingPostUnitView_group"
                            })
                        }(d.getQuery("group"))
                    }
                }
            },
            getInitialState: function() {
                return {
                    acceptedState: g.undecided,
                    animationID: null
                }
            },
            onAccept: function() {
                this.mutatePendingPost(g.accepted)
            },
            onIgnore: function() {
                this.mutatePendingPost(g.ignored)
            },
            mutatePendingPost: function(global/*e*/) {
                this.setState({
                    acceptedState: global/*e*/
                }), this.props.updateChangedCount(1), a.mutatePendingPost({
                    groupID: this.props.group.id,
                    storyID: this.props.story.id,
                    approved: global/*e*/ === g.accepted,
                    onFailure: this.onGraphQLFailure
                })
            },
            onGraphQLFailure: function(global/*e*/) {
                console.log("Pending post error: ", global/*e*/), this.setState({
                    acceptedState: g.undecided
                }), this.props.updateChangedCount(-1), o.alert(f({
                    type: "text",
                    texts: ["Failed to process pending post action."],
                    desc: "Error message for pending posts."
                }))
            },
            renderButtonRow: function() {
                if (this.state.acceptedState !== g.undecided) return null;
                var global/*e*/ = f({
                        type: "text",
                        texts: ["Approve"],
                        desc: "Button for an Admin to approve a pending post in a group"
                    }),
                    require/*t*/ = f({
                        type: "text",
                        texts: ["Ignore"],
                        desc: "Button for an Admin to ignore a pending post in a group"
                    });
                return l.createElement(h, {
                    style: y.buttonRow
                }, l.createElement(p, {
                    onPress: this.onAccept,
                    isPositive: !0,
                    text: global/*e*/
                }), l.createElement(p, {
                    onPress: this.onIgnore,
                    isPositive: !1,
                    text: require/*t*/
                }))
            },
            render: function() {
                return l.createElement(h, {
                    style: [v[this.state.acceptedState], y.container]
                }, l.createElement(d, {
                    story: this.props.story,
                    navigator: this.props.navigator,
                    context: this.props.context,
                    group: this.props.group
                }), this.renderButtonRow())
            }
        }),
        y = c.create({
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
    v[g.undecided] = y.visible, v[g.accepted] = y.visible, v[g.ignored] = y.washedOut, module/*i*/.exports = _
});