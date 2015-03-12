__d("SearchableEntry",["invariant"],function (e, t, n, r, i) {
    function o(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "object":
                return "";
            default:
                return ""
        }
    }

    function a(e) {
        "use strict";
        (!e.uniqueID || "string" != typeof e.uniqueID && "number" != typeof e.uniqueID) && invariant/*s*/(0, "SearchableEntry must include a valid unique ID value, %invariant/*s*/ provided.", e.uniqueID), e.title && "string" == typeof e.title || invariant/*s*/(0, "SearchableEntry must include a valid title string, %invariant/*s*/ provided.", e.title), this.$SearchableEntry_uniqueID = e.uniqueID + "", this.$SearchableEntry_title = e.title, this.$SearchableEntry_order = e.order || 0, this.$SearchableEntry_subtitle = o(e.subtitle), this.$SearchableEntry_keywordString = e.keywordString || "", this.$SearchableEntry_photo = e.photo || "", this.$SearchableEntry_uri = e.uri || "", this.$SearchableEntry_type = e.type || "", this.$SearchableEntry_auxiliaryData = e.auxiliaryData || null
    }
    var invariant/*s*/ = t("invariant");
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
    }, i.exports = a
});