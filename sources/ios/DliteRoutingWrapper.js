__d("DliteRoutingWrapper",["DliteRoute","DliteRouteProvider","React","cloneWithProps"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteRoute"),
        exports/*a*/ = require/*t*/("DliteRouteProvider"),
        DliteRoute/*s*/ = require/*t*/("React"),
        DliteRouteProvider/*l*/ = require/*t*/("cloneWithProps"),
        React/*u*/ = DliteRoute/*s*/.createClass({
            displayName: "DliteRoutingWrapper",
            cloneWithProps/*mixins*/: [exports/*a*/.Mixin],
            propTypes: {
                route: DliteRoute/*s*/.PropTypes.instanceOf(o).isRequired,
                childFactory: DliteRoute/*s*/.PropTypes.func.isRequired,
                onRef: DliteRoute/*s*/.PropTypes.func
            },
            componentDidMount: function() {
                this.props.onRef && this.props.onRef(this.refs.root)
            },
            componentWillUnmount: function() {
                this.props.onRef && this.props.onRef(null)
            },
            getDliteRoute: function() {
                return this.props.route
            },
            render: function() {
                return DliteRouteProvider/*l*/(this.props.childFactory(), {
                    ref: "root"
                })
            }
        });
    module/*i*/.exports = React/*u*/
});