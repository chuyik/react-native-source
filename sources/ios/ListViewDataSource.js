__d("ListViewDataSource",["invariant","isEmpty","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        return global/*e*/[require/*t*/][requireDynamic/*n*/]
    }

    function a(global/*e*/, require/*t*/) {
        return global/*e*/[require/*t*/]
    }

    function s(global/*e*/) {
        global/*e*/ && "function" == typeof global/*e*/.rowHasChanged || invariant/*c*/(0, "Must provide a rowHasChanged function."), this.$ListViewDataSource_rowHasChanged = global/*e*/.rowHasChanged, this.$ListViewDataSource_getRowData = global/*e*/.getRowData || o, this.$ListViewDataSource_sectionHeaderHasChanged = global/*e*/.sectionHeaderHasChanged, this.$ListViewDataSource_getSectionHeaderData = global/*e*/.getSectionHeaderData || a, this.$ListViewDataSource_dataBlob = null, this.$ListViewDataSource_dirtyRows = [], this.$ListViewDataSource_dirtySections = [], this.$ListViewDataSource_cachedRowCount = 0, this.rowIdentities = [], this.sectionIdentities = []
    }

    function l(global/*e*/) {
        for (var require/*t*/ = 0, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/];
            require/*t*/ += requireLazy/*r*/.length
        }
        return require/*t*/
    }

    function u(global/*e*/) {
        if (isEmpty/*p*/(global/*e*/)) return {};
        for (var require/*t*/ = {}, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < global/*e*/.length; requireDynamic/*n*/++) {
            var requireLazy/*r*/ = global/*e*/[requireDynamic/*n*/];
            warning/*d*/(!require/*t*/[requireLazy/*r*/], "Value appears more than once in array: " + requireLazy/*r*/), require/*t*/[requireLazy/*r*/] = !0
        }
        return require/*t*/
    }
    var invariant/*c*/ = require/*t*/("invariant"),
        isEmpty/*p*/ = require/*t*/("isEmpty"),
        warning/*d*/ = require/*t*/("warning");
    s.prototype.cloneWithRows = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = require/*t*/ ? [require/*t*/] : null;
        return this.$ListViewDataSource_sectionHeaderHasChanged || (this.$ListViewDataSource_sectionHeaderHasChanged = function() {
            return !1
        }), this.cloneWithRowsAndSections({
            s1: global/*e*/
        }, ["s1"], requireDynamic/*n*/)
    }, s.prototype.cloneWithRowsAndSections = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "function" != typeof this.$ListViewDataSource_sectionHeaderHasChanged && invariant/*c*/(0, "Must provide a sectionHeaderHasChanged function with section data.");
        var requireLazy/*r*/ = new s({
            getRowData: this.$ListViewDataSource_getRowData,
            getSectionHeaderData: this.$ListViewDataSource_getSectionHeaderData,
            rowHasChanged: this.$ListViewDataSource_rowHasChanged,
            sectionHeaderHasChanged: this.$ListViewDataSource_sectionHeaderHasChanged
        });
        return requireLazy/*r*/.$ListViewDataSource_dataBlob = global/*e*/, requireLazy/*r*/.sectionIdentities = require/*t*/ ? require/*t*/ : Object.keys(global/*e*/), requireDynamic/*n*/ ? requireLazy/*r*/.rowIdentities = requireDynamic/*n*/ : (requireLazy/*r*/.rowIdentities = [], requireLazy/*r*/.sectionIdentities.forEach(function(require/*t*/) {
            requireLazy/*r*/.rowIdentities.push(Object.keys(global/*e*/[require/*t*/]))
        })), requireLazy/*r*/.$ListViewDataSource_cachedRowCount = l(requireLazy/*r*/.rowIdentities), requireLazy/*r*/.$ListViewDataSource_calculateDirtyArrays(this.$ListViewDataSource_dataBlob, this.sectionIdentities, this.rowIdentities), requireLazy/*r*/
    }, s.prototype.getRowCount = function() {
        return this.$ListViewDataSource_cachedRowCount
    }, s.prototype.rowShouldUpdate = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = this.$ListViewDataSource_dirtyRows[global/*e*/][require/*t*/];
        return warning/*d*/(void 0 !== requireDynamic/*n*/, "missing dirtyBit for section, row: " + global/*e*/ + ", " + require/*t*/), requireDynamic/*n*/
    }, s.prototype.getRowData = function(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/ = this.sectionIdentities[global/*e*/],
            requireLazy/*r*/ = this.rowIdentities[global/*e*/][require/*t*/];
        return warning/*d*/(void 0 !== requireDynamic/*n*/ && void 0 !== requireLazy/*r*/, "rendering invalid section, row: " + global/*e*/ + ", " + require/*t*/), this.$ListViewDataSource_getRowData(this.$ListViewDataSource_dataBlob, requireDynamic/*n*/, requireLazy/*r*/)
    }, s.prototype.getRowIDForFlatIndex = function(global/*e*/) {
        for (var require/*t*/ = global/*e*/, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < this.sectionIdentities.length; requireDynamic/*n*/++) {
            if (!(require/*t*/ >= this.rowIdentities[requireDynamic/*n*/].length)) return this.rowIdentities[requireDynamic/*n*/][require/*t*/];
            require/*t*/ -= this.rowIdentities[requireDynamic/*n*/].length
        }
    }, s.prototype.getSectionIDForFlatIndex = function(global/*e*/) {
        for (var require/*t*/ = global/*e*/, requireDynamic/*n*/ = 0; requireDynamic/*n*/ < this.sectionIdentities.length; requireDynamic/*n*/++) {
            if (!(require/*t*/ >= this.rowIdentities[requireDynamic/*n*/].length)) return this.sectionIdentities[requireDynamic/*n*/];
            require/*t*/ -= this.rowIdentities[requireDynamic/*n*/].length
        }
    }, s.prototype.getSectionLengths = function() {
        for (var global/*e*/ = [], require/*t*/ = 0; require/*t*/ < this.sectionIdentities.length; require/*t*/++) global/*e*/.push(this.rowIdentities[require/*t*/].length);
        return global/*e*/
    }, s.prototype.sectionHeaderShouldUpdate = function(global/*e*/) {
        var require/*t*/ = this.$ListViewDataSource_dirtySections[global/*e*/];
        return warning/*d*/(void 0 !== require/*t*/, "missing dirtyBit for section: " + global/*e*/), require/*t*/
    }, s.prototype.getSectionHeaderData = function(global/*e*/) {
        if (!this.$ListViewDataSource_getSectionHeaderData) return null;
        var require/*t*/ = this.sectionIdentities[global/*e*/];
        return warning/*d*/(void 0 !== require/*t*/, "renderSection called on invalid section: " + global/*e*/), this.$ListViewDataSource_getSectionHeaderData(this.$ListViewDataSource_dataBlob, require/*t*/)
    }, s.prototype.$ListViewDataSource_calculateDirtyArrays = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/ = u(require/*t*/), module/*i*/ = {}, o = 0; o < requireDynamic/*n*/.length; o++) {
            var a = require/*t*/[o];
            warning/*d*/(!module/*i*/[a], "SectionID appears more than once: " + a), module/*i*/[a] = u(requireDynamic/*n*/[o])
        }
        this.$ListViewDataSource_dirtySections = [], this.$ListViewDataSource_dirtyRows = [];
        for (var s, l = 0; l < this.sectionIdentities.length; l++) {
            var a = this.sectionIdentities[l];
            s = !requireLazy/*r*/[a];
            var invariant/*c*/ = this.$ListViewDataSource_sectionHeaderHasChanged;
            !s && invariant/*c*/ && (s = invariant/*c*/(this.$ListViewDataSource_getSectionHeaderData(global/*e*/, a), this.$ListViewDataSource_getSectionHeaderData(this.$ListViewDataSource_dataBlob, a))), this.$ListViewDataSource_dirtySections.push(!!s), this.$ListViewDataSource_dirtyRows[l] = [];
            for (var isEmpty/*p*/ = 0; isEmpty/*p*/ < this.rowIdentities[l].length; isEmpty/*p*/++) {
                var h = this.rowIdentities[l][isEmpty/*p*/];
                s = !requireLazy/*r*/[a] || !module/*i*/[a][h] || this.$ListViewDataSource_rowHasChanged(this.$ListViewDataSource_getRowData(global/*e*/, a, h), this.$ListViewDataSource_getRowData(this.$ListViewDataSource_dataBlob, a, h)), this.$ListViewDataSource_dirtyRows[l].push(!!s)
            }
        }
    }, module/*i*/.exports = s
});