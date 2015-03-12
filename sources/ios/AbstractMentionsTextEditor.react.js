__d("AbstractMentionsTextEditor.react",["AbstractTextEditor.react","AbstractTextEditorProps","ModalFullscreenView","getMentionableRect","Locale","ReactPropTypes","React","TimerMixin","TypeaheadNavigation","View","copyProperties"],function (e, t, n, r, i) {
    "use strict";
    var o, a, s = t("AbstractTextEditor.react"),
        AbstractTextEditorProps/*l*/ = t("AbstractTextEditorProps"),
        ModalFullscreenView/*u*/ = t("ModalFullscreenView"),
        getMentionableRect/*c*/ = t("getMentionableRect"),
        Locale/*p*/ = t("Locale"),
        ReactPropTypes/*d*/ = t("ReactPropTypes"),
        React/*h*/ = t("React"),
        TimerMixin/*f*/ = t("TimerMixin"),
        TypeaheadNavigation/*m*/ = t("TypeaheadNavigation"),
        View/*g*/ = t("View"),
        copyProperties/*_*/ = t("copyProperties"),
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
                var e = function() {
                    this.setTimeout(this._searchIfCollapsed, 0)
                }.bind(this);
                this._listeners = [this.props.selectionState.addListener("focus", e), this.props.selectionState.addListener("update", e)]
            },
            componentWillUnmount: function() {
                this._listeners.forEach(function(e) {
                    e.remove()
                }), this._listeners = null
            },
            getInitialState: function() {
                return {
                    contextualBounds: null,
                    highlightedMentionable: null,
                    mentionableEntries: null
                }
            },
            _onShowMentions: function(e, t) {
                var n = e && e.length;
                if (n || this.state.mentionableEntries) {
                    var r = n ? e.slice(0, v) : null;
                    if (r) {
                        var i = this.props.typeaheadViewProps;
                        i && i.mentionSortFn && r.sort(i.mentionSortFn), this.props.onShowMentions(r, t)
                    }
                    this.setState({
                        contextualBounds: n ? getMentionableRect/*c*/(t, y) : null,
                        highlightedMentionable: n ? e[0] : null,
                        mentionableEntries: r
                    })
                }
            },
            _onBlur: function(e) {
                this.setState(this.getInitialState()), this.props.onBlur(e)
            },
            _onFocus: function(e) {
                this.props.mentionsSource && this.props.mentionsSource.bootstrap(), this.props.onFocus(e)
            },
            _onReturn: function(e) {
                this.state.highlightedMentionable && !e.nativeEvent.getModifiers().any ? this._onMentionSelect(this.state.highlightedMentionable, e) : this.props.onReturn(e)
            },
            _onTab: function(e) {
                this.state.highlightedMentionable ? (e.preventDefault(), this._onMentionSelect(this.state.highlightedMentionable, e)) : this.props.onTab && this.props.onTab(e)
            },
            _onEscape: function(e) {
                this.state.highlightedMentionable ? this.setState(this.getInitialState()) : this.props.onEscape && this.props.onEscape(e)
            },
            _onUpArrow: function(e) {
                this.state.mentionableEntries ? (e.preventDefault(), TypeaheadNavigation/*m*/.moveUp(this.state.mentionableEntries, this.state.highlightedMentionable, this._onMentionHighlight)) : this.props.onUpArrow && this.props.onUpArrow(e)
            },
            _onDownArrow: function(e) {
                this.state.mentionableEntries ? (e.preventDefault(), TypeaheadNavigation/*m*/.moveDown(this.state.mentionableEntries, this.state.highlightedMentionable, this._onMentionHighlight)) : this.props.onDownArrow && this.props.onDownArrow(e)
            },
            _onMentionHighlight: function(e) {
                this.setState({
                    highlightedMentionable: e
                })
            },
            _onMentionSelect: function(e, t) {
                this.props.onAddMention(e, t), this.setState(this.getInitialState())
            },
            _searchIfCollapsed: function() {
                var e = this.props.selectionState;
                e.hasFocus() && e.isCollapsed() && this.props.mentionsSource && this.props.mentionsSource.search(this.props.documentView.getContent(), e.getStartOffset(), this._onShowMentions)
            },
            focus: function() {
                this.refs.abstractTextEditor.focus()
            },
            blur: function() {
                this.refs.abstractTextEditor.blur()
            },
            renderLayers: function() {
                var e = this.state.mentionableEntries,
                    t = this.props.selectionState,
                    n = this.props.typeaheadView,
                    r = t.isCollapsed() && t.hasFocus() && e && e.length,
                    i = {};
                return this.props.autoflip && (i.ContextualLayerAutoFlip = o, i.ContextualLayerUpdateOnScroll = a), {
                    entries: React/*h*/.createElement(ModalFullscreenView/*u*/, {
                        shown: r,
                        contextRef: "container",
                        contextBounds: this.state.contextualBounds,
                        offsetY: S,
                        position: "above",
                        behaviors: i
                    }, React/*h*/.createElement(n, {
                        viewProps: this.props.typeaheadViewProps,
                        highlightedEntry: this.state.highlightedMentionable,
                        entries: e || [],
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
                }, this.transferPropsTo(React/*h*/.createElement(s, {
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
    i.exports = b
});