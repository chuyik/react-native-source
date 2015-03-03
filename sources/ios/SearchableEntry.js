__d("SearchableEntry",["invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        switch (typeof global/*e*/) {
            case "string":
                return global/*e*/;
            case "object":
                return "";
            default:
                return ""
        }
    }

    function a(global/*e*/) {
        "use strict";
        (!global/*e*/.uniqueID || "string" != typeof global/*e*/.uniqueID && "number" != typeof global/*e*/.uniqueID) && s(0, "SearchableEntry must include a valid unique ID value, %s provided.", global/*e*/.uniqueID), global/*e*/.title && "string" == typeof global/*e*/.title || s(0, "SearchableEntry must include a valid title string, %s provided.", global/*e*/.title), this.$SearchableEntry_uniqueID = global/*e*/.uniqueID + "", this.$SearchableEntry_title = global/*e*/.title, this.$SearchableEntry_order = global/*e*/.order || 0, this.$SearchableEntry_subtitle = o(global/*e*/.subtitle), this.$SearchableEntry_keywordString = global/*e*/.keywordString || "", this.$SearchableEntry_photo = global/*e*/.photo || "", this.$SearchableEntry_uri = global/*e*/.uri || "", this.$SearchableEntry_type = global/*e*/.type || "", this.$SearchableEntry_auxiliaryData = global/*e*/.auxiliaryData || null
    }
    var s = require/*t*/("invariant");
    a.prototype.getUniqueID = function() {
        "use strict";
        return this.$SearchableEntry_uniqueID
    }, a.prototype.getOrder = function() {
        "use strict";
        return this.$SearchableEntry_order
    }, a.prototype.getTitle = function() {
        "use strict";
        return this.$SearchableEntry_title
    }, a.prototype.getSubtitle = function() {
        "use strict";
        return this.$SearchableEntry_subtitle
    }, a.prototype.getKeywordString = function() {
        "use strict";
        return this.$SearchableEntry_keywordString
    }, a.prototype.getPhoto = function() {
        "use strict";
        return this.$SearchableEntry_photo
    }, a.prototype.getURI = function() {
        "use strict";
        return this.$SearchableEntry_uri
    }, a.prototype.getType = function() {
        "use strict";
        return this.$SearchableEntry_type
    }, a.prototype.getAuxiliaryData = function() {
        "use strict";
        return this.$SearchableEntry_auxiliaryData
    }, module/*i*/.exports = a
});