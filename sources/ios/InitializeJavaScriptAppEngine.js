__d("InitializeJavaScriptAppEngine",["JSTimers","RCTDeviceEventEmitter","ErrorUtils","RKAlertManager","NativeModules","errorToString","loadSourceMap","Promise","XMLHttpRequest","fetch"],function (global/*e*/, require/*t*/) {
    function n(global/*e*/) {
        if (GLOBAL.console.error("Error: \n stack: \n" + global/*e*/.stack + "\n URL: " + global/*e*/.sourceURL + "\n line: " + global/*e*/.line + "\n message: " + global/*e*/.message), d && (d.reportUnhandledException(global/*e*/.message, h(global/*e*/)), __DEV__)) try {
            var require/*t*/ = f(),
                n = h(global/*e*/, require/*t*/);
            d.updateExceptionMessage(global/*e*/.message, n)
        } catch (r) {
            GLOBAL.console.error("#CLOWNTOWN (error while displaying error): " + r.message)
        }
    }

    function r() {
        c.setGlobalHandler(n)
    }

    function i() {
        function global/*e*/(global/*e*/) {
            return new Error("You are trying to render the global " + global/*e*/ + " variable as a React element. You probably forgot to require " + global/*e*/ + ".")
        }
        GLOBAL.Text = {get defaultProps() {
                throw global/*e*/("Text")
            }
        }, GLOBAL.Image = {get defaultProps() {
                throw global/*e*/("Image")
            }
        }, GLOBAL.document = {
            body: {},
            createElement: function() {
                return {}
            }
        }
    }

    function o() {
        GLOBAL.setTimeout = u.setTimeout, GLOBAL.setInterval = u.setInterval, GLOBAL.setImmediate = u.setImmediate, GLOBAL.clearTimeout = u.clearTimeout, GLOBAL.clearInterval = u.clearInterval, GLOBAL.clearImmediate = u.clearImmediate, GLOBAL.cancelAnimationFrame = u.clearInterval, GLOBAL.requestAnimationFrame = function(global/*e*/) {
            return u.requestAnimationFrame(global/*e*/)
        }
    }

    function a() {
        GLOBAL.alert || (GLOBAL.alert = function(global/*e*/) {
            var require/*t*/ = {
                title: "Alert",
                message: "" + global/*e*/,
                buttons: [{
                    cancel: "Okay"
                }]
            };
            p.alertWithArgs(require/*t*/, null)
        })
    }

    function s() {
        GLOBAL.Promise = require/*t*/("Promise")
    }

    function l() {
        GLOBAL.XMLHttpRequest = require/*t*/("XMLHttpRequest"), GLOBAL.fetch = require/*t*/("fetch")
    }
    var u = require/*t*/("JSTimers");
    require/*t*/("RCTDeviceEventEmitter");
    var c = require/*t*/("ErrorUtils"),
        p = require/*t*/("RKAlertManager"),
        d = require/*t*/("NativeModules").RKExceptionsManager,
        h = require/*t*/("errorToString"),
        f = require/*t*/("loadSourceMap");
    "undefined" == typeof GLOBAL && (GLOBAL = this), "undefined" == typeof window && (window = GLOBAL), r(), i(), o(), a(), s(), l()
});