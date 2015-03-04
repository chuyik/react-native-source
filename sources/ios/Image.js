__d("Image",["EdgeInsetsPropType","NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","ImageResizeMode","ImageSourcePropType","ImageStylePropTypes","React","ReactIOSViewAttributes","StyleSheet","StyleSheetPropType","createReactIOSNativeComponentClass","flattenStyle","insetsDiffer","invariant","merge","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var EdgeInsetsPropType/*o*/ = require/*t*/("EdgeInsetsPropType"),
        NativeMethodsMixin/*a*/ = require/*t*/("NativeMethodsMixin"),
        NativeModulesDeprecated/*s*/ = require/*t*/("NativeModulesDeprecated"),
        ReactPropTypes/*l*/ = require/*t*/("ReactPropTypes"),
        ImageResizeMode/*u*/ = require/*t*/("ImageResizeMode"),
        ImageSourcePropType/*c*/ = require/*t*/("ImageSourcePropType"),
        ImageStylePropTypes/*p*/ = require/*t*/("ImageStylePropTypes"),
        React/*d*/ = require/*t*/("React"),
        ReactIOSViewAttributes/*h*/ = require/*t*/("ReactIOSViewAttributes"),
        StyleSheet/*f*/ = require/*t*/("StyleSheet"),
        StyleSheetPropType/*m*/ = require/*t*/("StyleSheetPropType"),
        createReactIOSNativeComponentClass/*g*/ = require/*t*/("createReactIOSNativeComponentClass"),
        flattenStyle/*_*/ = require/*t*/("flattenStyle"),
        insetsDiffer/*y*/ = require/*t*/("insetsDiffer"),
        invariant/*v*/ = require/*t*/("invariant"),
        merge/*S*/ = require/*t*/("merge"),
        warning/*b*/ = require/*t*/("warning"),
        R = React/*d*/.createClass({
            displayName: "Image",
            propTypes: {
                source: ImageSourcePropType/*c*/,
                accessible: ReactPropTypes/*l*/.bool,
                accessibilityLabel: ReactPropTypes/*l*/.string,
                capInsets: EdgeInsetsPropType/*o*/,
                style: StyleSheetPropType/*m*/(ImageStylePropTypes/*p*/),
                testID: ReactPropTypes/*l*/.string
            },
            statics: {
                resizeMode: ImageResizeMode/*u*/,
                sourcePropType: ImageSourcePropType/*c*/
            },
            mixins: [NativeMethodsMixin/*a*/],
            viewConfig: {
                uiViewClassName: "UIView",
                validAttributes: ReactIOSViewAttributes/*h*/.UIView
            },
            render: function() {
                var global/*e*/ = flattenStyle/*_*/([w.base, this.props.style]),
                    require/*t*/ = this.props.source,
                    requireDynamic/*n*/ = require/*t*/.uri && require/*t*/.uri.match(/^https?:/);
                requireDynamic/*n*/ && require/*t*/.isStatic && invariant/*v*/(0, 'static image uris cannot start with "http": "' + require/*t*/.uri + '"');
                var requireLazy/*r*/ = !require/*t*/.isStatic && !requireDynamic/*n*/,
                    module/*i*/ = requireDynamic/*n*/ ? D : E;
                this.props.style && this.props.style.tintColor && warning/*b*/(module/*i*/ === E, "tintColor style only supported on static images.");
                var EdgeInsetsPropType/*o*/, NativeMethodsMixin/*a*/ = NativeModulesDeprecated/*s*/.RKUIManager.UIView.ContentMode;
                EdgeInsetsPropType/*o*/ = global/*e*/.resizeMode === ImageResizeMode/*u*/.stretch ? NativeMethodsMixin/*a*/.ScaleToFill : global/*e*/.resizeMode === ImageResizeMode/*u*/.contain ? NativeMethodsMixin/*a*/.ScaleAspectFit : NativeMethodsMixin/*a*/.ScaleAspectFill;
                var ReactPropTypes/*l*/ = merge/*S*/(this.props, {
                    style: global/*e*/,
                    resizeMode: EdgeInsetsPropType/*o*/,
                    tintColor: global/*e*/.tintColor
                });
                return requireLazy/*r*/ ? ReactPropTypes/*l*/.imageTag = require/*t*/.uri : ReactPropTypes/*l*/.src = require/*t*/.uri, React/*d*/.createElement(module/*i*/, Object.assign({}, ReactPropTypes/*l*/))
            }
        }),
        w = StyleSheet/*f*/.create({
            base: {
                overflow: "hidden"
            }
        }),
        C = merge/*S*/(ReactIOSViewAttributes/*h*/.UIView, {
            accessible: !0,
            accessibilityLabel: !0,
            capInsets: {
                diff: insetsDiffer/*y*/
            },
            imageTag: !0,
            resizeMode: !0,
            src: !0,
            testID: ReactPropTypes/*l*/.string
        }),
        E = createReactIOSNativeComponentClass/*g*/({
            validAttributes: merge/*S*/(C, {
                tintColor: !0
            }),
            uiViewClassName: "RCTStaticImage"
        }),
        D = createReactIOSNativeComponentClass/*g*/({
            validAttributes: merge/*S*/(C, {
                defaultImageSrc: !0
            }),
            uiViewClassName: "RCTNetworkImageView"
        });
    module/*i*/.exports = R
});