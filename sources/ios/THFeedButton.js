__d("THFeedButton",["React","StyleSheet","Text","THColors","TouchableBounce","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("React"),
        exports/*a*/ = require/*t*/("StyleSheet"),
        React/*s*/ = require/*t*/("Text"),
        StyleSheet/*l*/ = require/*t*/("THColors"),
        Text/*u*/ = require/*t*/("TouchableBounce"),
        THColors/*c*/ = require/*t*/("View"),
        TouchableBounce/*p*/ = o.createClass({
            displayName: "THFeedButton",
            View/*propTypes*/: {
                onPress: o.PropTypes.func,
                isPositive: o.PropTypes.bool,
                text: o.PropTypes.string
            },
            render: function() {
                var global/*e*/ = this.props.isPositive ? d.positiveText : d.negativeText,
                    require/*t*/ = this.props.isPositive ? StyleSheet/*l*/.lightBlue : StyleSheet/*l*/.buttonColor;
                return o.createElement(Text/*u*/, {
                    onPress: this.props.onPress
                }, o.createElement(THColors/*c*/, {
                    style: [d.button, {
                        backgroundColor: require/*t*/
                    }]
                }, o.createElement(React/*s*/, {
                    style: global/*e*/
                }, this.props.text)))
            }
        }),
        d = exports/*a*/.create({
            positiveText: {
                color: StyleSheet/*l*/.backgroundColor,
                fontWeight: "bold"
            },
            negativeText: {
                color: StyleSheet/*l*/.mediumGray,
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
    module/*i*/.exports = TouchableBounce/*p*/
});