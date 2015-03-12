__d("FBEventAttachment",["FIGColors","Image","iso8601","PixelRatio","React","ReactGraphQL","Dimensions","RouteHandler","StyleSheet","Text","TouchableHighlight","View","fbt","truncate"],function (e, t, n, r, i) {
    "use strict";
    var FIGColors/*o*/ = t("FIGColors"),
        Image/*a*/ = t("Image"),
        iso8601/*s*/ = t("iso8601"),
        PixelRatio/*l*/ = t("PixelRatio"),
        React/*u*/ = t("React"),
        ReactGraphQL/*c*/ = t("ReactGraphQL"),
        Dimensions/*p*/ = t("Dimensions"),
        RouteHandler/*d*/ = t("RouteHandler"),
        StyleSheet/*h*/ = t("StyleSheet"),
        Text/*f*/ = t("Text"),
        TouchableHighlight/*m*/ = t("TouchableHighlight"),
        View/*g*/ = t("View"),
        fbt/*_*/ = t("fbt"),
        truncate/*y*/ = t("truncate"),
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
                    attachment: function(e, t) {
                        return function(e, n) {
                            var r = t.__GraphQL;
                            return new r.QueryFragment("FBEventAttachment_attachment", "StoryAttachment", [new r.Field("target", [new r.Field("__type__", [new r.Field("name"), new r.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new r.Field("id", null, null, null, null, null, {
                                requisite: !0
                            }), new r.Field("url", null, null, [new r.Callv("site", ["mobile"])]), new r.Field("time_range", [new r.Field("start")]), new r.Field("event_place", [new r.Field("name"), new r.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new r.Field("event_members", [new r.Field("count")], null, null, null, null, {
                                connection: !0,
                                nonFindable: !0
                            }), new r.Field("cover_photo", [new r.Field("photo", [new r.Field("image", [new r.Field("uri"), new r.Field("height"), new r.Field("width")], null, [new r.Callv("size", [t.__var(e), t.__var(n)]), new r.Callv("sizing", ["cover-fill"])], "event_cover"), new r.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })])], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            }), new r.Field("title")], null, {
                                scope: "FBEventAttachment_attachment"
                            })
                        }(C, E)
                    }
                }
            },
            getStartDate: function() {
                var e = this.props.attachment.target.time_range.start,
                    t = iso8601/*s*/.toDate(e);
                return iso8601/*s*/.isAllDay(e) && t.setTime(t.getTime() + 60 * t.getTimezoneOffset() * 1e3), t
            },
            getBigDate: function() {
                var e = this.getStartDate(),
                    t = e.toUTCString().split(" ")[2].toUpperCase();
                return React/*u*/.createElement(View/*g*/, {
                    style: T.bigDate
                }, React/*u*/.createElement(Text/*f*/, {
                    style: T.bigDateMonth
                }, t), React/*u*/.createElement(Text/*f*/, {
                    style: T.bigDateDay
                }, e.getDate()))
            },
            getSubtitle: function() {
                var e = this.props.attachment.target,
                    t = null;
                if (e.event_place) {
                    var n = truncate/*y*/(e.event_place.name, 50);
                    t = React/*u*/.createElement(Text/*f*/, {
                        style: T.subtitle
                    }, n)
                }
                var r;
                r = this.getStartDate().getTime() < Date.now() ? 1 === e.event_members.count ? fbt/*_*/({
                    type: "text",
                    texts: ["1 person went"],
                    desc: "Subtitle for event in the past with one person who went"
                }) : fbt/*_*/({
                    type: "text",
                    texts: ["{count} people went"],
                    desc: "Subtitle for event in the past"
                }, [fbt/*_*/.param("count", e.event_members.count)]) : 1 === e.event_members.count ? fbt/*_*/({
                    type: "text",
                    texts: ["1 person is going"],
                    desc: "Subtitle for event in the future where one person is going"
                }) : fbt/*_*/({
                    type: "text",
                    texts: ["{count} people are going"],
                    desc: "Subtitle for event in the future"
                }, [fbt/*_*/.param("count", e.event_members.count)]);
                var i = React/*u*/.createElement(Text/*f*/, {
                    style: T.subtitle
                }, r);
                return [t, i]
            },
            getSummary: function() {
                return React/*u*/.createElement(View/*g*/, {
                    style: T.titleContainer
                }, React/*u*/.createElement(Text/*f*/, {
                    style: T.title
                }, this.props.attachment.title), this.getSubtitle())
            },
            getCoverPhoto: function(e) {
                return e.cover_photo ? [React/*u*/.createElement(Image/*a*/, {
                    style: T.image,
                    source: e.cover_photo.photo.event_cover
                }), React/*u*/.createElement(View/*g*/, {
                    style: T.separator
                })] : null
            },
            render: function() {
                var e = this.props.attachment.target;
                return e ? React/*u*/.createElement(View/*g*/, {
                    style: T.container
                }, React/*u*/.createElement(TouchableHighlight/*m*/, {
                    onPress: RouteHandler/*d*/.getCallback({
                        typeList: [e.__type__.name, "URL"],
                        params: {
                            id: e.id,
                            url: e.url,
                            navigator: this.props.navigator
                        }
                    }),
                    style: T.wrapper
                }, React/*u*/.createElement(View/*g*/, {
                    style: T.border
                }, this.getCoverPhoto(e), React/*u*/.createElement(View/*g*/, {
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
    i.exports = D
});