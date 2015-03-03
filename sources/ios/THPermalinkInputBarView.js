__d("THPermalinkInputBarView",["Dimensions","DocumentContent","DockedInputView","LayoutAnimation","React","NativeModules","StyleSheet","THAnimations","THColors","THDockedInputContainer","THInputBarView","View","cloneWithProps","logError","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("Dimensions"),
        a = require/*t*/("DocumentContent"),
        s = require/*t*/("DockedInputView"),
        l = require/*t*/("LayoutAnimation"),
        u = require/*t*/("React"),
        c = require/*t*/("NativeModules").RKUIManager,
        p = require/*t*/("StyleSheet"),
        d = require/*t*/("THAnimations"),
        h = require/*t*/("THColors"),
        f = require/*t*/("THDockedInputContainer"),
        m = require/*t*/("THInputBarView"),
        g = require/*t*/("View"),
        _ = require/*t*/("cloneWithProps"),
        y = require/*t*/("logError"),
        v = require/*t*/("keyOf"),
        S = v({
            inputBar: null
        }),
        b = v({
            scrollResponder: null
        }),
        R = u.createClass({
            displayName: "THPermalinkInputBarView",
            propTypes: {
                groupID: u.PropTypes.string,
                dockParams: u.PropTypes.object,
                initialText: u.PropTypes.object,
                isEditing: u.PropTypes.bool,
                onCommentSubmit: u.PropTypes.func,
                onCommentEditSubmit: u.PropTypes.func,
                scrollResponder: u.PropTypes.object
            },
            getDefaultProps: function() {
                return {
                    dockParams: null,
                    initialText: new a,
                    isEditing: !1,
                    savedDraftText: new a
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
                    o = this.state.getCommentHandle && this.state.getCommentHandle();
                o ? c.measureLayout(o, this.refs[b].getNodeHandle(), y, function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/) {
                    var o = module/*i*/ - require/*t*/ - requireLazy/*r*/,
                        a = module/*i*/ - o - this.state.permalinkHeight;
                    this.refs[b].scrollResponderScrollTo(0, a + this.refs[S].getBarHeight())
                }.bind(this)) : this.refs[b].scrollResponderScrollTo(0, module/*i*/ - this.state.permalinkHeight + this.refs[S].getBarHeight())
            },
            handleKeyboardWillShow: function(global/*e*/) {
                this.state.keyboardHeight = global/*e*/.endCoordinates.height
            },
            handleKeyboardDidShow: function() {
                this.setState({
                    permalinkHeight: o.get("window").height - this.state.keyboardHeight
                }, function() {
                    c.measureLayout(this.refs[b].getInnerViewNode(), this.refs[b].getNodeHandle(), y, this.scrollDockedInputBarToOffset)
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
                }), this.resetInputBar()), this.refs[S].blurInput()
            },
            handlePhotoChange: function(global/*e*/) {
                this.setState({
                    photoSource: global/*e*/
                })
            },
            handleTextChange: function(global/*e*/) {
                l.configureNext(d.layout.inputButtons), this.setState({
                    text: global/*e*/
                })
            },
            render: function() {
                var global/*e*/ = _(this.props.scrollResponder, {
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
                return u.createElement(g, {
                    style: require/*t*/
                }, global/*e*/, u.createElement(s, null, u.createElement(m, {
                    ref: S,
                    canCommentTrue: !0,
                    canCommentInline: !0,
                    comparisonTextForCanPost: this.props.initialText,
                    initialText: this.state.text,
                    isEditing: this.props.isEditing,
                    onCommentSubmit: this.handleCommentSubmit,
                    onPhotoChange: this.handlePhotoChange,
                    onTextChange: this.handleTextChange,
                    paddingHorizontal: f.contentPaddingHorizontal,
                    photoSource: this.state.photoSource,
                    showPlaceholder: !0
                })))
            }
        }),
        w = p.create({
            container: {
                width: o.get("window").width,
                backgroundColor: h.backgroundColor
            }
        });
    module/*i*/.exports = R
});