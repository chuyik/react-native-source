__d("getStoryLocation",["FBStoryRenderLocations","invariant","matchRoute"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        var t = matchRoute/*l*/(e, {
            GroupRoute: function() {
                return FBStoryRenderLocations/*a*/.group
            },
            SimpleDliteRoute: function() {
                return FBStoryRenderLocations/*a*/.feedMobile
            },
            StoryPermalinkRoute: function() {
                return FBStoryRenderLocations/*a*/.permalink
            }
        });
        return t || invariant/*s*/(0, "getStoryLocation() failed; route list in getStoryLocation() needs updating"), t
    }
    var FBStoryRenderLocations/*a*/ = t("FBStoryRenderLocations"),
        invariant/*s*/ = t("invariant"),
        matchRoute/*l*/ = t("matchRoute");
    i.exports = o
});