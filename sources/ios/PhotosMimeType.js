__d("PhotosMimeType",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        "use strict";
        return this instanceof o == !1 ? new o(global/*e*/) : void(this.$PhotosMimeType_parts = global/*e*/.split("/"))
    }
    o.prototype.isImage = function() {
        "use strict";
        return "image" === this.$PhotosMimeType_parts[0]
    }, exports/*o.prototype.isJpeg*/ = function() {
        "use strict";
        return this.isImage() && ("jpeg" === this.$PhotosMimeType_parts[1] || "pjpeg" === this.$PhotosMimeType_parts[1])
    }, module/*i*/.exports = o
});