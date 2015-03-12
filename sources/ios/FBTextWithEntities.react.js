__d("FBTextWithEntities.react",["BaseTextWithEntities.react","FBTextEntity","FIGColors","React","ReactGraphQL","StyleSheet","Text.react","fbt","findSplitPointForText","partitionTextAndRanges"],function (e, t, n, r, i) {
    "use strict";
    var o = t("BaseTextWithEntities.react"),
        FBTextEntity/*a*/ = t("FBTextEntity"),
        FIGColors/*s*/ = t("FIGColors"),
        React/*l*/ = t("React"),
        ReactGraphQL/*u*/ = t("ReactGraphQL"),
        StyleSheet/*c*/ = t("StyleSheet"),
        p = t("Text.react"),
        fbt/*d*/ = t("fbt"),
        findSplitPointForText/*h*/ = t("findSplitPointForText"),
        partitionTextAndRanges/*f*/ = t("partitionTextAndRanges"),
        m = .8,
        g = React/*l*/.createClass({
            displayName: "FBTextWithEntities",
            mixins: [ReactGraphQL/*u*/.Mixin],
            propTypes: {
                shouldTruncate: React/*l*/.PropTypes.bool,
                seeMoreStyle: p.stylePropType,
                maxLength: React/*l*/.PropTypes.number,
                maxLines: React/*l*/.PropTypes.number,
                TextEntityComponent: React/*l*/.PropTypes.func
            },
            statics: {
                queries: {
                    text: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("FBTextWithEntities_text", "TextWithEntities", [new e.Field("text"), new e.Field("ranges", [new e.Field("__type__", [new e.Field("name"), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new e.Field("entity", [new e.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new e.Field("name"), new e.Field("url", null, null, [new e.Callv("site", ["mobile"])]), new e.Field("__type__", [new e.Field("name"), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new e.Field("offset"), new e.Field("length")], null, null, null, null, {
                                plural: !0
                            })], null, {
                                scope: "FBTextWithEntities_text"
                            })
                        }()
                    }
                }
            },
            getInitialState: function() {
                return {
                    isCollapsed: !0
                }
            },
            getDefaultProps: function() {
                return {
                    shouldTruncate: !1,
                    maxLength: 250,
                    maxLines: 10
                }
            },
            _renderText: function(e) {
                return React/*l*/.createElement(p, {
                    style: this.props.textStyle
                }, e)
            },
            _renderRange: function(e, t) {
                if (e && t.entity) {
                    var n = this.props.TextEntityComponent || FBTextEntity/*a*/;
                    return React/*l*/.createElement(n, {
                        entity: t.entity,
                        text: e,
                        textStyle: this.props.textStyle
                    })
                }
                return React/*l*/.createElement(p, {
                    style: this.props.textStyle
                }, e)
            },
            onPressSeeMore: function() {
                this.setState({
                    isCollapsed: !1
                })
            },
            _renderTruncated: function() {
                var e = this.props.text,
                    t = null;
                if (this.state.isCollapsed) {
                    var n = this.props.maxLength,
                        r = this.props.maxLines;
                    if (n && e.text.length > n && (n = Math.floor(n * m)), t = findSplitPointForText/*h*/(e.text, n, r), null !== t) {
                        var i = partitionTextAndRanges/*f*/(e.text, e.ranges, t);
                        e = i.before
                    }
                }
                var FBTextEntity/*a*/ = React/*l*/.createElement(o, {
                    textRenderer: this._renderText,
                    rangeRenderer: this._renderRange,
                    text: e.text,
                    ranges: e.ranges
                });
                if (t) {
                    var FIGColors/*s*/ = ["... ", React/*l*/.createElement(p, {
                        key: "continue",
                        style: [_.seeMore, this.props.seeMoreStyle]
                    }, fbt/*d*/({
                        type: "text",
                        texts: ["See More"],
                        desc: "Link to view more of this content"
                    }))];
                    return React/*l*/.createElement(p, {
                        style: this.props.textStyle,
                        onPress: this.onPressSeeMore,
                        suppressHighlighting: !0
                    }, FBTextEntity/*a*/, FIGColors/*s*/)
                }
                return React/*l*/.createElement(p, {
                    style: this.props.textStyle
                }, FBTextEntity/*a*/)
            },
            render: function() {
                if (this.props.shouldTruncate) return this._renderTruncated();
                var e = this.props.text;
                return React/*l*/.createElement(o, {
                    textRenderer: this._renderText,
                    rangeRenderer: this._renderRange,
                    text: e.text,
                    ranges: e.ranges
                })
            }
        }),
        _ = StyleSheet/*c*/.create({
            seeMore: {
                color: FIGColors/*s*/.mediumText
            }
        });
    i.exports = g
});