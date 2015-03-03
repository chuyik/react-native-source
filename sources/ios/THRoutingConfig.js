__d("THRoutingConfig",["NativeModulesDeprecated","RouteHandler"],NativeModulesDeprecated/*function*/ (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    NativeModulesDeprecated/*function*/ o() {}
    var a = require/*t*/("NativeModulesDeprecated").RKTreehouseManager,
        exports/*s*/ = require/*t*/("RouteHandler");
    o.prototype.initialize = NativeModulesDeprecated/*function*/() {
        a && (exports/*s*/.registerCallbackForTypes(["URL"], NativeModulesDeprecated/*function*/(global/*e*/) {
            a && a.openURL ? "string" == typeof global/*e*/.url && global/*e*/.url.length > 3 ? a.openURL(global/*e*/.url) : console.error("URL must be a valid string: ", global/*e*/.url) : console.warn("No RKTreehouseManager available to handle URLs")
        }), exports/*s*/.registerCallbackForTypes(["User"], NativeModulesDeprecated/*function*/(global/*e*/) {
            a && a.tappedActorProfileInGroup ? "object" == typeof global/*e*/.actor && global/*e*/.actor.id ? a.tappedActorProfileInGroup(global/*e*/.actor.id, global/*e*/.actor.name, global/*e*/.group.id) : global/*e*/.id ? a.tappedActorProfile(global/*e*/.id, global/*e*/.name) : console.error("Actor must have a valid ID: ", global/*e*/.actor) : console.warn("No RKTreehouseManager available to handle actors")
        }), exports/*s*/.registerCallbackForTypes(["Group"], NativeModulesDeprecated/*function*/(global/*e*/) {
            a && a.openGroupProfile ? a.openGroupProfile(global/*e*/.id) : console.warn("No RKTreehouseManager available to handle groups")
        }), exports/*s*/.registerCallbackForTypes(["Story"], NativeModulesDeprecated/*function*/(global/*e*/) {
            a && a.openStoryPermalink ? a.openStoryPermalink(global/*e*/.id) : console.warn("No RKTreehouseManager available to handle stories")
        }), exports/*s*/.registerCallbackForTypes(["Video"], NativeModulesDeprecated/*function*/(global/*e*/) {
            a && a.openVideo ? a.openVideo(global/*e*/.id) : console.warn("No RKTreehouseManager available to handle videos")
        }))
    }, module/*i*/.exports = new o
});