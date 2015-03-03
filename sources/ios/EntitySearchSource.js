__d("EntitySearchSource",["AbstractGraphQLSearchSource","PixelRatio","SearchableEntry","getURIForEntity","rql"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return global/*e*/ ? function(global/*e*/) {
            var require/*t*/ = g.__GraphQL;
            return new require/*t*/.QueryFragment("EntitySearchSource_f0", "Actor", [new require/*t*/.Field("groups", [new require/*t*/.Field("edges", [new require/*t*/.Field("node", [new require/*t*/.Field("id", null, null, null, null, null, {
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new require/*t*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new require/*t*/.Field("page_info", [new require/*t*/.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new require/*t*/.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, [new require/*t*/.Callv("find", [g.__var(global/*e*/)])], null, null, {
                connection: !0
            }), new require/*t*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })])
        }(global/*e*/) : null
    }

    function a(global/*e*/) {
        return function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = g.__GraphQL;
            return new requireLazy/*r*/.QueryFragment("EntitySearchSource_f0", "Actor", [new requireLazy/*r*/.Field("__type__", [new requireLazy/*r*/.Field("name"), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            }), new requireLazy/*r*/.Field("id"), new requireLazy/*r*/.Field("is_viewer_friend"), new requireLazy/*r*/.Field("name"), new requireLazy/*r*/.Field("url", null, null, [new requireLazy/*r*/.Callv("site", ["mobile"])]), new requireLazy/*r*/.Field("username"), new requireLazy/*r*/.Field("profile_picture", [new requireLazy/*r*/.Field("uri")], null, [new requireLazy/*r*/.Callv("scale", [g.__var(global/*e*/)]), new requireLazy/*r*/.Callv("size", [g.__var(require/*t*/)])])], [g.__frag(requireDynamic/*n*/)])
        }(h.get(), v, o(global/*e*/))
    }

    function s(global/*e*/) {
        var require/*t*/ = global/*e*/.groupID;
        return function(global/*e*/, require/*t*/) {
            var requireDynamic/*n*/ = g.__GraphQL;
            return new requireDynamic/*n*/.Query("viewer", null, [new requireDynamic/*n*/.Field("actor", [new requireDynamic/*n*/.Field("friends", [new requireDynamic/*n*/.Field("edges", [new requireDynamic/*n*/.Field("node", [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                requisite: !0
            })], [g.__frag(require/*t*/)], null, null, null, {
                rootCall: "node",
                pk: "id",
                requisite: !0
            }), new requireDynamic/*n*/.Field("cursor", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                plural: !0
            }), new requireDynamic/*n*/.Field("page_info", [new requireDynamic/*n*/.Field("has_next_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            }), new requireDynamic/*n*/.Field("has_previous_page", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, [new requireDynamic/*n*/.Callv("orderby", ["importance"], {
                varargs: 1
            }), new requireDynamic/*n*/.Callv("first", [g.__var(global/*e*/)])], null, null, {
                connection: !0
            }), new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                generated: !0,
                requisite: !0
            })], null, null, null, null, {
                rootCall: "node",
                pk: "id"
            })], null, null, "EntitySearchSource_q0")
        }(y, a(require/*t*/))
    }

    function l(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/, requireLazy/*r*/ = require/*t*/.entityTypes,
            module/*i*/ = require/*t*/.groupID;
        return requireDynamic/*n*/ = requireLazy/*r*/ ? function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = g.__GraphQL;
                return new requireLazy/*r*/.QueryFragment("EntitySearchSource_f0", "SearchableEntitiesQuery", [new requireLazy/*r*/.Field("search_results", [new requireLazy/*r*/.Field("edges", [new requireLazy/*r*/.Field("node", [new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                    requisite: !0
                })], [g.__frag(requireDynamic/*n*/)], null, null, null, {
                    rootCall: "node",
                    pk: "id",
                    requisite: !0
                }), new requireLazy/*r*/.Field("cursor", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    plural: !0
                }), new requireLazy/*r*/.Field("page_info", [new requireLazy/*r*/.Field("has_next_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                }), new requireLazy/*r*/.Field("has_previous_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, [new requireLazy/*r*/.Callv("context", ["mentions"]), new requireLazy/*r*/.Callv("of_type", [g.__var(global/*e*/)], {
                    varargs: 1
                }), new requireLazy/*r*/.Callv("first", [g.__var(require/*t*/)])], null, null, {
                    connection: !0,
                    nonFindable: !0
                }), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })])
            }(requireLazy/*r*/, _, a(module/*i*/)) : function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = g.__GraphQL;
                return new requireDynamic/*n*/.QueryFragment("EntitySearchSource_f1", "SearchableEntitiesQuery", [new requireDynamic/*n*/.Field("search_results", [new requireDynamic/*n*/.Field("edges", [new requireDynamic/*n*/.Field("node", [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                    requisite: !0
                })], [g.__frag(require/*t*/)], null, null, null, {
                    rootCall: "node",
                    pk: "id",
                    requisite: !0
                }), new requireDynamic/*n*/.Field("cursor", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    plural: !0
                }), new requireDynamic/*n*/.Field("page_info", [new requireDynamic/*n*/.Field("has_next_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                }), new requireDynamic/*n*/.Field("has_previous_page", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], null, [new requireDynamic/*n*/.Callv("context", ["mentions"]), new requireDynamic/*n*/.Callv("first", [g.__var(global/*e*/)])], null, null, {
                    connection: !0,
                    nonFindable: !0
                }), new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })])
            }(_, a(module/*i*/)),
            function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = g.__GraphQL;
                return new requireDynamic/*n*/.Query("entities_named", [g.__var(global/*e*/)], [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                    generated: !0,
                    requisite: !0
                })], [g.__frag(require/*t*/)], null, "EntitySearchSource_q0")
            }(global/*e*/.value, requireDynamic/*n*/)
    }

    function u(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = global/*e*/.node,
            requireLazy/*r*/ = requireDynamic/*n*/.groups && requireDynamic/*n*/.groups.edges.length > 0,
            module/*i*/ = (requireDynamic/*n*/.is_viewer_friend ? 0 : requireLazy/*r*/ ? 10 : 20) + require/*t*/ / _;
        return new f({
            uniqueID: requireDynamic/*n*/.id,
            title: requireDynamic/*n*/.name,
            photo: requireDynamic/*n*/.profile_picture && requireDynamic/*n*/.profile_picture.uri,
            order: module/*i*/,
            type: requireDynamic/*n*/.__type__.name,
            uri: String(m(requireDynamic/*n*/) || requireDynamic/*n*/.url),
            auxiliaryData: {
                isMemberOfGroup: requireLazy/*r*/
            }
        })
    }

    function c(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = [];
        return global/*e*/ && (global/*e*/.viewer && global/*e*/.viewer.actor ? requireDynamic/*n*/ = global/*e*/.viewer.actor.friends && global/*e*/.viewer.actor.friends.edges : global/*e*/.search_results && (requireDynamic/*n*/ = global/*e*/.search_results.edges)), requireDynamic/*n*/.map(require/*t*/)
    }

    function p(global/*e*/) {
        "use strict";
        this.config = global/*e*/ || {};
        var require/*t*/ = this.config.bootstrapFriends ? [{
            createQuery: s.bind(null, this.config)
        }] : null;
        d.call(this, {
            bootstrapRequests: require/*t*/,
            getAllForEmptyQuery: !0,
            queryRequests: [{
                createQuery: function(global/*e*/) {
                    return l(global/*e*/, this.config)
                }.bind(this)
            }],
            packageFn: u
        }, c)
    }
    var d = require/*t*/("AbstractGraphQLSearchSource"),
        h = require/*t*/("PixelRatio"),
        f = require/*t*/("SearchableEntry"),
        m = require/*t*/("getURIForEntity"),
        g = require/*t*/("rql"),
        _ = 20,
        y = 50,
        v = 34;
    for (var S in d) d.hasOwnProperty(S) && (p[S] = d[S]);
    var b = null === d ? null : d.prototype;
    p.prototype = Object.create(b), p.prototype.constructor = p, p.__superConstructor__ = d, module/*i*/.exports = p
});