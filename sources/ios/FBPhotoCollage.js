__d("FBPhotoCollage",["Image","PixelRatio","React","ReactGraphQL","Dimensions","StyleSheet","TouchableWithoutFeedback","View","flattenStyle","invariant","isEmpty","keyOf","mergeInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        a = require/*t*/("PixelRatio"),
        s = require/*t*/("React"),
        l = require/*t*/("ReactGraphQL"),
        u = require/*t*/("Dimensions"),
        c = require/*t*/("StyleSheet"),
        p = require/*t*/("TouchableWithoutFeedback"),
        d = require/*t*/("View"),
        h = require/*t*/("flattenStyle"),
        f = require/*t*/("invariant"),
        m = require/*t*/("isEmpty"),
        g = require/*t*/("keyOf"),
        _ = require/*t*/("mergeInto"),
        y = g({
            modalRef: null
        }),
        v = 5,
        S = 5,
        b = u.get("window"),
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
        C = a.get(),
        E = s.createClass({
            displayName: "FBPhotoCollage",
            propTypes: {
                attachment: s.PropTypes.object.isRequired,
                maxPhotoWidth: s.PropTypes.number,
                modalViewer: s.PropTypes.func,
                openedOverlayFactory: s.PropTypes.func
            },
            mixins: [l.Mixin],
            statics: {
                queryParams: {
                    count: 10
                },
                sizes: R,
                queries: {
                    attachment: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                        var requireLazy/*r*/ = [R.full.width * C, R.full.height * C],
                            module/*i*/ = [R.medium.width * C, R.medium.height * C],
                            o = [R.small.width * C, R.small.height * C];
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a, s) {
                            var l = require/*t*/.__GraphQL;
                            return new l.QueryFragment("FBPhotoCollage_attachment", "StoryAttachment", [new l.Field("target", [new l.Field("media", [new l.Field("edges", [new l.Field("node", [new l.Field("image", [new l.Field("width"), new l.Field("height"), new l.Field("uri")], null, [new l.Callv("size", [require/*t*/.__var(requireDynamic/*n*/), require/*t*/.__var(requireLazy/*r*/)]), new l.Callv("sizing", ["contain-fit"])], "image_full"), new l.Field("image", [new l.Field("width"), new l.Field("height"), new l.Field("uri")], null, [new l.Callv("size", [require/*t*/.__var(module/*i*/), require/*t*/.__var(o)]), new l.Callv("sizing", ["cover-fill"])], "image_medium"), new l.Field("image", [new l.Field("width"), new l.Field("height"), new l.Field("uri")], null, [new l.Callv("size", [require/*t*/.__var(a), require/*t*/.__var(s)]), new l.Callv("sizing", ["cover-fill"])], "image_small")], null, null, null, null, {
                                requisite: !0
                            }), new l.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBPhotoCollage_attachment_1"
                            }), new l.Field("page_info", [new l.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new l.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new l.Callv("first", [require/*t*/.__var(global/*e*/)])], null, null, {
                                connection: !0
                            }), new l.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                rootCall: "node",
                                pk: "id"
                            })], null, {
                                scope: "FBPhotoCollage_attachment"
                            })
                        }(requireDynamic/*n*/.count, requireLazy/*r*/[0], requireLazy/*r*/[1], module/*i*/[0], module/*i*/[1], o[0], o[1])
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
                var global/*e*/ = this.props.attachment.target;
                return global/*e*/ && global/*e*/.media && global/*e*/.media.edges.length ? Math.min(global/*e*/.media.edges.length, v) : 0
            },
            close: function() {
                this.refs[y].close()
            },
            showImage: function(global/*e*/) {
                global/*e*/ < this.numImagesInCollage() && this.refs[this.getKeyForIdx(global/*e*/)].setNativeProps(P)
            },
            hideImage: function(global/*e*/) {
                global/*e*/ < this.numImagesInCollage() && this.refs[this.getKeyForIdx(global/*e*/)].setNativeProps(x)
            },
            handlePress: function(global/*e*/) {
                this.state.isClosed || f(0, "Must be closed to process a tap.");
                for (var require/*t*/ = 0, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < this.numImagesInCollage(); ++requireDynamic/*n*/) this.refs[this.getKeyForIdx(requireDynamic/*n*/)].measure(function(requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, a, s, l) {
                    this.state.originalFrames[requireDynamic/*n*/] = {
                        width: o,
                        height: a,
                        left: s,
                        top: l
                    }, require/*t*/++, require/*t*/ === this.numImagesInCollage() && (_(this.state, {
                        isClosed: !1,
                        activeImgIdx: global/*e*/
                    }), this.refs[y].open(global/*e*/, this.state.originalFrames[global/*e*/]))
                }.bind(this, requireDynamic/*n*/))
            },
            handleWillOpen: function() {
                this.hideImage(this.state.activeImgIdx)
            },
            handleMayClose: function(global/*e*/, require/*t*/) {
                if (global/*e*/ !== this.state.activeImgIdx && (this.showImage(this.state.activeImgIdx), this.hideImage(global/*e*/), _(this.state, {
                        activeImgIdx: global/*e*/
                    })), require/*t*/) {
                    var requireDynamic/*n*/ = global/*e*/ < this.numImagesInCollage() ? this.state.originalFrames[global/*e*/] : null;
                    require/*t*/(requireDynamic/*n*/)
                }
            },
            handleDidClose: function(global/*e*/) {
                global/*e*/ !== this.state.activeImgIdx && f(0, "handleMayClose and handleDidClose should use the same image."), this.showImage(global/*e*/), _(this.state, {
                    isClosed: !0
                })
            },
            getKeyForIdx: function(global/*e*/) {
                return "img_" + global/*e*/
            },
            getSource: function(global/*e*/, require/*t*/) {
                if (this.state.sources[global/*e*/]) return this.state.sources[global/*e*/];
                var requireDynamic/*n*/ = h(require/*t*/),
                    requireLazy/*r*/ = this.props.attachment.target.media,
                    module/*i*/ = requireLazy/*r*/.edges[global/*e*/].node.image_full,
                    o = "image_full",
                    a = {
                        image_full: !0,
                        image_medium: !0,
                        image_small: !0
                    };
                for (var s in a) {
                    var l = requireLazy/*r*/.edges[global/*e*/].node[s];
                    l.height >= (requireDynamic/*n*/.height || 0) * C && l.width >= (requireDynamic/*n*/.width || 0) * C && l.height < module/*i*/.height && (module/*i*/ = l, o = s)
                }
                return w && console.log("Using " + o + " with size (scaled @" + C + "x) ", {
                    w: module/*i*/.width,
                    h: module/*i*/.height
                }, " for layout ", {
                    w: requireDynamic/*n*/.width * C,
                    h: requireDynamic/*n*/.height * C
                }), this.state.sources[global/*e*/] = module/*i*/, module/*i*/
            },
            imageIdxChanged: function(global/*e*/) {
                global/*e*/ >= this.queryParams.count + 1 - S && this.setQueryParams({
                    count: this.queryParams.count + S
                })
            },
            renderImage: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.getSource(global/*e*/, require/*t*/),
                    requireLazy/*r*/ = this.getKeyForIdx(global/*e*/),
                    module/*i*/ = this.state.isClosed || this.state.activeImgIdx !== global/*e*/ ? T.show : T.hide;
                return s.createElement(p, {
                    onPress: this.handlePress.bind(this, global/*e*/),
                    key: "image" + global/*e*/
                }, s.createElement(d, {
                    ref: requireLazy/*r*/,
                    style: [module/*i*/, D.shadow]
                }, s.createElement(o, {
                    source: requireDynamic/*n*/,
                    style: [D.imageBase, require/*t*/]
                })))
            },
            renderInnerViews: function() {
                switch (this.numImagesInCollage()) {
                    case 0:
                        return s.createElement(d, null);
                    case 1:
                        return s.createElement(d, {
                            style: D.row
                        }, this.renderImage(0, [D.rowLarge, this.state.widthStyle]));
                    case 2:
                        var global/*e*/ = this.props.attachment.target.media.edges,
                            require/*t*/ = global/*e*/[0].node.image_full,
                            requireDynamic/*n*/ = global/*e*/[0].node.image_full;
                        return require/*t*/.height > require/*t*/.width && requireDynamic/*n*/.height > requireDynamic/*n*/.width ? s.createElement(d, {
                            style: D.row
                        }, this.renderImage(0, D.rowLarge), s.createElement(d, {
                            style: D.spacer
                        }), this.renderImage(1, D.rowLarge)) : [this.renderImage(0, [D.rowLarge, this.state.widthStyle]), s.createElement(d, {
                            style: D.spacer,
                            key: "spacer"
                        }), this.renderImage(1, [D.rowLarge, this.state.widthStyle])];
                    case 3:
                        return s.createElement(d, {
                            style: D.row
                        }, this.renderImage(0, D.rowLarge), s.createElement(d, {
                            style: D.spacer
                        }), s.createElement(d, null, this.renderImage(1, D.colSmall), s.createElement(d, {
                            style: D.spacer
                        }), this.renderImage(2, D.colSmall)));
                    case 4:
                        return [s.createElement(d, {
                            style: D.row,
                            key: "row1"
                        }, this.renderImage(0, D.rowMedium), s.createElement(d, {
                            style: D.spacer
                        }), this.renderImage(1, D.rowMedium)), s.createElement(d, {
                            style: D.spacer,
                            key: "spacer"
                        }), s.createElement(d, {
                            style: D.row,
                            key: "row2"
                        }, this.renderImage(2, D.rowMedium), s.createElement(d, {
                            style: D.spacer
                        }), this.renderImage(3, D.rowMedium))];
                    default:
                        return [s.createElement(d, {
                            style: D.row,
                            key: "row1"
                        }, this.renderImage(0, D.rowSmall), s.createElement(d, {
                            style: D.spacerOdd
                        }), this.renderImage(1, D.rowSmall), s.createElement(d, {
                            style: D.spacerOdd
                        }), this.renderImage(2, D.rowSmall)), s.createElement(d, {
                            style: D.spacer,
                            key: "spacer"
                        }), s.createElement(d, {
                            style: D.row,
                            key: "row2"
                        }, this.renderImage(3, D.rowMedium), s.createElement(d, {
                            style: D.spacer
                        }), this.renderImage(4, D.rowMedium))]
                }
            },
            render: function() {
                var global/*e*/ = this.props.attachment.target;
                if (!global/*e*/ || !global/*e*/.media || m(global/*e*/.media.edges)) return console.error("Tried to render FBPhotoCollage with invalid media"), s.createElement(d, null);
                var require/*t*/ = global/*e*/.media.edges,
                    requireDynamic/*n*/ = null,
                    requireLazy/*r*/ = this.props.modalViewer;
                if (requireLazy/*r*/) {
                    var module/*i*/ = require/*t*/.map(function(global/*e*/, require/*t*/) {
                            return this.state.sources[require/*t*/] || global/*e*/.node.image_medium
                        }.bind(this)),
                        o = require/*t*/.map(function(global/*e*/) {
                            return global/*e*/.node.image_full
                        });
                    requireDynamic/*n*/ = s.createElement(requireLazy/*r*/, {
                        ref: y,
                        sources: module/*i*/,
                        sourcesHiRes: o,
                        onWillOpen: this.handleWillOpen,
                        onDidClose: this.handleDidClose,
                        onMayClose: this.handleMayClose,
                        openedOverlayFactory: this.props.openedOverlayFactory,
                        closedShadowStyle: D.shadow,
                        didImgIdxChange: this.imageIdxChanged
                    })
                }
                return s.createElement(d, {
                    style: D.container
                }, this.renderInnerViews(), requireDynamic/*n*/)
            }
        }),
        D = c.create({
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
    module/*i*/.exports = E
});