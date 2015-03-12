__d("AbstractSearchSource",["Deferred","emptyFunction"],function (e, t, n, r, i) {
    function o() {}
    var Deferred/*a*/ = t("Deferred"),
        emptyFunction/*s*/ = t("emptyFunction"),
        l = {
            bootstrap: function(e) {
                return e = e || emptyFunction/*s*/, this._bootstrapped ? void e() : this._bootstrapDeferred ? this._bootstrapDeferred.addCallback(e) : (this._bootstrapDeferred = new Deferred/*a*/, this._bootstrapDeferred.addCallback(e), this.bootstrapImpl(function() {
                    this._bootstrapped = !0, this._bootstrapDeferred.succeed(), this._bootstrapDeferred = null
                }.bind(this)), this._bootstrapDeferred)
            },
            search: function(e, t, n) {
                this.searchImpl(e, t, n)
            },
            bootstrapImpl: function(e) {
                e()
            },
            searchImpl: function() {
                throw new Error("Abstract method #searchImpl is not implemented.")
            }
        };
    Object.assign(o.prototype, l), o.Mixin = l, i.exports = o
});