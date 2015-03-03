__d("FBActorRow",["FBActorSubtitle","FIGColors","Image","PixelRatio","React","ReactGraphQL","NativeModules","RouteHandler","StyleSheet","Text","TouchableBounce","View","fbt","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBActorSubtitle"),
        a = require/*t*/("FIGColors"),
        s = require/*t*/("Image"),
        l = require/*t*/("PixelRatio"),
        u = require/*t*/("React"),
        c = require/*t*/("ReactGraphQL"),
        p = require/*t*/("NativeModules").RKCurrentViewer,
        d = require/*t*/("RouteHandler"),
        h = require/*t*/("StyleSheet"),
        f = require/*t*/("Text"),
        m = require/*t*/("TouchableBounce"),
        g = require/*t*/("View"),
        _ = require/*t*/("fbt"),
        y = require/*t*/("ix"),
        v = l.get(),
        S = 40 * v,
        b = u.createClass({
            displayName: "FBActorRow",
            propTypes: {
                circularProfilePicture: u.PropTypes.bool,
                onPressWithCompletion: u.PropTypes.func
            },
            getDefaultProps: function() {
                return {
                    circularProfilePicture: !1
                }
            },
            mixins: [c.Mixin],
            statics: {
                rowHeight: 60,
                queries: {
                    actor: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/) {
                            var module/*i*/ = require/*t*/.__GraphQL;
                            return new module/*i*/.QueryFragment("FBActorRow_actor", "Actor", [new module/*i*/.Field("id"), new module/*i*/.Field("__type__", [new module/*i*/.Field("name"), new module/*i*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new module/*i*/.Field("name"), new module/*i*/.Field("url", null, null, [new module/*i*/.Callv("site", ["mobile"])]), new module/*i*/.Field("profile_picture", [new module/*i*/.Field("uri")], null, [new module/*i*/.Callv("size", [require/*t*/.__var(global/*e*/), require/*t*/.__var(requireDynamic/*n*/)])]), new module/*i*/.Field("mutual_friends", [new module/*i*/.Field("count")], null, null, null, null, {
                                connection: !0
                            }), new module/*i*/.Field("is_viewer_friend")], [require/*t*/.__frag(requireLazy/*r*/)], {
                                scope: "FBActorRow_actor"
                            })
                        }(S, S, o.getQuery("actor"))
                    }
                }
            },
            renderSubtitle: function() {
                var global/*e*/ = this.props.actor.mutual_friends.count;
                if (global/*e*/ && p.userFBID !== this.props.actor.id) {
                    var require/*t*/ = 1 === global/*e*/ ? _({
                        type: "text",
                        texts: ["1 Mutual Friend"],
                        desc: "Singular mutual friend count"
                    }) : _({
                        type: "text",
                        texts: ["{mutual_friend_count} Mutual Friends"],
                        desc: "Mutual friend count"
                    }, [_.param("mutual_friend_count", global/*e*/)]);
                    return u.createElement(f, {
                        style: R.subtitle
                    }, require/*t*/)
                }
                return u.createElement(o, {
                    actor: this.props.actor,
                    textStyle: R.subtitle
                })
            },
            renderText: function() {
                return u.createElement(g, null, u.createElement(f, {
                    style: R.name
                }, this.props.actor.name), this.renderSubtitle())
            },
            renderIsFriendIcon: function() {
                return this.props.actor.is_viewer_friend ? u.createElement(s, {
                    style: R.icon,
                    source: y("pymkFriendsIcon")
                }) : u.createElement(g, null)
            },
            handlePress: function() {
                this.props.onPressWithCompletion ? this.props.onPressWithCompletion(this.handlePressComplete) : this.handlePressComplete()
            },
            handlePressComplete: function() {
                var global/*e*/ = this.props.actor;
                d.getCallback({
                    typeList: [global/*e*/.__type__.name],
                    params: {
                        id: global/*e*/.id
                    }
                })()
            },
            render: function() {
                var global/*e*/ = this.props.actor,
                    require/*t*/ = this.props.circularProfilePicture ? [R.profilePicture, R.circularProfilePicture] : R.profilePicture;
                return u.createElement(g, {
                    style: [R.container, R.row]
                }, u.createElement(m, {
                    onPress: this.handlePress.bind(this, global/*e*/)
                }, u.createElement(g, {
                    style: R.row
                }, u.createElement(s, {
                    source: global/*e*/.profile_picture,
                    style: require/*t*/
                }), this.renderText())), this.renderIsFriendIcon())
            }
        }),
        R = h.create({
            container: {
                justifyContent: "space-between"
            },
            row: {
                height: b.rowHeight,
                alignItems: "center",
                flexDirection: "row"
            },
            name: {
                color: a.darkText,
                fontSize: 15,
                fontWeight: "bold"
            },
            subtitle: {
                color: a.lightText,
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
    module/*i*/.exports = b
});