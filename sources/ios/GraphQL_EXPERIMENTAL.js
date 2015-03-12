__d("GraphQL_EXPERIMENTAL",["generateRQLFieldAlias","invariant","isEmpty"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        if (this.$GraphQLNode_fields = e || M, this.$GraphQLNode_fieldMap = L, this.$GraphQLNode_fragments = t && t.length > 0 ? t.filter(v) : M, this.$GraphQLNode_hasNestedVariables = !1, this.$GraphQLNode_numNestedFragmentsWithVariables = 0, e && e.length > 0) {
            this.$GraphQLNode_fieldMap = {};
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    i = r.getGeneratedAlias();
                void 0 !== this.$GraphQLNode_fieldMap[i] && invariant/*I*/(0, 'Field "%s" is already in fields with the same calls.', r.getFieldName()), this.$GraphQLNode_fieldMap[i] = r, (r.hasVariables() || r.$GraphQLNode_hasNestedVariables) && (this.$GraphQLNode_hasNestedVariables = !0), this.$GraphQLNode_numNestedFragmentsWithVariables += r.$GraphQLNode_numNestedFragmentsWithVariables
            }
        }
        for (var o = 0; o < this.$GraphQLNode_fragments.length; o++)(this.$GraphQLNode_fragments[o].$GraphQLNode_hasNestedVariables || this.$GraphQLNode_fragments[o].$GraphQLNode_numNestedFragmentsWithVariables) && (this.$GraphQLNode_numNestedFragmentsWithVariables += 1)
    }

    function a(e, t, n) {
        this.$GraphQLCallvNode_name = e, this.$GraphQLCallvNode_metadata = n || L, this.isVarArgs() && t && 1 === t.length && Array.isArray(t[0]) && (t = t[0]), this.$GraphQLCallvNode_args = t ? t.map(S) : M
    }

    function s(e) {
        for (var t = [], n = 1, r = arguments.length; r > n; n++) t.push(arguments[n]);
        a.call(this, e, t)
    }

    function l(e) {
        this.$GraphQLCallValue_callValue = e + ""
    }

    function u(e, t) {
        this.$GraphQLBatchCallVariable_sourceQueryID = e, this.$GraphQLBatchCallVariable_jsonPath = t
    }

    function c(e) {
        this.$GraphQLCallVariable_callVariableName = e
    }

    function p(e, t, n, r, i, a, s) {
        o.call(this, t, n), A.test(e) || invariant/*I*/(0, '"%s" is not a valid field name', e), k.test(i) || invariant/*I*/(0, '"%s" is not a valid alias name', i), this.$GraphQLFieldNode_fieldName = e, this.$GraphQLFieldNode_calls = r || M, this.$GraphQLFieldNode_alias = i || null, this.$GraphQLFieldNode_condition = a || null, this.$GraphQLFieldNode_metadata = s || L, this.$GraphQLFieldNode_generatedAlias = null, this.$GraphQLFieldNode_generatedFieldName = null, this.$GraphQLFieldNode_hasVariables = this.$GraphQLFieldNode_calls.some(w)
    }

    function d(e, t, n, r, i) {
        o.call(this, n, r), this.$GraphQLQueryFragment_name = e, this.$GraphQLQueryFragment_type = t, this.$GraphQLQueryFragment_metadata = i || L, this.$GraphQLQueryFragment_isDeferred = null, this.$GraphQLQueryFragment_deferredCopy = null
    }

    function h(e, t, n, r, i, s) {
        o.call(this, n, r), this.$GraphQLQuery_rootCall = e, this.$GraphQLQuery_metadata = i || L;
        var l = this.$GraphQLQuery_metadata.varargs ? {
            varargs: this.$GraphQLQuery_metadata.varargs
        } : null;
        this.$GraphQLQuery_rootNode = new a(e, t, l), this.$GraphQLQuery_queryName = s, this.$GraphQLQuery_allFragmentNames = null, this.$GraphQLQuery_deferredFragmentNames = null, this.$GraphQLQuery_description = null
    }

    function f(e, t) {
        this.$GraphQLQueryWithValues_query = e, this.$GraphQLQueryWithValues_values = t
    }

    function m(e, t, n, r, i) {
        o.call(this, r, i), this.$GraphQLMutation_name = e, this.$GraphQLMutation_responseType = t, this.$GraphQLMutation_mutationCall = n
    }

    function g(e) {
        var t = "";
        return e.getCondition() && (t += e.getCondition() + "?"), t += e.getFieldName(), 0 !== e.getCalls().length && (t += "." + e.getCalls().join("."), t += " as " + e.getGeneratedAlias()), t
    }

    function _(e) {
        var t = y(e);
        if (0 === t.length) return "";
        for (var n = [], r = 0; r < t.length; r++) {
            var i = t[r];
            n.push(Array.isArray(i) ? g(i[0]) + _(i) : i.toString())
        }
        return "{" + n.join(",") + "}"
    }

    function y(e) {
        for (var t = null, n = 0; e.length > 0;) {
            n++ < 1e4 || invariant/*I*/(0, "Endless loop!");
            for (var r = e.shift(), i = r.getFragments(), o = 0; o < i.length; o++) e.push(i[o]);
            for (var a = r.getOwnFields(), s = 0; s < a.length; s++) {
                var l = a[s],
                    u = l.getGeneratedAlias();
                t = t || {}, t.hasOwnProperty(u) ? (Array.isArray(t[u]) || (t[u] = [t[u]]), t[u].push(l)) : t[u] = l
            }
        }
        if (!t) return M;
        for (var c = [], p = Object.keys(t).sort(), d = 0; d < p.length; d++) c.push(t[p[d]]);
        return c
    }

    function v(e) {
        return !!e
    }

    function S(e) {
        var t = typeof e;
        if (null === e ? e = new c("__null__") : ("string" === t || "number" === t || "boolean" === t) && (e = new l(e + "")), !(e instanceof l || e instanceof c || e instanceof u)) throw new TypeError("Unable to cast argument to GraphQL.Callv, got " + Object.prototype.toString.call(e));
        return e
    }

    function b(e) {
        for (var t = -1, n = e.length - 1; n >= 0; n--)
            if (null !== e[n]) {
                t = n;
                break
            }
        return e.length = t + 1, e
    }

    function R(e) {
        var t = e[0];
        switch (t) {
            case N.CALL_VALUE:
                return l.fromJSON(e);
            case N.CALL_VARIABLE:
                return c.fromJSON(e);
            case N.BATCH_VARIABLE:
                return u.fromJSON(e);
            default:
                throw new Error("Unknown type")
        }
    }

    function w(e) {
        return e.getArgs().some(T)
    }

    function C(e) {
        return e instanceof u
    }

    function E(e) {
        return e.getRefParam()
    }

    function D(e) {
        return e.getSourceQueryID()
    }

    function T(e) {
        return e instanceof c
    }

    function x(e) {
        return e.replace(/[)(}{><,.\\]/g, "\\$&")
    }
    var generateRQLFieldAlias/*P*/ = t("generateRQLFieldAlias"),
        invariant/*I*/ = t("invariant"),
        isEmpty/*F*/ = t("isEmpty"),
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
    }, o.prototype.getUnaliasedFields = function(e) {
        return this.$GraphQLNode_collectFields(this.getOwnUnaliasedFields, e)
    }, o.prototype.$GraphQLNode_collectFields = function(e, t, n) {
        n || (n = []);
        for (var r = e.call(this, t), i = 0; i < r.length; i++) n.push(r[i]);
        for (var o = this.getFragments(), a = 0; a < o.length; a++) o[a].$GraphQLNode_collectFields(e, t, n);
        return n
    }, o.prototype.getOwnField = function(e) {
        return this.$GraphQLNode_fieldMap[e] || null
    }, o.prototype.hasFields = function() {
        return this.$GraphQLNode_someFields(this.hasOwnFields, this.hasFields)
    }, o.prototype.hasOwnFields = function() {
        for (var e in this.$GraphQLNode_fieldMap) return !0;
        return !1
    }, o.prototype.hasOwnField = function(e) {
        return this.$GraphQLNode_fieldMap.hasOwnProperty(e)
    }, o.prototype.hasUnaliasedField = function(e) {
        return this.$GraphQLNode_someFields(this.hasOwnUnaliasedField, this.hasUnaliasedField, e)
    }, o.prototype.getOwnUnaliasedFields = function(e) {
        for (var t = this.$GraphQLNode_fields, n = [], r = 0; r < t.length; r++) t[r].getFieldName() === e && n.push(t[r]);
        return n
    }, o.prototype.hasOwnUnaliasedField = function(e) {
        return this.getOwnUnaliasedFields(e).length > 0
    }, o.prototype.getFragments = function() {
        return this.$GraphQLNode_fragments
    }, o.prototype.hasNestedVariables = function() {
        return this.$GraphQLNode_hasNestedVariables
    }, o.prototype.getNumNestedFragmentsWithVariables = function() {
        return this.$GraphQLNode_numNestedFragmentsWithVariables
    }, o.prototype.equals = function(e) {
        if (!e || this.$GraphQLNode_fields.length !== e.$GraphQLNode_fields.length || this.$GraphQLNode_fragments.length !== e.$GraphQLNode_fragments.length) return !1;
        if (this !== e) {
            for (var t = 0; t < this.$GraphQLNode_fields.length; t++)
                if (!this.$GraphQLNode_fields[t].equals(e.$GraphQLNode_fields[t])) return !1;
            for (var n = 0; n < this.$GraphQLNode_fragments.length; n++)
                if (!this.$GraphQLNode_fragments[n].equals(e.$GraphQLNode_fragments[n])) return !1
        }
        return !0
    }, o.prototype.$GraphQLNode_someFields = function(e, t, n) {
        if (e.call(this, n)) return !0;
        for (var r = 0; r < this.$GraphQLNode_fragments.length; r++)
            if (t.call(this.$GraphQLNode_fragments[r], n)) return !0;
        return !1
    }, a.prototype.getName = function() {
        return this.$GraphQLCallvNode_name
    }, a.prototype.getArgs = function() {
        return this.$GraphQLCallvNode_args
    }, a.prototype.hasRefParam = function() {
        return !isEmpty/*F*/(this.getRefParams())
    }, a.prototype.getRefParams = function() {
        if (!this.$GraphQLCallvNode_refParams) {
            var e = this.$GraphQLCallvNode_args.filter(C).map(E);
            e.length <= 1 || invariant/*I*/(0, "GraphQLQuery may have at most one BatchCallVariable root argument"), this.$GraphQLCallvNode_refParams = e.length ? e[0] : null
        }
        return this.$GraphQLCallvNode_refParams
    }, a.prototype.getRefTarget = function() {
        var e = this.getRefParams();
        if (e) {
            var t = Object.keys(e);
            if (t.length) return e[t[0]].target
        }
        return null
    }, a.prototype.getSourceQueryID = function() {
        var e = this.$GraphQLCallvNode_args.filter(C).map(D);
        return e.length < 2 || invariant/*I*/(0, "GraphQLCallvNode.getSourceQueryID a query can only have one source query"), e.length ? e[0] : null
    }, a.prototype.isVarArgs = function() {
        return !!this.$GraphQLCallvNode_metadata.varargs
    }, a.prototype.toString = function(e) {
        var t = this.$GraphQLCallvNode_args.map(function(t) {
            return t.toString(e)
        });
        return this.$GraphQLCallvNode_name + "(" + t.join(",") + ")"
    }, a.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1],
            i = t[2],
            o = t[3];
        return n !== N.CALL && invariant/*I*/(0, "Expected call descriptor"), new a(r, i ? i.map(R) : null, o)
    }, a.prototype.toJSON = function() {
        return b([N.CALL, this.getName(), this.$GraphQLCallvNode_args.length ? this.$GraphQLCallvNode_args : null, this.$GraphQLCallvNode_metadata === L ? null : this.$GraphQLCallvNode_metadata])
    }, a.prototype.equals = function(e) {
        var t = this.getArgs(),
            n = e.getArgs();
        if (this.getName() !== e.getName() || t.length !== n.length) return !1;
        for (var r = 0; r < t.length; r++)
            if (!t[r].equals(n[r])) return !1;
        return !0
    };
    for (var $ in a) a.hasOwnProperty($) && (s[$] = a[$]);
    var B = null === a ? null : a.prototype;
    s.prototype = Object.create(B), s.prototype.constructor = s, s.__superConstructor__ = a, l.prototype.getCallValue = function() {
        return this.$GraphQLCallValue_callValue
    }, l.prototype.equals = function(e) {
        return e instanceof l && e.getCallValue() === this.getCallValue()
    }, l.prototype.toString = function() {
        return x(this.$GraphQLCallValue_callValue)
    }, l.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1];
        return n !== N.CALL_VALUE && invariant/*I*/(0, "Expected value descriptor"), new l(r)
    }, l.prototype.toJSON = function() {
        return [N.CALL_VALUE, this.$GraphQLCallValue_callValue]
    }, u.prototype.getSourceQueryID = function() {
        return this.$GraphQLBatchCallVariable_sourceQueryID
    }, u.prototype.getRefParam = function() {
        if (!this.$GraphQLBatchCallVariable_refParam) {
            var e = {};
            e[O + this.$GraphQLBatchCallVariable_sourceQueryID] = {
                query: this.$GraphQLBatchCallVariable_sourceQueryID,
                target: this.$GraphQLBatchCallVariable_jsonPath,
                fallback: Q
            }, this.$GraphQLBatchCallVariable_refParam = e
        }
        return this.$GraphQLBatchCallVariable_refParam
    }, u.prototype.getJSONPath = function() {
        return this.$GraphQLBatchCallVariable_jsonPath
    }, u.prototype.equals = function(e) {
        return e instanceof u && e.getSourceQueryID() == this.getSourceQueryID() && e.getJSONPath() == this.getJSONPath()
    }, u.prototype.toString = function() {
        return "<" + O + this.$GraphQLBatchCallVariable_sourceQueryID + ">"
    }, u.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1],
            i = t[2];
        return n !== N.BATCH_VARIABLE && invariant/*I*/(0, "Expected batch variable descriptor"), new u(r, i)
    }, u.prototype.toJSON = function() {
        return [N.BATCH_VARIABLE, this.$GraphQLBatchCallVariable_sourceQueryID, this.$GraphQLBatchCallVariable_jsonPath]
    }, c.prototype.getCallVariableName = function() {
        return this.$GraphQLCallVariable_callVariableName
    }, c.prototype.equals = function(e) {
        return e instanceof c && e.getCallVariableName() == this.getCallVariableName()
    }, c.prototype.toString = function(e) {
        var t = this.$GraphQLCallVariable_callVariableName;
        return e && t in e ? x(e[t]) : "<" + t + ">"
    }, c.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1];
        return n !== N.CALL_VARIABLE && invariant/*I*/(0, "Expected variable descriptor"), new c(r)
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
    }, p.prototype.getCall = function(e) {
        for (var t = 0; t < this.$GraphQLFieldNode_calls.length; t++)
            if (this.$GraphQLFieldNode_calls[t].getName() === e) return this.$GraphQLFieldNode_calls[t]
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
    }, p.prototype.shallowClone = function(e, t, n) {
        return new p(this.$GraphQLFieldNode_fieldName, e, t, n || this.getCalls(), this.$GraphQLFieldNode_alias, this.$GraphQLFieldNode_condition, this.$GraphQLFieldNode_metadata)
    }, p.prototype.getGeneratedAlias = function() {
        return this.$GraphQLFieldNode_generatedAlias || (this.$GraphQLFieldNode_generatedAlias = generateRQLFieldAlias/*P*/(this.getGeneratedFieldName())), this.$GraphQLFieldNode_generatedAlias
    }, p.prototype.getGeneratedFieldName = function() {
        if (!this.$GraphQLFieldNode_generatedFieldName) {
            var e = this.getFieldName();
            0 !== this.$GraphQLFieldNode_calls.length && (e += "." + this.$GraphQLFieldNode_calls.join(".")), this.$GraphQLFieldNode_generatedFieldName = e
        }
        return this.$GraphQLFieldNode_generatedFieldName
    }, p.prototype.equals = function(e) {
        if (!e || this.$GraphQLFieldNode_fieldName !== e.$GraphQLFieldNode_fieldName || this.$GraphQLFieldNode_alias !== e.$GraphQLFieldNode_alias) return !1;
        var t = e.getCalls();
        if (this.$GraphQLFieldNode_calls.length !== t.length) return !1;
        for (var n = 0; n < this.$GraphQLFieldNode_calls.length; n++)
            if (!this.$GraphQLFieldNode_calls[n].equals(t[n])) return !1;
        return V.equals.call(this, e)
    }, p.prototype.toString = function() {
        return g(this) + _([this])
    }, p.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1],
            i = t[2],
            o = t[3],
            s = t[4],
            l = t[5],
            u = t[6],
            c = t[7];
        return n !== N.FIELD && invariant/*I*/(0, "Expected field descriptor"), new p(r, i ? i.map(p.fromJSON) : null, o ? o.map(d.fromJSON) : null, s ? s.map(a.fromJSON) : null, l, u, c)
    }, p.prototype.toJSON = function() {
        var e = this.getFragments();
        return b([N.FIELD, this.getFieldName(), this.hasOwnFields() ? this.getOwnFields() : null, e.length ? e : null, this.$GraphQLFieldNode_calls.length ? this.$GraphQLFieldNode_calls : null, this.getAlias(), this.$GraphQLFieldNode_condition, this.$GraphQLFieldNode_metadata === L ? null : this.$GraphQLFieldNode_metadata])
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
        function e(n) {
            n.isDeferred() && (t[n.getName()] = n.getName());
            for (var r = n.getFragments(), i = 0; i < r.length; i++) e(r[i])
        }
        var t = {};
        return e(this), t
    }, d.prototype.isPlural = function() {
        return !!this.$GraphQLQueryFragment_metadata.isPlural
    }, d.prototype.defer = function() {
        return this.$GraphQLQueryFragment_deferredCopy || (this.$GraphQLQueryFragment_deferredCopy = this.shallowClone(this.getOwnFields(), this.getFragments()), this.$GraphQLQueryFragment_deferredCopy.$GraphQLQueryFragment_isDeferred = !0), this.$GraphQLQueryFragment_deferredCopy
    }, d.prototype.shallowClone = function(e, t) {
        var n = new d(this.getName(), this.type(), e, t, this.$GraphQLQueryFragment_metadata);
        return this.isDeferred() && (n.$GraphQLQueryFragment_isDeferred = !0), n
    }, d.prototype.toString = function() {
        return "QueryFragment " + this.getName() + " : " + this.type() + " " + _([this])
    }, d.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1],
            i = t[2],
            o = t[3],
            a = t[4],
            s = t[5];
        n !== N.FRAGMENT && invariant/*I*/(0, "Expected fragment descriptor");
        var l = new d(r, i, a ? a.map(p.fromJSON) : null, s ? s.map(d.fromJSON) : null);
        return o && (l.$GraphQLQueryFragment_isDeferred = !0), l
    }, d.prototype.toJSON = function() {
        var e = this.getFragments();
        return b([N.FRAGMENT, this.getName(), this.type(), this.isDeferred() ? 1 : 0, this.hasOwnFields() ? this.getOwnFields() : null, e.length ? e : null])
    };
    for (H in o) o.hasOwnProperty(H) && (h[H] = o[H]);
    h.prototype = Object.create(V), h.prototype.constructor = h, h.__superConstructor__ = o, h.prototype.getID = function() {
        return this.$GraphQLQuery_id || (this.$GraphQLQuery_id = "q" + G++), this.$GraphQLQuery_id
    }, h.prototype.getQueryName = function() {
        return this.$GraphQLQuery_queryName
    }, h.prototype.getDescription = function() {
        if (!this.$GraphQLQuery_description) {
            var e = this.getID(),
                t = this.getAllFragmentNames(!0);
            t && (e = e + ":" + Object.keys(t).join(":")), this.$GraphQLQuery_description = e
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
    }, h.prototype.$GraphQLQuery_getFragmentNames = function(e) {
        function t(r) {
            var i;
            r instanceof d && (e || r.isDeferred()) && (n = n || {}, i = r.getName(), n[i] = i);
            for (var o = r.getOwnFields(), a = 0; a < o.length; a++) t(o[a]);
            for (var s = r.getFragments(), l = 0; l < s.length; l++) t(s[l])
        }
        var n = null;
        return t(this), n
    }, h.prototype.shallowClone = function(e, t, n, r) {
        var i = this.rootCall();
        return new h(i.getName(), i.getArgs(), e, t, n ? Object.assign({}, this.$GraphQLQuery_metadata, n) : this.$GraphQLQuery_metadata, r || this.$GraphQLQuery_queryName)
    }, h.prototype.shallowCloneWithSameID = function(e, t, n) {
        var r = this.shallowClone(e, t, n);
        return r.$GraphQLQuery_id = this.getID(), r
    }, h.prototype.toString = function() {
        return this.$GraphQLQuery_queryName ? "Query " + this.$GraphQLQuery_queryName + " {" + this.toStringWithoutName() + "}" : this.toStringWithoutName()
    }, h.prototype.toStringWithoutName = function() {
        return this.$GraphQLQuery_rootNode.toString() + _([this])
    }, h.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1],
            i = t[2],
            o = t[3],
            a = t[4],
            s = t[5],
            l = t[6];
        return n !== N.QUERY && invariant/*I*/(0, "Expected query descriptor"), new h(r, i ? i.map(R) : null, o ? o.map(p.fromJSON) : null, a ? a.map(d.fromJSON) : null, s, l)
    }, h.prototype.toJSON = function() {
        var e = this.rootCall(),
            t = e.getArgs(),
            n = this.getFragments();
        return b([N.QUERY, e.getName(), t.length ? t : null, this.hasOwnFields() ? this.getOwnFields() : null, n.length ? n : null, this.$GraphQLQuery_metadata !== L ? this.$GraphQLQuery_metadata : null, this.$GraphQLQuery_queryName ? this.$GraphQLQuery_queryName : null])
    }, f.prototype.getQuery = function() {
        return this.$GraphQLQueryWithValues_query
    }, f.prototype.getValues = function() {
        return this.$GraphQLQueryWithValues_values
    }, f.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1],
            i = t[2];
        return n !== N.QUERY_WITH_VALUES && invariant/*I*/(0, "Expected query descriptor"), new f(h.fromJSON(r), i)
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
    }, m.prototype.shallowClone = function(e, t) {
        return new m(this.getName(), this.getResponseType(), this.getCall(), e, t)
    }, m.prototype.toString = function() {
        return "Mutation " + this.getName() + " : " + this.getResponseType() + " {" + this.getCall().toString() + _([this]) + "}"
    }, m.fromJSON = function(e) {
        var t = e,
            n = t[0],
            r = t[1],
            i = t[2],
            o = t[3],
            s = t[4],
            l = t[5];
        return n !== N.MUTATION && invariant/*I*/(0, "Expected mutation descriptor"), new m(r, i, a.fromJSON(o), s ? s.map(p.fromJSON) : null, l ? l.map(d.fromJSON) : null)
    }, m.prototype.toJSON = function() {
        var e = this.getFragments();
        return b([N.MUTATION, this.getName(), this.getResponseType(), this.getCall(), this.hasOwnFields() ? this.getOwnFields() : null, e.length ? e : null])
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
    i.exports = q
});