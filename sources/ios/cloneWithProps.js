__d("cloneWithProps",["ReactElement","ReactPropTransferer","keyOf","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        __DEV__ && u(!global/*e*/.ref, "You are calling cloneWithProps() on a child with a ref. This is dangerous because you're creating a new child which will not be added as a ref to its parent.");
        var requireDynamic/*n*/ = s.mergeProps(require/*t*/, global/*e*/.props);
        return !requireDynamic/*n*/.hasOwnProperty(c) && global/*e*/.props.hasOwnProperty(c) && (requireDynamic/*n*/.children = global/*e*/.props.children), a.createElement(global/*e*/.type, requireDynamic/*n*/)
    }
    var a = require/*t*/("ReactElement"),
        s = require/*t*/("ReactPropTransferer"),
        l = require/*t*/("keyOf"),
        u = require/*t*/("warning"),
        c = l({
            children: null
        });
    module/*i*/.exports = o
});