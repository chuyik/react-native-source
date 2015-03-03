__d("TimeStamp",["React","Text","TimerMixin","fbt","formatDate"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("React"),
        exports/*a*/ = require/*t*/("Text"),
        React/*s*/ = require/*t*/("TimerMixin"),
        Text/*l*/ = require/*t*/("fbt"),
        TimerMixin/*u*/ = require/*t*/("formatDate"),
        fbt/*c*/ = 1e3,
        formatDate/*p*/ = 60,
        d = 3600,
        h = 43200,
        f = 60,
        m = o.createClass({
            displayName: "TimeStamp",
            mixins: [React/*s*/],
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
                var global/*e*/ = this.getRelativeTime(Math.floor(Date.now() / fbt/*c*/), this.props.time, this.props.shorten);
                return this.nextUpdate = global/*e*/.next, o.createElement(exports/*a*/, Object.assign({}, this.props), global/*e*/.text)
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
                    var exports/*a*/;
                    exports/*a*/ = requireLazy/*r*/.getFullYear() == module/*i*/.getFullYear() ? TimerMixin/*u*/(requireLazy/*r*/, "F j", o) : TimerMixin/*u*/(requireLazy/*r*/, "F j, Y", o);
                    var React/*s*/, fbt/*c*/ = TimerMixin/*u*/(requireLazy/*r*/, "g:module/*i*/ A", o);
                    return React/*s*/ = requireDynamic/*n*/ ? Text/*l*/({
                        type: "text",
                        texts: ["{date}"],
                        desc: "Date as exports/*a*/ string"
                    }, [Text/*l*/.param("date", exports/*a*/)]) : Text/*l*/({
                        type: "text",
                        texts: ["{date} at {time}"],
                        desc: "Date at time as exports/*a*/ string"
                    }, [Text/*l*/.param("date", exports/*a*/), Text/*l*/.param("time", fbt/*c*/)]), {
                        text: React/*s*/,
                        next: -1
                    }
                }
                var g = {
                        text: "",
                        next: -1
                    },
                    _ = global/*e*/ - require/*t*/,
                    y = Math.floor(_ / formatDate/*p*/),
                    v = Math.floor(y / f);
                return 1 > y ? (requireDynamic/*n*/ ? (g.text = Text/*l*/({
                    type: "text",
                    texts: ["Just now"],
                    desc: "Timestamp for something posted less than exports/*a*/ minute ago"
                }), g.next = 20 - _ % 20) : (g.text = Text/*l*/({
                    type: "text",
                    texts: ["A few seconds ago"],
                    desc: "Timestamp for something posted exports/*a*/ few seconds ago"
                }), g.next = formatDate/*p*/ - _ % formatDate/*p*/), g) : 1 > v ? (requireDynamic/*n*/ && 1 == y ? g.text = Text/*l*/({
                    type: "text",
                    texts: ["1 min"],
                    desc: "Shorthand timestamp for something posted exports/*a*/ minute ago"
                }) : requireDynamic/*n*/ ? g.text = Text/*l*/({
                    type: "text",
                    texts: ["{num_minutes} mins"],
                    desc: "Shorthand timestamp for something posted num_minutes minutes ago"
                }, [Text/*l*/.param("num_minutes", y)]) : (g.text = 1 === y ? "about exports/*a*/ minute ago" : y + " minutes ago", g.text = 1 === y ? Text/*l*/({
                    type: "text",
                    texts: ["about exports/*a*/ minute ago"],
                    desc: "Timestamp for something posted exports/*a*/ minute ago"
                }) : Text/*l*/({
                    type: "text",
                    texts: ["{num_minutes} minutes ago"],
                    desc: "Timestamp for something posted num_minutes minutes ago"
                }, [Text/*l*/.param("num_minutes", y)])), g.next = formatDate/*p*/ - _ % formatDate/*p*/, g) : (11 > v && (g.next = d - _ % d), requireDynamic/*n*/ && 1 === v ? g.text = Text/*l*/({
                    type: "text",
                    texts: ["1 hr"],
                    desc: "Shorthand timestamp for something posted an hour ago"
                }) : requireDynamic/*n*/ ? g.text = Text/*l*/({
                    type: "text",
                    texts: ["{num_hours} hrs"],
                    desc: "Shorthand timestamp for something posted num_hours hours ago"
                }, [Text/*l*/.param("num_hours", v)]) : (g.text = 1 === v ? "about an hour ago" : v + " hours ago", g.text = 1 === v ? Text/*l*/({
                    type: "text",
                    texts: ["about an hour ago"],
                    desc: "Timestamp for something posted an hour ago"
                }) : Text/*l*/({
                    type: "text",
                    texts: ["{num_hours} hours ago"],
                    desc: "Timestamp for something posted num_hours hours ago"
                }, [Text/*l*/.param("num_hours", v)])), g)
            }
        });
    module/*i*/.exports = m
});