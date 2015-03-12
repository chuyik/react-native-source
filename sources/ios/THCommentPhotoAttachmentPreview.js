__d("THCommentPhotoAttachmentPreview",["Image","ImageStylePropTypes","React","StyleSheet","StyleSheetPropType","TouchableOpacity","View","ViewStylePropTypes","ix"],function (e, t, n, r, i) {
    "use strict";
    var Image/*o*/ = t("Image"),
        ImageStylePropTypes/*a*/ = t("ImageStylePropTypes"),
        React/*s*/ = t("React"),
        StyleSheet/*l*/ = t("StyleSheet"),
        StyleSheetPropType/*u*/ = t("StyleSheetPropType"),
        TouchableOpacity/*c*/ = t("TouchableOpacity"),
        View/*p*/ = t("View"),
        ViewStylePropTypes/*d*/ = t("ViewStylePropTypes"),
        ix/*h*/ = t("ix"),
        f = React/*s*/.createClass({
            displayName: "THCommentPhotoAttachmentPreview",
            propTypes: {
                photoSource: React/*s*/.PropTypes.object,
                onRemoveAttachment: React/*s*/.PropTypes.func,
                style: StyleSheetPropType/*u*/(ImageStylePropTypes/*a*/),
                wrapperStyle: StyleSheetPropType/*u*/(ViewStylePropTypes/*d*/)
            },
            render: function() {
                var e = this.props.onRemoveAttachment ? React/*s*/.createElement(TouchableOpacity/*c*/, {
                    onPress: this.props.onRemoveAttachment
                }, React/*s*/.createElement(Image/*o*/, {
                    source: ix/*h*/("thAttachRemove"),
                    style: m.xIcon
                })) : null;
                return React/*s*/.createElement(View/*p*/, {
                    style: this.props.wrapperStyle
                }, React/*s*/.createElement(Image/*o*/, {
                    source: this.props.photoSource,
                    style: this.props.style
                }), e)
            }
        }),
        m = StyleSheet/*l*/.create({
            xIcon: {
                width: 20,
                height: 20,
                top: -5,
                right: 0,
                position: "absolute",
                backgroundColor: "transparent"
            }
        });
    i.exports = f
});