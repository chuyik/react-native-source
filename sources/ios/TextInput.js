__d("TextInput",["DocumentSelectionState","EventEmitter","NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","React","ReactChildren","ReactIOSViewAttributes","StyleSheet","Subscribable","Text","TextInputState","TimerMixin","TouchableWithoutFeedback","createReactIOSNativeComponentClass","emptyFunction","getObjectValues","invariant","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var DocumentSelectionState/*o*/ = require/*t*/("DocumentSelectionState"),
        EventEmitter/*a*/ = require/*t*/("EventEmitter"),
        NativeMethodsMixin/*s*/ = require/*t*/("NativeMethodsMixin"),
        NativeModulesDeprecated/*l*/ = require/*t*/("NativeModulesDeprecated"),
        ReactPropTypes/*u*/ = require/*t*/("ReactPropTypes"),
        React/*c*/ = require/*t*/("React"),
        ReactChildren/*p*/ = require/*t*/("ReactChildren"),
        ReactIOSViewAttributes/*d*/ = require/*t*/("ReactIOSViewAttributes"),
        StyleSheet/*h*/ = require/*t*/("StyleSheet"),
        Subscribable/*f*/ = require/*t*/("Subscribable"),
        Text/*m*/ = require/*t*/("Text"),
        TextInputState/*g*/ = require/*t*/("TextInputState"),
        TimerMixin/*_*/ = require/*t*/("TimerMixin"),
        TouchableWithoutFeedback/*y*/ = require/*t*/("TouchableWithoutFeedback"),
        createReactIOSNativeComponentClass/*v*/ = require/*t*/("createReactIOSNativeComponentClass"),
        emptyFunction/*S*/ = require/*t*/("emptyFunction"),
        getObjectValues/*b*/ = require/*t*/("getObjectValues"),
        invariant/*R*/ = require/*t*/("invariant"),
        merge/*w*/ = require/*t*/("merge"),
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
                    ReactChildren/*p*/.forEach(requireDynamic/*n*/, function() {
                        return ++requireLazy/*r*/
                    }), this.props.value && requireLazy/*r*/ && invariant/*R*/(0, "Cannot specify both value and children."), requireLazy/*r*/ > 1 && (requireDynamic/*n*/ = React/*c*/.createElement(Text/*m*/, null, requireDynamic/*n*/)), this.props.inputView && (requireDynamic/*n*/ = [requireDynamic/*n*/, this.props.inputView]), global/*e*/ = React/*c*/.createElement(M, {
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
                        onSelectionChangeShouldSetResponder: emptyFunction/*S*/.thatReturnsTrue,
                        placeholder: this.props.placeholder,
                        placeholderTextColor: this.props.placeholderTextColor,
                        text: this.state.bufferedValue,
                        autoCapitalize: this.props.autoCapitalize,
                        autoCorrect: this.props.autoCorrect
                    })
                } else {
                    for (var require/*t*/ in P)
                        if (this.props[require/*t*/]) throw new Error("TextInput prop `" + require/*t*/ + "` is only supported with multiline.");
                    global/*e*/ = React/*c*/.createElement(Q, {
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
    module/*i*/.exports = F
});