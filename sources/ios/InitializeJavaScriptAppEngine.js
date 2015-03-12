__d("InitializeJavaScriptAppEngine",["JSTimers","RCTDeviceEventEmitter","ErrorUtils","RKAlertManager","NativeModules","errorToString","loadSourceMap","Promise","XMLHttpRequest","fetch"],function (e, t) {
    function n(e) {
        if (GLOBAL.console.error("Error: \n stack: \n" + e.stack + "\n URL: " + e.sourceURL + "\n line: " + e.line + "\n message: " + e.message), NativeModules/*d*/ && (NativeModules/*d*/.reportUnhandledException(e.message, errorToString/*h*/(e)), __DEV__)) try {
            var t = loadSourceMap/*f*/(),
                n = errorToString/*h*/(e, t);
            NativeModules/*d*/.updateExceptionMessage(e.message, n)
        } catch (r) {
            GLOBAL.console.error("#CLOWNTOWN (error while displaying error): " + r.message)
        }
    }

    function r() {
        ErrorUtils/*c*/.setGlobalHandler(n)
    }

    function i() {
        function e(e) {
            return new Error("You are trying to render the global " + e + " variable as a React element. You probably forgot to require " + e + ".")
        }
        GLOBAL.Text = {get defaultProps() {
                throw e("Text")
            }
        }, GLOBAL.Image = {get defaultProps() {
                throw e("Image")
            }
        }, GLOBAL.document = {
            body: {},
            createElement: function() {
                return {}
            }
        }
    }

    function o() {
        GLOBAL.setTimeout = JSTimers/*u*/.setTimeout, GLOBAL.setInterval = JSTimers/*u*/.setInterval, GLOBAL.setImmediate = JSTimers/*u*/.setImmediate, GLOBAL.clearTimeout = JSTimers/*u*/.clearTimeout, GLOBAL.clearInterval = JSTimers/*u*/.clearInterval, GLOBAL.clearImmediate = JSTimers/*u*/.clearImmediate, GLOBAL.cancelAnimationFrame = JSTimers/*u*/.clearInterval, GLOBAL.requestAnimationFrame = function(e) {
            return JSTimers/*u*/.requestAnimationFrame(e)
        }
    }

    function a() {
        GLOBAL.alert || (GLOBAL.alert = function(e) {
            var t = {
                title: "Alert",
                message: "" + e,
                buttons: [{
                    cancel: "Okay"
                }]
            };
            RKAlertManager/*p*/.alertWithArgs(t, null)
        })
    }

    function s() {
        GLOBAL.Promise = t("Promise")
    }

    function l() {
        GLOBAL.XMLHttpRequest = t("XMLHttpRequest"), GLOBAL.fetch = t("fetch")
    }
    var JSTimers/*u*/ = t("JSTimers");
    t("RCTDeviceEventEmitter");
    var ErrorUtils/*c*/ = t("ErrorUtils"),
        RKAlertManager/*p*/ = t("RKAlertManager"),
        NativeModules/*d*/ = t("NativeModules").RKExceptionsManager,
        errorToString/*h*/ = t("errorToString"),
        loadSourceMap/*f*/ = t("loadSourceMap");
    "undefined" == typeof GLOBAL && (GLOBAL = this), "undefined" == typeof window && (window = GLOBAL), r(), i(), o(), a(), s(), l()
});