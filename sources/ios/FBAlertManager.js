__d("FBAlertManager",["RKAlertManager","fbt"],function (e, t, n, r, i) {
    "use strict";
    var RKAlertManager/*o*/ = t("RKAlertManager"),
        fbt/*a*/ = t("fbt"),
        s = {
            alert: function(e) {
                RKAlertManager/*o*/.alertWithArgs({
                    title: fbt/*a*/({
                        type: "text",
                        texts: ["Alert"],
                        desc: "A generic title for an alert window"
                    }),
                    message: e,
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
    i.exports = s
});