__d("FBTextWithEntities.react",["BaseTextWithEntities.react","FBTextEntity","FIGColors","React","ReactGraphQL","StyleSheet","Text.react","fbt","findSplitPointForText","partitionTextAndRanges"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("BaseTextWithEntities.react"),
        a = require/*t*/("FBTextEntity"),
        s = require/*t*/("FIGColors"),
        l = require/*t*/("React"),
        u = require/*t*/("ReactGraphQL"),
        c = require/*t*/("StyleSheet"),
        p = require/*t*/("Text.react"),
        d = require/*t*/("fbt"),
        h = require/*t*/("findSplitPointForText"),
        f = require/*t*/("partitionTextAndRanges"),
        m = .8,
        g = l.createClass({
            displayName: "FBTextWithEntities",
            mixins: [u.Mixin],
            propTypes: {
                shouldTruncate: l.PropTypes.bool,
                seeMoreStyle: p.stylePropType,
                maxLength: l.PropTypes.number,
                maxLines: l.PropTypes.number,
                TextEntityComponent: l.PropTypes.func
            },
            statics: {
                queries: {
                    text: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("FBTextWithEntities_text", "TextWithEntities", [new global/*e*/.Field("text"), new global/*e*/.Field("ranges", [new global/*e*/.Field("__type__", [new global/*e*/.Field("name"), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new global/*e*/.Field("entity", [new global/*e*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new global/*e*/.Field("name"), new global/*e*/.Field("url", null, null, [new global/*e*/.Callv("site", ["mobile"])]), new global/*e*/.Field("__type__", [new global/*e*/.Field("name"), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new global/*e*/.Field("offset"), new global/*e*/.Field("length")], null, null, null, null, {
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
            _renderText: function(global/*e*/) {
                return l.createElement(p, {
                    style: this.props.textStyle
                }, global/*e*/)
            },
            _renderRange: function(global/*e*/, require/*t*/) {
                if (global/*e*/ && require/*t*/.entity) {
                    var requireDynamic/*n*/ = this.props.TextEntityComponent || a;
                    return l.createElement(requireDynamic/*n*/, {
                        entity: require/*t*/.entity,
                        text: global/*e*/,
                        textStyle: this.props.textStyle
                    })
                }
                return l.createElement(p, {
                    style: this.props.textStyle
                }, global/*e*/)
            },
            onPressSeeMore: function() {
                this.setState({
                    isCollapsed: !1
                })
            },
            _renderTruncated: function() {
                var global/*e*/ = this.props.text,
                    require/*t*/ = null;
                if (this.state.isCollapsed) {
                    var requireDynamic/*n*/ = this.props.maxLength,
                        requireLazy/*r*/ = this.props.maxLines;
                    if (requireDynamic/*n*/ && global/*e*/.text.length > requireDynamic/*n*/ && (requireDynamic/*n*/ = Math.floor(requireDynamic/*n*/ * m)), require/*t*/ = h(global/*e*/.text, requireDynamic/*n*/, requireLazy/*r*/), null !== require/*t*/) {
                        var module/*i*/ = f(global/*e*/.text, global/*e*/.ranges, require/*t*/);
                        global/*e*/ = module/*i*/.before
                    }
                }
                var a = l.createElement(o, {
                    textRenderer: this._renderText,
                    rangeRenderer: this._renderRange,
                    text: global/*e*/.text,
                    ranges: global/*e*/.ranges
                });
                if (require/*t*/) {
                    var s = ["... ", l.createElement(p, {
                        key: "continue",
                        style: [_.seeMore, this.props.seeMoreStyle]
                    }, d({
                        type: "text",
                        texts: ["See More"],
                        desc: "Link to view more of this content"
                    }))];
                    return l.createElement(p, {
                        style: this.props.textStyle,
                        onPress: this.onPressSeeMore,
                        suppressHighlighting: !0
                    }, a, s)
                }
                return l.createElement(p, {
                    style: this.props.textStyle
                }, a)
            },
            render: function() {
                if (this.props.shouldTruncate) return this._renderTruncated();
                var global/*e*/ = this.props.text;
                return l.createElement(o, {
                    textRenderer: this._renderText,
                    rangeRenderer: this._renderRange,
                    text: global/*e*/.text,
                    ranges: global/*e*/.ranges
                })
            }
        }),
        _ = c.create({
            seeMore: {
                color: s.mediumText
            }
        });
    module/*i*/.exports = g
});