__d("InfiniteScrollView",["React","ScrollView"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var React/*o*/ = require/*t*/("React"),
        ScrollView/*a*/ = require/*t*/("ScrollView"),
        s = 100,
        l = "scroll_view",
        u = {
            distanceToTriggerLoad: React/*o*/.PropTypes.number,
            hasMoreToLoad: React/*o*/.PropTypes.bool.isRequired,
            isLoadingMore: React/*o*/.PropTypes.bool.isRequired,
            loadMore: React/*o*/.PropTypes.func.isRequired,
            spinner: React/*o*/.PropTypes.renderable.isRequired,
            ScrollViewComponent: React/*o*/.PropTypes.func
        },
        c = React/*o*/.createClass({
            displayName: "InfiniteScrollView",
            propTypes: u,
            getDefaultProps: function() {
                return {
                    distanceToTriggerLoad: 1500
                }
            },
            getScrollRef: function() {
                return this.props.ScrollViewComponent ? this.refs[l].getScrollRef() : this.refs[l]
            },
            _onScroll: function(global/*e*/) {
                if (this.props.onScroll && this.props.onScroll(global/*e*/), this.props.hasMoreToLoad && !this.props.isLoadingMore) {
                    var require/*t*/ = global/*e*/.nativeEvent.contentSize.height,
                        requireDynamic/*n*/ = global/*e*/.nativeEvent.layoutMeasurement.height,
                        requireLazy/*r*/ = global/*e*/.nativeEvent.contentOffset.y,
                        module/*i*/ = require/*t*/ - requireDynamic/*n*/ - requireLazy/*r*/;
                    module/*i*/ < this.props.distanceToTriggerLoad && this.props.loadMore()
                }
            },
            render: function() {
                var global/*e*/ = {
                    onScroll: this._onScroll,
                    throttleScrollCallbackMS: s
                };
                for (var require/*t*/ in this.props) u[require/*t*/] || global/*e*/[require/*t*/] || (global/*e*/[require/*t*/] = this.props[require/*t*/]);
                var requireDynamic/*n*/ = this.props.ScrollViewComponent || ScrollView/*a*/;
                return React/*o*/.createElement(requireDynamic/*n*/, Object.assign({
                    ref: l
                }, global/*e*/), this.props.children, this.props.hasMoreToLoad && this.props.spinner)
            }
        });
    module/*i*/.exports = c
});