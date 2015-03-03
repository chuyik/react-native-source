__d("FBTextWithEntities.react",["BaseTextWithEntities.react","FBTextEntity","FIGColors","React","ReactGraphQL","StyleSheet","Text.react","fbt","findSplitPointForText","partitionTextAndRanges"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("BaseTextWithEntities.react"),
        exports/*a*/ = require/*t*/("FBTextEntity"),
        BaseTextWithEntities.react/*s*/ = require/*t*/("FIGColors"),
        FBTextEntity/*l*/ = require/*t*/("React"),
        FIGColors/*u*/ = require/*t*/("ReactGraphQL"),
        React/*c*/ = require/*t*/("StyleSheet"),
        ReactGraphQL/*p*/ = require/*t*/("Text.react"),
        StyleSheet/*d*/ = require/*t*/("fbt"),
        Text.react/*h*/ = require/*t*/("findSplitPointForText"),
        fbt/*f*/ = require/*t*/("partitionTextAndRanges"),
        findSplitPointForText/*m*/ = .8,
        partitionTextAndRanges/*g*/ = FBTextEntity/*l*/.createClass({
            displayName: "FBTextWithEntities",
            mixins: [FIGColors/*u*/.Mixin],
            propTypes: {
                shouldTruncate: FBTextEntity/*l*/.PropTypes.bool,
                seeMoreStyle: ReactGraphQL/*p*/.stylePropType,
                maxLength: FBTextEntity/*l*/.PropTypes.number,
                maxLines: FBTextEntity/*l*/.PropTypes.number,
                TextEntityComponent: FBTextEntity/*l*/.PropTypes.func
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
                return FBTextEntity/*l*/.createElement(ReactGraphQL/*p*/, {
                    style: this.props.textStyle
                }, global/*e*/)
            },
            _renderRange: function(global/*e*/, require/*t*/) {
                if (global/*e*/ && require/*t*/.entity) {
                    var requireDynamic/*n*/ = this.props.TextEntityComponent || exports/*a*/;
                    return FBTextEntity/*l*/.createElement(requireDynamic/*n*/, {
                        entity: require/*t*/.entity,
                        text: global/*e*/,
                        textStyle: this.props.textStyle
                    })
                }
                return FBTextEntity/*l*/.createElement(ReactGraphQL/*p*/, {
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
                    if (requireDynamic/*n*/ && global/*e*/.text.length > requireDynamic/*n*/ && (requireDynamic/*n*/ = Math.floor(requireDynamic/*n*/ * findSplitPointForText/*m*/)), require/*t*/ = Text.react/*h*/(global/*e*/.text, requireDynamic/*n*/, requireLazy/*r*/), null !== require/*t*/) {
                        var module/*i*/ = fbt/*f*/(global/*e*/.text, global/*e*/.ranges, require/*t*/);
                        global/*e*/ = module/*i*/.before
                    }
                }
                var exports/*a*/ = FBTextEntity/*l*/.createElement(o, {
                    textRenderer: this._renderText,
                    rangeRenderer: this._renderRange,
                    text: global/*e*/.text,
                    ranges: global/*e*/.ranges
                });
                if (require/*t*/) {
                    var BaseTextWithEntities.react/*s*/ = ["... ", FBTextEntity/*l*/.createElement(ReactGraphQL/*p*/, {
                        key: "continue",
                        style: [_.seeMore, this.props.seeMoreStyle]
                    }, StyleSheet/*d*/({
                        type: "text",
                        texts: ["See More"],
                        desc: "Link to view more of this content"
                    }))];
                    return FBTextEntity/*l*/.createElement(ReactGraphQL/*p*/, {
                        style: this.props.textStyle,
                        onPress: this.onPressSeeMore,
                        suppressHighlighting: !0
                    }, exports/*a*/, BaseTextWithEntities.react/*s*/)
                }
                return FBTextEntity/*l*/.createElement(ReactGraphQL/*p*/, {
                    style: this.props.textStyle
                }, exports/*a*/)
            },
            render: function() {
                if (this.props.shouldTruncate) return this._renderTruncated();
                var global/*e*/ = this.props.text;
                return FBTextEntity/*l*/.createElement(o, {
                    textRenderer: this._renderText,
                    rangeRenderer: this._renderRange,
                    text: global/*e*/.text,
                    ranges: global/*e*/.ranges
                })
            }
        }),
        _ = React/*c*/.create({
            seeMore: {
                color: BaseTextWithEntities.react/*s*/.mediumText
            }
        });
    module/*i*/.exports = partitionTextAndRanges/*g*/
});