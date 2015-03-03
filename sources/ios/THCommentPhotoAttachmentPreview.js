__d("THCommentPhotoAttachmentPreview",["Image","ImageStylePropTypes","React","StyleSheet","StyleSheetPropType","TouchableOpacity","View","ViewStylePropTypes","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        exports/*a*/ = require/*t*/("ImageStylePropTypes"),
        Image/*s*/ = require/*t*/("React"),
        ImageStylePropTypes/*l*/ = require/*t*/("StyleSheet"),
        React/*u*/ = require/*t*/("StyleSheetPropType"),
        StyleSheet/*c*/ = require/*t*/("TouchableOpacity"),
        StyleSheetPropType/*p*/ = require/*t*/("View"),
        TouchableOpacity/*d*/ = require/*t*/("ViewStylePropTypes"),
        View/*h*/ = require/*t*/("ix"),
        ViewStylePropTypes/*f*/ = Image/*s*/.createClass({
            displayName: "THCommentPhotoAttachmentPreview",
            ix/*propTypes*/: {
                photoSource: Image/*s*/.PropTypes.object,
                onRemoveAttachment: Image/*s*/.PropTypes.func,
                style: React/*u*/(exports/*a*/),
                wrapperStyle: React/*u*/(TouchableOpacity/*d*/)
            },
            render: function() {
                var global/*e*/ = this.props.onRemoveAttachment ? Image/*s*/.createElement(StyleSheet/*c*/, {
                    onPress: this.props.onRemoveAttachment
                }, Image/*s*/.createElement(o, {
                    source: View/*h*/("thAttachRemove"),
                    style: m.xIcon
                })) : null;
                return Image/*s*/.createElement(StyleSheetPropType/*p*/, {
                    style: this.props.wrapperStyle
                }, Image/*s*/.createElement(o, {
                    source: this.props.photoSource,
                    style: this.props.style
                }), global/*e*/)
            }
        }),
        m = ImageStylePropTypes/*l*/.create({
            xIcon: {
                width: 20,
                height: 20,
                top: -5,
                right: 0,
                position: "absolute",
                backgroundColor: "transparent"
            }
        });
    module/*i*/.exports = ViewStylePropTypes/*f*/
});