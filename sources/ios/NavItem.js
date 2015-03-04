__d("NavItem",["React","ReactIOSViewAttributes","ReactChildren","Dimensions","StyleSheet","createReactIOSNativeComponentClass","invariant","fbt"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var React/*o*/ = require/*t*/("React"),
        a = (require/*t*/("ReactIOSViewAttributes"), require/*t*/("ReactChildren")),
        Dimensions/*s*/ = require/*t*/("Dimensions"),
        StyleSheet/*l*/ = require/*t*/("StyleSheet"),
        createReactIOSNativeComponentClass/*u*/ = require/*t*/("createReactIOSNativeComponentClass"),
        invariant/*c*/ = require/*t*/("invariant"),
        fbt/*p*/ = require/*t*/("fbt"),
        d = fbt/*p*/({
            type: "text",
            texts: ["Back"],
            desc: "button title for navigating to the previous view"
        }),
        h = React/*o*/.createClass({
            displayName: "NavItem",
            render: function() {
                var global/*e*/ = [];
                return a.map(this.props.children, function(require/*t*/) {
                    global/*e*/.push(require/*t*/), require/*t*/.props.navigator = this.props.navigator
                }, this), 1 !== global/*e*/.length && invariant/*c*/(0, "Nav Item expects only one child"), React/*o*/.createElement(m, {
                    rightButtonTitle: this.props.rightButtonTitle,
                    backButtonTitle: d,
                    tintColor: this.props.tintColor,
                    barTintColor: this.props.barTintColor,
                    titleTextColor: this.props.titleTextColor,
                    title: this.props.title,
                    style: [f.navItem, this.props.style]
                }, global/*e*/)
            }
        }),
        f = StyleSheet/*l*/.create({
            navItem: {
                position: "absolute",
                left: 0,
                top: 0,
                width: Dimensions/*s*/.get("window").width,
                height: Dimensions/*s*/.get("window").height
            }
        }),
        m = createReactIOSNativeComponentClass/*u*/({
            validAttributes: {
                title: !0,
                barTintColor: !0,
                rightButtonTitle: !0,
                tintColor: !0,
                titleTextColor: !0,
                style: !0
            },
            uiViewClassName: "RCTNavItem"
        });
    module/*i*/.exports = h
});