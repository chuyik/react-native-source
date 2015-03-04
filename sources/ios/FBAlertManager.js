__d("FBAlertManager",["RKAlertManager","fbt"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var RKAlertManager/*o*/ = require/*t*/("RKAlertManager"),
        fbt/*a*/ = require/*t*/("fbt"),
        s = {
            alert: function(global/*e*/) {
                RKAlertManager/*o*/.alertWithArgs({
                    title: fbt/*a*/({
                        type: "text",
                        texts: ["Alert"],
                        desc: "A generic title for an alert window"
                    }),
                    message: global/*e*/,
                    buttons: [{
                        cancel: fbt/*a*/({
                            type: "text",
                            texts: ["Okay"],
                            desc: "A generic okay button for an alert window"
                        })
                    }]
                }, null)
            },
            alertWithArgs: RKAlertManager/*o*/.alertWithArgs
        };
    module/*i*/.exports = s
});