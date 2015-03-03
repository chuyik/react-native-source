__d("TimeStamp",["React","Text","TimerMixin","fbt","formatDate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("React"),
        a = require/*t*/("Text"),
        s = require/*t*/("TimerMixin"),
        l = require/*t*/("fbt"),
        u = require/*t*/("formatDate"),
        c = 1e3,
        p = 60,
        d = 3600,
        h = 43200,
        f = 60,
        m = o.createClass({
            displayName: "TimeStamp",
            mixins: [s],
            propTypes: {
                time: o.PropTypes.number.isRequired,
                shorten: o.PropTypes.bool
            },
            statics: {
                ignoreTimezoneForTesting: !1
            },
            componentDidMount: function() {
                this.componentDidUpdate()
            },
            componentDidUpdate: function() {
                this.nextUpdate >= 0 && !this.timer && (this.timer = this.setTimeout(function() {
                    this.timer = null, this.forceUpdate.bind(this)
                }.bind(this), 1e3 * this.nextUpdate))
            },
            render: function() {
                var global/*e*/ = this.getRelativeTime(Math.floor(Date.now() / c), this.props.time, this.props.shorten);
                return this.nextUpdate = global/*e*/.next, o.createElement(a, Object.assign({}, this.props), global/*e*/.text)
            },
            getRelativeTime: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                if (global/*e*/ - require/*t*/ > h) {
                    var requireLazy/*r*/ = new Date(1e3 * require/*t*/),
                        module/*i*/ = new Date,
                        o = void 0;
                    m.ignoreTimezoneForTesting && (o = {
                        skipPatternLocalization: !0,
                        utc: !0
                    });
                    var a;
                    a = requireLazy/*r*/.getFullYear() == module/*i*/.getFullYear() ? u(requireLazy/*r*/, "F j", o) : u(requireLazy/*r*/, "F j, Y", o);
                    var s, c = u(requireLazy/*r*/, "g:module/*i*/ A", o);
                    return s = requireDynamic/*n*/ ? l({
                        type: "text",
                        texts: ["{date}"],
                        desc: "Date as a string"
                    }, [l.param("date", a)]) : l({
                        type: "text",
                        texts: ["{date} at {time}"],
                        desc: "Date at time as a string"
                    }, [l.param("date", a), l.param("time", c)]), {
                        text: s,
                        next: -1
                    }
                }
                var g = {
                        text: "",
                        next: -1
                    },
                    _ = global/*e*/ - require/*t*/,
                    y = Math.floor(_ / p),
                    v = Math.floor(y / f);
                return 1 > y ? (requireDynamic/*n*/ ? (g.text = l({
                    type: "text",
                    texts: ["Just now"],
                    desc: "Timestamp for something posted less than a minute ago"
                }), g.next = 20 - _ % 20) : (g.text = l({
                    type: "text",
                    texts: ["A few seconds ago"],
                    desc: "Timestamp for something posted a few seconds ago"
                }), g.next = p - _ % p), g) : 1 > v ? (requireDynamic/*n*/ && 1 == y ? g.text = l({
                    type: "text",
                    texts: ["1 min"],
                    desc: "Shorthand timestamp for something posted a minute ago"
                }) : requireDynamic/*n*/ ? g.text = l({
                    type: "text",
                    texts: ["{num_minutes} mins"],
                    desc: "Shorthand timestamp for something posted num_minutes minutes ago"
                }, [l.param("num_minutes", y)]) : (g.text = 1 === y ? "about a minute ago" : y + " minutes ago", g.text = 1 === y ? l({
                    type: "text",
                    texts: ["about a minute ago"],
                    desc: "Timestamp for something posted a minute ago"
                }) : l({
                    type: "text",
                    texts: ["{num_minutes} minutes ago"],
                    desc: "Timestamp for something posted num_minutes minutes ago"
                }, [l.param("num_minutes", y)])), g.next = p - _ % p, g) : (11 > v && (g.next = d - _ % d), requireDynamic/*n*/ && 1 === v ? g.text = l({
                    type: "text",
                    texts: ["1 hr"],
                    desc: "Shorthand timestamp for something posted an hour ago"
                }) : requireDynamic/*n*/ ? g.text = l({
                    type: "text",
                    texts: ["{num_hours} hrs"],
                    desc: "Shorthand timestamp for something posted num_hours hours ago"
                }, [l.param("num_hours", v)]) : (g.text = 1 === v ? "about an hour ago" : v + " hours ago", g.text = 1 === v ? l({
                    type: "text",
                    texts: ["about an hour ago"],
                    desc: "Timestamp for something posted an hour ago"
                }) : l({
                    type: "text",
                    texts: ["{num_hours} hours ago"],
                    desc: "Timestamp for something posted num_hours hours ago"
                }, [l.param("num_hours", v)])), g)
            }
        });
    module/*i*/.exports = m
});