__d("cloneWithProps",["ReactElement","ReactPropTransferer","keyOf","warning"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*keyOf/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        __DEV__ && u(!global/*e*/.ref, "You are calling cloneWithProps() on a child with a ref. This is dangerous because you're creating a new child which will not be added as a ref to its parent.");
        var requireDynamic/*keyOf/*n*/*/ = warning/*s*/.mergeProps(require/*exports/*t*/*/, global/*e*/.props);
        return !requireDynamic/*keyOf/*n*/*/.hasOwnProperty(c) && global/*e*/.props.hasOwnProperty(c) && (requireDynamic/*keyOf/*n*/*/.children = global/*e*/.props.children), ReactPropTransferer/*a.createElement*/(global/*e*/.type, requireDynamic/*keyOf/*n*/*/)
    }
    var a = require/*exports/*t*/*/("ReactElement"),
        warning/*s*/ = require/*exports/*t*/*/("ReactPropTransferer"),
        l = require/*exports/*t*/*/("keyOf"),
        u = require/*exports/*t*/*/("warning"),
        c = l({
            children: null
        });
    module/*i*/.exports = o
});