__d("NodeHandle",[],function (e, t, n, r, i) {
    var o = {
        injection: {
            injectImplementation: function(e) {
                o._Implementation = e
            }
        },
        _Implementation: null,
        getRootNodeID: function(e) {
            return o._Implementation.getRootNodeID(e)
        }
    };
    i.exports = o
});