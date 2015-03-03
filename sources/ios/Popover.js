__d("Popover",["POPAnimationMixin","FIGColors","MatrixMath","ModalFullscreenView","React","POPAnimation","StyleSheet","TouchableWithoutFeedback","View","clamp","createStrictShapeTypeChecker","invariant","keyOf","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("POPAnimationMixin"),
        exports/*a*/ = require/*t*/("FIGColors"),
        POPAnimationMixin/*s*/ = require/*t*/("MatrixMath"),
        FIGColors/*l*/ = require/*t*/("ModalFullscreenView"),
        MatrixMath/*u*/ = require/*t*/("React"),
        ModalFullscreenView/*c*/ = require/*t*/("POPAnimation"),
        React/*p*/ = require/*t*/("StyleSheet"),
        POPAnimation/*d*/ = require/*t*/("TouchableWithoutFeedback"),
        StyleSheet/*h*/ = require/*t*/("View"),
        TouchableWithoutFeedback/*f*/ = require/*t*/("clamp"),
        View/*m*/ = require/*t*/("createStrictShapeTypeChecker"),
        clamp/*g*/ = require/*t*/("invariant"),
        createStrictShapeTypeChecker/*_*/ = require/*t*/("keyOf"),
        invariant/*y*/ = require/*t*/("keyMirror"),
        keyOf/*v*/ = {
            left: 20,
            keyMirror/*right*/: FIGColors/*l*/.width - 20
        },
        S = View/*m*/({
            top: MatrixMath/*u*/.PropTypes.number.isRequired,
            left: MatrixMath/*u*/.PropTypes.number.isRequired,
            height: MatrixMath/*u*/.PropTypes.number
        }),
        b = MatrixMath/*u*/.createClass({
            displayName: "Popover",
            getDefaultProps: function() {
                return {
                    fadeOut: !1,
                    modal: !0
                }
            },
            propTypes: {
                contentFactory: MatrixMath/*u*/.PropTypes.func.isRequired,
                onDidClose: MatrixMath/*u*/.PropTypes.func,
                onDidOpen: MatrixMath/*u*/.PropTypes.func,
                fadeOut: MatrixMath/*u*/.PropTypes.bool,
                modal: MatrixMath/*u*/.PropTypes.bool,
                modalBackgroundColor: MatrixMath/*u*/.PropTypes.string,
                style: StyleSheet/*h*/.stylePropType
            },
            mixins: [o],
            statics: {
                renderSeparator: function() {
                    return MatrixMath/*u*/.createElement(StyleSheet/*h*/, {
                        key: "POPAnimationMixin/*s*/" + N++,
                        style: T.separator
                    })
                }
            },
            getInitialState: function() {
                return {
                    modalState: F.closed,
                    onDidCloseCallback: null,
                    onDidOpenCallback: null,
                    target: null,
                    arrowColor: null
                }
            },
            open: function(global/*e*/) {
                this.state.modalState === F.closed && this.setState({
                    modalState: F.opening,
                    onDidOpenCallback: global/*e*/
                }, this._animateOpen)
            },
            close: function(global/*e*/) {
                this.state.modalState === F.open && this.setState({
                    modalState: F.closing,
                    onDidCloseCallback: global/*e*/
                }, this._animateClosed)
            },
            openWithArrow: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                S({
                    coordinates: global/*e*/
                }, "coordinates", "Popover.openWithArrow"), global/*e*/.left = TouchableWithoutFeedback/*f*/(keyOf/*v*/.left, global/*e*/.left, keyOf/*v*/.keyMirror/*right*/), global/*e*/.top = TouchableWithoutFeedback/*f*/(0, global/*e*/.top, FIGColors/*l*/.height), void 0 === global/*e*/.height && (global/*e*/.height = 0), this.setState({
                    target: global/*e*/,
                    arrowColor: require/*t*/
                }, this.open.bind(this, requireDynamic/*n*/))
            },
            closeWithTouchEvent: function() {
                this.close()
            },
            _animateOpen: function() {
                var global/*e*/ = ModalFullscreenView/*c*/.createSpringAnimation(Q),
                    require/*t*/ = ModalFullscreenView/*c*/.createSpringAnimation(k),
                    requireDynamic/*n*/ = [{
                        ref: L,
                        anim: require/*t*/
                    }];
                this.props.modal && requireDynamic/*n*/.push({
                    ref: M,
                    anim: global/*e*/
                }), this.startAnimations(requireDynamic/*n*/, this._handleAnimateOpenSuccess)
            },
            _handleAnimateOpenSuccess: function(global/*e*/) {
                global/*e*/ ? this.setState({
                    modalState: F.open
                }, this._onDidOpen) : this.setState({
                    modalState: F.closed
                })
            },
            _onDidOpen: function() {
                this.state.onDidOpenCallback && (this.state.onDidOpenCallback(), this.setState({
                    onDidOpenCallback: null
                })), this.props.onDidOpen && this.props.onDidOpen()
            },
            _animateClosed: function() {
                var global/*e*/ = ModalFullscreenView/*c*/.createSpringAnimation(A),
                    require/*t*/ = ModalFullscreenView/*c*/.createSpringAnimation(O),
                    requireDynamic/*n*/ = [{
                        ref: L,
                        anim: require/*t*/
                    }];
                this.props.modal && requireDynamic/*n*/.push({
                    ref: M,
                    anim: global/*e*/
                }), this.props.fadeOut && requireDynamic/*n*/.push({
                    ref: L,
                    anim: global/*e*/
                }), this.startAnimations(requireDynamic/*n*/, this._handleAnimateClosedSuccess)
            },
            _onDidClose: function() {
                this.state.onDidCloseCallback && (this.state.onDidCloseCallback(), this.setState({
                    onDidCloseCallback: null
                })), this.props.onDidClose && this.props.onDidClose()
            },
            _handleAnimateClosedSuccess: function(global/*e*/) {
                global/*e*/ ? this.setState({
                    modalState: F.closed,
                    target: null
                }, this._onDidClose) : this.setState({
                    modalState: F.open
                })
            },
            render: function() {
                if (void 0 !== this.props.children && clamp/*g*/(0, "Popover cannot have children - use contentFactory prop instead.  Check your usage in " + this._owner.type.displayName), this.state.modalState === F.closed) return MatrixMath/*u*/.createElement(FIGColors/*l*/, null);
                var global/*e*/, require/*t*/, requireDynamic/*n*/;
                if (this.state.target) {
                    var requireLazy/*r*/ = FIGColors/*l*/.height,
                        module/*i*/ = FIGColors/*l*/.width,
                        o = this.state.target,
                        exports/*a*/ = o.top + o.height / 2 > requireLazy/*r*/ / 2,
                        POPAnimationMixin/*s*/ = {
                            x: o.left - module/*i*/ / 2,
                            invariant/*y*/: o.top - requireLazy/*r*/ / 2
                        };
                    requireDynamic/*n*/ = {
                        position: "relative",
                        left: POPAnimationMixin/*s*/.x
                    }, require/*t*/ = {
                        position: "absolute",
                        width: module/*i*/,
                        left: -POPAnimationMixin/*s*/.x
                    };
                    var ModalFullscreenView/*c*/ = {
                            left: this.state.target.left - D / 2
                        },
                        React/*p*/ = {
                            backgroundColor: this.state.arrowColor
                        };
                    exports/*a*/ ? (requireDynamic/*n*/.top = POPAnimationMixin/*s*/.invariant/*y*/ - D / 2, require/*t*/.bottom = requireLazy/*r*/ / 2, ModalFullscreenView/*c*/.bottom = -D / 2) : (requireDynamic/*n*/.top = POPAnimationMixin/*s*/.invariant/*y*/ + o.height + D / 2, require/*t*/.top = requireLazy/*r*/ / 2, ModalFullscreenView/*c*/.top = -D / 2), global/*e*/ = MatrixMath/*u*/.createElement(StyleSheet/*h*/, {
                        style: [T.arrowContainer, ModalFullscreenView/*c*/]
                    }, MatrixMath/*u*/.createElement(StyleSheet/*h*/, {
                        style: [T.arrow, React/*p*/]
                    }))
                }
                var TouchableWithoutFeedback/*f*/ = null,
                    View/*m*/ = [T.content];
                if (this.props.modal) {
                    var createStrictShapeTypeChecker/*_*/ = [P[this.state.modalState]];
                    this.props.modalBackgroundColor && createStrictShapeTypeChecker/*_*/.push([{
                        backgroundColor: this.props.modalBackgroundColor
                    }]), TouchableWithoutFeedback/*f*/ = MatrixMath/*u*/.createElement(POPAnimation/*d*/, {
                        onPress: this.closeWithTouchEvent
                    }, MatrixMath/*u*/.createElement(StyleSheet/*h*/, {
                        ref: M,
                        style: createStrictShapeTypeChecker/*_*/
                    })), View/*m*/.push(T.contentBorder)
                }
                return MatrixMath/*u*/.createElement(FIGColors/*l*/, null, TouchableWithoutFeedback/*f*/, MatrixMath/*u*/.createElement(StyleSheet/*h*/, {
                    ref: L,
                    pointerEvents: StyleSheet/*h*/.pointerEvents.boxNone,
                    style: [I, requireDynamic/*n*/, this.props.style]
                }, MatrixMath/*u*/.createElement(StyleSheet/*h*/, {
                    style: require/*t*/
                }, global/*e*/, MatrixMath/*u*/.createElement(StyleSheet/*h*/, {
                    style: View/*m*/
                }, this.props.contentFactory()))))
            }
        }),
        R = 10,
        w = POPAnimationMixin/*s*/.createIdentityMatrix();
    POPAnimationMixin/*s*/.reuseRotateZCommand(w, Math.PI / 4);
    var C = "white",
        E = .6,
        D = Math.sqrt(2 * R * R),
        T = React/*p*/.create({
            darkening: {
                backgroundColor: "black",
                opacity: 0,
                position: "absolute"
            },
            darkeningOpen: {
                opacity: E
            },
            modal: {
                justifyContent: "center",
                flex: 1
            },
            arrowContainer: {
                width: D,
                height: D,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute"
            },
            arrow: {
                width: R,
                height: R,
                transformMatrix: w,
                backgroundColor: C
            },
            separator: {
                height: 1,
                marginHorizontal: 20,
                backgroundColor: exports/*a*/.separator
            },
            content: {
                backgroundColor: C,
                overflow: "hidden"
            },
            contentBorder: {
                borderRadius: 6
            }
        }),
        x = [FIGColors/*l*/.style, T.darkening, T.darkeningOpen],
        P = {
            open: x,
            closing: x,
            closed: T.darkening,
            opening: [FIGColors/*l*/.style, T.darkening]
        },
        I = [FIGColors/*l*/.style, T.modal],
        F = invariant/*y*/({
            closed: null,
            opening: null,
            open: null,
            closing: null
        }),
        L = createStrictShapeTypeChecker/*_*/({
            animContainerRef: null
        }),
        M = createStrictShapeTypeChecker/*_*/({
            darkRef: null
        }),
        Q = {
            property: ModalFullscreenView/*c*/.Properties.opacity,
            toValue: E
        },
        A = {
            property: ModalFullscreenView/*c*/.Properties.opacity,
            toValue: 0
        },
        k = {
            property: ModalFullscreenView/*c*/.Properties.scaleXY,
            fromValue: [0, 0],
            toValue: [1, 1],
            velocity: [10, 10],
            springBounciness: 8
        },
        O = {
            property: ModalFullscreenView/*c*/.Properties.scaleXY,
            toValue: [0, 0],
            velocity: [-20, -20],
            springBounciness: 0
        },
        N = 0;
    module/*i*/.exports = b
});