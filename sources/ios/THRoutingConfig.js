__d("THRoutingConfig",["NativeModulesDeprecated","RouteHandler"],function (e, t, n, r, i) {
    "use strict";

    function o() {}
    var NativeModulesDeprecated/*a*/ = t("NativeModulesDeprecated").RKTreehouseManager,
        RouteHandler/*s*/ = t("RouteHandler");
    o.prototype.initialize = function() {
        NativeModulesDeprecated/*a*/ && (RouteHandler/*s*/.registerCallbackForTypes(["URL"], function(e) {
            NativeModulesDeprecated/*a*/ && NativeModulesDeprecated/*a*/.openURL ? "string" == typeof e.url && e.url.length > 3 ? NativeModulesDeprecated/*a*/.openURL(e.url) : console.error("URL must be NativeModulesDeprecated/*a*/ valid string: ", e.url) : console.warn("No RKTreehouseManager available to handle URLs")
        }), RouteHandler/*s*/.registerCallbackForTypes(["User"], function(e) {
            NativeModulesDeprecated/*a*/ && NativeModulesDeprecated/*a*/.tappedActorProfileInGroup ? "object" == typeof e.actor && e.actor.id ? NativeModulesDeprecated/*a*/.tappedActorProfileInGroup(e.actor.id, e.actor.name, e.group.id) : e.id ? NativeModulesDeprecated/*a*/.tappedActorProfile(e.id, e.name) : console.error("Actor must have NativeModulesDeprecated/*a*/ valid ID: ", e.actor) : console.warn("No RKTreehouseManager available to handle actors")
        }), RouteHandler/*s*/.registerCallbackForTypes(["Group"], function(e) {
            NativeModulesDeprecated/*a*/ && NativeModulesDeprecated/*a*/.openGroupProfile ? NativeModulesDeprecated/*a*/.openGroupProfile(e.id) : console.warn("No RKTreehouseManager available to handle groups")
        }), RouteHandler/*s*/.registerCallbackForTypes(["Story"], function(e) {
            NativeModulesDeprecated/*a*/ && NativeModulesDeprecated/*a*/.openStoryPermalink ? NativeModulesDeprecated/*a*/.openStoryPermalink(e.id) : console.warn("No RKTreehouseManager available to handle stories")
        }), RouteHandler/*s*/.registerCallbackForTypes(["Video"], function(e) {
            NativeModulesDeprecated/*a*/ && NativeModulesDeprecated/*a*/.openVideo ? NativeModulesDeprecated/*a*/.openVideo(e.id) : console.warn("No RKTreehouseManager available to handle videos")
        }))
    }, i.exports = new o
});