__d("THLikeSentence",["FBTextWithEntities.react","React","ReactGraphQL"],function (e, t, n, r, i) {
    "use strict";
    var o = t("FBTextWithEntities.react"),
        React/*a*/ = t("React"),
        ReactGraphQL/*s*/ = t("ReactGraphQL"),
        l = 3,
        u = React/*a*/.createClass({
            displayName: "THLikeSentence",
            propTypes: {
                feedback: React/*a*/.PropTypes.object.isRequired
            },
            mixins: [ReactGraphQL/*s*/.Mixin],
            statics: {
                queryParams: {
                    likers_count: l
                },
                queries: {
                    feedback: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("THLikeSentence_feedback", "Feedback", [new n.Field("like_sentence", null, [t.__frag(e)]), new n.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, {
                                scope: "THLikeSentence_feedback"
                            })
                        }(o.getQuery("text"))
                    }
                }
            },
            render: function() {
                var e = this.props.feedback.like_sentence;
                return React/*a*/.createElement(o, {
                    text: e
                })
            }
        });
    i.exports = u
});