__d("MentionSpan",["React","StyleSheet","Text"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("React"),
        exports/*a*/ = require/*t*/("StyleSheet"),
        React/*s*/ = require/*t*/("Text"),
        StyleSheet/*l*/ = o.createClass({
            displayName: "MentionSpan",
            Text/*render*/: function() {
                return o.createElement(React/*s*/, {
                    style: u.text
                }, this.props.children)
            }
        }),
        u = exports/*a*/.create({
            text: {
                backgroundColor: "#ccddff"
            }
        });
    module/*i*/.exports = StyleSheet/*l*/
});