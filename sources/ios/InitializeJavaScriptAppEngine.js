__d("InitializeJavaScriptAppEngine",["JSTimers","RCTDeviceEventEmitter","ErrorUtils","RKAlertManager","NativeModules","errorToString","loadSourceMap","Promise","XMLHttpRequest","fetch"],function (global/*e*/, require/*JSTimers/*t*/*/) {
    function exports/*RCTDeviceEventEmitter/*n*/*/(global/*e*/) {
        if (GLOBAL.console.error("Error: \exports/*RCTDeviceEventEmitter/*n*/*/ stack: \exports/*RCTDeviceEventEmitter/*n*/*/" + global/*e*/.stack + "\exports/*RCTDeviceEventEmitter/*n*/*/ URL: " + global/*e*/.sourceURL + "\exports/*RCTDeviceEventEmitter/*n*/*/ line: " + global/*e*/.line + "\exports/*RCTDeviceEventEmitter/*n*/*/ message: " + global/*e*/.message), requireDynamic/*d*/ && (requireDynamic/*d*/.reportUnhandledException(global/*e*/.message, requireLazy/*h*/(global/*e*/)), module/*__DEV__*/)) try {
            var require/*JSTimers/*t*/*/ = f(),
                exports/*RCTDeviceEventEmitter/*n*/*/ = requireLazy/*h*/(global/*e*/, require/*JSTimers/*t*/*/);
            requireDynamic/*d*/.updateExceptionMessage(global/*e*/.message, exports/*RCTDeviceEventEmitter/*n*/*/)
        } catch (r) {
            GLOBAL.console.error("#CLOWNTOWN (error while displaying error): " + r.message)
        }
    }

    function r() {
        c.setGlobalHandler(exports/*RCTDeviceEventEmitter/*n*/*/)
    }

    function i() {
        function global/*e*/(global/*e*/) {
            return new Error("You are trying to render the global " + global/*e*/ + " variable as a React element. You probably forgot to require " + global/*e*/ + ".")
        }
        GLOBAL.Text = {get defaultProps() {
                throw global/*e*/("Text")
            }
        }, ErrorUtils/*GLOBAL.Image*/ = {get defaultProps() {
                throw global/*e*/("Image")
            }
        }, RKAlertManager/*GLOBAL.document*/ = {
            body: {},
            NativeModules/*createElement*/: function() {
                return {}
            }
        }
    }

    function o() {
        GLOBAL.setTimeout = u.setTimeout, errorToString/*GLOBAL.setInterval*/ = u.setInterval, loadSourceMap/*GLOBAL.setImmediate*/ = u.setImmediate, Promise/*GLOBAL.clearTimeout*/ = u.clearTimeout, XMLHttpRequest/*GLOBAL.clearInterval*/ = u.clearInterval, fetch/*GLOBAL.clearImmediate*/ = u.clearImmediate, GLOBAL.cancelAnimationFrame = u.clearInterval, GLOBAL.requestAnimationFrame = function(global/*e*/) {
            return u.requestAnimationFrame(global/*e*/)
        }
    }

    function a() {
        GLOBAL.alert || (GLOBAL.alert = function(global/*e*/) {
            var require/*JSTimers/*t*/*/ = {
                title: "Alert",
                message: "" + global/*e*/,
                buttons: [{
                    cancel: "Okay"
                }]
            };
            p.alertWithArgs(require/*JSTimers/*t*/*/, null)
        })
    }

    function s() {
        GLOBAL.Promise = require/*JSTimers/*t*/*/("Promise")
    }

    function l() {
        GLOBAL.XMLHttpRequest = require/*JSTimers/*t*/*/("XMLHttpRequest"), GLOBAL.fetch = require/*JSTimers/*t*/*/("fetch")
    }
    var u = require/*JSTimers/*t*/*/("JSTimers");
    require/*JSTimers/*t*/*/("RCTDeviceEventEmitter");
    var c = require/*JSTimers/*t*/*/("ErrorUtils"),
        p = require/*JSTimers/*t*/*/("RKAlertManager"),
        requireDynamic/*d*/ = require/*JSTimers/*t*/*/("NativeModules").RKExceptionsManager,
        requireLazy/*h*/ = require/*JSTimers/*t*/*/("errorToString"),
        f = require/*JSTimers/*t*/*/("loadSourceMap");
    "undefined" == typeof GLOBAL && (GLOBAL = this), "undefined" == typeof window && (window = GLOBAL), r(), i(), o(), a(), s(), l()
});