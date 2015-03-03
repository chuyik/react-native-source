__d("URI",["PHPQuerySerializer","URIBase","isFacebookURI","unqualifyURI","areSameOrigin","copyProperties","goURI"],function (global/*exports/*e*/*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*exports/*e*/*/) {
        "use strict";
        return this instanceof o ? void URIBase/*s*/.call(this, global/*exports/*e*/*/ || "", PHPQuerySerializer/*a*/) : new o(global/*exports/*e*/*/ || window.location.href)
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
    o.prototype = Object.create(f), o.prototype.constructor = o, o.__superConstructor__ = URIBase/*s*/, o.prototype.setPath = function(global/*exports/*e*/*/) {
        "use strict";
        return this.path = global/*exports/*e*/*/, f.setPath.call(this, global/*exports/*e*/*/)
    }, o.prototype.getPath = function() {
        "use strict";
        var global/*exports/*e*/*/ = f.getPath.call(this);
        return global/*exports/*e*/*/ ? global/*exports/*e*/*/.replace(/^\/+/, "/") : global/*exports/*e*/*/
    }, o.prototype.setProtocol = function(global/*exports/*e*/*/) {
        "use strict";
        return this.protocol = global/*exports/*e*/*/, f.setProtocol.call(this, global/*exports/*e*/*/)
    }, o.prototype.setDomain = function(global/*exports/*e*/*/) {
        "use strict";
        return this.domain = global/*exports/*e*/*/, f.setDomain.call(this, global/*exports/*e*/*/)
    }, o.prototype.setPort = function(global/*exports/*e*/*/) {
        "use strict";
        return this.port = global/*exports/*e*/*/, f.setPort.call(this, global/*exports/*e*/*/)
    }, o.prototype.setFragment = function(global/*exports/*e*/*/) {
        "use strict";
        return this.fragment = global/*exports/*e*/*/, f.setFragment.call(this, global/*exports/*e*/*/)
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
        var global/*exports/*e*/*/ = this.getDomain().split("."),
            require/*t*/ = global/*exports/*e*/*/.indexOf("facebook");
        return global/*exports/*e*/*/.slice(require/*t*/).join(".")
    }, o.prototype.getUnqualifiedURI = function() {
        "use strict";
        var global/*exports/*e*/*/ = new o(this);
        return unqualifyURI/*u*/(global/*exports/*e*/*/), global/*exports/*e*/*/
    }, o.prototype.getQualifiedURI = function() {
        "use strict";
        return new o(this).$URI_qualify()
    }, o.prototype.$URI_qualify = function() {
        "use strict";
        if (!this.getDomain()) {
            var global/*exports/*e*/*/ = o();
            this.setProtocol(global/*exports/*e*/*/.getProtocol()).setDomain(global/*exports/*e*/*/.getDomain()).setPort(global/*exports/*e*/*/.getPort())
        }
        return this
    }, o.prototype.isSameOrigin = function(global/*exports/*e*/*/) {
        "use strict";
        var require/*t*/ = global/*exports/*e*/*/ || window.location.href;
        return require/*t*/ instanceof o || (require/*t*/ = new o(require/*t*/.toString())), areSameOrigin/*c*/(this, require/*t*/)
    }, o.prototype.go = function(global/*exports/*e*/*/) {
        "use strict";
        goURI/*d*/(this, global/*exports/*e*/*/)
    }, o.prototype.setSubdomain = function(global/*exports/*e*/*/) {
        "use strict";
        var require/*t*/ = this.$URI_qualify().getDomain().split(".");
        return require/*t*/.length <= 2 ? require/*t*/.unshift(global/*exports/*e*/*/) : require/*t*/[0] = global/*exports/*e*/*/, this.setDomain(require/*t*/.join("."))
    }, o.prototype.getSubdomain = function() {
        "use strict";
        if (!this.getDomain()) return "";
        var global/*exports/*e*/*/ = this.getDomain().split(".");
        return global/*exports/*e*/*/.length <= 2 ? "" : global/*exports/*e*/*/[0]
    }, o.isValidURI = function(global/*exports/*e*/*/) {
        "use strict";
        return URIBase/*s*/.isValidURI(global/*exports/*e*/*/, PHPQuerySerializer/*a*/)
    }, copyProperties/*p*/(o, {
        getRequestURI: function(require/*t*/, requireDynamic/*n*/) {
            require/*t*/ = void 0 === require/*t*/ || require/*t*/;
            var requireLazy/*r*/ = global/*exports/*e*/*/.PageTransitions;
            return require/*t*/ && requireLazy/*r*/ && requireLazy/*r*/.isInitialized() ? requireLazy/*r*/.getCurrentURI(!!requireDynamic/*n*/).getQualifiedURI() : new o(window.location.href)
        },
        getMostRecentURI: function() {
            var require/*t*/ = global/*exports/*e*/*/.PageTransitions;
            return require/*t*/ && require/*t*/.isInitialized() ? require/*t*/.getMostRecentURI().getQualifiedURI() : new o(window.location.href)
        },
        getNextURI: function() {
            var require/*t*/ = global/*exports/*e*/*/.PageTransitions;
            return require/*t*/ && require/*t*/.isInitialized() ? require/*t*/._next_uri.getQualifiedURI() : new o(window.location.href)
        },
        expression: /(((\w+):\/\/)([^\/:]*)(:(\goURI/*d*/+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,
        arrayQueryExpression: /^(\w+)((?:\[\w*\])+)=?(.*)/,
        encodeComponent: function(global/*exports/*e*/*/) {
            return encodeURIComponent(global/*exports/*e*/*/).replace(/%5D/g, "]").replace(/%5B/g, "[")
        },
        decodeComponent: function(global/*exports/*e*/*/) {
            return decodeURIComponent(global/*exports/*e*/*/.replace(/\+/g, " "))
        }
    }), __DEV__ && o.prototype.__defineGetter__ && o.prototype._defineSetter__ && (o.prototype.__defineGetter__("path", function() {
        return console.warn("URI: Do not access the path property directly use getPath(). Fix URI.prototype."), this.path
    }), o.prototype.__defineSetter__("path", function(global/*exports/*e*/*/) {
        this.path = global/*exports/*e*/*/
    }), o.prototype.__defineGetter__("protocol", function() {
        return console.warn("URI: Do not access the protocol property directly use getProtocol(). Fix URI.prototype."), this.protocol
    }), o.prototype.__defineSetter__("protocol", function(global/*exports/*e*/*/) {
        this.protocol = global/*exports/*e*/*/
    }), o.prototype.__defineGetter__("domain", function() {
        return console.warn("URI: Do not access the domain property directly use getDomain(). Fix URI.prototype."), this.domain
    }), o.prototype.__defineSetter__("domain", function(global/*exports/*e*/*/) {
        this.domain = global/*exports/*e*/*/
    }), o.prototype.__defineGetter__("port", function() {
        return console.warn("URI: Do not access the port property directly use getPort(). Fix URI.prototype."), this.port
    }), o.prototype.__defineSetter__("port", function(global/*exports/*e*/*/) {
        this.port = global/*exports/*e*/*/
    }), o.prototype.__defineGetter__("fragment", function() {
        return console.warn("URI: Do not access the fragment property directly use getFragment(). Fix URI.prototype."), this.fragment
    }), o.prototype.__defineSetter__("fragment", function(global/*exports/*e*/*/) {
        this.fragment = global/*exports/*e*/*/
    })), module/*i*/.exports = o
});