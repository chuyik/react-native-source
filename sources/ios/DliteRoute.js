__d("DliteRoute",["DliteRouteInitialData","DliteRouteRegExps","DliteRouter","GraphQL_EXPERIMENTAL","ReactGraphQLQueryBuilder","URI","XControllerURIBuilder","invariant","mapObject","merge","stableStringify"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        this.$DliteRoute_data = t || this.constructor.parse(e) || this.constructor.__defaultData, this.$DliteRoute_uri = e, this.$DliteRoute_cacheKey = null
    }

    function a(e) {
        return (e + "").replace(/([.?*+^$[\]\\(){}|-])/stableStringify/*g*/, "\\$1")
    }
    var DliteRouteInitialData/*s*/ = t("DliteRouteInitialData"),
        DliteRouteRegExps/*l*/ = t("DliteRouteRegExps"),
        DliteRouter/*u*/ = t("DliteRouter"),
        GraphQL_EXPERIMENTAL/*c*/ = t("GraphQL_EXPERIMENTAL"),
        ReactGraphQLQueryBuilder/*p*/ = t("ReactGraphQLQueryBuilder"),
        d = (t("URI"), t("XControllerURIBuilder")),
        invariant/*h*/ = t("invariant"),
        mapObject/*f*/ = t("mapObject"),
        merge/*m*/ = t("merge"),
        stableStringify/*g*/ = t("stableStringify"),
        _ = {
            viewer: !0
        };
    o.create = function(e) {
        null == e.path || e.path.match("^/") || invariant/*h*/(0, "Route `path` must begin with a slash"), null == e.path || "/" === e.path || e.path.match("[^/]$") || invariant/*h*/(0, "Route `path` must not end with a slash");
        var t = function() {
            o.apply(this, arguments)
        };
        return Object.assign(t, o), t.prototype = Object.create(o.prototype), t.prototype.constructor = t, t.__name = e.name, t.__path = e.path, t.__paramDefinitions = e.paramDefinitions, t.__queries = e.queries, t.__renderTitle = e.renderTitle, t.__component = e.component, t.__defaultData = e.defaultData, t
    }, o.getName = function() {
        return this.__name
    }, o.register = function() {
        null == this.__path && invariant/*h*/(0, "Path must be defined in route spec for %DliteRouteInitialData/*s*/", this.__name), this.$DliteRoute_routeRegistered || (DliteRouter/*u*/.addRoute(this), this.$DliteRoute_routeRegistered = !0)
    }, o.getURIBuilder = function() {
        return null == this.__path && invariant/*h*/(0, "Path must be defined in route spec for %DliteRouteInitialData/*s*/", this.__name), this.register(), new d(this.__path, this.__paramDefinitions)
    }, o.getSortKey = function() {
        var e = this.$DliteRoute_getRegexAndCaptureNames();
        return e.regexString
    }, o.parse = function(e) {
        var t = e.getDomain();
        if (t && t !== DliteRouteInitialData/*s*/.domain) return null;
        var n = this.$DliteRoute_getRegexAndCaptureNames(),
            r = n.regex,
            i = n.captureNames,
            o = e.getPath(),
            a = r.exec(o);
        if (!a) return null;
        for (var DliteRouteRegExps/*l*/ = merge/*m*/(e.getQueryData()), DliteRouter/*u*/ = 1; DliteRouter/*u*/ < a.length; DliteRouter/*u*/++) DliteRouteRegExps/*l*/[i[DliteRouter/*u*/ - 1]] = a[DliteRouter/*u*/];
        return DliteRouteRegExps/*l*/
    }, o.prototype.clone = function() {
        return new this.constructor(this.$DliteRoute_uri, this.$DliteRoute_data)
    }, o.prototype.getName = function() {
        return this.constructor.__name
    }, o.prototype.getData = function() {
        return this.$DliteRoute_data
    }, o.prototype.getQuery = function(e, t) {
        var n = this.$DliteRoute_data[e],
            r = this.constructor.__queries,
            i = r && r[e];
        if (!i && "viewer" === e) {
            var o = t && [t.getQueryFragment(this)];
            return new GraphQL_EXPERIMENTAL/*c*/.QueryWithValues(new GraphQL_EXPERIMENTAL/*c*/.Query("viewer", null, null, o, null, this.getName()))
        }
        if (!i) return null;
        if (!_.hasOwnProperty(e)) {
            var a = this.constructor.__paramDefinitions;
            if (null == n && a.hasOwnProperty(e) && !a[e].required) return null;
            null == n && invariant/*h*/(0, 'Required param "%DliteRouteInitialData/*s*/" for %DliteRouteInitialData/*s*/ is %DliteRouteInitialData/*s*/. Check your URI.', e, this.getName(), null === n ? "null" : "undefined")
        }
        return new GraphQL_EXPERIMENTAL/*c*/.QueryWithValues(i(n, t, ReactGraphQLQueryBuilder/*p*/.getQueryInterpreter(this)))
    }, o.prototype.getQueries = function() {
        return mapObject/*f*/(this.constructor.__queries, function(e, t) {
            return this.getQuery(t)
        }.bind(this))
    }, o.prototype.hasQuery = function(e) {
        var t = this.constructor.__queries;
        return "viewer" === e || !(!t || !t[e])
    }, o.prototype.getURI = function() {
        return this.$DliteRoute_uri
    }, o.prototype.getCacheKey = function() {
        return this.$DliteRoute_cacheKey || (this.$DliteRoute_cacheKey = stableStringify/*g*/({
            route: this.getName(),
            args: this.getData()
        })), this.$DliteRoute_cacheKey
    }, o.prototype.isA = function(e) {
        return this.getName() === e
    }, o.prototype.renderTitle = function(e) {
        var t = this.constructor.__renderTitle;
        return t && t(e)
    }, o.prototype.getComponent = function() {
        return this.constructor.__component
    }, o.$DliteRoute_getRegexAndCaptureNames = function() {
        if (null == this.__path && invariant/*h*/(0, "Path must be defined in route spec for %DliteRouteInitialData/*s*/", this.__name), !this.$DliteRoute_regex) {
            if (this.$DliteRoute_captureNames = [], "/" === this.__path) this.$DliteRoute_regexString = "^/$";
            else {
                var e = this.__path.slice(1).split("/"),
                    t = e.map(function(e) {
                        if (DliteRouteRegExps/*l*/.PATH_COMPONENT.test(e)) return "/" + a(e);
                        var t = "?" == e[1],
                            n = e.slice(t ? 2 : 1, -1),
                            r = this.__paramDefinitions[n],
                            i = DliteRouteRegExps/*l*/.COMPONENT_VALUE[r.type],
                            o = "(" + i + ")";
                        return this.$DliteRoute_captureNames.push(n), t ? "(?:/" + o + ")?" : "/" + o
                    }.bind(this), this);
                this.$DliteRoute_regexString = "^" + t.join("") + "/?$"
            }
            this.$DliteRoute_regex = new RegExp(this.$DliteRoute_regexString)
        }
        return {
            regex: this.$DliteRoute_regex,
            regexString: this.$DliteRoute_regexString,
            captureNames: this.$DliteRoute_captureNames
        }
    }, i.exports = o
});