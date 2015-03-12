__d("GraphPhotoUpload",["Map","RCTDeviceEventEmitter","NativeModules","mapObject"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        c || (c = new Map/*a*/, RCTDeviceEventEmitter/*s*/.addListener("GraphPhotoUploadDidProgress", function(e) {
            var t = e,
                n = t.id,
                r = t.progress;
            if (c.has(n)) {
                var i = c.get(n),
                    o = i.onProgress;
                o && o(r)
            }
        }), RCTDeviceEventEmitter/*s*/.addListener("GraphPhotoUploadDidFail", function(e) {
            var t = e,
                n = t.id,
                r = t.error;
            if (c.has(n)) {
                var i = c.get(n),
                    o = i.onFailure;
                o && o(r)
            }
            c.delete(n)
        }), RCTDeviceEventEmitter/*s*/.addListener("GraphPhotoUploadDidSucceed", function(e) {
            var t = e,
                n = t.id,
                r = t.response;
            if (c.has(n)) {
                var i = c.get(n),
                    o = i.onSuccess;
                o && o(r)
            }
            c.delete(n)
        }))
    }
    var Map/*a*/ = t("Map"),
        RCTDeviceEventEmitter/*s*/ = t("RCTDeviceEventEmitter"),
        NativeModules/*l*/ = t("NativeModules").RKGraphPhotoUpload,
        mapObject/*u*/ = t("mapObject"),
        c = null,
        p = {
            upload: function(e, t, n) {
                o();
                var r = !1,
                    i = mapObject/*u*/(n, function(e) {
                        return function() {
                            return e && !r ? e.apply(null, arguments) : void 0
                        }
                    });
                return NativeModules/*l*/.upload(e, t, function(e) {
                    i.onFailure(e)
                }, function(e) {
                    r || c.set(e.id, i)
                }), {
                    abort: function() {
                        r = !0
                    }
                }
            }
        };
    i.exports = p
});