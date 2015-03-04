__d("FBActorRow",["FBActorSubtitle","FIGColors","Image","PixelRatio","React","ReactGraphQL","NativeModules","RouteHandler","StyleSheet","Text","TouchableBounce","View","fbt","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FBActorSubtitle/*o*/ = require/*t*/("FBActorSubtitle"),
        FIGColors/*a*/ = require/*t*/("FIGColors"),
        Image/*s*/ = require/*t*/("Image"),
        PixelRatio/*l*/ = require/*t*/("PixelRatio"),
        React/*u*/ = require/*t*/("React"),
        ReactGraphQL/*c*/ = require/*t*/("ReactGraphQL"),
        NativeModules/*p*/ = require/*t*/("NativeModules").RKCurrentViewer,
        RouteHandler/*d*/ = require/*t*/("RouteHandler"),
        StyleSheet/*h*/ = require/*t*/("StyleSheet"),
        Text/*f*/ = require/*t*/("Text"),
        TouchableBounce/*m*/ = require/*t*/("TouchableBounce"),
        View/*g*/ = require/*t*/("View"),
        fbt/*_*/ = require/*t*/("fbt"),
        ix/*y*/ = require/*t*/("ix"),
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
                        }(S, S, FBActorSubtitle/*o*/.getQuery("actor"))
                    }
                }
            },
            renderSubtitle: function() {
                var global/*e*/ = this.props.actor.mutual_friends.count;
                if (global/*e*/ && NativeModules/*p*/.userFBID !== this.props.actor.id) {
                    var require/*t*/ = 1 === global/*e*/ ? fbt/*_*/({
                        type: "text",
                        texts: ["1 Mutual Friend"],
                        desc: "Singular mutual friend count"
                    }) : fbt/*_*/({
                        type: "text",
                        texts: ["{mutual_friend_count} Mutual Friends"],
                        desc: "Mutual friend count"
                    }, [fbt/*_*/.param("mutual_friend_count", global/*e*/)]);
                    return React/*u*/.createElement(Text/*f*/, {
                        style: R.subtitle
                    }, require/*t*/)
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
                var global/*e*/ = this.props.actor;
                RouteHandler/*d*/.getCallback({
                    typeList: [global/*e*/.__type__.name],
                    params: {
                        id: global/*e*/.id
                    }
                })()
            },
            render: function() {
                var global/*e*/ = this.props.actor,
                    require/*t*/ = this.props.circularProfilePicture ? [R.profilePicture, R.circularProfilePicture] : R.profilePicture;
                return React/*u*/.createElement(View/*g*/, {
                    style: [R.container, R.row]
                }, React/*u*/.createElement(TouchableBounce/*m*/, {
                    onPress: this.handlePress.bind(this, global/*e*/)
                }, React/*u*/.createElement(View/*g*/, {
                    style: R.row
                }, React/*u*/.createElement(Image/*s*/, {
                    source: global/*e*/.profile_picture,
                    style: require/*t*/
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
    module/*i*/.exports = b
});