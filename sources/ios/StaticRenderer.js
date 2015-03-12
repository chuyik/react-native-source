__d("StaticRenderer",["React"],function (e, t, n, r, i) {
    "use strict";
    var React/*o*/ = t("React"),
        a = React/*o*/.createClass({
            displayName: "StaticRenderer",
            propTypes: {
                shouldUpdate: React/*o*/.PropTypes.bool.isRequired,
                render: React/*o*/.PropTypes.func.isRequired
            },
            shouldComponentUpdate: function(e) {
                return e.shouldUpdate
            },
            render: function() {
                return this.props.render()
            }
        });
    i.exports = a
});