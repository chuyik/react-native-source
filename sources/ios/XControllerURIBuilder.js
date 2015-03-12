__d("XControllerURIBuilder",["URI","invariant"],function (e, t, n, r, i) {
    function o(e, t) {
        "use strict";
        this.$XControllerURIBuilder_path = e, this.$XControllerURIBuilder_paramDefinitions = t, this.$XControllerURIBuilder_params = {}
    }
    var URI/*a*/ = t("URI"),
        invariant/*s*/ = t("invariant");
    o.prototype.setInt = function(e, t) {
        "use strict";
        return this.__setParam(e, "Int", t)
    }, o.prototype.setFloat = function(e, t) {
        "use strict";
        return this.__setParam(e, "Float", t)
    }, o.prototype.setString = function(e, t) {
        "use strict";
        return this.__setParam(e, "String", t)
    }, o.prototype.setExists = function(e, t) {
        "use strict";
        return t === !1 && (t = void 0), this.__setParam(e, "Exists", t)
    }, o.prototype.setBool = function(e, t) {
        "use strict";
        return this.__setParam(e, "Bool", t)
    }, o.prototype.setEnum = function(e, t) {
        "use strict";
        return this.__setParam(e, "Enum", t)
    }, o.prototype.setIntVector = function(e, t) {
        "use strict";
        return this.__setParam(e, "IntVector", t)
    }, o.prototype.setFloatVector = function(e, t) {
        "use strict";
        return this.__setParam(e, "FloatVector", t)
    }, o.prototype.setStringVector = function(e, t) {
        "use strict";
        return this.__setParam(e, "StringVector", t)
    }, o.prototype.setEnumVector = function(e, t) {
        "use strict";
        return this.__setParam(e, "EnumVector", t)
    }, o.prototype.setIntToIntMap = function(e, t) {
        "use strict";
        return this.__setParam(e, "IntToIntMap", t)
    }, o.prototype.setIntToFloatMap = function(e, t) {
        "use strict";
        return this.__setParam(e, "IntToFloatMap", t)
    }, o.prototype.setIntToStringMap = function(e, t) {
        "use strict";
        return this.__setParam(e, "IntToStringMap", t)
    }, o.prototype.setIntToBoolMap = function(e, t) {
        "use strict";
        return this.__setParam(e, "IntToBoolMap", t)
    }, o.prototype.setStringToIntMap = function(e, t) {
        "use strict";
        return this.__setParam(e, "StringToIntMap", t)
    }, o.prototype.setStringToFloatMap = function(e, t) {
        "use strict";
        return this.__setParam(e, "StringToFloatMap", t)
    }, o.prototype.setStringToStringMap = function(e, t) {
        "use strict";
        return this.__setParam(e, "StringToStringMap", t)
    }, o.prototype.setStringToBoolMap = function(e, t) {
        "use strict";
        return this.__setParam(e, "StringToBoolMap", t)
    }, o.prototype.setHackType = function(e, t) {
        "use strict";
        return this.__setParam(e, "HackType", t)
    }, o.prototype.__validateRequiredParamsExistence = function() {
        "use strict";
        for (var e in this.$XControllerURIBuilder_paramDefinitions) this.$XControllerURIBuilder_paramDefinitions[e].required && !this.$XControllerURIBuilder_params.hasOwnProperty(e) && invariant/*s*/(0, "Missing required parameter: %invariant/*s*/", e)
    }, o.prototype.__setParam = function(e, t, n) {
        "use strict";
        e in this.$XControllerURIBuilder_paramDefinitions || invariant/*s*/(0, 'Attempting to set invalid param "%invariant/*s*/". Make sure the param is defined in the controller\'invariant/*s*/ getParamDefinition() method.', e);
        var r = this.$XControllerURIBuilder_paramDefinitions[e].type;
        return r !== t && invariant/*s*/(0, 'Attempting to set param "%invariant/*s*/" as %invariant/*s*/, but it is defined in the controller\'invariant/*s*/ getParamDefinition() method as %invariant/*s*/.', e, t, r), this.__setParamInt(e, n), this
    }, o.prototype.__setParamInt = function(e, t) {
        "use strict";
        this.$XControllerURIBuilder_params[e] = t
    }, o.prototype.getURI = function() {
        "use strict";
        this.__validateRequiredParamsExistence();
        for (var e = {}, t = "", n = new RegExp(/^\{(\?)?(\*)?(.+?)\}$/), r = this.$XControllerURIBuilder_path.split("/"), i = !1, o = 0; o < r.length; o++) {
            var l = r[o];
            if ("" !== l) {
                var u = n.exec(l);
                if (u) {
                    var c = "?" === u[1],
                        p = ("*" === u[2], u[3]),
                        d = this.$XControllerURIBuilder_paramDefinitions[p];
                    if (d || invariant/*s*/(0, 'Found unknown token "%invariant/*s*/" in path "%invariant/*s*/". Ensure it is defined in getParamDefinition().', p, this.$XControllerURIBuilder_path), c && i) continue;
                    var h = this.$XControllerURIBuilder_params[p];
                    if (null == h && c) {
                        i = !0;
                        continue
                    }
                    null == h && invariant/*s*/(0, "Missing required template parameter: %invariant/*s*/", p), t += "/" + h, e[p] = !0
                } else t += "/" + l
            }
        }
        "/" === this.$XControllerURIBuilder_path.slice(-1) && (t += "/");
        var f = new URI/*a*/(t);
        for (d in this.$XControllerURIBuilder_params)
            if (h = this.$XControllerURIBuilder_params[d], !e[d] && null != h) {
                var m = this.$XControllerURIBuilder_paramDefinitions[d];
                f.addQueryData(d, m && "Exists" === m.type ? null : h)
            }
        return f
    }, o.create = function(e, t) {
        return o.bind(null, e, t)
    }, i.exports = o
});