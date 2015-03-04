__d("XMLHttpRequest",["NativeModulesDeprecated","crc32"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {
        this.UNSENT = 0, this.OPENED = 1, this.HEADERS_RECEIVED = 2, this.LOADING = 3, this.DONE = 4, this.onreadystatechange = void 0, this.upload = void 0, this.readyState = this.UNSENT, this.responseHeaders = void 0, this.responseText = void 0, this.status = void 0, this.$XMLHttpRequest_method = null, this.$XMLHttpRequest_url = null, this.$XMLHttpRequest_headers = {}, this.$XMLHttpRequest_sent = !1, this.$XMLHttpRequest_aborted = !1
    }
    var NativeModulesDeprecated/*a*/ = require/*t*/("NativeModulesDeprecated").RKDataManager,
        crc32/*s*/ = require/*t*/("crc32");
    o.prototype.getAllResponseHeaders = function() {
        return ""
    }, o.prototype.getResponseHeader = function() {
        return ""
    }, o.prototype.setRequestHeader = function(global/*e*/, require/*t*/) {
        this.$XMLHttpRequest_headers[global/*e*/] = require/*t*/
    }, o.prototype.open = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        if (this.readyState !== this.UNSENT) throw new Error("Cannot open, already sending");
        if (void 0 !== requireDynamic/*n*/ && !requireDynamic/*n*/) throw new Error("Synchronous http requests are not supported");
        this.$XMLHttpRequest_method = global/*e*/, this.$XMLHttpRequest_url = require/*t*/, this.$XMLHttpRequest_aborted = !1, this.$XMLHttpRequest_setReadyState(this.OPENED)
    }, o.prototype.send = function(global/*e*/) {
        if (this.readyState !== this.OPENED) throw new Error("Request has not been opened");
        if (this.$XMLHttpRequest_sent) throw new Error("Request has already been sent");
        this.$XMLHttpRequest_sent = !0, NativeModulesDeprecated/*a*/.queryData("http", JSON.stringify({
            method: this.$XMLHttpRequest_method,
            url: this.$XMLHttpRequest_url,
            data: global/*e*/,
            headers: this.$XMLHttpRequest_headers
        }), "h" + crc32/*s*/(this.$XMLHttpRequest_method + "|" + this.$XMLHttpRequest_url + "|" + global/*e*/), function(global/*e*/) {
            global/*e*/ = JSON.parse(global/*e*/), this.$XMLHttpRequest_callback(global/*e*/.status, global/*e*/.responseHeaders, global/*e*/.responseText)
        }.bind(this))
    }, o.prototype.abort = function() {
        console.warn("XMLHttpRequest: abort() cancels JS callbacks but not native HTTP request."), this.readyState === this.UNSENT || this.readyState === this.OPENED && !this.$XMLHttpRequest_sent || this.readyState === this.DONE || (this.$XMLHttpRequest_sent = !1, this.$XMLHttpRequest_setReadyState(this.DONE)), this.readyState === this.DONE && this.$XMLHttpRequest_sendLoad(), this.readyState = this.UNSENT, this.$XMLHttpRequest_aborted = !0
    }, o.prototype.$XMLHttpRequest_setReadyState = function(global/*e*/) {
        this.readyState = global/*e*/;
        var require/*t*/ = this.onreadystatechange;
        require/*t*/ && require/*t*/(null)
    }, o.prototype.$XMLHttpRequest_sendLoad = function() {
        var global/*e*/ = this.onload;
        global/*e*/ && global/*e*/(null)
    }, o.prototype.$XMLHttpRequest_callback = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        this.$XMLHttpRequest_aborted || (this.status = global/*e*/, this.responseHeaders = require/*t*/, this.responseText = requireDynamic/*n*/, this.$XMLHttpRequest_setReadyState(this.DONE), this.$XMLHttpRequest_sendLoad())
    }, module/*i*/.exports = o
});