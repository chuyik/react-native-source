__d("URI",["PHPQuerySerializer","URIBase","isFacebookURI","unqualifyURI","areSameOrigin","copyProperties","goURI"],function (e, t, n, r, i) {
    function o(e) {
        "use strict";
        return this instanceof o ? void URIBase/*s*/.call(this, e || "", PHPQuerySerializer/*a*/) : new o(e || window.location.href)
    }
    var PHPQuerySerializer/*a*/ = t("PHPQuerySerializer"),
        URIBase/*s*/ = t("URIBase"),
        isFacebookURI/*l*/ = t("isFacebookURI"),
        unqualifyURI/*u*/ = t("unqualifyURI"),
        areSameOrigin/*c*/ = t("areSameOrigin"),
        copyProperties/*p*/ = t("copyProperties"),
        goURI/*d*/ = t("goURI");
    for (var h in URIBase/*s*/) URIBase/*s*/.hasOwnProperty(h) && (o[h] = URIBase/*s*/[h]);
    var f = null === URIBase/*s*/ ? null : URIBase/*s*/.prototype;
    o.prototype = Object.create(f), o.prototype.constructor = o, o.__superConstructor__ = URIBase/*s*/, o.prototype.setPath = function(e) {
        "use strict";
        return this.path = e, f.setPath.call(this, e)
    }, o.prototype.getPath = function() {
        "use strict";
        var e = f.getPath.call(this);
        return e ? e.replace(/^\/+/, "/") : e
    }, o.prototype.setProtocol = function(e) {
        "use strict";
        return this.protocol = e, f.setProtocol.call(this, e)
    }, o.prototype.setDomain = function(e) {
        "use strict";
        return this.domain = e, f.setDomain.call(this, e)
    }, o.prototype.setPort = function(e) {
        "use strict";
        return this.port = e, f.setPort.call(this, e)
    }, o.prototype.setFragment = function(e) {
        "use strict";
        return this.fragment = e, f.setFragment.call(this, e)
    }, o.prototype.valueOf = function() {
        "use strict";
        return this.toString()
    }, o.prototype.isFacebookURI = function() {
        "use strict";
        if (__DEV__) throw new Error("URI.prototype.isFacebookURI is deprecated, use isFacebookURI mirco-module instead");
        return isFacebookURI/*l*/(this)
    }, o.prototype.isLinkshimURI = function() {
        "use strict";
        return !isFacebookURI/*l*/(this) || "/isFacebookURI/*l*/.php" !== this.getPath() && 0 !== this.getPath().indexOf("/si/ajax/isFacebookURI/*l*//") && 0 !== this.getPath().indexOf("/isFacebookURI/*l*//") && 0 !== this.getPath().indexOf("isFacebookURI/*l*//") ? !1 : !0
    }, o.prototype.getRegisteredDomain = function() {
        "use strict";
        if (!this.getDomain()) return "";
        if (!isFacebookURI/*l*/(this)) return null;
        var e = this.getDomain().split("."),
            t = e.indexOf("facebook");
        return e.slice(t).join(".")
    }, o.prototype.getUnqualifiedURI = function() {
        "use strict";
        var e = new o(this);
        return unqualifyURI/*u*/(e), e
    }, o.prototype.getQualifiedURI = function() {
        "use strict";
        return new o(this).$URI_qualify()
    }, o.prototype.$URI_qualify = function() {
        "use strict";
        if (!this.getDomain()) {
            var e = o();
            this.setProtocol(e.getProtocol()).setDomain(e.getDomain()).setPort(e.getPort())
        }
        return this
    }, o.prototype.isSameOrigin = function(e) {
        "use strict";
        var t = e || window.location.href;
        return t instanceof o || (t = new o(t.toString())), areSameOrigin/*c*/(this, t)
    }, o.prototype.go = function(e) {
        "use strict";
        goURI/*d*/(this, e)
    }, o.prototype.setSubdomain = function(e) {
        "use strict";
        var t = this.$URI_qualify().getDomain().split(".");
        return t.length <= 2 ? t.unshift(e) : t[0] = e, this.setDomain(t.join("."))
    }, o.prototype.getSubdomain = function() {
        "use strict";
        if (!this.getDomain()) return "";
        var e = this.getDomain().split(".");
        return e.length <= 2 ? "" : e[0]
    }, o.isValidURI = function(e) {
        "use strict";
        return URIBase/*s*/.isValidURI(e, PHPQuerySerializer/*a*/)
    }, copyProperties/*p*/(o, {
        getRequestURI: function(t, n) {
            t = void 0 === t || t;
            var r = e.PageTransitions;
            return t && r && r.isInitialized() ? r.getCurrentURI(!!n).getQualifiedURI() : new o(window.location.href)
        },
        getMostRecentURI: function() {
            var t = e.PageTransitions;
            return t && t.isInitialized() ? t.getMostRecentURI().getQualifiedURI() : new o(window.location.href)
        },
        getNextURI: function() {
            var t = e.PageTransitions;
            return t && t.isInitialized() ? t._next_uri.getQualifiedURI() : new o(window.location.href)
        },
        expression: /(((\w+):\/\/)([^\/:]*)(:(\goURI/*d*/+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,
        arrayQueryExpression: /^(\w+)((?:\[\w*\])+)=?(.*)/,
        encodeComponent: function(e) {
            return encodeURIComponent(e).replace(/%5D/g, "]").replace(/%5B/g, "[")
        },
        decodeComponent: function(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        }
    }), __DEV__ && o.prototype.__defineGetter__ && o.prototype._defineSetter__ && (o.prototype.__defineGetter__("path", function() {
        return console.warn("URI: Do not access the path property directly use getPath(). Fix URI.prototype."), this.path
    }), o.prototype.__defineSetter__("path", function(e) {
        this.path = e
    }), o.prototype.__defineGetter__("protocol", function() {
        return console.warn("URI: Do not access the protocol property directly use getProtocol(). Fix URI.prototype."), this.protocol
    }), o.prototype.__defineSetter__("protocol", function(e) {
        this.protocol = e
    }), o.prototype.__defineGetter__("domain", function() {
        return console.warn("URI: Do not access the domain property directly use getDomain(). Fix URI.prototype."), this.domain
    }), o.prototype.__defineSetter__("domain", function(e) {
        this.domain = e
    }), o.prototype.__defineGetter__("port", function() {
        return console.warn("URI: Do not access the port property directly use getPort(). Fix URI.prototype."), this.port
    }), o.prototype.__defineSetter__("port", function(e) {
        this.port = e
    }), o.prototype.__defineGetter__("fragment", function() {
        return console.warn("URI: Do not access the fragment property directly use getFragment(). Fix URI.prototype."), this.fragment
    }), o.prototype.__defineSetter__("fragment", function(e) {
        this.fragment = e
    })), i.exports = o
});