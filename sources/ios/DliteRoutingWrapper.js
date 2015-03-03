__d("DliteRoutingWrapper",["DliteRoute","DliteRouteProvider","React","cloneWithProps"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteRoute"),
        a = require/*t*/("DliteRouteProvider"),
        s = require/*t*/("React"),
        l = require/*t*/("cloneWithProps"),
        u = s.createClass({
            displayName: "DliteRoutingWrapper",
            mixins: [a.Mixin],
            propTypes: {
                route: s.PropTypes.instanceOf(o).isRequired,
                childFactory: s.PropTypes.func.isRequired,
                onRef: s.PropTypes.func
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
                return l(this.props.childFactory(), {
                    ref: "root"
                })
            }
        });
    module/*i*/.exports = u
});