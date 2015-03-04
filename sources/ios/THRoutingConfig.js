__d("THRoutingConfig",["NativeModulesDeprecated","RouteHandler"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var NativeModulesDeprecated/*a*/ = require/*t*/("NativeModulesDeprecated").RKTreehouseManager,
        RouteHandler/*s*/ = require/*t*/("RouteHandler");
    o.prototype.initialize = function() {
        NativeModulesDeprecated/*a*/ && (RouteHandler/*s*/.registerCallbackForTypes(["URL"], function(global/*e*/) {
            NativeModulesDeprecated/*a*/ && NativeModulesDeprecated/*a*/.openURL ? "string" == typeof global/*e*/.url && global/*e*/.url.length > 3 ? NativeModulesDeprecated/*a*/.openURL(global/*e*/.url) : console.error("URL must be NativeModulesDeprecated/*a*/ valid string: ", global/*e*/.url) : console.warn("No RKTreehouseManager available to handle URLs")
        }), RouteHandler/*s*/.registerCallbackForTypes(["User"], function(global/*e*/) {
            NativeModulesDeprecated/*a*/ && NativeModulesDeprecated/*a*/.tappedActorProfileInGroup ? "object" == typeof global/*e*/.actor && global/*e*/.actor.id ? NativeModulesDeprecated/*a*/.tappedActorProfileInGroup(global/*e*/.actor.id, global/*e*/.actor.name, global/*e*/.group.id) : global/*e*/.id ? NativeModulesDeprecated/*a*/.tappedActorProfile(global/*e*/.id, global/*e*/.name) : console.error("Actor must have NativeModulesDeprecated/*a*/ valid ID: ", global/*e*/.actor) : console.warn("No RKTreehouseManager available to handle actors")
        }), RouteHandler/*s*/.registerCallbackForTypes(["Group"], function(global/*e*/) {
            NativeModulesDeprecated/*a*/ && NativeModulesDeprecated/*a*/.openGroupProfile ? NativeModulesDeprecated/*a*/.openGroupProfile(global/*e*/.id) : console.warn("No RKTreehouseManager available to handle groups")
        }), RouteHandler/*s*/.registerCallbackForTypes(["Story"], function(global/*e*/) {
            NativeModulesDeprecated/*a*/ && NativeModulesDeprecated/*a*/.openStoryPermalink ? NativeModulesDeprecated/*a*/.openStoryPermalink(global/*e*/.id) : console.warn("No RKTreehouseManager available to handle stories")
        }), RouteHandler/*s*/.registerCallbackForTypes(["Video"], function(global/*e*/) {
            NativeModulesDeprecated/*a*/ && NativeModulesDeprecated/*a*/.openVideo ? NativeModulesDeprecated/*a*/.openVideo(global/*e*/.id) : console.warn("No RKTreehouseManager available to handle videos")
        }))
    }, module/*i*/.exports = new o
});