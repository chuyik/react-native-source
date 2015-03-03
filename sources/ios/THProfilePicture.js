__d("THProfilePicture",["Image","React","ReactGraphQL","RouteHandler","TouchableWithoutFeedback","View","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        a = require/*t*/("React"),
        s = require/*t*/("ReactGraphQL"),
        l = require/*t*/("RouteHandler"),
        u = require/*t*/("TouchableWithoutFeedback"),
        c = require/*t*/("View"),
        p = require/*t*/("ix"),
        d = 12,
        h = a.createClass({
            displayName: "THProfilePicture",
            propTypes: {
                actor: a.PropTypes.object.isRequired,
                height: a.PropTypes.number.isRequired
            },
            mixins: [s.Mixin],
            statics: {
                queries: {
                    actor: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("THProfilePicture_actor", "Actor", [new global/*e*/.Field("id"), new global/*e*/.Field("name"), new global/*e*/.Field("profile_picture", [new global/*e*/.Field("uri")], null, [new global/*e*/.Callv("size", ["72", "72"])]), new global/*e*/.Field("__type__", [new global/*e*/.Field("name"), new global/*e*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new global/*e*/.Field("last_active_messages_status", [new global/*e*/.Field("is_currently_active")])], null, {
                                scope: "THProfilePicture_actor"
                            })
                        }()
                    },
                    group: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("THProfilePicture_group", "Group", [new global/*e*/.Field("id")], null, {
                                scope: "THProfilePicture_group"
                            })
                        }()
                    }
                }
            },
            getInitialState: function() {
                return {
                    imageStyle: {
                        borderRadius: this.props.height / 2,
                        height: this.props.height,
                        width: this.props.height
                    },
                    greenDotStyle: {
                        position: "absolute",
                        top: this.props.height - d + 2,
                        left: this.props.height - d + 2,
                        height: d,
                        width: d,
                        borderRadius: d / 2
                    }
                }
            },
            onProfilePictureTapped: function(global/*e*/) {
                l.getCallback({
                    typeList: [this.props.actor.__type__.name],
                    params: {
                        actor: global/*e*/,
                        group: this.props.group
                    }
                })()
            },
            render: function() {
                var global/*e*/ = this.props.actor,
                    require/*t*/ = null;
                return global/*e*/.last_active_messages_status && global/*e*/.last_active_messages_status.is_currently_active && (require/*t*/ = a.createElement(o, {
                    source: p("thPresenceBadge"),
                    style: this.state.greenDotStyle
                })), a.createElement(u, {
                    onPress: this.onProfilePictureTapped.bind(this, global/*e*/)
                }, a.createElement(c, null, a.createElement(o, {
                    source: global/*e*/.profile_picture || p("personSquare"),
                    style: this.state.imageStyle
                }), require/*t*/))
            }
        });
    module/*i*/.exports = h
});