__d("FBTextEntity",["ReactPropTypes","React","RouteHandler","StyleSheet","Text"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ReactPropTypes"),
        exports/*a*/ = require/*t*/("React"),
        ReactPropTypes/*s*/ = require/*t*/("RouteHandler"),
        React/*l*/ = require/*t*/("StyleSheet"),
        RouteHandler/*u*/ = require/*t*/("Text"),
        StyleSheet/*c*/ = exports/*a*/.createClass({
            displayName: "FBTextEntity",
            Text/*propTypes*/: {
                entity: o.object.isRequired,
                text: o.string.isRequired
            },
            render: function() {
                var global/*e*/ = this.props.entity,
                    require/*t*/ = [];
                return global/*e*/.__type__ && require/*t*/.push(global/*e*/.__type__.name), require/*t*/.push("URL"), exports/*a*/.createElement(RouteHandler/*u*/, {
                    onPress: ReactPropTypes/*s*/.getCallback({
                        typeList: require/*t*/,
                        params: global/*e*/
                    }),
                    style: [this.props.textStyle, p.entity]
                }, this.props.text)
            }
        }),
        p = React/*l*/.create({
            entity: {
                fontWeight: "bold"
            }
        });
    module/*i*/.exports = StyleSheet/*c*/
});