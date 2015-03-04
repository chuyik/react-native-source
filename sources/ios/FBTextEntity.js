__d("FBTextEntity",["ReactPropTypes","React","RouteHandler","StyleSheet","Text"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ReactPropTypes/*o*/ = require/*t*/("ReactPropTypes"),
        React/*a*/ = require/*t*/("React"),
        RouteHandler/*s*/ = require/*t*/("RouteHandler"),
        StyleSheet/*l*/ = require/*t*/("StyleSheet"),
        Text/*u*/ = require/*t*/("Text"),
        c = React/*a*/.createClass({
            displayName: "FBTextEntity",
            propTypes: {
                entity: ReactPropTypes/*o*/.object.isRequired,
                text: ReactPropTypes/*o*/.string.isRequired
            },
            render: function() {
                var global/*e*/ = this.props.entity,
                    require/*t*/ = [];
                return global/*e*/.__type__ && require/*t*/.push(global/*e*/.__type__.name), require/*t*/.push("URL"), React/*a*/.createElement(Text/*u*/, {
                    onPress: RouteHandler/*s*/.getCallback({
                        typeList: require/*t*/,
                        params: global/*e*/
                    }),
                    style: [this.props.textStyle, p.entity]
                }, this.props.text)
            }
        }),
        p = StyleSheet/*l*/.create({
            entity: {
                fontWeight: "bold"
            }
        });
    module/*i*/.exports = c
});