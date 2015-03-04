__d("THLikeSentence",["FBTextWithEntities.react","React","ReactGraphQL"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBTextWithEntities.react"),
        React/*a*/ = require/*t*/("React"),
        ReactGraphQL/*s*/ = require/*t*/("ReactGraphQL"),
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
                    feedback: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("THLikeSentence_feedback", "Feedback", [new requireDynamic/*n*/.Field("like_sentence", null, [require/*t*/.__frag(global/*e*/)]), new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
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
                var global/*e*/ = this.props.feedback.like_sentence;
                return React/*a*/.createElement(o, {
                    text: global/*e*/
                })
            }
        });
    module/*i*/.exports = u
});