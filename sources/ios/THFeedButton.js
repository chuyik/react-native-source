__d("THFeedButton",["React","StyleSheet","Text","THColors","TouchableBounce","View"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var React/*o*/ = require/*t*/("React"),
        StyleSheet/*a*/ = require/*t*/("StyleSheet"),
        Text/*s*/ = require/*t*/("Text"),
        THColors/*l*/ = require/*t*/("THColors"),
        TouchableBounce/*u*/ = require/*t*/("TouchableBounce"),
        View/*c*/ = require/*t*/("View"),
        p = React/*o*/.createClass({
            displayName: "THFeedButton",
            propTypes: {
                onPress: React/*o*/.PropTypes.func,
                isPositive: React/*o*/.PropTypes.bool,
                text: React/*o*/.PropTypes.string
            },
            render: function() {
                var global/*e*/ = this.props.isPositive ? d.positiveText : d.negativeText,
                    require/*t*/ = this.props.isPositive ? THColors/*l*/.lightBlue : THColors/*l*/.buttonColor;
                return React/*o*/.createElement(TouchableBounce/*u*/, {
                    onPress: this.props.onPress
                }, React/*o*/.createElement(View/*c*/, {
                    style: [d.button, {
                        backgroundColor: require/*t*/
                    }]
                }, React/*o*/.createElement(Text/*s*/, {
                    style: global/*e*/
                }, this.props.text)))
            }
        }),
        d = StyleSheet/*a*/.create({
            positiveText: {
                color: THColors/*l*/.backgroundColor,
                fontWeight: "bold"
            },
            negativeText: {
                color: THColors/*l*/.mediumGray,
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