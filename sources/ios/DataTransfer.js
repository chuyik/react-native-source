__d("DataTransfer",["PhotosMimeType","createArrayFrom","emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return "file" == global/*e*/.kind ? global/*e*/.getAsFile() : void 0
    }

    function a(global/*e*/) {
        "use strict";
        this.data = global/*e*/, this.types = global/*e*/.types ? createArrayFrom/*l*/(global/*e*/.types) : []
    }
    var PhotosMimeType/*s*/ = require/*t*/("PhotosMimeType"),
        createArrayFrom/*l*/ = require/*t*/("createArrayFrom"),
        emptyFunction/*u*/ = require/*t*/("emptyFunction"),
        c = new RegExp("\requireLazy/*r*/\requireDynamic/*n*/", "g"),
        p = "\requireDynamic/*n*/",
        d = {
            "text/rtf": 1,
            "text/html": 1
        };
    a.prototype.isRichText = function() {
        "use strict";
        return this.types.some(function(global/*e*/) {
            return d[global/*e*/]
        })
    }, a.prototype.getText = function() {
        "use strict";
        var global/*e*/;
        return this.data.getData && (this.types.length ? -1 != this.types.indexOf("text/plain") && (global/*e*/ = this.data.getData("text/plain")) : global/*e*/ = this.data.getData("Text")), global/*e*/ ? global/*e*/.replace(c, p) : null
    }, a.prototype.getHTML = function() {
        "use strict";
        if (this.data.getData) {
            if (!this.types.length) return this.data.getData("Text");
            if (-1 != this.types.indexOf("text/html")) return this.data.getData("text/html")
        }
    }, a.prototype.isImage = function() {
        "use strict";
        var global/*e*/ = this.types.some(function(global/*e*/) {
            return -1 != global/*e*/.indexOf("application/x-moz-file")
        });
        if (global/*e*/) return !0;
        for (var require/*t*/ = this.getFiles(), requireDynamic/*n*/ = 0; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/].type;
            if (!PhotosMimeType/*s*/(requireLazy/*r*/).isImage()) return !1
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
    }, module/*i*/.exports = a
});