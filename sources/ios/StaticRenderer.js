__d("StaticRenderer",["React"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("React"),
        a = o.createClass({
            displayName: "StaticRenderer",
            propTypes: {
                shouldUpdate: o.PropTypes.bool.isRequired,
                render: o.PropTypes.func.isRequired
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