__d("InfiniteScrollView",["React","ScrollView"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("React"),
        exports/*a*/ = require/*t*/("ScrollView"),
        React/*s*/ = 100,
        ScrollView/*l*/ = "scroll_view",
        u = {
            distanceToTriggerLoad: o.PropTypes.number,
            hasMoreToLoad: o.PropTypes.bool.isRequired,
            isLoadingMore: o.PropTypes.bool.isRequired,
            loadMore: o.PropTypes.func.isRequired,
            spinner: o.PropTypes.renderable.isRequired,
            ScrollViewComponent: o.PropTypes.func
        },
        c = o.createClass({
            displayName: "InfiniteScrollView",
            propTypes: u,
            getDefaultProps: function() {
                return {
                    distanceToTriggerLoad: 1500
                }
            },
            getScrollRef: function() {
                return this.props.ScrollViewComponent ? this.refs[ScrollView/*l*/].getScrollRef() : this.refs[ScrollView/*l*/]
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
                    throttleScrollCallbackMS: React/*s*/
                };
                for (var require/*t*/ in this.props) u[require/*t*/] || global/*e*/[require/*t*/] || (global/*e*/[require/*t*/] = this.props[require/*t*/]);
                var requireDynamic/*n*/ = this.props.ScrollViewComponent || exports/*a*/;
                return o.createElement(requireDynamic/*n*/, Object.assign({
                    ref: ScrollView/*l*/
                }, global/*e*/), this.props.children, this.props.hasMoreToLoad && this.props.spinner)
            }
        });
    module/*i*/.exports = c
});