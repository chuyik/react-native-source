__d("EntitySearchSource",["AbstractGraphQLSearchSource","PixelRatio","SearchableEntry","getURIForEntity","rql"],function (e, t, n, r, i) {
    function o(e) {
        return e ? function(e) {
            var t = rql/*g*/.__GraphQL;
            return new t.QueryFragment("EntitySearchSource_f0", "Actor", [new t.Field("groups", [new t.Field("edges", [new t.Field("node", [new t.Field("id", null, null, null, null, null, {
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new t.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new t.Field("page_info", [new t.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new t.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, [new t.Callv("find", [rql/*g*/.__var(e)])], null, null, {
                connection: !0
            }), new t.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })])
        }(e) : null
    }

    function a(e) {
        return function(e, t, n) {
            var r = rql/*g*/.__GraphQL;
            return new r.QueryFragment("EntitySearchSource_f0", "Actor", [new r.Field("__type__", [new r.Field("name"), new r.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new r.Field("id"), new r.Field("is_viewer_friend"), new r.Field("name"), new r.Field("url", null, null, [new r.Callv("site", ["mobile"])]), new r.Field("username"), new r.Field("profile_picture", [new r.Field("uri")], null, [new r.Callv("scale", [rql/*g*/.__var(e)]), new r.Callv("size", [rql/*g*/.__var(t)])])], [rql/*g*/.__frag(n)])
        }(PixelRatio/*h*/.get(), v, o(e))
    }

    function s(e) {
        var t = e.groupID;
        return function(e, t) {
            var n = rql/*g*/.__GraphQL;
            return new n.Query("viewer", null, [new n.Field("actor", [new n.Field("friends", [new n.Field("edges", [new n.Field("node", [new n.Field("id", null, null, null, null, null, {
                requisite: !0
            })], [rql/*g*/.__frag(t)], null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new n.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new n.Field("page_info", [new n.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new n.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, [new n.Callv("orderby", ["importance"], {
                varargs: 1
            }), new n.Callv("first", [rql/*g*/.__var(e)])], null, null, {
                connection: !0
            }), new n.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })], null, null, "EntitySearchSource_q0")
        }(y, a(t))
    }

    function l(e, t) {
        var n, r = t.entityTypes,
            i = t.groupID;
        return n = r ? function(e, t, n) {
                var r = rql/*g*/.__GraphQL;
                return new r.QueryFragment("EntitySearchSource_f0", "SearchableEntitiesQuery", [new r.Field("search_results", [new r.Field("edges", [new r.Field("node", [new r.Field("id", null, null, null, null, null, {
                    requisite: !0
                })], [rql/*g*/.__frag(n)], null, null, null, {
                    rootCall: "node",
                    pk: "id",
                    requisite: !0
                }), new r.Field("cursor", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    plural: !0
                }), new r.Field("page_info", [new r.Field("has_next_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                }), new r.Field("has_previous_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, [new r.Callv("context", ["mentions"]), new r.Callv("of_type", [rql/*g*/.__var(e)], {
                    varargs: 1
                }), new r.Callv("first", [rql/*g*/.__var(t)])], null, null, {
                    connection: !0,
                    nonFindable: !0
                }), new r.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })])
            }(r, _, a(i)) : function(e, t) {
                var n = rql/*g*/.__GraphQL;
                return new n.QueryFragment("EntitySearchSource_f1", "SearchableEntitiesQuery", [new n.Field("search_results", [new n.Field("edges", [new n.Field("node", [new n.Field("id", null, null, null, null, null, {
                    requisite: !0
                })], [rql/*g*/.__frag(t)], null, null, null, {
                    rootCall: "node",
                    pk: "id",
                    requisite: !0
                }), new n.Field("cursor", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    plural: !0
                }), new n.Field("page_info", [new n.Field("has_next_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                }), new n.Field("has_previous_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, [new n.Callv("context", ["mentions"]), new n.Callv("first", [rql/*g*/.__var(e)])], null, null, {
                    connection: !0,
                    nonFindable: !0
                }), new n.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })])
            }(_, a(i)),
            function(e, t) {
                var n = rql/*g*/.__GraphQL;
                return new n.Query("entities_named", [rql/*g*/.__var(e)], [new n.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], [rql/*g*/.__frag(t)], null, "EntitySearchSource_q0")
            }(e.value, n)
    }

    function u(e, t) {
        var n = e.node,
            r = n.groups && n.groups.edges.length > 0,
            i = (n.is_viewer_friend ? 0 : r ? 10 : 20) + t / _;
        return new SearchableEntry/*f*/({
            uniqueID: n.id,
            title: n.name,
            photo: n.profile_picture && n.profile_picture.uri,
            order: i,
            type: n.__type__.name,
            uri: String(getURIForEntity/*m*/(n) || n.url),
            auxiliaryData: {
                isMemberOfGroup: r
            }
        })
    }

    function c(e, t) {
        var n = [];
        return e && (e.viewer && e.viewer.actor ? n = e.viewer.actor.friends && e.viewer.actor.friends.edges : e.search_results && (n = e.search_results.edges)), n.map(t)
    }

    function p(e) {
        "use strict";
        this.config = e || {};
        var t = this.config.bootstrapFriends ? [{
            createQuery: s.bind(null, this.config)
        }] : null;
        AbstractGraphQLSearchSource/*d*/.call(this, {
            bootstrapRequests: t,
            getAllForEmptyQuery: !0,
            queryRequests: [{
                createQuery: function(e) {
                    return l(e, this.config)
                }.bind(this)
            }],
            packageFn: u
        }, c)
    }
    var AbstractGraphQLSearchSource/*d*/ = t("AbstractGraphQLSearchSource"),
        PixelRatio/*h*/ = t("PixelRatio"),
        SearchableEntry/*f*/ = t("SearchableEntry"),
        getURIForEntity/*m*/ = t("getURIForEntity"),
        rql/*g*/ = t("rql"),
        _ = 20,
        y = 50,
        v = 34;
    for (var S in AbstractGraphQLSearchSource/*d*/) AbstractGraphQLSearchSource/*d*/.hasOwnProperty(S) && (p[S] = AbstractGraphQLSearchSource/*d*/[S]);
    var b = null === AbstractGraphQLSearchSource/*d*/ ? null : AbstractGraphQLSearchSource/*d*/.prototype;
    p.prototype = Object.create(b), p.prototype.constructor = p, p.__superConstructor__ = AbstractGraphQLSearchSource/*d*/, i.exports = p
});