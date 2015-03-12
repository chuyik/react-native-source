__d("DliteAPIRequest",["DliteAPIConfig","DliteLog","URI","XHRHttpError","XHRRequest","createChunkedResponseParser","getSameOriginTransport","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o(e) {
        return e === XHRHttpError/*p*/.HTTP_TRANSPORT_ERROR || e === XHRHttpError/*p*/.HTTP_SERVER_ERROR
    }

    function a(e) {
        this.$DliteAPIRequest_sent = !1, this.setURI(e), this.setMethod("POST"), this.setTransportBuilder(getSameOriginTransport/*f*/)
    }

    function s(e, t, n) {
        e.setResponseHandler(n).setData(t).send()
    }
    var DliteAPIConfig/*l*/ = t("DliteAPIConfig"),
        DliteLog/*u*/ = t("DliteLog"),
        URI/*c*/ = t("URI"),
        XHRHttpError/*p*/ = t("XHRHttpError"),
        XHRRequest/*d*/ = t("XHRRequest"),
        createChunkedResponseParser/*h*/ = t("createChunkedResponseParser"),
        getSameOriginTransport/*f*/ = t("getSameOriginTransport"),
        invariant/*m*/ = t("invariant");
    a.prototype.setURI = function(e) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setURI(...): Already sent request."), this.$DliteAPIRequest_uri = new URI/*c*/(e), this
    }, a.prototype.setMethod = function(e) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setMethod(...): Already sent request."), this.$DliteAPIRequest_method = e, this
    }, a.prototype.setData = function(e) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setData(...): Already sent request."), this.$DliteAPIRequest_data = e, this
    }, a.prototype.setRequestHeader = function(e, t) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setRequestHeader(...): Already sent."), this.$DliteAPIRequest_headers = this.$DliteAPIRequest_headers || {}, this.$DliteAPIRequest_headers && (this.$DliteAPIRequest_headers[e] = t), this
    }, a.prototype.setTransportBuilder = function(e) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setTransportBuilder(...): Already sent request."), this.$DliteAPIRequest_transportBuilder = e, this
    }, a.prototype.setResponseFilter = function(e) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setResponseFilter(...): Already sent request."), this.$DliteAPIRequest_responseFilter = e, this
    }, a.prototype.setResponseChunkHandler = function(e) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setResponseChunkHandler(...): Already sent request."), this.$DliteAPIRequest_responseChunkHandler = e, this
    }, a.prototype.setErrorHandler = function(e) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setErrorHandler(...): Already sent request."), this.$DliteAPIRequest_errorHandler = e, this
    }, a.prototype.setTimeoutHandler = function(e) {
        return this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.setTimeoutHandler(...): Already sent request."), this.$DliteAPIRequest_timeoutHandler = e, this
    }, a.prototype.send = function() {
        function e() {
            return n <= DliteAPIConfig/*l*/.retryDelays.length
        }

        function t() {
            var e = DliteAPIConfig/*l*/.retryDelays[n - 1],
                t = r + e;
            setTimeout(i, t - Date.now())
        }
        this.$DliteAPIRequest_sent && invariant/*m*/(0, "DliteAPIRequest.send(): Can only send once."), this.$DliteAPIRequest_sent = !0;
        var n = 0,
            r = 0,
            i = function() {
                n++, r = Date.now();
                var i;
                this.$DliteAPIRequest_responseChunkHandler && (i = createChunkedResponseParser/*h*/(this.$DliteAPIRequest_responseChunkHandler, this.$DliteAPIRequest_responseFilter));
                var a = this.$DliteAPIRequest_errorHandler,
                    s = function(n) {
                        e() && o(n.errorCode) ? (DliteLog/*u*/.warn("DliteAPIRequest: Transient HTTP error, retrying. %s %s %s", n.errorType || "", n.errorCode || "", n.errorMsg || ""), t()) : a && a(n)
                    },
                    URI/*c*/ = this.$DliteAPIRequest_timeoutHandler,
                    XHRHttpError/*p*/ = function() {
                        e() ? (DliteLog/*u*/.warn("DliteAPIRequest: HTTP timeout, retrying."), t()) : URI/*c*/ && URI/*c*/()
                    },
                    getSameOriginTransport/*f*/ = new XHRRequest/*d*/(this.$DliteAPIRequest_uri).setMethod(this.$DliteAPIRequest_method).setTransportBuilder(this.$DliteAPIRequest_transportBuilder).setErrorHandler(s).setTimeoutHandler(XHRHttpError/*p*/).setTimeout(DliteAPIConfig/*l*/.fetchTimeout);
                if (this.$DliteAPIRequest_headers)
                    for (var invariant/*m*/ in this.$DliteAPIRequest_headers) getSameOriginTransport/*f*/.setRequestHeader(invariant/*m*/, this.$DliteAPIRequest_headers[invariant/*m*/]);
                g(getSameOriginTransport/*f*/, this.$DliteAPIRequest_data, i)
            }.bind(this);
        i()
    };
    var g = s;
    __DEV__ && (a.mockSendRequest = function(e) {
        g = e
    }, a.unmockSendRequest = function() {
        g = s
    }), i.exports = a
});