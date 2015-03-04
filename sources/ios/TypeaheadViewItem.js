__d("TypeaheadViewItem",["React","SearchableEntry"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var React/*o*/ = require/*t*/("React"),
        SearchableEntry/*a*/ = require/*t*/("SearchableEntry"),
        s = {
            entry: React/*o*/.PropTypes.instanceOf(SearchableEntry/*a*/).isRequired,
            highlighted: React/*o*/.PropTypes.bool,
            selected: React/*o*/.PropTypes.bool,
            onSelect: React/*o*/.PropTypes.func.isRequired,
            onHighlight: React/*o*/.PropTypes.func,
            onRenderHighlight: React/*o*/.PropTypes.func
        },
        l = {
            _onSelect: function(global/*e*/) {
                this.props.onSelect(this.props.entry, global/*e*/)
            },
            _onHighlight: function(global/*e*/) {
                this.props.onHighlight && this.props.onHighlight(this.props.entry, global/*e*/)
            },
            shouldComponentUpdate: function(global/*e*/) {
                return this.props.entry.getUniqueID() !== global/*e*/.entry.getUniqueID() || this.props.highlighted !== global/*e*/.highlighted || this.props.selected !== global/*e*/.selected
            },
            componentDidMount: function() {
                this.props.highlighted && this.props.onRenderHighlight && this.props.onRenderHighlight(this.getDOMNode())
            },
            componentDidUpdate: function() {
                this.props.highlighted && this.props.onRenderHighlight && this.props.onRenderHighlight(this.getDOMNode())
            }
        };
    module/*i*/.exports = {
        propTypes: s,
        Mixin: l
    }
});