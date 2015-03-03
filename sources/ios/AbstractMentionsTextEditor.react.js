__d("AbstractMentionsTextEditor.react",["AbstractTextEditor.react","AbstractTextEditorProps","ModalFullscreenView","getMentionableRect","Locale","ReactPropTypes","React","TimerMixin","TypeaheadNavigation","View","copyProperties"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o, exports/*a*/, AbstractTextEditor.react/*s*/ = require/*t*/("AbstractTextEditor.react"),
        AbstractTextEditorProps/*l*/ = require/*t*/("AbstractTextEditorProps"),
        ModalFullscreenView/*u*/ = require/*t*/("ModalFullscreenView"),
        getMentionableRect/*c*/ = require/*t*/("getMentionableRect"),
        Locale/*p*/ = require/*t*/("Locale"),
        ReactPropTypes/*d*/ = require/*t*/("ReactPropTypes"),
        React/*h*/ = require/*t*/("React"),
        TimerMixin/*f*/ = require/*t*/("TimerMixin"),
        TypeaheadNavigation/*m*/ = require/*t*/("TypeaheadNavigation"),
        View/*g*/ = require/*t*/("View"),
        copyProperties/*_*/ = require/*t*/("copyProperties"),
        y = Locale/*p*/.isRTL(),
        v = 20,
        S = 5,
        b = React/*h*/.createClass({
            displayName: "AbstractMentionsTextEditor",
            mixins: [TimerMixin/*f*/],
            propTypes: copyProperties/*_*/({}, AbstractTextEditorProps/*l*/.propTypes, {
                autoflip: ReactPropTypes/*d*/.bool,
                mentionsSource: ReactPropTypes/*d*/.object,
                excludedEntries: ReactPropTypes/*d*/.object,
                onShowMentions: ReactPropTypes/*d*/.func.isRequired,
                onAddMention: ReactPropTypes/*d*/.func.isRequired,
                typeaheadView: ReactPropTypes/*d*/.func.isRequired,
                typeaheadViewProps: ReactPropTypes/*d*/.object,
                inputView: ReactPropTypes/*d*/.renderable
            }),
            getDefaultProps: AbstractTextEditorProps/*l*/.getDefaultProps,
            componentWillMount: function() {
                var global/*e*/ = function() {
                    this.setTimeout(this._searchIfCollapsed, 0)
                }.bind(this);
                this._listeners = [this.props.selectionState.addListener("focus", global/*e*/), this.props.selectionState.addListener("update", global/*e*/)]
            },
            componentWillUnmount: function() {
                this._listeners.forEach(function(global/*e*/) {
                    global/*e*/.remove()
                }), this._listeners = null
            },
            getInitialState: function() {
                return {
                    contextualBounds: null,
                    highlightedMentionable: null,
                    mentionableEntries: null
                }
            },
            _onShowMentions: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = global/*e*/ && global/*e*/.length;
                if (requireDynamic/*n*/ || this.state.mentionableEntries) {
                    var requireLazy/*r*/ = requireDynamic/*n*/ ? global/*e*/.slice(0, v) : null;
                    if (requireLazy/*r*/) {
                        var module/*i*/ = this.props.typeaheadViewProps;
                        module/*i*/ && module/*i*/.mentionSortFn && requireLazy/*r*/.sort(module/*i*/.mentionSortFn), this.props.onShowMentions(requireLazy/*r*/, require/*t*/)
                    }
                    this.setState({
                        contextualBounds: requireDynamic/*n*/ ? getMentionableRect/*c*/(require/*t*/, y) : null,
                        highlightedMentionable: requireDynamic/*n*/ ? global/*e*/[0] : null,
                        mentionableEntries: requireLazy/*r*/
                    })
                }
            },
            _onBlur: function(global/*e*/) {
                this.setState(this.getInitialState()), this.props.onBlur(global/*e*/)
            },
            _onFocus: function(global/*e*/) {
                this.props.mentionsSource && this.props.mentionsSource.bootstrap(), this.props.onFocus(global/*e*/)
            },
            _onReturn: function(global/*e*/) {
                this.state.highlightedMentionable && !global/*e*/.nativeEvent.getModifiers().any ? this._onMentionSelect(this.state.highlightedMentionable, global/*e*/) : this.props.onReturn(global/*e*/)
            },
            _onTab: function(global/*e*/) {
                this.state.highlightedMentionable ? (global/*e*/.preventDefault(), this._onMentionSelect(this.state.highlightedMentionable, global/*e*/)) : this.props.onTab && this.props.onTab(global/*e*/)
            },
            _onEscape: function(global/*e*/) {
                this.state.highlightedMentionable ? this.setState(this.getInitialState()) : this.props.onEscape && this.props.onEscape(global/*e*/)
            },
            _onUpArrow: function(global/*e*/) {
                this.state.mentionableEntries ? (global/*e*/.preventDefault(), TypeaheadNavigation/*m*/.moveUp(this.state.mentionableEntries, this.state.highlightedMentionable, this._onMentionHighlight)) : this.props.onUpArrow && this.props.onUpArrow(global/*e*/)
            },
            _onDownArrow: function(global/*e*/) {
                this.state.mentionableEntries ? (global/*e*/.preventDefault(), TypeaheadNavigation/*m*/.moveDown(this.state.mentionableEntries, this.state.highlightedMentionable, this._onMentionHighlight)) : this.props.onDownArrow && this.props.onDownArrow(global/*e*/)
            },
            _onMentionHighlight: function(global/*e*/) {
                this.setState({
                    highlightedMentionable: global/*e*/
                })
            },
            _onMentionSelect: function(global/*e*/, require/*t*/) {
                this.props.onAddMention(global/*e*/, require/*t*/), this.setState(this.getInitialState())
            },
            _searchIfCollapsed: function() {
                var global/*e*/ = this.props.selectionState;
                global/*e*/.hasFocus() && global/*e*/.isCollapsed() && this.props.mentionsSource && this.props.mentionsSource.search(this.props.documentView.getContent(), global/*e*/.getStartOffset(), this._onShowMentions)
            },
            focus: function() {
                this.refs.abstractTextEditor.focus()
            },
            blur: function() {
                this.refs.abstractTextEditor.blur()
            },
            renderLayers: function() {
                var global/*e*/ = this.state.mentionableEntries,
                    require/*t*/ = this.props.selectionState,
                    requireDynamic/*n*/ = this.props.typeaheadView,
                    requireLazy/*r*/ = require/*t*/.isCollapsed() && require/*t*/.hasFocus() && global/*e*/ && global/*e*/.length,
                    module/*i*/ = {};
                return this.props.autoflip && (module/*i*/.ContextualLayerAutoFlip = o, module/*i*/.ContextualLayerUpdateOnScroll = exports/*a*/), {
                    entries: React/*h*/.createElement(ModalFullscreenView/*u*/, {
                        shown: requireLazy/*r*/,
                        contextRef: "container",
                        contextBounds: this.state.contextualBounds,
                        offsetY: S,
                        position: "above",
                        behaviors: module/*i*/
                    }, React/*h*/.createElement(requireDynamic/*n*/, {
                        viewProps: this.props.typeaheadViewProps,
                        highlightedEntry: this.state.highlightedMentionable,
                        entries: global/*e*/ || [],
                        onSelect: this._onMentionSelect,
                        onHighlight: this._onMentionHighlight
                    }))
                }
            },
            render: function() {
                return React/*h*/.createElement(View/*g*/, {
                    ref: "container",
                    className: this.props.className,
                    tabIndex: "-2"
                }, this.transferPropsTo(React/*h*/.createElement(AbstractTextEditor.react/*s*/, {
                    ref: "abstractTextEditor",
                    autoFocus: this.props.autoFocus,
                    inputView: this.props.inputView,
                    onBlur: this._onBlur,
                    onFocus: this._onFocus,
                    onReturn: this._onReturn,
                    onTab: this._onTab,
                    onEscape: this._onEscape,
                    onDownArrow: this._onDownArrow,
                    onUpArrow: this._onUpArrow,
                    onChange: this.props.onChange,
                    textInputStyle: this.props.textInputStyle
                })), this.renderLayers())
            }
        });
    module/*i*/.exports = b
});