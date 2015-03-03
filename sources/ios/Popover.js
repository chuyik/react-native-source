__d("Popover",["POPAnimationMixin","FIGColors","MatrixMath","ModalFullscreenView","React","POPAnimation","StyleSheet","TouchableWithoutFeedback","View","clamp","createStrictShapeTypeChecker","invariant","keyOf","keyMirror"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("POPAnimationMixin"),
        a = require/*t*/("FIGColors"),
        s = require/*t*/("MatrixMath"),
        l = require/*t*/("ModalFullscreenView"),
        u = require/*t*/("React"),
        c = require/*t*/("POPAnimation"),
        p = require/*t*/("StyleSheet"),
        d = require/*t*/("TouchableWithoutFeedback"),
        h = require/*t*/("View"),
        f = require/*t*/("clamp"),
        m = require/*t*/("createStrictShapeTypeChecker"),
        g = require/*t*/("invariant"),
        _ = require/*t*/("keyOf"),
        y = require/*t*/("keyMirror"),
        v = {
            left: 20,
            right: l.width - 20
        },
        S = m({
            top: u.PropTypes.number.isRequired,
            left: u.PropTypes.number.isRequired,
            height: u.PropTypes.number
        }),
        b = u.createClass({
            displayName: "Popover",
            getDefaultProps: function() {
                return {
                    fadeOut: !1,
                    modal: !0
                }
            },
            propTypes: {
                contentFactory: u.PropTypes.func.isRequired,
                onDidClose: u.PropTypes.func,
                onDidOpen: u.PropTypes.func,
                fadeOut: u.PropTypes.bool,
                modal: u.PropTypes.bool,
                modalBackgroundColor: u.PropTypes.string,
                style: h.stylePropType
            },
            mixins: [o],
            statics: {
                renderSeparator: function() {
                    return u.createElement(h, {
                        key: "s" + N++,
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
                }, "coordinates", "Popover.openWithArrow"), global/*e*/.left = f(v.left, global/*e*/.left, v.right), global/*e*/.top = f(0, global/*e*/.top, l.height), void 0 === global/*e*/.height && (global/*e*/.height = 0), this.setState({
                    target: global/*e*/,
                    arrowColor: require/*t*/
                }, this.open.bind(this, requireDynamic/*n*/))
            },
            closeWithTouchEvent: function() {
                this.close()
            },
            _animateOpen: function() {
                var global/*e*/ = c.createSpringAnimation(Q),
                    require/*t*/ = c.createSpringAnimation(k),
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
                var global/*e*/ = c.createSpringAnimation(A),
                    require/*t*/ = c.createSpringAnimation(O),
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
                if (void 0 !== this.props.children && g(0, "Popover cannot have children - use contentFactory prop instead.  Check your usage in " + this._owner.type.displayName), this.state.modalState === F.closed) return u.createElement(l, null);
                var global/*e*/, require/*t*/, requireDynamic/*n*/;
                if (this.state.target) {
                    var requireLazy/*r*/ = l.height,
                        module/*i*/ = l.width,
                        o = this.state.target,
                        a = o.top + o.height / 2 > requireLazy/*r*/ / 2,
                        s = {
                            x: o.left - module/*i*/ / 2,
                            y: o.top - requireLazy/*r*/ / 2
                        };
                    requireDynamic/*n*/ = {
                        position: "relative",
                        left: s.x
                    }, require/*t*/ = {
                        position: "absolute",
                        width: module/*i*/,
                        left: -s.x
                    };
                    var c = {
                            left: this.state.target.left - D / 2
                        },
                        p = {
                            backgroundColor: this.state.arrowColor
                        };
                    a ? (requireDynamic/*n*/.top = s.y - D / 2, require/*t*/.bottom = requireLazy/*r*/ / 2, c.bottom = -D / 2) : (requireDynamic/*n*/.top = s.y + o.height + D / 2, require/*t*/.top = requireLazy/*r*/ / 2, c.top = -D / 2), global/*e*/ = u.createElement(h, {
                        style: [T.arrowContainer, c]
                    }, u.createElement(h, {
                        style: [T.arrow, p]
                    }))
                }
                var f = null,
                    m = [T.content];
                if (this.props.modal) {
                    var _ = [P[this.state.modalState]];
                    this.props.modalBackgroundColor && _.push([{
                        backgroundColor: this.props.modalBackgroundColor
                    }]), f = u.createElement(d, {
                        onPress: this.closeWithTouchEvent
                    }, u.createElement(h, {
                        ref: M,
                        style: _
                    })), m.push(T.contentBorder)
                }
                return u.createElement(l, null, f, u.createElement(h, {
                    ref: L,
                    pointerEvents: h.pointerEvents.boxNone,
                    style: [I, requireDynamic/*n*/, this.props.style]
                }, u.createElement(h, {
                    style: require/*t*/
                }, global/*e*/, u.createElement(h, {
                    style: m
                }, this.props.contentFactory()))))
            }
        }),
        R = 10,
        w = s.createIdentityMatrix();
    s.reuseRotateZCommand(w, Math.PI / 4);
    var C = "white",
        E = .6,
        D = Math.sqrt(2 * R * R),
        T = p.create({
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
                backgroundColor: a.separator
            },
            content: {
                backgroundColor: C,
                overflow: "hidden"
            },
            contentBorder: {
                borderRadius: 6
            }
        }),
        x = [l.style, T.darkening, T.darkeningOpen],
        P = {
            open: x,
            closing: x,
            closed: T.darkening,
            opening: [l.style, T.darkening]
        },
        I = [l.style, T.modal],
        F = y({
            closed: null,
            opening: null,
            open: null,
            closing: null
        }),
        L = _({
            animContainerRef: null
        }),
        M = _({
            darkRef: null
        }),
        Q = {
            property: c.Properties.opacity,
            toValue: E
        },
        A = {
            property: c.Properties.opacity,
            toValue: 0
        },
        k = {
            property: c.Properties.scaleXY,
            fromValue: [0, 0],
            toValue: [1, 1],
            velocity: [10, 10],
            springBounciness: 8
        },
        O = {
            property: c.Properties.scaleXY,
            toValue: [0, 0],
            velocity: [-20, -20],
            springBounciness: 0
        },
        N = 0;
    module/*i*/.exports = b
});