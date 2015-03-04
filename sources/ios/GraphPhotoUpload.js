__d("GraphPhotoUpload",["Map","RCTDeviceEventEmitter","NativeModules","mapObject"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        c || (c = new Map/*a*/, RCTDeviceEventEmitter/*s*/.addListener("GraphPhotoUploadDidProgress", function(global/*e*/) {
            var require/*t*/ = global/*e*/,
                requireDynamic/*n*/ = require/*t*/.id,
                requireLazy/*r*/ = require/*t*/.progress;
            if (c.has(requireDynamic/*n*/)) {
                var module/*i*/ = c.get(requireDynamic/*n*/),
                    o = module/*i*/.onProgress;
                o && o(requireLazy/*r*/)
            }
        }), RCTDeviceEventEmitter/*s*/.addListener("GraphPhotoUploadDidFail", function(global/*e*/) {
            var require/*t*/ = global/*e*/,
                requireDynamic/*n*/ = require/*t*/.id,
                requireLazy/*r*/ = require/*t*/.error;
            if (c.has(requireDynamic/*n*/)) {
                var module/*i*/ = c.get(requireDynamic/*n*/),
                    o = module/*i*/.onFailure;
                o && o(requireLazy/*r*/)
            }
            c.delete(requireDynamic/*n*/)
        }), RCTDeviceEventEmitter/*s*/.addListener("GraphPhotoUploadDidSucceed", function(global/*e*/) {
            var require/*t*/ = global/*e*/,
                requireDynamic/*n*/ = require/*t*/.id,
                requireLazy/*r*/ = require/*t*/.response;
            if (c.has(requireDynamic/*n*/)) {
                var module/*i*/ = c.get(requireDynamic/*n*/),
                    o = module/*i*/.onSuccess;
                o && o(requireLazy/*r*/)
            }
            c.delete(requireDynamic/*n*/)
        }))
    }
    var Map/*a*/ = require/*t*/("Map"),
        RCTDeviceEventEmitter/*s*/ = require/*t*/("RCTDeviceEventEmitter"),
        NativeModules/*l*/ = require/*t*/("NativeModules").RKGraphPhotoUpload,
        mapObject/*u*/ = require/*t*/("mapObject"),
        c = null,
        p = {
            upload: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                o();
                var requireLazy/*r*/ = !1,
                    module/*i*/ = mapObject/*u*/(requireDynamic/*n*/, function(global/*e*/) {
                        return function() {
                            return global/*e*/ && !requireLazy/*r*/ ? global/*e*/.apply(null, arguments) : void 0
                        }
                    });
                return NativeModules/*l*/.upload(global/*e*/, require/*t*/, function(global/*e*/) {
                    module/*i*/.onFailure(global/*e*/)
                }, function(global/*e*/) {
                    requireLazy/*r*/ || c.set(global/*e*/.id, module/*i*/)
                }), {
                    abort: function() {
                        requireLazy/*r*/ = !0
                    }
                }
            }
        };
    module/*i*/.exports = p
});