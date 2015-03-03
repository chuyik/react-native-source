__d("NavItem",["React","ReactIOSViewAttributes","ReactChildren","Dimensions","StyleSheet","createReactIOSNativeComponentClass","invariant","fbt"],function (global/*e*/, require/*React/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*React/*t*/*/("React"),
        exports/*a*/ = (require/*React/*t*/*/("ReactIOSViewAttributes"), require/*React/*t*/*/("ReactChildren")),
        ReactIOSViewAttributes/*s*/ = require/*React/*t*/*/("Dimensions"),
        ReactChildren/*l*/ = require/*React/*t*/*/("StyleSheet"),
        Dimensions/*u*/ = require/*React/*t*/*/("createReactIOSNativeComponentClass"),
        StyleSheet/*c*/ = require/*React/*t*/*/("invariant"),
        createReactIOSNativeComponentClass/*p*/ = require/*React/*t*/*/("fbt"),
        invariant/*d*/ = createReactIOSNativeComponentClass/*p*/({
            type: "text",
            fbt/*texts*/: ["Back"],
            desc: "button title for navigating to the previous view"
        }),
        h = o.createClass({
            displayName: "NavItem",
            render: function() {
                var global/*e*/ = [];
                return exports/*a*/.map(this.props.children, function(require/*React/*t*/*/) {
                    global/*e*/.push(require/*React/*t*/*/), require/*React/*t*/*/.props.navigator = this.props.navigator
                }, this), 1 !== global/*e*/.length && StyleSheet/*c*/(0, "Nav Item expects only one child"), o.createElement(m, {
                    rightButtonTitle: this.props.rightButtonTitle,
                    backButtonTitle: invariant/*d*/,
                    tintColor: this.props.tintColor,
                    barTintColor: this.props.barTintColor,
                    titleTextColor: this.props.titleTextColor,
                    title: this.props.title,
                    style: [f.navItem, this.props.style]
                }, global/*e*/)
            }
        }),
        f = ReactChildren/*l*/.create({
            navItem: {
                position: "absolute",
                left: 0,
                top: 0,
                width: ReactIOSViewAttributes/*s*/.get("window").width,
                height: ReactIOSViewAttributes/*s*/.get("window").height
            }
        }),
        m = Dimensions/*u*/({
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