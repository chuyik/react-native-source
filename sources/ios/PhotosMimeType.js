__d("PhotosMimeType",[],function (e, t, n, r, i) {
    function o(e) {
        "use strict";
        return this instanceof o == !1 ? new o(e) : void(this.$PhotosMimeType_parts = e.split("/"))
    }
    o.prototype.isImage = function() {
        "use strict";
        return "image" === this.$PhotosMimeType_parts[0]
    }, o.prototype.isJpeg = function() {
        "use strict";
        return this.isImage() && ("jpeg" === this.$PhotosMimeType_parts[1] || "pjpeg" === this.$PhotosMimeType_parts[1])
    }, i.exports = o
});