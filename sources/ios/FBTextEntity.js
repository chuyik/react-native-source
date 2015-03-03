__d("FBTextEntity",["ReactPropTypes","React","RouteHandler","StyleSheet","Text"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        a = require/*t*/("React"),
        s = require/*t*/("RouteHandler"),
        l = require/*t*/("StyleSheet"),
        u = require/*t*/("Text"),
        c = a.createClass({
            displayName: "FBTextEntity",
            propTypes: {
                entity: o.object.isRequired,
                text: o.string.isRequired
            },
            render: function() {
                var global/*e*/ = this.props.entity,
                    require/*t*/ = [];
                return global/*e*/.__type__ && require/*t*/.push(global/*e*/.__type__.name), require/*t*/.push("URL"), a.createElement(u, {
                    onPress: s.getCallback({
                        typeList: require/*t*/,
                        params: global/*e*/
                    }),
                    style: [this.props.textStyle, p.entity]
                }, this.props.text)
            }
        }),
        p = l.create({
            entity: {
                fontWeight: "bold"
            }
        });
    module/*i*/.exports = c
});