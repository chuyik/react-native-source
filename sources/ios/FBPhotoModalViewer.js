__d("FBPhotoModalViewer",["POPAnimationMixin","CameraRoll","Image","MatrixMath","ModalFullscreenView","NativeMethodsMixin","NativeModules","NativeModulesDeprecated","React","POPAnimation","RCTDeviceEventEmitter","ScrollView","StylePropType","StyleSheet","Subscribable","TimerMixin","TouchableWithoutFeedback","View","invariant","isEmpty","ix","keyMirror","keyOf","merge","mergeInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("POPAnimationMixin"),
        a = require/*t*/("CameraRoll"),
        s = require/*t*/("Image"),
        l = require/*t*/("MatrixMath"),
        u = require/*t*/("ModalFullscreenView"),
        c = require/*t*/("NativeMethodsMixin"),
        p = require/*t*/("NativeModules"),
        d = require/*t*/("NativeModulesDeprecated"),
        h = require/*t*/("React"),
        f = require/*t*/("POPAnimation"),
        m = p.RKActionSheetManager,
        g = require/*t*/("RCTDeviceEventEmitter"),
        _ = d.RKDeviceManager,
        y = require/*t*/("ScrollView"),
        v = require/*t*/("StylePropType"),
        S = require/*t*/("StyleSheet"),
        b = require/*t*/("Subscribable"),
        R = require/*t*/("TimerMixin"),
        w = require/*t*/("TouchableWithoutFeedback"),
        C = require/*t*/("View"),
        E = require/*t*/("invariant"),
        D = require/*t*/("isEmpty"),
        T = require/*t*/("ix"),
        x = require/*t*/("keyMirror"),
        P = require/*t*/("keyOf"),
        I = require/*t*/("merge"),
        F = require/*t*/("mergeInto"),
        L = P({
            contentRef: null
        }),
        M = P({
            darkRef: null
        }),
        Q = P({
            scrollRef: null
        }),
        A = {
            speed: 500,
            displacement: 80
        },
        k = P({
            modalRef: null
        }),
        O = P({
            overlayRef: null
        }),
        N = {
            left: 0,
            top: 0
        },
        G = {
            scrollEnabled: !1
        },
        $ = 2,
        B = 0,
        H = 1,
        V = 2,
        q = 3,
        U = 4,
        j = x({
            closed: null,
            opening: null,
            open: null,
            zoomed: null,
            closing: null
        }),
        W = h.createClass({
            displayName: "FBPhotoModalViewer",
            mixins: [o, c, b.Mixin, R],
            propTypes: {
                sources: h.PropTypes.arrayOf(s.sourcePropType).isRequired,
                sourcesHiRes: h.PropTypes.arrayOf(s.sourcePropType).isRequired,
                imgStyle: v,
                openedOverlayFactory: h.PropTypes.func,
                enableSwipeToOpen: h.PropTypes.bool,
                onWillOpen: h.PropTypes.func,
                onMayClose: h.PropTypes.func,
                onDidClose: h.PropTypes.func,
                closedShadowStyle: v,
                disableDropShadow: h.PropTypes.bool,
                didImgIdxChange: h.PropTypes.func
            },
            open: function(global/*e*/, require/*t*/) {
                this.state.modalState !== j.closed && E(0, "open should only be called when the view is closed"), this._updateModalState(j.opening), this.setState({
                    activeImgIdx: global/*e*/,
                    originalFrame: require/*t*/,
                    modalFrame: require/*t*/
                }, this._open)
            },
            close: function() {
                this.state.modalState === j.closed && E(0, "Cannot close if already closed"), this.stopAllAnimations(), this._updateModalState(j.closing, this._close)
            },
            getDefaultProps: function() {
                return {
                    openedAspectRatio: 1
                }
            },
            getInitialState: function() {
                return {
                    activeImgIdx: 0,
                    dragging: !1,
                    modalState: j.closed,
                    scrolling: !1,
                    screen: {
                        width: u.width,
                        height: u.height
                    },
                    orientation: {
                        isLandscape: !1,
                        rotationDegrees: 0
                    },
                    orientationMatrices: {
                        transform: l.createIdentityMatrix(),
                        translate: l.createIdentityMatrix(),
                        rotate: l.createIdentityMatrix()
                    },
                    isReorienting: !1,
                    nextOrientation: null,
                    dragTranslateMatrix: l.createIdentityMatrix()
                }
            },
            componentDidMount: function() {
                this.addListenerOn(g, "namedOrientationDidChange", this.namedOrientationDidChange)
            },
            namedOrientationDidChange: function(global/*e*/) {
                if (this.state.isReorienting) return void(this.state.nextOrientation = global/*e*/);
                if (global/*e*/.rotationDegrees !== this.state.orientation.rotationDegrees) {
                    if (this.state.modalState === j.zoomed) return void this.unZoom(this.namedOrientationDidChange.bind(this, global/*e*/));
                    if (this.state.modalState === j.open) {
                        this.state.isReorienting = !0;
                        var require/*t*/ = u.width,
                            requireDynamic/*n*/ = u.height,
                            requireLazy/*r*/ = global/*e*/.isLandscape,
                            module/*i*/ = {
                                width: requireLazy/*r*/ ? requireDynamic/*n*/ : require/*t*/,
                                height: requireLazy/*r*/ ? require/*t*/ : requireDynamic/*n*/
                            },
                            o = this.getOpenedFrame(this.state.activeImgIdx, module/*i*/),
                            a = o.width / this.state.modalFrame.width;
                        this.startAnimations([{
                            ref: L,
                            anim: {
                                type: this.AnimationTypes.easeInEaseOut,
                                property: this.AnimationProperties.rotation,
                                toValue: global/*e*/.rotationDegrees * Math.PI / 180
                            }
                        }, {
                            ref: L,
                            anim: {
                                type: this.AnimationTypes.easeInEaseOut,
                                property: this.AnimationProperties.scaleXY,
                                toValue: [a, a]
                            }
                        }], this.updateStateAfterOrientationAnim.bind(this, global/*e*/, module/*i*/, o))
                    }
                }
            },
            updateStateAfterOrientationAnim: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = this.state.orientationMatrices;
                l.reuseTranslate2dCommand(requireLazy/*r*/.translate, (u.width - require/*t*/.width) / 2, (u.height - require/*t*/.height) / 2), l.reuseRotateZCommand(requireLazy/*r*/.rotate, -global/*e*/.rotationDegrees * Math.PI / 180), l.multiplyInto(requireLazy/*r*/.transform, requireLazy/*r*/.translate, requireLazy/*r*/.rotate), this.setState({
                    orientation: global/*e*/,
                    screen: require/*t*/,
                    modalFrame: requireDynamic/*n*/
                }, this.onDoneReorienting)
            },
            onDoneReorienting: function() {
                this.state.isReorienting = !1;
                var global/*e*/ = this.state.nextOrientation;
                global/*e*/ && (this.state.nextOrientation = null, this.namedOrientationDidChange(global/*e*/)), this.requestAnimationFrame(function() {
                    return this.setScrollProps({
                        contentOffset: this.getMainContentOffset()
                    })
                }.bind(this))
            },
            getMainContentOffset: function() {
                return {
                    x: this.state.screen.width * this.state.activeImgIdx,
                    y: 0
                }
            },
            getOpenedFrame: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/ = require/*t*/.width - U,
                    o = this.props.sources[global/*e*/],
                    a = o.width / o.height;
                return module/*i*/ / a > require/*t*/.height ? (requireLazy/*r*/ = require/*t*/.height, requireDynamic/*n*/ = require/*t*/.height * a) : (requireLazy/*r*/ = module/*i*/ / a, requireDynamic/*n*/ = module/*i*/), {
                    left: require/*t*/.width / 2 - requireDynamic/*n*/ / 2,
                    top: require/*t*/.height / 2 - requireLazy/*r*/ / 2,
                    width: requireDynamic/*n*/,
                    height: requireLazy/*r*/
                }
            },
            _updateModalState: function(global/*e*/, require/*t*/) {
                global/*e*/ === j.closed ? (this.refs[k].close(), this.setState(this.getInitialState())) : this.refs[k].open(), this.setState({
                    modalState: global/*e*/
                }, require/*t*/)
            },
            _animImagesToFrame: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                this.getKeysForIdx(global/*e*/).forEach(function(global/*e*/, o) {
                    return this.animateToFrame(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, function(global/*e*/) {
                        global/*e*/ && 0 === o && module/*i*/ && module/*i*/()
                    })
                }.bind(this))
            },
            _animOpacity: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                0 === require/*t*/ ? require/*t*/ = -1 : 1 === require/*t*/ && (require/*t*/ = 2);
                for (var requireLazy/*r*/ = 0; requireLazy/*r*/ < global/*e*/.length; ++requireLazy/*r*/)
                    if (global/*e*/[requireLazy/*r*/]) {
                        var module/*i*/ = f.createLinearAnimation({
                            property: f.Properties.opacity,
                            toValue: require/*t*/
                        });
                        this.startAnimation(global/*e*/[requireLazy/*r*/], module/*i*/, requireDynamic/*n*/)
                    }
            },
            _consumeLastTouch: function() {
                var global/*e*/ = this.state.lastTouch,
                    require/*t*/ = global/*e*/ ? [global/*e*/.velX, global/*e*/.velY] : [0, 0];
                return F(this.state, {
                    lastTouch: null
                }), require/*t*/
            },
            _open: function() {
                this.state.modalState !== j.opening && this.state.modalState !== j.closing && E(0, "Can only open if in a modal view"), this.state.modalState = j.opening, this.stopAllAnimations();
                var global/*e*/ = this.getOpenedFrame(this.state.activeImgIdx, this.state.screen),
                    require/*t*/ = this.state.activeImgIdx;
                this.props.onWillOpen && this.setTimeout(this.props.onWillOpen, 0);
                var requireDynamic/*n*/ = this._consumeLastTouch();
                this._animImagesToFrame(require/*t*/, global/*e*/, f.Types.spring, requireDynamic/*n*/, function() {
                    this._resetTransform(require/*t*/), this.setState({
                        modalFrame: global/*e*/
                    }), this._updateModalState(j.open)
                }.bind(this));
                var requireLazy/*r*/ = this.getKeysForIdx(require/*t*/);
                this._animOpacity([M, O, requireLazy/*r*/[V]], 1), this._animOpacity([requireLazy/*r*/[q]], 0)
            },
            _close: function() {
                this.props.onMayClose(this.state.activeImgIdx, function(global/*e*/) {
                    var require/*t*/ = f.Types.spring,
                        requireDynamic/*n*/ = this._consumeLastTouch();
                    D(global/*e*/) ? (global/*e*/ = I(this.state.modalFrame, {
                        top: -this.state.modalFrame.height
                    }), 0 === requireDynamic/*n*/[0] && 0 === requireDynamic/*n*/[1] && (require/*t*/ = f.Types.linear)) : (global/*e*/.top += this.state.orientationMatrices.translate[12], global/*e*/.left += this.state.orientationMatrices.translate[13], 0 !== this.state.orientation.rotationDegrees && this.startAnimation(L, {
                        type: this.AnimationTypes.easeInEaseOut,
                        property: this.AnimationProperties.rotation,
                        toValue: 0
                    }));
                    var requireLazy/*r*/ = this.state.activeImgIdx,
                        module/*i*/ = this.getKeysForIdx(requireLazy/*r*/);
                    this._animOpacity([M, O, module/*i*/[V]], 0), this._animOpacity([module/*i*/[q]], 1), this._animImagesToFrame(requireLazy/*r*/, global/*e*/, require/*t*/, requireDynamic/*n*/, function() {
                        this._resetTransform(requireLazy/*r*/), this.props.onDidClose(requireLazy/*r*/), this._updateModalState(j.closed)
                    }.bind(this))
                }.bind(this))
            },
            setScrollProps: function(global/*e*/) {
                this.refs[Q].setNativeProps(global/*e*/)
            },
            getZoomableRefName: function(global/*e*/) {
                return "zoomable_scroll_" + global/*e*/
            },
            getZoomableRef: function() {
                return this.refs[this.getZoomableRefName(this.state.activeImgIdx)]
            },
            zoom: function(global/*e*/) {
                this.state.modalState === j.zoomed && E(0, "Tried to zoom while zoomed!."), this.getZoomableRef().scrollResponderZoomTo(I(global/*e*/, {
                    w: 0,
                    h: 0
                })), F(this.state, {
                    modalState: j.zoomed
                }), this._animOpacity([O], 0)
            },
            unZoom: function(global/*e*/) {
                this.state.modalState === j.zoomed && (F(this.state, {
                    modalState: j.open
                }), this.getZoomableRef().scrollResponderZoomTo({
                    l: 0,
                    require/*t*/: 0,
                    w: u.width,
                    h: u.height
                }), this._animOpacity([O], 1, global/*e*/))
            },
            handleLongPress: function(global/*e*/) {
                this.showActionSheet(global/*e*/)
            },
            showActionSheet: function(global/*e*/) {
                var require/*t*/ = this.props.sourcesHiRes[global/*e*/].uri,
                    requireDynamic/*n*/ = {
                        options: ["Save to Camera Roll"]
                    },
                    requireLazy/*r*/ = function(global/*e*/) {
                        0 === global/*e*/ && a.saveImageWithTag(require/*t*/)
                    },
                    module/*i*/ = function() {};
                m.showActionSheetWithOptions(requireDynamic/*n*/, module/*i*/, requireLazy/*r*/)
            },
            isScrolling: function() {
                return this.state.scrolling || this.state.momentumScrolling
            },
            handleTap: function(global/*e*/, require/*t*/) {
                if (!this.isScrolling() && !this.state.dragging) {
                    this.state.activeImgIdx = global/*e*/;
                    var requireDynamic/*n*/ = {
                        x: require/*t*/.nativeEvent.locationX,
                        y: require/*t*/.nativeEvent.locationY
                    };
                    switch (this.state.modalState) {
                        case j.open:
                            this.zoom(requireDynamic/*n*/);
                            break;
                        case j.zoomed:
                            this.unZoom();
                            break;
                        case j.opening:
                            this.close();
                            break;
                        case j.closing:
                            this._open();
                            break;
                        default:
                            E(0, "Modal viewer should never process a tap for state " + this.state.modalState)
                    }
                }
            },
            onTouchStart: function(global/*e*/) {
                var require/*t*/ = {
                    pageX: global/*e*/.nativeEvent.touches[0].pageX,
                    pageY: global/*e*/.nativeEvent.touches[0].pageY,
                    velX: 0,
                    velY: 0,
                    dX: 0,
                    dY: 0,
                    dt: 0,
                    timeStamp: global/*e*/.nativeEvent.touches[0].timeStamp
                };
                F(this.state, {
                    firstTouch: require/*t*/,
                    lastTouch: require/*t*/
                })
            },
            onTouchMove: function(global/*e*/) {
                if (global/*e*/.stopPropagation(), !this.isScrolling() && this.state.modalState !== j.zoomed && !this.state.dragging && this.state.modalState === j.open) {
                    var require/*t*/ = this._updateLastTouch(global/*e*/),
                        requireDynamic/*n*/ = Math.abs(require/*t*/.dY / require/*t*/.dX);
                    this.state.orientation.isLandscape && (requireDynamic/*n*/ = 1 / requireDynamic/*n*/);
                    var requireLazy/*r*/ = Math.abs(this.state.firstTouch.pageY - require/*t*/.pageY);
                    requireDynamic/*n*/ > $ && requireLazy/*r*/ > 20 && this.setState({
                        dragging: !0
                    })
                }
            },
            getDisplacement: function() {
                var global/*e*/ = this.getOpenedFrame(this.state.activeImgIdx, this.state.screen),
                    require/*t*/ = global/*e*/.top - this.state.modalFrame.top,
                    requireDynamic/*n*/ = global/*e*/.left - this.state.modalFrame.left;
                return Math.sqrt(require/*t*/ * require/*t*/ + requireDynamic/*n*/ * requireDynamic/*n*/)
            },
            onResponderTerminate: function() {
                this.onResponderRelease()
            },
            onResponderRelease: function(global/*e*/) {
                if (this.state.dragging) {
                    if (this.setState({
                            dragging: !1
                        }), this.state.modalState === j.open || this.state.modalState === j.closing) {
                        var require/*t*/ = this.state.lastTouch.velX,
                            requireDynamic/*n*/ = this.state.lastTouch.velY;
                        if (Math.sqrt(require/*t*/ * require/*t*/ + requireDynamic/*n*/ * requireDynamic/*n*/) > A.speed || this.getDisplacement() > A.displacement) return void this.close()
                    }
                    this._updateModalState(j.opening), this._open(global/*e*/)
                }
            },
            _resetTransform: function() {
                this.state.modalFrame.left -= this.state.dragTranslateMatrix[12], this.state.modalFrame.top -= this.state.dragTranslateMatrix[13], this.state.dragTranslateMatrix[12] = 0, this.state.dragTranslateMatrix[13] = 0
            },
            _moveImage: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                this.state.modalFrame.left += require/*t*/, this.state.modalFrame.top += requireDynamic/*n*/, this.state.dragTranslateMatrix[12] += require/*t*/, this.state.dragTranslateMatrix[13] += requireDynamic/*n*/, this.getKeysForIdx(global/*e*/).forEach(function(global/*e*/) {
                    return this.refs[global/*e*/].setNativeProps({
                        transformMatrix: l.createCopy(this.state.dragTranslateMatrix)
                    })
                }.bind(this))
            },
            _updateOpacity: function(global/*e*/, require/*t*/) {
                this.refs[global/*e*/].setNativeProps({
                    style: {
                        opacity: require/*t*/
                    }
                })
            },
            _updateLastTouch: function(global/*e*/) {
                var require/*t*/ = this.state.lastTouch,
                    requireDynamic/*n*/ = global/*e*/.nativeEvent.touches[0];
                if (!require/*t*/) {
                    require/*t*/ = {
                        pageX: requireDynamic/*n*/.pageX,
                        pageY: requireDynamic/*n*/.pageY,
                        timeStamp: requireDynamic/*n*/.timeStamp,
                        velX: 0,
                        velY: 0,
                        dX: 0,
                        dY: 0,
                        dt: requireDynamic/*n*/.timestamp
                    };
                    var requireLazy/*r*/ = new Error("lastTouch was unexpectedly null.  firstTouch: " + JSON.stringify(this.state.firstTouch, null, "  ") + ", new lastTouch: " + JSON.stringify(require/*t*/, null, "  "));
                    return console.error(requireLazy/*r*/.message + ". stack: " + requireLazy/*r*/.stack), F(this.state, {
                        lastTouch: require/*t*/
                    }), require/*t*/
                }
                var module/*i*/ = requireDynamic/*n*/.pageX - require/*t*/.pageX,
                    o = requireDynamic/*n*/.pageY - require/*t*/.pageY,
                    a = (requireDynamic/*n*/.timeStamp - require/*t*/.timeStamp) / 1e3,
                    s = Math.min(require/*t*/.dt, a);
                return F(this.state, {
                    lastTouch: {
                        pageX: requireDynamic/*n*/.pageX,
                        pageY: requireDynamic/*n*/.pageY,
                        timeStamp: requireDynamic/*n*/.timeStamp,
                        velX: (.8 * module/*i*/ + .2 * require/*t*/.velX * s) / a,
                        velY: (.8 * o + .2 * require/*t*/.velY * s) / a,
                        dX: module/*i*/,
                        dY: o,
                        dt: a
                    }
                }), this.state.lastTouch
            },
            handleDrag: function(global/*e*/) {
                if (global/*e*/.stopPropagation(), this.state.dragging || this.state.modalState !== j.opening && this.state.modalState !== j.closing) {
                    var require/*t*/ = this.state.activeImgIdx,
                        requireDynamic/*n*/ = this.state.orientation.rotationDegrees * Math.PI / 180,
                        requireLazy/*r*/ = this._updateLastTouch(global/*e*/),
                        module/*i*/ = requireLazy/*r*/.dX * Math.cos(requireDynamic/*n*/) + requireLazy/*r*/.dY * Math.sin(requireDynamic/*n*/),
                        o = -requireLazy/*r*/.dX * Math.sin(requireDynamic/*n*/) + requireLazy/*r*/.dY * Math.cos(requireDynamic/*n*/);
                    this._moveImage(require/*t*/, module/*i*/, o);
                    var a = this.getDisplacement() / A.displacement;
                    this._updateOpacity(M, Math.max(0, 1 - a / 2)), this._updateOpacity(O, Math.max(0, 1 - a)), this.state.modalState === j.open && (F(this.state, {
                        activeImgIdx: require/*t*/,
                        modalState: j.closing
                    }), this.props.onMayClose(require/*t*/), this.shouldRenderDropShadow() && this.refs[this.getKeysForIdx(require/*t*/)[V]].setNativeProps(z), this.setScrollProps(G))
                }
            },
            handleZoomScrollBegin: function() {
                F(this.state, {
                    modalState: j.zoomed
                }), this._animOpacity([O], 0)
            },
            handleZoomScrollEnd: function(global/*e*/) {
                1 === global/*e*/.nativeEvent.zoomScale && this.unZoom()
            },
            handleScrollBeginDrag: function() {
                F(this.state, {
                    scrolling: !0
                })
            },
            handleMomentumScrollEnd: function(global/*e*/) {
                F(this.state, {
                    momentumScrolling: !1
                });
                var require/*t*/ = global/*e*/.nativeEvent.contentOffset,
                    requireDynamic/*n*/ = Math.max(0, Math.floor(require/*t*/.x / this.state.screen.width));
                return requireDynamic/*n*/ !== this.state.activeImgIdx && this.props.didImgIdxChange && this.props.didImgIdxChange(requireDynamic/*n*/), requireDynamic/*n*/ !== this.state.activeImgIdx && this.state.modalState === j.zoomed ? (this.unZoom(), void this.setState({
                    modalState: j.open,
                    modalFrame: this.getOpenedFrame(requireDynamic/*n*/, this.state.screen),
                    activeImgIdx: requireDynamic/*n*/,
                    scrolling: !1
                })) : (F(this.state, {
                    modalFrame: this.getOpenedFrame(requireDynamic/*n*/, this.state.screen),
                    activeImgIdx: requireDynamic/*n*/
                }), void this.handleScrollEnd(global/*e*/))
            },
            handleMomentumScrollBegin: function() {
                F(this.state, {
                    momentumScrolling: !0
                })
            },
            handleScrollEnd: function() {
                F(this.state, {
                    scrolling: !1
                })
            },
            shouldRenderDropShadow: function() {
                var global/*e*/ = _.adjustedFillRate;
                return global/*e*/.current > global/*e*/.abysmal && !this.props.disableDropShadow
            },
            getKeysForIdx: function(global/*e*/) {
                var require/*t*/ = [];
                return require/*t*/[B] = "low_res_" + global/*e*/, require/*t*/[H] = "high_res_" + global/*e*/, this.shouldRenderDropShadow() && (require/*t*/[V] = "drop_shadow_" + global/*e*/), this.props.closedShadowStyle && (require/*t*/[q] = "closed_shadow_" + global/*e*/), require/*t*/
            },
            renderDarkeningView: function() {
                return h.createElement(C, {
                    style: [u.style, K.darkening],
                    ref: M
                })
            },
            renderOverlayView: function() {
                var global/*e*/ = 0;
                return (this.state.modalState === j.open || this.state.modalState === j.closing) && (global/*e*/ = 1), h.createElement(C, {
                    pointerEvents: C.pointerEvents.boxNone,
                    style: [u.style, {
                        opacity: global/*e*/
                    }],
                    ref: O
                }, this.props.openedOverlayFactory(this.state.activeImgIdx))
            },
            renderDropShadow: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.getKeysForIdx(global/*e*/)[V],
                    requireLazy/*r*/ = 109,
                    module/*i*/ = 24,
                    o = {
                        left: require/*t*/.left - module/*i*/,
                        top: require/*t*/.top + module/*i*/,
                        width: require/*t*/.width + 2 * module/*i*/,
                        height: require/*t*/.height + 2 * module/*i*/,
                        resizeMode: s.resizeMode.stretch
                    };
                return this.shouldRenderDropShadow() ? h.createElement(s, {
                    key: requireDynamic/*n*/,
                    ref: requireDynamic/*n*/,
                    source: T("ShadowProjected"),
                    style: [this.props.imgStyle, this.state.modalState === j.closing ? K.show : K.hide, o],
                    capInsets: {
                        left: requireLazy/*r*/,
                        right: requireLazy/*r*/,
                        bottom: requireLazy/*r*/,
                        top: requireLazy/*r*/
                    }
                }) : null
            },
            renderClosedShadow: function(global/*e*/, require/*t*/) {
                if (!this.props.closedShadowStyle) return null;
                var requireDynamic/*n*/ = this.getKeysForIdx(global/*e*/)[q],
                    requireLazy/*r*/ = [K.shadow, this.props.imgStyle, require/*t*/, this.props.closedShadowStyle, this.state.modalState === j.closed ? K.show : K.hide];
                return h.createElement(C, {
                    key: requireDynamic/*n*/,
                    ref: requireDynamic/*n*/,
                    style: requireLazy/*r*/
                })
            },
            renderSingleImage: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/, module/*i*/, o = this.getKeysForIdx(global/*e*/);
                return requireDynamic/*n*/ && requireDynamic/*n*/.hiRes ? (requireLazy/*r*/ = this.props.sourcesHiRes[global/*e*/], module/*i*/ = o[H]) : (requireLazy/*r*/ = this.props.sources[global/*e*/], module/*i*/ = o[B]), h.createElement(w, {
                    onLongPress: this.handleLongPress.bind(this, global/*e*/),
                    onPress: this.handleTap.bind(this, global/*e*/),
                    key: module/*i*/
                }, h.createElement(s, {
                    ref: module/*i*/,
                    source: requireLazy/*r*/,
                    style: [K.image, this.props.imgStyle, require/*t*/]
                }))
            },
            renderImage: function(global/*e*/, require/*t*/) {
                return h.createElement(C, {
                    style: [K.image, require/*t*/, N],
                    onTouchStart: this.onTouchStart,
                    onTouchMove: this.onTouchMove,
                    onMoveShouldSetResponder: function() {
                        return !!this.state.dragging
                    }.bind(this),
                    onResponderMove: this.handleDrag,
                    onResponderRelease: this.onResponderRelease,
                    onResponderTerminate: this.onResponderTerminate
                }, this.renderClosedShadow(global/*e*/, require/*t*/), this.renderDropShadow(global/*e*/, require/*t*/), this.renderSingleImage(global/*e*/, require/*t*/), this.renderSingleImage(global/*e*/, require/*t*/, {
                    hiRes: !0
                }))
            },
            renderModalScrollView: function() {
                var global/*e*/ = this.props.sources.map(this.renderZoomableImage);
                return h.createElement(y, {
                    ref: Q,
                    automaticallyAdjustContentInsets: !1,
                    onScrollBeginDrag: this.handleScrollBeginDrag,
                    onScrollEndDrag: this.handleScrollEnd,
                    onMomentumScrollBegin: this.handleMomentumScrollBegin,
                    onMomentumScrollEnd: this.handleMomentumScrollEnd,
                    pagingEnabled: !0,
                    contentOffset: this.getMainContentOffset(),
                    horizontal: !0,
                    style: u.style
                }, global/*e*/)
            },
            renderZoomableImage: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = require/*t*/ === this.state.activeImgIdx ? this.state.modalFrame : this.getOpenedFrame(require/*t*/, this.state.screen),
                    requireLazy/*r*/ = I(requireDynamic/*n*/, N);
                return h.createElement(y, {
                    ref: this.getZoomableRefName(require/*t*/),
                    alwaysBounceHorizontal: !1,
                    alwaysBounceVertical: !1,
                    maximumZoomScale: this.state.dragging ? 1 : 3,
                    centerContent: !0,
                    onScrollBeginDrag: this.handleZoomScrollBegin,
                    onScrollEndDrag: this.handleZoomScrollEnd,
                    automaticallyAdjustContentInsets: !1,
                    pagingEnabled: !1,
                    contentContainerStyle: requireLazy/*r*/,
                    scrollEnabled: !this.state.dragging,
                    style: this.state.screen
                }, this.renderImage(require/*t*/, requireLazy/*r*/))
            },
            render: function() {
                var global/*e*/ = this.state.activeImgIdx;
                if (this.state.modalState === j.closed) return h.createElement(u, {
                    ref: k
                });
                var require/*t*/, requireDynamic/*n*/ = {};
                return this.state.modalState !== j.closed && (requireDynamic/*n*/ = I(this.state.modalFrame)), require/*t*/ = this.state.modalState === j.open || this.state.modalState === j.zoomed ? this.renderModalScrollView() : this.renderImage(global/*e*/, requireDynamic/*n*/), h.createElement(u, {
                    ref: k
                }, this.renderDarkeningView(), h.createElement(C, {
                    pointerEvents: C.pointerEvents.boxNone,
                    style: [u.style, this.state.screen, {
                        transformMatrix: l.createCopy(this.state.orientationMatrices.transform)
                    }],
                    ref: L
                }, require/*t*/, this.renderOverlayView()))
            }
        }),
        K = S.create({
            shadow: {
                backgroundColor: "transparent",
                position: "absolute"
            },
            image: {
                backgroundColor: "transparent",
                position: "absolute"
            },
            darkening: {
                backgroundColor: "black",
                opacity: 0
            },
            show: {
                opacity: 1
            },
            hide: {
                opacity: 0
            },
            dropShadow: {
                backgroundColor: "black",
                shadowColor: "black",
                shadowOffset: {
                    w: 0,
                    h: 30
                },
                shadowRadius: 20,
                shadowOpacity: 1
            }
        }),
        z = {
            style: K.show
        };
    module/*i*/.exports = W
});