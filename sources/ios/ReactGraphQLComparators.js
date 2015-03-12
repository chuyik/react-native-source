__d("ReactGraphQLComparators",[],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n, r) {
        var i;
        for (i in t)
            if (!(r && !r.hasOwnProperty(i) || !t.hasOwnProperty(i) || n.hasOwnProperty(i) && e(t[i], n[i], i))) return !1;
        for (i in n)
            if ((!r || r.hasOwnProperty(i)) && n.hasOwnProperty(i) && !t.hasOwnProperty(i)) return !1;
        return !0
    }

    function a(e, t) {
        return e === t && (null === e || "object" != typeof e)
    }

    function s(e, t, n) {
        return n in l ? e === t : a(e, t)
    }
    var l = {
            route: !0
        },
        u = {
            Mixin: {
                isStateEqualTo: function(e) {
                    return o(a, this.state, e)
                },
                isContextEqualTo: function(e) {
                    return o(s, this.context, e)
                },
                isDliteContextEqualTo: function(e) {
                    return o(s, this.context, e, l)
                },
                arePropsEqualTo: function(e) {
                    return o(this._isPropEqual, this.props, e)
                },
                areDlitePropsEqualTo: function(e) {
                    return o(this._isPropEqual, this.props, e, this.constructor.queries)
                },
                _isPropEqual: function(e, t, n) {
                    return this.constructor.queries.hasOwnProperty(n) ? e === t : a(e, t)
                }
            }
        };
    i.exports = u
});