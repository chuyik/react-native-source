__d("MentionSpan",["React","StyleSheet","Text"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var React/*o*/ = require/*t*/("React"),
        StyleSheet/*a*/ = require/*t*/("StyleSheet"),
        Text/*s*/ = require/*t*/("Text"),
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
    module/*i*/.exports = l
});