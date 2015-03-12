__d("THProfilePicture",["Image","React","ReactGraphQL","RouteHandler","TouchableWithoutFeedback","View","ix"],function (e, t, n, r, i) {
    "use strict";
    var Image/*o*/ = t("Image"),
        React/*a*/ = t("React"),
        ReactGraphQL/*s*/ = t("ReactGraphQL"),
        RouteHandler/*l*/ = t("RouteHandler"),
        TouchableWithoutFeedback/*u*/ = t("TouchableWithoutFeedback"),
        View/*c*/ = t("View"),
        ix/*p*/ = t("ix"),
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
                    actor: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("THProfilePicture_actor", "Actor", [new e.Field("id"), new e.Field("name"), new e.Field("profile_picture", [new e.Field("uri")], null, [new e.Callv("size", ["72", "72"])]), new e.Field("__type__", [new e.Field("name"), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new e.Field("last_active_messages_status", [new e.Field("is_currently_active")])], null, {
                                scope: "THProfilePicture_actor"
                            })
                        }()
                    },
                    group: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("THProfilePicture_group", "Group", [new e.Field("id")], null, {
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
            onProfilePictureTapped: function(e) {
                RouteHandler/*l*/.getCallback({
                    typeList: [this.props.actor.__type__.name],
                    params: {
                        actor: e,
                        group: this.props.group
                    }
                })()
            },
            render: function() {
                var e = this.props.actor,
                    t = null;
                return e.last_active_messages_status && e.last_active_messages_status.is_currently_active && (t = React/*a*/.createElement(Image/*o*/, {
                    source: ix/*p*/("thPresenceBadge"),
                    style: this.state.greenDotStyle
                })), React/*a*/.createElement(TouchableWithoutFeedback/*u*/, {
                    onPress: this.onProfilePictureTapped.bind(this, e)
                }, React/*a*/.createElement(View/*c*/, null, React/*a*/.createElement(Image/*o*/, {
                    source: e.profile_picture || ix/*p*/("personSquare"),
                    style: this.state.imageStyle
                }), t))
            }
        });
    i.exports = h
});