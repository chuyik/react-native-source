__d("DliteAPIRequest",["DliteAPIConfig","DliteLog","URI","XHRHttpError","XHRRequest","createChunkedResponseParser","getSameOriginTransport","invariant"],function (global/*e*/, require/*URI/*t*/*/, requireDynamic/*XHRHttpError/*n*/*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return global/*e*/ === getSameOriginTransport/*p*/.HTTP_TRANSPORT_ERROR || global/*e*/ === getSameOriginTransport/*p*/.HTTP_SERVER_ERROR
    }

    function a(global/*e*/) {
        this.$DliteAPIRequest_sent = !1, exports/*this.setURI*/(global/*e*/), DliteAPIConfig/*this.setMethod*/("POST"), DliteLog/*this.setTransportBuilder*/(f)
    }

    function s(global/*e*/, require/*URI/*t*/*/, requireDynamic/*XHRHttpError/*n*/*/) {
        global/*e*/.setResponseHandler(requireDynamic/*XHRHttpError/*n*/*/).setData(require/*URI/*t*/*/).send()
    }
    var l = require/*URI/*t*/*/("DliteAPIConfig"),
        XHRRequest/*u*/ = require/*URI/*t*/*/("DliteLog"),
        createChunkedResponseParser/*c*/ = require/*URI/*t*/*/("URI"),
        getSameOriginTransport/*p*/ = require/*URI/*t*/*/("XHRHttpError"),
        invariant/*d*/ = require/*URI/*t*/*/("XHRRequest"),
        h = require/*URI/*t*/*/("createChunkedResponseParser"),
        f = require/*URI/*t*/*/("getSameOriginTransport"),
        m = require/*URI/*t*/*/("invariant");
    a.prototype.setURI = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setURI(...): Already sent request."), this.$DliteAPIRequest_uri = new createChunkedResponseParser/*c*/(global/*e*/), this
    }, a.prototype.setMethod = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setMethod(...): Already sent request."), this.$DliteAPIRequest_method = global/*e*/, this
    }, a.prototype.setData = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setData(...): Already sent request."), this.$DliteAPIRequest_data = global/*e*/, this
    }, a.prototype.setRequestHeader = function(global/*e*/, require/*URI/*t*/*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setRequestHeader(...): Already sent."), this.$DliteAPIRequest_headers = this.$DliteAPIRequest_headers || {}, this.$DliteAPIRequest_headers && (this.$DliteAPIRequest_headers[global/*e*/] = require/*URI/*t*/*/), this
    }, a.prototype.setTransportBuilder = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setTransportBuilder(...): Already sent request."), this.$DliteAPIRequest_transportBuilder = global/*e*/, this
    }, a.prototype.setResponseFilter = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setResponseFilter(...): Already sent request."), this.$DliteAPIRequest_responseFilter = global/*e*/, this
    }, a.prototype.setResponseChunkHandler = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setResponseChunkHandler(...): Already sent request."), this.$DliteAPIRequest_responseChunkHandler = global/*e*/, this
    }, a.prototype.setErrorHandler = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setErrorHandler(...): Already sent request."), this.$DliteAPIRequest_errorHandler = global/*e*/, this
    }, a.prototype.setTimeoutHandler = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setTimeoutHandler(...): Already sent request."), this.$DliteAPIRequest_timeoutHandler = global/*e*/, this
    }, a.prototype.send = function() {
        function global/*e*/() {
            return requireDynamic/*XHRHttpError/*n*/*/ <= l.retryDelays.length
        }

        function require/*URI/*t*/*/() {
            var global/*e*/ = l.retryDelays[requireDynamic/*XHRHttpError/*n*/*/ - 1],
                require/*URI/*t*/*/ = requireLazy/*r*/ + global/*e*/;
            setTimeout(module/*i*/, require/*URI/*t*/*/ - Date.now())
        }
        this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.send(): Can only send once."), this.$DliteAPIRequest_sent = !0;
        var requireDynamic/*XHRHttpError/*n*/*/ = 0,
            requireLazy/*r*/ = 0,
            module/*i*/ = function() {
                requireDynamic/*XHRHttpError/*n*/*/++, requireLazy/*r*/ = Date.now();
                var module/*i*/;
                this.$DliteAPIRequest_responseChunkHandler && (module/*i*/ = h(this.$DliteAPIRequest_responseChunkHandler, this.$DliteAPIRequest_responseFilter));
                var a = this.$DliteAPIRequest_errorHandler,
                    s = function(requireDynamic/*XHRHttpError/*n*/*/) {
                        global/*e*/() && o(requireDynamic/*XHRHttpError/*n*/*/.errorCode) ? (XHRRequest/*u*/.warn("DliteAPIRequest: Transient HTTP error, retrying. %s %s %s", requireDynamic/*XHRHttpError/*n*/*/.errorType || "", requireDynamic/*XHRHttpError/*n*/*/.errorCode || "", requireDynamic/*XHRHttpError/*n*/*/.errorMsg || ""), require/*URI/*t*/*/()) : a && a(requireDynamic/*XHRHttpError/*n*/*/)
                    },
                    createChunkedResponseParser/*c*/ = this.$DliteAPIRequest_timeoutHandler,
                    getSameOriginTransport/*p*/ = function() {
                        global/*e*/() ? (XHRRequest/*u*/.warn("DliteAPIRequest: HTTP timeout, retrying."), require/*URI/*t*/*/()) : createChunkedResponseParser/*c*/ && createChunkedResponseParser/*c*/()
                    },
                    f = new invariant/*d*/(this.$DliteAPIRequest_uri).setMethod(this.$DliteAPIRequest_method).setTransportBuilder(this.$DliteAPIRequest_transportBuilder).setErrorHandler(s).setTimeoutHandler(getSameOriginTransport/*p*/).setTimeout(l.fetchTimeout);
                if (this.$DliteAPIRequest_headers)
                    for (var m in this.$DliteAPIRequest_headers) f.setRequestHeader(m, this.$DliteAPIRequest_headers[m]);
                g(f, this.$DliteAPIRequest_data, module/*i*/)
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