__d("InfiniteScrollView",["React","ScrollView"],function (e, t, n, r, i) {
    "use strict";
    var React/*o*/ = t("React"),
        ScrollView/*a*/ = t("ScrollView"),
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
            _onScroll: function(e) {
                if (this.props.onScroll && this.props.onScroll(e), this.props.hasMoreToLoad && !this.props.isLoadingMore) {
                    var t = e.nativeEvent.contentSize.height,
                        n = e.nativeEvent.layoutMeasurement.height,
                        r = e.nativeEvent.contentOffset.y,
                        i = t - n - r;
                    i < this.props.distanceToTriggerLoad && this.props.loadMore()
                }
            },
            render: function() {
                var e = {
                    onScroll: this._onScroll,
                    throttleScrollCallbackMS: s
                };
                for (var t in this.props) u[t] || e[t] || (e[t] = this.props[t]);
                var n = this.props.ScrollViewComponent || ScrollView/*a*/;
                return React/*o*/.createElement(n, Object.assign({
                    ref: l
                }, e), this.props.children, this.props.hasMoreToLoad && this.props.spinner)
            }
        });
    i.exports = c
});