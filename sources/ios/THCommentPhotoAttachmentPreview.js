__d("THCommentPhotoAttachmentPreview",["Image","ImageStylePropTypes","React","StyleSheet","StyleSheetPropType","TouchableOpacity","View","ViewStylePropTypes","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        a = require/*t*/("ImageStylePropTypes"),
        s = require/*t*/("React"),
        l = require/*t*/("StyleSheet"),
        u = require/*t*/("StyleSheetPropType"),
        c = require/*t*/("TouchableOpacity"),
        p = require/*t*/("View"),
        d = require/*t*/("ViewStylePropTypes"),
        h = require/*t*/("ix"),
        f = s.createClass({
            displayName: "THCommentPhotoAttachmentPreview",
            propTypes: {
                photoSource: s.PropTypes.object,
                onRemoveAttachment: s.PropTypes.func,
                style: u(a),
                wrapperStyle: u(d)
            },
            render: function() {
                var global/*e*/ = this.props.onRemoveAttachment ? s.createElement(c, {
                    onPress: this.props.onRemoveAttachment
                }, s.createElement(o, {
                    source: h("thAttachRemove"),
                    style: m.xIcon
                })) : null;
                return s.createElement(p, {
                    style: this.props.wrapperStyle
                }, s.createElement(o, {
                    source: this.props.photoSource,
                    style: this.props.style
                }), global/*e*/)
            }
        }),
        m = l.create({
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