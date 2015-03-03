__d("FBPhotoCollage",["Image","PixelRatio","React","ReactGraphQL","Dimensions","StyleSheet","TouchableWithoutFeedback","View","flattenStyle","invariant","isEmpty","keyOf","mergeInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Image"),
        exports/*a*/ = require/*t*/("PixelRatio"),
        Image/*s*/ = require/*t*/("React"),
        PixelRatio/*l*/ = require/*t*/("ReactGraphQL"),
        React/*u*/ = require/*t*/("Dimensions"),
        ReactGraphQL/*c*/ = require/*t*/("StyleSheet"),
        Dimensions/*p*/ = require/*t*/("TouchableWithoutFeedback"),
        StyleSheet/*d*/ = require/*t*/("View"),
        TouchableWithoutFeedback/*h*/ = require/*t*/("flattenStyle"),
        View/*f*/ = require/*t*/("invariant"),
        flattenStyle/*m*/ = require/*t*/("isEmpty"),
        invariant/*g*/ = require/*t*/("keyOf"),
        isEmpty/*_*/ = require/*t*/("mergeInto"),
        keyOf/*y*/ = invariant/*g*/({
            modalRef: null
        }),
        mergeInto/*v*/ = 5,
        S = 5,
        b = React/*u*/.get("window"),
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
        C = exports/*a*/.get(),
        E = Image/*s*/.createClass({
            displayName: "FBPhotoCollage",
            propTypes: {
                attachment: Image/*s*/.PropTypes.object.isRequired,
                maxPhotoWidth: Image/*s*/.PropTypes.number,
                modalViewer: Image/*s*/.PropTypes.func,
                openedOverlayFactory: Image/*s*/.PropTypes.func
            },
            mixins: [PixelRatio/*l*/.Mixin],
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
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, exports/*a*/, Image/*s*/) {
                            var PixelRatio/*l*/ = require/*t*/.__GraphQL;
                            return new PixelRatio/*l*/.QueryFragment("FBPhotoCollage_attachment", "StoryAttachment", [new PixelRatio/*l*/.Field("target", [new PixelRatio/*l*/.Field("media", [new PixelRatio/*l*/.Field("edges", [new PixelRatio/*l*/.Field("node", [new PixelRatio/*l*/.Field("image", [new PixelRatio/*l*/.Field("width"), new PixelRatio/*l*/.Field("height"), new PixelRatio/*l*/.Field("uri")], null, [new PixelRatio/*l*/.Callv("size", [require/*t*/.__var(requireDynamic/*n*/), require/*t*/.__var(requireLazy/*r*/)]), new PixelRatio/*l*/.Callv("sizing", ["contain-fit"])], "image_full"), new PixelRatio/*l*/.Field("image", [new PixelRatio/*l*/.Field("width"), new PixelRatio/*l*/.Field("height"), new PixelRatio/*l*/.Field("uri")], null, [new PixelRatio/*l*/.Callv("size", [require/*t*/.__var(module/*i*/), require/*t*/.__var(o)]), new PixelRatio/*l*/.Callv("sizing", ["cover-fill"])], "image_medium"), new PixelRatio/*l*/.Field("image", [new PixelRatio/*l*/.Field("width"), new PixelRatio/*l*/.Field("height"), new PixelRatio/*l*/.Field("uri")], null, [new PixelRatio/*l*/.Callv("size", [require/*t*/.__var(exports/*a*/), require/*t*/.__var(Image/*s*/)]), new PixelRatio/*l*/.Callv("sizing", ["cover-fill"])], "image_small")], null, null, null, null, {
                                requisite: !0
                            }), new PixelRatio/*l*/.Field("cursor", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                plural: !0,
                                edgesID: "FBPhotoCollage_attachment_1"
                            }), new PixelRatio/*l*/.Field("page_info", [new PixelRatio/*l*/.Field("has_next_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            }), new PixelRatio/*l*/.Field("has_previous_page", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, [new PixelRatio/*l*/.Callv("first", [require/*t*/.__var(global/*e*/)])], null, null, {
                                connection: !0
                            }), new PixelRatio/*l*/.Field("id", null, null, null, null, null, {
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
                return global/*e*/ && global/*e*/.media && global/*e*/.media.edges.length ? Math.min(global/*e*/.media.edges.length, mergeInto/*v*/) : 0
            },
            close: function() {
                this.refs[keyOf/*y*/].close()
            },
            showImage: function(global/*e*/) {
                global/*e*/ < this.numImagesInCollage() && this.refs[this.getKeyForIdx(global/*e*/)].setNativeProps(P)
            },
            hideImage: function(global/*e*/) {
                global/*e*/ < this.numImagesInCollage() && this.refs[this.getKeyForIdx(global/*e*/)].setNativeProps(x)
            },
            handlePress: function(global/*e*/) {
                this.state.isClosed || View/*f*/(0, "Must be closed to process exports/*a*/ tap.");
                for (var require/*t*/ = 0, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < this.numImagesInCollage(); ++requireDynamic/*n*/) this.refs[this.getKeyForIdx(requireDynamic/*n*/)].measure(function(requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o, exports/*a*/, Image/*s*/, PixelRatio/*l*/) {
                    this.state.originalFrames[requireDynamic/*n*/] = {
                        width: o,
                        height: exports/*a*/,
                        left: Image/*s*/,
                        top: PixelRatio/*l*/
                    }, require/*t*/++, require/*t*/ === this.numImagesInCollage() && (isEmpty/*_*/(this.state, {
                        isClosed: !1,
                        activeImgIdx: global/*e*/
                    }), this.refs[keyOf/*y*/].open(global/*e*/, this.state.originalFrames[global/*e*/]))
                }.bind(this, requireDynamic/*n*/))
            },
            handleWillOpen: function() {
                this.hideImage(this.state.activeImgIdx)
            },
            handleMayClose: function(global/*e*/, require/*t*/) {
                if (global/*e*/ !== this.state.activeImgIdx && (this.showImage(this.state.activeImgIdx), this.hideImage(global/*e*/), isEmpty/*_*/(this.state, {
                        activeImgIdx: global/*e*/
                    })), require/*t*/) {
                    var requireDynamic/*n*/ = global/*e*/ < this.numImagesInCollage() ? this.state.originalFrames[global/*e*/] : null;
                    require/*t*/(requireDynamic/*n*/)
                }
            },
            handleDidClose: function(global/*e*/) {
                global/*e*/ !== this.state.activeImgIdx && View/*f*/(0, "handleMayClose and handleDidClose should use the same image."), this.showImage(global/*e*/), isEmpty/*_*/(this.state, {
                    isClosed: !0
                })
            },
            getKeyForIdx: function(global/*e*/) {
                return "img_" + global/*e*/
            },
            getSource: function(global/*e*/, require/*t*/) {
                if (this.state.sources[global/*e*/]) return this.state.sources[global/*e*/];
                var requireDynamic/*n*/ = TouchableWithoutFeedback/*h*/(require/*t*/),
                    requireLazy/*r*/ = this.props.attachment.target.media,
                    module/*i*/ = requireLazy/*r*/.edges[global/*e*/].node.image_full,
                    o = "image_full",
                    exports/*a*/ = {
                        image_full: !0,
                        image_medium: !0,
                        image_small: !0
                    };
                for (var Image/*s*/ in exports/*a*/) {
                    var PixelRatio/*l*/ = requireLazy/*r*/.edges[global/*e*/].node[Image/*s*/];
                    PixelRatio/*l*/.height >= (requireDynamic/*n*/.height || 0) * C && PixelRatio/*l*/.width >= (requireDynamic/*n*/.width || 0) * C && PixelRatio/*l*/.height < module/*i*/.height && (module/*i*/ = PixelRatio/*l*/, o = Image/*s*/)
                }
                return w && console.log("Using " + o + " with size (scaled @" + C + "x) ", {
                    w: module/*i*/.width,
                    TouchableWithoutFeedback/*h*/: module/*i*/.height
                }, " for layout ", {
                    w: requireDynamic/*n*/.width * C,
                    TouchableWithoutFeedback/*h*/: requireDynamic/*n*/.height * C
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
                return Image/*s*/.createElement(Dimensions/*p*/, {
                    onPress: this.handlePress.bind(this, global/*e*/),
                    key: "image" + global/*e*/
                }, Image/*s*/.createElement(StyleSheet/*d*/, {
                    ref: requireLazy/*r*/,
                    style: [module/*i*/, D.shadow]
                }, Image/*s*/.createElement(o, {
                    source: requireDynamic/*n*/,
                    style: [D.imageBase, require/*t*/]
                })))
            },
            renderInnerViews: function() {
                switch (this.numImagesInCollage()) {
                    case 0:
                        return Image/*s*/.createElement(StyleSheet/*d*/, null);
                    case 1:
                        return Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.row
                        }, this.renderImage(0, [D.rowLarge, this.state.widthStyle]));
                    case 2:
                        var global/*e*/ = this.props.attachment.target.media.edges,
                            require/*t*/ = global/*e*/[0].node.image_full,
                            requireDynamic/*n*/ = global/*e*/[0].node.image_full;
                        return require/*t*/.height > require/*t*/.width && requireDynamic/*n*/.height > requireDynamic/*n*/.width ? Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.row
                        }, this.renderImage(0, D.rowLarge), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacer
                        }), this.renderImage(1, D.rowLarge)) : [this.renderImage(0, [D.rowLarge, this.state.widthStyle]), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacer,
                            key: "spacer"
                        }), this.renderImage(1, [D.rowLarge, this.state.widthStyle])];
                    case 3:
                        return Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.row
                        }, this.renderImage(0, D.rowLarge), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacer
                        }), Image/*s*/.createElement(StyleSheet/*d*/, null, this.renderImage(1, D.colSmall), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacer
                        }), this.renderImage(2, D.colSmall)));
                    case 4:
                        return [Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.row,
                            key: "row1"
                        }, this.renderImage(0, D.rowMedium), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacer
                        }), this.renderImage(1, D.rowMedium)), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacer,
                            key: "spacer"
                        }), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.row,
                            key: "row2"
                        }, this.renderImage(2, D.rowMedium), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacer
                        }), this.renderImage(3, D.rowMedium))];
                    default:
                        return [Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.row,
                            key: "row1"
                        }, this.renderImage(0, D.rowSmall), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacerOdd
                        }), this.renderImage(1, D.rowSmall), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacerOdd
                        }), this.renderImage(2, D.rowSmall)), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacer,
                            key: "spacer"
                        }), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.row,
                            key: "row2"
                        }, this.renderImage(3, D.rowMedium), Image/*s*/.createElement(StyleSheet/*d*/, {
                            style: D.spacer
                        }), this.renderImage(4, D.rowMedium))]
                }
            },
            render: function() {
                var global/*e*/ = this.props.attachment.target;
                if (!global/*e*/ || !global/*e*/.media || flattenStyle/*m*/(global/*e*/.media.edges)) return console.error("Tried to render FBPhotoCollage with invalid media"), Image/*s*/.createElement(StyleSheet/*d*/, null);
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
                    requireDynamic/*n*/ = Image/*s*/.createElement(requireLazy/*r*/, {
                        ref: keyOf/*y*/,
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
                return Image/*s*/.createElement(StyleSheet/*d*/, {
                    style: D.container
                }, this.renderInnerViews(), requireDynamic/*n*/)
            }
        }),
        D = ReactGraphQL/*c*/.create({
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