__d("ListViewDataSource",["invariant","isEmpty","warning"],function (global/*e*/, require/*exports/*isEmpty/*t*/*/*/, requireDynamic/*invariant/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*isEmpty/*t*/*/*/, requireDynamic/*invariant/*n*/*/) {
        return global/*e*/[require/*exports/*isEmpty/*t*/*/*/][requireDynamic/*invariant/*n*/*/]
    }

    function a(global/*e*/, require/*exports/*isEmpty/*t*/*/*/) {
        return global/*e*/[require/*exports/*isEmpty/*t*/*/*/]
    }

    function s(global/*e*/) {
        global/*e*/ && "function" == typeof global/*e*/.rowHasChanged || c(0, "Must provide a rowHasChanged function."), warning/*this.$ListViewDataSource_rowHasChanged*/ = global/*e*/.rowHasChanged, this.$ListViewDataSource_getRowData = global/*e*/.getRowData || o, this.$ListViewDataSource_sectionHeaderHasChanged = global/*e*/.sectionHeaderHasChanged, this.$ListViewDataSource_getSectionHeaderData = global/*e*/.getSectionHeaderData || a, this.$ListViewDataSource_dataBlob = null, this.$ListViewDataSource_dirtyRows = [], this.$ListViewDataSource_dirtySections = [], this.$ListViewDataSource_cachedRowCount = 0, this.rowIdentities = [], this.sectionIdentities = []
    }

    function l(global/*e*/) {
        for (var require/*exports/*isEmpty/*t*/*/*/ = 0, requireDynamic/*invariant/*n*/*/ = 0; requireDynamic/*invariant/*n*/*/ < global/*e*/.length; requireDynamic/*invariant/*n*/*/++) {
            var requireLazy/*r*/ = global/*e*/[requireDynamic/*invariant/*n*/*/];
            require/*exports/*isEmpty/*t*/*/*/ += requireLazy/*r*/.length
        }
        return require/*exports/*isEmpty/*t*/*/*/
    }

    function u(global/*e*/) {
        if (p(global/*e*/)) return {};
        for (var require/*exports/*isEmpty/*t*/*/*/ = {}, requireDynamic/*invariant/*n*/*/ = 0; requireDynamic/*invariant/*n*/*/ < global/*e*/.length; requireDynamic/*invariant/*n*/*/++) {
            var requireLazy/*r*/ = global/*e*/[requireDynamic/*invariant/*n*/*/];
            d(!require/*exports/*isEmpty/*t*/*/*/[requireLazy/*r*/], "Value appears more than once in array: " + requireLazy/*r*/), require/*exports/*isEmpty/*t*/*/*/[requireLazy/*r*/] = !0
        }
        return require/*exports/*isEmpty/*t*/*/*/
    }
    var c = require/*exports/*isEmpty/*t*/*/*/("invariant"),
        p = require/*exports/*isEmpty/*t*/*/*/("isEmpty"),
        d = require/*exports/*isEmpty/*t*/*/*/("warning");
    s.prototype.cloneWithRows = function(global/*e*/, require/*exports/*isEmpty/*t*/*/*/) {
        var requireDynamic/*invariant/*n*/*/ = require/*exports/*isEmpty/*t*/*/*/ ? [require/*exports/*isEmpty/*t*/*/*/] : null;
        return this.$ListViewDataSource_sectionHeaderHasChanged || (this.$ListViewDataSource_sectionHeaderHasChanged = function() {
            return !1
        }), this.cloneWithRowsAndSections({
            s1: global/*e*/
        }, ["s1"], requireDynamic/*invariant/*n*/*/)
    }, s.prototype.cloneWithRowsAndSections = function(global/*e*/, require/*exports/*isEmpty/*t*/*/*/, requireDynamic/*invariant/*n*/*/) {
        "function" != typeof this.$ListViewDataSource_sectionHeaderHasChanged && c(0, "Must provide a sectionHeaderHasChanged function with section data.");
        var requireLazy/*r*/ = new s({
            getRowData: this.$ListViewDataSource_getRowData,
            getSectionHeaderData: this.$ListViewDataSource_getSectionHeaderData,
            rowHasChanged: warning/*this.$ListViewDataSource_rowHasChanged*/,
            sectionHeaderHasChanged: this.$ListViewDataSource_sectionHeaderHasChanged
        });
        return requireLazy/*r*/.$ListViewDataSource_dataBlob = global/*e*/, requireLazy/*r*/.sectionIdentities = require/*exports/*isEmpty/*t*/*/*/ ? require/*exports/*isEmpty/*t*/*/*/ : Object.keys(global/*e*/), requireDynamic/*invariant/*n*/*/ ? requireLazy/*r*/.rowIdentities = requireDynamic/*invariant/*n*/*/ : (requireLazy/*r*/.rowIdentities = [], requireLazy/*r*/.sectionIdentities.forEach(function(require/*exports/*isEmpty/*t*/*/*/) {
            requireLazy/*r*/.rowIdentities.push(Object.keys(global/*e*/[require/*exports/*isEmpty/*t*/*/*/]))
        })), requireLazy/*r*/.$ListViewDataSource_cachedRowCount = l(requireLazy/*r*/.rowIdentities), requireLazy/*r*/.$ListViewDataSource_calculateDirtyArrays(this.$ListViewDataSource_dataBlob, this.sectionIdentities, this.rowIdentities), requireLazy/*r*/
    }, s.prototype.getRowCount = function() {
        return this.$ListViewDataSource_cachedRowCount
    }, s.prototype.rowShouldUpdate = function(global/*e*/, require/*exports/*isEmpty/*t*/*/*/) {
        var requireDynamic/*invariant/*n*/*/ = this.$ListViewDataSource_dirtyRows[global/*e*/][require/*exports/*isEmpty/*t*/*/*/];
        return d(void 0 !== requireDynamic/*invariant/*n*/*/, "missing dirtyBit for section, row: " + global/*e*/ + ", " + require/*exports/*isEmpty/*t*/*/*/), requireDynamic/*invariant/*n*/*/
    }, s.prototype.getRowData = function(global/*e*/, require/*exports/*isEmpty/*t*/*/*/) {
        var requireDynamic/*invariant/*n*/*/ = this.sectionIdentities[global/*e*/],
            requireLazy/*r*/ = this.rowIdentities[global/*e*/][require/*exports/*isEmpty/*t*/*/*/];
        return d(void 0 !== requireDynamic/*invariant/*n*/*/ && void 0 !== requireLazy/*r*/, "rendering invalid section, row: " + global/*e*/ + ", " + require/*exports/*isEmpty/*t*/*/*/), this.$ListViewDataSource_getRowData(this.$ListViewDataSource_dataBlob, requireDynamic/*invariant/*n*/*/, requireLazy/*r*/)
    }, s.prototype.getRowIDForFlatIndex = function(global/*e*/) {
        for (var require/*exports/*isEmpty/*t*/*/*/ = global/*e*/, requireDynamic/*invariant/*n*/*/ = 0; requireDynamic/*invariant/*n*/*/ < this.sectionIdentities.length; requireDynamic/*invariant/*n*/*/++) {
            if (!(require/*exports/*isEmpty/*t*/*/*/ >= this.rowIdentities[requireDynamic/*invariant/*n*/*/].length)) return this.rowIdentities[requireDynamic/*invariant/*n*/*/][require/*exports/*isEmpty/*t*/*/*/];
            require/*exports/*isEmpty/*t*/*/*/ -= this.rowIdentities[requireDynamic/*invariant/*n*/*/].length
        }
    }, s.prototype.getSectionIDForFlatIndex = function(global/*e*/) {
        for (var require/*exports/*isEmpty/*t*/*/*/ = global/*e*/, requireDynamic/*invariant/*n*/*/ = 0; requireDynamic/*invariant/*n*/*/ < this.sectionIdentities.length; requireDynamic/*invariant/*n*/*/++) {
            if (!(require/*exports/*isEmpty/*t*/*/*/ >= this.rowIdentities[requireDynamic/*invariant/*n*/*/].length)) return this.sectionIdentities[requireDynamic/*invariant/*n*/*/];
            require/*exports/*isEmpty/*t*/*/*/ -= this.rowIdentities[requireDynamic/*invariant/*n*/*/].length
        }
    }, s.prototype.getSectionLengths = function() {
        for (var global/*e*/ = [], require/*exports/*isEmpty/*t*/*/*/ = 0; require/*exports/*isEmpty/*t*/*/*/ < this.sectionIdentities.length; require/*exports/*isEmpty/*t*/*/*/++) global/*e*/.push(this.rowIdentities[require/*exports/*isEmpty/*t*/*/*/].length);
        return global/*e*/
    }, s.prototype.sectionHeaderShouldUpdate = function(global/*e*/) {
        var require/*exports/*isEmpty/*t*/*/*/ = this.$ListViewDataSource_dirtySections[global/*e*/];
        return d(void 0 !== require/*exports/*isEmpty/*t*/*/*/, "missing dirtyBit for section: " + global/*e*/), require/*exports/*isEmpty/*t*/*/*/
    }, s.prototype.getSectionHeaderData = function(global/*e*/) {
        if (!this.$ListViewDataSource_getSectionHeaderData) return null;
        var require/*exports/*isEmpty/*t*/*/*/ = this.sectionIdentities[global/*e*/];
        return d(void 0 !== require/*exports/*isEmpty/*t*/*/*/, "renderSection called on invalid section: " + global/*e*/), this.$ListViewDataSource_getSectionHeaderData(this.$ListViewDataSource_dataBlob, require/*exports/*isEmpty/*t*/*/*/)
    }, s.prototype.$ListViewDataSource_calculateDirtyArrays = function(global/*e*/, require/*exports/*isEmpty/*t*/*/*/, requireDynamic/*invariant/*n*/*/) {
        for (var requireLazy/*r*/ = u(require/*exports/*isEmpty/*t*/*/*/), module/*i*/ = {}, o = 0; o < requireDynamic/*invariant/*n*/*/.length; o++) {
            var a = require/*exports/*isEmpty/*t*/*/*/[o];
            d(!module/*i*/[a], "SectionID appears more than once: " + a), module/*i*/[a] = u(requireDynamic/*invariant/*n*/*/[o])
        }
        this.$ListViewDataSource_dirtySections = [], this.$ListViewDataSource_dirtyRows = [];
        for (var s, l = 0; l < this.sectionIdentities.length; l++) {
            var a = this.sectionIdentities[l];
            s = !requireLazy/*r*/[a];
            var c = this.$ListViewDataSource_sectionHeaderHasChanged;
            !s && c && (s = c(this.$ListViewDataSource_getSectionHeaderData(global/*e*/, a), this.$ListViewDataSource_getSectionHeaderData(this.$ListViewDataSource_dataBlob, a))), this.$ListViewDataSource_dirtySections.push(!!s), this.$ListViewDataSource_dirtyRows[l] = [];
            for (var p = 0; p < this.rowIdentities[l].length; p++) {
                var h = this.rowIdentities[l][p];
                s = !requireLazy/*r*/[a] || !module/*i*/[a][h] || warning/*this.$ListViewDataSource_rowHasChanged*/(this.$ListViewDataSource_getRowData(global/*e*/, a, h), this.$ListViewDataSource_getRowData(this.$ListViewDataSource_dataBlob, a, h)), this.$ListViewDataSource_dirtyRows[l].push(!!s)
            }
        }
    }, module/*i*/.exports = s
});