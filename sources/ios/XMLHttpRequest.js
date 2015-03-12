__d("XMLHttpRequest",["NativeModulesDeprecated","crc32"],function (e, t, n, r, i) {
    "use strict";

    function o() {
        this.UNSENT = 0, this.OPENED = 1, this.HEADERS_RECEIVED = 2, this.LOADING = 3, this.DONE = 4, this.onreadystatechange = void 0, this.upload = void 0, this.readyState = this.UNSENT, this.responseHeaders = void 0, this.responseText = void 0, this.status = void 0, this.$XMLHttpRequest_method = null, this.$XMLHttpRequest_url = null, this.$XMLHttpRequest_headers = {}, this.$XMLHttpRequest_sent = !1, this.$XMLHttpRequest_aborted = !1
    }
    var NativeModulesDeprecated/*a*/ = t("NativeModulesDeprecated").RKDataManager,
        crc32/*s*/ = t("crc32");
    o.prototype.getAllResponseHeaders = function() {
        return ""
    }, o.prototype.getResponseHeader = function() {
        return ""
    }, o.prototype.setRequestHeader = function(e, t) {
        this.$XMLHttpRequest_headers[e] = t
    }, o.prototype.open = function(e, t, n) {
        if (this.readyState !== this.UNSENT) throw new Error("Cannot open, already sending");
        if (void 0 !== n && !n) throw new Error("Synchronous http requests are not supported");
        this.$XMLHttpRequest_method = e, this.$XMLHttpRequest_url = t, this.$XMLHttpRequest_aborted = !1, this.$XMLHttpRequest_setReadyState(this.OPENED)
    }, o.prototype.send = function(e) {
        if (this.readyState !== this.OPENED) throw new Error("Request has not been opened");
        if (this.$XMLHttpRequest_sent) throw new Error("Request has already been sent");
        this.$XMLHttpRequest_sent = !0, NativeModulesDeprecated/*a*/.queryData("http", JSON.stringify({
            method: this.$XMLHttpRequest_method,
            url: this.$XMLHttpRequest_url,
            data: e,
            headers: this.$XMLHttpRequest_headers
        }), "h" + crc32/*s*/(this.$XMLHttpRequest_method + "|" + this.$XMLHttpRequest_url + "|" + e), function(e) {
            e = JSON.parse(e), this.$XMLHttpRequest_callback(e.status, e.responseHeaders, e.responseText)
        }.bind(this))
    }, o.prototype.abort = function() {
        console.warn("XMLHttpRequest: abort() cancels JS callbacks but not native HTTP request."), this.readyState === this.UNSENT || this.readyState === this.OPENED && !this.$XMLHttpRequest_sent || this.readyState === this.DONE || (this.$XMLHttpRequest_sent = !1, this.$XMLHttpRequest_setReadyState(this.DONE)), this.readyState === this.DONE && this.$XMLHttpRequest_sendLoad(), this.readyState = this.UNSENT, this.$XMLHttpRequest_aborted = !0
    }, o.prototype.$XMLHttpRequest_setReadyState = function(e) {
        this.readyState = e;
        var t = this.onreadystatechange;
        t && t(null)
    }, o.prototype.$XMLHttpRequest_sendLoad = function() {
        var e = this.onload;
        e && e(null)
    }, o.prototype.$XMLHttpRequest_callback = function(e, t, n) {
        this.$XMLHttpRequest_aborted || (this.status = e, this.responseHeaders = t, this.responseText = n, this.$XMLHttpRequest_setReadyState(this.DONE), this.$XMLHttpRequest_sendLoad())
    }, i.exports = o
});