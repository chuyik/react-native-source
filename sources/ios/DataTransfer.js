__d("DataTransfer",["PhotosMimeType","createArrayFrom","emptyFunction"],function (e, t, n, r, i) {
    function o(e) {
        return "file" == e.kind ? e.getAsFile() : void 0
    }

    function a(e) {
        "use strict";
        this.data = e, this.types = e.types ? createArrayFrom/*l*/(e.types) : []
    }
    var PhotosMimeType/*s*/ = t("PhotosMimeType"),
        createArrayFrom/*l*/ = t("createArrayFrom"),
        emptyFunction/*u*/ = t("emptyFunction"),
        c = new RegExp("\r\n", "g"),
        p = "\n",
        d = {
            "text/rtf": 1,
            "text/html": 1
        };
    a.prototype.isRichText = function() {
        "use strict";
        return this.types.some(function(e) {
            return d[e]
        })
    }, a.prototype.getText = function() {
        "use strict";
        var e;
        return this.data.getData && (this.types.length ? -1 != this.types.indexOf("text/plain") && (e = this.data.getData("text/plain")) : e = this.data.getData("Text")), e ? e.replace(c, p) : null
    }, a.prototype.getHTML = function() {
        "use strict";
        if (this.data.getData) {
            if (!this.types.length) return this.data.getData("Text");
            if (-1 != this.types.indexOf("text/html")) return this.data.getData("text/html")
        }
    }, a.prototype.isImage = function() {
        "use strict";
        var e = this.types.some(function(e) {
            return -1 != e.indexOf("application/x-moz-file")
        });
        if (e) return !0;
        for (var t = this.getFiles(), n = 0; n < t.length; n++) {
            var r = t[n].type;
            if (!PhotosMimeType/*s*/(r).isImage()) return !1
        }
        return !0
    }, a.prototype.getCount = function() {
        "use strict";
        return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null
    }, a.prototype.getFiles = function() {
        "use strict";
        return this.data.items ? Array.prototype.slice.call(this.data.items).map(o).filter(emptyFunction/*u*/.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : []
    }, a.prototype.hasFiles = function() {
        "use strict";
        return this.getFiles().length > 0
    }, i.exports = a
});