__d("MentionsInputTypeaheadView.react",["Image","ReactPropTypes","React","Dimensions","ScrollView","StyleSheet","TouchableHighlight","TypeaheadViewItem","View","Text","cssVar"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        exports/*a*/ = require/*t*/("ReactPropTypes"),
        Image/*s*/ = require/*t*/("React"),
        ReactPropTypes/*l*/ = require/*t*/("Dimensions"),
        React/*u*/ = require/*t*/("ScrollView"),
        Dimensions/*c*/ = require/*t*/("StyleSheet"),
        ScrollView/*p*/ = require/*t*/("TouchableHighlight"),
        StyleSheet/*d*/ = require/*t*/("TypeaheadViewItem"),
        TouchableHighlight/*h*/ = require/*t*/("View"),
        TypeaheadViewItem/*f*/ = require/*t*/("Text"),
        View/*m*/ = require/*t*/("cssVar"),
        Text/*g*/ = ReactPropTypes/*l*/.get("window").height - 320,
        cssVar/*_*/ = Text/*g*/ / 55,
        y = 34,
        v = Image/*s*/.createClass({
            displayName: "MentionsInputTypeaheadViewItem",
            mixins: [StyleSheet/*d*/.Mixin],
            propTypes: StyleSheet/*d*/.propTypes,
            render: function() {
                var global/*e*/ = this.props.entry,
                    require/*t*/ = global/*e*/.getPhoto() ? Image/*s*/.createElement(o, {
                        style: w.profilePicture,
                        source: {
                            uri: global/*e*/.getPhoto()
                        }
                    }) : null,
                    requireDynamic/*n*/ = null;
                return global/*e*/.getSubtitle() && (requireDynamic/*n*/ = Image/*s*/.createElement(TypeaheadViewItem/*f*/, null, global/*e*/.getSubtitle())), Image/*s*/.createElement(ScrollView/*p*/, {
                    onPress: this._onSelect
                }, Image/*s*/.createElement(TouchableHighlight/*h*/, {
                    style: w.row
                }, require/*t*/, Image/*s*/.createElement(TouchableHighlight/*h*/, null, Image/*s*/.createElement(TypeaheadViewItem/*f*/, {
                    style: w.titleText
                }, global/*e*/.getTitle()), requireDynamic/*n*/)))
            }
        }),
        S = Image/*s*/.createClass({
            displayName: "MentionsInputTypeaheadView",
            propTypes: {
                highlightedEntry: exports/*a*/.object,
                entries: exports/*a*/.array.isRequired,
                onSelect: exports/*a*/.func.isRequired,
                onHighlight: exports/*a*/.func,
                onRenderHighlight: exports/*a*/.func
            },
            _renderItem: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = global/*e*/ === this.props.highlightedEntry;
                return [0 !== require/*t*/ && Image/*s*/.createElement(TouchableHighlight/*h*/, {
                    style: w.divider
                }), Image/*s*/.createElement(v, {
                    key: global/*e*/.getUniqueID(),
                    entry: global/*e*/,
                    highlighted: requireDynamic/*n*/,
                    onSelect: this.props.onSelect,
                    onHighlight: this.props.onHighlight,
                    onRenderHighlight: this.props.onRenderHighlight
                })]
            },
            _renderSectionHeader: function(global/*e*/) {
                return Image/*s*/.createElement(TouchableHighlight/*h*/, {
                    key: global/*e*/,
                    style: w.sectionHeader
                }, Image/*s*/.createElement(TypeaheadViewItem/*f*/, {
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
                    var requireDynamic/*n*/ = this.props.entries.length > cssVar/*_*/ && {
                        height: Text/*g*/
                    };
                    return Image/*s*/.createElement(TouchableHighlight/*h*/, {
                        style: w.container,
                        pointerEvents: TouchableHighlight/*h*/.pointerEvents.boxNone
                    }, Image/*s*/.createElement(React/*u*/, {
                        keyboardShouldPersistTaps: !0,
                        style: [w.content, requireDynamic/*n*/]
                    }, global/*e*/, require/*t*/), this._renderSectionHeader())
                }
                return Image/*s*/.createElement(TouchableHighlight/*h*/, {
                    style: w.container
                })
            }
        }),
        b = View/*m*/("fbui-bluegray-5"),
        R = View/*m*/("fbui-bluegray-10"),
        w = Dimensions/*c*/.create({
            container: {
                width: ReactPropTypes/*l*/.get("window").width,
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