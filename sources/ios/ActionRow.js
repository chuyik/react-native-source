__d("ActionRow",["FIGColors","Image","React","StyleSheet","Text","TouchableBounce","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FIGColors"),
        a = require/*t*/("Image"),
        s = require/*t*/("React"),
        l = require/*t*/("StyleSheet"),
        u = require/*t*/("Text"),
        c = require/*t*/("TouchableBounce"),
        p = require/*t*/("View"),
        d = s.createClass({
            displayName: "ActionRow",
            propTypes: {
                title: s.PropTypes.string.isRequired,
                iconSource: a.sourcePropType,
                onPress: s.PropTypes.func.isRequired,
                subtitle: s.PropTypes.string
            },
            renderText: function() {
                return s.createElement(p, {
                    style: h.textContainer
                }, s.createElement(u, {
                    style: h.title
                }, this.props.title), this.props.subtitle && s.createElement(u, {
                    style: h.subtitle
                }, this.props.subtitle))
            },
            render: function() {
                return s.createElement(c, {
                    onPress: this.props.onPress
                }, s.createElement(p, {
                    style: h.row
                }, s.createElement(a, {
                    source: this.props.iconSource,
                    style: h.icon
                }), this.renderText()))
            }
        }),
        h = l.create({
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
    module/*i*/.exports = d
});