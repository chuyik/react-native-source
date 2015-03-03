__d("FBAlertManager",["RKAlertManager","fbt"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("RKAlertManager"),
        a = require/*t*/("fbt"),
        s = {
            alert: function(global/*e*/) {
                o.alertWithArgs({
                    title: a({
                        type: "text",
                        texts: ["Alert"],
                        desc: "A generic title for an alert window"
                    }),
                    message: global/*e*/,
                    buttons: [{
                        cancel: a({
                            type: "text",
                            texts: ["Okay"],
                            desc: "A generic okay button for an alert window"
                        })
                    }]
                }, null)
            },
            alertWithArgs: o.alertWithArgs
        };
    module/*i*/.exports = s
});