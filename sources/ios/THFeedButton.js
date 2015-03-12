__d("THFeedButton",["React","StyleSheet","Text","THColors","TouchableBounce","View"],function (e, t, n, r, i) {
    "use strict";
    var React/*o*/ = t("React"),
        StyleSheet/*a*/ = t("StyleSheet"),
        Text/*s*/ = t("Text"),
        THColors/*l*/ = t("THColors"),
        TouchableBounce/*u*/ = t("TouchableBounce"),
        View/*c*/ = t("View"),
        p = React/*o*/.createClass({
            displayName: "THFeedButton",
            propTypes: {
                onPress: React/*o*/.PropTypes.func,
                isPositive: React/*o*/.PropTypes.bool,
                text: React/*o*/.PropTypes.string
            },
            render: function() {
                var e = this.props.isPositive ? d.positiveText : d.negativeText,
                    t = this.props.isPositive ? THColors/*l*/.lightBlue : THColors/*l*/.buttonColor;
                return React/*o*/.createElement(TouchableBounce/*u*/, {
                    onPress: this.props.onPress
                }, React/*o*/.createElement(View/*c*/, {
                    style: [d.button, {
                        backgroundColor: t
                    }]
                }, React/*o*/.createElement(Text/*s*/, {
                    style: e
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
    i.exports = p
});