__d("Image",["EdgeInsetsPropType","NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","ImageResizeMode","ImageSourcePropType","ImageStylePropTypes","React","ReactIOSViewAttributes","StyleSheet","StyleSheetPropType","createReactIOSNativeComponentClass","flattenStyle","insetsDiffer","invariant","merge","warning"],function (e, t, n, r, i) {
    "use strict";
    var EdgeInsetsPropType/*o*/ = t("EdgeInsetsPropType"),
        NativeMethodsMixin/*a*/ = t("NativeMethodsMixin"),
        NativeModulesDeprecated/*s*/ = t("NativeModulesDeprecated"),
        ReactPropTypes/*l*/ = t("ReactPropTypes"),
        ImageResizeMode/*u*/ = t("ImageResizeMode"),
        ImageSourcePropType/*c*/ = t("ImageSourcePropType"),
        ImageStylePropTypes/*p*/ = t("ImageStylePropTypes"),
        React/*d*/ = t("React"),
        ReactIOSViewAttributes/*h*/ = t("ReactIOSViewAttributes"),
        StyleSheet/*f*/ = t("StyleSheet"),
        StyleSheetPropType/*m*/ = t("StyleSheetPropType"),
        createReactIOSNativeComponentClass/*g*/ = t("createReactIOSNativeComponentClass"),
        flattenStyle/*_*/ = t("flattenStyle"),
        insetsDiffer/*y*/ = t("insetsDiffer"),
        invariant/*v*/ = t("invariant"),
        merge/*S*/ = t("merge"),
        warning/*b*/ = t("warning"),
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
                var e = flattenStyle/*_*/([w.base, this.props.style]),
                    t = this.props.source,
                    n = t.uri && t.uri.match(/^https?:/);
                n && t.isStatic && invariant/*v*/(0, 'static image uris cannot start with "http": "' + t.uri + '"');
                var r = !t.isStatic && !n,
                    i = n ? D : E;
                this.props.style && this.props.style.tintColor && warning/*b*/(i === E, "tintColor style only supported on static images.");
                var EdgeInsetsPropType/*o*/, NativeMethodsMixin/*a*/ = NativeModulesDeprecated/*s*/.RKUIManager.UIView.ContentMode;
                EdgeInsetsPropType/*o*/ = e.resizeMode === ImageResizeMode/*u*/.stretch ? NativeMethodsMixin/*a*/.ScaleToFill : e.resizeMode === ImageResizeMode/*u*/.contain ? NativeMethodsMixin/*a*/.ScaleAspectFit : NativeMethodsMixin/*a*/.ScaleAspectFill;
                var ReactPropTypes/*l*/ = merge/*S*/(this.props, {
                    style: e,
                    resizeMode: EdgeInsetsPropType/*o*/,
                    tintColor: e.tintColor
                });
                return r ? ReactPropTypes/*l*/.imageTag = t.uri : ReactPropTypes/*l*/.src = t.uri, React/*d*/.createElement(i, Object.assign({}, ReactPropTypes/*l*/))
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
    i.exports = R
});