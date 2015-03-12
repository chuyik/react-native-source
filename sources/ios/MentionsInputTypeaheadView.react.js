__d("MentionsInputTypeaheadView.react",["Image","ReactPropTypes","React","Dimensions","ScrollView","StyleSheet","TouchableHighlight","TypeaheadViewItem","View","Text","cssVar"],function (e, t, n, r, i) {
    "use strict";
    var Image/*o*/ = t("Image"),
        ReactPropTypes/*a*/ = t("ReactPropTypes"),
        React/*s*/ = t("React"),
        Dimensions/*l*/ = t("Dimensions"),
        ScrollView/*u*/ = t("ScrollView"),
        StyleSheet/*c*/ = t("StyleSheet"),
        TouchableHighlight/*p*/ = t("TouchableHighlight"),
        TypeaheadViewItem/*d*/ = t("TypeaheadViewItem"),
        View/*h*/ = t("View"),
        Text/*f*/ = t("Text"),
        cssVar/*m*/ = t("cssVar"),
        g = Dimensions/*l*/.get("window").height - 320,
        _ = g / 55,
        y = 34,
        v = React/*s*/.createClass({
            displayName: "MentionsInputTypeaheadViewItem",
            mixins: [TypeaheadViewItem/*d*/.Mixin],
            propTypes: TypeaheadViewItem/*d*/.propTypes,
            render: function() {
                var e = this.props.entry,
                    t = e.getPhoto() ? React/*s*/.createElement(Image/*o*/, {
                        style: w.profilePicture,
                        source: {
                            uri: e.getPhoto()
                        }
                    }) : null,
                    n = null;
                return e.getSubtitle() && (n = React/*s*/.createElement(Text/*f*/, null, e.getSubtitle())), React/*s*/.createElement(TouchableHighlight/*p*/, {
                    onPress: this._onSelect
                }, React/*s*/.createElement(View/*h*/, {
                    style: w.row
                }, t, React/*s*/.createElement(View/*h*/, null, React/*s*/.createElement(Text/*f*/, {
                    style: w.titleText
                }, e.getTitle()), n)))
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
            _renderItem: function(e, t) {
                var n = e === this.props.highlightedEntry;
                return [0 !== t && React/*s*/.createElement(View/*h*/, {
                    style: w.divider
                }), React/*s*/.createElement(v, {
                    key: e.getUniqueID(),
                    entry: e,
                    highlighted: n,
                    onSelect: this.props.onSelect,
                    onHighlight: this.props.onHighlight,
                    onRenderHighlight: this.props.onRenderHighlight
                })]
            },
            _renderSectionHeader: function(e) {
                return React/*s*/.createElement(View/*h*/, {
                    key: e,
                    style: w.sectionHeader
                }, React/*s*/.createElement(Text/*f*/, {
                    style: w.sectionHeaderText
                }, e))
            },
            render: function() {
                if (this.props.entries.length) {
                    var e = [],
                        t = [];
                    this.props.entries.forEach(function(n) {
                        n.getAuxiliaryData().isMemberOfGroup ? (0 === e.length && e.push(this._renderSectionHeader("Members")), e.push(this._renderItem(n, e.length - 1))) : (0 === t.length && t.push(this._renderSectionHeader("Others")), t.push(this._renderItem(n, t.length - 1)))
                    }.bind(this));
                    var n = this.props.entries.length > _ && {
                        height: g
                    };
                    return React/*s*/.createElement(View/*h*/, {
                        style: w.container,
                        pointerEvents: View/*h*/.pointerEvents.boxNone
                    }, React/*s*/.createElement(ScrollView/*u*/, {
                        keyboardShouldPersistTaps: !0,
                        style: [w.content, n]
                    }, e, t), this._renderSectionHeader())
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
    i.exports = S
});