__d("MentionSpan",["React","StyleSheet","Text"],function (e, t, n, r, i) {
    "use strict";
    var React/*o*/ = t("React"),
        StyleSheet/*a*/ = t("StyleSheet"),
        Text/*s*/ = t("Text"),
        l = React/*o*/.createClass({
            displayName: "MentionSpan",
            render: function() {
                return React/*o*/.createElement(Text/*s*/, {
                    style: u.text
                }, this.props.children)
            }
        }),
        u = StyleSheet/*a*/.create({
            text: {
                backgroundColor: "#ccddff"
            }
        });
    i.exports = l
});