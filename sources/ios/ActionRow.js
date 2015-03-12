__d("ActionRow",["FIGColors","Image","React","StyleSheet","Text","TouchableBounce","View"],function (e, t, n, r, i) {
    "use strict";
    var FIGColors/*o*/ = t("FIGColors"),
        Image/*a*/ = t("Image"),
        React/*s*/ = t("React"),
        StyleSheet/*l*/ = t("StyleSheet"),
        Text/*u*/ = t("Text"),
        TouchableBounce/*c*/ = t("TouchableBounce"),
        View/*p*/ = t("View"),
        d = React/*s*/.createClass({
            displayName: "ActionRow",
            propTypes: {
                title: React/*s*/.PropTypes.string.isRequired,
                iconSource: Image/*a*/.sourcePropType,
                onPress: React/*s*/.PropTypes.func.isRequired,
                subtitle: React/*s*/.PropTypes.string
            },
            renderText: function() {
                return React/*s*/.createElement(View/*p*/, {
                    style: h.textContainer
                }, React/*s*/.createElement(Text/*u*/, {
                    style: h.title
                }, this.props.title), this.props.subtitle && React/*s*/.createElement(Text/*u*/, {
                    style: h.subtitle
                }, this.props.subtitle))
            },
            render: function() {
                return React/*s*/.createElement(TouchableBounce/*c*/, {
                    onPress: this.props.onPress
                }, React/*s*/.createElement(View/*p*/, {
                    style: h.row
                }, React/*s*/.createElement(Image/*a*/, {
                    source: this.props.iconSource,
                    style: h.icon
                }), this.renderText()))
            }
        }),
        h = StyleSheet/*l*/.create({
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
                color: FIGColors/*o*/.mediumText
            }
        });
    i.exports = d
});