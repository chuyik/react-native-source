__d("AbstractSearchSource",["Deferred","emptyFunction"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o() {}
    var a = require/*t*/("Deferred"),
        s = require/*t*/("emptyFunction"),
        l = {
            bootstrap: function(global/*e*/) {
                return global/*e*/ = global/*e*/ || s, this._bootstrapped ? void global/*e*/() : this._bootstrapDeferred ? this._bootstrapDeferred.addCallback(global/*e*/) : (this._bootstrapDeferred = new a, this._bootstrapDeferred.addCallback(global/*e*/), this.bootstrapImpl(function() {
                    this._bootstrapped = !0, this._bootstrapDeferred.succeed(), this._bootstrapDeferred = null
                }.bind(this)), this._bootstrapDeferred)
            },
            search: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                this.searchImpl(global/*e*/, require/*t*/, requireDynamic/*n*/)
            },
            bootstrapImpl: function(global/*e*/) {
                global/*e*/()
            },
            searchImpl: function() {
                throw new Error("Abstract method #searchImpl is not implemented.")
            }
        };
    Object.assign(o.prototype, l), o.Mixin = l, module/*i*/.exports = o
});