__d("cloneWithProps",["ReactElement","ReactPropTransferer","keyOf","warning"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        __DEV__ && warning/*u*/(!e.ref, "You are calling cloneWithProps() on ReactElement/*a*/ child with ReactElement/*a*/ ref. This is dangerous because you're creating ReactElement/*a*/ new child which will not be added as ReactElement/*a*/ ref to its parent.");
        var n = ReactPropTransferer/*s*/.mergeProps(t, e.props);
        return !n.hasOwnProperty(c) && e.props.hasOwnProperty(c) && (n.children = e.props.children), ReactElement/*a*/.createElement(e.type, n)
    }
    var ReactElement/*a*/ = t("ReactElement"),
        ReactPropTransferer/*s*/ = t("ReactPropTransferer"),
        keyOf/*l*/ = t("keyOf"),
        warning/*u*/ = t("warning"),
        c = keyOf/*l*/({
            children: null
        });
    i.exports = o
});