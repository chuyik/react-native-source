__d("THLikeSentence",["FBTextWithEntities.react","React","ReactGraphQL"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBTextWithEntities.react"),
        exports/*a*/ = require/*t*/("React"),
        FBTextWithEntities.react/*s*/ = require/*t*/("ReactGraphQL"),
        React/*l*/ = 3,
        ReactGraphQL/*u*/ = exports/*a*/.createClass({
            displayName: "THLikeSentence",
            propTypes: {
                feedback: exports/*a*/.PropTypes.object.isRequired
            },
            mixins: [FBTextWithEntities.react/*s*/.Mixin],
            statics: {
                queryParams: {
                    likers_count: React/*l*/
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
                return exports/*a*/.createElement(o, {
                    text: global/*e*/
                })
            }
        });
    module/*i*/.exports = ReactGraphQL/*u*/
});