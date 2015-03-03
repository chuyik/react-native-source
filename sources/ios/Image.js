__d("Image",["EdgeInsetsPropType","NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","ImageResizeMode","ImageSourcePropType","ImageStylePropTypes","React","ReactIOSViewAttributes","StyleSheet","StyleSheetPropType","createReactIOSNativeComponentClass","flattenStyle","insetsDiffer","invariant","merge","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("EdgeInsetsPropType"),
        a = require/*t*/("NativeMethodsMixin"),
        s = require/*t*/("NativeModulesDeprecated"),
        l = require/*t*/("ReactPropTypes"),
        u = require/*t*/("ImageResizeMode"),
        c = require/*t*/("ImageSourcePropType"),
        p = require/*t*/("ImageStylePropTypes"),
        d = require/*t*/("React"),
        h = require/*t*/("ReactIOSViewAttributes"),
        f = require/*t*/("StyleSheet"),
        m = require/*t*/("StyleSheetPropType"),
        g = require/*t*/("createReactIOSNativeComponentClass"),
        _ = require/*t*/("flattenStyle"),
        y = require/*t*/("insetsDiffer"),
        v = require/*t*/("invariant"),
        S = require/*t*/("merge"),
        b = require/*t*/("warning"),
        R = d.createClass({
            displayName: "Image",
            propTypes: {
                source: c,
                accessible: l.bool,
                accessibilityLabel: l.string,
                capInsets: o,
                style: m(p),
                testID: l.string
            },
            statics: {
                resizeMode: u,
                sourcePropType: c
            },
            mixins: [a],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: h.UIView
            },
            render: function() {
                var global/*e*/ = _([w.base, this.props.style]),
                    require/*t*/ = this.props.source,
                    requireDynamic/*n*/ = require/*t*/.uri && require/*t*/.uri.match(/^https?:/);
                requireDynamic/*n*/ && require/*t*/.isStatic && v(0, 'static image uris cannot start with "http": "' + require/*t*/.uri + '"');
                var requireLazy/*r*/ = !require/*t*/.isStatic && !requireDynamic/*n*/,
                    module/*i*/ = requireDynamic/*n*/ ? D : E;
                this.props.style && this.props.style.tintColor && b(module/*i*/ === E, "tintColor style only supported on static images.");
                var o, a = s.RKUIManager.UIView.ContentMode;
                o = global/*e*/.resizeMode === u.stretch ? a.ScaleToFill : global/*e*/.resizeMode === u.contain ? a.ScaleAspectFit : a.ScaleAspectFill;
                var l = S(this.props, {
                    style: global/*e*/,
                    resizeMode: o,
                    tintColor: global/*e*/.tintColor
                });
                return requireLazy/*r*/ ? l.imageTag = require/*t*/.uri : l.src = require/*t*/.uri, d.createElement(module/*i*/, Object.assign({}, l))
            }
        }),
        w = f.create({
            base: {
                overflow: "hidden"
            }
        }),
        C = S(h.UIView, {
            accessible: !0,
            accessibilityLabel: !0,
            capInsets: {
                diff: y
            },
            imageTag: !0,
            resizeMode: !0,
            src: !0,
            testID: l.string
        }),
        E = g({
            validAttributes: S(C, {
                tintColor: !0
            }),
            uiViewClassName: "RCTStaticImage"
        }),
        D = g({
            validAttributes: S(C, {
                defaultImageSrc: !0
            }),
            uiViewClassName: "RCTNetworkImageView"
        });
    module/*i*/.exports = R
});