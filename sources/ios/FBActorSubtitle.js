__d("FBActorSubtitle",["React","ReactGraphQL","StylePropType","Text","fbt","isEmpty","truncate"],function (e, t, n, r, i) {
    "use strict";
    var React/*o*/ = t("React"),
        ReactGraphQL/*a*/ = t("ReactGraphQL"),
        StylePropType/*s*/ = t("StylePropType"),
        Text/*l*/ = t("Text"),
        fbt/*u*/ = t("fbt"),
        isEmpty/*c*/ = t("isEmpty"),
        truncate/*p*/ = t("truncate"),
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
                    actor: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("FBActorSubtitle_actor", "Actor", [new e.Field("__type__", [new e.Field("name"), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new e.Field("id"), new e.Field("work_experiences", [new e.Field("edges", [new e.Field("node", [new e.Field("position", [new e.Field("name"), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new e.Field("employer", [new e.Field("name"), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new e.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBActorSubtitle_actor_1"
                            }), new e.Field("page_info", [new e.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new e.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new e.Callv("first", ["1"])], null, null, {
                                connection: !0
                            }), new e.Field("education_experiences", [new e.Field("edges", [new e.Field("node", [new e.Field("school", [new e.Field("name"), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id",
                                requisite: !0
                            }), new e.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBActorSubtitle_actor_2"
                            }), new e.Field("page_info", [new e.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new e.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new e.Callv("first", ["1"])], null, null, {
                                connection: !0
                            }), new e.Field("category_names", null, null, null, null, null, {
                                plural: !0
                            })], null, {
                                scope: "FBActorSubtitle_actor"
                            })
                        }()
                    }
                }
            },
            render: function() {
                var e = this.props.actor,
                    t = e.__type__.name,
                    n = null;
                switch (t) {
                    case "User":
                        var r = e.work_experiences ? e.work_experiences.edges : null;
                        if (r && r[0] && r[0].node && r[0].node.employer) {
                            var i = r[0].node;
                            n = i.position ? fbt/*u*/({
                                type: "text",
                                texts: ["{position} at {employer}"],
                                desc: "Subtitle for user who works at given position for given employer"
                            }, [fbt/*u*/.param("position", i.position.name), fbt/*u*/.param("employer", i.employer.name)]) : fbt/*u*/({
                                type: "text",
                                texts: ["{employer}"],
                                desc: "Subtitle for user who works at unknown position for given employer"
                            }, [fbt/*u*/.param("employer", i.employer.name)]);
                            break
                        }
                        var ReactGraphQL/*a*/ = e.education_experiences ? e.education_experiences.edges : null;
                        ReactGraphQL/*a*/ && ReactGraphQL/*a*/[0] && ReactGraphQL/*a*/[0].node && ReactGraphQL/*a*/[0].node.school && (n = ReactGraphQL/*a*/[0].node.school.name);
                        break;
                    case "Page":
                        isEmpty/*c*/(e.category_names) || (n = e.category_names[0]);
                        break;
                    default:
                        console.warn("Unspecialized FBActor type: " + t)
                }
                return React/*o*/.createElement(Text/*l*/, {
                    style: [this.props.style, this.props.textStyle]
                }, truncate/*p*/(n, this.props.maxTextLength, {
                    breakOnWords: !1
                }))
            }
        });
    i.exports = d
});