__d("FBPhotoModalViewer",["POPAnimationMixin","CameraRoll","Image","MatrixMath","ModalFullscreenView","NativeMethodsMixin","NativeModules","NativeModulesDeprecated","React","POPAnimation","RCTDeviceEventEmitter","ScrollView","StylePropType","StyleSheet","Subscribable","TimerMixin","TouchableWithoutFeedback","View","invariant","isEmpty","ix","keyMirror","keyOf","merge","mergeInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("POPAnimationMixin"),
        exports/*a*/ = require/*t*/("CameraRoll"),
        POPAnimationMixin/*s*/ = require/*t*/("Image"),
        CameraRoll/*l*/ = require/*t*/("MatrixMath"),
        Image/*u*/ = require/*t*/("ModalFullscreenView"),
        MatrixMath/*c*/ = require/*t*/("NativeMethodsMixin"),
        ModalFullscreenView/*p*/ = require/*t*/("NativeModules"),
        NativeMethodsMixin/*d*/ = require/*t*/("NativeModulesDeprecated"),
        NativeModules/*h*/ = require/*t*/("React"),
        NativeModulesDeprecated/*f*/ = require/*t*/("POPAnimation"),
        React/*m*/ = ModalFullscreenView/*p*/.RKActionSheetManager,
        POPAnimation/*g*/ = require/*t*/("RCTDeviceEventEmitter"),
        RCTDeviceEventEmitter/*_*/ = NativeMethodsMixin/*d*/.RKDeviceManager,
        ScrollView/*y*/ = require/*t*/("ScrollView"),
        StylePropType/*v*/ = require/*t*/("StylePropType"),
        StyleSheet/*S*/ = require/*t*/("StyleSheet"),
        Subscribable/*b*/ = require/*t*/("Subscribable"),
        TimerMixin/*R*/ = require/*t*/("TimerMixin"),
        TouchableWithoutFeedback/*w*/ = require/*t*/("TouchableWithoutFeedback"),
        View/*C*/ = require/*t*/("View"),
        invariant/*E*/ = require/*t*/("invariant"),
        isEmpty/*D*/ = require/*t*/("isEmpty"),
        ix/*T*/ = require/*t*/("ix"),
        keyMirror/*x*/ = require/*t*/("keyMirror"),
        keyOf/*P*/ = require/*t*/("keyOf"),
        merge/*I*/ = require/*t*/("merge"),
        mergeInto/*F*/ = require/*t*/("mergeInto"),
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
        W = NativeModules/*h*/.createClass({
            displayName: "FBPhotoModalViewer",
            mixins: [o, MatrixMath/*c*/, Subscribable/*b*/.Mixin, TimerMixin/*R*/],
            propTypes: {
                sources: NativeModules/*h*/.PropTypes.arrayOf(POPAnimationMixin/*s*/.sourcePropType).isRequired,
                sourcesHiRes: NativeModules/*h*/.PropTypes.arrayOf(POPAnimationMixin/*s*/.sourcePropType).isRequired,
                imgStyle: StylePropType/*v*/,
                openedOverlayFactory: NativeModules/*h*/.PropTypes.func,
                enableSwipeToOpen: NativeModules/*h*/.PropTypes.bool,
                onWillOpen: NativeModules/*h*/.PropTypes.func,
                onMayClose: NativeModules/*h*/.PropTypes.func,
                onDidClose: NativeModules/*h*/.PropTypes.func,
                closedShadowStyle: StylePropType/*v*/,
                disableDropShadow: NativeModules/*h*/.PropTypes.bool,
                didImgIdxChange: NativeModules/*h*/.PropTypes.func
            },
            open: function(global/*e*/, require/*t*/) {
                this.state.modalState !== j.closed && invariant/*E*/(0, "open should only be called when the view is closed"), this._updateModalState(j.opening), this.setState({
                    activeImgIdx: global/*e*/,
                    originalFrame: require/*t*/,
                    modalFrame: require/*t*/
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
                        width: Image/*u*/.width,
                        height: Image/*u*/.height
                    },
                    orientation: {
                        isLandscape: !1,
                        rotationDegrees: 0
                    },
                    orientationMatrices: {
                        transform: CameraRoll/*l*/.createIdentityMatrix(),
                        translate: CameraRoll/*l*/.createIdentityMatrix(),
                        rotate: CameraRoll/*l*/.createIdentityMatrix()
                    },
                    isReorienting: !1,
                    nextOrientation: null,
                    dragTranslateMatrix: CameraRoll/*l*/.createIdentityMatrix()
                }
            },
            componentDidMount: function() {
                this.addListenerOn(POPAnimation/*g*/, "namedOrientationDidChange", this.namedOrientationDidChange)
            },
            namedOrientationDidChange: function(global/*e*/) {
                if (this.state.isReorienting) return void(this.state.nextOrientation = global/*e*/);
                if (global/*e*/.rotationDegrees !== this.state.orientation.rotationDegrees) {
                    if (this.state.modalState === j.zoomed) return void this.unZoom(this.namedOrientationDidChange.bind(this, global/*e*/));
                    if (this.state.modalState === j.open) {
                        this.state.isReorienting = !0;
                        var require/*t*/ = Image/*u*/.width,
                            requireDynamic/*n*/ = Image/*u*/.height,
                            requireLazy/*r*/ = global/*e*/.isLandscape,
                            module/*i*/ = {
                                width: requireLazy/*r*/ ? requireDynamic/*n*/ : require/*t*/,
                                height: requireLazy/*r*/ ? require/*t*/ : requireDynamic/*n*/
                            },
                            o = this.getOpenedFrame(this.state.activeImgIdx, module/*i*/),
                            exports/*a*/ = o.width / this.state.modalFrame.width;
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
                                toValue: [exports/*a*/, exports/*a*/]
                            }
                        }], this.updateStateAfterOrientationAnim.bind(this, global/*e*/, module/*i*/, o))
                    }
                }
            },
            updateStateAfterOrientationAnim: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = this.state.orientationMatrices;
                CameraRoll/*l*/.reuseTranslate2dCommand(requireLazy/*r*/.translate, (Image/*u*/.width - require/*t*/.width) / 2, (Image/*u*/.height - require/*t*/.height) / 2), CameraRoll/*l*/.reuseRotateZCommand(requireLazy/*r*/.rotate, -global/*e*/.rotationDegrees * Math.PI / 180), CameraRoll/*l*/.multiplyInto(requireLazy/*r*/.transform, requireLazy/*r*/.translate, requireLazy/*r*/.rotate), this.setState({
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
                    keyMirror/*x*/: this.state.screen.width * this.state.activeImgIdx,
                    ScrollView/*y*/: 0
                }
            },
            getOpenedFrame: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/, requireLazy/*r*/, module/*i*/ = require/*t*/.width - U,
                    o = this.props.sources[global/*e*/],
                    exports/*a*/ = o.width / o.height;
                return module/*i*/ / exports/*a*/ > require/*t*/.height ? (requireLazy/*r*/ = require/*t*/.height, requireDynamic/*n*/ = require/*t*/.height * exports/*a*/) : (requireLazy/*r*/ = module/*i*/ / exports/*a*/, requireDynamic/*n*/ = module/*i*/), {
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
                        var module/*i*/ = NativeModulesDeprecated/*f*/.createLinearAnimation({
                            property: NativeModulesDeprecated/*f*/.Properties.opacity,
                            toValue: require/*t*/
                        });
                        this.startAnimation(global/*e*/[requireLazy/*r*/], module/*i*/, requireDynamic/*n*/)
                    }
            },
            _consumeLastTouch: function() {
                var global/*e*/ = this.state.lastTouch,
                    require/*t*/ = global/*e*/ ? [global/*e*/.velX, global/*e*/.velY] : [0, 0];
                return mergeInto/*F*/(this.state, {
                    lastTouch: null
                }), require/*t*/
            },
            _open: function() {
                this.state.modalState !== j.opening && this.state.modalState !== j.closing && invariant/*E*/(0, "Can only open if in exports/*a*/ modal view"), this.state.modalState = j.opening, this.stopAllAnimations();
                var global/*e*/ = this.getOpenedFrame(this.state.activeImgIdx, this.state.screen),
                    require/*t*/ = this.state.activeImgIdx;
                this.props.onWillOpen && this.setTimeout(this.props.onWillOpen, 0);
                var requireDynamic/*n*/ = this._consumeLastTouch();
                this._animImagesToFrame(require/*t*/, global/*e*/, NativeModulesDeprecated/*f*/.Types.spring, requireDynamic/*n*/, function() {
                    this._resetTransform(require/*t*/), this.setState({
                        modalFrame: global/*e*/
                    }), this._updateModalState(j.open)
                }.bind(this));
                var requireLazy/*r*/ = this.getKeysForIdx(require/*t*/);
                this._animOpacity([M, O, requireLazy/*r*/[V]], 1), this._animOpacity([requireLazy/*r*/[q]], 0)
            },
            _close: function() {
                this.props.onMayClose(this.state.activeImgIdx, function(global/*e*/) {
                    var require/*t*/ = NativeModulesDeprecated/*f*/.Types.spring,
                        requireDynamic/*n*/ = this._consumeLastTouch();
                    isEmpty/*D*/(global/*e*/) ? (global/*e*/ = merge/*I*/(this.state.modalFrame, {
                        top: -this.state.modalFrame.height
                    }), 0 === requireDynamic/*n*/[0] && 0 === requireDynamic/*n*/[1] && (require/*t*/ = NativeModulesDeprecated/*f*/.Types.linear)) : (global/*e*/.top += this.state.orientationMatrices.translate[12], global/*e*/.left += this.state.orientationMatrices.translate[13], 0 !== this.state.orientation.rotationDegrees && this.startAnimation(L, {
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
                this.state.modalState === j.zoomed && invariant/*E*/(0, "Tried to zoom while zoomed!."), this.getZoomableRef().scrollResponderZoomTo(merge/*I*/(global/*e*/, {
                    TouchableWithoutFeedback/*w*/: 0,
                    NativeModules/*h*/: 0
                })), mergeInto/*F*/(this.state, {
                    modalState: j.zoomed
                }), this._animOpacity([O], 0)
            },
            unZoom: function(global/*e*/) {
                this.state.modalState === j.zoomed && (mergeInto/*F*/(this.state, {
                    modalState: j.open
                }), this.getZoomableRef().scrollResponderZoomTo({
                    CameraRoll/*l*/: 0,
                    require/*t*/: 0,
                    TouchableWithoutFeedback/*w*/: Image/*u*/.width,
                    NativeModules/*h*/: Image/*u*/.height
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
                        0 === global/*e*/ && exports/*a*/.saveImageWithTag(require/*t*/)
                    },
                    module/*i*/ = function() {};
                React/*m*/.showActionSheetWithOptions(requireDynamic/*n*/, module/*i*/, requireLazy/*r*/)
            },
            isScrolling: function() {
                return this.state.scrolling || this.state.momentumScrolling
            },
            handleTap: function(global/*e*/, require/*t*/) {
                if (!this.isScrolling() && !this.state.dragging) {
                    this.state.activeImgIdx = global/*e*/;
                    var requireDynamic/*n*/ = {
                        keyMirror/*x*/: require/*t*/.nativeEvent.locationX,
                        ScrollView/*y*/: require/*t*/.nativeEvent.locationY
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
                            invariant/*E*/(0, "Modal viewer should never process exports/*a*/ tap for state " + this.state.modalState)
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
                mergeInto/*F*/(this.state, {
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
                        transformMatrix: CameraRoll/*l*/.createCopy(this.state.dragTranslateMatrix)
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
                    return console.error(requireLazy/*r*/.message + ". stack: " + requireLazy/*r*/.stack), mergeInto/*F*/(this.state, {
                        lastTouch: require/*t*/
                    }), require/*t*/
                }
                var module/*i*/ = requireDynamic/*n*/.pageX - require/*t*/.pageX,
                    o = requireDynamic/*n*/.pageY - require/*t*/.pageY,
                    exports/*a*/ = (requireDynamic/*n*/.timeStamp - require/*t*/.timeStamp) / 1e3,
                    POPAnimationMixin/*s*/ = Math.min(require/*t*/.dt, exports/*a*/);
                return mergeInto/*F*/(this.state, {
                    lastTouch: {
                        pageX: requireDynamic/*n*/.pageX,
                        pageY: requireDynamic/*n*/.pageY,
                        timeStamp: requireDynamic/*n*/.timeStamp,
                        velX: (.8 * module/*i*/ + .2 * require/*t*/.velX * POPAnimationMixin/*s*/) / exports/*a*/,
                        velY: (.8 * o + .2 * require/*t*/.velY * POPAnimationMixin/*s*/) / exports/*a*/,
                        dX: module/*i*/,
                        dY: o,
                        dt: exports/*a*/
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
                    var exports/*a*/ = this.getDisplacement() / A.displacement;
                    this._updateOpacity(M, Math.max(0, 1 - exports/*a*/ / 2)), this._updateOpacity(O, Math.max(0, 1 - exports/*a*/)), this.state.modalState === j.open && (mergeInto/*F*/(this.state, {
                        activeImgIdx: require/*t*/,
                        modalState: j.closing
                    }), this.props.onMayClose(require/*t*/), this.shouldRenderDropShadow() && this.refs[this.getKeysForIdx(require/*t*/)[V]].setNativeProps(z), this.setScrollProps(G))
                }
            },
            handleZoomScrollBegin: function() {
                mergeInto/*F*/(this.state, {
                    modalState: j.zoomed
                }), this._animOpacity([O], 0)
            },
            handleZoomScrollEnd: function(global/*e*/) {
                1 === global/*e*/.nativeEvent.zoomScale && this.unZoom()
            },
            handleScrollBeginDrag: function() {
                mergeInto/*F*/(this.state, {
                    scrolling: !0
                })
            },
            handleMomentumScrollEnd: function(global/*e*/) {
                mergeInto/*F*/(this.state, {
                    momentumScrolling: !1
                });
                var require/*t*/ = global/*e*/.nativeEvent.contentOffset,
                    requireDynamic/*n*/ = Math.max(0, Math.floor(require/*t*/.keyMirror/*x*/ / this.state.screen.width));
                return requireDynamic/*n*/ !== this.state.activeImgIdx && this.props.didImgIdxChange && this.props.didImgIdxChange(requireDynamic/*n*/), requireDynamic/*n*/ !== this.state.activeImgIdx && this.state.modalState === j.zoomed ? (this.unZoom(), void this.setState({
                    modalState: j.open,
                    modalFrame: this.getOpenedFrame(requireDynamic/*n*/, this.state.screen),
                    activeImgIdx: requireDynamic/*n*/,
                    scrolling: !1
                })) : (mergeInto/*F*/(this.state, {
                    modalFrame: this.getOpenedFrame(requireDynamic/*n*/, this.state.screen),
                    activeImgIdx: requireDynamic/*n*/
                }), void this.handleScrollEnd(global/*e*/))
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
                var global/*e*/ = RCTDeviceEventEmitter/*_*/.adjustedFillRate;
                return global/*e*/.current > global/*e*/.abysmal && !this.props.disableDropShadow
            },
            getKeysForIdx: function(global/*e*/) {
                var require/*t*/ = [];
                return require/*t*/[B] = "low_res_" + global/*e*/, require/*t*/[H] = "high_res_" + global/*e*/, this.shouldRenderDropShadow() && (require/*t*/[V] = "drop_shadow_" + global/*e*/), this.props.closedShadowStyle && (require/*t*/[q] = "closed_shadow_" + global/*e*/), require/*t*/
            },
            renderDarkeningView: function() {
                return NativeModules/*h*/.createElement(View/*C*/, {
                    style: [Image/*u*/.style, K.darkening],
                    ref: M
                })
            },
            renderOverlayView: function() {
                var global/*e*/ = 0;
                return (this.state.modalState === j.open || this.state.modalState === j.closing) && (global/*e*/ = 1), NativeModules/*h*/.createElement(View/*C*/, {
                    pointerEvents: View/*C*/.pointerEvents.boxNone,
                    style: [Image/*u*/.style, {
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
                        resizeMode: POPAnimationMixin/*s*/.resizeMode.stretch
                    };
                return this.shouldRenderDropShadow() ? NativeModules/*h*/.createElement(POPAnimationMixin/*s*/, {
                    key: requireDynamic/*n*/,
                    ref: requireDynamic/*n*/,
                    source: ix/*T*/("ShadowProjected"),
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
                return NativeModules/*h*/.createElement(View/*C*/, {
                    key: requireDynamic/*n*/,
                    ref: requireDynamic/*n*/,
                    style: requireLazy/*r*/
                })
            },
            renderSingleImage: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/, module/*i*/, o = this.getKeysForIdx(global/*e*/);
                return requireDynamic/*n*/ && requireDynamic/*n*/.hiRes ? (requireLazy/*r*/ = this.props.sourcesHiRes[global/*e*/], module/*i*/ = o[H]) : (requireLazy/*r*/ = this.props.sources[global/*e*/], module/*i*/ = o[B]), NativeModules/*h*/.createElement(TouchableWithoutFeedback/*w*/, {
                    onLongPress: this.handleLongPress.bind(this, global/*e*/),
                    onPress: this.handleTap.bind(this, global/*e*/),
                    key: module/*i*/
                }, NativeModules/*h*/.createElement(POPAnimationMixin/*s*/, {
                    ref: module/*i*/,
                    source: requireLazy/*r*/,
                    style: [K.image, this.props.imgStyle, require/*t*/]
                }))
            },
            renderImage: function(global/*e*/, require/*t*/) {
                return NativeModules/*h*/.createElement(View/*C*/, {
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
                return NativeModules/*h*/.createElement(ScrollView/*y*/, {
                    ref: Q,
                    automaticallyAdjustContentInsets: !1,
                    onScrollBeginDrag: this.handleScrollBeginDrag,
                    onScrollEndDrag: this.handleScrollEnd,
                    onMomentumScrollBegin: this.handleMomentumScrollBegin,
                    onMomentumScrollEnd: this.handleMomentumScrollEnd,
                    pagingEnabled: !0,
                    contentOffset: this.getMainContentOffset(),
                    horizontal: !0,
                    style: Image/*u*/.style
                }, global/*e*/)
            },
            renderZoomableImage: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = require/*t*/ === this.state.activeImgIdx ? this.state.modalFrame : this.getOpenedFrame(require/*t*/, this.state.screen),
                    requireLazy/*r*/ = merge/*I*/(requireDynamic/*n*/, N);
                return NativeModules/*h*/.createElement(ScrollView/*y*/, {
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
                if (this.state.modalState === j.closed) return NativeModules/*h*/.createElement(Image/*u*/, {
                    ref: k
                });
                var require/*t*/, requireDynamic/*n*/ = {};
                return this.state.modalState !== j.closed && (requireDynamic/*n*/ = merge/*I*/(this.state.modalFrame)), require/*t*/ = this.state.modalState === j.open || this.state.modalState === j.zoomed ? this.renderModalScrollView() : this.renderImage(global/*e*/, requireDynamic/*n*/), NativeModules/*h*/.createElement(Image/*u*/, {
                    ref: k
                }, this.renderDarkeningView(), NativeModules/*h*/.createElement(View/*C*/, {
                    pointerEvents: View/*C*/.pointerEvents.boxNone,
                    style: [Image/*u*/.style, this.state.screen, {
                        transformMatrix: CameraRoll/*l*/.createCopy(this.state.orientationMatrices.transform)
                    }],
                    ref: L
                }, require/*t*/, this.renderOverlayView()))
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
                    NativeModules/*h*/: 30
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