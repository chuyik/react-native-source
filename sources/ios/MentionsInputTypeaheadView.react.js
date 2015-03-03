__d("MentionsInputTypeaheadView.react",["Image","ReactPropTypes","React","Dimensions","ScrollView","StyleSheet","TouchableHighlight","TypeaheadViewItem","View","Text","cssVar"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        a = require/*t*/("ReactPropTypes"),
        s = require/*t*/("React"),
        l = require/*t*/("Dimensions"),
        u = require/*t*/("ScrollView"),
        c = require/*t*/("StyleSheet"),
        p = require/*t*/("TouchableHighlight"),
        d = require/*t*/("TypeaheadViewItem"),
        h = require/*t*/("View"),
        f = require/*t*/("Text"),
        m = require/*t*/("cssVar"),
        g = l.get("window").height - 320,
        _ = g / 55,
        y = 34,
        v = s.createClass({
            displayName: "MentionsInputTypeaheadViewItem",
            mixins: [d.Mixin],
            propTypes: d.propTypes,
            render: function() {
                var global/*e*/ = this.props.entry,
                    require/*t*/ = global/*e*/.getPhoto() ? s.createElement(o, {
                        style: w.profilePicture,
                        source: {
                            uri: global/*e*/.getPhoto()
                        }
                    }) : null,
                    requireDynamic/*n*/ = null;
                return global/*e*/.getSubtitle() && (requireDynamic/*n*/ = s.createElement(f, null, global/*e*/.getSubtitle())), s.createElement(p, {
                    onPress: this._onSelect
                }, s.createElement(h, {
                    style: w.row
                }, require/*t*/, s.createElement(h, null, s.createElement(f, {
                    style: w.titleText
                }, global/*e*/.getTitle()), requireDynamic/*n*/)))
            }
        }),
        S = s.createClass({
            displayName: "MentionsInputTypeaheadView",
            propTypes: {
                highlightedEntry: a.object,
                entries: a.array.isRequired,
                onSelect: a.func.isRequired,
                onHighlight: a.func,
                onRenderHighlight: a.func
            },
            _renderItem: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = global/*e*/ === this.props.highlightedEntry;
                return [0 !== require/*t*/ && s.createElement(h, {
                    style: w.divider
                }), s.createElement(v, {
                    key: global/*e*/.getUniqueID(),
                    entry: global/*e*/,
                    highlighted: requireDynamic/*n*/,
                    onSelect: this.props.onSelect,
                    onHighlight: this.props.onHighlight,
                    onRenderHighlight: this.props.onRenderHighlight
                })]
            },
            _renderSectionHeader: function(global/*e*/) {
                return s.createElement(h, {
                    key: global/*e*/,
                    style: w.sectionHeader
                }, s.createElement(f, {
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
                    return s.createElement(h, {
                        style: w.container,
                        pointerEvents: h.pointerEvents.boxNone
                    }, s.createElement(u, {
                        keyboardShouldPersistTaps: !0,
                        style: [w.content, requireDynamic/*n*/]
                    }, global/*e*/, require/*t*/), this._renderSectionHeader())
                }
                return s.createElement(h, {
                    style: w.container
                })
            }
        }),
        b = m("fbui-bluegray-5"),
        R = m("fbui-bluegray-10"),
        w = c.create({
            container: {
                width: l.get("window").width,
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