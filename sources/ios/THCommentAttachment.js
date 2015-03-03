__d("THCommentAttachment",["FBCommentAttachment","React","ReactGraphQL"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBCommentAttachment"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactGraphQL"),
        l = 160,
        u = a.createClass({
            displayName: "THCommentAttachment",
            propTypes: {
                attachment: a.PropTypes.object.isRequired
            },
            mixins: [s.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THCommentAttachment_attachment", "StoryAttachment", null, [require/*t*/.__frag(global/*e*/)], {
                                scope: "THCommentAttachment_attachment"
                            })
                        }(o.getQuery("attachment"))
                    }
                }
            },
            render: function() {
                return a.createElement(o, {
                    attachment: this.props.attachment,
                    backgroundColor: "#ffffff",
                    maxPhotoWidth: l
                })
            }
        });
    module/*i*/.exports = u
});