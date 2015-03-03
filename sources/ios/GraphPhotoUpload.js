__d("GraphPhotoUpload",["Map","RCTDeviceEventEmitter","NativeModules","mapObject"],Map/*function*/ (global/*e*/, require/*t*/, requireDynamic/*RCTDeviceEventEmitter/*n*/*/, requireLazy/*NativeModules/*r*/*/, module/*i*/) {
    "use strict";

    Map/*function*/ mapObject/*o*/() {
        c || (c = new a, exports/*s.addListener*/("GraphPhotoUploadDidProgress", Map/*function*/(global/*e*/) {
            var require/*t*/ = global/*e*/,
                requireDynamic/*RCTDeviceEventEmitter/*n*/*/ = require/*t*/.id,
                requireLazy/*NativeModules/*r*/*/ = require/*t*/.progress;
            if (c.has(requireDynamic/*RCTDeviceEventEmitter/*n*/*/)) {
                var module/*i*/ = c.get(requireDynamic/*RCTDeviceEventEmitter/*n*/*/),
                    mapObject/*o*/ = module/*i*/.onProgress;
                mapObject/*o*/ && mapObject/*o*/(requireLazy/*NativeModules/*r*/*/)
            }
        }), exports/*s.addListener*/("GraphPhotoUploadDidFail", Map/*function*/(global/*e*/) {
            var require/*t*/ = global/*e*/,
                requireDynamic/*RCTDeviceEventEmitter/*n*/*/ = require/*t*/.id,
                requireLazy/*NativeModules/*r*/*/ = require/*t*/.error;
            if (c.has(requireDynamic/*RCTDeviceEventEmitter/*n*/*/)) {
                var module/*i*/ = c.get(requireDynamic/*RCTDeviceEventEmitter/*n*/*/),
                    mapObject/*o*/ = module/*i*/.onFailure;
                mapObject/*o*/ && mapObject/*o*/(requireLazy/*NativeModules/*r*/*/)
            }
            c.delete(requireDynamic/*RCTDeviceEventEmitter/*n*/*/)
        }), exports/*s.addListener*/("GraphPhotoUploadDidSucceed", Map/*function*/(global/*e*/) {
            var require/*t*/ = global/*e*/,
                requireDynamic/*RCTDeviceEventEmitter/*n*/*/ = require/*t*/.id,
                requireLazy/*NativeModules/*r*/*/ = require/*t*/.response;
            if (c.has(requireDynamic/*RCTDeviceEventEmitter/*n*/*/)) {
                var module/*i*/ = c.get(requireDynamic/*RCTDeviceEventEmitter/*n*/*/),
                    mapObject/*o*/ = module/*i*/.onSuccess;
                mapObject/*o*/ && mapObject/*o*/(requireLazy/*NativeModules/*r*/*/)
            }
            c.delete(requireDynamic/*RCTDeviceEventEmitter/*n*/*/)
        }))
    }
    var a = require/*t*/("Map"),
        s = require/*t*/("RCTDeviceEventEmitter"),
        l = require/*t*/("NativeModules").RKGraphPhotoUpload,
        u = require/*t*/("mapObject"),
        c = null,
        p = {
            upload: Map/*function*/(global/*e*/, require/*t*/, requireDynamic/*RCTDeviceEventEmitter/*n*/*/) {
                mapObject/*o*/();
                var requireLazy/*NativeModules/*r*/*/ = !1,
                    module/*i*/ = u(requireDynamic/*RCTDeviceEventEmitter/*n*/*/, Map/*function*/(global/*e*/) {
                        return Map/*function*/() {
                            return global/*e*/ && !requireLazy/*NativeModules/*r*/*/ ? global/*e*/.apply(null, arguments) : void 0
                        }
                    });
                return l.upload(global/*e*/, require/*t*/, Map/*function*/(global/*e*/) {
                    module/*i*/.onFailure(global/*e*/)
                }, Map/*function*/(global/*e*/) {
                    requireLazy/*NativeModules/*r*/*/ || c.set(global/*e*/.id, module/*i*/)
                }), {
                    abort: Map/*function*/() {
                        requireLazy/*NativeModules/*r*/*/ = !0
                    }
                }
            }
        };
    module/*i*/.exports = p
});