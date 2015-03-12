__d("FBPhotoCollage",["Image","PixelRatio","React","ReactGraphQL","Dimensions","StyleSheet","TouchableWithoutFeedback","View","flattenStyle","invariant","isEmpty","keyOf","mergeInto"],function (e, t, n, r, i) {
    "use strict";
    var Image/*o*/ = t("Image"),
        PixelRatio/*a*/ = t("PixelRatio"),
        React/*s*/ = t("React"),
        ReactGraphQL/*l*/ = t("ReactGraphQL"),
        Dimensions/*u*/ = t("Dimensions"),
        StyleSheet/*c*/ = t("StyleSheet"),
        TouchableWithoutFeedback/*p*/ = t("TouchableWithoutFeedback"),
        View/*d*/ = t("View"),
        flattenStyle/*h*/ = t("flattenStyle"),
        invariant/*f*/ = t("invariant"),
        isEmpty/*m*/ = t("isEmpty"),
        keyOf/*g*/ = t("keyOf"),
        mergeInto/*_*/ = t("mergeInto"),
        y = keyOf/*g*/({
            modalRef: null
        }),
        v = 5,
        S = 5,
        b = Dimensions/*u*/.get("window"),
        R = {
            full: b,
            large: {
                width: b.width,
                height: 200
            },
            medium: {
                width: Math.floor(b.width / 2),
                height: 120
            },
            small: {
                width: Math.floor(b.width / 3),
                height: 90
            },
            spacer: {
                width: 3,
                height: 3
            },
            spacerOdd: {
                width: 3,
                height: 3
            }
        },
        w = !1,
        C = PixelRatio/*a*/.get(),
        E = React/*s*/.createClass({
            displayName: "FBPhotoCollage",
            propTypes: {
                attachment: React/*s*/.PropTypes.object.isRequired,
                maxPhotoWidth: React/*s*/.PropTypes.number,
                modalViewer: React/*s*/.PropTypes.func,
                openedOverlayFactory: React/*s*/.PropTypes.func
            },
            mixins: [ReactGraphQL/*l*/.Mixin],
            statics: {
                queryParams: {
                    count: 10
                },
                sizes: R,
                queries: {
                    attachment: function(e, t, n) {
                        var r = [R.full.width * C, R.full.height * C],
                            i = [R.medium.width * C, R.medium.height * C],
                            Image/*o*/ = [R.small.width * C, R.small.height * C];
                        return function(e, n, r, i, Image/*o*/, PixelRatio/*a*/, React/*s*/) {
                            var ReactGraphQL/*l*/ = t.__GraphQL;
                            return new ReactGraphQL/*l*/.QueryFragment("FBPhotoCollage_attachment", "StoryAttachment", [new ReactGraphQL/*l*/.Field("target", [new ReactGraphQL/*l*/.Field("media", [new ReactGraphQL/*l*/.Field("edges", [new ReactGraphQL/*l*/.Field("node", [new ReactGraphQL/*l*/.Field("image", [new ReactGraphQL/*l*/.Field("width"), new ReactGraphQL/*l*/.Field("height"), new ReactGraphQL/*l*/.Field("uri")], null, [new ReactGraphQL/*l*/.Callv("size", [t.__var(n), t.__var(r)]), new ReactGraphQL/*l*/.Callv("sizing", ["contain-fit"])], "image_full"), new ReactGraphQL/*l*/.Field("image", [new ReactGraphQL/*l*/.Field("width"), new ReactGraphQL/*l*/.Field("height"), new ReactGraphQL/*l*/.Field("uri")], null, [new ReactGraphQL/*l*/.Callv("size", [t.__var(i), t.__var(Image/*o*/)]), new ReactGraphQL/*l*/.Callv("sizing", ["cover-fill"])], "image_medium"), new ReactGraphQL/*l*/.Field("image", [new ReactGraphQL/*l*/.Field("width"), new ReactGraphQL/*l*/.Field("height"), new ReactGraphQL/*l*/.Field("uri")], null, [new ReactGraphQL/*l*/.Callv("size", [t.__var(PixelRatio/*a*/), t.__var(React/*s*/)]), new ReactGraphQL/*l*/.Callv("sizing", ["cover-fill"])], "image_small")], null, null, null, null, {
                                requisite: !0
                            }), new ReactGraphQL/*l*/.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBPhotoCollage_attachment_1"
                            }), new ReactGraphQL/*l*/.Field("page_info", [new ReactGraphQL/*l*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new ReactGraphQL/*l*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new ReactGraphQL/*l*/.Callv("first", [t.__var(e)])], null, null, {
                                connection: !0
                            }), new ReactGraphQL/*l*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, {
                                scope: "FBPhotoCollage_attachment"
                            })
                        }(n.count, r[0], r[1], i[0], i[1], Image/*o*/[0], Image/*o*/[1])
                    }
                }
            },
            getInitialState: function() {
                return {
                    activeImgIdx: 0,
                    isClosed: !0,
                    originalFrames: {},
                    sources: [],
                    widthStyle: this.props.maxPhotoWidth && {
                        width: this.props.maxPhotoWidth
                    }
                }
            },
            componentWillMount: function() {
                this.renderInnerViews()
            },
            numImagesInCollage: function() {
                var e = this.props.attachment.target;
                return e && e.media && e.media.edges.length ? Math.min(e.media.edges.length, v) : 0
            },
            close: function() {
                this.refs[y].close()
            },
            showImage: function(e) {
                e < this.numImagesInCollage() && this.refs[this.getKeyForIdx(e)].setNativeProps(P)
            },
            hideImage: function(e) {
                e < this.numImagesInCollage() && this.refs[this.getKeyForIdx(e)].setNativeProps(x)
            },
            handlePress: function(e) {
                this.state.isClosed || invariant/*f*/(0, "Must be closed to process PixelRatio/*a*/ tap.");
                for (var t = 0, n = 0; n < this.numImagesInCollage(); ++n) this.refs[this.getKeyForIdx(n)].measure(function(n, r, i, Image/*o*/, PixelRatio/*a*/, React/*s*/, ReactGraphQL/*l*/) {
                    this.state.originalFrames[n] = {
                        width: Image/*o*/,
                        height: PixelRatio/*a*/,
                        left: React/*s*/,
                        top: ReactGraphQL/*l*/
                    }, t++, t === this.numImagesInCollage() && (mergeInto/*_*/(this.state, {
                        isClosed: !1,
                        activeImgIdx: e
                    }), this.refs[y].open(e, this.state.originalFrames[e]))
                }.bind(this, n))
            },
            handleWillOpen: function() {
                this.hideImage(this.state.activeImgIdx)
            },
            handleMayClose: function(e, t) {
                if (e !== this.state.activeImgIdx && (this.showImage(this.state.activeImgIdx), this.hideImage(e), mergeInto/*_*/(this.state, {
                        activeImgIdx: e
                    })), t) {
                    var n = e < this.numImagesInCollage() ? this.state.originalFrames[e] : null;
                    t(n)
                }
            },
            handleDidClose: function(e) {
                e !== this.state.activeImgIdx && invariant/*f*/(0, "handleMayClose and handleDidClose should use the same image."), this.showImage(e), mergeInto/*_*/(this.state, {
                    isClosed: !0
                })
            },
            getKeyForIdx: function(e) {
                return "img_" + e
            },
            getSource: function(e, t) {
                if (this.state.sources[e]) return this.state.sources[e];
                var n = flattenStyle/*h*/(t),
                    r = this.props.attachment.target.media,
                    i = r.edges[e].node.image_full,
                    Image/*o*/ = "image_full",
                    PixelRatio/*a*/ = {
                        image_full: !0,
                        image_medium: !0,
                        image_small: !0
                    };
                for (var React/*s*/ in PixelRatio/*a*/) {
                    var ReactGraphQL/*l*/ = r.edges[e].node[React/*s*/];
                    ReactGraphQL/*l*/.height >= (n.height || 0) * C && ReactGraphQL/*l*/.width >= (n.width || 0) * C && ReactGraphQL/*l*/.height < i.height && (i = ReactGraphQL/*l*/, Image/*o*/ = React/*s*/)
                }
                return w && console.log("Using " + Image/*o*/ + " with size (scaled @" + C + "x) ", {
                    w: i.width,
                    flattenStyle/*h*/: i.height
                }, " for layout ", {
                    w: n.width * C,
                    flattenStyle/*h*/: n.height * C
                }), this.state.sources[e] = i, i
            },
            imageIdxChanged: function(e) {
                e >= this.queryParams.count + 1 - S && this.setQueryParams({
                    count: this.queryParams.count + S
                })
            },
            renderImage: function(e, t) {
                var n = this.getSource(e, t),
                    r = this.getKeyForIdx(e),
                    i = this.state.isClosed || this.state.activeImgIdx !== e ? T.show : T.hide;
                return React/*s*/.createElement(TouchableWithoutFeedback/*p*/, {
                    onPress: this.handlePress.bind(this, e),
                    key: "image" + e
                }, React/*s*/.createElement(View/*d*/, {
                    ref: r,
                    style: [i, D.shadow]
                }, React/*s*/.createElement(Image/*o*/, {
                    source: n,
                    style: [D.imageBase, t]
                })))
            },
            renderInnerViews: function() {
                switch (this.numImagesInCollage()) {
                    case 0:
                        return React/*s*/.createElement(View/*d*/, null);
                    case 1:
                        return React/*s*/.createElement(View/*d*/, {
                            style: D.row
                        }, this.renderImage(0, [D.rowLarge, this.state.widthStyle]));
                    case 2:
                        var e = this.props.attachment.target.media.edges,
                            t = e[0].node.image_full,
                            n = e[0].node.image_full;
                        return t.height > t.width && n.height > n.width ? React/*s*/.createElement(View/*d*/, {
                            style: D.row
                        }, this.renderImage(0, D.rowLarge), React/*s*/.createElement(View/*d*/, {
                            style: D.spacer
                        }), this.renderImage(1, D.rowLarge)) : [this.renderImage(0, [D.rowLarge, this.state.widthStyle]), React/*s*/.createElement(View/*d*/, {
                            style: D.spacer,
                            key: "spacer"
                        }), this.renderImage(1, [D.rowLarge, this.state.widthStyle])];
                    case 3:
                        return React/*s*/.createElement(View/*d*/, {
                            style: D.row
                        }, this.renderImage(0, D.rowLarge), React/*s*/.createElement(View/*d*/, {
                            style: D.spacer
                        }), React/*s*/.createElement(View/*d*/, null, this.renderImage(1, D.colSmall), React/*s*/.createElement(View/*d*/, {
                            style: D.spacer
                        }), this.renderImage(2, D.colSmall)));
                    case 4:
                        return [React/*s*/.createElement(View/*d*/, {
                            style: D.row,
                            key: "row1"
                        }, this.renderImage(0, D.rowMedium), React/*s*/.createElement(View/*d*/, {
                            style: D.spacer
                        }), this.renderImage(1, D.rowMedium)), React/*s*/.createElement(View/*d*/, {
                            style: D.spacer,
                            key: "spacer"
                        }), React/*s*/.createElement(View/*d*/, {
                            style: D.row,
                            key: "row2"
                        }, this.renderImage(2, D.rowMedium), React/*s*/.createElement(View/*d*/, {
                            style: D.spacer
                        }), this.renderImage(3, D.rowMedium))];
                    default:
                        return [React/*s*/.createElement(View/*d*/, {
                            style: D.row,
                            key: "row1"
                        }, this.renderImage(0, D.rowSmall), React/*s*/.createElement(View/*d*/, {
                            style: D.spacerOdd
                        }), this.renderImage(1, D.rowSmall), React/*s*/.createElement(View/*d*/, {
                            style: D.spacerOdd
                        }), this.renderImage(2, D.rowSmall)), React/*s*/.createElement(View/*d*/, {
                            style: D.spacer,
                            key: "spacer"
                        }), React/*s*/.createElement(View/*d*/, {
                            style: D.row,
                            key: "row2"
                        }, this.renderImage(3, D.rowMedium), React/*s*/.createElement(View/*d*/, {
                            style: D.spacer
                        }), this.renderImage(4, D.rowMedium))]
                }
            },
            render: function() {
                var e = this.props.attachment.target;
                if (!e || !e.media || isEmpty/*m*/(e.media.edges)) return console.error("Tried to render FBPhotoCollage with invalid media"), React/*s*/.createElement(View/*d*/, null);
                var t = e.media.edges,
                    n = null,
                    r = this.props.modalViewer;
                if (r) {
                    var i = t.map(function(e, t) {
                            return this.state.sources[t] || e.node.image_medium
                        }.bind(this)),
                        Image/*o*/ = t.map(function(e) {
                            return e.node.image_full
                        });
                    n = React/*s*/.createElement(r, {
                        ref: y,
                        sources: i,
                        sourcesHiRes: Image/*o*/,
                        onWillOpen: this.handleWillOpen,
                        onDidClose: this.handleDidClose,
                        onMayClose: this.handleMayClose,
                        openedOverlayFactory: this.props.openedOverlayFactory,
                        closedShadowStyle: D.shadow,
                        didImgIdxChange: this.imageIdxChanged
                    })
                }
                return React/*s*/.createElement(View/*d*/, {
                    style: D.container
                }, this.renderInnerViews(), n)
            }
        }),
        D = StyleSheet/*c*/.create({
            container: {
                marginBottom: 3,
                marginLeft: -1 / C,
                marginRight: -1 / C
            },
            imageWrapper: {
                flex: 1
            },
            row: {
                flexDirection: "row",
                justifyContent: "space-between"
            },
            spacer: R.spacer,
            spacerOdd: R.spacerOdd,
            imageBase: {
                backgroundColor: "#eeeeee"
            },
            show: {
                opacity: 1
            },
            hide: {
                opacity: 0
            },
            rowLarge: {
                height: R.large.height
            },
            colSmall: {
                width: R.small.width,
                height: (R.large.height - R.spacer.height) / 2
            },
            rowMedium: {
                height: R.medium.height
            },
            rowSmall: {
                height: R.small.height
            },
            shadow: {
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 1 / C
            }
        }),
        T = {
            hide: [D.imageWrapper, D.hide],
            show: [D.imageWrapper]
        },
        x = {
            style: D.hide
        },
        P = {
            style: D.show
        };
    i.exports = E
});