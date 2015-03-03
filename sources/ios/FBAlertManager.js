__d("FBAlertManager",["RKAlertManager","fbt"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("RKAlertManager"),
        exports/*a*/ = require/*t*/("fbt"),
        RKAlertManager/*s*/ = {
            alert: function(global/*e*/) {
                o.alertWithArgs({
                    title: exports/*a*/({
                        type: "text",
                        fbt/*texts*/: ["Alert"],
                        desc: "A generic title for an alert window"
                    }),
                    message: global/*e*/,
                    buttons: [{
                        cancel: exports/*a*/({
                            type: "text",
                            fbt/*texts*/: ["Okay"],
                            desc: "A generic okay button for an alert window"
                        })
                    }]
                }, null)
            },
            alertWithArgs: o.alertWithArgs
        };
    module/*i*/.exports = RKAlertManager/*s*/
});