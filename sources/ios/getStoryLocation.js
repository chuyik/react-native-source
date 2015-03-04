__d("getStoryLocation",["FBStoryRenderLocations","invariant","matchRoute"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*t*/ = matchRoute/*l*/(global/*e*/, {
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
        return require/*t*/ || invariant/*s*/(0, "getStoryLocation() failed; route list in getStoryLocation() needs updating"), require/*t*/
    }
    var FBStoryRenderLocations/*a*/ = require/*t*/("FBStoryRenderLocations"),
        invariant/*s*/ = require/*t*/("invariant"),
        matchRoute/*l*/ = require/*t*/("matchRoute");
    module/*i*/.exports = o
});