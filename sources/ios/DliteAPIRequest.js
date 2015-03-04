__d("DliteAPIRequest",["DliteAPIConfig","DliteLog","URI","XHRHttpError","XHRRequest","createChunkedResponseParser","getSameOriginTransport","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return global/*e*/ === XHRHttpError/*p*/.HTTP_TRANSPORT_ERROR || global/*e*/ === XHRHttpError/*p*/.HTTP_SERVER_ERROR
    }

    function a(global/*e*/) {
        this.$DliteAPIRequest_sent = !1, this.setURI(global/*e*/), this.setMethod("POST"), this.setTransportBuilder(getSameOriginTransport/*f*/)
    }

    function s(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        global/*e*/.setResponseHandler(requireDynamic/*n*/).setData(require/*t*/).send()
    }
    var DliteAPIConfig/*l*/ = require/*t*/("DliteAPIConfig"),
        DliteLog/*u*/ = require/*t*/("DliteLog"),
        URI/*c*/ = require/*t*/("URI"),
        XHRHttpError/*p*/ = require/*t*/("XHRHttpError"),
        XHRRequest/*d*/ = require/*t*/("XHRRequest"),
        createChunkedResponseParser/*h*/ = require/*t*/("createChunkedResponseParser"),
        getSameOriginTransport/*f*/ = require/*t*/("getSameOriginTransport"),
        invariant/*m*/ = require/*t*/("invariant");
    a.prototype.setURI = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setURI(...): Already sent request."), this.$DliteAPIRequest_uri = new URI/*c*/(global/*e*/), this
    }, a.prototype.setMethod = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setMethod(...): Already sent request."), this.$DliteAPIRequest_method = global/*e*/, this
    }, a.prototype.setData = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setData(...): Already sent request."), this.$DliteAPIRequest_data = global/*e*/, this
    }, a.prototype.setRequestHeader = function(global/*e*/, require/*t*/) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setRequestHeader(...): Already sent."), this.$DliteAPIRequest_headers = this.$DliteAPIRequest_headers || {}, this.$DliteAPIRequest_headers && (this.$DliteAPIRequest_headers[global/*e*/] = require/*t*/), this
    }, a.prototype.setTransportBuilder = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setTransportBuilder(...): Already sent request."), this.$DliteAPIRequest_transportBuilder = global/*e*/, this
    }, a.prototype.setResponseFilter = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setResponseFilter(...): Already sent request."), this.$DliteAPIRequest_responseFilter = global/*e*/, this
    }, a.prototype.setResponseChunkHandler = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setResponseChunkHandler(...): Already sent request."), this.$DliteAPIRequest_responseChunkHandler = global/*e*/, this
    }, a.prototype.setErrorHandler = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setErrorHandler(...): Already sent request."), this.$DliteAPIRequest_errorHandler = global/*e*/, this
    }, a.prototype.setTimeoutHandler = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setTimeoutHandler(...): Already sent request."), this.$DliteAPIRequest_timeoutHandler = global/*e*/, this
    }, a.prototype.send = function() {
        function global/*e*/() {
            return requireDynamic/*n*/ <= DliteAPIConfig/*l*/.retryDelays.length
        }

        function require/*t*/() {
            var global/*e*/ = DliteAPIConfig/*l*/.retryDelays[requireDynamic/*n*/ - 1],
                require/*t*/ = requireLazy/*r*/ + global/*e*/;
            setTimeout(module/*i*/, require/*t*/ - Date.now())
        }
        this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.send(): Can only send once."), this.$DliteAPIRequest_sent = !0;
        var requireDynamic/*n*/ = 0,
            requireLazy/*r*/ = 0,
            module/*i*/ = function() {
                requireDynamic/*n*/++, requireLazy/*r*/ = Date.now();
                var module/*i*/;
                this.$DliteAPIRequest_responseChunkHandler && (module/*i*/ = createChunkedResponseParser/*h*/(this.$DliteAPIRequest_responseChunkHandler, this.$DliteAPIRequest_responseFilter));
                var a = this.$DliteAPIRequest_errorHandler,
                    s = function(requireDynamic/*n*/) {
                        global/*e*/() && o(requireDynamic/*n*/.errorCode) ? (DliteLog/*u*/.warn("DliteAPIRequest: Transient HTTP error, retrying. %s %s %s", requireDynamic/*n*/.errorType || "", requireDynamic/*n*/.errorCode || "", requireDynamic/*n*/.errorMsg || ""), require/*t*/()) : a && a(requireDynamic/*n*/)
                    },
                    URI/*c*/ = this.$DliteAPIRequest_timeoutHandler,
                    XHRHttpError/*p*/ = function() {
                        global/*e*/() ? (DliteLog/*u*/.warn("DliteAPIRequest: HTTP timeout, retrying."), require/*t*/()) : URI/*c*/ && URI/*c*/()
                    },
                    getSameOriginTransport/*f*/ = new XHRRequest/*d*/(this.$DliteAPIRequest_uri).setMethod(this.$DliteAPIRequest_method).setTransportBuilder(this.$DliteAPIRequest_transportBuilder).setErrorHandler(s).setTimeoutHandler(XHRHttpError/*p*/).setTimeout(DliteAPIConfig/*l*/.fetchTimeout);
                if (this.$DliteAPIRequest_headers)
                    for (var invariant/*m*/ in this.$DliteAPIRequest_headers) getSameOriginTransport/*f*/.setRequestHeader(invariant/*m*/, this.$DliteAPIRequest_headers[invariant/*m*/]);
                g(getSameOriginTransport/*f*/, this.$DliteAPIRequest_data, module/*i*/)
            }.bind(this);
        module/*i*/()
    };
    var g = s;
    __DEV__ && (a.mockSendRequest = function(global/*e*/) {
        g = global/*e*/
    }, a.unmockSendRequest = function() {
        g = s
    }), module/*i*/.exports = a
});