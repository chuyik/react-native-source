__d("FBEventAttachment",["FIGColors","Image","iso8601","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StyleSheet","Text","TouchableHighlight","View","fbt","truncate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FIGColors/*o*/ = require/*t*/("FIGColors"),
        Image/*a*/ = require/*t*/("Image"),
        iso8601/*s*/ = require/*t*/("iso8601"),
        PixelRatio/*l*/ = require/*t*/("PixelRatio"),
        React/*u*/ = require/*t*/("React"),
        ReactGraphQL/*c*/ = require/*t*/("ReactGraphQL"),
        Dimensions/*p*/ = require/*t*/("Dimensions"),
        RouteHandler/*d*/ = require/*t*/("RouteHandler"),
        StyleSheet/*h*/ = require/*t*/("StyleSheet"),
        Text/*f*/ = require/*t*/("Text"),
        TouchableHighlight/*m*/ = require/*t*/("TouchableHighlight"),
        View/*g*/ = require/*t*/("View"),
        fbt/*_*/ = require/*t*/("fbt"),
        truncate/*y*/ = require/*t*/("truncate"),
        v = Dimensions/*p*/.get("window"),
        S = 1,
        b = v.width,
        R = Math.floor(b / 4 + 50),
        w = PixelRatio/*l*/.get(),
        C = b * w,
        E = R * w,
        D = React/*u*/.createClass({
            displayName: "FBEventAttachment",
            propTypes: {
                attachment: React/*u*/.PropTypes.object.isRequired,
                navigator: React/*u*/.PropTypes.object
            },
            mixins: [ReactGraphQL/*c*/.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/, requireDynamic/*n*/) {
                            var requireLazy/*r*/ = require/*t*/.__GraphQL;
                            return new requireLazy/*r*/.QueryFragment("FBEventAttachment_attachment", "StoryAttachment", [new requireLazy/*r*/.Field("target", [new requireLazy/*r*/.Field("__type__", [new requireLazy/*r*/.Field("name"), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new requireLazy/*r*/.Field("url", null, null, [new requireLazy/*r*/.Callv("site", ["mobile"])]), new requireLazy/*r*/.Field("time_range", [new requireLazy/*r*/.Field("start")]), new requireLazy/*r*/.Field("event_place", [new requireLazy/*r*/.Field("name"), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new requireLazy/*r*/.Field("event_members", [new requireLazy/*r*/.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new requireLazy/*r*/.Field("cover_photo", [new requireLazy/*r*/.Field("photo", [new requireLazy/*r*/.Field("image", [new requireLazy/*r*/.Field("uri"), new requireLazy/*r*/.Field("height"), new requireLazy/*r*/.Field("width")], null, [new requireLazy/*r*/.Callv("size", [require/*t*/.__var(global/*e*/), require/*t*/.__var(requireDynamic/*n*/)]), new requireLazy/*r*/.Callv("sizing", ["cover-fill"])], "event_cover"), new requireLazy/*r*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })])], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new requireLazy/*r*/.Field("title")], null, {
                                scope: "FBEventAttachment_attachment"
                            })
                        }(C, E)
                    }
                }
            },
            getStartDate: function() {
                var global/*e*/ = this.props.attachment.target.time_range.start,
                    require/*t*/ = iso8601/*s*/.toDate(global/*e*/);
                return iso8601/*s*/.isAllDay(global/*e*/) && require/*t*/.setTime(require/*t*/.getTime() + 60 * require/*t*/.getTimezoneOffset() * 1e3), require/*t*/
            },
            getBigDate: function() {
                var global/*e*/ = this.getStartDate(),
                    require/*t*/ = global/*e*/.toUTCString().split(" ")[2].toUpperCase();
                return React/*u*/.createElement(View/*g*/, {
                    style: T.bigDate
                }, React/*u*/.createElement(Text/*f*/, {
                    style: T.bigDateMonth
                }, require/*t*/), React/*u*/.createElement(Text/*f*/, {
                    style: T.bigDateDay
                }, global/*e*/.getDate()))
            },
            getSubtitle: function() {
                var global/*e*/ = this.props.attachment.target,
                    require/*t*/ = null;
                if (global/*e*/.event_place) {
                    var requireDynamic/*n*/ = truncate/*y*/(global/*e*/.event_place.name, 50);
                    require/*t*/ = React/*u*/.createElement(Text/*f*/, {
                        style: T.subtitle
                    }, requireDynamic/*n*/)
                }
                var requireLazy/*r*/;
                requireLazy/*r*/ = this.getStartDate().getTime() < Date.now() ? 1 === global/*e*/.event_members.count ? fbt/*_*/({
                    type: "text",
                    texts: ["1 person went"],
                    desc: "Subtitle for event in the past with one person who went"
                }) : fbt/*_*/({
                    type: "text",
                    texts: ["{count} people went"],
                    desc: "Subtitle for event in the past"
                }, [fbt/*_*/.param("count", global/*e*/.event_members.count)]) : 1 === global/*e*/.event_members.count ? fbt/*_*/({
                    type: "text",
                    texts: ["1 person is going"],
                    desc: "Subtitle for event in the future where one person is going"
                }) : fbt/*_*/({
                    type: "text",
                    texts: ["{count} people are going"],
                    desc: "Subtitle for event in the future"
                }, [fbt/*_*/.param("count", global/*e*/.event_members.count)]);
                var module/*i*/ = React/*u*/.createElement(Text/*f*/, {
                    style: T.subtitle
                }, requireLazy/*r*/);
                return [require/*t*/, module/*i*/]
            },
            getSummary: function() {
                return React/*u*/.createElement(View/*g*/, {
                    style: T.titleContainer
                }, React/*u*/.createElement(Text/*f*/, {
                    style: T.title
                }, this.props.attachment.title), this.getSubtitle())
            },
            getCoverPhoto: function(global/*e*/) {
                return global/*e*/.cover_photo ? [React/*u*/.createElement(Image/*a*/, {
                    style: T.image,
                    source: global/*e*/.cover_photo.photo.event_cover
                }), React/*u*/.createElement(View/*g*/, {
                    style: T.separator
                })] : null
            },
            render: function() {
                var global/*e*/ = this.props.attachment.target;
                return global/*e*/ ? React/*u*/.createElement(View/*g*/, {
                    style: T.container
                }, React/*u*/.createElement(TouchableHighlight/*m*/, {
                    onPress: RouteHandler/*d*/.getCallback({
                        typeList: [global/*e*/.__type__.name, "URL"],
                        params: {
                            id: global/*e*/.id,
                            url: global/*e*/.url,
                            navigator: this.props.navigator
                        }
                    }),
                    style: T.wrapper
                }, React/*u*/.createElement(View/*g*/, {
                    style: T.border
                }, this.getCoverPhoto(global/*e*/), React/*u*/.createElement(View/*g*/, {
                    style: T.row
                }, this.getBigDate(), this.getSummary())))) : (console.error("Tried to render an FBEventAttachment without Image/*a*/ target!"), React/*u*/.createElement(View/*g*/, null))
            }
        }),
        T = StyleSheet/*h*/.create({
            wrapper: {
                borderRadius: S
            },
            container: {
                marginTop: 8,
                shadowColor: "black",
                shadowOpacity: .1,
                shadowOffset: {
                    StyleSheet/*h*/: 1
                },
                marginBottom: 5,
                borderRadius: S
            },
            border: {
                backgroundColor: "white",
                borderWidth: .5,
                borderColor: FIGColors/*o*/.attachmentBorder,
                borderRadius: S,
                overflow: "hidden"
            },
            row: {
                alignItems: "center",
                flexDirection: "row"
            },
            bigDate: {
                marginVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                width: 70
            },
            bigDateMonth: {
                fontSize: 18,
                color: "#cc0000",
                fontWeight: "bold"
            },
            bigDateDay: {
                fontSize: 34,
                color: "black",
                fontWeight: "bold"
            },
            image: {
                backgroundColor: "#f0f0f0",
                height: E / w
            },
            separator: {
                backgroundColor: FIGColors/*o*/.attachmentBorder,
                height: .5
            },
            titleContainer: {
                backgroundColor: "white",
                paddingVertical: 8,
                paddingHorizontal: 10,
                flex: 1
            },
            title: {
                fontSize: 14,
                fontWeight: "bold"
            },
            subtitle: {
                fontSize: 13,
                color: FIGColors/*o*/.mediumText
            }
        });
    module/*i*/.exports = D
});