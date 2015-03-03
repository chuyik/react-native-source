__d("FBPhotoAttachment",["GraphQLNodeStatus","Image","PixelRatio","React","ReactGraphQL","Dimensions","StyleSheet","TouchableWithoutFeedback","View","invariant","keyOf","mergeInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("GraphQLNodeStatus"),
        exports/*a*/ = require/*t*/("Image"),
        GraphQLNodeStatus/*s*/ = require/*t*/("PixelRatio"),
        Image/*l*/ = require/*t*/("React"),
        PixelRatio/*u*/ = require/*t*/("ReactGraphQL"),
        React/*c*/ = require/*t*/("Dimensions"),
        ReactGraphQL/*p*/ = require/*t*/("StyleSheet"),
        Dimensions/*d*/ = require/*t*/("TouchableWithoutFeedback"),
        StyleSheet/*h*/ = require/*t*/("View"),
        TouchableWithoutFeedback/*f*/ = require/*t*/("invariant"),
        View/*m*/ = require/*t*/("keyOf"),
        invariant/*g*/ = require/*t*/("mergeInto"),
        keyOf/*_*/ = View/*m*/({
            modalRef: null
        }),
        mergeInto/*y*/ = View/*m*/({
            photoRef: null
        }),
        v = React/*c*/.get("window"),
        S = GraphQLNodeStatus/*s*/.get(),
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
        R = Image/*l*/.createClass({
            displayName: "FBPhotoAttachment",
            propTypes: {
                attachment: Image/*l*/.PropTypes.object.isRequired,
                modalViewer: Image/*l*/.PropTypes.func,
                maxPhotoHeight: Image/*l*/.PropTypes.number,
                maxPhotoWidth: Image/*l*/.PropTypes.number,
                openedOverlayFactory: Image/*l*/.PropTypes.func
            },
            mixins: [PixelRatio/*u*/.Mixin],
            statics: {
                queries: {
                    attachment: function(global/*e*/, require/*t*/) {
                        var requireDynamic/*n*/ = [b.zoomed.width * S, b.zoomed.height * S],
                            requireLazy/*r*/ = [b.large.width * S, b.large.height * S];
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                            var o = require/*t*/.__GraphQL;
                            return new o.QueryFragment("FBPhotoAttachment_attachment", "StoryAttachment", [new o.Field("media", [new o.Field("image", [new o.Field("width"), new o.Field("height"), new o.Field("uri")], null, [new o.Callv("size", [require/*t*/.__var(global/*e*/), require/*t*/.__var(requireDynamic/*n*/)]), new o.Callv("sizing", ["contain-fit"])], "photo_zoomed"), new o.Field("image", [new o.Field("width"), new o.Field("height"), new o.Field("uri")], null, [new o.Callv("size", [require/*t*/.__var(requireLazy/*r*/), require/*t*/.__var(module/*i*/)]), new o.Callv("sizing", ["cover-fill"])], "photo_large"), new o.Field("image", [new o.Field("width"), new o.Field("height"), new o.Field("uri")], null, null, "photo_local")])], null, {
                                scope: "FBPhotoAttachment_attachment"
                            })
                        }(requireDynamic/*n*/[0], requireDynamic/*n*/[1], requireLazy/*r*/[0], requireLazy/*r*/[1])
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
                this.refs[keyOf/*_*/].close()
            },
            handlePress: function() {
                this.state.isClosed || TouchableWithoutFeedback/*f*/(0, "Must be closed to process exports/*a*/ tap."), this.refs[mergeInto/*y*/].measure(function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, o) {
                    this.state.originalFrame = {
                        width: requireDynamic/*n*/,
                        height: requireLazy/*r*/,
                        left: module/*i*/,
                        top: o
                    }, this.refs[keyOf/*_*/].open(0, this.state.originalFrame), invariant/*g*/(this.state, {
                        isClosed: !1
                    })
                }.bind(this))
            },
            handleWillOpen: function() {
                this.refs[mergeInto/*y*/].setNativeProps(E)
            },
            handleMayClose: function(global/*e*/, require/*t*/) {
                require/*t*/ && require/*t*/(this.state.originalFrame)
            },
            handleDidClose: function() {
                this.refs[mergeInto/*y*/].setNativeProps(D), invariant/*g*/(this.state, {
                    isClosed: !0
                })
            },
            renderImage: function() {
                var global/*e*/ = this.props.attachment,
                    require/*t*/ = o.isOptimistic(global/*e*/) ? global/*e*/.media.photo_local : global/*e*/.media.photo_large,
                    requireDynamic/*n*/ = require/*t*/.width,
                    requireLazy/*r*/ = this.props.maxPhotoWidth ? requireDynamic/*n*/ / this.props.maxPhotoWidth : 1;
                requireDynamic/*n*/ /= requireLazy/*r*/;
                var module/*i*/ = require/*t*/.height / requireLazy/*r*/;
                this.props.maxPhotoHeight && module/*i*/ > this.props.maxPhotoHeight && (module/*i*/ = this.props.maxPhotoHeight);
                var GraphQLNodeStatus/*s*/ = {
                        width: requireDynamic/*n*/ + 2 / S,
                        height: module/*i*/ + 2 / S,
                        left: -1 / S
                    },
                    PixelRatio/*u*/ = {
                        width: requireDynamic/*n*/,
                        height: module/*i*/
                    },
                    React/*c*/ = this.state.isClosed ? C.show : C.hide;
                return Image/*l*/.createElement(Dimensions/*d*/, {
                    onPress: this.handlePress
                }, Image/*l*/.createElement(StyleSheet/*h*/, {
                    ref: mergeInto/*y*/,
                    style: [React/*c*/, GraphQLNodeStatus/*s*/, w.shadow]
                }, Image/*l*/.createElement(exports/*a*/, {
                    source: require/*t*/,
                    style: [w.image, PixelRatio/*u*/]
                })))
            },
            render: function() {
                var global/*e*/ = null,
                    require/*t*/ = this.props.modalViewer;
                if (require/*t*/) {
                    var requireDynamic/*n*/ = [this.props.attachment.media.photo_large],
                        requireLazy/*r*/ = [this.props.attachment.media.photo_zoomed];
                    o.isOptimistic(this.props.attachment) && (requireDynamic/*n*/ = [this.props.attachment.media.photo_local], requireLazy/*r*/ = [this.props.attachment.media.photo_local]), global/*e*/ = Image/*l*/.createElement(require/*t*/, {
                        ref: keyOf/*_*/,
                        sources: requireDynamic/*n*/,
                        sourcesHiRes: requireLazy/*r*/,
                        onWillOpen: this.handleWillOpen,
                        onDidClose: this.handleDidClose,
                        onMayClose: this.handleMayClose,
                        openedOverlayFactory: this.props.openedOverlayFactory,
                        closedShadowStyle: w.shadow
                    })
                }
                return Image/*l*/.createElement(StyleSheet/*h*/, null, this.renderImage(), global/*e*/)
            }
        }),
        w = ReactGraphQL/*p*/.create({
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
    module/*i*/.exports = R
});