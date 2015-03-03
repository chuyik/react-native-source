__d("THFeedButton",["React","StyleSheet","Text","THColors","TouchableBounce","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("React"),
        a = require/*t*/("StyleSheet"),
        s = require/*t*/("Text"),
        l = require/*t*/("THColors"),
        u = require/*t*/("TouchableBounce"),
        c = require/*t*/("View"),
        p = o.createClass({
            displayName: "THFeedButton",
            propTypes: {
                onPress: o.PropTypes.func,
                isPositive: o.PropTypes.bool,
                text: o.PropTypes.string
            },
            render: function() {
                var global/*e*/ = this.props.isPositive ? d.positiveText : d.negativeText,
                    require/*t*/ = this.props.isPositive ? l.lightBlue : l.buttonColor;
                return o.createElement(u, {
                    onPress: this.props.onPress
                }, o.createElement(c, {
                    style: [d.button, {
                        backgroundColor: require/*t*/
                    }]
                }, o.createElement(s, {
                    style: global/*e*/
                }, this.props.text)))
            }
        }),
        d = a.create({
            positiveText: {
                color: l.backgroundColor,
                fontWeight: "bold"
            },
            negativeText: {
                color: l.mediumGray,
                fontWeight: "bold"
            },
            button: {
                borderRadius: 4,
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 10,
                paddingRight: 10,
                marginRight: 10
            }
        });
    module/*i*/.exports = p
});