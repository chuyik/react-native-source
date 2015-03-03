__d("MentionSpan",["React","StyleSheet","Text"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("React"),
        a = require/*t*/("StyleSheet"),
        s = require/*t*/("Text"),
        l = o.createClass({
            displayName: "MentionSpan",
            render: function() {
                return o.createElement(s, {
                    style: u.text
                }, this.props.children)
            }
        }),
        u = a.create({
            text: {
                backgroundColor: "#ccddff"
            }
        });
    module/*i*/.exports = l
});