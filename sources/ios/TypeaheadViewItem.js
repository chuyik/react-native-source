__d("TypeaheadViewItem",["React","SearchableEntry"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("React"),
        exports/*a*/ = require/*t*/("SearchableEntry"),
        React/*s*/ = {
            entry: o.PropTypes.instanceOf(exports/*a*/).isRequired,
            SearchableEntry/*highlighted*/: o.PropTypes.bool,
            selected: o.PropTypes.bool,
            onSelect: o.PropTypes.func.isRequired,
            onHighlight: o.PropTypes.func,
            onRenderHighlight: o.PropTypes.func
        },
        l = {
            _onSelect: function(global/*e*/) {
                this.props.onSelect(this.props.entry, global/*e*/)
            },
            _onHighlight: function(global/*e*/) {
                this.props.onHighlight && this.props.onHighlight(this.props.entry, global/*e*/)
            },
            shouldComponentUpdate: function(global/*e*/) {
                return this.props.entry.getUniqueID() !== global/*e*/.entry.getUniqueID() || this.props.SearchableEntry/*highlighted*/ !== global/*e*/.SearchableEntry/*highlighted*/ || this.props.selected !== global/*e*/.selected
            },
            componentDidMount: function() {
                this.props.SearchableEntry/*highlighted*/ && this.props.onRenderHighlight && this.props.onRenderHighlight(this.getDOMNode())
            },
            componentDidUpdate: function() {
                this.props.SearchableEntry/*highlighted*/ && this.props.onRenderHighlight && this.props.onRenderHighlight(this.getDOMNode())
            }
        };
    module/*i*/.exports = {
        propTypes: React/*s*/,
        Mixin: l
    }
});