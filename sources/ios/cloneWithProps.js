__d("cloneWithProps",["ReactElement","ReactPropTransferer","keyOf","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        __DEV__ && warning/*u*/(!global/*e*/.ref, "You are calling cloneWithProps() on ReactElement/*a*/ child with ReactElement/*a*/ ref. This is dangerous because you're creating ReactElement/*a*/ new child which will not be added as ReactElement/*a*/ ref to its parent.");
        var requireDynamic/*n*/ = ReactPropTransferer/*s*/.mergeProps(require/*t*/, global/*e*/.props);
        return !requireDynamic/*n*/.hasOwnProperty(c) && global/*e*/.props.hasOwnProperty(c) && (requireDynamic/*n*/.children = global/*e*/.props.children), ReactElement/*a*/.createElement(global/*e*/.type, requireDynamic/*n*/)
    }
    var ReactElement/*a*/ = require/*t*/("ReactElement"),
        ReactPropTransferer/*s*/ = require/*t*/("ReactPropTransferer"),
        keyOf/*l*/ = require/*t*/("keyOf"),
        warning/*u*/ = require/*t*/("warning"),
        c = keyOf/*l*/({
            children: null
        });
    module/*i*/.exports = o
});