__d("ActionRow",["FIGColors","Image","React","StyleSheet","Text","TouchableBounce","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FIGColors"),
        exports/*a*/ = require/*t*/("Image"),
        FIGColors/*s*/ = require/*t*/("React"),
        Image/*l*/ = require/*t*/("StyleSheet"),
        React/*u*/ = require/*t*/("Text"),
        StyleSheet/*c*/ = require/*t*/("TouchableBounce"),
        Text/*p*/ = require/*t*/("View"),
        TouchableBounce/*d*/ = FIGColors/*s*/.createClass({
            displayName: "ActionRow",
            View/*propTypes*/: {
                title: FIGColors/*s*/.PropTypes.string.isRequired,
                iconSource: exports/*a*/.sourcePropType,
                onPress: FIGColors/*s*/.PropTypes.func.isRequired,
                subtitle: FIGColors/*s*/.PropTypes.string
            },
            renderText: function() {
                return FIGColors/*s*/.createElement(Text/*p*/, {
                    style: h.textContainer
                }, FIGColors/*s*/.createElement(React/*u*/, {
                    style: h.title
                }, this.props.title), this.props.subtitle && FIGColors/*s*/.createElement(React/*u*/, {
                    style: h.subtitle
                }, this.props.subtitle))
            },
            render: function() {
                return FIGColors/*s*/.createElement(StyleSheet/*c*/, {
                    onPress: this.props.onPress
                }, FIGColors/*s*/.createElement(Text/*p*/, {
                    style: h.row
                }, FIGColors/*s*/.createElement(exports/*a*/, {
                    source: this.props.iconSource,
                    style: h.icon
                }), this.renderText()))
            }
        }),
        h = Image/*l*/.create({
            row: {
                flexDirection: "row",
                alignItems: "center",
                margin: 8
            },
            textContainer: {
                flex: 1
            },
            icon: {
                marginRight: 8,
                width: 31,
                height: 31
            },
            title: {
                fontSize: 16
            },
            subtitle: {
                fontSize: 12,
                color: o.mediumText
            }
        });
    module/*i*/.exports = TouchableBounce/*d*/
});