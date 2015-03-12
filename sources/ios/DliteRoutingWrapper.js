__d("DliteRoutingWrapper",["DliteRoute","DliteRouteProvider","React","cloneWithProps"],function (e, t, n, r, i) {
    "use strict";
    var DliteRoute/*o*/ = t("DliteRoute"),
        DliteRouteProvider/*a*/ = t("DliteRouteProvider"),
        React/*s*/ = t("React"),
        cloneWithProps/*l*/ = t("cloneWithProps"),
        u = React/*s*/.createClass({
            displayName: "DliteRoutingWrapper",
            mixins: [DliteRouteProvider/*a*/.Mixin],
            propTypes: {
                route: React/*s*/.PropTypes.instanceOf(DliteRoute/*o*/).isRequired,
                childFactory: React/*s*/.PropTypes.func.isRequired,
                onRef: React/*s*/.PropTypes.func
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
                return cloneWithProps/*l*/(this.props.childFactory(), {
                    ref: "root"
                })
            }
        });
    i.exports = u
});