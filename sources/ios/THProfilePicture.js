__d("THProfilePicture",["Image","React","ReactGraphQL","RouteHandler","TouchableWithoutFeedback","View","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var Image/*o*/ = require/*t*/("Image"),
        React/*a*/ = require/*t*/("React"),
        ReactGraphQL/*s*/ = require/*t*/("ReactGraphQL"),
        RouteHandler/*l*/ = require/*t*/("RouteHandler"),
        TouchableWithoutFeedback/*u*/ = require/*t*/("TouchableWithoutFeedback"),
        View/*c*/ = require/*t*/("View"),
        ix/*p*/ = require/*t*/("ix"),
        d = 12,
        h = React/*a*/.createClass({
            displayName: "THProfilePicture",
            propTypes: {
                actor: React/*a*/.PropTypes.object.isRequired,
                height: React/*a*/.PropTypes.number.isRequired
            },
            mixins: [ReactGraphQL/*s*/.Mixin],
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
                RouteHandler/*l*/.getCallback({
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
                return global/*e*/.last_active_messages_status && global/*e*/.last_active_messages_status.is_currently_active && (require/*t*/ = React/*a*/.createElement(Image/*o*/, {
                    source: ix/*p*/("thPresenceBadge"),
                    style: this.state.greenDotStyle
                })), React/*a*/.createElement(TouchableWithoutFeedback/*u*/, {
                    onPress: this.onProfilePictureTapped.bind(this, global/*e*/)
                }, React/*a*/.createElement(View/*c*/, null, React/*a*/.createElement(Image/*o*/, {
                    source: global/*e*/.profile_picture || ix/*p*/("personSquare"),
                    style: this.state.imageStyle
                }), require/*t*/))
            }
        });
    module/*i*/.exports = h
});