__d("THCommentAttachment",["FBCommentAttachment","React","ReactGraphQL"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FBCommentAttachment/*o*/ = require/*t*/("FBCommentAttachment"),
        React/*a*/ = require/*t*/("React"),
        ReactGraphQL/*s*/ = require/*t*/("ReactGraphQL"),
        l = 160,
        u = React/*a*/.createClass({
            displayName: "THCommentAttachment",
            propTypes: {
                attachment: React/*a*/.PropTypes.object.isRequired
            },
            mixins: [ReactGraphQL/*s*/.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THCommentAttachment_attachment", "StoryAttachment", null, [require/*t*/.__frag(global/*e*/)], {
                                scope: "THCommentAttachment_attachment"
                            })
                        }(FBCommentAttachment/*o*/.getQuery("attachment"))
                    }
                }
            },
            render: function() {
                return React/*a*/.createElement(FBCommentAttachment/*o*/, {
                    attachment: this.props.attachment,
                    backgroundColor: "#ffffff",
                    maxPhotoWidth: l
                })
            }
        });
    module/*i*/.exports = u
});