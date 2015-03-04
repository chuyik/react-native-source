__d("FBTextWithEntities.react",["BaseTextWithEntities.react","FBTextEntity","FIGColors","React","ReactGraphQL","StyleSheet","Text.react","fbt","findSplitPointForText","partitionTextAndRanges"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("BaseTextWithEntities.react"),
        FBTextEntity/*a*/ = require/*t*/("FBTextEntity"),
        FIGColors/*s*/ = require/*t*/("FIGColors"),
        React/*l*/ = require/*t*/("React"),
        ReactGraphQL/*u*/ = require/*t*/("ReactGraphQL"),
        StyleSheet/*c*/ = require/*t*/("StyleSheet"),
        p = require/*t*/("Text.react"),
        fbt/*d*/ = require/*t*/("fbt"),
        findSplitPointForText/*h*/ = require/*t*/("findSplitPointForText"),
        partitionTextAndRanges/*f*/ = require/*t*/("partitionTextAndRanges"),
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
                return React/*l*/.createElement(p, {
                    style: this.props.textStyle
                }, global/*e*/)
            },
            _renderRange: function(global/*e*/, require/*t*/) {
                if (global/*e*/ && require/*t*/.entity) {
                    var requireDynamic/*n*/ = this.props.TextEntityComponent || FBTextEntity/*a*/;
                    return React/*l*/.createElement(requireDynamic/*n*/, {
                        entity: require/*t*/.entity,
                        text: global/*e*/,
                        textStyle: this.props.textStyle
                    })
                }
                return React/*l*/.createElement(p, {
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
                    if (requireDynamic/*n*/ && global/*e*/.text.length > requireDynamic/*n*/ && (requireDynamic/*n*/ = Math.floor(requireDynamic/*n*/ * m)), require/*t*/ = findSplitPointForText/*h*/(global/*e*/.text, requireDynamic/*n*/, requireLazy/*r*/), null !== require/*t*/) {
                        var module/*i*/ = partitionTextAndRanges/*f*/(global/*e*/.text, global/*e*/.ranges, require/*t*/);
                        global/*e*/ = module/*i*/.before
                    }
                }
                var FBTextEntity/*a*/ = React/*l*/.createElement(o, {
                    textRenderer: this._renderText,
                    rangeRenderer: this._renderRange,
                    text: global/*e*/.text,
                    ranges: global/*e*/.ranges
                });
                if (require/*t*/) {
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
                var global/*e*/ = this.props.text;
                return React/*l*/.createElement(o, {
                    textRenderer: this._renderText,
                    rangeRenderer: this._renderRange,
                    text: global/*e*/.text,
                    ranges: global/*e*/.ranges
                })
            }
        }),
        _ = StyleSheet/*c*/.create({
            seeMore: {
                color: FIGColors/*s*/.mediumText
            }
        });
    module/*i*/.exports = g
});