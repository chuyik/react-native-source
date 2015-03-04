__d("THCommentPhotoAttachmentPreview",["Image","ImageStylePropTypes","React","StyleSheet","StyleSheetPropType","TouchableOpacity","View","ViewStylePropTypes","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var Image/*o*/ = require/*t*/("Image"),
        ImageStylePropTypes/*a*/ = require/*t*/("ImageStylePropTypes"),
        React/*s*/ = require/*t*/("React"),
        StyleSheet/*l*/ = require/*t*/("StyleSheet"),
        StyleSheetPropType/*u*/ = require/*t*/("StyleSheetPropType"),
        TouchableOpacity/*c*/ = require/*t*/("TouchableOpacity"),
        View/*p*/ = require/*t*/("View"),
        ViewStylePropTypes/*d*/ = require/*t*/("ViewStylePropTypes"),
        ix/*h*/ = require/*t*/("ix"),
        f = React/*s*/.createClass({
            displayName: "THCommentPhotoAttachmentPreview",
            propTypes: {
                photoSource: React/*s*/.PropTypes.object,
                onRemoveAttachment: React/*s*/.PropTypes.func,
                style: StyleSheetPropType/*u*/(ImageStylePropTypes/*a*/),
                wrapperStyle: StyleSheetPropType/*u*/(ViewStylePropTypes/*d*/)
            },
            render: function() {
                var global/*e*/ = this.props.onRemoveAttachment ? React/*s*/.createElement(TouchableOpacity/*c*/, {
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
                }), global/*e*/)
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
    module/*i*/.exports = f
});