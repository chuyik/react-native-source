__d("TypeaheadViewItem",["React","SearchableEntry"],function (e, t, n, r, i) {
    var React/*o*/ = t("React"),
        SearchableEntry/*a*/ = t("SearchableEntry"),
        s = {
            entry: React/*o*/.PropTypes.instanceOf(SearchableEntry/*a*/).isRequired,
            highlighted: React/*o*/.PropTypes.bool,
            selected: React/*o*/.PropTypes.bool,
            onSelect: React/*o*/.PropTypes.func.isRequired,
            onHighlight: React/*o*/.PropTypes.func,
            onRenderHighlight: React/*o*/.PropTypes.func
        },
        l = {
            _onSelect: function(e) {
                this.props.onSelect(this.props.entry, e)
            },
            _onHighlight: function(e) {
                this.props.onHighlight && this.props.onHighlight(this.props.entry, e)
            },
            shouldComponentUpdate: function(e) {
                return this.props.entry.getUniqueID() !== e.entry.getUniqueID() || this.props.highlighted !== e.highlighted || this.props.selected !== e.selected
            },
            componentDidMount: function() {
                this.props.highlighted && this.props.onRenderHighlight && this.props.onRenderHighlight(this.getDOMNode())
            },
            componentDidUpdate: function() {
                this.props.highlighted && this.props.onRenderHighlight && this.props.onRenderHighlight(this.getDOMNode())
            }
        };
    i.exports = {
        propTypes: s,
        Mixin: l
    }
});