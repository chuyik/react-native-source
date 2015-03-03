__d("fetch",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = {};
    ! function() {
        function global/*e*/(require/*exports/*t*/*/) {
            this.map = {};
            var requireDynamic/*n*/ = this;
            require/*exports/*t*/*/ instanceof global/*e*/ ? require/*exports/*t*/*/.forEach(function(global/*e*/, require/*exports/*t*/*/) {
                require/*exports/*t*/*/.forEach(function(require/*exports/*t*/*/) {
                    requireDynamic/*n*/.append(global/*e*/, require/*exports/*t*/*/)
                })
            }) : require/*exports/*t*/*/ && Object.getOwnPropertyNames(require/*exports/*t*/*/).forEach(function(global/*e*/) {
                requireDynamic/*n*/.append(global/*e*/, require/*exports/*t*/*/[global/*e*/])
            })
        }

        function require/*exports/*t*/*/(global/*e*/) {
            return global/*e*/.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(global/*e*/.bodyUsed = !0)
        }

        function requireDynamic/*n*/(global/*e*/) {
            return new Promise(function(require/*exports/*t*/*/, requireDynamic/*n*/) {
                global/*e*/.onload = function() {
                    require/*exports/*t*/*/(global/*e*/.result)
                }, global/*e*/.onerror = function() {
                    requireDynamic/*n*/(global/*e*/.error)
                }
            })
        }

        function requireLazy/*r*/(global/*e*/) {
            var require/*exports/*t*/*/ = new FileReader;
            return require/*exports/*t*/*/.readAsArrayBuffer(global/*e*/), requireDynamic/*n*/(require/*exports/*t*/*/)
        }

        function module/*i*/(global/*e*/) {
            var require/*exports/*t*/*/ = new FileReader;
            return require/*exports/*t*/*/.readAsText(global/*e*/), requireDynamic/*n*/(require/*exports/*t*/*/)
        }

        function a() {
            return this.bodyUsed = !1, d ? (this.blob = function() {
                var global/*e*/ = require/*exports/*t*/*/(this);
                return global/*e*/ ? global/*e*/ : Promise.resolve(this._bodyBlob)
            }, this.arrayBuffer = function() {
                return this.blob().then(requireLazy/*r*/)
            }, this.text = function() {
                return this.blob().then(module/*i*/)
            }) : this.text = function() {
                var global/*e*/ = require/*exports/*t*/*/(this);
                return global/*e*/ ? global/*e*/ : Promise.resolve(this._bodyText)
            }, "FormData" in o && (this.formData = function() {
                return this.text().then(u)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function s(global/*e*/) {
            var require/*exports/*t*/*/ = global/*e*/.toUpperCase();
            return h.indexOf(require/*exports/*t*/*/) > -1 ? require/*exports/*t*/*/ : global/*e*/
        }

        function l(require/*exports/*t*/*/, requireDynamic/*n*/) {
            requireDynamic/*n*/ = requireDynamic/*n*/ || {}, this.url = require/*exports/*t*/*/, this._body = requireDynamic/*n*/.body, this.credentials = requireDynamic/*n*/.credentials || "omit", this.headers = new global/*e*/(requireDynamic/*n*/.headers), this.method = s(requireDynamic/*n*/.method || "GET"), this.mode = requireDynamic/*n*/.mode || null, this.referrer = null
        }

        function u(global/*e*/) {
            var require/*exports/*t*/*/ = new FormData;
            return global/*e*/.trim().split("&").forEach(function(global/*e*/) {
                if (global/*e*/) {
                    var requireDynamic/*n*/ = global/*e*/.split("="),
                        requireLazy/*r*/ = requireDynamic/*n*/.shift().replace(/\+/g, " "),
                        module/*i*/ = requireDynamic/*n*/.join("=").replace(/\+/g, " ");
                    require/*exports/*t*/*/.append(decodeURIComponent(requireLazy/*r*/), decodeURIComponent(module/*i*/))
                }
            }), require/*exports/*t*/*/
        }

        function c(require/*exports/*t*/*/) {
            var requireDynamic/*n*/ = new global/*e*/,
                requireLazy/*r*/ = require/*exports/*t*/*/.getAllResponseHeaders().trim().split("\requireDynamic/*n*/");
            return requireLazy/*r*/.forEach(function(global/*e*/) {
                var require/*exports/*t*/*/ = global/*e*/.trim().split(":"),
                    requireLazy/*r*/ = require/*exports/*t*/*/.shift().trim(),
                    module/*i*/ = require/*exports/*t*/*/.join(":").trim();
                requireDynamic/*n*/.append(requireLazy/*r*/, module/*i*/)
            }), requireDynamic/*n*/
        }

        function p(global/*e*/, require/*exports/*t*/*/) {
            require/*exports/*t*/*/ || (require/*exports/*t*/*/ = {}), d ? this._bodyBlob = "string" == typeof global/*e*/ ? new Blob([global/*e*/]) : global/*e*/ : this._bodyText = global/*e*/, this.type = "default", this.url = null, this.status = require/*exports/*t*/*/.status, this.statusText = require/*exports/*t*/*/.statusText, this.headers = require/*exports/*t*/*/.headers, this.url = require/*exports/*t*/*/.url || ""
        }
        if (!o.fetch) {
            global/*e*/.prototype.append = function(global/*e*/, require/*exports/*t*/*/) {
                global/*e*/ = global/*e*/.toLowerCase();
                var requireDynamic/*n*/ = this.map[global/*e*/];
                requireDynamic/*n*/ || (requireDynamic/*n*/ = [], this.map[global/*e*/] = requireDynamic/*n*/), requireDynamic/*n*/.push(require/*exports/*t*/*/)
            }, global/*e*/.prototype["delete"] = function(global/*e*/) {
                delete this.map[global/*e*/.toLowerCase()]
            }, global/*e*/.prototype.get = function(global/*e*/) {
                var require/*exports/*t*/*/ = this.map[global/*e*/.toLowerCase()];
                return require/*exports/*t*/*/ ? require/*exports/*t*/*/[0] : null
            }, global/*e*/.prototype.getAll = function(global/*e*/) {
                return this.map[global/*e*/.toLowerCase()] || []
            }, global/*e*/.prototype.has = function(global/*e*/) {
                return this.map.hasOwnProperty(global/*e*/.toLowerCase())
            }, global/*e*/.prototype.set = function(global/*e*/, require/*exports/*t*/*/) {
                this.map[global/*e*/.toLowerCase()] = [require/*exports/*t*/*/]
            }, global/*e*/.prototype.forEach = function(global/*e*/) {
                var require/*exports/*t*/*/ = this;
                Object.getOwnPropertyNames(this.map).forEach(function(requireDynamic/*n*/) {
                    global/*e*/(requireDynamic/*n*/, require/*exports/*t*/*/.map[requireDynamic/*n*/])
                })
            };
            var d = "FileReader" in o && "Blob" in o && function() {
                    try {
                        return new Blob, !0
                    } catch (global/*e*/) {
                        return !1
                    }
                }(),
                h = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            l.prototype.fetch = function() {
                var global/*e*/ = this;
                return new Promise(function(require/*exports/*t*/*/, requireDynamic/*n*/) {
                    function requireLazy/*r*/() {
                        return "responseURL" in module/*i*/ ? module/*i*/.responseURL : /^X-Request-URL:/m.test(module/*i*/.getAllResponseHeaders()) ? module/*i*/.getResponseHeader("X-Request-URL") : void 0
                    }
                    var module/*i*/ = new XMLHttpRequest;
                    module/*i*/.onload = function() {
                        var global/*e*/ = 1223 === module/*i*/.status ? 204 : module/*i*/.status;
                        if (100 > global/*e*/ || global/*e*/ > 599) return void requireDynamic/*n*/(new TypeError("Network request failed"));
                        var o = {
                                status: global/*e*/,
                                statusText: module/*i*/.statusText,
                                headers: c(module/*i*/),
                                url: requireLazy/*r*/()
                            },
                            a = "response" in module/*i*/ ? module/*i*/.response : module/*i*/.responseText;
                        require/*exports/*t*/*/(new p(a, o))
                    }, module/*i*/.onerror = function() {
                        requireDynamic/*n*/(new TypeError("Network request failed"))
                    }, module/*i*/.open(global/*e*/.method, global/*e*/.url), "responseType" in module/*i*/ && d && (module/*i*/.responseType = "blob"), global/*e*/.headers.forEach(function(global/*e*/, require/*exports/*t*/*/) {
                        require/*exports/*t*/*/.forEach(function(require/*exports/*t*/*/) {
                            module/*i*/.setRequestHeader(global/*e*/, require/*exports/*t*/*/)
                        })
                    }), module/*i*/.send(void 0 === global/*e*/._body ? null : global/*e*/._body)
                })
            }, a.call(l.prototype), a.call(p.prototype), o.Headers = global/*e*/, o.Request = l, o.Response = p, o.fetch = function(global/*e*/, require/*exports/*t*/*/) {
                return new l(global/*e*/, require/*exports/*t*/*/).fetch()
            }, o.fetch.polyfill = !0
        }
    }(), module/*i*/.exports = o.fetch
});