__d("FBQuestionAttachment",["FIGColors","React","ReactGraphQL","RouteHandler","StyleSheet","Text","TouchableHighlight","View","fbt","truncate"],function (e, t, n, r, i) {
    "use strict";
    var FIGColors/*o*/ = t("FIGColors"),
        React/*a*/ = t("React"),
        ReactGraphQL/*s*/ = t("ReactGraphQL"),
        RouteHandler/*l*/ = t("RouteHandler"),
        StyleSheet/*u*/ = t("StyleSheet"),
        Text/*c*/ = t("Text"),
        TouchableHighlight/*p*/ = t("TouchableHighlight"),
        View/*d*/ = t("View"),
        fbt/*h*/ = t("fbt"),
        truncate/*f*/ = t("truncate"),
        m = 24,
        g = React/*a*/.createClass({
            displayName: "FBQuestionAttachment",
            propTypes: {
                attachment: React/*a*/.PropTypes.object.isRequired,
                navigator: React/*a*/.PropTypes.object
            },
            mixins: [ReactGraphQL/*s*/.Mixin],
            statics: {
                queries: {
                    attachment: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("FBQuestionAttachment_attachment", "StoryAttachment", [new e.Field("target", [new e.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new e.Field("url", null, null, [new e.Callv("site", ["mobile"])]), new e.Field("options", [new e.Field("edges", [new e.Field("node", [new e.Field("text"), new e.Field("voters", [new e.Field("count")], null, null, null, null, {
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
                                plural: !0,
                                edgesID: "FBQuestionAttachment_attachment_1"
                            }), new e.Field("count"), new e.Field("page_info", [new e.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new e.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new e.Callv("first", ["5"])], null, null, {
                                connection: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, {
                                scope: "FBQuestionAttachment_attachment"
                            })
                        }()
                    }
                }
            },
            renderOption: function(e, t, n) {
                var r = 200,
                    i = e.voters.count,
                    FIGColors/*o*/ = truncate/*f*/(e.text, m, {
                        breakOnWords: !1,
                        minDelta: 0
                    });
                return React/*a*/.createElement(View/*d*/, {
                    style: _.option,
                    key: "option" + n
                }, React/*a*/.createElement(View/*d*/, {
                    style: [_.barContainer, {
                        width: r
                    }]
                }, React/*a*/.createElement(View/*d*/, {
                    style: [_.bar, {
                        width: .7 * r * i / t
                    }]
                }), React/*a*/.createElement(Text/*c*/, {
                    style: _.text
                }, FIGColors/*o*/)), React/*a*/.createElement(View/*d*/, {
                    style: [_.barContainer, _.countBox]
                }, React/*a*/.createElement(Text/*c*/, {
                    style: _.countText
                }, "+" + i)))
            },
            renderOptions: function() {
                var e = this.props.attachment.target.options.edges,
                    t = 0;
                return e.map(function(e) {
                    e.node.voters.count > t && (t = e.node.voters.count)
                }), e.map(function(e, n) {
                    return this.renderOption(e.node, t, n)
                }.bind(this))
            },
            renderViewMoreButton: function() {
                return this.props.attachment.target.options.count > 5 ? React/*a*/.createElement(View/*d*/, {
                    style: _.viewMore
                }, React/*a*/.createElement(Text/*c*/, null, fbt/*h*/({
                    type: "text",
                    texts: ["View More..."],
                    desc: "Button to view more options to React/*a*/ poll in React/*a*/ group"
                }))) : null
            },
            render: function() {
                var e = this.props.attachment.target;
                return e && e.options ? React/*a*/.createElement(TouchableHighlight/*p*/, {
                    onPress: RouteHandler/*l*/.getCallback({
                        typeList: ["URL"],
                        params: {
                            url: e.url,
                            navigator: this.props.navigator
                        }
                    })
                }, React/*a*/.createElement(View/*d*/, {
                    style: _.container
                }, this.renderOptions(), this.renderViewMoreButton())) : (console.error("Tried to render an FBQuestionAttachment without React/*a*/ target or options!"), React/*a*/.createElement(View/*d*/, null))
            }
        }),
        _ = StyleSheet/*u*/.create({
            container: {
                backgroundColor: "#ffffff",
                alignItems: "center"
            },
            option: {
                alignItems: "center",
                flexDirection: "row",
                marginVertical: 5
            },
            barContainer: {
                justifyContent: "center",
                paddingLeft: 5,
                marginRight: 5,
                height: 34,
                borderWidth: .5,
                borderColor: "#cccccc",
                borderRadius: 2
            },
            bar: {
                position: "absolute",
                left: 0,
                top: 0,
                height: 33,
                backgroundColor: "#eeeeee"
            },
            text: {
                containerBackgroundColor: "transparent",
                fontSize: 14,
                fontWeight: "bold"
            },
            countBox: {
                backgroundColor: "#eeeeee",
                width: 34,
                alignItems: "center",
                paddingLeft: 0
            },
            countText: {
                fontSize: 13,
                color: FIGColors/*o*/.mediumText
            },
            viewMore: {
                marginTop: 6
            }
        });
    i.exports = g
});