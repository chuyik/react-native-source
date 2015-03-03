__d("XHRRequest",["ErrorUtils","URI","XHRHttpError","getSameOriginTransport","invariant","xhrSimpleDataSerializer"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        "use strict";
        this.setURI(global/*e*/), exports/*this.setMethod*/("POST"), ErrorUtils/*this.setIsAsynchronous*/(!0), URI/*this.setTransportBuilder*/(u), XHRHttpError/*this.setDataSerializer*/(p), getSameOriginTransport/*this.$XHRRequest_onreadystatechange*/ = getSameOriginTransport/*this.$XHRRequest_onreadystatechange*/.bind(this)
    }
    var a = require/*t*/("ErrorUtils"),
        invariant/*s*/ = require/*t*/("URI"),
        xhrSimpleDataSerializer/*l*/ = require/*t*/("XHRHttpError"),
        u = require/*t*/("getSameOriginTransport"),
        c = require/*t*/("invariant"),
        p = require/*t*/("xhrSimpleDataSerializer"),
        d = {
            errorCode: null,
            errorMsg: null,
            errorType: null
        },
        h = {
            loadedBytes: null,
            totalBytes: null
        };
    o.prototype.setURI = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_uri = new invariant/*s*/(global/*e*/), this
    }, o.prototype.getURI = function() {
        "use strict";
        return this.$XHRRequest_uri
    }, o.prototype.setMethod = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_method = global/*e*/, this
    }, o.prototype.getMethod = function() {
        "use strict";
        return this.$XHRRequest_method
    }, o.prototype.setData = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_data = global/*e*/, this
    }, o.prototype.getData = function() {
        "use strict";
        return this.$XHRRequest_data
    }, o.prototype.setRawData = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_rawData = global/*e*/, this
    }, o.prototype.setRequestHeader = function(global/*e*/, require/*t*/) {
        "use strict";
        return this.$XHRRequest_headers || (this.$XHRRequest_headers = {}), this.$XHRRequest_headers[global/*e*/] = require/*t*/, this
    }, o.prototype.setTimeout = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_timeout = global/*e*/, this
    }, o.prototype.setResponseHandler = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_responseHandler = global/*e*/, this
    }, o.prototype.setErrorHandler = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_errorHandler = global/*e*/, this
    }, o.prototype.setAbortHandler = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_abortHandler = global/*e*/, this
    }, o.prototype.setTimeoutHandler = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_timeoutHandler = global/*e*/, this
    }, o.prototype.setUploadProgressHandler = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_uploadProgressHandler = global/*e*/, this
    }, o.prototype.setIsAsynchronous = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_isAsynchronous = global/*e*/, this
    }, o.prototype.setTransportBuilder = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_transportBuilder = global/*e*/, this
    }, o.prototype.setDataSerializer = function(global/*e*/) {
        "use strict";
        return this.$XHRRequest_dataSerializer = global/*e*/, this
    }, o.prototype.send = function() {
        "use strict";
        var global/*e*/ = this.$XHRRequest_timeout,
            require/*t*/ = this.$XHRRequest_transportBuilder(),
            requireDynamic/*n*/ = this.getURI();
        this.$XHRRequest_pendingTransport = require/*t*/;
        var requireLazy/*r*/;
        if ("POST" !== this.$XHRRequest_method && this.$XHRRequest_rawData && c(0, "Must send raw data on post. Data: %invariant/*s*/ URI: %invariant/*s*/", this.$XHRRequest_rawData, requireDynamic/*n*/), "GET" === this.$XHRRequest_method || this.$XHRRequest_rawData ? (requireDynamic/*n*/.addQueryData(this.$XHRRequest_data), requireLazy/*r*/ = this.$XHRRequest_rawData) : requireLazy/*r*/ = this.$XHRRequest_dataSerializer(this.$XHRRequest_data), require/*t*/.onreadystatechange = getSameOriginTransport/*this.$XHRRequest_onreadystatechange*/, require/*t*/.upload && this.$XHRRequest_uploadProgressHandler && (require/*t*/.upload.onprogress = this.$XHRRequest_onuploadprogress.bind(this)), global/*e*/ && (this.$XHRRequest_timeoutTimer = setTimeout(this.$XHRRequest_ontimeout.bind(this), global/*e*/)), require/*t*/.open(this.$XHRRequest_method, requireDynamic/*n*/.toString(), this.$XHRRequest_isAsynchronous), this.$XHRRequest_headers)
            for (var module/*i*/ in this.$XHRRequest_headers) require/*t*/.setRequestHeader(module/*i*/, this.$XHRRequest_headers[module/*i*/]);
        require/*t*/.send(requireLazy/*r*/), this.$XHRRequest_isAsynchronous || require/*t*/.onreadystatechange(null, !0)
    }, o.prototype.abort = function() {
        "use strict";
        this.$XHRRequest_abort(), this.$XHRRequest_abortHandler && a.applyWithGuard(this.$XHRRequest_abortHandler, null, null, null, "XHRRequest:_abortHandler")
    }, o.prototype.$XHRRequest_abort = function() {
        "use strict";
        var global/*e*/ = this.$XHRRequest_pendingTransport;
        global/*e*/ && (global/*e*/.onreadystatechange = null, global/*e*/.abort()), this.$XHRRequest_cleanup()
    }, o.prototype.$XHRRequest_ontimeout = function() {
        "use strict";
        this.$XHRRequest_abort(), this.$XHRRequest_timeoutHandler && a.applyWithGuard(this.$XHRRequest_timeoutHandler, null, null, null, "XHRRequest:_abortHandler")
    }, o.prototype.$XHRRequest_onreadystatechange = function(global/*e*/, require/*t*/) {
        "use strict";
        if (this.$XHRRequest_isAsynchronous || require/*t*/ === !0) {
            var requireDynamic/*n*/ = this.$XHRRequest_pendingTransport,
                requireLazy/*r*/ = requireDynamic/*n*/,
                module/*i*/ = requireLazy/*r*/.readyState;
            if (module/*i*/ >= 2) {
                var o = 4 === module/*i*/,
                    invariant/*s*/ = this.getURI(),
                    u = xhrSimpleDataSerializer/*l*/.getErrorCode(invariant/*s*/, requireDynamic/*n*/.status),
                    c = this.$XHRRequest_responseHandler;
                if (null !== u) o && (d.errorCode = u, d.errorMsg = requireDynamic/*n*/.responseText, d.errorType = "HTTP", this.$XHRRequest_errorHandler && a.applyWithGuard(this.$XHRRequest_errorHandler, null, [d], null, "XHRRequest:_errorHandler"));
                else if (c) {
                    var p = null;
                    c.includeHeaders && (p = requireDynamic/*n*/.getAllResponseHeaders()), (o || c.parseStreaming && 3 === module/*i*/) && a.applyWithGuard(c, null, [requireDynamic/*n*/.responseText, p, o], null, "XHRRequest:handler")
                }
                o && this.$XHRRequest_cleanup()
            }
        }
    }, o.prototype.$XHRRequest_onuploadprogress = function(global/*e*/) {
        "use strict";
        h.loadedBytes = global/*e*/.loaded, h.totalBytes = global/*e*/.total, this.$XHRRequest_uploadProgressHandler && a.applyWithGuard(this.$XHRRequest_uploadProgressHandler, null, [h], null, "XHRRequest:_uploadProgressHandler")
    }, o.prototype.$XHRRequest_cleanup = function() {
        "use strict";
        clearTimeout(this.$XHRRequest_timeoutTimer), delete this.$XHRRequest_pendingTransport
    }, module/*i*/.exports = o
});