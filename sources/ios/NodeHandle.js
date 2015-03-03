__d("NodeHandle",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = {
        injection: {
            injectImplementation: function(global/*e*/) {
                o._Implementation = global/*e*/
            }
        },
        _Implementation: null,
        getRootNodeID: function(global/*e*/) {
            return o._Implementation.getRootNodeID(global/*e*/)
        }
    };
    module/*i*/.exports = o
});