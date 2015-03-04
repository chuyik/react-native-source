__d("FBPhotoAttachment",["GraphQLNodeStatus","Image","PixelRatio","React","ReactGraphQL","Dimensions","StyleSheet","TouchableWithoutFeedback","View","invariant","keyOf","mergeInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var GraphQLNodeStatus/*o*/ = require/*t*/("GraphQLNodeStatus"),
        Image/*a*/ = require/*t*/("Image"),
        PixelRatio/*s*/ = require/*t*/("PixelRatio"),
        React/*l*/ = require/*t*/("React"),
        ReactGraphQL/*u*/ = require/*t*/("ReactGraphQL"),
        Dimensions/*c*/ = require/*t*/("Dimensions"),
        StyleSheet/*p*/ = require/*t*/("StyleSheet"),
        TouchableWithoutFeedback/*d*/ = require/*t*/("TouchableWithoutFeedback"),
        View/*h*/ = require/*t*/("View"),
        invariant/*f*/ = require/*t*/("invariant"),
        keyOf/*m*/ = require/*t*/("keyOf"),
        mergeInto/*g*/ = require/*t*/("mergeInto"),
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
                    attachment: function(global/*e*/, require/*t*/) {
                        var requireDynamic/*n*/ = [b.zoomed.width * S, b.zoomed.height * S],
                            requireLazy/*r*/ = [b.large.width * S, b.large.height * S];
                        return function(global/*e*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                            var GraphQLNodeStatus/*o*/ = require/*t*/.__GraphQL;
                            return new GraphQLNodeStatus/*o*/.QueryFragment("FBPhotoAttachment_attachment", "StoryAttachment", [new GraphQLNodeStatus/*o*/.Field("media", [new GraphQLNodeStatus/*o*/.Field("image", [new GraphQLNodeStatus/*o*/.Field("width"), new GraphQLNodeStatus/*o*/.Field("height"), new GraphQLNodeStatus/*o*/.Field("uri")], null, [new GraphQLNodeStatus/*o*/.Callv("size", [require/*t*/.__var(global/*e*/), require/*t*/.__var(requireDynamic/*n*/)]), new GraphQLNodeStatus/*o*/.Callv("sizing", ["contain-fit"])], "photo_zoomed"), new GraphQLNodeStatus/*o*/.Field("image", [new GraphQLNodeStatus/*o*/.Field("width"), new GraphQLNodeStatus/*o*/.Field("height"), new GraphQLNodeStatus/*o*/.Field("uri")], null, [new GraphQLNodeStatus/*o*/.Callv("size", [require/*t*/.__var(requireLazy/*r*/), require/*t*/.__var(module/*i*/)]), new GraphQLNodeStatus/*o*/.Callv("sizing", ["cover-fill"])], "photo_large"), new GraphQLNodeStatus/*o*/.Field("image", [new GraphQLNodeStatus/*o*/.Field("width"), new GraphQLNodeStatus/*o*/.Field("height"), new GraphQLNodeStatus/*o*/.Field("uri")], null, null, "photo_local")])], null, {
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
                this.refs[_].close()
            },
            handlePress: function() {
                this.state.isClosed || invariant/*f*/(0, "Must be closed to process Image/*a*/ tap."), this.refs[y].measure(function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, GraphQLNodeStatus/*o*/) {
                    this.state.originalFrame = {
                        width: requireDynamic/*n*/,
                        height: requireLazy/*r*/,
                        left: module/*i*/,
                        top: GraphQLNodeStatus/*o*/
                    }, this.refs[_].open(0, this.state.originalFrame), mergeInto/*g*/(this.state, {
                        isClosed: !1
                    })
                }.bind(this))
            },
            handleWillOpen: function() {
                this.refs[y].setNativeProps(E)
            },
            handleMayClose: function(global/*e*/, require/*t*/) {
                require/*t*/ && require/*t*/(this.state.originalFrame)
            },
            handleDidClose: function() {
                this.refs[y].setNativeProps(D), mergeInto/*g*/(this.state, {
                    isClosed: !0
                })
            },
            renderImage: function() {
                var global/*e*/ = this.props.attachment,
                    require/*t*/ = GraphQLNodeStatus/*o*/.isOptimistic(global/*e*/) ? global/*e*/.media.photo_local : global/*e*/.media.photo_large,
                    requireDynamic/*n*/ = require/*t*/.width,
                    requireLazy/*r*/ = this.props.maxPhotoWidth ? requireDynamic/*n*/ / this.props.maxPhotoWidth : 1;
                requireDynamic/*n*/ /= requireLazy/*r*/;
                var module/*i*/ = require/*t*/.height / requireLazy/*r*/;
                this.props.maxPhotoHeight && module/*i*/ > this.props.maxPhotoHeight && (module/*i*/ = this.props.maxPhotoHeight);
                var PixelRatio/*s*/ = {
                        width: requireDynamic/*n*/ + 2 / S,
                        height: module/*i*/ + 2 / S,
                        left: -1 / S
                    },
                    ReactGraphQL/*u*/ = {
                        width: requireDynamic/*n*/,
                        height: module/*i*/
                    },
                    Dimensions/*c*/ = this.state.isClosed ? C.show : C.hide;
                return React/*l*/.createElement(TouchableWithoutFeedback/*d*/, {
                    onPress: this.handlePress
                }, React/*l*/.createElement(View/*h*/, {
                    ref: y,
                    style: [Dimensions/*c*/, PixelRatio/*s*/, w.shadow]
                }, React/*l*/.createElement(Image/*a*/, {
                    source: require/*t*/,
                    style: [w.image, ReactGraphQL/*u*/]
                })))
            },
            render: function() {
                var global/*e*/ = null,
                    require/*t*/ = this.props.modalViewer;
                if (require/*t*/) {
                    var requireDynamic/*n*/ = [this.props.attachment.media.photo_large],
                        requireLazy/*r*/ = [this.props.attachment.media.photo_zoomed];
                    GraphQLNodeStatus/*o*/.isOptimistic(this.props.attachment) && (requireDynamic/*n*/ = [this.props.attachment.media.photo_local], requireLazy/*r*/ = [this.props.attachment.media.photo_local]), global/*e*/ = React/*l*/.createElement(require/*t*/, {
                        ref: _,
                        sources: requireDynamic/*n*/,
                        sourcesHiRes: requireLazy/*r*/,
                        onWillOpen: this.handleWillOpen,
                        onDidClose: this.handleDidClose,
                        onMayClose: this.handleMayClose,
                        openedOverlayFactory: this.props.openedOverlayFactory,
                        closedShadowStyle: w.shadow
                    })
                }
                return React/*l*/.createElement(View/*h*/, null, this.renderImage(), global/*e*/)
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
    module/*i*/.exports = R
});