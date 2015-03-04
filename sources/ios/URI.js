__d("URI",["PHPQuerySerializer","URIBase","isFacebookURI","unqualifyURI","areSameOrigin","copyProperties","goURI"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        "use strict";
        return this instanceof o ? void URIBase/*s*/.call(this, global/*e*/ || "", PHPQuerySerializer/*a*/) : new o(global/*e*/ || window.location.href)
    }
    var PHPQuerySerializer/*a*/ = require/*t*/("PHPQuerySerializer"),
        URIBase/*s*/ = require/*t*/("URIBase"),
        isFacebookURI/*l*/ = require/*t*/("isFacebookURI"),
        unqualifyURI/*u*/ = require/*t*/("unqualifyURI"),
        areSameOrigin/*c*/ = require/*t*/("areSameOrigin"),
        copyProperties/*p*/ = require/*t*/("copyProperties"),
        goURI/*d*/ = require/*t*/("goURI");
    for (var h in URIBase/*s*/) URIBase/*s*/.hasOwnProperty(h) && (o[h] = URIBase/*s*/[h]);
    var f = null === URIBase/*s*/ ? null : URIBase/*s*/.prototype;
    o.prototype = Object.create(f), o.prototype.constructor = o, o.__superConstructor__ = URIBase/*s*/, o.prototype.setPath = function(global/*e*/) {
        "use strict";
        return this.path = global/*e*/, f.setPath.call(this, global/*e*/)
    }, o.prototype.getPath = function() {
        "use strict";
        var global/*e*/ = f.getPath.call(this);
        return global/*e*/ ? global/*e*/.replace(/^\/+/, "/") : global/*e*/
    }, o.prototype.setProtocol = function(global/*e*/) {
        "use strict";
        return this.protocol = global/*e*/, f.setProtocol.call(this, global/*e*/)
    }, o.prototype.setDomain = function(global/*e*/) {
        "use strict";
        return this.domain = global/*e*/, f.setDomain.call(this, global/*e*/)
    }, o.prototype.setPort = function(global/*e*/) {
        "use strict";
        return this.port = global/*e*/, f.setPort.call(this, global/*e*/)
    }, o.prototype.setFragment = function(global/*e*/) {
        "use strict";
        return this.fragment = global/*e*/, f.setFragment.call(this, global/*e*/)
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
        var global/*e*/ = this.getDomain().split("."),
            require/*t*/ = global/*e*/.indexOf("facebook");
        return global/*e*/.slice(require/*t*/).join(".")
    }, o.prototype.getUnqualifiedURI = function() {
        "use strict";
        var global/*e*/ = new o(this);
        return unqualifyURI/*u*/(global/*e*/), global/*e*/
    }, o.prototype.getQualifiedURI = function() {
        "use strict";
        return new o(this).$URI_qualify()
    }, o.prototype.$URI_qualify = function() {
        "use strict";
        if (!this.getDomain()) {
            var global/*e*/ = o();
            this.setProtocol(global/*e*/.getProtocol()).setDomain(global/*e*/.getDomain()).setPort(global/*e*/.getPort())
        }
        return this
    }, o.prototype.isSameOrigin = function(global/*e*/) {
        "use strict";
        var require/*t*/ = global/*e*/ || window.location.href;
        return require/*t*/ instanceof o || (require/*t*/ = new o(require/*t*/.toString())), areSameOrigin/*c*/(this, require/*t*/)
    }, o.prototype.go = function(global/*e*/) {
        "use strict";
        goURI/*d*/(this, global/*e*/)
    }, o.prototype.setSubdomain = function(global/*e*/) {
        "use strict";
        var require/*t*/ = this.$URI_qualify().getDomain().split(".");
        return require/*t*/.length <= 2 ? require/*t*/.unshift(global/*e*/) : require/*t*/[0] = global/*e*/, this.setDomain(require/*t*/.join("."))
    }, o.prototype.getSubdomain = function() {
        "use strict";
        if (!this.getDomain()) return "";
        var global/*e*/ = this.getDomain().split(".");
        return global/*e*/.length <= 2 ? "" : global/*e*/[0]
    }, o.isValidURI = function(global/*e*/) {
        "use strict";
        return URIBase/*s*/.isValidURI(global/*e*/, PHPQuerySerializer/*a*/)
    }, copyProperties/*p*/(o, {
        getRequestURI: function(require/*t*/, requireDynamic/*n*/) {
            require/*t*/ = void 0 === require/*t*/ || require/*t*/;
            var requireLazy/*r*/ = global/*e*/.PageTransitions;
            return require/*t*/ && requireLazy/*r*/ && requireLazy/*r*/.isInitialized() ? requireLazy/*r*/.getCurrentURI(!!requireDynamic/*n*/).getQualifiedURI() : new o(window.location.href)
        },
        getMostRecentURI: function() {
            var require/*t*/ = global/*e*/.PageTransitions;
            return require/*t*/ && require/*t*/.isInitialized() ? require/*t*/.getMostRecentURI().getQualifiedURI() : new o(window.location.href)
        },
        getNextURI: function() {
            var require/*t*/ = global/*e*/.PageTransitions;
            return require/*t*/ && require/*t*/.isInitialized() ? require/*t*/._next_uri.getQualifiedURI() : new o(window.location.href)
        },
        expression: /(((\w+):\/\/)([^\/:]*)(:(\goURI/*d*/+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,
        arrayQueryExpression: /^(\w+)((?:\[\w*\])+)=?(.*)/,
        encodeComponent: function(global/*e*/) {
            return encodeURIComponent(global/*e*/).replace(/%5D/g, "]").replace(/%5B/g, "[")
        },
        decodeComponent: function(global/*e*/) {
            return decodeURIComponent(global/*e*/.replace(/\+/g, " "))
        }
    }), __DEV__ && o.prototype.__defineGetter__ && o.prototype._defineSetter__ && (o.prototype.__defineGetter__("path", function() {
        return console.warn("URI: Do not access the path property directly use getPath(). Fix URI.prototype."), this.path
    }), o.prototype.__defineSetter__("path", function(global/*e*/) {
        this.path = global/*e*/
    }), o.prototype.__defineGetter__("protocol", function() {
        return console.warn("URI: Do not access the protocol property directly use getProtocol(). Fix URI.prototype."), this.protocol
    }), o.prototype.__defineSetter__("protocol", function(global/*e*/) {
        this.protocol = global/*e*/
    }), o.prototype.__defineGetter__("domain", function() {
        return console.warn("URI: Do not access the domain property directly use getDomain(). Fix URI.prototype."), this.domain
    }), o.prototype.__defineSetter__("domain", function(global/*e*/) {
        this.domain = global/*e*/
    }), o.prototype.__defineGetter__("port", function() {
        return console.warn("URI: Do not access the port property directly use getPort(). Fix URI.prototype."), this.port
    }), o.prototype.__defineSetter__("port", function(global/*e*/) {
        this.port = global/*e*/
    }), o.prototype.__defineGetter__("fragment", function() {
        return console.warn("URI: Do not access the fragment property directly use getFragment(). Fix URI.prototype."), this.fragment
    }), o.prototype.__defineSetter__("fragment", function(global/*e*/) {
        this.fragment = global/*e*/
    })), module/*i*/.exports = o
});