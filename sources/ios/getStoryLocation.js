__d("getStoryLocation",["FBStoryRenderLocations","invariant","matchRoute"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = l(global/*e*/, {
            GroupRoute: function() {
                return a.group
            },
            SimpleDliteRoute: function() {
                return a.feedMobile
            },
            StoryPermalinkRoute: function() {
                return a.permalink
            }
        });
        return require/*t*/ || s(0, "getStoryLocation() failed; route list in getStoryLocation() needs updating"), require/*t*/
    }
    var a = require/*t*/("FBStoryRenderLocations"),
        s = require/*t*/("invariant"),
        l = require/*t*/("matchRoute");
    module/*i*/.exports = o
});