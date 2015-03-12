__d("Touchable",["BoundingDimensions","Position","TouchEventUtils","keyMirror","queryLayoutByID"],function (e, t, n, r, i) {
    "use strict";
    var BoundingDimensions/*o*/ = t("BoundingDimensions"),
        Position/*a*/ = t("Position"),
        TouchEventUtils/*s*/ = t("TouchEventUtils"),
        keyMirror/*l*/ = t("keyMirror"),
        queryLayoutByID/*u*/ = t("queryLayoutByID"),
        c = keyMirror/*l*/({
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
        f = keyMirror/*l*/({
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
            touchableHandleResponderGrant: function(e, t) {
                e.persist(), this.state.touchable.touchState = c.NOT_RESPONDER, this.state.touchable.responderID = t, this._receiveSignal(f.RESPONDER_GRANT, e);
                var n = void 0 !== this.touchableGetHighlightDelayMS ? this.touchableGetHighlightDelayMS() : g;
                0 !== n ? this.touchableDelayTimeout = setTimeout(this._handleDelay.bind(this, e), n) : this._handleDelay(e), this.longPressDelayTimeout = setTimeout(this._handleLongDelay.bind(this, e), y - n)
            },
            touchableHandleResponderRelease: function(e) {
                this._receiveSignal(f.RESPONDER_RELEASE, e)
            },
            touchableHandleResponderTerminate: function(e) {
                this._receiveSignal(f.RESPONDER_TERMINATED, e)
            },
            touchableHandleResponderMove: function(e) {
                if (this.state.touchable.touchState !== c.RESPONDER_INACTIVE_PRESS_IN && this.state.touchable.positionOnActivate) {
                    var t = this.state.touchable.positionOnActivate,
                        n = this.state.touchable.dimensionsOnActivate,
                        r = this.touchableGetPressRectOffset ? this.touchableGetPressRectOffset() : null,
                        i = null != r.left ? r.left : _,
                        BoundingDimensions/*o*/ = null != r.top ? r.top : _,
                        Position/*a*/ = null != r.right ? r.right : _,
                        keyMirror/*l*/ = null != r.bottom ? r.bottom : _,
                        queryLayoutByID/*u*/ = TouchEventUtils/*s*/.extractSingleTouch(e.nativeEvent),
                        p = queryLayoutByID/*u*/ && queryLayoutByID/*u*/.pageX,
                        d = queryLayoutByID/*u*/ && queryLayoutByID/*u*/.pageY;
                    if (this.pressInLocation) {
                        var h = this._getDistanceBetweenPoints(p, d, this.pressInLocation.pageX, this.pressInLocation.pageY);
                        h > v && this._cancelLongPressDelayTimeout()
                    }
                    var m = p > t.left - i && d > t.top - BoundingDimensions/*o*/ && p < t.left + n.width + Position/*a*/ && d < t.top + n.height + keyMirror/*l*/;
                    m ? this._receiveSignal(f.ENTER_PRESS_RECT, e) : this._receiveSignal(f.LEAVE_PRESS_RECT, e)
                }
            },
            _remeasureMetricsOnActivation: function() {
                queryLayoutByID/*u*/(this.state.touchable.responderID, null, this._handleQueryLayout)
            },
            _handleQueryLayout: function(e, t, n, r, i, TouchEventUtils/*s*/) {
                this.state.touchable.positionOnActivate && Position/*a*/.release(this.state.touchable.positionOnActivate), this.state.touchable.dimensionsOnActivate && BoundingDimensions/*o*/.release(this.state.touchable.dimensionsOnActivate), this.state.touchable.positionOnActivate = Position/*a*/.getPooled(i, TouchEventUtils/*s*/), this.state.touchable.dimensionsOnActivate = BoundingDimensions/*o*/.getPooled(n, r)
            },
            _handleDelay: function(e) {
                this.touchableDelayTimeout = null, this._receiveSignal(f.DELAY, e)
            },
            _handleLongDelay: function(e) {
                this.longPressDelayTimeout = null, this._receiveSignal(f.LONG_PRESS_DETECTED, e)
            },
            _receiveSignal: function(e, t) {
                var n = this.state.touchable.touchState;
                if (!m[n] || !m[n][e]) throw new Error("Unrecognized signal `" + e + "` or state `" + n + "` for Touchable responder `" + this.state.touchable.responderID + "`");
                var r = m[n][e];
                if (r === c.ERROR) throw new Error("Touchable cannot transition from `" + n + "` to `" + e + "` for responder `" + this.state.touchable.responderID + "`");
                n !== r && (this._performSideEffectsForTransition(n, r, e, t), this.state.touchable.touchState = r)
            },
            _cancelLongPressDelayTimeout: function() {
                this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout), this.longPressDelayTimeout = null
            },
            _isHighlight: function(e) {
                return e === c.RESPONDER_ACTIVE_PRESS_IN || e === c.RESPONDER_ACTIVE_LONG_PRESS_IN
            },
            _savePressInLocation: function(e) {
                var t = TouchEventUtils/*s*/.extractSingleTouch(e.nativeEvent),
                    n = t && t.pageX,
                    r = t && t.pageY;
                this.pressInLocation = {
                    pageX: n,
                    pageY: r
                }
            },
            _getDistanceBetweenPoints: function(e, t, n, r) {
                var i = e - n,
                    BoundingDimensions/*o*/ = t - r;
                return Math.sqrt(i * i + BoundingDimensions/*o*/ * BoundingDimensions/*o*/)
            },
            _performSideEffectsForTransition: function(e, t, n, r) {
                var i = this._isHighlight(e),
                    BoundingDimensions/*o*/ = this._isHighlight(t),
                    Position/*a*/ = n === f.RESPONDER_TERMINATED || n === f.RESPONDER_RELEASE;
                if (Position/*a*/ && this._cancelLongPressDelayTimeout(), !p[e] && p[t] && this._remeasureMetricsOnActivation(), d[e] && n === f.LONG_PRESS_DETECTED && this.touchableHandleLongPress && this.touchableHandleLongPress(), BoundingDimensions/*o*/ && !i ? (this._savePressInLocation(r), this.touchableHandleActivePressIn && this.touchableHandleActivePressIn()) : !BoundingDimensions/*o*/ && i && this.touchableHandleActivePressOut && this.touchableHandleActivePressOut(), d[e] && n === f.RESPONDER_RELEASE) {
                    var TouchEventUtils/*s*/ = !!this.touchableHandleLongPress,
                        keyMirror/*l*/ = h[e] && (!TouchEventUtils/*s*/ || !this.touchableLongPressCancelsPress()),
                        queryLayoutByID/*u*/ = !h[e] || keyMirror/*l*/;
                    queryLayoutByID/*u*/ && this.touchableHandlePress && this.touchableHandlePress(r)
                }
                this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout), this.touchableDelayTimeout = null
            }
        },
        b = {
            Mixin: S
        };
    i.exports = b
});