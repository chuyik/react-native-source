__d("THPermalinkInputBarView",["Dimensions","DocumentContent","DockedInputView","LayoutAnimation","React","NativeModules","StyleSheet","THAnimations","THColors","THDockedInputContainer","THInputBarView","View","cloneWithProps","logError","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var Dimensions/*o*/ = require/*t*/("Dimensions"),
        DocumentContent/*a*/ = require/*t*/("DocumentContent"),
        DockedInputView/*s*/ = require/*t*/("DockedInputView"),
        LayoutAnimation/*l*/ = require/*t*/("LayoutAnimation"),
        React/*u*/ = require/*t*/("React"),
        NativeModules/*c*/ = require/*t*/("NativeModules").RKUIManager,
        StyleSheet/*p*/ = require/*t*/("StyleSheet"),
        THAnimations/*d*/ = require/*t*/("THAnimations"),
        THColors/*h*/ = require/*t*/("THColors"),
        THDockedInputContainer/*f*/ = require/*t*/("THDockedInputContainer"),
        THInputBarView/*m*/ = require/*t*/("THInputBarView"),
        View/*g*/ = require/*t*/("View"),
        cloneWithProps/*_*/ = require/*t*/("cloneWithProps"),
        logError/*y*/ = require/*t*/("logError"),
        keyOf/*v*/ = require/*t*/("keyOf"),
        S = keyOf/*v*/({
            inputBar: null
        }),
        b = keyOf/*v*/({
            scrollResponder: null
        }),
        R = React/*u*/.createClass({
            displayName: "THPermalinkInputBarView",
            propTypes: {
                groupID: React/*u*/.PropTypes.string,
                dockParams: React/*u*/.PropTypes.object,
                initialText: React/*u*/.PropTypes.object,
                isEditing: React/*u*/.PropTypes.bool,
                onCommentSubmit: React/*u*/.PropTypes.func,
                onCommentEditSubmit: React/*u*/.PropTypes.func,
                scrollResponder: React/*u*/.PropTypes.object
            },
            getDefaultProps: function() {
                return {
                    dockParams: null,
                    initialText: new DocumentContent/*a*/,
                    isEditing: !1,
                    savedDraftText: new DocumentContent/*a*/
                }
            },
            getInitialState: function() {
                var global/*e*/ = this.props.dockParams;
                return {
                    getCommentHandle: global/*e*/ && global/*e*/.getTappedNodeHandle,
                    keyboardHeight: 0,
                    permalinkHeight: Dimensions/*o*/.get("window").height,
                    photoSource: global/*e*/ && global/*e*/.photoSource,
                    text: global/*e*/ && global/*e*/.initialText
                }
            },
            focusInput: function() {
                this.refs[S].focusInput()
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
                    Dimensions/*o*/ = this.state.getCommentHandle && this.state.getCommentHandle();
                Dimensions/*o*/ ? NativeModules/*c*/.measureLayout(Dimensions/*o*/, this.refs[b].getNodeHandle(), logError/*y*/, function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    var Dimensions/*o*/ = module/*i*/ - require/*t*/ - requireLazy/*r*/,
                        DocumentContent/*a*/ = module/*i*/ - Dimensions/*o*/ - this.state.permalinkHeight;
                    this.refs[b].scrollResponderScrollTo(0, DocumentContent/*a*/ + this.refs[S].getBarHeight())
                }.bind(this)) : this.refs[b].scrollResponderScrollTo(0, module/*i*/ - this.state.permalinkHeight + this.refs[S].getBarHeight())
            },
            handleKeyboardWillShow: function(global/*e*/) {
                this.state.keyboardHeight = global/*e*/.endCoordinates.height
            },
            handleKeyboardDidShow: function() {
                this.setState({
                    permalinkHeight: Dimensions/*o*/.get("window").height - this.state.keyboardHeight
                }, function() {
                    NativeModules/*c*/.measureLayout(this.refs[b].getInnerViewNode(), this.refs[b].getNodeHandle(), logError/*y*/, this.scrollDockedInputBarToOffset)
                }.bind(this))
            },
            handleKeyboardWillHide: function() {
                this.setState({
                    permalinkHeight: Dimensions/*o*/.get("window").height
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
                }), this.resetInputBar()), this.refs[S].blurInput()
            },
            handlePhotoChange: function(global/*e*/) {
                this.setState({
                    photoSource: global/*e*/
                })
            },
            handleTextChange: function(global/*e*/) {
                LayoutAnimation/*l*/.configureNext(THAnimations/*d*/.layout.inputButtons), this.setState({
                    text: global/*e*/
                })
            },
            render: function() {
                var global/*e*/ = cloneWithProps/*_*/(this.props.scrollResponder, {
                        ref: b,
                        onKeyboardWillShow: this.handleKeyboardWillShow,
                        onKeyboardDidShow: this.handleKeyboardDidShow,
                        onKeyboardWillHide: this.handleKeyboardWillHide,
                        onKeyboardDidHide: this.handleKeyboardDidHide,
                        onScrollResponderKeyboardDismissed: this.handleCommentAbort
                    }),
                    require/*t*/ = [w.container, {
                        height: this.state.permalinkHeight
                    }];
                return React/*u*/.createElement(View/*g*/, {
                    style: require/*t*/
                }, global/*e*/, React/*u*/.createElement(DockedInputView/*s*/, null, React/*u*/.createElement(THInputBarView/*m*/, {
                    ref: S,
                    canCommentTrue: !0,
                    canCommentInline: !0,
                    comparisonTextForCanPost: this.props.initialText,
                    initialText: this.state.text,
                    isEditing: this.props.isEditing,
                    onCommentSubmit: this.handleCommentSubmit,
                    onPhotoChange: this.handlePhotoChange,
                    onTextChange: this.handleTextChange,
                    paddingHorizontal: THDockedInputContainer/*f*/.contentPaddingHorizontal,
                    photoSource: this.state.photoSource,
                    showPlaceholder: !0
                })))
            }
        }),
        w = StyleSheet/*p*/.create({
            container: {
                width: Dimensions/*o*/.get("window").width,
                backgroundColor: THColors/*h*/.backgroundColor
            }
        });
    module/*i*/.exports = R
});