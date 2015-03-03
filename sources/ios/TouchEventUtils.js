__d("TouchEventUtils",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = {
        extractSingleTouch: function(global/*e*/) {
            var require/*t*/ = global/*e*/.touches,
                requireDynamic/*n*/ = global/*e*/.changedTouches,
                requireLazy/*r*/ = require/*t*/ && require/*t*/.length > 0,
                module/*i*/ = requireDynamic/*n*/ && requireDynamic/*n*/.length > 0;
            return !requireLazy/*r*/ && module/*i*/ ? requireDynamic/*n*/[0] : requireLazy/*r*/ ? require/*t*/[0] : global/*e*/
        }
    };
    module/*i*/.exports = o
});