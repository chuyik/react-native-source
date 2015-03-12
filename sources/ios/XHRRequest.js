__d("XHRRequest",["ErrorUtils","URI","XHRHttpError","getSameOriginTransport","invariant","xhrSimpleDataSerializer"],function (e, t, n, r, i) {
    function o(e) {
        "use strict";
        this.setURI(e), this.setMethod("POST"), this.setIsAsynchronous(!0), this.setTransportBuilder(getSameOriginTransport/*u*/), this.setDataSerializer(xhrSimpleDataSerializer/*p*/), this.$XHRRequest_onreadystatechange = this.$XHRRequest_onreadystatechange.bind(this)
    }
    var ErrorUtils/*a*/ = t("ErrorUtils"),
        URI/*s*/ = t("URI"),
        XHRHttpError/*l*/ = t("XHRHttpError"),
        getSameOriginTransport/*u*/ = t("getSameOriginTransport"),
        invariant/*c*/ = t("invariant"),
        xhrSimpleDataSerializer/*p*/ = t("xhrSimpleDataSerializer"),
        d = {
            errorCode: null,
            errorMsg: null,
            errorType: null
        },
        h = {
            loadedBytes: null,
            totalBytes: null
        };
    o.prototype.setURI = function(e) {
        "use strict";
        return this.$XHRRequest_uri = new URI/*s*/(e), this
    }, o.prototype.getURI = function() {
        "use strict";
        return this.$XHRRequest_uri
    }, o.prototype.setMethod = function(e) {
        "use strict";
        return this.$XHRRequest_method = e, this
    }, o.prototype.getMethod = function() {
        "use strict";
        return this.$XHRRequest_method
    }, o.prototype.setData = function(e) {
        "use strict";
        return this.$XHRRequest_data = e, this
    }, o.prototype.getData = function() {
        "use strict";
        return this.$XHRRequest_data
    }, o.prototype.setRawData = function(e) {
        "use strict";
        return this.$XHRRequest_rawData = e, this
    }, o.prototype.setRequestHeader = function(e, t) {
        "use strict";
        return this.$XHRRequest_headers || (this.$XHRRequest_headers = {}), this.$XHRRequest_headers[e] = t, this
    }, o.prototype.setTimeout = function(e) {
        "use strict";
        return this.$XHRRequest_timeout = e, this
    }, o.prototype.setResponseHandler = function(e) {
        "use strict";
        return this.$XHRRequest_responseHandler = e, this
    }, o.prototype.setErrorHandler = function(e) {
        "use strict";
        return this.$XHRRequest_errorHandler = e, this
    }, o.prototype.setAbortHandler = function(e) {
        "use strict";
        return this.$XHRRequest_abortHandler = e, this
    }, o.prototype.setTimeoutHandler = function(e) {
        "use strict";
        return this.$XHRRequest_timeoutHandler = e, this
    }, o.prototype.setUploadProgressHandler = function(e) {
        "use strict";
        return this.$XHRRequest_uploadProgressHandler = e, this
    }, o.prototype.setIsAsynchronous = function(e) {
        "use strict";
        return this.$XHRRequest_isAsynchronous = e, this
    }, o.prototype.setTransportBuilder = function(e) {
        "use strict";
        return this.$XHRRequest_transportBuilder = e, this
    }, o.prototype.setDataSerializer = function(e) {
        "use strict";
        return this.$XHRRequest_dataSerializer = e, this
    }, o.prototype.send = function() {
        "use strict";
        var e = this.$XHRRequest_timeout,
            t = this.$XHRRequest_transportBuilder(),
            n = this.getURI();
        this.$XHRRequest_pendingTransport = t;
        var r;
        if ("POST" !== this.$XHRRequest_method && this.$XHRRequest_rawData && invariant/*c*/(0, "Must send raw data on post. Data: %URI/*s*/ URI: %URI/*s*/", this.$XHRRequest_rawData, n), "GET" === this.$XHRRequest_method || this.$XHRRequest_rawData ? (n.addQueryData(this.$XHRRequest_data), r = this.$XHRRequest_rawData) : r = this.$XHRRequest_dataSerializer(this.$XHRRequest_data), t.onreadystatechange = this.$XHRRequest_onreadystatechange, t.upload && this.$XHRRequest_uploadProgressHandler && (t.upload.onprogress = this.$XHRRequest_onuploadprogress.bind(this)), e && (this.$XHRRequest_timeoutTimer = setTimeout(this.$XHRRequest_ontimeout.bind(this), e)), t.open(this.$XHRRequest_method, n.toString(), this.$XHRRequest_isAsynchronous), this.$XHRRequest_headers)
            for (var i in this.$XHRRequest_headers) t.setRequestHeader(i, this.$XHRRequest_headers[i]);
        t.send(r), this.$XHRRequest_isAsynchronous || t.onreadystatechange(null, !0)
    }, o.prototype.abort = function() {
        "use strict";
        this.$XHRRequest_abort(), this.$XHRRequest_abortHandler && ErrorUtils/*a*/.applyWithGuard(this.$XHRRequest_abortHandler, null, null, null, "XHRRequest:_abortHandler")
    }, o.prototype.$XHRRequest_abort = function() {
        "use strict";
        var e = this.$XHRRequest_pendingTransport;
        e && (e.onreadystatechange = null, e.abort()), this.$XHRRequest_cleanup()
    }, o.prototype.$XHRRequest_ontimeout = function() {
        "use strict";
        this.$XHRRequest_abort(), this.$XHRRequest_timeoutHandler && ErrorUtils/*a*/.applyWithGuard(this.$XHRRequest_timeoutHandler, null, null, null, "XHRRequest:_abortHandler")
    }, o.prototype.$XHRRequest_onreadystatechange = function(e, t) {
        "use strict";
        if (this.$XHRRequest_isAsynchronous || t === !0) {
            var n = this.$XHRRequest_pendingTransport,
                r = n,
                i = r.readyState;
            if (i >= 2) {
                var o = 4 === i,
                    URI/*s*/ = this.getURI(),
                    getSameOriginTransport/*u*/ = XHRHttpError/*l*/.getErrorCode(URI/*s*/, n.status),
                    invariant/*c*/ = this.$XHRRequest_responseHandler;
                if (null !== getSameOriginTransport/*u*/) o && (d.errorCode = getSameOriginTransport/*u*/, d.errorMsg = n.responseText, d.errorType = "HTTP", this.$XHRRequest_errorHandler && ErrorUtils/*a*/.applyWithGuard(this.$XHRRequest_errorHandler, null, [d], null, "XHRRequest:_errorHandler"));
                else if (invariant/*c*/) {
                    var xhrSimpleDataSerializer/*p*/ = null;
                    invariant/*c*/.includeHeaders && (xhrSimpleDataSerializer/*p*/ = n.getAllResponseHeaders()), (o || invariant/*c*/.parseStreaming && 3 === i) && ErrorUtils/*a*/.applyWithGuard(invariant/*c*/, null, [n.responseText, xhrSimpleDataSerializer/*p*/, o], null, "XHRRequest:handler")
                }
                o && this.$XHRRequest_cleanup()
            }
        }
    }, o.prototype.$XHRRequest_onuploadprogress = function(e) {
        "use strict";
        h.loadedBytes = e.loaded, h.totalBytes = e.total, this.$XHRRequest_uploadProgressHandler && ErrorUtils/*a*/.applyWithGuard(this.$XHRRequest_uploadProgressHandler, null, [h], null, "XHRRequest:_uploadProgressHandler")
    }, o.prototype.$XHRRequest_cleanup = function() {
        "use strict";
        clearTimeout(this.$XHRRequest_timeoutTimer), delete this.$XHRRequest_pendingTransport
    }, i.exports = o
});