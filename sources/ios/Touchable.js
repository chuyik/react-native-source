__d("Touchable",["BoundingDimensions","Position","TouchEventUtils","keyMirror","queryLayoutByID"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("BoundingDimensions"),
        a = require/*t*/("Position"),
        s = require/*t*/("TouchEventUtils"),
        l = require/*t*/("keyMirror"),
        u = require/*t*/("queryLayoutByID"),
        c = l({
            NOT_RESPONDER: null,
            RESPONDER_INACTIVE_PRESS_IN: null,
            RESPONDER_INACTIVE_PRESS_OUT: null,
            RESPONDER_ACTIVE_PRESS_IN: null,
            RESPONDER_ACTIVE_PRESS_OUT: null,
            RESPONDER_ACTIVE_LONG_PRESS_IN: null,
            RESPONDER_ACTIVE_LONG_PRESS_OUT: null,
            ERROR: null
        }),
        p = {
            RESPONDER_ACTIVE_PRESS_OUT: !0,
            RESPONDER_ACTIVE_PRESS_IN: !0
        },
        d = {
            RESPONDER_INACTIVE_PRESS_IN: !0,
            RESPONDER_ACTIVE_PRESS_IN: !0,
            RESPONDER_ACTIVE_LONG_PRESS_IN: !0
        },
        h = {
            RESPONDER_ACTIVE_LONG_PRESS_IN: !0
        },
        f = l({
            DELAY: null,
            RESPONDER_GRANT: null,
            RESPONDER_RELEASE: null,
            RESPONDER_TERMINATED: null,
            ENTER_PRESS_RECT: null,
            LEAVE_PRESS_RECT: null,
            LONG_PRESS_DETECTED: null
        }),
        m = {
            NOT_RESPONDER: {
                DELAY: c.ERROR,
                RESPONDER_GRANT: c.RESPONDER_INACTIVE_PRESS_IN,
                RESPONDER_RELEASE: c.ERROR,
                RESPONDER_TERMINATED: c.ERROR,
                ENTER_PRESS_RECT: c.ERROR,
                LEAVE_PRESS_RECT: c.ERROR,
                LONG_PRESS_DETECTED: c.ERROR
            },
            RESPONDER_INACTIVE_PRESS_IN: {
                DELAY: c.RESPONDER_ACTIVE_PRESS_IN,
                RESPONDER_GRANT: c.ERROR,
                RESPONDER_RELEASE: c.NOT_RESPONDER,
                RESPONDER_TERMINATED: c.NOT_RESPONDER,
                ENTER_PRESS_RECT: c.RESPONDER_INACTIVE_PRESS_IN,
                LEAVE_PRESS_RECT: c.RESPONDER_INACTIVE_PRESS_OUT,
                LONG_PRESS_DETECTED: c.ERROR
            },
            RESPONDER_INACTIVE_PRESS_OUT: {
                DELAY: c.RESPONDER_ACTIVE_PRESS_OUT,
                RESPONDER_GRANT: c.ERROR,
                RESPONDER_RELEASE: c.NOT_RESPONDER,
                RESPONDER_TERMINATED: c.NOT_RESPONDER,
                ENTER_PRESS_RECT: c.RESPONDER_INACTIVE_PRESS_IN,
                LEAVE_PRESS_RECT: c.RESPONDER_INACTIVE_PRESS_OUT,
                LONG_PRESS_DETECTED: c.ERROR
            },
            RESPONDER_ACTIVE_PRESS_IN: {
                DELAY: c.ERROR,
                RESPONDER_GRANT: c.ERROR,
                RESPONDER_RELEASE: c.NOT_RESPONDER,
                RESPONDER_TERMINATED: c.NOT_RESPONDER,
                ENTER_PRESS_RECT: c.RESPONDER_ACTIVE_PRESS_IN,
                LEAVE_PRESS_RECT: c.RESPONDER_ACTIVE_PRESS_OUT,
                LONG_PRESS_DETECTED: c.RESPONDER_ACTIVE_LONG_PRESS_IN
            },
            RESPONDER_ACTIVE_PRESS_OUT: {
                DELAY: c.ERROR,
                RESPONDER_GRANT: c.ERROR,
                RESPONDER_RELEASE: c.NOT_RESPONDER,
                RESPONDER_TERMINATED: c.NOT_RESPONDER,
                ENTER_PRESS_RECT: c.RESPONDER_ACTIVE_PRESS_IN,
                LEAVE_PRESS_RECT: c.RESPONDER_ACTIVE_PRESS_OUT,
                LONG_PRESS_DETECTED: c.ERROR
            },
            RESPONDER_ACTIVE_LONG_PRESS_IN: {
                DELAY: c.ERROR,
                RESPONDER_GRANT: c.ERROR,
                RESPONDER_RELEASE: c.NOT_RESPONDER,
                RESPONDER_TERMINATED: c.NOT_RESPONDER,
                ENTER_PRESS_RECT: c.RESPONDER_ACTIVE_LONG_PRESS_IN,
                LEAVE_PRESS_RECT: c.RESPONDER_ACTIVE_LONG_PRESS_OUT,
                LONG_PRESS_DETECTED: c.RESPONDER_ACTIVE_LONG_PRESS_IN
            },
            RESPONDER_ACTIVE_LONG_PRESS_OUT: {
                DELAY: c.ERROR,
                RESPONDER_GRANT: c.ERROR,
                RESPONDER_RELEASE: c.NOT_RESPONDER,
                RESPONDER_TERMINATED: c.NOT_RESPONDER,
                ENTER_PRESS_RECT: c.RESPONDER_ACTIVE_LONG_PRESS_IN,
                LEAVE_PRESS_RECT: c.RESPONDER_ACTIVE_LONG_PRESS_OUT,
                LONG_PRESS_DETECTED: c.ERROR
            },
            error: {
                DELAY: c.NOT_RESPONDER,
                RESPONDER_GRANT: c.RESPONDER_INACTIVE_PRESS_IN,
                RESPONDER_RELEASE: c.NOT_RESPONDER,
                RESPONDER_TERMINATED: c.NOT_RESPONDER,
                ENTER_PRESS_RECT: c.NOT_RESPONDER,
                LEAVE_PRESS_RECT: c.NOT_RESPONDER,
                LONG_PRESS_DETECTED: c.NOT_RESPONDER
            }
        },
        g = 130,
        _ = 20,
        y = 500,
        v = 10,
        S = {
            touchableGetInitialState: function() {
                return {
                    touchable: {
                        touchState: void 0,
                        responderID: null
                    }
                }
            },
            touchableHandleResponderTerminationRequest: function() {
                return !this.props.rejectResponderTermination
            },
            touchableHandleStartShouldSetResponder: function() {
                return !0
            },
            touchableLongPressCancelsPress: function() {
                return !0
            },
            touchableHandleResponderGrant: function(global/*e*/, require/*t*/) {
                global/*e*/.persist(), this.state.touchable.touchState = c.NOT_RESPONDER, this.state.touchable.responderID = require/*t*/, this._receiveSignal(f.RESPONDER_GRANT, global/*e*/);
                var requireDynamic/*n*/ = void 0 !== this.touchableGetHighlightDelayMS ? this.touchableGetHighlightDelayMS() : g;
                0 !== requireDynamic/*n*/ ? this.touchableDelayTimeout = setTimeout(this._handleDelay.bind(this, global/*e*/), requireDynamic/*n*/) : this._handleDelay(global/*e*/), this.longPressDelayTimeout = setTimeout(this._handleLongDelay.bind(this, global/*e*/), y - requireDynamic/*n*/)
            },
            touchableHandleResponderRelease: function(global/*e*/) {
                this._receiveSignal(f.RESPONDER_RELEASE, global/*e*/)
            },
            touchableHandleResponderTerminate: function(global/*e*/) {
                this._receiveSignal(f.RESPONDER_TERMINATED, global/*e*/)
            },
            touchableHandleResponderMove: function(global/*e*/) {
                if (this.state.touchable.touchState !== c.RESPONDER_INACTIVE_PRESS_IN && this.state.touchable.positionOnActivate) {
                    var require/*t*/ = this.state.touchable.positionOnActivate,
                        requireDynamic/*n*/ = this.state.touchable.dimensionsOnActivate,
                        requireLazy/*r*/ = this.touchableGetPressRectOffset ? this.touchableGetPressRectOffset() : null,
                        module/*i*/ = null != requireLazy/*r*/.left ? requireLazy/*r*/.left : _,
                        o = null != requireLazy/*r*/.top ? requireLazy/*r*/.top : _,
                        a = null != requireLazy/*r*/.right ? requireLazy/*r*/.right : _,
                        l = null != requireLazy/*r*/.bottom ? requireLazy/*r*/.bottom : _,
                        u = s.extractSingleTouch(global/*e*/.nativeEvent),
                        p = u && u.pageX,
                        d = u && u.pageY;
                    if (this.pressInLocation) {
                        var h = this._getDistanceBetweenPoints(p, d, this.pressInLocation.pageX, this.pressInLocation.pageY);
                        h > v && this._cancelLongPressDelayTimeout()
                    }
                    var m = p > require/*t*/.left - module/*i*/ && d > require/*t*/.top - o && p < require/*t*/.left + requireDynamic/*n*/.width + a && d < require/*t*/.top + requireDynamic/*n*/.height + l;
                    m ? this._receiveSignal(f.ENTER_PRESS_RECT, global/*e*/) : this._receiveSignal(f.LEAVE_PRESS_RECT, global/*e*/)
                }
            },
            _remeasureMetricsOnActivation: function() {
                u(this.state.touchable.responderID, null, this._handleQueryLayout)
            },
            _handleQueryLayout: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, s) {
                this.state.touchable.positionOnActivate && a.release(this.state.touchable.positionOnActivate), this.state.touchable.dimensionsOnActivate && o.release(this.state.touchable.dimensionsOnActivate), this.state.touchable.positionOnActivate = a.getPooled(module/*i*/, s), this.state.touchable.dimensionsOnActivate = o.getPooled(requireDynamic/*n*/, requireLazy/*r*/)
            },
            _handleDelay: function(global/*e*/) {
                this.touchableDelayTimeout = null, this._receiveSignal(f.DELAY, global/*e*/)
            },
            _handleLongDelay: function(global/*e*/) {
                this.longPressDelayTimeout = null, this._receiveSignal(f.LONG_PRESS_DETECTED, global/*e*/)
            },
            _receiveSignal: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.state.touchable.touchState;
                if (!m[requireDynamic/*n*/] || !m[requireDynamic/*n*/][global/*e*/]) throw new Error("Unrecognized signal `" + global/*e*/ + "` or state `" + requireDynamic/*n*/ + "` for Touchable responder `" + this.state.touchable.responderID + "`");
                var requireLazy/*r*/ = m[requireDynamic/*n*/][global/*e*/];
                if (requireLazy/*r*/ === c.ERROR) throw new Error("Touchable cannot transition from `" + requireDynamic/*n*/ + "` to `" + global/*e*/ + "` for responder `" + this.state.touchable.responderID + "`");
                requireDynamic/*n*/ !== requireLazy/*r*/ && (this._performSideEffectsForTransition(requireDynamic/*n*/, requireLazy/*r*/, global/*e*/, require/*t*/), this.state.touchable.touchState = requireLazy/*r*/)
            },
            _cancelLongPressDelayTimeout: function() {
                this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout), this.longPressDelayTimeout = null
            },
            _isHighlight: function(global/*e*/) {
                return global/*e*/ === c.RESPONDER_ACTIVE_PRESS_IN || global/*e*/ === c.RESPONDER_ACTIVE_LONG_PRESS_IN
            },
            _savePressInLocation: function(global/*e*/) {
                var require/*t*/ = s.extractSingleTouch(global/*e*/.nativeEvent),
                    requireDynamic/*n*/ = require/*t*/ && require/*t*/.pageX,
                    requireLazy/*r*/ = require/*t*/ && require/*t*/.pageY;
                this.pressInLocation = {
                    pageX: requireDynamic/*n*/,
                    pageY: requireLazy/*r*/
                }
            },
            _getDistanceBetweenPoints: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = global/*e*/ - requireDynamic/*n*/,
                    o = require/*t*/ - requireLazy/*r*/;
                return Math.sqrt(module/*i*/ * module/*i*/ + o * o)
            },
            _performSideEffectsForTransition: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = this._isHighlight(global/*e*/),
                    o = this._isHighlight(require/*t*/),
                    a = requireDynamic/*n*/ === f.RESPONDER_TERMINATED || requireDynamic/*n*/ === f.RESPONDER_RELEASE;
                if (a && this._cancelLongPressDelayTimeout(), !p[global/*e*/] && p[require/*t*/] && this._remeasureMetricsOnActivation(), d[global/*e*/] && requireDynamic/*n*/ === f.LONG_PRESS_DETECTED && this.touchableHandleLongPress && this.touchableHandleLongPress(), o && !module/*i*/ ? (this._savePressInLocation(requireLazy/*r*/), this.touchableHandleActivePressIn && this.touchableHandleActivePressIn()) : !o && module/*i*/ && this.touchableHandleActivePressOut && this.touchableHandleActivePressOut(), d[global/*e*/] && requireDynamic/*n*/ === f.RESPONDER_RELEASE) {
                    var s = !!this.touchableHandleLongPress,
                        l = h[global/*e*/] && (!s || !this.touchableLongPressCancelsPress()),
                        u = !h[global/*e*/] || l;
                    u && this.touchableHandlePress && this.touchableHandlePress(requireLazy/*r*/)
                }
                this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout), this.touchableDelayTimeout = null
            }
        },
        b = {
            Mixin: S
        };
    module/*i*/.exports = b
});