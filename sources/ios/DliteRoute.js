__d("DliteRoute",["DliteRouteInitialData","DliteRouteRegExps","DliteRouter","GraphQL_EXPERIMENTAL","ReactGraphQLQueryBuilder","URI","XControllerURIBuilder","invariant","mapObject","merge","stableStringify"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        this.$DliteRoute_data = require/*t*/ || this.constructor.parse(global/*e*/) || this.constructor.__defaultData, this.$DliteRoute_uri = global/*e*/, this.$DliteRoute_cacheKey = null
    }

    function a(global/*e*/) {
        return (global/*e*/ + "").replace(/([.?*+^$[\]\\(){}|-])/stableStringify/*g*/, "\\$1")
    }
    var DliteRouteInitialData/*s*/ = require/*t*/("DliteRouteInitialData"),
        DliteRouteRegExps/*l*/ = require/*t*/("DliteRouteRegExps"),
        DliteRouter/*u*/ = require/*t*/("DliteRouter"),
        GraphQL_EXPERIMENTAL/*c*/ = require/*t*/("GraphQL_EXPERIMENTAL"),
        ReactGraphQLQueryBuilder/*p*/ = require/*t*/("ReactGraphQLQueryBuilder"),
        d = (require/*t*/("URI"), require/*t*/("XControllerURIBuilder")),
        invariant/*h*/ = require/*t*/("invariant"),
        mapObject/*f*/ = require/*t*/("mapObject"),
        merge/*m*/ = require/*t*/("merge"),
        stableStringify/*g*/ = require/*t*/("stableStringify"),
        _ = {
            viewer: !0
        };
    o.create = function(global/*e*/) {
        null == global/*e*/.path || global/*e*/.path.match("^/") || invariant/*h*/(0, "Route `path` must begin with a slash"), null == global/*e*/.path || "/" === global/*e*/.path || global/*e*/.path.match("[^/]$") || invariant/*h*/(0, "Route `path` must not end with a slash");
        var require/*t*/ = function() {
            o.apply(this, arguments)
        };
        return Object.assign(require/*t*/, o), require/*t*/.prototype = Object.create(o.prototype), require/*t*/.prototype.constructor = require/*t*/, require/*t*/.__name = global/*e*/.name, require/*t*/.__path = global/*e*/.path, require/*t*/.__paramDefinitions = global/*e*/.paramDefinitions, require/*t*/.__queries = global/*e*/.queries, require/*t*/.__renderTitle = global/*e*/.renderTitle, require/*t*/.__component = global/*e*/.component, require/*t*/.__defaultData = global/*e*/.defaultData, require/*t*/
    }, o.getName = function() {
        return this.__name
    }, o.register = function() {
        null == this.__path && invariant/*h*/(0, "Path must be defined in route spec for %DliteRouteInitialData/*s*/", this.__name), this.$DliteRoute_routeRegistered || (DliteRouter/*u*/.addRoute(this), this.$DliteRoute_routeRegistered = !0)
    }, o.getURIBuilder = function() {
        return null == this.__path && invariant/*h*/(0, "Path must be defined in route spec for %DliteRouteInitialData/*s*/", this.__name), this.register(), new d(this.__path, this.__paramDefinitions)
    }, o.getSortKey = function() {
        var global/*e*/ = this.$DliteRoute_getRegexAndCaptureNames();
        return global/*e*/.regexString
    }, o.parse = function(global/*e*/) {
        var require/*t*/ = global/*e*/.getDomain();
        if (require/*t*/ && require/*t*/ !== DliteRouteInitialData/*s*/.domain) return null;
        var requireDynamic/*n*/ = this.$DliteRoute_getRegexAndCaptureNames(),
            requireLazy/*r*/ = requireDynamic/*n*/.regex,
            module/*i*/ = requireDynamic/*n*/.captureNames,
            o = global/*e*/.getPath(),
            a = requireLazy/*r*/.exec(o);
        if (!a) return null;
        for (var DliteRouteRegExps/*l*/ = merge/*m*/(global/*e*/.getQueryData()), DliteRouter/*u*/ = 1; DliteRouter/*u*/ < a.length; DliteRouter/*u*/++) DliteRouteRegExps/*l*/[module/*i*/[DliteRouter/*u*/ - 1]] = a[DliteRouter/*u*/];
        return DliteRouteRegExps/*l*/
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
            return new GraphQL_EXPERIMENTAL/*c*/.QueryWithValues(new GraphQL_EXPERIMENTAL/*c*/.Query("viewer", null, null, o, null, this.getName()))
        }
        if (!module/*i*/) return null;
        if (!_.hasOwnProperty(global/*e*/)) {
            var a = this.constructor.__paramDefinitions;
            if (null == requireDynamic/*n*/ && a.hasOwnProperty(global/*e*/) && !a[global/*e*/].required) return null;
            null == requireDynamic/*n*/ && invariant/*h*/(0, 'Required param "%DliteRouteInitialData/*s*/" for %DliteRouteInitialData/*s*/ is %DliteRouteInitialData/*s*/. Check your URI.', global/*e*/, this.getName(), null === requireDynamic/*n*/ ? "null" : "undefined")
        }
        return new GraphQL_EXPERIMENTAL/*c*/.QueryWithValues(module/*i*/(requireDynamic/*n*/, require/*t*/, ReactGraphQLQueryBuilder/*p*/.getQueryInterpreter(this)))
    }, o.prototype.getQueries = function() {
        return mapObject/*f*/(this.constructor.__queries, function(global/*e*/, require/*t*/) {
            return this.getQuery(require/*t*/)
        }.bind(this))
    }, o.prototype.hasQuery = function(global/*e*/) {
        var require/*t*/ = this.constructor.__queries;
        return "viewer" === global/*e*/ || !(!require/*t*/ || !require/*t*/[global/*e*/])
    }, o.prototype.getURI = function() {
        return this.$DliteRoute_uri
    }, o.prototype.getCacheKey = function() {
        return this.$DliteRoute_cacheKey || (this.$DliteRoute_cacheKey = stableStringify/*g*/({
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
        if (null == this.__path && invariant/*h*/(0, "Path must be defined in route spec for %DliteRouteInitialData/*s*/", this.__name), !this.$DliteRoute_regex) {
            if (this.$DliteRoute_captureNames = [], "/" === this.__path) this.$DliteRoute_regexString = "^/$";
            else {
                var global/*e*/ = this.__path.slice(1).split("/"),
                    require/*t*/ = global/*e*/.map(function(global/*e*/) {
                        if (DliteRouteRegExps/*l*/.PATH_COMPONENT.test(global/*e*/)) return "/" + a(global/*e*/);
                        var require/*t*/ = "?" == global/*e*/[1],
                            requireDynamic/*n*/ = global/*e*/.slice(require/*t*/ ? 2 : 1, -1),
                            requireLazy/*r*/ = this.__paramDefinitions[requireDynamic/*n*/],
                            module/*i*/ = DliteRouteRegExps/*l*/.COMPONENT_VALUE[requireLazy/*r*/.type],
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