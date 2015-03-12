__d("TextInput",["DocumentSelectionState","EventEmitter","NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","React","ReactChildren","ReactIOSViewAttributes","StyleSheet","Subscribable","Text","TextInputState","TimerMixin","TouchableWithoutFeedback","createReactIOSNativeComponentClass","emptyFunction","getObjectValues","invariant","merge"],function (e, t, n, r, i) {
    "use strict";
    var DocumentSelectionState/*o*/ = t("DocumentSelectionState"),
        EventEmitter/*a*/ = t("EventEmitter"),
        NativeMethodsMixin/*s*/ = t("NativeMethodsMixin"),
        NativeModulesDeprecated/*l*/ = t("NativeModulesDeprecated"),
        ReactPropTypes/*u*/ = t("ReactPropTypes"),
        React/*c*/ = t("React"),
        ReactChildren/*p*/ = t("ReactChildren"),
        ReactIOSViewAttributes/*d*/ = t("ReactIOSViewAttributes"),
        StyleSheet/*h*/ = t("StyleSheet"),
        Subscribable/*f*/ = t("Subscribable"),
        Text/*m*/ = t("Text"),
        TextInputState/*g*/ = t("TextInputState"),
        TimerMixin/*_*/ = t("TimerMixin"),
        TouchableWithoutFeedback/*y*/ = t("TouchableWithoutFeedback"),
        createReactIOSNativeComponentClass/*v*/ = t("createReactIOSNativeComponentClass"),
        emptyFunction/*S*/ = t("emptyFunction"),
        getObjectValues/*b*/ = t("getObjectValues"),
        invariant/*R*/ = t("invariant"),
        merge/*w*/ = t("merge"),
        C = NativeModulesDeprecated/*l*/.RKUIManager.UIText.AutocapitalizationType,
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
        T = merge/*w*/(ReactIOSViewAttributes/*d*/.UIView, {
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
        x = merge/*w*/(T, {
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
        F = React/*c*/.createClass({
            displayName: "TextInput",
            statics: {
                autoCapitalizeMode: E,
                keyboardType: D
            },
            propTypes: {
                autoCapitalize: ReactPropTypes/*u*/.oneOf(getObjectValues/*b*/(E)),
                autoCorrect: ReactPropTypes/*u*/.bool,
                autoFocus: ReactPropTypes/*u*/.bool,
                editable: ReactPropTypes/*u*/.bool,
                keyboardType: ReactPropTypes/*u*/.oneOf(getObjectValues/*b*/(D)),
                multiline: ReactPropTypes/*u*/.bool,
                onBlur: ReactPropTypes/*u*/.func,
                onFocus: ReactPropTypes/*u*/.func,
                onChangeText: ReactPropTypes/*u*/.func,
                onEndEditing: ReactPropTypes/*u*/.func,
                onSubmitEditing: ReactPropTypes/*u*/.func,
                placeholder: ReactPropTypes/*u*/.string,
                placeholderTextColor: ReactPropTypes/*u*/.string,
                selectionState: ReactPropTypes/*u*/.instanceOf(DocumentSelectionState/*o*/),
                value: ReactPropTypes/*u*/.string,
                bufferDelay: ReactPropTypes/*u*/.number,
                controlled: ReactPropTypes/*u*/.bool,
                style: Text/*m*/.stylePropType
            },
            mixins: [NativeMethodsMixin/*s*/, TimerMixin/*_*/, Subscribable/*f*/.Mixin],
            viewConfig: {
                uiViewClassName: "RCTTextField",
                validAttributes: x
            },
            isFocused: function() {
                return TextInputState/*g*/.currentlyFocusedField() === this.refs.input.getNativeNode()
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
                onFocusRequested: React/*c*/.PropTypes.func,
                focusEmitter: React/*c*/.PropTypes.instanceOf(EventEmitter/*a*/)
            },
            componentDidMount: function() {
                return this.context.focusEmitter ? (this.addListenerOn(this.context.focusEmitter, "focus", function(e) {
                    this === e ? this.requestAnimationFrame(this.focus) : this.isFocused() && this.blur()
                }.bind(this)), void(this.props.autoFocus && this.context.onFocusRequested(this))) : void(this.props.autoFocus && this.requestAnimationFrame(this.focus))
            },
            componentWillReceiveProps: function(e) {
                e.value !== this.props.value && (this.isFocused() ? (this.clearTimeout(this._bufferTimeout), this._bufferTimeout = this.setTimeout(function() {
                    return this.setState({
                        bufferedValue: e.value
                    })
                }.bind(this), this.props.bufferDelay)) : this.setState({
                    bufferedValue: e.value
                }))
            },
            render: function() {
                var e;
                if (this.props.multiline) {
                    for (var t in I)
                        if (this.props[t]) throw new Error("TextInput prop `" + t + "` cannot be used with multiline.");
                    var n = this.props.children,
                        r = 0;
                    ReactChildren/*p*/.forEach(n, function() {
                        return ++r
                    }), this.props.value && r && invariant/*R*/(0, "Cannot specify both value and children."), r > 1 && (n = React/*c*/.createElement(Text/*m*/, null, n)), this.props.inputView && (n = [n, this.props.inputView]), e = React/*c*/.createElement(M, {
                        ref: "input",
                        style: [L.input, this.props.style],
                        children: n,
                        mostRecentEventCounter: this.state.mostRecentEventCounter,
                        editable: this.props.editable,
                        onFocus: this._onFocus,
                        onBlur: this._onBlur,
                        onChange: this._onChange,
                        onEndEditing: this.props.onEndEditing,
                        onSelectionChange: this._onSelectionChange,
                        onTextInput: this._onTextInput,
                        onSelectionChangeShouldSetResponder: emptyFunction/*S*/.thatReturnsTrue,
                        placeholder: this.props.placeholder,
                        placeholderTextColor: this.props.placeholderTextColor,
                        text: this.state.bufferedValue,
                        autoCapitalize: this.props.autoCapitalize,
                        autoCorrect: this.props.autoCorrect
                    })
                } else {
                    for (var t in P)
                        if (this.props[t]) throw new Error("TextInput prop `" + t + "` is only supported with multiline.");
                    e = React/*c*/.createElement(Q, {
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
                return React/*c*/.createElement(TouchableWithoutFeedback/*y*/, {
                    onPress: this._onPress,
                    rejectResponderTermination: !0
                }, e)
            },
            _onFocus: function(e) {
                this.props.onFocus && this.props.onFocus(e)
            },
            _onPress: function() {
                this.focus()
            },
            _onChange: function(e) {
                this.props.controlled && e.nativeEvent.text !== this.props.value && this.refs.input.setNativeProps({
                    text: this.props.value
                }), this.props.onChange && this.props.onChange(e), this.props.onChangeText && this.props.onChangeText(e.nativeEvent.text)
            },
            _onBlur: function(e) {
                this.blur(), this.props.onBlur && this.props.onBlur(e)
            },
            _onSelectionChange: function(e) {
                if (this.props.selectionState) {
                    var t = e.nativeEvent.selection;
                    this.props.selectionState.update(t.start, t.end)
                }
                this.props.onSelectionChange && this.props.onSelectionChange(e)
            },
            _onTextInput: function(e) {
                this.props.onTextInput && this.props.onTextInput(e);
                var t = e.nativeEvent.eventCounter;
                t > this.state.mostRecentEventCounter && this.setState({
                    mostRecentEventCounter: t
                })
            }
        }),
        L = StyleSheet/*h*/.create({
            input: {
                alignSelf: "stretch"
            }
        }),
        M = createReactIOSNativeComponentClass/*v*/({
            validAttributes: T,
            uiViewClassName: "RCTTextView"
        }),
        Q = createReactIOSNativeComponentClass/*v*/({
            validAttributes: x,
            uiViewClassName: "RCTTextField"
        });
    i.exports = F
});