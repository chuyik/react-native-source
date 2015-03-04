__d("XControllerURIBuilder",["URI","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        "use strict";
        this.$XControllerURIBuilder_path = global/*e*/, this.$XControllerURIBuilder_paramDefinitions = require/*t*/, this.$XControllerURIBuilder_params = {}
    }
    var URI/*a*/ = require/*t*/("URI"),
        invariant/*s*/ = require/*t*/("invariant");
    o.prototype.setInt = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "Int", require/*t*/)
    }, o.prototype.setFloat = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "Float", require/*t*/)
    }, o.prototype.setString = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "String", require/*t*/)
    }, o.prototype.setExists = function(global/*e*/, require/*t*/) {
        "use strict";
        return require/*t*/ === !1 && (require/*t*/ = void 0), this.__setParam(global/*e*/, "Exists", require/*t*/)
    }, o.prototype.setBool = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "Bool", require/*t*/)
    }, o.prototype.setEnum = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "Enum", require/*t*/)
    }, o.prototype.setIntVector = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "IntVector", require/*t*/)
    }, o.prototype.setFloatVector = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "FloatVector", require/*t*/)
    }, o.prototype.setStringVector = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "StringVector", require/*t*/)
    }, o.prototype.setEnumVector = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "EnumVector", require/*t*/)
    }, o.prototype.setIntToIntMap = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "IntToIntMap", require/*t*/)
    }, o.prototype.setIntToFloatMap = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "IntToFloatMap", require/*t*/)
    }, o.prototype.setIntToStringMap = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "IntToStringMap", require/*t*/)
    }, o.prototype.setIntToBoolMap = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "IntToBoolMap", require/*t*/)
    }, o.prototype.setStringToIntMap = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "StringToIntMap", require/*t*/)
    }, o.prototype.setStringToFloatMap = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "StringToFloatMap", require/*t*/)
    }, o.prototype.setStringToStringMap = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "StringToStringMap", require/*t*/)
    }, o.prototype.setStringToBoolMap = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "StringToBoolMap", require/*t*/)
    }, o.prototype.setHackType = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.__setParam(global/*e*/, "HackType", require/*t*/)
    }, o.prototype.__validateRequiredParamsExistence = function() {
        "use strict";
        for (var global/*e*/ in this.$XControllerURIBuilder_paramDefinitions) this.$XControllerURIBuilder_paramDefinitions[global/*e*/].required && !this.$XControllerURIBuilder_params.hasOwnProperty(global/*e*/) && invariant/*s*/(0, "Missing required parameter: %invariant/*s*/", global/*e*/)
    }, o.prototype.__setParam = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "use strict";
        global/*e*/ in this.$XControllerURIBuilder_paramDefinitions || invariant/*s*/(0, 'Attempting to set invalid param "%invariant/*s*/". Make sure the param is defined in the controller\'invariant/*s*/ getParamDefinition() method.', global/*e*/);
        var requireLazy/*r*/ = this.$XControllerURIBuilder_paramDefinitions[global/*e*/].type;
        return requireLazy/*r*/ !== require/*t*/ && invariant/*s*/(0, 'Attempting to set param "%invariant/*s*/" as %invariant/*s*/, but it is defined in the controller\'invariant/*s*/ getParamDefinition() method as %invariant/*s*/.', global/*e*/, require/*t*/, requireLazy/*r*/), this.__setParamInt(global/*e*/, requireDynamic/*n*/), this
    }, o.prototype.__setParamInt = function(global/*e*/, require/*t*/) {
        "use strict";
        this.$XControllerURIBuilder_params[global/*e*/] = require/*t*/
    }, o.prototype.getURI = function() {
        "use strict";
        this.__validateRequiredParamsExistence();
        for (var global/*e*/ = {}, require/*t*/ = "", requireDynamic/*n*/ = new RegExp(/^\{(\?)?(\*)?(.+?)\}$/), requireLazy/*r*/ = this.$XControllerURIBuilder_path.split("/"), module/*i*/ = !1, o = 0; o < requireLazy/*r*/.length; o++) {
            var l = requireLazy/*r*/[o];
            if ("" !== l) {
                var u = requireDynamic/*n*/.exec(l);
                if (u) {
                    var c = "?" === u[1],
                        p = ("*" === u[2], u[3]),
                        d = this.$XControllerURIBuilder_paramDefinitions[p];
                    if (d || invariant/*s*/(0, 'Found unknown token "%invariant/*s*/" in path "%invariant/*s*/". Ensure it is defined in getParamDefinition().', p, this.$XControllerURIBuilder_path), c && module/*i*/) continue;
                    var h = this.$XControllerURIBuilder_params[p];
                    if (null == h && c) {
                        module/*i*/ = !0;
                        continue
                    }
                    null == h && invariant/*s*/(0, "Missing required template parameter: %invariant/*s*/", p), require/*t*/ += "/" + h, global/*e*/[p] = !0
                } else require/*t*/ += "/" + l
            }
        }
        "/" === this.$XControllerURIBuilder_path.slice(-1) && (require/*t*/ += "/");
        var f = new URI/*a*/(require/*t*/);
        for (d in this.$XControllerURIBuilder_params)
            if (h = this.$XControllerURIBuilder_params[d], !global/*e*/[d] && null != h) {
                var m = this.$XControllerURIBuilder_paramDefinitions[d];
                f.addQueryData(d, m && "Exists" === m.type ? null : h)
            }
        return f
    }, o.create = function(global/*e*/, require/*t*/) {
        return o.bind(null, global/*e*/, require/*t*/)
    }, module/*i*/.exports = o
});