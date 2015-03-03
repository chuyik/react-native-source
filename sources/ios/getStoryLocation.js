__d("getStoryLocation",["FBStoryRenderLocations","invariant","matchRoute"],function (global/*e*/, require/*invariant/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        var require/*invariant/*t*/*/ = l(global/*e*/, {
            GroupRoute: function() {
                return a.group
            },
            exports/*SimpleDliteRoute*/: function() {
                return a.feedMobile
            },
            FBStoryRenderLocations/*StoryPermalinkRoute*/: function() {
                return a.permalink
            }
        });
        return require/*invariant/*t*/*/ || matchRoute/*s*/(0, "getStoryLocation() failed; route list in getStoryLocation() needs updating"), require/*invariant/*t*/*/
    }
    var a = require/*invariant/*t*/*/("FBStoryRenderLocations"),
        matchRoute/*s*/ = require/*invariant/*t*/*/("invariant"),
        l = require/*invariant/*t*/*/("matchRoute");
    module/*i*/.exports = o
});