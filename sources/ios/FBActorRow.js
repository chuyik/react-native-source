__d("FBActorRow",["FBActorSubtitle","FIGColors","Image","PixelRatio","React","ReactGraphQL","NativeModules","RouteHandler","StyleSheet","Text","TouchableBounce","View","fbt","ix"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBActorSubtitle"),
        exports/*a*/ = require/*t*/("FIGColors"),
        FBActorSubtitle/*s*/ = require/*t*/("Image"),
        FIGColors/*l*/ = require/*t*/("PixelRatio"),
        Image/*u*/ = require/*t*/("React"),
        PixelRatio/*c*/ = require/*t*/("ReactGraphQL"),
        React/*p*/ = require/*t*/("NativeModules").RKCurrentViewer,
        ReactGraphQL/*d*/ = require/*t*/("RouteHandler"),
        NativeModules/*h*/ = require/*t*/("StyleSheet"),
        RouteHandler/*f*/ = require/*t*/("Text"),
        StyleSheet/*m*/ = require/*t*/("TouchableBounce"),
        Text/*g*/ = require/*t*/("View"),
        TouchableBounce/*_*/ = require/*t*/("fbt"),
        View/*y*/ = require/*t*/("ix"),
        fbt/*v*/ = FIGColors/*l*/.get(),
        ix/*S*/ = 40 * fbt/*v*/,
        b = Image/*u*/.createClass({
            displayName: "FBActorRow",
            propTypes: {
                circularProfilePicture: Image/*u*/.PropTypes.bool,
                onPressWithCompletion: Image/*u*/.PropTypes.func
            },
            getDefaultProps: function() {
                return {
                    circularProfilePicture: !1
                }
            },
            mixins: [PixelRatio/*c*/.Mixin],
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
                        }(ix/*S*/, ix/*S*/, o.getQuery("actor"))
                    }
                }
            },
            renderSubtitle: function() {
                var global/*e*/ = this.props.actor.mutual_friends.count;
                if (global/*e*/ && React/*p*/.userFBID !== this.props.actor.id) {
                    var require/*t*/ = 1 === global/*e*/ ? TouchableBounce/*_*/({
                        type: "text",
                        texts: ["1 Mutual Friend"],
                        desc: "Singular mutual friend count"
                    }) : TouchableBounce/*_*/({
                        type: "text",
                        texts: ["{mutual_friend_count} Mutual Friends"],
                        desc: "Mutual friend count"
                    }, [TouchableBounce/*_*/.param("mutual_friend_count", global/*e*/)]);
                    return Image/*u*/.createElement(RouteHandler/*f*/, {
                        style: R.subtitle
                    }, require/*t*/)
                }
                return Image/*u*/.createElement(o, {
                    actor: this.props.actor,
                    textStyle: R.subtitle
                })
            },
            renderText: function() {
                return Image/*u*/.createElement(Text/*g*/, null, Image/*u*/.createElement(RouteHandler/*f*/, {
                    style: R.name
                }, this.props.actor.name), this.renderSubtitle())
            },
            renderIsFriendIcon: function() {
                return this.props.actor.is_viewer_friend ? Image/*u*/.createElement(FBActorSubtitle/*s*/, {
                    style: R.icon,
                    source: View/*y*/("pymkFriendsIcon")
                }) : Image/*u*/.createElement(Text/*g*/, null)
            },
            handlePress: function() {
                this.props.onPressWithCompletion ? this.props.onPressWithCompletion(this.handlePressComplete) : this.handlePressComplete()
            },
            handlePressComplete: function() {
                var global/*e*/ = this.props.actor;
                ReactGraphQL/*d*/.getCallback({
                    typeList: [global/*e*/.__type__.name],
                    params: {
                        id: global/*e*/.id
                    }
                })()
            },
            render: function() {
                var global/*e*/ = this.props.actor,
                    require/*t*/ = this.props.circularProfilePicture ? [R.profilePicture, R.circularProfilePicture] : R.profilePicture;
                return Image/*u*/.createElement(Text/*g*/, {
                    style: [R.container, R.row]
                }, Image/*u*/.createElement(StyleSheet/*m*/, {
                    onPress: this.handlePress.bind(this, global/*e*/)
                }, Image/*u*/.createElement(Text/*g*/, {
                    style: R.row
                }, Image/*u*/.createElement(FBActorSubtitle/*s*/, {
                    source: global/*e*/.profile_picture,
                    style: require/*t*/
                }), this.renderText())), this.renderIsFriendIcon())
            }
        }),
        R = NativeModules/*h*/.create({
            container: {
                justifyContent: "space-between"
            },
            row: {
                height: b.rowHeight,
                alignItems: "center",
                flexDirection: "row"
            },
            name: {
                color: exports/*a*/.darkText,
                fontSize: 15,
                fontWeight: "bold"
            },
            subtitle: {
                color: exports/*a*/.lightText,
                fontSize: 13
            },
            icon: {
                width: 28,
                height: 40
            },
            profilePicture: {
                width: ix/*S*/ / fbt/*v*/,
                height: ix/*S*/ / fbt/*v*/,
                marginRight: 10
            },
            circularProfilePicture: {
                borderRadius: ix/*S*/ / fbt/*v*/ / 2
            }
        });
    module/*i*/.exports = b
});