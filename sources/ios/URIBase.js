__d("URIBase",["URIRFC3986","URISchemes","copyProperties","ex","invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*URIRFC3986/*n*/*/, requireLazy/*URISchemes/*r*/*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/, requireDynamic/*URIRFC3986/*n*/*/, requireLazy/*URISchemes/*r*/*/) {
        if (!require/*exports/*t*/*/) return !0;
        if (require/*exports/*t*/*/ instanceof a) return global/*e*/.setProtocol(require/*exports/*t*/*/.getProtocol()), global/*e*/.setDomain(require/*exports/*t*/*/.getDomain()), global/*e*/.setPort(require/*exports/*t*/*/.getPort()), global/*e*/.setPath(require/*exports/*t*/*/.getPath()), global/*e*/.setQueryData(requireLazy/*URISchemes/*r*/*/.deserialize(requireLazy/*URISchemes/*r*/*/.serialize(require/*exports/*t*/*/.getQueryData()))), global/*e*/.setFragment(require/*exports/*t*/*/.getFragment()), !0;
        require/*exports/*t*/*/ = require/*exports/*t*/*/.toString().trim();
        var module/*i*/ = s.parse(require/*exports/*t*/*/) || {};
        if (!requireDynamic/*URIRFC3986/*n*/*/ && !l.isAllowed(module/*i*/.scheme)) return !1;
        if (global/*e*/.setProtocol(module/*i*/.scheme || ""), !requireDynamic/*URIRFC3986/*n*/*/ && d.test(module/*i*/.host)) return !1;
        if (global/*e*/.setDomain(module/*i*/.host || ""), global/*e*/.setPort(module/*i*/.port || ""), global/*e*/.setPath(module/*i*/.path || ""), requireDynamic/*URIRFC3986/*n*/*/) global/*e*/.setQueryData(requireLazy/*URISchemes/*r*/*/.deserialize(module/*i*/.query) || {});
        else try {
            global/*e*/.setQueryData(requireLazy/*URISchemes/*r*/*/.deserialize(module/*i*/.query) || {})
        } catch (o) {
            return !1
        }
        if (global/*e*/.setFragment(module/*i*/.fragment || ""), null !== module/*i*/.userinfo) {
            if (requireDynamic/*URIRFC3986/*n*/*/) throw new Error(c("URI.parse: invalid URI (userinfo is not allowed in a URI): %s", global/*e*/.toString()));
            return !1
        }
        if (!global/*e*/.getDomain() && -1 !== global/*e*/.getPath().indexOf("\\")) {
            if (requireDynamic/*URIRFC3986/*n*/*/) throw new Error(c("URI.parse: invalid URI (no domain but multiple back-slashes): %s", global/*e*/.toString()));
            return !1
        }
        if (!global/*e*/.getProtocol() && h.test(require/*exports/*t*/*/)) {
            if (requireDynamic/*URIRFC3986/*n*/*/) throw new Error(c("URI.parse: invalid URI (unsafe protocol-relative URLs): %s", global/*e*/.toString()));
            return !1
        }
        return !0
    }

    function a(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        require/*exports/*t*/*/ || p(0, "no serializer set"), this.$URIBase_serializer = require/*exports/*t*/*/, this.$URIBase_protocol = "", this.$URIBase_domain = "", this.$URIBase_port = "", this.$URIBase_path = "", this.$URIBase_fragment = "", this.$URIBase_queryData = {}, o(this, global/*e*/, !0, require/*exports/*t*/*/)
    }
    var s = require/*exports/*t*/*/("URIRFC3986"),
        l = require/*exports/*t*/*/("URISchemes"),
        u = require/*exports/*t*/*/("copyProperties"),
        c = require/*exports/*t*/*/("ex"),
        p = require/*exports/*t*/*/("invariant"),
        d = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        h = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
    a.prototype.setProtocol = function(global/*e*/) {
        "use strict";
        return l.isAllowed(global/*e*/) || p(0, '"%s" is not a valid protocol for a URI.', global/*e*/), this.$URIBase_protocol = global/*e*/, this
    }, a.prototype.getProtocol = function() {
        "use strict";
        return this.$URIBase_protocol
    }, a.prototype.setSecure = function(global/*e*/) {
        "use strict";
        return this.setProtocol(global/*e*/ ? "https" : "http")
    }, a.prototype.isSecure = function() {
        "use strict";
        return "https" === this.getProtocol()
    }, a.prototype.setDomain = function(global/*e*/) {
        "use strict";
        if (d.test(global/*e*/)) throw new Error(c("URI.setDomain: unsafe domain specified: %s for url %s", global/*e*/, this.toString()));
        return this.$URIBase_domain = global/*e*/, this
    }, a.prototype.getDomain = function() {
        "use strict";
        return this.$URIBase_domain
    }, a.prototype.setPort = function(global/*e*/) {
        "use strict";
        return this.$URIBase_port = global/*e*/, this
    }, a.prototype.getPort = function() {
        "use strict";
        return this.$URIBase_port
    }, a.prototype.setPath = function(global/*e*/) {
        "use strict";
        return __DEV__ && global/*e*/ && "/" !== global/*e*/.charAt(0) && console.warn('Path does not begin with a "/" which means this URI will likely be malformed. Ensure any string passed to .setPath() leads with "/"'), this.$URIBase_path = global/*e*/, this
    }, a.prototype.getPath = function() {
        "use strict";
        return this.$URIBase_path
    }, a.prototype.addQueryData = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return "[object Object]" === Object.prototype.toString.call(global/*e*/) ? u(this.$URIBase_queryData, global/*e*/) : this.$URIBase_queryData[global/*e*/] = require/*exports/*t*/*/, this
    }, a.prototype.setQueryData = function(global/*e*/) {
        "use strict";
        return this.$URIBase_queryData = global/*e*/, this
    }, a.prototype.getQueryData = function() {
        "use strict";
        return this.$URIBase_queryData
    }, a.prototype.removeQueryData = function(global/*e*/) {
        "use strict";
        Array.isArray(global/*e*/) || (global/*e*/ = [global/*e*/]);
        for (var require/*exports/*t*/*/ = 0, requireDynamic/*URIRFC3986/*n*/*/ = global/*e*/.length; requireDynamic/*URIRFC3986/*n*/*/ > require/*exports/*t*/*/; ++require/*exports/*t*/*/) delete this.$URIBase_queryData[global/*e*/[require/*exports/*t*/*/]];
        return this
    }, a.prototype.setFragment = function(global/*e*/) {
        "use strict";
        return this.$URIBase_fragment = global/*e*/, this
    }, a.prototype.getFragment = function() {
        "use strict";
        return this.$URIBase_fragment
    }, a.prototype.isEmpty = function() {
        "use strict";
        return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
    }, a.prototype.toString = function() {
        "use strict";
        var global/*e*/ = "";
        this.$URIBase_protocol && (global/*e*/ += this.$URIBase_protocol + "://"), this.$URIBase_domain && (global/*e*/ += this.$URIBase_domain), this.$URIBase_port && (global/*e*/ += ":" + this.$URIBase_port), this.$URIBase_path ? global/*e*/ += this.$URIBase_path : global/*e*/ && (global/*e*/ += "/");
        var require/*exports/*t*/*/ = this.$URIBase_serializer.serialize(this.$URIBase_queryData);
        return require/*exports/*t*/*/ && (global/*e*/ += "?" + require/*exports/*t*/*/), this.$URIBase_fragment && (global/*e*/ += "#" + this.$URIBase_fragment), global/*e*/
    }, a.prototype.getOrigin = function() {
        "use strict";
        return this.$URIBase_protocol + "://" + this.$URIBase_domain + (this.$URIBase_port ? ":" + this.$URIBase_port : "")
    }, a.isValidURI = function(global/*e*/, require/*exports/*t*/*/) {
        return o(new a(null, require/*exports/*t*/*/), global/*e*/, !1, require/*exports/*t*/*/)
    }, module/*i*/.exports = a
});