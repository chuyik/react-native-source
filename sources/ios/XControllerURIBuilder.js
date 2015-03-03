__d("XControllerURIBuilder",["URI","invariant"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        this.$XControllerURIBuilder_path = global/*e*/, URI/*this.$XControllerURIBuilder_paramDefinitions*/ = require/*exports/*t*/*/, invariant/*this.$XControllerURIBuilder_params*/ = {}
    }
    var a = require/*exports/*t*/*/("URI"),
        s = require/*exports/*t*/*/("invariant");
    o.prototype.setInt = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "Int", require/*exports/*t*/*/)
    }, o.prototype.setFloat = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "Float", require/*exports/*t*/*/)
    }, o.prototype.setString = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "String", require/*exports/*t*/*/)
    }, o.prototype.setExists = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return require/*exports/*t*/*/ === !1 && (require/*exports/*t*/*/ = void 0), this.__setParam(global/*e*/, "Exists", require/*exports/*t*/*/)
    }, o.prototype.setBool = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "Bool", require/*exports/*t*/*/)
    }, o.prototype.setEnum = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "Enum", require/*exports/*t*/*/)
    }, o.prototype.setIntVector = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "IntVector", require/*exports/*t*/*/)
    }, o.prototype.setFloatVector = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "FloatVector", require/*exports/*t*/*/)
    }, o.prototype.setStringVector = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "StringVector", require/*exports/*t*/*/)
    }, o.prototype.setEnumVector = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "EnumVector", require/*exports/*t*/*/)
    }, o.prototype.setIntToIntMap = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "IntToIntMap", require/*exports/*t*/*/)
    }, o.prototype.setIntToFloatMap = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "IntToFloatMap", require/*exports/*t*/*/)
    }, o.prototype.setIntToStringMap = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "IntToStringMap", require/*exports/*t*/*/)
    }, o.prototype.setIntToBoolMap = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "IntToBoolMap", require/*exports/*t*/*/)
    }, o.prototype.setStringToIntMap = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "StringToIntMap", require/*exports/*t*/*/)
    }, o.prototype.setStringToFloatMap = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "StringToFloatMap", require/*exports/*t*/*/)
    }, o.prototype.setStringToStringMap = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "StringToStringMap", require/*exports/*t*/*/)
    }, o.prototype.setStringToBoolMap = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "StringToBoolMap", require/*exports/*t*/*/)
    }, o.prototype.setHackType = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        return this.__setParam(global/*e*/, "HackType", require/*exports/*t*/*/)
    }, o.prototype.__validateRequiredParamsExistence = function() {
        "use strict";
        for (var global/*e*/ in URI/*this.$XControllerURIBuilder_paramDefinitions*/) URI/*this.$XControllerURIBuilder_paramDefinitions*/[global/*e*/].required && !invariant/*this.$XControllerURIBuilder_params*/.hasOwnProperty(global/*e*/) && s(0, "Missing required parameter: %s", global/*e*/)
    }, o.prototype.__setParam = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        "use strict";
        global/*e*/ in URI/*this.$XControllerURIBuilder_paramDefinitions*/ || s(0, 'Attempting to set invalid param "%s". Make sure the param is defined in the controller\'s getParamDefinition() method.', global/*e*/);
        var requireLazy/*r*/ = URI/*this.$XControllerURIBuilder_paramDefinitions*/[global/*e*/].type;
        return requireLazy/*r*/ !== require/*exports/*t*/*/ && s(0, 'Attempting to set param "%s" as %s, but it is defined in the controller\'s getParamDefinition() method as %s.', global/*e*/, require/*exports/*t*/*/, requireLazy/*r*/), this.__setParamInt(global/*e*/, requireDynamic/*n*/), this
    }, o.prototype.__setParamInt = function(global/*e*/, require/*exports/*t*/*/) {
        "use strict";
        invariant/*this.$XControllerURIBuilder_params*/[global/*e*/] = require/*exports/*t*/*/
    }, o.prototype.getURI = function() {
        "use strict";
        this.__validateRequiredParamsExistence();
        for (var global/*e*/ = {}, require/*exports/*t*/*/ = "", requireDynamic/*n*/ = new RegExp(/^\{(\?)?(\*)?(.+?)\}$/), requireLazy/*r*/ = this.$XControllerURIBuilder_path.split("/"), module/*i*/ = !1, o = 0; o < requireLazy/*r*/.length; o++) {
            var l = requireLazy/*r*/[o];
            if ("" !== l) {
                var u = requireDynamic/*n*/.exec(l);
                if (u) {
                    var c = "?" === u[1],
                        p = ("*" === u[2], u[3]),
                        d = URI/*this.$XControllerURIBuilder_paramDefinitions*/[p];
                    if (d || s(0, 'Found unknown token "%s" in path "%s". Ensure it is defined in getParamDefinition().', p, this.$XControllerURIBuilder_path), c && module/*i*/) continue;
                    var h = invariant/*this.$XControllerURIBuilder_params*/[p];
                    if (null == h && c) {
                        module/*i*/ = !0;
                        continue
                    }
                    null == h && s(0, "Missing required template parameter: %s", p), require/*exports/*t*/*/ += "/" + h, global/*e*/[p] = !0
                } else require/*exports/*t*/*/ += "/" + l
            }
        }
        "/" === this.$XControllerURIBuilder_path.slice(-1) && (require/*exports/*t*/*/ += "/");
        var f = new a(require/*exports/*t*/*/);
        for (d in invariant/*this.$XControllerURIBuilder_params*/)
            if (h = invariant/*this.$XControllerURIBuilder_params*/[d], !global/*e*/[d] && null != h) {
                var m = URI/*this.$XControllerURIBuilder_paramDefinitions*/[d];
                f.addQueryData(d, m && "Exists" === m.type ? null : h)
            }
        return f
    }, o.create = function(global/*e*/, require/*exports/*t*/*/) {
        return o.bind(null, global/*e*/, require/*exports/*t*/*/)
    }, module/*i*/.exports = o
});