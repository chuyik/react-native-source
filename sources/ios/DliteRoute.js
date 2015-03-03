__d("DliteRoute",["DliteRouteInitialData","DliteRouteRegExps","DliteRouter","GraphQL_EXPERIMENTAL","ReactGraphQLQueryBuilder","URI","XControllerURIBuilder","invariant","mapObject","merge","stableStringify"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        this.$DliteRoute_data = require/*t*/ || this.constructor.parse(global/*e*/) || this.constructor.__defaultData, this.$DliteRoute_uri = global/*e*/, this.$DliteRoute_cacheKey = null
    }

    function a(global/*e*/) {
        return (global/*e*/ + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    var s = require/*t*/("DliteRouteInitialData"),
        l = require/*t*/("DliteRouteRegExps"),
        u = require/*t*/("DliteRouter"),
        c = require/*t*/("GraphQL_EXPERIMENTAL"),
        p = require/*t*/("ReactGraphQLQueryBuilder"),
        d = (require/*t*/("URI"), require/*t*/("XControllerURIBuilder")),
        h = require/*t*/("invariant"),
        f = require/*t*/("mapObject"),
        m = require/*t*/("merge"),
        g = require/*t*/("stableStringify"),
        _ = {
            viewer: !0
        };
    o.create = function(global/*e*/) {
        null == global/*e*/.path || global/*e*/.path.match("^/") || h(0, "Route `path` must begin with a slash"), null == global/*e*/.path || "/" === global/*e*/.path || global/*e*/.path.match("[^/]$") || h(0, "Route `path` must not end with a slash");
        var require/*t*/ = function() {
            o.apply(this, arguments)
        };
        return Object.assign(require/*t*/, o), require/*t*/.prototype = Object.create(o.prototype), require/*t*/.prototype.constructor = require/*t*/, require/*t*/.__name = global/*e*/.name, require/*t*/.__path = global/*e*/.path, require/*t*/.__paramDefinitions = global/*e*/.paramDefinitions, require/*t*/.__queries = global/*e*/.queries, require/*t*/.__renderTitle = global/*e*/.renderTitle, require/*t*/.__component = global/*e*/.component, require/*t*/.__defaultData = global/*e*/.defaultData, require/*t*/
    }, o.getName = function() {
        return this.__name
    }, o.register = function() {
        null == this.__path && h(0, "Path must be defined in route spec for %s", this.__name), this.$DliteRoute_routeRegistered || (u.addRoute(this), this.$DliteRoute_routeRegistered = !0)
    }, o.getURIBuilder = function() {
        return null == this.__path && h(0, "Path must be defined in route spec for %s", this.__name), this.register(), new d(this.__path, this.__paramDefinitions)
    }, o.getSortKey = function() {
        var global/*e*/ = this.$DliteRoute_getRegexAndCaptureNames();
        return global/*e*/.regexString
    }, o.parse = function(global/*e*/) {
        var require/*t*/ = global/*e*/.getDomain();
        if (require/*t*/ && require/*t*/ !== s.domain) return null;
        var requireDynamic/*n*/ = this.$DliteRoute_getRegexAndCaptureNames(),
            requireLazy/*r*/ = requireDynamic/*n*/.regex,
            module/*i*/ = requireDynamic/*n*/.captureNames,
            o = global/*e*/.getPath(),
            a = requireLazy/*r*/.exec(o);
        if (!a) return null;
        for (var l = m(global/*e*/.getQueryData()), u = 1; u < a.length; u++) l[module/*i*/[u - 1]] = a[u];
        return l
    }, o.prototype.clone = function() {
        return new this.constructor(this.$DliteRoute_uri, this.$DliteRoute_data)
    }, o.prototype.getName = function() {
        return this.constructor.__name
    }, o.prototype.getData = function() {
        return this.$DliteRoute_data
    }, o.prototype.getQuery = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = this.$DliteRoute_data[global/*e*/],
            requireLazy/*r*/ = this.constructor.__queries,
            module/*i*/ = requireLazy/*r*/ && requireLazy/*r*/[global/*e*/];
        if (!module/*i*/ && "viewer" === global/*e*/) {
            var o = require/*t*/ && [require/*t*/.getQueryFragment(this)];
            return new c.QueryWithValues(new c.Query("viewer", null, null, o, null, this.getName()))
        }
        if (!module/*i*/) return null;
        if (!_.hasOwnProperty(global/*e*/)) {
            var a = this.constructor.__paramDefinitions;
            if (null == requireDynamic/*n*/ && a.hasOwnProperty(global/*e*/) && !a[global/*e*/].required) return null;
            null == requireDynamic/*n*/ && h(0, 'Required param "%s" for %s is %s. Check your URI.', global/*e*/, this.getName(), null === requireDynamic/*n*/ ? "null" : "undefined")
        }
        return new c.QueryWithValues(module/*i*/(requireDynamic/*n*/, require/*t*/, p.getQueryInterpreter(this)))
    }, o.prototype.getQueries = function() {
        return f(this.constructor.__queries, function(global/*e*/, require/*t*/) {
            return this.getQuery(require/*t*/)
        }.bind(this))
    }, o.prototype.hasQuery = function(global/*e*/) {
        var require/*t*/ = this.constructor.__queries;
        return "viewer" === global/*e*/ || !(!require/*t*/ || !require/*t*/[global/*e*/])
    }, o.prototype.getURI = function() {
        return this.$DliteRoute_uri
    }, o.prototype.getCacheKey = function() {
        return this.$DliteRoute_cacheKey || (this.$DliteRoute_cacheKey = g({
            route: this.getName(),
            args: this.getData()
        })), this.$DliteRoute_cacheKey
    }, o.prototype.isA = function(global/*e*/) {
        return this.getName() === global/*e*/
    }, o.prototype.renderTitle = function(global/*e*/) {
        var require/*t*/ = this.constructor.__renderTitle;
        return require/*t*/ && require/*t*/(global/*e*/)
    }, o.prototype.getComponent = function() {
        return this.constructor.__component
    }, o.$DliteRoute_getRegexAndCaptureNames = function() {
        if (null == this.__path && h(0, "Path must be defined in route spec for %s", this.__name), !this.$DliteRoute_regex) {
            if (this.$DliteRoute_captureNames = [], "/" === this.__path) this.$DliteRoute_regexString = "^/$";
            else {
                var global/*e*/ = this.__path.slice(1).split("/"),
                    require/*t*/ = global/*e*/.map(function(global/*e*/) {
                        if (l.PATH_COMPONENT.test(global/*e*/)) return "/" + a(global/*e*/);
                        var require/*t*/ = "?" == global/*e*/[1],
                            requireDynamic/*n*/ = global/*e*/.slice(require/*t*/ ? 2 : 1, -1),
                            requireLazy/*r*/ = this.__paramDefinitions[requireDynamic/*n*/],
                            module/*i*/ = l.COMPONENT_VALUE[requireLazy/*r*/.type],
                            o = "(" + module/*i*/ + ")";
                        return this.$DliteRoute_captureNames.push(requireDynamic/*n*/), require/*t*/ ? "(?:/" + o + ")?" : "/" + o
                    }.bind(this), this);
                this.$DliteRoute_regexString = "^" + require/*t*/.join("") + "/?$"
            }
            this.$DliteRoute_regex = new RegExp(this.$DliteRoute_regexString)
        }
        return {
            regex: this.$DliteRoute_regex,
            regexString: this.$DliteRoute_regexString,
            captureNames: this.$DliteRoute_captureNames
        }
    }, module/*i*/.exports = o
});