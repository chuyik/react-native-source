__d("FBPhotoModalViewer",["POPAnimationMixin","CameraRoll","Image","MatrixMath","ModalFullscreenView","NativeMethodsMixin","NativeModules","NativeModulesDeprecated","React","POPAnimation","RCTDeviceEventEmitter","ScrollView","StylePropType","StyleSheet","Subscribable","TimerMixin","TouchableWithoutFeedback","View","invariant","isEmpty","ix","keyMirror","keyOf","merge","mergeInto"],function (e, t, n, r, i) {
    "use strict";
    var POPAnimationMixin/*o*/ = t("POPAnimationMixin"),
        CameraRoll/*a*/ = t("CameraRoll"),
        Image/*s*/ = t("Image"),
        MatrixMath/*l*/ = t("MatrixMath"),
        ModalFullscreenView/*u*/ = t("ModalFullscreenView"),
        NativeMethodsMixin/*c*/ = t("NativeMethodsMixin"),
        NativeModules/*p*/ = t("NativeModules"),
        NativeModulesDeprecated/*d*/ = t("NativeModulesDeprecated"),
        React/*h*/ = t("React"),
        POPAnimation/*f*/ = t("POPAnimation"),
        m = NativeModules/*p*/.RKActionSheetManager,
        RCTDeviceEventEmitter/*g*/ = t("RCTDeviceEventEmitter"),
        _ = NativeModulesDeprecated/*d*/.RKDeviceManager,
        ScrollView/*y*/ = t("ScrollView"),
        StylePropType/*v*/ = t("StylePropType"),
        StyleSheet/*S*/ = t("StyleSheet"),
        Subscribable/*b*/ = t("Subscribable"),
        TimerMixin/*R*/ = t("TimerMixin"),
        TouchableWithoutFeedback/*w*/ = t("TouchableWithoutFeedback"),
        View/*C*/ = t("View"),
        invariant/*E*/ = t("invariant"),
        isEmpty/*D*/ = t("isEmpty"),
        ix/*T*/ = t("ix"),
        keyMirror/*x*/ = t("keyMirror"),
        keyOf/*P*/ = t("keyOf"),
        merge/*I*/ = t("merge"),
        mergeInto/*F*/ = t("mergeInto"),
        L = keyOf/*P*/({
            contentRef: null
        }),
        M = keyOf/*P*/({
            darkRef: null
        }),
        Q = keyOf/*P*/({
            scrollRef: null
        }),
        A = {
            speed: 500,
            displacement: 80
        },
        k = keyOf/*P*/({
            modalRef: null
        }),
        O = keyOf/*P*/({
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
        j = keyMirror/*x*/({
            closed: null,
            opening: null,
            open: null,
            zoomed: null,
            closing: null
        }),
        W = React/*h*/.createClass({
            displayName: "FBPhotoModalViewer",
            mixins: [POPAnimationMixin/*o*/, NativeMethodsMixin/*c*/, Subscribable/*b*/.Mixin, TimerMixin/*R*/],
            propTypes: {
                sources: React/*h*/.PropTypes.arrayOf(Image/*s*/.sourcePropType).isRequired,
                sourcesHiRes: React/*h*/.PropTypes.arrayOf(Image/*s*/.sourcePropType).isRequired,
                imgStyle: StylePropType/*v*/,
                openedOverlayFactory: React/*h*/.PropTypes.func,
                enableSwipeToOpen: React/*h*/.PropTypes.bool,
                onWillOpen: React/*h*/.PropTypes.func,
                onMayClose: React/*h*/.PropTypes.func,
                onDidClose: React/*h*/.PropTypes.func,
                closedShadowStyle: StylePropType/*v*/,
                disableDropShadow: React/*h*/.PropTypes.bool,
                didImgIdxChange: React/*h*/.PropTypes.func
            },
            open: function(e, t) {
                this.state.modalState !== j.closed && invariant/*E*/(0, "open should only be called when the view is closed"), this._updateModalState(j.opening), this.setState({
                    activeImgIdx: e,
                    originalFrame: t,
                    modalFrame: t
                }, this._open)
            },
            close: function() {
                this.state.modalState === j.closed && invariant/*E*/(0, "Cannot close if already closed"), this.stopAllAnimations(), this._updateModalState(j.closing, this._close)
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
                        width: ModalFullscreenView/*u*/.width,
                        height: ModalFullscreenView/*u*/.height
                    },
                    orientation: {
                        isLandscape: !1,
                        rotationDegrees: 0
                    },
                    orientationMatrices: {
                        transform: MatrixMath/*l*/.createIdentityMatrix(),
                        translate: MatrixMath/*l*/.createIdentityMatrix(),
                        rotate: MatrixMath/*l*/.createIdentityMatrix()
                    },
                    isReorienting: !1,
                    nextOrientation: null,
                    dragTranslateMatrix: MatrixMath/*l*/.createIdentityMatrix()
                }
            },
            componentDidMount: function() {
                this.addListenerOn(RCTDeviceEventEmitter/*g*/, "namedOrientationDidChange", this.namedOrientationDidChange)
            },
            namedOrientationDidChange: function(e) {
                if (this.state.isReorienting) return void(this.state.nextOrientation = e);
                if (e.rotationDegrees !== this.state.orientation.rotationDegrees) {
                    if (this.state.modalState === j.zoomed) return void this.unZoom(this.namedOrientationDidChange.bind(this, e));
                    if (this.state.modalState === j.open) {
                        this.state.isReorienting = !0;
                        var t = ModalFullscreenView/*u*/.width,
                            n = ModalFullscreenView/*u*/.height,
                            r = e.isLandscape,
                            i = {
                                width: r ? n : t,
                                height: r ? t : n
                            },
                            POPAnimationMixin/*o*/ = this.getOpenedFrame(this.state.activeImgIdx, i),
                            CameraRoll/*a*/ = POPAnimationMixin/*o*/.width / this.state.modalFrame.width;
                        this.startAnimations([{
                            ref: L,
                            anim: {
                                type: this.AnimationTypes.easeInEaseOut,
                                property: this.AnimationProperties.rotation,
                                toValue: e.rotationDegrees * Math.PI / 180
                            }
                        }, {
                            ref: L,
                            anim: {
                                type: this.AnimationTypes.easeInEaseOut,
                                property: this.AnimationProperties.scaleXY,
                                toValue: [CameraRoll/*a*/, CameraRoll/*a*/]
                            }
                        }], this.updateStateAfterOrientationAnim.bind(this, e, i, POPAnimationMixin/*o*/))
                    }
                }
            },
            updateStateAfterOrientationAnim: function(e, t, n) {
                var r = this.state.orientationMatrices;
                MatrixMath/*l*/.reuseTranslate2dCommand(r.translate, (ModalFullscreenView/*u*/.width - t.width) / 2, (ModalFullscreenView/*u*/.height - t.height) / 2), MatrixMath/*l*/.reuseRotateZCommand(r.rotate, -e.rotationDegrees * Math.PI / 180), MatrixMath/*l*/.multiplyInto(r.transform, r.translate, r.rotate), this.setState({
                    orientation: e,
                    screen: t,
                    modalFrame: n
                }, this.onDoneReorienting)
            },
            onDoneReorienting: function() {
                this.state.isReorienting = !1;
                var e = this.state.nextOrientation;
                e && (this.state.nextOrientation = null, this.namedOrientationDidChange(e)), this.requestAnimationFrame(function() {
                    return this.setScrollProps({
                        contentOffset: this.getMainContentOffset()
                    })
                }.bind(this))
            },
            getMainContentOffset: function() {
                return {
                    keyMirror/*x*/: this.state.screen.width * this.state.activeImgIdx,
                    ScrollView/*y*/: 0
                }
            },
            getOpenedFrame: function(e, t) {
                var n, r, i = t.width - U,
                    POPAnimationMixin/*o*/ = this.props.sources[e],
                    CameraRoll/*a*/ = POPAnimationMixin/*o*/.width / POPAnimationMixin/*o*/.height;
                return i / CameraRoll/*a*/ > t.height ? (r = t.height, n = t.height * CameraRoll/*a*/) : (r = i / CameraRoll/*a*/, n = i), {
                    left: t.width / 2 - n / 2,
                    top: t.height / 2 - r / 2,
                    width: n,
                    height: r
                }
            },
            _updateModalState: function(e, t) {
                e === j.closed ? (this.refs[k].close(), this.setState(this.getInitialState())) : this.refs[k].open(), this.setState({
                    modalState: e
                }, t)
            },
            _animImagesToFrame: function(e, t, n, r, i) {
                this.getKeysForIdx(e).forEach(function(e, POPAnimationMixin/*o*/) {
                    return this.animateToFrame(e, t, n, r, function(e) {
                        e && 0 === POPAnimationMixin/*o*/ && i && i()
                    })
                }.bind(this))
            },
            _animOpacity: function(e, t, n) {
                0 === t ? t = -1 : 1 === t && (t = 2);
                for (var r = 0; r < e.length; ++r)
                    if (e[r]) {
                        var i = POPAnimation/*f*/.createLinearAnimation({
                            property: POPAnimation/*f*/.Properties.opacity,
                            toValue: t
                        });
                        this.startAnimation(e[r], i, n)
                    }
            },
            _consumeLastTouch: function() {
                var e = this.state.lastTouch,
                    t = e ? [e.velX, e.velY] : [0, 0];
                return mergeInto/*F*/(this.state, {
                    lastTouch: null
                }), t
            },
            _open: function() {
                this.state.modalState !== j.opening && this.state.modalState !== j.closing && invariant/*E*/(0, "Can only open if in CameraRoll/*a*/ modal view"), this.state.modalState = j.opening, this.stopAllAnimations();
                var e = this.getOpenedFrame(this.state.activeImgIdx, this.state.screen),
                    t = this.state.activeImgIdx;
                this.props.onWillOpen && this.setTimeout(this.props.onWillOpen, 0);
                var n = this._consumeLastTouch();
                this._animImagesToFrame(t, e, POPAnimation/*f*/.Types.spring, n, function() {
                    this._resetTransform(t), this.setState({
                        modalFrame: e
                    }), this._updateModalState(j.open)
                }.bind(this));
                var r = this.getKeysForIdx(t);
                this._animOpacity([M, O, r[V]], 1), this._animOpacity([r[q]], 0)
            },
            _close: function() {
                this.props.onMayClose(this.state.activeImgIdx, function(e) {
                    var t = POPAnimation/*f*/.Types.spring,
                        n = this._consumeLastTouch();
                    isEmpty/*D*/(e) ? (e = merge/*I*/(this.state.modalFrame, {
                        top: -this.state.modalFrame.height
                    }), 0 === n[0] && 0 === n[1] && (t = POPAnimation/*f*/.Types.linear)) : (e.top += this.state.orientationMatrices.translate[12], e.left += this.state.orientationMatrices.translate[13], 0 !== this.state.orientation.rotationDegrees && this.startAnimation(L, {
                        type: this.AnimationTypes.easeInEaseOut,
                        property: this.AnimationProperties.rotation,
                        toValue: 0
                    }));
                    var r = this.state.activeImgIdx,
                        i = this.getKeysForIdx(r);
                    this._animOpacity([M, O, i[V]], 0), this._animOpacity([i[q]], 1), this._animImagesToFrame(r, e, t, n, function() {
                        this._resetTransform(r), this.props.onDidClose(r), this._updateModalState(j.closed)
                    }.bind(this))
                }.bind(this))
            },
            setScrollProps: function(e) {
                this.refs[Q].setNativeProps(e)
            },
            getZoomableRefName: function(e) {
                return "zoomable_scroll_" + e
            },
            getZoomableRef: function() {
                return this.refs[this.getZoomableRefName(this.state.activeImgIdx)]
            },
            zoom: function(e) {
                this.state.modalState === j.zoomed && invariant/*E*/(0, "Tried to zoom while zoomed!."), this.getZoomableRef().scrollResponderZoomTo(merge/*I*/(e, {
                    TouchableWithoutFeedback/*w*/: 0,
                    React/*h*/: 0
                })), mergeInto/*F*/(this.state, {
                    modalState: j.zoomed
                }), this._animOpacity([O], 0)
            },
            unZoom: function(e) {
                this.state.modalState === j.zoomed && (mergeInto/*F*/(this.state, {
                    modalState: j.open
                }), this.getZoomableRef().scrollResponderZoomTo({
                    MatrixMath/*l*/: 0,
                    t: 0,
                    TouchableWithoutFeedback/*w*/: ModalFullscreenView/*u*/.width,
                    React/*h*/: ModalFullscreenView/*u*/.height
                }), this._animOpacity([O], 1, e))
            },
            handleLongPress: function(e) {
                this.showActionSheet(e)
            },
            showActionSheet: function(e) {
                var t = this.props.sourcesHiRes[e].uri,
                    n = {
                        options: ["Save to Camera Roll"]
                    },
                    r = function(e) {
                        0 === e && CameraRoll/*a*/.saveImageWithTag(t)
                    },
                    i = function() {};
                m.showActionSheetWithOptions(n, i, r)
            },
            isScrolling: function() {
                return this.state.scrolling || this.state.momentumScrolling
            },
            handleTap: function(e, t) {
                if (!this.isScrolling() && !this.state.dragging) {
                    this.state.activeImgIdx = e;
                    var n = {
                        keyMirror/*x*/: t.nativeEvent.locationX,
                        ScrollView/*y*/: t.nativeEvent.locationY
                    };
                    switch (this.state.modalState) {
                        case j.open:
                            this.zoom(n);
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
                            invariant/*E*/(0, "Modal viewer should never process CameraRoll/*a*/ tap for state " + this.state.modalState)
                    }
                }
            },
            onTouchStart: function(e) {
                var t = {
                    pageX: e.nativeEvent.touches[0].pageX,
                    pageY: e.nativeEvent.touches[0].pageY,
                    velX: 0,
                    velY: 0,
                    dX: 0,
                    dY: 0,
                    dt: 0,
                    timeStamp: e.nativeEvent.touches[0].timeStamp
                };
                mergeInto/*F*/(this.state, {
                    firstTouch: t,
                    lastTouch: t
                })
            },
            onTouchMove: function(e) {
                if (e.stopPropagation(), !this.isScrolling() && this.state.modalState !== j.zoomed && !this.state.dragging && this.state.modalState === j.open) {
                    var t = this._updateLastTouch(e),
                        n = Math.abs(t.dY / t.dX);
                    this.state.orientation.isLandscape && (n = 1 / n);
                    var r = Math.abs(this.state.firstTouch.pageY - t.pageY);
                    n > $ && r > 20 && this.setState({
                        dragging: !0
                    })
                }
            },
            getDisplacement: function() {
                var e = this.getOpenedFrame(this.state.activeImgIdx, this.state.screen),
                    t = e.top - this.state.modalFrame.top,
                    n = e.left - this.state.modalFrame.left;
                return Math.sqrt(t * t + n * n)
            },
            onResponderTerminate: function() {
                this.onResponderRelease()
            },
            onResponderRelease: function(e) {
                if (this.state.dragging) {
                    if (this.setState({
                            dragging: !1
                        }), this.state.modalState === j.open || this.state.modalState === j.closing) {
                        var t = this.state.lastTouch.velX,
                            n = this.state.lastTouch.velY;
                        if (Math.sqrt(t * t + n * n) > A.speed || this.getDisplacement() > A.displacement) return void this.close()
                    }
                    this._updateModalState(j.opening), this._open(e)
                }
            },
            _resetTransform: function() {
                this.state.modalFrame.left -= this.state.dragTranslateMatrix[12], this.state.modalFrame.top -= this.state.dragTranslateMatrix[13], this.state.dragTranslateMatrix[12] = 0, this.state.dragTranslateMatrix[13] = 0
            },
            _moveImage: function(e, t, n) {
                this.state.modalFrame.left += t, this.state.modalFrame.top += n, this.state.dragTranslateMatrix[12] += t, this.state.dragTranslateMatrix[13] += n, this.getKeysForIdx(e).forEach(function(e) {
                    return this.refs[e].setNativeProps({
                        transformMatrix: MatrixMath/*l*/.createCopy(this.state.dragTranslateMatrix)
                    })
                }.bind(this))
            },
            _updateOpacity: function(e, t) {
                this.refs[e].setNativeProps({
                    style: {
                        opacity: t
                    }
                })
            },
            _updateLastTouch: function(e) {
                var t = this.state.lastTouch,
                    n = e.nativeEvent.touches[0];
                if (!t) {
                    t = {
                        pageX: n.pageX,
                        pageY: n.pageY,
                        timeStamp: n.timeStamp,
                        velX: 0,
                        velY: 0,
                        dX: 0,
                        dY: 0,
                        dt: n.timestamp
                    };
                    var r = new Error("lastTouch was unexpectedly null.  firstTouch: " + JSON.stringify(this.state.firstTouch, null, "  ") + ", new lastTouch: " + JSON.stringify(t, null, "  "));
                    return console.error(r.message + ". stack: " + r.stack), mergeInto/*F*/(this.state, {
                        lastTouch: t
                    }), t
                }
                var i = n.pageX - t.pageX,
                    POPAnimationMixin/*o*/ = n.pageY - t.pageY,
                    CameraRoll/*a*/ = (n.timeStamp - t.timeStamp) / 1e3,
                    Image/*s*/ = Math.min(t.dt, CameraRoll/*a*/);
                return mergeInto/*F*/(this.state, {
                    lastTouch: {
                        pageX: n.pageX,
                        pageY: n.pageY,
                        timeStamp: n.timeStamp,
                        velX: (.8 * i + .2 * t.velX * Image/*s*/) / CameraRoll/*a*/,
                        velY: (.8 * POPAnimationMixin/*o*/ + .2 * t.velY * Image/*s*/) / CameraRoll/*a*/,
                        dX: i,
                        dY: POPAnimationMixin/*o*/,
                        dt: CameraRoll/*a*/
                    }
                }), this.state.lastTouch
            },
            handleDrag: function(e) {
                if (e.stopPropagation(), this.state.dragging || this.state.modalState !== j.opening && this.state.modalState !== j.closing) {
                    var t = this.state.activeImgIdx,
                        n = this.state.orientation.rotationDegrees * Math.PI / 180,
                        r = this._updateLastTouch(e),
                        i = r.dX * Math.cos(n) + r.dY * Math.sin(n),
                        POPAnimationMixin/*o*/ = -r.dX * Math.sin(n) + r.dY * Math.cos(n);
                    this._moveImage(t, i, POPAnimationMixin/*o*/);
                    var CameraRoll/*a*/ = this.getDisplacement() / A.displacement;
                    this._updateOpacity(M, Math.max(0, 1 - CameraRoll/*a*/ / 2)), this._updateOpacity(O, Math.max(0, 1 - CameraRoll/*a*/)), this.state.modalState === j.open && (mergeInto/*F*/(this.state, {
                        activeImgIdx: t,
                        modalState: j.closing
                    }), this.props.onMayClose(t), this.shouldRenderDropShadow() && this.refs[this.getKeysForIdx(t)[V]].setNativeProps(z), this.setScrollProps(G))
                }
            },
            handleZoomScrollBegin: function() {
                mergeInto/*F*/(this.state, {
                    modalState: j.zoomed
                }), this._animOpacity([O], 0)
            },
            handleZoomScrollEnd: function(e) {
                1 === e.nativeEvent.zoomScale && this.unZoom()
            },
            handleScrollBeginDrag: function() {
                mergeInto/*F*/(this.state, {
                    scrolling: !0
                })
            },
            handleMomentumScrollEnd: function(e) {
                mergeInto/*F*/(this.state, {
                    momentumScrolling: !1
                });
                var t = e.nativeEvent.contentOffset,
                    n = Math.max(0, Math.floor(t.keyMirror/*x*/ / this.state.screen.width));
                return n !== this.state.activeImgIdx && this.props.didImgIdxChange && this.props.didImgIdxChange(n), n !== this.state.activeImgIdx && this.state.modalState === j.zoomed ? (this.unZoom(), void this.setState({
                    modalState: j.open,
                    modalFrame: this.getOpenedFrame(n, this.state.screen),
                    activeImgIdx: n,
                    scrolling: !1
                })) : (mergeInto/*F*/(this.state, {
                    modalFrame: this.getOpenedFrame(n, this.state.screen),
                    activeImgIdx: n
                }), void this.handleScrollEnd(e))
            },
            handleMomentumScrollBegin: function() {
                mergeInto/*F*/(this.state, {
                    momentumScrolling: !0
                })
            },
            handleScrollEnd: function() {
                mergeInto/*F*/(this.state, {
                    scrolling: !1
                })
            },
            shouldRenderDropShadow: function() {
                var e = _.adjustedFillRate;
                return e.current > e.abysmal && !this.props.disableDropShadow
            },
            getKeysForIdx: function(e) {
                var t = [];
                return t[B] = "low_res_" + e, t[H] = "high_res_" + e, this.shouldRenderDropShadow() && (t[V] = "drop_shadow_" + e), this.props.closedShadowStyle && (t[q] = "closed_shadow_" + e), t
            },
            renderDarkeningView: function() {
                return React/*h*/.createElement(View/*C*/, {
                    style: [ModalFullscreenView/*u*/.style, K.darkening],
                    ref: M
                })
            },
            renderOverlayView: function() {
                var e = 0;
                return (this.state.modalState === j.open || this.state.modalState === j.closing) && (e = 1), React/*h*/.createElement(View/*C*/, {
                    pointerEvents: View/*C*/.pointerEvents.boxNone,
                    style: [ModalFullscreenView/*u*/.style, {
                        opacity: e
                    }],
                    ref: O
                }, this.props.openedOverlayFactory(this.state.activeImgIdx))
            },
            renderDropShadow: function(e, t) {
                var n = this.getKeysForIdx(e)[V],
                    r = 109,
                    i = 24,
                    POPAnimationMixin/*o*/ = {
                        left: t.left - i,
                        top: t.top + i,
                        width: t.width + 2 * i,
                        height: t.height + 2 * i,
                        resizeMode: Image/*s*/.resizeMode.stretch
                    };
                return this.shouldRenderDropShadow() ? React/*h*/.createElement(Image/*s*/, {
                    key: n,
                    ref: n,
                    source: ix/*T*/("ShadowProjected"),
                    style: [this.props.imgStyle, this.state.modalState === j.closing ? K.show : K.hide, POPAnimationMixin/*o*/],
                    capInsets: {
                        left: r,
                        right: r,
                        bottom: r,
                        top: r
                    }
                }) : null
            },
            renderClosedShadow: function(e, t) {
                if (!this.props.closedShadowStyle) return null;
                var n = this.getKeysForIdx(e)[q],
                    r = [K.shadow, this.props.imgStyle, t, this.props.closedShadowStyle, this.state.modalState === j.closed ? K.show : K.hide];
                return React/*h*/.createElement(View/*C*/, {
                    key: n,
                    ref: n,
                    style: r
                })
            },
            renderSingleImage: function(e, t, n) {
                var r, i, POPAnimationMixin/*o*/ = this.getKeysForIdx(e);
                return n && n.hiRes ? (r = this.props.sourcesHiRes[e], i = POPAnimationMixin/*o*/[H]) : (r = this.props.sources[e], i = POPAnimationMixin/*o*/[B]), React/*h*/.createElement(TouchableWithoutFeedback/*w*/, {
                    onLongPress: this.handleLongPress.bind(this, e),
                    onPress: this.handleTap.bind(this, e),
                    key: i
                }, React/*h*/.createElement(Image/*s*/, {
                    ref: i,
                    source: r,
                    style: [K.image, this.props.imgStyle, t]
                }))
            },
            renderImage: function(e, t) {
                return React/*h*/.createElement(View/*C*/, {
                    style: [K.image, t, N],
                    onTouchStart: this.onTouchStart,
                    onTouchMove: this.onTouchMove,
                    onMoveShouldSetResponder: function() {
                        return !!this.state.dragging
                    }.bind(this),
                    onResponderMove: this.handleDrag,
                    onResponderRelease: this.onResponderRelease,
                    onResponderTerminate: this.onResponderTerminate
                }, this.renderClosedShadow(e, t), this.renderDropShadow(e, t), this.renderSingleImage(e, t), this.renderSingleImage(e, t, {
                    hiRes: !0
                }))
            },
            renderModalScrollView: function() {
                var e = this.props.sources.map(this.renderZoomableImage);
                return React/*h*/.createElement(ScrollView/*y*/, {
                    ref: Q,
                    automaticallyAdjustContentInsets: !1,
                    onScrollBeginDrag: this.handleScrollBeginDrag,
                    onScrollEndDrag: this.handleScrollEnd,
                    onMomentumScrollBegin: this.handleMomentumScrollBegin,
                    onMomentumScrollEnd: this.handleMomentumScrollEnd,
                    pagingEnabled: !0,
                    contentOffset: this.getMainContentOffset(),
                    horizontal: !0,
                    style: ModalFullscreenView/*u*/.style
                }, e)
            },
            renderZoomableImage: function(e, t) {
                var n = t === this.state.activeImgIdx ? this.state.modalFrame : this.getOpenedFrame(t, this.state.screen),
                    r = merge/*I*/(n, N);
                return React/*h*/.createElement(ScrollView/*y*/, {
                    ref: this.getZoomableRefName(t),
                    alwaysBounceHorizontal: !1,
                    alwaysBounceVertical: !1,
                    maximumZoomScale: this.state.dragging ? 1 : 3,
                    centerContent: !0,
                    onScrollBeginDrag: this.handleZoomScrollBegin,
                    onScrollEndDrag: this.handleZoomScrollEnd,
                    automaticallyAdjustContentInsets: !1,
                    pagingEnabled: !1,
                    contentContainerStyle: r,
                    scrollEnabled: !this.state.dragging,
                    style: this.state.screen
                }, this.renderImage(t, r))
            },
            render: function() {
                var e = this.state.activeImgIdx;
                if (this.state.modalState === j.closed) return React/*h*/.createElement(ModalFullscreenView/*u*/, {
                    ref: k
                });
                var t, n = {};
                return this.state.modalState !== j.closed && (n = merge/*I*/(this.state.modalFrame)), t = this.state.modalState === j.open || this.state.modalState === j.zoomed ? this.renderModalScrollView() : this.renderImage(e, n), React/*h*/.createElement(ModalFullscreenView/*u*/, {
                    ref: k
                }, this.renderDarkeningView(), React/*h*/.createElement(View/*C*/, {
                    pointerEvents: View/*C*/.pointerEvents.boxNone,
                    style: [ModalFullscreenView/*u*/.style, this.state.screen, {
                        transformMatrix: MatrixMath/*l*/.createCopy(this.state.orientationMatrices.transform)
                    }],
                    ref: L
                }, t, this.renderOverlayView()))
            }
        }),
        K = StyleSheet/*S*/.create({
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
                    TouchableWithoutFeedback/*w*/: 0,
                    React/*h*/: 30
                },
                shadowRadius: 20,
                shadowOpacity: 1
            }
        }),
        z = {
            style: K.show
        };
    i.exports = W
});