__d("deepFreezeAndThrowOnMutationInDev",[],function (e, t, n, r, i) {
    function o(e) {
        if (__DEV__) {
            if ("object" != typeof e || null === e || Object.isFrozen(e) || Object.isSealed(e)) return;
            for (var t in e) e.hasOwnProperty(t) && (e.__defineGetter__(t, s.bind(null, e[t])), e.__defineSetter__(t, a.bind(null, t)), o(e[t]));
            Object.freeze(e), Object.seal(e)
        }
    }

    function a(e, t) {
        throw Error("You attempted to set the key `" + e + "` with the value `" + JSON.stringify(t) + "` on an object that is meant to be immutable and has been frozen.")
    }

    function s(e) {
        return e
    }
    i.exports = o
});