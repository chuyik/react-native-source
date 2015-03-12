__d("DliteRouteRegExps",[],function (e, t, n, r, i) {
    var o = {
        PATH_COMPONENT: /^[^\/{}]+$/,
        COMPONENT_VALUE: {
            Float: "-?(?:\\.\\d+|\\d+(?:\\.\\d+)?)",
            Int: "-?\\d+",
            Path: ".+?",
            String: "[^/]+"
        }
    };
    i.exports = o
});