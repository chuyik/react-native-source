__d("Popover",["POPAnimationMixin","FIGColors","MatrixMath","ModalFullscreenView","React","POPAnimation","StyleSheet","TouchableWithoutFeedback","View","clamp","createStrictShapeTypeChecker","invariant","keyOf","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var POPAnimationMixin/*o*/ = require/*t*/("POPAnimationMixin"),
        FIGColors/*a*/ = require/*t*/("FIGColors"),
        MatrixMath/*s*/ = require/*t*/("MatrixMath"),
        ModalFullscreenView/*l*/ = require/*t*/("ModalFullscreenView"),
        React/*u*/ = require/*t*/("React"),
        POPAnimation/*c*/ = require/*t*/("POPAnimation"),
        StyleSheet/*p*/ = require/*t*/("StyleSheet"),
        TouchableWithoutFeedback/*d*/ = require/*t*/("TouchableWithoutFeedback"),
        View/*h*/ = require/*t*/("View"),
        clamp/*f*/ = require/*t*/("clamp"),
        createStrictShapeTypeChecker/*m*/ = require/*t*/("createStrictShapeTypeChecker"),
        invariant/*g*/ = require/*t*/("invariant"),
        keyOf/*_*/ = require/*t*/("keyOf"),
        keyMirror/*y*/ = require/*t*/("keyMirror"),
        v = {
            left: 20,
            right: ModalFullscreenView/*l*/.width - 20
        },
        S = createStrictShapeTypeChecker/*m*/({
            top: React/*u*/.PropTypes.number.isRequired,
            left: React/*u*/.PropTypes.number.isRequired,
            height: React/*u*/.PropTypes.number
        }),
        b = React/*u*/.createClass({
            displayName: "Popover",
            getDefaultProps: function() {
                return {
                    fadeOut: !1,
                    modal: !0
                }
            },
            propTypes: {
                contentFactory: React/*u*/.PropTypes.func.isRequired,
                onDidClose: React/*u*/.PropTypes.func,
                onDidOpen: React/*u*/.PropTypes.func,
                fadeOut: React/*u*/.PropTypes.bool,
                modal: React/*u*/.PropTypes.bool,
                modalBackgroundColor: React/*u*/.PropTypes.string,
                style: View/*h*/.stylePropType
            },
            mixins: [POPAnimationMixin/*o*/],
            statics: {
                renderSeparator: function() {
                    return React/*u*/.createElement(View/*h*/, {
                        key: "MatrixMath/*s*/" + N++,
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
                }, "coordinates", "Popover.openWithArrow"), global/*e*/.left = clamp/*f*/(v.left, global/*e*/.left, v.right), global/*e*/.top = clamp/*f*/(0, global/*e*/.top, ModalFullscreenView/*l*/.height), void 0 === global/*e*/.height && (global/*e*/.height = 0), this.setState({
                    target: global/*e*/,
                    arrowColor: require/*t*/
                }, this.open.bind(this, requireDynamic/*n*/))
            },
            closeWithTouchEvent: function() {
                this.close()
            },
            _animateOpen: function() {
                var global/*e*/ = POPAnimation/*c*/.createSpringAnimation(Q),
                    require/*t*/ = POPAnimation/*c*/.createSpringAnimation(k),
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
                var global/*e*/ = POPAnimation/*c*/.createSpringAnimation(A),
                    require/*t*/ = POPAnimation/*c*/.createSpringAnimation(O),
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
                if (void 0 !== this.props.children && invariant/*g*/(0, "Popover cannot have children - use contentFactory prop instead.  Check your usage in " + this._owner.type.displayName), this.state.modalState === F.closed) return React/*u*/.createElement(ModalFullscreenView/*l*/, null);
                var global/*e*/, require/*t*/, requireDynamic/*n*/;
                if (this.state.target) {
                    var requireLazy/*r*/ = ModalFullscreenView/*l*/.height,
                        module/*i*/ = ModalFullscreenView/*l*/.width,
                        POPAnimationMixin/*o*/ = this.state.target,
                        FIGColors/*a*/ = POPAnimationMixin/*o*/.top + POPAnimationMixin/*o*/.height / 2 > requireLazy/*r*/ / 2,
                        MatrixMath/*s*/ = {
                            x: POPAnimationMixin/*o*/.left - module/*i*/ / 2,
                            keyMirror/*y*/: POPAnimationMixin/*o*/.top - requireLazy/*r*/ / 2
                        };
                    requireDynamic/*n*/ = {
                        position: "relative",
                        left: MatrixMath/*s*/.x
                    }, require/*t*/ = {
                        position: "absolute",
                        width: module/*i*/,
                        left: -MatrixMath/*s*/.x
                    };
                    var POPAnimation/*c*/ = {
                            left: this.state.target.left - D / 2
                        },
                        StyleSheet/*p*/ = {
                            backgroundColor: this.state.arrowColor
                        };
                    FIGColors/*a*/ ? (requireDynamic/*n*/.top = MatrixMath/*s*/.keyMirror/*y*/ - D / 2, require/*t*/.bottom = requireLazy/*r*/ / 2, POPAnimation/*c*/.bottom = -D / 2) : (requireDynamic/*n*/.top = MatrixMath/*s*/.keyMirror/*y*/ + POPAnimationMixin/*o*/.height + D / 2, require/*t*/.top = requireLazy/*r*/ / 2, POPAnimation/*c*/.top = -D / 2), global/*e*/ = React/*u*/.createElement(View/*h*/, {
                        style: [T.arrowContainer, POPAnimation/*c*/]
                    }, React/*u*/.createElement(View/*h*/, {
                        style: [T.arrow, StyleSheet/*p*/]
                    }))
                }
                var clamp/*f*/ = null,
                    createStrictShapeTypeChecker/*m*/ = [T.content];
                if (this.props.modal) {
                    var keyOf/*_*/ = [P[this.state.modalState]];
                    this.props.modalBackgroundColor && keyOf/*_*/.push([{
                        backgroundColor: this.props.modalBackgroundColor
                    }]), clamp/*f*/ = React/*u*/.createElement(TouchableWithoutFeedback/*d*/, {
                        onPress: this.closeWithTouchEvent
                    }, React/*u*/.createElement(View/*h*/, {
                        ref: M,
                        style: keyOf/*_*/
                    })), createStrictShapeTypeChecker/*m*/.push(T.contentBorder)
                }
                return React/*u*/.createElement(ModalFullscreenView/*l*/, null, clamp/*f*/, React/*u*/.createElement(View/*h*/, {
                    ref: L,
                    pointerEvents: View/*h*/.pointerEvents.boxNone,
                    style: [I, requireDynamic/*n*/, this.props.style]
                }, React/*u*/.createElement(View/*h*/, {
                    style: require/*t*/
                }, global/*e*/, React/*u*/.createElement(View/*h*/, {
                    style: createStrictShapeTypeChecker/*m*/
                }, this.props.contentFactory()))))
            }
        }),
        R = 10,
        w = MatrixMath/*s*/.createIdentityMatrix();
    MatrixMath/*s*/.reuseRotateZCommand(w, Math.PI / 4);
    var C = "white",
        E = .6,
        D = Math.sqrt(2 * R * R),
        T = StyleSheet/*p*/.create({
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
                backgroundColor: FIGColors/*a*/.separator
            },
            content: {
                backgroundColor: C,
                overflow: "hidden"
            },
            contentBorder: {
                borderRadius: 6
            }
        }),
        x = [ModalFullscreenView/*l*/.style, T.darkening, T.darkeningOpen],
        P = {
            open: x,
            closing: x,
            closed: T.darkening,
            opening: [ModalFullscreenView/*l*/.style, T.darkening]
        },
        I = [ModalFullscreenView/*l*/.style, T.modal],
        F = keyMirror/*y*/({
            closed: null,
            opening: null,
            open: null,
            closing: null
        }),
        L = keyOf/*_*/({
            animContainerRef: null
        }),
        M = keyOf/*_*/({
            darkRef: null
        }),
        Q = {
            property: POPAnimation/*c*/.Properties.opacity,
            toValue: E
        },
        A = {
            property: POPAnimation/*c*/.Properties.opacity,
            toValue: 0
        },
        k = {
            property: POPAnimation/*c*/.Properties.scaleXY,
            fromValue: [0, 0],
            toValue: [1, 1],
            velocity: [10, 10],
            springBounciness: 8
        },
        O = {
            property: POPAnimation/*c*/.Properties.scaleXY,
            toValue: [0, 0],
            velocity: [-20, -20],
            springBounciness: 0
        },
        N = 0;
    module/*i*/.exports = b
});