__d("DliteRoute",["DliteRouteInitialData","DliteRouteRegExps","DliteRouter","GraphQL_EXPERIMENTAL","ReactGraphQLQueryBuilder","URI","XControllerURIBuilder","invariant","mapObject","merge","stableStringify"],function (global/*e*/, require/*exports/*invariant/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*invariant/*t*/*/*/) {
        this.$DliteRoute_data = require/*exports/*invariant/*t*/*/*/ || this.constructor.parse(global/*e*/) || this.constructor.__defaultData, DliteRouteInitialData/*this.$DliteRoute_uri*/ = global/*e*/, DliteRouteRegExps/*this.$DliteRoute_cacheKey*/ = null
    }

    function a(global/*e*/) {
        return (global/*e*/ + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    var s = require/*exports/*invariant/*t*/*/*/("DliteRouteInitialData"),
        DliteRouter/*l*/ = require/*exports/*invariant/*t*/*/*/("DliteRouteRegExps"),
        GraphQL_EXPERIMENTAL/*u*/ = require/*exports/*invariant/*t*/*/*/("DliteRouter"),
        ReactGraphQLQueryBuilder/*c*/ = require/*exports/*invariant/*t*/*/*/("GraphQL_EXPERIMENTAL"),
        URI/*p*/ = require/*exports/*invariant/*t*/*/*/("ReactGraphQLQueryBuilder"),
        XControllerURIBuilder/*d*/ = (require/*exports/*invariant/*t*/*/*/("URI"), require/*exports/*invariant/*t*/*/*/("XControllerURIBuilder")),
        mapObject/*h*/ = require/*exports/*invariant/*t*/*/*/("invariant"),
        merge/*f*/ = require/*exports/*invariant/*t*/*/*/("mapObject"),
        stableStringify/*m*/ = require/*exports/*invariant/*t*/*/*/("merge"),
        g = require/*exports/*invariant/*t*/*/*/("stableStringify"),
        _ = {
            viewer: !0
        };
    o.create = function(global/*e*/) {
        null == global/*e*/.path || global/*e*/.path.match("^/") || mapObject/*h*/(0, "Route `path` must begin with a slash"), null == global/*e*/.path || "/" === global/*e*/.path || global/*e*/.path.match("[^/]$") || mapObject/*h*/(0, "Route `path` must not end with a slash");
        var require/*exports/*invariant/*t*/*/*/ = function() {
            o.apply(this, arguments)
        };
        return Object.assign(require/*exports/*invariant/*t*/*/*/, o), require/*exports/*invariant/*t*/*/*/.prototype = Object.create(o.prototype), require/*exports/*invariant/*t*/*/*/.prototype.constructor = require/*exports/*invariant/*t*/*/*/, require/*exports/*invariant/*t*/*/*/.__name = global/*e*/.name, require/*exports/*invariant/*t*/*/*/.__path = global/*e*/.path, require/*exports/*invariant/*t*/*/*/.__paramDefinitions = global/*e*/.paramDefinitions, require/*exports/*invariant/*t*/*/*/.__queries = global/*e*/.queries, require/*exports/*invariant/*t*/*/*/.__renderTitle = global/*e*/.renderTitle, require/*exports/*invariant/*t*/*/*/.__component = global/*e*/.component, require/*exports/*invariant/*t*/*/*/.__defaultData = global/*e*/.defaultData, require/*exports/*invariant/*t*/*/*/
    }, o.getName = function() {
        return this.__name
    }, o.register = function() {
        null == this.__path && mapObject/*h*/(0, "Path must be defined in route spec for %s", this.__name), this.$DliteRoute_routeRegistered || (GraphQL_EXPERIMENTAL/*u*/.addRoute(this), this.$DliteRoute_routeRegistered = !0)
    }, o.getURIBuilder = function() {
        return null == this.__path && mapObject/*h*/(0, "Path must be defined in route spec for %s", this.__name), this.register(), new XControllerURIBuilder/*d*/(this.__path, this.__paramDefinitions)
    }, o.getSortKey = function() {
        var global/*e*/ = this.$DliteRoute_getRegexAndCaptureNames();
        return global/*e*/.regexString
    }, o.parse = function(global/*e*/) {
        var require/*exports/*invariant/*t*/*/*/ = global/*e*/.getDomain();
        if (require/*exports/*invariant/*t*/*/*/ && require/*exports/*invariant/*t*/*/*/ !== s.domain) return null;
        var requireDynamic/*n*/ = this.$DliteRoute_getRegexAndCaptureNames(),
            requireLazy/*r*/ = requireDynamic/*n*/.regex,
            module/*i*/ = requireDynamic/*n*/.captureNames,
            o = global/*e*/.getPath(),
            a = requireLazy/*r*/.exec(o);
        if (!a) return null;
        for (var DliteRouter/*l*/ = stableStringify/*m*/(global/*e*/.getQueryData()), GraphQL_EXPERIMENTAL/*u*/ = 1; GraphQL_EXPERIMENTAL/*u*/ < a.length; GraphQL_EXPERIMENTAL/*u*/++) DliteRouter/*l*/[module/*i*/[GraphQL_EXPERIMENTAL/*u*/ - 1]] = a[GraphQL_EXPERIMENTAL/*u*/];
        return DliteRouter/*l*/
    }, o.prototype.clone = function() {
        return new this.constructor(DliteRouteInitialData/*this.$DliteRoute_uri*/, this.$DliteRoute_data)
    }, o.prototype.getName = function() {
        return this.constructor.__name
    }, o.prototype.getData = function() {
        return this.$DliteRoute_data
    }, o.prototype.getQuery = function(global/*e*/, require/*exports/*invariant/*t*/*/*/) {
        var requireDynamic/*n*/ = this.$DliteRoute_data[global/*e*/],
            requireLazy/*r*/ = this.constructor.__queries,
            module/*i*/ = requireLazy/*r*/ && requireLazy/*r*/[global/*e*/];
        if (!module/*i*/ && "viewer" === global/*e*/) {
            var o = require/*exports/*invariant/*t*/*/*/ && [require/*exports/*invariant/*t*/*/*/.getQueryFragment(this)];
            return new ReactGraphQLQueryBuilder/*c*/.QueryWithValues(new ReactGraphQLQueryBuilder/*c*/.Query("viewer", null, null, o, null, this.getName()))
        }
        if (!module/*i*/) return null;
        if (!_.hasOwnProperty(global/*e*/)) {
            var a = this.constructor.__paramDefinitions;
            if (null == requireDynamic/*n*/ && a.hasOwnProperty(global/*e*/) && !a[global/*e*/].required) return null;
            null == requireDynamic/*n*/ && mapObject/*h*/(0, 'Required param "%s" for %s is %s. Check your URI.', global/*e*/, this.getName(), null === requireDynamic/*n*/ ? "null" : "undefined")
        }
        return new ReactGraphQLQueryBuilder/*c*/.QueryWithValues(module/*i*/(requireDynamic/*n*/, require/*exports/*invariant/*t*/*/*/, URI/*p*/.getQueryInterpreter(this)))
    }, o.prototype.getQueries = function() {
        return merge/*f*/(this.constructor.__queries, function(global/*e*/, require/*exports/*invariant/*t*/*/*/) {
            return this.getQuery(require/*exports/*invariant/*t*/*/*/)
        }.bind(this))
    }, o.prototype.hasQuery = function(global/*e*/) {
        var require/*exports/*invariant/*t*/*/*/ = this.constructor.__queries;
        return "viewer" === global/*e*/ || !(!require/*exports/*invariant/*t*/*/*/ || !require/*exports/*invariant/*t*/*/*/[global/*e*/])
    }, o.prototype.getURI = function() {
        return DliteRouteInitialData/*this.$DliteRoute_uri*/
    }, o.prototype.getCacheKey = function() {
        return DliteRouteRegExps/*this.$DliteRoute_cacheKey*/ || (DliteRouteRegExps/*this.$DliteRoute_cacheKey*/ = g({
            route: this.getName(),
            args: this.getData()
        })), DliteRouteRegExps/*this.$DliteRoute_cacheKey*/
    }, o.prototype.isA = function(global/*e*/) {
        return this.getName() === global/*e*/
    }, o.prototype.renderTitle = function(global/*e*/) {
        var require/*exports/*invariant/*t*/*/*/ = this.constructor.__renderTitle;
        return require/*exports/*invariant/*t*/*/*/ && require/*exports/*invariant/*t*/*/*/(global/*e*/)
    }, o.prototype.getComponent = function() {
        return this.constructor.__component
    }, o.$DliteRoute_getRegexAndCaptureNames = function() {
        if (null == this.__path && mapObject/*h*/(0, "Path must be defined in route spec for %s", this.__name), !this.$DliteRoute_regex) {
            if (this.$DliteRoute_captureNames = [], "/" === this.__path) this.$DliteRoute_regexString = "^/$";
            else {
                var global/*e*/ = this.__path.slice(1).split("/"),
                    require/*exports/*invariant/*t*/*/*/ = global/*e*/.map(function(global/*e*/) {
                        if (DliteRouter/*l*/.PATH_COMPONENT.test(global/*e*/)) return "/" + a(global/*e*/);
                        var require/*exports/*invariant/*t*/*/*/ = "?" == global/*e*/[1],
                            requireDynamic/*n*/ = global/*e*/.slice(require/*exports/*invariant/*t*/*/*/ ? 2 : 1, -1),
                            requireLazy/*r*/ = this.__paramDefinitions[requireDynamic/*n*/],
                            module/*i*/ = DliteRouter/*l*/.COMPONENT_VALUE[requireLazy/*r*/.type],
                            o = "(" + module/*i*/ + ")";
                        return this.$DliteRoute_captureNames.push(requireDynamic/*n*/), require/*exports/*invariant/*t*/*/*/ ? "(?:/" + o + ")?" : "/" + o
                    }.bind(this), this);
                this.$DliteRoute_regexString = "^" + require/*exports/*invariant/*t*/*/*/.join("") + "/?$"
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