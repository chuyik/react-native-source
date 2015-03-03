__d("Image",["EdgeInsetsPropType","NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","ImageResizeMode","ImageSourcePropType","ImageStylePropTypes","React","ReactIOSViewAttributes","StyleSheet","StyleSheetPropType","createReactIOSNativeComponentClass","flattenStyle","insetsDiffer","invariant","merge","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("EdgeInsetsPropType"),
        exports/*a*/ = require/*t*/("NativeMethodsMixin"),
        EdgeInsetsPropType/*s*/ = require/*t*/("NativeModulesDeprecated"),
        NativeMethodsMixin/*l*/ = require/*t*/("ReactPropTypes"),
        NativeModulesDeprecated/*u*/ = require/*t*/("ImageResizeMode"),
        ReactPropTypes/*c*/ = require/*t*/("ImageSourcePropType"),
        ImageResizeMode/*p*/ = require/*t*/("ImageStylePropTypes"),
        ImageSourcePropType/*d*/ = require/*t*/("React"),
        ImageStylePropTypes/*h*/ = require/*t*/("ReactIOSViewAttributes"),
        React/*f*/ = require/*t*/("StyleSheet"),
        ReactIOSViewAttributes/*m*/ = require/*t*/("StyleSheetPropType"),
        StyleSheet/*g*/ = require/*t*/("createReactIOSNativeComponentClass"),
        StyleSheetPropType/*_*/ = require/*t*/("flattenStyle"),
        createReactIOSNativeComponentClass/*y*/ = require/*t*/("insetsDiffer"),
        flattenStyle/*v*/ = require/*t*/("invariant"),
        insetsDiffer/*S*/ = require/*t*/("merge"),
        invariant/*b*/ = require/*t*/("warning"),
        merge/*R*/ = ImageSourcePropType/*d*/.createClass({
            displayName: "Image",
            warning/*propTypes*/: {
                source: ReactPropTypes/*c*/,
                accessible: NativeMethodsMixin/*l*/.bool,
                accessibilityLabel: NativeMethodsMixin/*l*/.string,
                capInsets: o,
                style: ReactIOSViewAttributes/*m*/(ImageResizeMode/*p*/),
                testID: NativeMethodsMixin/*l*/.string
            },
            statics: {
                resizeMode: NativeModulesDeprecated/*u*/,
                sourcePropType: ReactPropTypes/*c*/
            },
            mixins: [exports/*a*/],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: ImageStylePropTypes/*h*/.UIView
            },
            render: function() {
                var global/*e*/ = StyleSheetPropType/*_*/([w.base, this.props.style]),
                    require/*t*/ = this.props.source,
                    requireDynamic/*n*/ = require/*t*/.uri && require/*t*/.uri.match(/^https?:/);
                requireDynamic/*n*/ && require/*t*/.isStatic && flattenStyle/*v*/(0, 'static image uris cannot start with "http": "' + require/*t*/.uri + '"');
                var requireLazy/*r*/ = !require/*t*/.isStatic && !requireDynamic/*n*/,
                    module/*i*/ = requireDynamic/*n*/ ? D : E;
                this.props.style && this.props.style.tintColor && invariant/*b*/(module/*i*/ === E, "tintColor style only supported on static images.");
                var o, exports/*a*/ = EdgeInsetsPropType/*s*/.RKUIManager.UIView.ContentMode;
                o = global/*e*/.resizeMode === NativeModulesDeprecated/*u*/.stretch ? exports/*a*/.ScaleToFill : global/*e*/.resizeMode === NativeModulesDeprecated/*u*/.contain ? exports/*a*/.ScaleAspectFit : exports/*a*/.ScaleAspectFill;
                var NativeMethodsMixin/*l*/ = insetsDiffer/*S*/(this.props, {
                    style: global/*e*/,
                    resizeMode: o,
                    tintColor: global/*e*/.tintColor
                });
                return requireLazy/*r*/ ? NativeMethodsMixin/*l*/.imageTag = require/*t*/.uri : NativeMethodsMixin/*l*/.src = require/*t*/.uri, ImageSourcePropType/*d*/.createElement(module/*i*/, Object.assign({}, NativeMethodsMixin/*l*/))
            }
        }),
        w = React/*f*/.create({
            base: {
                overflow: "hidden"
            }
        }),
        C = insetsDiffer/*S*/(ImageStylePropTypes/*h*/.UIView, {
            accessible: !0,
            accessibilityLabel: !0,
            capInsets: {
                diff: createReactIOSNativeComponentClass/*y*/
            },
            imageTag: !0,
            resizeMode: !0,
            src: !0,
            testID: NativeMethodsMixin/*l*/.string
        }),
        E = StyleSheet/*g*/({
            validAttributes: insetsDiffer/*S*/(C, {
                tintColor: !0
            }),
            uiViewClassName: "RCTStaticImage"
        }),
        D = StyleSheet/*g*/({
            validAttributes: insetsDiffer/*S*/(C, {
                defaultImageSrc: !0
            }),
            uiViewClassName: "RCTNetworkImageView"
        });
    module/*i*/.exports = merge/*R*/
});