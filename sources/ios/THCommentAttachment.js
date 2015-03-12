__d("THCommentAttachment",["FBCommentAttachment","React","ReactGraphQL"],function (e, t, n, r, i) {
    "use strict";
    var FBCommentAttachment/*o*/ = t("FBCommentAttachment"),
        React/*a*/ = t("React"),
        ReactGraphQL/*s*/ = t("ReactGraphQL"),
        l = 160,
        u = React/*a*/.createClass({
            displayName: "THCommentAttachment",
            propTypes: {
                attachment: React/*a*/.PropTypes.object.isRequired
            },
            mixins: [ReactGraphQL/*s*/.Mixin],
            statics: {
                queries: {
                    attachment: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THCommentAttachment_attachment", "StoryAttachment", null, [t.__frag(e)], {
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
    i.exports = u
});