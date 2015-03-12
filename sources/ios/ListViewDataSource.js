__d("ListViewDataSource",["invariant","isEmpty","warning"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t, n) {
        return e[t][n]
    }

    function a(e, t) {
        return e[t]
    }

    function s(e) {
        e && "function" == typeof e.rowHasChanged || invariant/*c*/(0, "Must provide a rowHasChanged function."), this.$ListViewDataSource_rowHasChanged = e.rowHasChanged, this.$ListViewDataSource_getRowData = e.getRowData || o, this.$ListViewDataSource_sectionHeaderHasChanged = e.sectionHeaderHasChanged, this.$ListViewDataSource_getSectionHeaderData = e.getSectionHeaderData || a, this.$ListViewDataSource_dataBlob = null, this.$ListViewDataSource_dirtyRows = [], this.$ListViewDataSource_dirtySections = [], this.$ListViewDataSource_cachedRowCount = 0, this.rowIdentities = [], this.sectionIdentities = []
    }

    function l(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
            var r = e[n];
            t += r.length
        }
        return t
    }

    function u(e) {
        if (isEmpty/*p*/(e)) return {};
        for (var t = {}, n = 0; n < e.length; n++) {
            var r = e[n];
            warning/*d*/(!t[r], "Value appears more than once in array: " + r), t[r] = !0
        }
        return t
    }
    var invariant/*c*/ = t("invariant"),
        isEmpty/*p*/ = t("isEmpty"),
        warning/*d*/ = t("warning");
    s.prototype.cloneWithRows = function(e, t) {
        var n = t ? [t] : null;
        return this.$ListViewDataSource_sectionHeaderHasChanged || (this.$ListViewDataSource_sectionHeaderHasChanged = function() {
            return !1
        }), this.cloneWithRowsAndSections({
            s1: e
        }, ["s1"], n)
    }, s.prototype.cloneWithRowsAndSections = function(e, t, n) {
        "function" != typeof this.$ListViewDataSource_sectionHeaderHasChanged && invariant/*c*/(0, "Must provide a sectionHeaderHasChanged function with section data.");
        var r = new s({
            getRowData: this.$ListViewDataSource_getRowData,
            getSectionHeaderData: this.$ListViewDataSource_getSectionHeaderData,
            rowHasChanged: this.$ListViewDataSource_rowHasChanged,
            sectionHeaderHasChanged: this.$ListViewDataSource_sectionHeaderHasChanged
        });
        return r.$ListViewDataSource_dataBlob = e, r.sectionIdentities = t ? t : Object.keys(e), n ? r.rowIdentities = n : (r.rowIdentities = [], r.sectionIdentities.forEach(function(t) {
            r.rowIdentities.push(Object.keys(e[t]))
        })), r.$ListViewDataSource_cachedRowCount = l(r.rowIdentities), r.$ListViewDataSource_calculateDirtyArrays(this.$ListViewDataSource_dataBlob, this.sectionIdentities, this.rowIdentities), r
    }, s.prototype.getRowCount = function() {
        return this.$ListViewDataSource_cachedRowCount
    }, s.prototype.rowShouldUpdate = function(e, t) {
        var n = this.$ListViewDataSource_dirtyRows[e][t];
        return warning/*d*/(void 0 !== n, "missing dirtyBit for section, row: " + e + ", " + t), n
    }, s.prototype.getRowData = function(e, t) {
        var n = this.sectionIdentities[e],
            r = this.rowIdentities[e][t];
        return warning/*d*/(void 0 !== n && void 0 !== r, "rendering invalid section, row: " + e + ", " + t), this.$ListViewDataSource_getRowData(this.$ListViewDataSource_dataBlob, n, r)
    }, s.prototype.getRowIDForFlatIndex = function(e) {
        for (var t = e, n = 0; n < this.sectionIdentities.length; n++) {
            if (!(t >= this.rowIdentities[n].length)) return this.rowIdentities[n][t];
            t -= this.rowIdentities[n].length
        }
    }, s.prototype.getSectionIDForFlatIndex = function(e) {
        for (var t = e, n = 0; n < this.sectionIdentities.length; n++) {
            if (!(t >= this.rowIdentities[n].length)) return this.sectionIdentities[n];
            t -= this.rowIdentities[n].length
        }
    }, s.prototype.getSectionLengths = function() {
        for (var e = [], t = 0; t < this.sectionIdentities.length; t++) e.push(this.rowIdentities[t].length);
        return e
    }, s.prototype.sectionHeaderShouldUpdate = function(e) {
        var t = this.$ListViewDataSource_dirtySections[e];
        return warning/*d*/(void 0 !== t, "missing dirtyBit for section: " + e), t
    }, s.prototype.getSectionHeaderData = function(e) {
        if (!this.$ListViewDataSource_getSectionHeaderData) return null;
        var t = this.sectionIdentities[e];
        return warning/*d*/(void 0 !== t, "renderSection called on invalid section: " + e), this.$ListViewDataSource_getSectionHeaderData(this.$ListViewDataSource_dataBlob, t)
    }, s.prototype.$ListViewDataSource_calculateDirtyArrays = function(e, t, n) {
        for (var r = u(t), i = {}, o = 0; o < n.length; o++) {
            var a = t[o];
            warning/*d*/(!i[a], "SectionID appears more than once: " + a), i[a] = u(n[o])
        }
        this.$ListViewDataSource_dirtySections = [], this.$ListViewDataSource_dirtyRows = [];
        for (var s, l = 0; l < this.sectionIdentities.length; l++) {
            var a = this.sectionIdentities[l];
            s = !r[a];
            var invariant/*c*/ = this.$ListViewDataSource_sectionHeaderHasChanged;
            !s && invariant/*c*/ && (s = invariant/*c*/(this.$ListViewDataSource_getSectionHeaderData(e, a), this.$ListViewDataSource_getSectionHeaderData(this.$ListViewDataSource_dataBlob, a))), this.$ListViewDataSource_dirtySections.push(!!s), this.$ListViewDataSource_dirtyRows[l] = [];
            for (var isEmpty/*p*/ = 0; isEmpty/*p*/ < this.rowIdentities[l].length; isEmpty/*p*/++) {
                var h = this.rowIdentities[l][isEmpty/*p*/];
                s = !r[a] || !i[a][h] || this.$ListViewDataSource_rowHasChanged(this.$ListViewDataSource_getRowData(e, a, h), this.$ListViewDataSource_getRowData(this.$ListViewDataSource_dataBlob, a, h)), this.$ListViewDataSource_dirtyRows[l].push(!!s)
            }
        }
    }, i.exports = s
});