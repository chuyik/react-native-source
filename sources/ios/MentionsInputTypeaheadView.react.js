__d("MentionsInputTypeaheadView.react",["Image","ReactPropTypes","React","Dimensions","ScrollView","StyleSheet","TouchableHighlight","TypeaheadViewItem","View","Text","cssVar"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var Image/*o*/ = require/*t*/("Image"),
        ReactPropTypes/*a*/ = require/*t*/("ReactPropTypes"),
        React/*s*/ = require/*t*/("React"),
        Dimensions/*l*/ = require/*t*/("Dimensions"),
        ScrollView/*u*/ = require/*t*/("ScrollView"),
        StyleSheet/*c*/ = require/*t*/("StyleSheet"),
        TouchableHighlight/*p*/ = require/*t*/("TouchableHighlight"),
        TypeaheadViewItem/*d*/ = require/*t*/("TypeaheadViewItem"),
        View/*h*/ = require/*t*/("View"),
        Text/*f*/ = require/*t*/("Text"),
        cssVar/*m*/ = require/*t*/("cssVar"),
        g = Dimensions/*l*/.get("window").height - 320,
        _ = g / 55,
        y = 34,
        v = React/*s*/.createClass({
            displayName: "MentionsInputTypeaheadViewItem",
            mixins: [TypeaheadViewItem/*d*/.Mixin],
            propTypes: TypeaheadViewItem/*d*/.propTypes,
            render: function() {
                var global/*e*/ = this.props.entry,
                    require/*t*/ = global/*e*/.getPhoto() ? React/*s*/.createElement(Image/*o*/, {
                        style: w.profilePicture,
                        source: {
                            uri: global/*e*/.getPhoto()
                        }
                    }) : null,
                    requireDynamic/*n*/ = null;
                return global/*e*/.getSubtitle() && (requireDynamic/*n*/ = React/*s*/.createElement(Text/*f*/, null, global/*e*/.getSubtitle())), React/*s*/.createElement(TouchableHighlight/*p*/, {
                    onPress: this._onSelect
                }, React/*s*/.createElement(View/*h*/, {
                    style: w.row
                }, require/*t*/, React/*s*/.createElement(View/*h*/, null, React/*s*/.createElement(Text/*f*/, {
                    style: w.titleText
                }, global/*e*/.getTitle()), requireDynamic/*n*/)))
            }
        }),
        S = React/*s*/.createClass({
            displayName: "MentionsInputTypeaheadView",
            propTypes: {
                highlightedEntry: ReactPropTypes/*a*/.object,
                entries: ReactPropTypes/*a*/.array.isRequired,
                onSelect: ReactPropTypes/*a*/.func.isRequired,
                onHighlight: ReactPropTypes/*a*/.func,
                onRenderHighlight: ReactPropTypes/*a*/.func
            },
            _renderItem: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = global/*e*/ === this.props.highlightedEntry;
                return [0 !== require/*t*/ && React/*s*/.createElement(View/*h*/, {
                    style: w.divider
                }), React/*s*/.createElement(v, {
                    key: global/*e*/.getUniqueID(),
                    entry: global/*e*/,
                    highlighted: requireDynamic/*n*/,
                    onSelect: this.props.onSelect,
                    onHighlight: this.props.onHighlight,
                    onRenderHighlight: this.props.onRenderHighlight
                })]
            },
            _renderSectionHeader: function(global/*e*/) {
                return React/*s*/.createElement(View/*h*/, {
                    key: global/*e*/,
                    style: w.sectionHeader
                }, React/*s*/.createElement(Text/*f*/, {
                    style: w.sectionHeaderText
                }, global/*e*/))
            },
            render: function() {
                if (this.props.entries.length) {
                    var global/*e*/ = [],
                        require/*t*/ = [];
                    this.props.entries.forEach(function(requireDynamic/*n*/) {
                        requireDynamic/*n*/.getAuxiliaryData().isMemberOfGroup ? (0 === global/*e*/.length && global/*e*/.push(this._renderSectionHeader("Members")), global/*e*/.push(this._renderItem(requireDynamic/*n*/, global/*e*/.length - 1))) : (0 === require/*t*/.length && require/*t*/.push(this._renderSectionHeader("Others")), require/*t*/.push(this._renderItem(requireDynamic/*n*/, require/*t*/.length - 1)))
                    }.bind(this));
                    var requireDynamic/*n*/ = this.props.entries.length > _ && {
                        height: g
                    };
                    return React/*s*/.createElement(View/*h*/, {
                        style: w.container,
                        pointerEvents: View/*h*/.pointerEvents.boxNone
                    }, React/*s*/.createElement(ScrollView/*u*/, {
                        keyboardShouldPersistTaps: !0,
                        style: [w.content, requireDynamic/*n*/]
                    }, global/*e*/, require/*t*/), this._renderSectionHeader())
                }
                return React/*s*/.createElement(View/*h*/, {
                    style: w.container
                })
            }
        }),
        b = cssVar/*m*/("fbui-bluegray-5"),
        R = cssVar/*m*/("fbui-bluegray-10"),
        w = StyleSheet/*c*/.create({
            container: {
                width: Dimensions/*l*/.get("window").width,
                top: 0,
                left: 0
            },
            content: {
                backgroundColor: "white"
            },
            row: {
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center"
            },
            sectionHeader: {
                borderTopColor: R,
                borderTopWidth: 1,
                borderBottomColor: R,
                borderBottomWidth: 1,
                backgroundColor: b,
                padding: 5,
                paddingLeft: 9
            },
            sectionHeaderText: {
                fontSize: 12,
                fontWeight: "bold"
            },
            divider: {
                height: 1,
                marginLeft: 44,
                backgroundColor: b
            },
            titleText: {
                fontSize: 17
            },
            profilePicture: {
                width: y,
                height: y,
                marginVertical: 6,
                marginHorizontal: 9,
                borderRadius: y / 2
            }
        });
    module/*i*/.exports = S
});