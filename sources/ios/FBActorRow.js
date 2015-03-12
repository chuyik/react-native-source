__d("FBActorRow",["FBActorSubtitle","FIGColors","Image","PixelRatio","React","ReactGraphQL","NativeModules","RouteHandler","StyleSheet","Text","TouchableBounce","View","fbt","ix"],function (e, t, n, r, i) {
    "use strict";
    var FBActorSubtitle/*o*/ = t("FBActorSubtitle"),
        FIGColors/*a*/ = t("FIGColors"),
        Image/*s*/ = t("Image"),
        PixelRatio/*l*/ = t("PixelRatio"),
        React/*u*/ = t("React"),
        ReactGraphQL/*c*/ = t("ReactGraphQL"),
        NativeModules/*p*/ = t("NativeModules").RKCurrentViewer,
        RouteHandler/*d*/ = t("RouteHandler"),
        StyleSheet/*h*/ = t("StyleSheet"),
        Text/*f*/ = t("Text"),
        TouchableBounce/*m*/ = t("TouchableBounce"),
        View/*g*/ = t("View"),
        fbt/*_*/ = t("fbt"),
        ix/*y*/ = t("ix"),
        v = PixelRatio/*l*/.get(),
        S = 40 * v,
        b = React/*u*/.createClass({
            displayName: "FBActorRow",
            propTypes: {
                circularProfilePicture: React/*u*/.PropTypes.bool,
                onPressWithCompletion: React/*u*/.PropTypes.func
            },
            getDefaultProps: function() {
                return {
                    circularProfilePicture: !1
                }
            },
            mixins: [ReactGraphQL/*c*/.Mixin],
            statics: {
                rowHeight: 60,
                queries: {
                    actor: function(e, t) {
                        return function(e, n, r) {
                            var i = t.__GraphQL;
                            return new i.QueryFragment("FBActorRow_actor", "Actor", [new i.Field("id"), new i.Field("__type__", [new i.Field("name"), new i.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new i.Field("name"), new i.Field("url", null, null, [new i.Callv("site", ["mobile"])]), new i.Field("profile_picture", [new i.Field("uri")], null, [new i.Callv("size", [t.__var(e), t.__var(n)])]), new i.Field("mutual_friends", [new i.Field("count")], null, null, null, null, {
                                connection: !0
                            }), new i.Field("is_viewer_friend")], [t.__frag(r)], {
                                scope: "FBActorRow_actor"
                            })
                        }(S, S, FBActorSubtitle/*o*/.getQuery("actor"))
                    }
                }
            },
            renderSubtitle: function() {
                var e = this.props.actor.mutual_friends.count;
                if (e && NativeModules/*p*/.userFBID !== this.props.actor.id) {
                    var t = 1 === e ? fbt/*_*/({
                        type: "text",
                        texts: ["1 Mutual Friend"],
                        desc: "Singular mutual friend count"
                    }) : fbt/*_*/({
                        type: "text",
                        texts: ["{mutual_friend_count} Mutual Friends"],
                        desc: "Mutual friend count"
                    }, [fbt/*_*/.param("mutual_friend_count", e)]);
                    return React/*u*/.createElement(Text/*f*/, {
                        style: R.subtitle
                    }, t)
                }
                return React/*u*/.createElement(FBActorSubtitle/*o*/, {
                    actor: this.props.actor,
                    textStyle: R.subtitle
                })
            },
            renderText: function() {
                return React/*u*/.createElement(View/*g*/, null, React/*u*/.createElement(Text/*f*/, {
                    style: R.name
                }, this.props.actor.name), this.renderSubtitle())
            },
            renderIsFriendIcon: function() {
                return this.props.actor.is_viewer_friend ? React/*u*/.createElement(Image/*s*/, {
                    style: R.icon,
                    source: ix/*y*/("pymkFriendsIcon")
                }) : React/*u*/.createElement(View/*g*/, null)
            },
            handlePress: function() {
                this.props.onPressWithCompletion ? this.props.onPressWithCompletion(this.handlePressComplete) : this.handlePressComplete()
            },
            handlePressComplete: function() {
                var e = this.props.actor;
                RouteHandler/*d*/.getCallback({
                    typeList: [e.__type__.name],
                    params: {
                        id: e.id
                    }
                })()
            },
            render: function() {
                var e = this.props.actor,
                    t = this.props.circularProfilePicture ? [R.profilePicture, R.circularProfilePicture] : R.profilePicture;
                return React/*u*/.createElement(View/*g*/, {
                    style: [R.container, R.row]
                }, React/*u*/.createElement(TouchableBounce/*m*/, {
                    onPress: this.handlePress.bind(this, e)
                }, React/*u*/.createElement(View/*g*/, {
                    style: R.row
                }, React/*u*/.createElement(Image/*s*/, {
                    source: e.profile_picture,
                    style: t
                }), this.renderText())), this.renderIsFriendIcon())
            }
        }),
        R = StyleSheet/*h*/.create({
            container: {
                justifyContent: "space-between"
            },
            row: {
                height: b.rowHeight,
                alignItems: "center",
                flexDirection: "row"
            },
            name: {
                color: FIGColors/*a*/.darkText,
                fontSize: 15,
                fontWeight: "bold"
            },
            subtitle: {
                color: FIGColors/*a*/.lightText,
                fontSize: 13
            },
            icon: {
                width: 28,
                height: 40
            },
            profilePicture: {
                width: S / v,
                height: S / v,
                marginRight: 10
            },
            circularProfilePicture: {
                borderRadius: S / v / 2
            }
        });
    i.exports = b
});