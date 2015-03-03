__d("DliteAPIRequest",["DliteAPIConfig","DliteLog","URI","XHRHttpError","XHRRequest","createChunkedResponseParser","getSameOriginTransport","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/) {
        return global/*e*/ === p.HTTP_TRANSPORT_ERROR || global/*e*/ === p.HTTP_SERVER_ERROR
    }

    function a(global/*e*/) {
        this.$DliteAPIRequest_sent = !1, this.setURI(global/*e*/), this.setMethod("POST"), this.setTransportBuilder(f)
    }

    function s(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        global/*e*/.setResponseHandler(requireDynamic/*n*/).setData(require/*t*/).send()
    }
    var l = require/*t*/("DliteAPIConfig"),
        u = require/*t*/("DliteLog"),
        c = require/*t*/("URI"),
        p = require/*t*/("XHRHttpError"),
        d = require/*t*/("XHRRequest"),
        h = require/*t*/("createChunkedResponseParser"),
        f = require/*t*/("getSameOriginTransport"),
        m = require/*t*/("invariant");
    a.prototype.setURI = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setURI(...): Already sent request."), this.$DliteAPIRequest_uri = new c(global/*e*/), this
    }, a.prototype.setMethod = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setMethod(...): Already sent request."), this.$DliteAPIRequest_method = global/*e*/, this
    }, a.prototype.setData = function(global/*e*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setData(...): Already sent request."), this.$DliteAPIRequest_data = global/*e*/, this
    }, a.prototype.setRequestHeader = function(global/*e*/, require/*t*/) {
        return this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.setRequestHeader(...): Already sent."), this.$DliteAPIRequest_headers = this.$DliteAPIRequest_headers || {}, this.$DliteAPIRequest_headers && (this.$DliteAPIRequest_headers[global/*e*/] = require/*t*/), this
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
            return requireDynamic/*n*/ <= l.retryDelays.length
        }

        function require/*t*/() {
            var global/*e*/ = l.retryDelays[requireDynamic/*n*/ - 1],
                require/*t*/ = requireLazy/*r*/ + global/*e*/;
            setTimeout(module/*i*/, require/*t*/ - Date.now())
        }
        this.$DliteAPIRequest_sent && m(0, "DliteAPIRequest.send(): Can only send once."), this.$DliteAPIRequest_sent = !0;
        var requireDynamic/*n*/ = 0,
            requireLazy/*r*/ = 0,
            module/*i*/ = function() {
                requireDynamic/*n*/++, requireLazy/*r*/ = Date.now();
                var module/*i*/;
                this.$DliteAPIRequest_responseChunkHandler && (module/*i*/ = h(this.$DliteAPIRequest_responseChunkHandler, this.$DliteAPIRequest_responseFilter));
                var a = this.$DliteAPIRequest_errorHandler,
                    s = function(requireDynamic/*n*/) {
                        global/*e*/() && o(requireDynamic/*n*/.errorCode) ? (u.warn("DliteAPIRequest: Transient HTTP error, retrying. %s %s %s", requireDynamic/*n*/.errorType || "", requireDynamic/*n*/.errorCode || "", requireDynamic/*n*/.errorMsg || ""), require/*t*/()) : a && a(requireDynamic/*n*/)
                    },
                    c = this.$DliteAPIRequest_timeoutHandler,
                    p = function() {
                        global/*e*/() ? (u.warn("DliteAPIRequest: HTTP timeout, retrying."), require/*t*/()) : c && c()
                    },
                    f = new d(this.$DliteAPIRequest_uri).setMethod(this.$DliteAPIRequest_method).setTransportBuilder(this.$DliteAPIRequest_transportBuilder).setErrorHandler(s).setTimeoutHandler(p).setTimeout(l.fetchTimeout);
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