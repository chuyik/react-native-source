__d("GraphQL_EXPERIMENTAL",["generateRQLFieldAlias","invariant","isEmpty"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        if (this.$GraphQLNode_fields = global/*e*/ || M, generateRQLFieldAlias/*this.$GraphQLNode_fieldMap*/ = L, invariant/*this.$GraphQLNode_fragments*/ = require/*exports/*t*/*/ && require/*exports/*t*/*/.length > 0 ? require/*exports/*t*/*/.filter(v) : M, isEmpty/*this.$GraphQLNode_hasNestedVariables*/ = !1, this.$GraphQLNode_numNestedFragmentsWithVariables = 0, global/*e*/ && global/*e*/.length > 0) {
            generateRQLFieldAlias/*this.$GraphQLNode_fieldMap*/ = {};
            for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) {
                var requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/],
                    module/*i*/ = requireLazy/*r*/.getGeneratedAlias();
                void 0 !== generateRQLFieldAlias/*this.$GraphQLNode_fieldMap*/[module/*i*/] && I(0, 'Field "%s" is already in fields with the same calls.', requireLazy/*r*/.getFieldName()), generateRQLFieldAlias/*this.$GraphQLNode_fieldMap*/[module/*i*/] = requireLazy/*r*/, (requireLazy/*r*/.hasVariables() || requireLazy/*r*/.$GraphQLNode_hasNestedVariables) && (isEmpty/*this.$GraphQLNode_hasNestedVariables*/ = !0), this.$GraphQLNode_numNestedFragmentsWithVariables += requireLazy/*r*/.$GraphQLNode_numNestedFragmentsWithVariables
            }
        }
        for (var o = 0; o < invariant/*this.$GraphQLNode_fragments*/.length; o++)(invariant/*this.$GraphQLNode_fragments*/[o].$GraphQLNode_hasNestedVariables || invariant/*this.$GraphQLNode_fragments*/[o].$GraphQLNode_numNestedFragmentsWithVariables) && (this.$GraphQLNode_numNestedFragmentsWithVariables += 1)
    }

    function a(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        this.$GraphQLCallvNode_name = global/*e*/, this.$GraphQLCallvNode_metadata = requireDynamic/*n*/ || L, this.isVarArgs() && require/*exports/*t*/*/ && 1 === require/*exports/*t*/*/.length && Array.isArray(require/*exports/*t*/*/[0]) && (require/*exports/*t*/*/ = require/*exports/*t*/*/[0]), this.$GraphQLCallvNode_args = require/*exports/*t*/*/ ? require/*exports/*t*/*/.map(S) : M
    }

    function s(global/*e*/) {
        for (var require/*exports/*t*/*/ = [], requireDynamic/*n*/ = 1, requireLazy/*r*/ = arguments.length; requireLazy/*r*/ > requireDynamic/*n*/; requireDynamic/*n*/++) require/*exports/*t*/*/.push(arguments[requireDynamic/*n*/]);
        a.call(this, global/*e*/, require/*exports/*t*/*/)
    }

    function l(global/*e*/) {
        this.$GraphQLCallValue_callValue = global/*e*/ + ""
    }

    function u(global/*e*/, require/*exports/*t*/*/) {
        this.$GraphQLBatchCallVariable_sourceQueryID = global/*e*/, this.$GraphQLBatchCallVariable_jsonPath = require/*exports/*t*/*/
    }

    function c(global/*e*/) {
        this.$GraphQLCallVariable_callVariableName = global/*e*/
    }

    function p(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, a, s) {
        o.call(this, require/*exports/*t*/*/, requireDynamic/*n*/), A.test(global/*e*/) || I(0, '"%s" is not a valid field name', global/*e*/), k.test(module/*i*/) || I(0, '"%s" is not a valid alias name', module/*i*/), this.$GraphQLFieldNode_fieldName = global/*e*/, this.$GraphQLFieldNode_calls = requireLazy/*r*/ || M, this.$GraphQLFieldNode_alias = module/*i*/ || null, this.$GraphQLFieldNode_condition = a || null, this.$GraphQLFieldNode_metadata = s || L, this.$GraphQLFieldNode_generatedAlias = null, this.$GraphQLFieldNode_generatedFieldName = null, this.$GraphQLFieldNode_hasVariables = this.$GraphQLFieldNode_calls.some(w)
    }

    function d(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
        o.call(this, requireDynamic/*n*/, requireLazy/*r*/), this.$GraphQLQueryFragment_name = global/*e*/, this.$GraphQLQueryFragment_type = require/*exports/*t*/*/, this.$GraphQLQueryFragment_metadata = module/*i*/ || L, this.$GraphQLQueryFragment_isDeferred = null, this.$GraphQLQueryFragment_deferredCopy = null
    }

    function h(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/, s) {
        o.call(this, requireDynamic/*n*/, requireLazy/*r*/), this.$GraphQLQuery_rootCall = global/*e*/, this.$GraphQLQuery_metadata = module/*i*/ || L;
        var l = this.$GraphQLQuery_metadata.varargs ? {
            varargs: this.$GraphQLQuery_metadata.varargs
        } : null;
        this.$GraphQLQuery_rootNode = new a(global/*e*/, require/*exports/*t*/*/, l), this.$GraphQLQuery_queryName = s, this.$GraphQLQuery_allFragmentNames = null, this.$GraphQLQuery_deferredFragmentNames = null, this.$GraphQLQuery_description = null
    }

    function f(global/*e*/, require/*exports/*t*/*/) {
        this.$GraphQLQueryWithValues_query = global/*e*/, this.$GraphQLQueryWithValues_values = require/*exports/*t*/*/
    }

    function m(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
        o.call(this, requireLazy/*r*/, module/*i*/), this.$GraphQLMutation_name = global/*e*/, this.$GraphQLMutation_responseType = require/*exports/*t*/*/, this.$GraphQLMutation_mutationCall = requireDynamic/*n*/
    }

    function g(global/*e*/) {
        var require/*exports/*t*/*/ = "";
        return global/*e*/.getCondition() && (require/*exports/*t*/*/ += global/*e*/.getCondition() + "?"), require/*exports/*t*/*/ += global/*e*/.getFieldName(), 0 !== global/*e*/.getCalls().length && (require/*exports/*t*/*/ += "." + global/*e*/.getCalls().join("."), require/*exports/*t*/*/ += " as " + global/*e*/.getGeneratedAlias()), require/*exports/*t*/*/
    }

    function _(global/*e*/) {
        var require/*exports/*t*/*/ = y(global/*e*/);
        if (0 === require/*exports/*t*/*/.length) return "";
        for (var requireDynamic/*n*/ = [], requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*exports/*t*/*/.length; requireLazy/*r*/++) {
            var module/*i*/ = require/*exports/*t*/*/[requireLazy/*r*/];
            requireDynamic/*n*/.push(Array.isArray(module/*i*/) ? g(module/*i*/[0]) + _(module/*i*/) : module/*i*/.toString())
        }
        return "{" + requireDynamic/*n*/.join(",") + "}"
    }

    function y(global/*e*/) {
        for (var require/*exports/*t*/*/ = null, requireDynamic/*n*/ = 0; global/*e*/.length > 0;) {
            requireDynamic/*n*/++ < 1e4 || I(0, "Endless loop!");
            for (var requireLazy/*r*/ = global/*e*/.shift(), module/*i*/ = requireLazy/*r*/.getFragments(), o = 0; o < module/*i*/.length; o++) global/*e*/.push(module/*i*/[o]);
            for (var a = requireLazy/*r*/.getOwnFields(), s = 0; s < a.length; s++) {
                var l = a[s],
                    u = l.getGeneratedAlias();
                require/*exports/*t*/*/ = require/*exports/*t*/*/ || {}, require/*exports/*t*/*/.hasOwnProperty(u) ? (Array.isArray(require/*exports/*t*/*/[u]) || (require/*exports/*t*/*/[u] = [require/*exports/*t*/*/[u]]), require/*exports/*t*/*/[u].push(l)) : require/*exports/*t*/*/[u] = l
            }
        }
        if (!require/*exports/*t*/*/) return M;
        for (var c = [], p = Object.keys(require/*exports/*t*/*/).sort(), d = 0; d < p.length; d++) c.push(require/*exports/*t*/*/[p[d]]);
        return c
    }

    function v(global/*e*/) {
        return !!global/*e*/
    }

    function S(global/*e*/) {
        var require/*exports/*t*/*/ = typeof global/*e*/;
        if (null === global/*e*/ ? global/*e*/ = new c("__null__") : ("string" === require/*exports/*t*/*/ || "number" === require/*exports/*t*/*/ || "boolean" === require/*exports/*t*/*/) && (global/*e*/ = new l(global/*e*/ + "")), !(global/*e*/ instanceof l || global/*e*/ instanceof c || global/*e*/ instanceof u)) throw new TypeError("Unable to cast argument to GraphQL.Callv, got " + Object.prototype.toString.call(global/*e*/));
        return global/*e*/
    }

    function b(global/*e*/) {
        for (var require/*exports/*t*/*/ = -1, requireDynamic/*n*/ = global/*e*/.length - 1; requireDynamic/*n*/ >= 0; requireDynamic/*n*/--)
            if (null !== global/*e*/[requireDynamic/*n*/]) {
                require/*exports/*t*/*/ = requireDynamic/*n*/;
                break
            }
        return global/*e*/.length = require/*exports/*t*/*/ + 1, global/*e*/
    }

    function R(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/[0];
        switch (require/*exports/*t*/*/) {
            case N.CALL_VALUE:
                return l.fromJSON(global/*e*/);
            case N.CALL_VARIABLE:
                return c.fromJSON(global/*e*/);
            case N.BATCH_VARIABLE:
                return u.fromJSON(global/*e*/);
            default:
                throw new Error("Unknown type")
        }
    }

    function w(global/*e*/) {
        return global/*e*/.getArgs().some(T)
    }

    function C(global/*e*/) {
        return global/*e*/ instanceof u
    }

    function E(global/*e*/) {
        return global/*e*/.getRefParam()
    }

    function D(global/*e*/) {
        return global/*e*/.getSourceQueryID()
    }

    function T(global/*e*/) {
        return global/*e*/ instanceof c
    }

    function x(global/*e*/) {
        return global/*e*/.replace(/[)(}{><,.\\]/g, "\\$&")
    }
    var P = require/*exports/*t*/*/("generateRQLFieldAlias"),
        I = require/*exports/*t*/*/("invariant"),
        F = require/*exports/*t*/*/("isEmpty"),
        L = {},
        M = [],
        Q = "skip",
        A = /^[a-z_][a-z0-9_:\-]*$/,
        k = /^[\w-]+$/,
        O = "ref_";
    __DEV__ && (Object.freeze(L), Object.freeze(M));
    var N = {
            QUERY: 1,
            FRAGMENT: 2,
            FIELD: 3,
            CALL: 4,
            CALL_VALUE: 5,
            CALL_VARIABLE: 6,
            BATCH_VARIABLE: 7,
            MUTATION: 8,
            QUERY_WITH_VALUES: 9
        },
        G = 0;
    o.prototype.getOwnFields = function() {
        return this.$GraphQLNode_fields
    }, o.prototype.getUnaliasedFields = function(global/*e*/) {
        return this.$GraphQLNode_collectFields(this.getOwnUnaliasedFields, global/*e*/)
    }, o.prototype.$GraphQLNode_collectFields = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        requireDynamic/*n*/ || (requireDynamic/*n*/ = []);
        for (var requireLazy/*r*/ = global/*e*/.call(this, require/*exports/*t*/*/), module/*i*/ = 0; module/*i*/ < requireLazy/*r*/.length; module/*i*/++) requireDynamic/*n*/.push(requireLazy/*r*/[module/*i*/]);
        for (var o = this.getFragments(), a = 0; a < o.length; a++) o[a].$GraphQLNode_collectFields(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/);
        return requireDynamic/*n*/
    }, o.prototype.getOwnField = function(global/*e*/) {
        return generateRQLFieldAlias/*this.$GraphQLNode_fieldMap*/[global/*e*/] || null
    }, o.prototype.hasFields = function() {
        return this.$GraphQLNode_someFields(this.hasOwnFields, this.hasFields)
    }, o.prototype.hasOwnFields = function() {
        for (var global/*e*/ in generateRQLFieldAlias/*this.$GraphQLNode_fieldMap*/) return !0;
        return !1
    }, o.prototype.hasOwnField = function(global/*e*/) {
        return generateRQLFieldAlias/*this.$GraphQLNode_fieldMap*/.hasOwnProperty(global/*e*/)
    }, o.prototype.hasUnaliasedField = function(global/*e*/) {
        return this.$GraphQLNode_someFields(this.hasOwnUnaliasedField, this.hasUnaliasedField, global/*e*/)
    }, o.prototype.getOwnUnaliasedFields = function(global/*e*/) {
        for (var require/*exports/*t*/*/ = this.$GraphQLNode_fields, requireDynamic/*n*/ = [], requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*exports/*t*/*/.length; requireLazy/*r*/++) require/*exports/*t*/*/[requireLazy/*r*/].getFieldName() === global/*e*/ && requireDynamic/*n*/.push(require/*exports/*t*/*/[requireLazy/*r*/]);
        return requireDynamic/*n*/
    }, o.prototype.hasOwnUnaliasedField = function(global/*e*/) {
        return this.getOwnUnaliasedFields(global/*e*/).length > 0
    }, o.prototype.getFragments = function() {
        return invariant/*this.$GraphQLNode_fragments*/
    }, o.prototype.hasNestedVariables = function() {
        return isEmpty/*this.$GraphQLNode_hasNestedVariables*/
    }, o.prototype.getNumNestedFragmentsWithVariables = function() {
        return this.$GraphQLNode_numNestedFragmentsWithVariables
    }, o.prototype.equals = function(global/*e*/) {
        if (!global/*e*/ || this.$GraphQLNode_fields.length !== global/*e*/.$GraphQLNode_fields.length || invariant/*this.$GraphQLNode_fragments*/.length !== global/*e*/.$GraphQLNode_fragments.length) return !1;
        if (this !== global/*e*/) {
            for (var require/*exports/*t*/*/ = 0; require/*exports/*t*/*/ < this.$GraphQLNode_fields.length; require/*exports/*t*/*/++)
                if (!this.$GraphQLNode_fields[require/*exports/*t*/*/].equals(global/*e*/.$GraphQLNode_fields[require/*exports/*t*/*/])) return !1;
            for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < invariant/*this.$GraphQLNode_fragments*/.length; requireDynamic/*n*/++)
                if (!invariant/*this.$GraphQLNode_fragments*/[requireDynamic/*n*/].equals(global/*e*/.$GraphQLNode_fragments[requireDynamic/*n*/])) return !1
        }
        return !0
    }, o.prototype.$GraphQLNode_someFields = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        if (global/*e*/.call(this, requireDynamic/*n*/)) return !0;
        for (var requireLazy/*r*/ = 0; requireLazy/*r*/ < invariant/*this.$GraphQLNode_fragments*/.length; requireLazy/*r*/++)
            if (require/*exports/*t*/*/.call(invariant/*this.$GraphQLNode_fragments*/[requireLazy/*r*/], requireDynamic/*n*/)) return !0;
        return !1
    }, a.prototype.getName = function() {
        return this.$GraphQLCallvNode_name
    }, a.prototype.getArgs = function() {
        return this.$GraphQLCallvNode_args
    }, a.prototype.hasRefParam = function() {
        return !F(this.getRefParams())
    }, a.prototype.getRefParams = function() {
        if (!this.$GraphQLCallvNode_refParams) {
            var global/*e*/ = this.$GraphQLCallvNode_args.filter(C).map(E);
            global/*e*/.length <= 1 || I(0, "GraphQLQuery may have at most one BatchCallVariable root argument"), this.$GraphQLCallvNode_refParams = global/*e*/.length ? global/*e*/[0] : null
        }
        return this.$GraphQLCallvNode_refParams
    }, a.prototype.getRefTarget = function() {
        var global/*e*/ = this.getRefParams();
        if (global/*e*/) {
            var require/*exports/*t*/*/ = Object.keys(global/*e*/);
            if (require/*exports/*t*/*/.length) return global/*e*/[require/*exports/*t*/*/[0]].target
        }
        return null
    }, a.prototype.getSourceQueryID = function() {
        var global/*e*/ = this.$GraphQLCallvNode_args.filter(C).map(D);
        return global/*e*/.length < 2 || I(0, "GraphQLCallvNode.getSourceQueryID a query can only have one source query"), global/*e*/.length ? global/*e*/[0] : null
    }, a.prototype.isVarArgs = function() {
        return !!this.$GraphQLCallvNode_metadata.varargs
    }, a.prototype.toString = function(global/*e*/) {
        var require/*exports/*t*/*/ = this.$GraphQLCallvNode_args.map(function(require/*exports/*t*/*/) {
            return require/*exports/*t*/*/.toString(global/*e*/)
        });
        return this.$GraphQLCallvNode_name + "(" + require/*exports/*t*/*/.join(",") + ")"
    }, a.fromJSON = function(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/,
            requireDynamic/*n*/ = require/*exports/*t*/*/[0],
            requireLazy/*r*/ = require/*exports/*t*/*/[1],
            module/*i*/ = require/*exports/*t*/*/[2],
            o = require/*exports/*t*/*/[3];
        return requireDynamic/*n*/ !== N.CALL && I(0, "Expected call descriptor"), new a(requireLazy/*r*/, module/*i*/ ? module/*i*/.map(R) : null, o)
    }, a.prototype.toJSON = function() {
        return b([N.CALL, this.getName(), this.$GraphQLCallvNode_args.length ? this.$GraphQLCallvNode_args : null, this.$GraphQLCallvNode_metadata === L ? null : this.$GraphQLCallvNode_metadata])
    }, a.prototype.equals = function(global/*e*/) {
        var require/*exports/*t*/*/ = this.getArgs(),
            requireDynamic/*n*/ = global/*e*/.getArgs();
        if (this.getName() !== global/*e*/.getName() || require/*exports/*t*/*/.length !== requireDynamic/*n*/.length) return !1;
        for (var requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*exports/*t*/*/.length; requireLazy/*r*/++)
            if (!require/*exports/*t*/*/[requireLazy/*r*/].equals(requireDynamic/*n*/[requireLazy/*r*/])) return !1;
        return !0
    };
    for (var $ in a) a.hasOwnProperty($) && (s[$] = a[$]);
    var B = null === a ? null : a.prototype;
    s.prototype = Object.create(B), s.prototype.constructor = s, s.__superConstructor__ = a, l.prototype.getCallValue = function() {
        return this.$GraphQLCallValue_callValue
    }, l.prototype.equals = function(global/*e*/) {
        return global/*e*/ instanceof l && global/*e*/.getCallValue() === this.getCallValue()
    }, l.prototype.toString = function() {
        return x(this.$GraphQLCallValue_callValue)
    }, l.fromJSON = function(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/,
            requireDynamic/*n*/ = require/*exports/*t*/*/[0],
            requireLazy/*r*/ = require/*exports/*t*/*/[1];
        return requireDynamic/*n*/ !== N.CALL_VALUE && I(0, "Expected value descriptor"), new l(requireLazy/*r*/)
    }, l.prototype.toJSON = function() {
        return [N.CALL_VALUE, this.$GraphQLCallValue_callValue]
    }, u.prototype.getSourceQueryID = function() {
        return this.$GraphQLBatchCallVariable_sourceQueryID
    }, u.prototype.getRefParam = function() {
        if (!this.$GraphQLBatchCallVariable_refParam) {
            var global/*e*/ = {};
            global/*e*/[O + this.$GraphQLBatchCallVariable_sourceQueryID] = {
                query: this.$GraphQLBatchCallVariable_sourceQueryID,
                target: this.$GraphQLBatchCallVariable_jsonPath,
                fallback: Q
            }, this.$GraphQLBatchCallVariable_refParam = global/*e*/
        }
        return this.$GraphQLBatchCallVariable_refParam
    }, u.prototype.getJSONPath = function() {
        return this.$GraphQLBatchCallVariable_jsonPath
    }, u.prototype.equals = function(global/*e*/) {
        return global/*e*/ instanceof u && global/*e*/.getSourceQueryID() == this.getSourceQueryID() && global/*e*/.getJSONPath() == this.getJSONPath()
    }, u.prototype.toString = function() {
        return "<" + O + this.$GraphQLBatchCallVariable_sourceQueryID + ">"
    }, u.fromJSON = function(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/,
            requireDynamic/*n*/ = require/*exports/*t*/*/[0],
            requireLazy/*r*/ = require/*exports/*t*/*/[1],
            module/*i*/ = require/*exports/*t*/*/[2];
        return requireDynamic/*n*/ !== N.BATCH_VARIABLE && I(0, "Expected batch variable descriptor"), new u(requireLazy/*r*/, module/*i*/)
    }, u.prototype.toJSON = function() {
        return [N.BATCH_VARIABLE, this.$GraphQLBatchCallVariable_sourceQueryID, this.$GraphQLBatchCallVariable_jsonPath]
    }, c.prototype.getCallVariableName = function() {
        return this.$GraphQLCallVariable_callVariableName
    }, c.prototype.equals = function(global/*e*/) {
        return global/*e*/ instanceof c && global/*e*/.getCallVariableName() == this.getCallVariableName()
    }, c.prototype.toString = function(global/*e*/) {
        var require/*exports/*t*/*/ = this.$GraphQLCallVariable_callVariableName;
        return global/*e*/ && require/*exports/*t*/*/ in global/*e*/ ? x(global/*e*/[require/*exports/*t*/*/]) : "<" + require/*exports/*t*/*/ + ">"
    }, c.fromJSON = function(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/,
            requireDynamic/*n*/ = require/*exports/*t*/*/[0],
            requireLazy/*r*/ = require/*exports/*t*/*/[1];
        return requireDynamic/*n*/ !== N.CALL_VARIABLE && I(0, "Expected variable descriptor"), new c(requireLazy/*r*/)
    }, c.prototype.toJSON = function() {
        return [N.CALL_VARIABLE, this.$GraphQLCallVariable_callVariableName]
    };
    for (var H in o) o.hasOwnProperty(H) && (p[H] = o[H]);
    var V = null === o ? null : o.prototype;
    p.prototype = Object.create(V), p.prototype.constructor = p, p.__superConstructor__ = o, p.prototype.getFieldName = function() {
        return this.$GraphQLFieldNode_fieldName
    }, p.prototype.getAlias = function() {
        return this.$GraphQLFieldNode_alias
    }, p.prototype.getNameForClient = function() {
        return this.$GraphQLFieldNode_alias || this.$GraphQLFieldNode_fieldName
    }, p.prototype.getCalls = function() {
        return this.$GraphQLFieldNode_calls
    }, p.prototype.getCall = function(global/*e*/) {
        for (var require/*exports/*t*/*/ = 0; require/*exports/*t*/*/ < this.$GraphQLFieldNode_calls.length; require/*exports/*t*/*/++)
            if (this.$GraphQLFieldNode_calls[require/*exports/*t*/*/].getName() === global/*e*/) return this.$GraphQLFieldNode_calls[require/*exports/*t*/*/]
    }, p.prototype.getCondition = function() {
        return this.$GraphQLFieldNode_condition
    }, p.prototype.getInferredRootCallName = function() {
        return this.$GraphQLFieldNode_metadata.rootCall || null
    }, p.prototype.getInferredPrimaryKey = function() {
        return this.$GraphQLFieldNode_metadata.pk || null
    }, p.prototype.getEdgesID = function() {
        return this.$GraphQLFieldNode_metadata.edgesID
    }, p.prototype.isPlural = function() {
        return !!this.$GraphQLFieldNode_metadata.plural
    }, p.prototype.isConnection = function() {
        return !!this.$GraphQLFieldNode_metadata.connection
    }, p.prototype.isFindable = function() {
        return this.isConnection() && !this.$GraphQLFieldNode_metadata.nonFindable
    }, p.prototype.isLimitable = function() {
        return this.isConnection() && !this.$GraphQLFieldNode_metadata.nonLimitable
    }, p.prototype.isGenerated = function() {
        return !!this.$GraphQLFieldNode_metadata.generated
    }, p.prototype.isRequisite = function() {
        return !!this.$GraphQLFieldNode_metadata.requisite
    }, p.prototype.hasVariables = function() {
        return this.$GraphQLFieldNode_hasVariables
    }, p.prototype.shallowClone = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        return new p(this.$GraphQLFieldNode_fieldName, global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/ || this.getCalls(), this.$GraphQLFieldNode_alias, this.$GraphQLFieldNode_condition, this.$GraphQLFieldNode_metadata)
    }, p.prototype.getGeneratedAlias = function() {
        return this.$GraphQLFieldNode_generatedAlias || (this.$GraphQLFieldNode_generatedAlias = P(this.getGeneratedFieldName())), this.$GraphQLFieldNode_generatedAlias
    }, p.prototype.getGeneratedFieldName = function() {
        if (!this.$GraphQLFieldNode_generatedFieldName) {
            var global/*e*/ = this.getFieldName();
            0 !== this.$GraphQLFieldNode_calls.length && (global/*e*/ += "." + this.$GraphQLFieldNode_calls.join(".")), this.$GraphQLFieldNode_generatedFieldName = global/*e*/
        }
        return this.$GraphQLFieldNode_generatedFieldName
    }, p.prototype.equals = function(global/*e*/) {
        if (!global/*e*/ || this.$GraphQLFieldNode_fieldName !== global/*e*/.$GraphQLFieldNode_fieldName || this.$GraphQLFieldNode_alias !== global/*e*/.$GraphQLFieldNode_alias) return !1;
        var require/*exports/*t*/*/ = global/*e*/.getCalls();
        if (this.$GraphQLFieldNode_calls.length !== require/*exports/*t*/*/.length) return !1;
        for (var requireDynamic/*n*/ = 0; requireDynamic/*n*/ < this.$GraphQLFieldNode_calls.length; requireDynamic/*n*/++)
            if (!this.$GraphQLFieldNode_calls[requireDynamic/*n*/].equals(require/*exports/*t*/*/[requireDynamic/*n*/])) return !1;
        return V.equals.call(this, global/*e*/)
    }, p.prototype.toString = function() {
        return g(this) + _([this])
    }, p.fromJSON = function(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/,
            requireDynamic/*n*/ = require/*exports/*t*/*/[0],
            requireLazy/*r*/ = require/*exports/*t*/*/[1],
            module/*i*/ = require/*exports/*t*/*/[2],
            o = require/*exports/*t*/*/[3],
            s = require/*exports/*t*/*/[4],
            l = require/*exports/*t*/*/[5],
            u = require/*exports/*t*/*/[6],
            c = require/*exports/*t*/*/[7];
        return requireDynamic/*n*/ !== N.FIELD && I(0, "Expected field descriptor"), new p(requireLazy/*r*/, module/*i*/ ? module/*i*/.map(p.fromJSON) : null, o ? o.map(d.fromJSON) : null, s ? s.map(a.fromJSON) : null, l, u, c)
    }, p.prototype.toJSON = function() {
        var global/*e*/ = this.getFragments();
        return b([N.FIELD, this.getFieldName(), this.hasOwnFields() ? this.getOwnFields() : null, global/*e*/.length ? global/*e*/ : null, this.$GraphQLFieldNode_calls.length ? this.$GraphQLFieldNode_calls : null, this.getAlias(), this.$GraphQLFieldNode_condition, this.$GraphQLFieldNode_metadata === L ? null : this.$GraphQLFieldNode_metadata])
    };
    for (H in o) o.hasOwnProperty(H) && (d[H] = o[H]);
    d.prototype = Object.create(V), d.prototype.constructor = d, d.__superConstructor__ = o, d.prototype.getName = function() {
        return this.$GraphQLQueryFragment_name
    }, d.prototype.type = function() {
        return this.$GraphQLQueryFragment_type
    }, d.prototype.getScope = function() {
        return this.$GraphQLQueryFragment_metadata.scope || null
    }, d.prototype.isDeferred = function() {
        return !!this.$GraphQLQueryFragment_isDeferred
    }, d.prototype.getDeferredFragmentNames = function() {
        function global/*e*/(requireDynamic/*n*/) {
            requireDynamic/*n*/.isDeferred() && (require/*exports/*t*/*/[requireDynamic/*n*/.getName()] = requireDynamic/*n*/.getName());
            for (var requireLazy/*r*/ = requireDynamic/*n*/.getFragments(), module/*i*/ = 0; module/*i*/ < requireLazy/*r*/.length; module/*i*/++) global/*e*/(requireLazy/*r*/[module/*i*/])
        }
        var require/*exports/*t*/*/ = {};
        return global/*e*/(this), require/*exports/*t*/*/
    }, d.prototype.isPlural = function() {
        return !!this.$GraphQLQueryFragment_metadata.isPlural
    }, d.prototype.defer = function() {
        return this.$GraphQLQueryFragment_deferredCopy || (this.$GraphQLQueryFragment_deferredCopy = this.shallowClone(this.getOwnFields(), this.getFragments()), this.$GraphQLQueryFragment_deferredCopy.$GraphQLQueryFragment_isDeferred = !0), this.$GraphQLQueryFragment_deferredCopy
    }, d.prototype.shallowClone = function(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/ = new d(this.getName(), this.type(), global/*e*/, require/*exports/*t*/*/, this.$GraphQLQueryFragment_metadata);
        return this.isDeferred() && (requireDynamic/*n*/.$GraphQLQueryFragment_isDeferred = !0), requireDynamic/*n*/
    }, d.prototype.toString = function() {
        return "QueryFragment " + this.getName() + " : " + this.type() + " " + _([this])
    }, d.fromJSON = function(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/,
            requireDynamic/*n*/ = require/*exports/*t*/*/[0],
            requireLazy/*r*/ = require/*exports/*t*/*/[1],
            module/*i*/ = require/*exports/*t*/*/[2],
            o = require/*exports/*t*/*/[3],
            a = require/*exports/*t*/*/[4],
            s = require/*exports/*t*/*/[5];
        requireDynamic/*n*/ !== N.FRAGMENT && I(0, "Expected fragment descriptor");
        var l = new d(requireLazy/*r*/, module/*i*/, a ? a.map(p.fromJSON) : null, s ? s.map(d.fromJSON) : null);
        return o && (l.$GraphQLQueryFragment_isDeferred = !0), l
    }, d.prototype.toJSON = function() {
        var global/*e*/ = this.getFragments();
        return b([N.FRAGMENT, this.getName(), this.type(), this.isDeferred() ? 1 : 0, this.hasOwnFields() ? this.getOwnFields() : null, global/*e*/.length ? global/*e*/ : null])
    };
    for (H in o) o.hasOwnProperty(H) && (h[H] = o[H]);
    h.prototype = Object.create(V), h.prototype.constructor = h, h.__superConstructor__ = o, h.prototype.getID = function() {
        return this.$GraphQLQuery_id || (this.$GraphQLQuery_id = "q" + G++), this.$GraphQLQuery_id
    }, h.prototype.getQueryName = function() {
        return this.$GraphQLQuery_queryName
    }, h.prototype.getDescription = function() {
        if (!this.$GraphQLQuery_description) {
            var global/*e*/ = this.getID(),
                require/*exports/*t*/*/ = this.getAllFragmentNames(!0);
            require/*exports/*t*/*/ && (global/*e*/ = global/*e*/ + ":" + Object.keys(require/*exports/*t*/*/).join(":")), this.$GraphQLQuery_description = global/*e*/
        }
        return this.$GraphQLQuery_description
    }, h.prototype.rootCall = function() {
        return this.$GraphQLQuery_rootNode
    }, h.prototype.getAllFragmentNames = function() {
        return this.$GraphQLQuery_allFragmentNames || (this.$GraphQLQuery_allFragmentNames = this.$GraphQLQuery_getFragmentNames(!0)), this.$GraphQLQuery_allFragmentNames
    }, h.prototype.getDeferredFragmentNames = function() {
        return this.$GraphQLQuery_deferredFragmentNames || (this.$GraphQLQuery_deferredFragmentNames = this.$GraphQLQuery_getFragmentNames(!1)), this.$GraphQLQuery_deferredFragmentNames
    }, h.prototype.isDeferred = function() {
        return !!this.$GraphQLQuery_metadata.isDeferred
    }, h.prototype.isRefQueryDependency = function() {
        return !!this.$GraphQLQuery_metadata.isRefQueryDependency
    }, h.prototype.$GraphQLQuery_getFragmentNames = function(global/*e*/) {
        function require/*exports/*t*/*/(requireLazy/*r*/) {
            var module/*i*/;
            requireLazy/*r*/ instanceof d && (global/*e*/ || requireLazy/*r*/.isDeferred()) && (requireDynamic/*n*/ = requireDynamic/*n*/ || {}, module/*i*/ = requireLazy/*r*/.getName(), requireDynamic/*n*/[module/*i*/] = module/*i*/);
            for (var o = requireLazy/*r*/.getOwnFields(), a = 0; a < o.length; a++) require/*exports/*t*/*/(o[a]);
            for (var s = requireLazy/*r*/.getFragments(), l = 0; l < s.length; l++) require/*exports/*t*/*/(s[l])
        }
        var requireDynamic/*n*/ = null;
        return require/*exports/*t*/*/(this), requireDynamic/*n*/
    }, h.prototype.shallowClone = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/) {
        var module/*i*/ = this.rootCall();
        return new h(module/*i*/.getName(), module/*i*/.getArgs(), global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/ ? Object.assign({}, this.$GraphQLQuery_metadata, requireDynamic/*n*/) : this.$GraphQLQuery_metadata, requireLazy/*r*/ || this.$GraphQLQuery_queryName)
    }, h.prototype.shallowCloneWithSameID = function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = this.shallowClone(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/);
        return requireLazy/*r*/.$GraphQLQuery_id = this.getID(), requireLazy/*r*/
    }, h.prototype.toString = function() {
        return this.$GraphQLQuery_queryName ? "Query " + this.$GraphQLQuery_queryName + " {" + this.toStringWithoutName() + "}" : this.toStringWithoutName()
    }, h.prototype.toStringWithoutName = function() {
        return this.$GraphQLQuery_rootNode.toString() + _([this])
    }, h.fromJSON = function(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/,
            requireDynamic/*n*/ = require/*exports/*t*/*/[0],
            requireLazy/*r*/ = require/*exports/*t*/*/[1],
            module/*i*/ = require/*exports/*t*/*/[2],
            o = require/*exports/*t*/*/[3],
            a = require/*exports/*t*/*/[4],
            s = require/*exports/*t*/*/[5],
            l = require/*exports/*t*/*/[6];
        return requireDynamic/*n*/ !== N.QUERY && I(0, "Expected query descriptor"), new h(requireLazy/*r*/, module/*i*/ ? module/*i*/.map(R) : null, o ? o.map(p.fromJSON) : null, a ? a.map(d.fromJSON) : null, s, l)
    }, h.prototype.toJSON = function() {
        var global/*e*/ = this.rootCall(),
            require/*exports/*t*/*/ = global/*e*/.getArgs(),
            requireDynamic/*n*/ = this.getFragments();
        return b([N.QUERY, global/*e*/.getName(), require/*exports/*t*/*/.length ? require/*exports/*t*/*/ : null, this.hasOwnFields() ? this.getOwnFields() : null, requireDynamic/*n*/.length ? requireDynamic/*n*/ : null, this.$GraphQLQuery_metadata !== L ? this.$GraphQLQuery_metadata : null, this.$GraphQLQuery_queryName ? this.$GraphQLQuery_queryName : null])
    }, f.prototype.getQuery = function() {
        return this.$GraphQLQueryWithValues_query
    }, f.prototype.getValues = function() {
        return this.$GraphQLQueryWithValues_values
    }, f.fromJSON = function(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/,
            requireDynamic/*n*/ = require/*exports/*t*/*/[0],
            requireLazy/*r*/ = require/*exports/*t*/*/[1],
            module/*i*/ = require/*exports/*t*/*/[2];
        return requireDynamic/*n*/ !== N.QUERY_WITH_VALUES && I(0, "Expected query descriptor"), new f(h.fromJSON(requireLazy/*r*/), module/*i*/)
    }, f.prototype.toJSON = function() {
        return b([N.QUERY_WITH_VALUES, this.getQuery(), this.getValues()])
    };
    for (H in o) o.hasOwnProperty(H) && (m[H] = o[H]);
    m.prototype = Object.create(V), m.prototype.constructor = m, m.__superConstructor__ = o, m.prototype.getName = function() {
        return this.$GraphQLMutation_name
    }, m.prototype.getResponseType = function() {
        return this.$GraphQLMutation_responseType
    }, m.prototype.getCall = function() {
        return this.$GraphQLMutation_mutationCall
    }, m.prototype.shallowClone = function(global/*e*/, require/*exports/*t*/*/) {
        return new m(this.getName(), this.getResponseType(), this.getCall(), global/*e*/, require/*exports/*t*/*/)
    }, m.prototype.toString = function() {
        return "Mutation " + this.getName() + " : " + this.getResponseType() + " {" + this.getCall().toString() + _([this]) + "}"
    }, m.fromJSON = function(global/*e*/) {
        var require/*exports/*t*/*/ = global/*e*/,
            requireDynamic/*n*/ = require/*exports/*t*/*/[0],
            requireLazy/*r*/ = require/*exports/*t*/*/[1],
            module/*i*/ = require/*exports/*t*/*/[2],
            o = require/*exports/*t*/*/[3],
            s = require/*exports/*t*/*/[4],
            l = require/*exports/*t*/*/[5];
        return requireDynamic/*n*/ !== N.MUTATION && I(0, "Expected mutation descriptor"), new m(requireLazy/*r*/, module/*i*/, a.fromJSON(o), s ? s.map(p.fromJSON) : null, l ? l.map(d.fromJSON) : null)
    }, m.prototype.toJSON = function() {
        var global/*e*/ = this.getFragments();
        return b([N.MUTATION, this.getName(), this.getResponseType(), this.getCall(), this.hasOwnFields() ? this.getOwnFields() : null, global/*e*/.length ? global/*e*/ : null])
    };
    var q = {
        BatchCallVariable: u,
        Call: s,
        Callv: a,
        CallValue: l,
        CallVariable: c,
        Field: p,
        Mutation: m,
        Query: h,
        QueryFragment: d,
        QueryWithValues: f
    };
    module/*i*/.exports = q
});