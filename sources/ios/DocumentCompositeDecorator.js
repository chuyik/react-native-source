__d("DocumentCompositeDecorator",["fillArray"],function (e, t, n, r, i) {
    function o(e) {
        "use strict";
        this.$DocumentCompositeDecorator_decorators = e.slice(), this.$DocumentCompositeDecorator_componentMap = {}
    }

    function a(e, t, n) {
        for (var r = t; n > r; r++)
            if (null != e[r]) return !1;
        return !0
    }

    function s(e, t, n, r) {
        for (var i = t; n > i; i++) e[i] = r
    }
    var fillArray/*l*/ = t("fillArray");
    o.prototype.getDecorations = function(e) {
        "use strict";
        var t = fillArray/*l*/(e.getText().length, null),
            n = 0,
            r = this.$DocumentCompositeDecorator_componentMap;
        return this.$DocumentCompositeDecorator_decorators.forEach(function(i) {
            var o = i.getStrategy(),
                fillArray/*l*/ = i.getComponent();
            o(e, function(e, i) {
                a(t, e, i) && (r[n] = fillArray/*l*/, s(t, e, i, n), n++)
            })
        }), t
    }, o.prototype.getComponentForKey = function(e) {
        "use strict";
        return this.$DocumentCompositeDecorator_componentMap[e]
    }, i.exports = o
});