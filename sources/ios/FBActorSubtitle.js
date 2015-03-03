__d("FBActorSubtitle",["React","ReactGraphQL","StylePropType","Text","fbt","isEmpty","truncate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("React"),
        exports/*a*/ = require/*t*/("ReactGraphQL"),
        React/*s*/ = require/*t*/("StylePropType"),
        ReactGraphQL/*l*/ = require/*t*/("Text"),
        StylePropType/*u*/ = require/*t*/("fbt"),
        Text/*c*/ = require/*t*/("isEmpty"),
        fbt/*p*/ = require/*t*/("truncate"),
        isEmpty/*d*/ = o.createClass({
            displayName: "FBActorSubtitle",
            truncate/*propTypes*/: {
                actor: o.PropTypes.object.isRequired,
                maxTextLength: o.PropTypes.number,
                textStyle: React/*s*/
            },
            getDefaultProps: function() {
                return {
                    maxTextLength: 25
                }
            },
            mixins: [exports/*a*/.Mixin],
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
                            requireDynamic/*n*/ = module/*i*/.position ? StylePropType/*u*/({
                                type: "text",
                                texts: ["{position} at {employer}"],
                                desc: "Subtitle for user who works at given position for given employer"
                            }, [StylePropType/*u*/.param("position", module/*i*/.position.name), StylePropType/*u*/.param("employer", module/*i*/.employer.name)]) : StylePropType/*u*/({
                                type: "text",
                                texts: ["{employer}"],
                                desc: "Subtitle for user who works at unknown position for given employer"
                            }, [StylePropType/*u*/.param("employer", module/*i*/.employer.name)]);
                            break
                        }
                        var exports/*a*/ = global/*e*/.education_experiences ? global/*e*/.education_experiences.edges : null;
                        exports/*a*/ && exports/*a*/[0] && exports/*a*/[0].node && exports/*a*/[0].node.school && (requireDynamic/*n*/ = exports/*a*/[0].node.school.name);
                        break;
                    case "Page":
                        Text/*c*/(global/*e*/.category_names) || (requireDynamic/*n*/ = global/*e*/.category_names[0]);
                        break;
                    default:
                        console.warn("Unspecialized FBActor type: " + require/*t*/)
                }
                return o.createElement(ReactGraphQL/*l*/, {
                    style: [this.props.style, this.props.textStyle]
                }, fbt/*p*/(requireDynamic/*n*/, this.props.maxTextLength, {
                    breakOnWords: !1
                }))
            }
        });
    module/*i*/.exports = isEmpty/*d*/
});