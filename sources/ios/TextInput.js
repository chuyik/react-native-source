__d("TextInput",["DocumentSelectionState","EventEmitter","NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","React","ReactChildren","ReactIOSViewAttributes","StyleSheet","Subscribable","Text","TextInputState","TimerMixin","TouchableWithoutFeedback","createReactIOSNativeComponentClass","emptyFunction","getObjectValues","invariant","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DocumentSelectionState"),
        a = require/*t*/("EventEmitter"),
        s = require/*t*/("NativeMethodsMixin"),
        l = require/*t*/("NativeModulesDeprecated"),
        u = require/*t*/("ReactPropTypes"),
        c = require/*t*/("React"),
        p = require/*t*/("ReactChildren"),
        d = require/*t*/("ReactIOSViewAttributes"),
        h = require/*t*/("StyleSheet"),
        f = require/*t*/("Subscribable"),
        m = require/*t*/("Text"),
        g = require/*t*/("TextInputState"),
        _ = require/*t*/("TimerMixin"),
        y = require/*t*/("TouchableWithoutFeedback"),
        v = require/*t*/("createReactIOSNativeComponentClass"),
        S = require/*t*/("emptyFunction"),
        b = require/*t*/("getObjectValues"),
        R = require/*t*/("invariant"),
        w = require/*t*/("merge"),
        C = l.RKUIManager.UIText.AutocapitalizationType,
        E = {
            none: C.None,
            sentences: C.Sentences,
            words: C.Words,
            characters: C.AllCharacters
        },
        D = {
            "default": "default",
            numeric: "numeric"
        },
        T = w(d.UIView, {
            autoCorrect: !0,
            autoCapitalize: !0,
            color: !0,
            editable: !0,
            fontSize: !0,
            fontWeight: !0,
            keyboardType: !0,
            mostRecentEventCounter: !0,
            placeholder: !0,
            placeholderTextColor: !0,
            text: !0
        }),
        x = w(T, {
            caretHidden: !0,
            enabled: !0
        }),
        P = {
            onSelectionChange: !0,
            onTextInput: !0,
            children: !0
        },
        I = {
            onSubmitEditing: !0
        },
        F = c.createClass({
            displayName: "TextInput",
            statics: {
                autoCapitalizeMode: E,
                keyboardType: D
            },
            propTypes: {
                autoCapitalize: u.oneOf(b(E)),
                autoCorrect: u.bool,
                autoFocus: u.bool,
                editable: u.bool,
                keyboardType: u.oneOf(b(D)),
                multiline: u.bool,
                onBlur: u.func,
                onFocus: u.func,
                onChangeText: u.func,
                onEndEditing: u.func,
                onSubmitEditing: u.func,
                placeholder: u.string,
                placeholderTextColor: u.string,
                selectionState: u.instanceOf(o),
                value: u.string,
                bufferDelay: u.number,
                controlled: u.bool,
                style: m.stylePropType
            },
            mixins: [s, _, f.Mixin],
            viewConfig: {
                uiViewClassName: "RCTTextField",
                validAttributes: x
            },
            isFocused: function() {
                return g.currentlyFocusedField() === this.refs.input.getNativeNode()
            },
            getDefaultProps: function() {
                return {
                    bufferDelay: 100
                }
            },
            getInitialState: function() {
                return {
                    mostRecentEventCounter: 0,
                    bufferedValue: this.props.value
                }
            },
            contextTypes: {
                onFocusRequested: c.PropTypes.func,
                focusEmitter: c.PropTypes.instanceOf(a)
            },
            componentDidMount: function() {
                return this.context.focusEmitter ? (this.addListenerOn(this.context.focusEmitter, "focus", function(global/*e*/) {
                    this === global/*e*/ ? this.requestAnimationFrame(this.focus) : this.isFocused() && this.blur()
                }.bind(this)), void(this.props.autoFocus && this.context.onFocusRequested(this))) : void(this.props.autoFocus && this.requestAnimationFrame(this.focus))
            },
            componentWillReceiveProps: function(global/*e*/) {
                global/*e*/.value !== this.props.value && (this.isFocused() ? (this.clearTimeout(this._bufferTimeout), this._bufferTimeout = this.setTimeout(function() {
                    return this.setState({
                        bufferedValue: global/*e*/.value
                    })
                }.bind(this), this.props.bufferDelay)) : this.setState({
                    bufferedValue: global/*e*/.value
                }))
            },
            render: function() {
                var global/*e*/;
                if (this.props.multiline) {
                    for (var require/*t*/ in I)
                        if (this.props[require/*t*/]) throw new Error("TextInput prop `" + require/*t*/ + "` cannot be used with multiline.");
                    var requireDynamic/*n*/ = this.props.children,
                        requireLazy/*r*/ = 0;
                    p.forEach(requireDynamic/*n*/, function() {
                        return ++requireLazy/*r*/
                    }), this.props.value && requireLazy/*r*/ && R(0, "Cannot specify both value and children."), requireLazy/*r*/ > 1 && (requireDynamic/*n*/ = c.createElement(m, null, requireDynamic/*n*/)), this.props.inputView && (requireDynamic/*n*/ = [requireDynamic/*n*/, this.props.inputView]), global/*e*/ = c.createElement(M, {
                        ref: "input",
                        style: [L.input, this.props.style],
                        children: requireDynamic/*n*/,
                        mostRecentEventCounter: this.state.mostRecentEventCounter,
                        editable: this.props.editable,
                        onFocus: this._onFocus,
                        onBlur: this._onBlur,
                        onChange: this._onChange,
                        onEndEditing: this.props.onEndEditing,
                        onSelectionChange: this._onSelectionChange,
                        onTextInput: this._onTextInput,
                        onSelectionChangeShouldSetResponder: S.thatReturnsTrue,
                        placeholder: this.props.placeholder,
                        placeholderTextColor: this.props.placeholderTextColor,
                        text: this.state.bufferedValue,
                        autoCapitalize: this.props.autoCapitalize,
                        autoCorrect: this.props.autoCorrect
                    })
                } else {
                    for (var require/*t*/ in P)
                        if (this.props[require/*t*/]) throw new Error("TextInput prop `" + require/*t*/ + "` is only supported with multiline.");
                    global/*e*/ = c.createElement(Q, {
                        ref: "input",
                        style: [L.input, this.props.style],
                        enabled: this.props.editable,
                        keyboardType: this.props.keyboardType,
                        onFocus: this._onFocus,
                        onBlur: this._onBlur,
                        onChange: this._onChange,
                        onEndEditing: this.props.onEndEditing,
                        onSubmitEditing: this.props.onSubmitEditing,
                        onSelectionChangeShouldSetResponder: function() {
                            return !0
                        },
                        placeholder: this.props.placeholder,
                        text: this.state.bufferedValue,
                        autoCapitalize: this.props.autoCapitalize,
                        autoCorrect: this.props.autoCorrect
                    })
                }
                return c.createElement(y, {
                    onPress: this._onPress,
                    rejectResponderTermination: !0
                }, global/*e*/)
            },
            _onFocus: function(global/*e*/) {
                this.props.onFocus && this.props.onFocus(global/*e*/)
            },
            _onPress: function() {
                this.focus()
            },
            _onChange: function(global/*e*/) {
                this.props.controlled && global/*e*/.nativeEvent.text !== this.props.value && this.refs.input.setNativeProps({
                    text: this.props.value
                }), this.props.onChange && this.props.onChange(global/*e*/), this.props.onChangeText && this.props.onChangeText(global/*e*/.nativeEvent.text)
            },
            _onBlur: function(global/*e*/) {
                this.blur(), this.props.onBlur && this.props.onBlur(global/*e*/)
            },
            _onSelectionChange: function(global/*e*/) {
                if (this.props.selectionState) {
                    var require/*t*/ = global/*e*/.nativeEvent.selection;
                    this.props.selectionState.update(require/*t*/.start, require/*t*/.end)
                }
                this.props.onSelectionChange && this.props.onSelectionChange(global/*e*/)
            },
            _onTextInput: function(global/*e*/) {
                this.props.onTextInput && this.props.onTextInput(global/*e*/);
                var require/*t*/ = global/*e*/.nativeEvent.eventCounter;
                require/*t*/ > this.state.mostRecentEventCounter && this.setState({
                    mostRecentEventCounter: require/*t*/
                })
            }
        }),
        L = h.create({
            input: {
                alignSelf: "stretch"
            }
        }),
        M = v({
            validAttributes: T,
            uiViewClassName: "RCTTextView"
        }),
        Q = v({
            validAttributes: x,
            uiViewClassName: "RCTTextField"
        });
    module/*i*/.exports = F
});