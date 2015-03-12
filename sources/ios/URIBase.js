__d("URIBase",["URIRFC3986","URISchemes","copyProperties","ex","invariant"],function (e, t, n, r, i) {
    function o(e, t, n, r) {
        if (!t) return !0;
        if (t instanceof a) return e.setProtocol(t.getProtocol()), e.setDomain(t.getDomain()), e.setPort(t.getPort()), e.setPath(t.getPath()), e.setQueryData(r.deserialize(r.serialize(t.getQueryData()))), e.setFragment(t.getFragment()), !0;
        t = t.toString().trim();
        var i = URIRFC3986/*s*/.parse(t) || {};
        if (!n && !URISchemes/*l*/.isAllowed(i.scheme)) return !1;
        if (e.setProtocol(i.scheme || ""), !n && d.test(i.host)) return !1;
        if (e.setDomain(i.host || ""), e.setPort(i.port || ""), e.setPath(i.path || ""), n) e.setQueryData(r.deserialize(i.query) || {});
        else try {
            e.setQueryData(r.deserialize(i.query) || {})
        } catch (o) {
            return !1
        }
        if (e.setFragment(i.fragment || ""), null !== i.userinfo) {
            if (n) throw new Error(ex/*c*/("URI.parse: invalid URI (userinfo is not allowed in a URI): %URIRFC3986/*s*/", e.toString()));
            return !1
        }
        if (!e.getDomain() && -1 !== e.getPath().indexOf("\\")) {
            if (n) throw new Error(ex/*c*/("URI.parse: invalid URI (no domain but multiple back-slashes): %URIRFC3986/*s*/", e.toString()));
            return !1
        }
        if (!e.getProtocol() && h.test(t)) {
            if (n) throw new Error(ex/*c*/("URI.parse: invalid URI (unsafe protocol-relative URLs): %URIRFC3986/*s*/", e.toString()));
            return !1
        }
        return !0
    }

    function a(e, t) {
        "use strict";
        t || invariant/*p*/(0, "no serializer set"), this.$URIBase_serializer = t, this.$URIBase_protocol = "", this.$URIBase_domain = "", this.$URIBase_port = "", this.$URIBase_path = "", this.$URIBase_fragment = "", this.$URIBase_queryData = {}, o(this, e, !0, t)
    }
    var URIRFC3986/*s*/ = t("URIRFC3986"),
        URISchemes/*l*/ = t("URISchemes"),
        copyProperties/*u*/ = t("copyProperties"),
        ex/*c*/ = t("ex"),
        invariant/*p*/ = t("invariant"),
        d = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        h = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
    a.prototype.setProtocol = function(e) {
        "use strict";
        return URISchemes/*l*/.isAllowed(e) || invariant/*p*/(0, '"%URIRFC3986/*s*/" is not a valid protocol for a URI.', e), this.$URIBase_protocol = e, this
    }, a.prototype.getProtocol = function() {
        "use strict";
        return this.$URIBase_protocol
    }, a.prototype.setSecure = function(e) {
        "use strict";
        return this.setProtocol(e ? "https" : "http")
    }, a.prototype.isSecure = function() {
        "use strict";
        return "https" === this.getProtocol()
    }, a.prototype.setDomain = function(e) {
        "use strict";
        if (d.test(e)) throw new Error(ex/*c*/("URI.setDomain: unsafe domain specified: %URIRFC3986/*s*/ for url %URIRFC3986/*s*/", e, this.toString()));
        return this.$URIBase_domain = e, this
    }, a.prototype.getDomain = function() {
        "use strict";
        return this.$URIBase_domain
    }, a.prototype.setPort = function(e) {
        "use strict";
        return this.$URIBase_port = e, this
    }, a.prototype.getPort = function() {
        "use strict";
        return this.$URIBase_port
    }, a.prototype.setPath = function(e) {
        "use strict";
        return __DEV__ && e && "/" !== e.charAt(0) && console.warn('Path does not begin with a "/" which means this URI will likely be malformed. Ensure any string passed to .setPath() leads with "/"'), this.$URIBase_path = e, this
    }, a.prototype.getPath = function() {
        "use strict";
        return this.$URIBase_path
    }, a.prototype.addQueryData = function(e, t) {
        "use strict";
        return "[object Object]" === Object.prototype.toString.call(e) ? copyProperties/*u*/(this.$URIBase_queryData, e) : this.$URIBase_queryData[e] = t, this
    }, a.prototype.setQueryData = function(e) {
        "use strict";
        return this.$URIBase_queryData = e, this
    }, a.prototype.getQueryData = function() {
        "use strict";
        return this.$URIBase_queryData
    }, a.prototype.removeQueryData = function(e) {
        "use strict";
        Array.isArray(e) || (e = [e]);
        for (var t = 0, n = e.length; n > t; ++t) delete this.$URIBase_queryData[e[t]];
        return this
    }, a.prototype.setFragment = function(e) {
        "use strict";
        return this.$URIBase_fragment = e, this
    }, a.prototype.getFragment = function() {
        "use strict";
        return this.$URIBase_fragment
    }, a.prototype.isEmpty = function() {
        "use strict";
        return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
    }, a.prototype.toString = function() {
        "use strict";
        var e = "";
        this.$URIBase_protocol && (e += this.$URIBase_protocol + "://"), this.$URIBase_domain && (e += this.$URIBase_domain), this.$URIBase_port && (e += ":" + this.$URIBase_port), this.$URIBase_path ? e += this.$URIBase_path : e && (e += "/");
        var t = this.$URIBase_serializer.serialize(this.$URIBase_queryData);
        return t && (e += "?" + t), this.$URIBase_fragment && (e += "#" + this.$URIBase_fragment), e
    }, a.prototype.getOrigin = function() {
        "use strict";
        return this.$URIBase_protocol + "://" + this.$URIBase_domain + (this.$URIBase_port ? ":" + this.$URIBase_port : "")
    }, a.isValidURI = function(e, t) {
        return o(new a(null, t), e, !1, t)
    }, i.exports = a
});