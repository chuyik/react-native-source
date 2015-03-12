__d("NavItem",["React","ReactIOSViewAttributes","ReactChildren","Dimensions","StyleSheet","createReactIOSNativeComponentClass","invariant","fbt"],function (e, t, n, r, i) {
    "use strict";
    var React/*o*/ = t("React"),
        a = (t("ReactIOSViewAttributes"), t("ReactChildren")),
        Dimensions/*s*/ = t("Dimensions"),
        StyleSheet/*l*/ = t("StyleSheet"),
        createReactIOSNativeComponentClass/*u*/ = t("createReactIOSNativeComponentClass"),
        invariant/*c*/ = t("invariant"),
        fbt/*p*/ = t("fbt"),
        d = fbt/*p*/({
            type: "text",
            texts: ["Back"],
            desc: "button title for navigating to the previous view"
        }),
        h = React/*o*/.createClass({
            displayName: "NavItem",
            render: function() {
                var e = [];
                return a.map(this.props.children, function(t) {
                    e.push(t), t.props.navigator = this.props.navigator
                }, this), 1 !== e.length && invariant/*c*/(0, "Nav Item expects only one child"), React/*o*/.createElement(m, {
                    rightButtonTitle: this.props.rightButtonTitle,
                    backButtonTitle: d,
                    tintColor: this.props.tintColor,
                    barTintColor: this.props.barTintColor,
                    titleTextColor: this.props.titleTextColor,
                    title: this.props.title,
                    style: [f.navItem, this.props.style]
                }, e)
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
    i.exports = h
});