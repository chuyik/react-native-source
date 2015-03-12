__d("FBTextEntity",["ReactPropTypes","React","RouteHandler","StyleSheet","Text"],function (e, t, n, r, i) {
    "use strict";
    var ReactPropTypes/*o*/ = t("ReactPropTypes"),
        React/*a*/ = t("React"),
        RouteHandler/*s*/ = t("RouteHandler"),
        StyleSheet/*l*/ = t("StyleSheet"),
        Text/*u*/ = t("Text"),
        c = React/*a*/.createClass({
            displayName: "FBTextEntity",
            propTypes: {
                entity: ReactPropTypes/*o*/.object.isRequired,
                text: ReactPropTypes/*o*/.string.isRequired
            },
            render: function() {
                var e = this.props.entity,
                    t = [];
                return e.__type__ && t.push(e.__type__.name), t.push("URL"), React/*a*/.createElement(Text/*u*/, {
                    onPress: RouteHandler/*s*/.getCallback({
                        typeList: t,
                        params: e
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
    i.exports = c
});