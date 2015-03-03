__d("THCommentAttachment",["FBCommentAttachment","React","ReactGraphQL"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBCommentAttachment"),
        exports/*a*/ = require/*t*/("React"),
        FBCommentAttachment/*s*/ = require/*t*/("ReactGraphQL"),
        React/*l*/ = 160,
        ReactGraphQL/*u*/ = exports/*a*/.createClass({
            displayName: "THCommentAttachment",
            propTypes: {
                attachment: exports/*a*/.PropTypes.object.isRequired
            },
            mixins: [FBCommentAttachment/*s*/.Mixin],
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
                return exports/*a*/.createElement(o, {
                    attachment: this.props.attachment,
                    backgroundColor: "#ffffff",
                    maxPhotoWidth: React/*l*/
                })
            }
        });
    module/*i*/.exports = ReactGraphQL/*u*/
});