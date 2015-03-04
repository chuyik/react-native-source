__d("StaticRenderer",["React"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var React/*o*/ = require/*t*/("React"),
        a = React/*o*/.createClass({
            displayName: "StaticRenderer",
            propTypes: {
                shouldUpdate: React/*o*/.PropTypes.bool.isRequired,
                render: React/*o*/.PropTypes.func.isRequired
            },
            shouldComponentUpdate: function(global/*e*/) {
                return global/*e*/.shouldUpdate
            },
            render: function() {
                return this.props.render()
            }
        });
    module/*i*/.exports = a
});