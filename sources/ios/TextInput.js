__d("TextInput",["DocumentSelectionState","EventEmitter","NativeMethodsMixin","NativeModulesDeprecated","ReactPropTypes","React","ReactChildren","ReactIOSViewAttributes","StyleSheet","Subscribable","Text","TextInputState","TimerMixin","TouchableWithoutFeedback","createReactIOSNativeComponentClass","emptyFunction","getObjectValues","invariant","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DocumentSelectionState"),
        exports/*a*/ = require/*t*/("EventEmitter"),
        DocumentSelectionState/*s*/ = require/*t*/("NativeMethodsMixin"),
        EventEmitter/*l*/ = require/*t*/("NativeModulesDeprecated"),
        NativeMethodsMixin/*u*/ = require/*t*/("ReactPropTypes"),
        NativeModulesDeprecated/*c*/ = require/*t*/("React"),
        ReactPropTypes/*p*/ = require/*t*/("ReactChildren"),
        React/*d*/ = require/*t*/("ReactIOSViewAttributes"),
        ReactChildren/*h*/ = require/*t*/("StyleSheet"),
        ReactIOSViewAttributes/*f*/ = require/*t*/("Subscribable"),
        StyleSheet/*m*/ = require/*t*/("Text"),
        Subscribable/*g*/ = require/*t*/("TextInputState"),
        Text/*_*/ = require/*t*/("TimerMixin"),
        TextInputState/*y*/ = require/*t*/("TouchableWithoutFeedback"),
        TimerMixin/*v*/ = require/*t*/("createReactIOSNativeComponentClass"),
        TouchableWithoutFeedback/*S*/ = require/*t*/("emptyFunction"),
        createReactIOSNativeComponentClass/*b*/ = require/*t*/("getObjectValues"),
        emptyFunction/*R*/ = require/*t*/("invariant"),
        getObjectValues/*w*/ = require/*t*/("merge"),
        invariant/*C*/ = EventEmitter/*l*/.RKUIManager.UIText.AutocapitalizationType,
        merge/*E*/ = {
            none: invariant/*C*/.None,
            sentences: invariant/*C*/.Sentences,
            words: invariant/*C*/.Words,
            characters: invariant/*C*/.AllCharacters
        },
        D = {
            "default": "default",
            numeric: "numeric"
        },
        T = getObjectValues/*w*/(React/*d*/.UIView, {
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
        x = getObjectValues/*w*/(T, {
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
        F = NativeModulesDeprecated/*c*/.createClass({
            displayName: "TextInput",
            statics: {
                autoCapitalizeMode: merge/*E*/,
                keyboardType: D
            },
            propTypes: {
                autoCapitalize: NativeMethodsMixin/*u*/.oneOf(createReactIOSNativeComponentClass/*b*/(merge/*E*/)),
                autoCorrect: NativeMethodsMixin/*u*/.bool,
                autoFocus: NativeMethodsMixin/*u*/.bool,
                editable: NativeMethodsMixin/*u*/.bool,
                keyboardType: NativeMethodsMixin/*u*/.oneOf(createReactIOSNativeComponentClass/*b*/(D)),
                multiline: NativeMethodsMixin/*u*/.bool,
                onBlur: NativeMethodsMixin/*u*/.func,
                onFocus: NativeMethodsMixin/*u*/.func,
                onChangeText: NativeMethodsMixin/*u*/.func,
                onEndEditing: NativeMethodsMixin/*u*/.func,
                onSubmitEditing: NativeMethodsMixin/*u*/.func,
                placeholder: NativeMethodsMixin/*u*/.string,
                placeholderTextColor: NativeMethodsMixin/*u*/.string,
                selectionState: NativeMethodsMixin/*u*/.instanceOf(o),
                value: NativeMethodsMixin/*u*/.string,
                bufferDelay: NativeMethodsMixin/*u*/.number,
                controlled: NativeMethodsMixin/*u*/.bool,
                style: StyleSheet/*m*/.stylePropType
            },
            mixins: [DocumentSelectionState/*s*/, Text/*_*/, ReactIOSViewAttributes/*f*/.Mixin],
            viewConfig: {
                uiViewClassName: "RCTTextField",
                validAttributes: x
            },
            isFocused: function() {
                return Subscribable/*g*/.currentlyFocusedField() === this.refs.input.getNativeNode()
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
                onFocusRequested: NativeModulesDeprecated/*c*/.PropTypes.func,
                focusEmitter: NativeModulesDeprecated/*c*/.PropTypes.instanceOf(exports/*a*/)
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
                    ReactPropTypes/*p*/.forEach(requireDynamic/*n*/, function() {
                        return ++requireLazy/*r*/
                    }), this.props.value && requireLazy/*r*/ && emptyFunction/*R*/(0, "Cannot specify both value and children."), requireLazy/*r*/ > 1 && (requireDynamic/*n*/ = NativeModulesDeprecated/*c*/.createElement(StyleSheet/*m*/, null, requireDynamic/*n*/)), this.props.inputView && (requireDynamic/*n*/ = [requireDynamic/*n*/, this.props.inputView]), global/*e*/ = NativeModulesDeprecated/*c*/.createElement(M, {
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
                        onSelectionChangeShouldSetResponder: TouchableWithoutFeedback/*S*/.thatReturnsTrue,
                        placeholder: this.props.placeholder,
                        placeholderTextColor: this.props.placeholderTextColor,
                        text: this.state.bufferedValue,
                        autoCapitalize: this.props.autoCapitalize,
                        autoCorrect: this.props.autoCorrect
                    })
                } else {
                    for (var require/*t*/ in P)
                        if (this.props[require/*t*/]) throw new Error("TextInput prop `" + require/*t*/ + "` is only supported with multiline.");
                    global/*e*/ = NativeModulesDeprecated/*c*/.createElement(Q, {
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
                return NativeModulesDeprecated/*c*/.createElement(TextInputState/*y*/, {
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
        L = ReactChildren/*h*/.create({
            input: {
                alignSelf: "stretch"
            }
        }),
        M = TimerMixin/*v*/({
            validAttributes: T,
            uiViewClassName: "RCTTextView"
        }),
        Q = TimerMixin/*v*/({
            validAttributes: x,
            uiViewClassName: "RCTTextField"
        });
    module/*i*/.exports = F
});