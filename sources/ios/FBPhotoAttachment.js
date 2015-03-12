__d("FBPhotoAttachment",["GraphQLNodeStatus","Image","PixelRatio","React","ReactGraphQL","Dimensions","StyleSheet","TouchableWithoutFeedback","View","invariant","keyOf","mergeInto"],function (e, t, n, r, i) {
    "use strict";
    var GraphQLNodeStatus/*o*/ = t("GraphQLNodeStatus"),
        Image/*a*/ = t("Image"),
        PixelRatio/*s*/ = t("PixelRatio"),
        React/*l*/ = t("React"),
        ReactGraphQL/*u*/ = t("ReactGraphQL"),
        Dimensions/*c*/ = t("Dimensions"),
        StyleSheet/*p*/ = t("StyleSheet"),
        TouchableWithoutFeedback/*d*/ = t("TouchableWithoutFeedback"),
        View/*h*/ = t("View"),
        invariant/*f*/ = t("invariant"),
        keyOf/*m*/ = t("keyOf"),
        mergeInto/*g*/ = t("mergeInto"),
        _ = keyOf/*m*/({
            modalRef: null
        }),
        y = keyOf/*m*/({
            photoRef: null
        }),
        v = Dimensions/*c*/.get("window"),
        S = PixelRatio/*s*/.get(),
        b = {
            zoomed: {
                width: 2 * v.width,
                height: 2 * v.height
            },
            large: {
                width: v.width,
                height: 200
            }
        },
        R = React/*l*/.createClass({
            displayName: "FBPhotoAttachment",
            propTypes: {
                attachment: React/*l*/.PropTypes.object.isRequired,
                modalViewer: React/*l*/.PropTypes.func,
                maxPhotoHeight: React/*l*/.PropTypes.number,
                maxPhotoWidth: React/*l*/.PropTypes.number,
                openedOverlayFactory: React/*l*/.PropTypes.func
            },
            mixins: [ReactGraphQL/*u*/.Mixin],
            statics: {
                queries: {
                    attachment: function(e, t) {
                        var n = [b.zoomed.width * S, b.zoomed.height * S],
                            r = [b.large.width * S, b.large.height * S];
                        return function(e, n, r, i) {
                            var GraphQLNodeStatus/*o*/ = t.__GraphQL;
                            return new GraphQLNodeStatus/*o*/.QueryFragment("FBPhotoAttachment_attachment", "StoryAttachment", [new GraphQLNodeStatus/*o*/.Field("media", [new GraphQLNodeStatus/*o*/.Field("image", [new GraphQLNodeStatus/*o*/.Field("width"), new GraphQLNodeStatus/*o*/.Field("height"), new GraphQLNodeStatus/*o*/.Field("uri")], null, [new GraphQLNodeStatus/*o*/.Callv("size", [t.__var(e), t.__var(n)]), new GraphQLNodeStatus/*o*/.Callv("sizing", ["contain-fit"])], "photo_zoomed"), new GraphQLNodeStatus/*o*/.Field("image", [new GraphQLNodeStatus/*o*/.Field("width"), new GraphQLNodeStatus/*o*/.Field("height"), new GraphQLNodeStatus/*o*/.Field("uri")], null, [new GraphQLNodeStatus/*o*/.Callv("size", [t.__var(r), t.__var(i)]), new GraphQLNodeStatus/*o*/.Callv("sizing", ["cover-fill"])], "photo_large"), new GraphQLNodeStatus/*o*/.Field("image", [new GraphQLNodeStatus/*o*/.Field("width"), new GraphQLNodeStatus/*o*/.Field("height"), new GraphQLNodeStatus/*o*/.Field("uri")], null, null, "photo_local")])], null, {
                                scope: "FBPhotoAttachment_attachment"
                            })
                        }(n[0], n[1], r[0], r[1])
                    }
                }
            },
            getInitialState: function() {
                return {
                    isClosed: !0,
                    originalFrame: null
                }
            },
            close: function() {
                this.refs[_].close()
            },
            handlePress: function() {
                this.state.isClosed || invariant/*f*/(0, "Must be closed to process Image/*a*/ tap."), this.refs[y].measure(function(e, t, n, r, i, GraphQLNodeStatus/*o*/) {
                    this.state.originalFrame = {
                        width: n,
                        height: r,
                        left: i,
                        top: GraphQLNodeStatus/*o*/
                    }, this.refs[_].open(0, this.state.originalFrame), mergeInto/*g*/(this.state, {
                        isClosed: !1
                    })
                }.bind(this))
            },
            handleWillOpen: function() {
                this.refs[y].setNativeProps(E)
            },
            handleMayClose: function(e, t) {
                t && t(this.state.originalFrame)
            },
            handleDidClose: function() {
                this.refs[y].setNativeProps(D), mergeInto/*g*/(this.state, {
                    isClosed: !0
                })
            },
            renderImage: function() {
                var e = this.props.attachment,
                    t = GraphQLNodeStatus/*o*/.isOptimistic(e) ? e.media.photo_local : e.media.photo_large,
                    n = t.width,
                    r = this.props.maxPhotoWidth ? n / this.props.maxPhotoWidth : 1;
                n /= r;
                var i = t.height / r;
                this.props.maxPhotoHeight && i > this.props.maxPhotoHeight && (i = this.props.maxPhotoHeight);
                var PixelRatio/*s*/ = {
                        width: n + 2 / S,
                        height: i + 2 / S,
                        left: -1 / S
                    },
                    ReactGraphQL/*u*/ = {
                        width: n,
                        height: i
                    },
                    Dimensions/*c*/ = this.state.isClosed ? C.show : C.hide;
                return React/*l*/.createElement(TouchableWithoutFeedback/*d*/, {
                    onPress: this.handlePress
                }, React/*l*/.createElement(View/*h*/, {
                    ref: y,
                    style: [Dimensions/*c*/, PixelRatio/*s*/, w.shadow]
                }, React/*l*/.createElement(Image/*a*/, {
                    source: t,
                    style: [w.image, ReactGraphQL/*u*/]
                })))
            },
            render: function() {
                var e = null,
                    t = this.props.modalViewer;
                if (t) {
                    var n = [this.props.attachment.media.photo_large],
                        r = [this.props.attachment.media.photo_zoomed];
                    GraphQLNodeStatus/*o*/.isOptimistic(this.props.attachment) && (n = [this.props.attachment.media.photo_local], r = [this.props.attachment.media.photo_local]), e = React/*l*/.createElement(t, {
                        ref: _,
                        sources: n,
                        sourcesHiRes: r,
                        onWillOpen: this.handleWillOpen,
                        onDidClose: this.handleDidClose,
                        onMayClose: this.handleMayClose,
                        openedOverlayFactory: this.props.openedOverlayFactory,
                        closedShadowStyle: w.shadow
                    })
                }
                return React/*l*/.createElement(View/*h*/, null, this.renderImage(), e)
            }
        }),
        w = StyleSheet/*p*/.create({
            imageWrapper: {
                flex: 1
            },
            show: {
                opacity: 1
            },
            hide: {
                opacity: 0
            },
            image: {
                backgroundColor: "#eeeeee"
            },
            shadow: {
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 1 / S
            }
        }),
        C = {
            hide: [w.imageWrapper, w.hide],
            show: [w.imageWrapper]
        },
        E = {
            style: w.hide
        },
        D = {
            style: w.show
        };
    i.exports = R
});