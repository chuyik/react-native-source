__d("THPermalinkInputBarView",["Dimensions","DocumentContent","DockedInputView","LayoutAnimation","React","NativeModules","StyleSheet","THAnimations","THColors","THDockedInputContainer","THInputBarView","View","cloneWithProps","logError","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Dimensions"),
        exports/*a*/ = require/*t*/("DocumentContent"),
        Dimensions/*s*/ = require/*t*/("DockedInputView"),
        DocumentContent/*l*/ = require/*t*/("LayoutAnimation"),
        DockedInputView/*u*/ = require/*t*/("React"),
        LayoutAnimation/*c*/ = require/*t*/("NativeModules").RKUIManager,
        React/*p*/ = require/*t*/("StyleSheet"),
        NativeModules/*d*/ = require/*t*/("THAnimations"),
        StyleSheet/*h*/ = require/*t*/("THColors"),
        THAnimations/*f*/ = require/*t*/("THDockedInputContainer"),
        THColors/*m*/ = require/*t*/("THInputBarView"),
        THDockedInputContainer/*g*/ = require/*t*/("View"),
        THInputBarView/*_*/ = require/*t*/("cloneWithProps"),
        View/*y*/ = require/*t*/("logError"),
        cloneWithProps/*v*/ = require/*t*/("keyOf"),
        logError/*S*/ = cloneWithProps/*v*/({
            inputBar: null
        }),
        keyOf/*b*/ = cloneWithProps/*v*/({
            scrollResponder: null
        }),
        R = DockedInputView/*u*/.createClass({
            displayName: "THPermalinkInputBarView",
            propTypes: {
                groupID: DockedInputView/*u*/.PropTypes.string,
                dockParams: DockedInputView/*u*/.PropTypes.object,
                initialText: DockedInputView/*u*/.PropTypes.object,
                isEditing: DockedInputView/*u*/.PropTypes.bool,
                onCommentSubmit: DockedInputView/*u*/.PropTypes.func,
                onCommentEditSubmit: DockedInputView/*u*/.PropTypes.func,
                scrollResponder: DockedInputView/*u*/.PropTypes.object
            },
            getDefaultProps: function() {
                return {
                    dockParams: null,
                    initialText: new exports/*a*/,
                    isEditing: !1,
                    savedDraftText: new exports/*a*/
                }
            },
            getInitialState: function() {
                var global/*e*/ = this.props.dockParams;
                return {
                    getCommentHandle: global/*e*/ && global/*e*/.getTappedNodeHandle,
                    keyboardHeight: 0,
                    permalinkHeight: o.get("window").height,
                    photoSource: global/*e*/ && global/*e*/.photoSource,
                    text: global/*e*/ && global/*e*/.initialText
                }
            },
            focusInput: function() {
                this.refs[logError/*S*/].focusInput()
            },
            componentWillReceiveProps: function(global/*e*/) {
                this.setState({
                    getCommentHandle: global/*e*/.dockParams && global/*e*/.dockParams.getTappedNodeHandle,
                    photoSource: global/*e*/.dockParams && global/*e*/.dockParams.photoSource,
                    text: global/*e*/.dockParams && global/*e*/.dockParams.initialText
                }), global/*e*/.isEditing && this.focusInput()
            },
            resetInputBar: function() {
                this.setState({
                    getCommentHandle: null,
                    photoSource: null,
                    text: null
                })
            },
            scrollDockedInputBarToOffset: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                var module/*i*/ = requireLazy/*r*/,
                    o = this.state.getCommentHandle && this.state.getCommentHandle();
                o ? LayoutAnimation/*c*/.measureLayout(o, this.refs[keyOf/*b*/].getNodeHandle(), View/*y*/, function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    var o = module/*i*/ - require/*t*/ - requireLazy/*r*/,
                        exports/*a*/ = module/*i*/ - o - this.state.permalinkHeight;
                    this.refs[keyOf/*b*/].scrollResponderScrollTo(0, exports/*a*/ + this.refs[logError/*S*/].getBarHeight())
                }.bind(this)) : this.refs[keyOf/*b*/].scrollResponderScrollTo(0, module/*i*/ - this.state.permalinkHeight + this.refs[logError/*S*/].getBarHeight())
            },
            handleKeyboardWillShow: function(global/*e*/) {
                this.state.keyboardHeight = global/*e*/.endCoordinates.height
            },
            handleKeyboardDidShow: function() {
                this.setState({
                    permalinkHeight: o.get("window").height - this.state.keyboardHeight
                }, function() {
                    LayoutAnimation/*c*/.measureLayout(this.refs[keyOf/*b*/].getInnerViewNode(), this.refs[keyOf/*b*/].getNodeHandle(), View/*y*/, this.scrollDockedInputBarToOffset)
                }.bind(this))
            },
            handleKeyboardWillHide: function() {
                this.setState({
                    permalinkHeight: o.get("window").height
                })
            },
            handleCommentSubmit: function(global/*e*/, require/*t*/) {
                this.props.isEditing ? this.props.onCommentEditSubmit && this.props.onCommentEditSubmit(global/*e*/) : this.props.onCommentSubmit && this.props.onCommentSubmit(global/*e*/, require/*t*/), this.resetInputBar()
            },
            handleCommentAbort: function() {
                this.props.isEditing && (this.props.onCommentEditAbort && this.props.onCommentEditAbort({
                    getTappedNodeHandle: this.state.getCommentHandle,
                    initialText: this.props.initialText,
                    text: this.state.text
                }), this.resetInputBar()), this.refs[logError/*S*/].blurInput()
            },
            handlePhotoChange: function(global/*e*/) {
                this.setState({
                    photoSource: global/*e*/
                })
            },
            handleTextChange: function(global/*e*/) {
                DocumentContent/*l*/.configureNext(NativeModules/*d*/.layout.inputButtons), this.setState({
                    text: global/*e*/
                })
            },
            render: function() {
                var global/*e*/ = THInputBarView/*_*/(this.props.scrollResponder, {
                        ref: keyOf/*b*/,
                        onKeyboardWillShow: this.handleKeyboardWillShow,
                        onKeyboardDidShow: this.handleKeyboardDidShow,
                        onKeyboardWillHide: this.handleKeyboardWillHide,
                        onKeyboardDidHide: this.handleKeyboardDidHide,
                        onScrollResponderKeyboardDismissed: this.handleCommentAbort
                    }),
                    require/*t*/ = [w.container, {
                        height: this.state.permalinkHeight
                    }];
                return DockedInputView/*u*/.createElement(THDockedInputContainer/*g*/, {
                    style: require/*t*/
                }, global/*e*/, DockedInputView/*u*/.createElement(Dimensions/*s*/, null, DockedInputView/*u*/.createElement(THColors/*m*/, {
                    ref: logError/*S*/,
                    canCommentTrue: !0,
                    canCommentInline: !0,
                    comparisonTextForCanPost: this.props.initialText,
                    initialText: this.state.text,
                    isEditing: this.props.isEditing,
                    onCommentSubmit: this.handleCommentSubmit,
                    onPhotoChange: this.handlePhotoChange,
                    onTextChange: this.handleTextChange,
                    paddingHorizontal: THAnimations/*f*/.contentPaddingHorizontal,
                    photoSource: this.state.photoSource,
                    showPlaceholder: !0
                })))
            }
        }),
        w = React/*p*/.create({
            container: {
                width: o.get("window").width,
                backgroundColor: StyleSheet/*h*/.backgroundColor
            }
        });
    module/*i*/.exports = R
});