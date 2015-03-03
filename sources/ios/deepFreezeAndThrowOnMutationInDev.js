__d("deepFreezeAndThrowOnMutationInDev",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        if (__DEV__) {
            if ("object" != typeof global/*e*/ || null === global/*e*/ || Object.isFrozen(global/*e*/) || Object.isSealed(global/*e*/)) return;
            for (var require/*t*/ in global/*e*/) global/*e*/.hasOwnProperty(require/*t*/) && (global/*e*/.__defineGetter__(require/*t*/, s.bind(null, global/*e*/[require/*t*/])), global/*e*/.__defineSetter__(require/*t*/, a.bind(null, require/*t*/)), o(global/*e*/[require/*t*/]));
            Object.freeze(global/*e*/), Object.seal(global/*e*/)
        }
    }

    function a(global/*e*/, require/*t*/) {
        throw Error("You attempted to set the key `" + global/*e*/ + "` with the value `" + JSON.stringify(require/*t*/) + "` on an object that is meant to be immutable and has been frozen.")
    }

    function s(global/*e*/) {
        return global/*e*/
    }
    module/*i*/.exports = o
});