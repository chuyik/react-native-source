__d("getEventTarget",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = global/*e*/.target || global/*e*/.srcElement || window;
        return 3 === require/*t*/.nodeType ? require/*t*/.parentNode : require/*t*/
    }
    module/*i*/.exports = o
});