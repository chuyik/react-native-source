__d("FBActorSubtitle",["React","ReactGraphQL","StylePropType","Text","fbt","isEmpty","truncate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var React/*o*/ = require/*t*/("React"),
        ReactGraphQL/*a*/ = require/*t*/("ReactGraphQL"),
        StylePropType/*s*/ = require/*t*/("StylePropType"),
        Text/*l*/ = require/*t*/("Text"),
        fbt/*u*/ = require/*t*/("fbt"),
        isEmpty/*c*/ = require/*t*/("isEmpty"),
        truncate/*p*/ = require/*t*/("truncate"),
        d = React/*o*/.createClass({
            displayName: "FBActorSubtitle",
            propTypes: {
                actor: React/*o*/.PropTypes.object.isRequired,
                maxTextLength: React/*o*/.PropTypes.number,
                textStyle: StylePropType/*s*/
            },
            getDefaultProps: function() {
                return {
                    maxTextLength: 25
                }
            },
            mixins: [ReactGraphQL/*a*/.Mixin],
            statics: {
                queries: {
                    actor: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("FBActorSubtitle_actor", "Actor", [new global/*e*/.Field("__type__", [new global/*e*/.Field("name"), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new global/*e*/.Field("id"), new global/*e*/.Field("work_experiences", [new global/*e*/.Field("edges", [new global/*e*/.Field("node", [new global/*e*/.Field("position", [new global/*e*/.Field("name"), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new global/*e*/.Field("employer", [new global/*e*/.Field("name"), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new global/*e*/.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBActorSubtitle_actor_1"
                            }), new global/*e*/.Field("page_info", [new global/*e*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new global/*e*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new global/*e*/.Callv("first", ["1"])], null, null, {
                                connection: !0
                            }), new global/*e*/.Field("education_experiences", [new global/*e*/.Field("edges", [new global/*e*/.Field("node", [new global/*e*/.Field("school", [new global/*e*/.Field("name"), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new global/*e*/.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBActorSubtitle_actor_2"
                            }), new global/*e*/.Field("page_info", [new global/*e*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new global/*e*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new global/*e*/.Callv("first", ["1"])], null, null, {
                                connection: !0
                            }), new global/*e*/.Field("category_names", null, null, null, null, null, {
                                plural: !0
                            })], null, {
                                scope: "FBActorSubtitle_actor"
                            })
                        }()
                    }
                }
            },
            render: function() {
                var global/*e*/ = this.props.actor,
                    require/*t*/ = global/*e*/.__type__.name,
                    requireDynamic/*n*/ = null;
                switch (require/*t*/) {
                    case "User":
                        var requireLazy/*r*/ = global/*e*/.work_experiences ? global/*e*/.work_experiences.edges : null;
                        if (requireLazy/*r*/ && requireLazy/*r*/[0] && requireLazy/*r*/[0].node && requireLazy/*r*/[0].node.employer) {
                            var module/*i*/ = requireLazy/*r*/[0].node;
                            requireDynamic/*n*/ = module/*i*/.position ? fbt/*u*/({
                                type: "text",
                                texts: ["{position} at {employer}"],
                                desc: "Subtitle for user who works at given position for given employer"
                            }, [fbt/*u*/.param("position", module/*i*/.position.name), fbt/*u*/.param("employer", module/*i*/.employer.name)]) : fbt/*u*/({
                                type: "text",
                                texts: ["{employer}"],
                                desc: "Subtitle for user who works at unknown position for given employer"
                            }, [fbt/*u*/.param("employer", module/*i*/.employer.name)]);
                            break
                        }
                        var ReactGraphQL/*a*/ = global/*e*/.education_experiences ? global/*e*/.education_experiences.edges : null;
                        ReactGraphQL/*a*/ && ReactGraphQL/*a*/[0] && ReactGraphQL/*a*/[0].node && ReactGraphQL/*a*/[0].node.school && (requireDynamic/*n*/ = ReactGraphQL/*a*/[0].node.school.name);
                        break;
                    case "Page":
                        isEmpty/*c*/(global/*e*/.category_names) || (requireDynamic/*n*/ = global/*e*/.category_names[0]);
                        break;
                    default:
                        console.warn("Unspecialized FBActor type: " + require/*t*/)
                }
                return React/*o*/.createElement(Text/*l*/, {
                    style: [this.props.style, this.props.textStyle]
                }, truncate/*p*/(requireDynamic/*n*/, this.props.maxTextLength, {
                    breakOnWords: !1
                }))
            }
        });
    module/*i*/.exports = d
});