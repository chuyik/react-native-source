__d("TimeStamp",["React","Text","TimerMixin","fbt","formatDate"],function (e, t, n, r, i) {
    "use strict";
    var React/*o*/ = t("React"),
        Text/*a*/ = t("Text"),
        TimerMixin/*s*/ = t("TimerMixin"),
        fbt/*l*/ = t("fbt"),
        formatDate/*u*/ = t("formatDate"),
        c = 1e3,
        p = 60,
        d = 3600,
        h = 43200,
        f = 60,
        m = React/*o*/.createClass({
            displayName: "TimeStamp",
            mixins: [TimerMixin/*s*/],
            propTypes: {
                time: React/*o*/.PropTypes.number.isRequired,
                shorten: React/*o*/.PropTypes.bool
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
                var e = this.getRelativeTime(Math.floor(Date.now() / c), this.props.time, this.props.shorten);
                return this.nextUpdate = e.next, React/*o*/.createElement(Text/*a*/, Object.assign({}, this.props), e.text)
            },
            getRelativeTime: function(e, t, n) {
                if (e - t > h) {
                    var r = new Date(1e3 * t),
                        i = new Date,
                        React/*o*/ = void 0;
                    m.ignoreTimezoneForTesting && (React/*o*/ = {
                        skipPatternLocalization: !0,
                        utc: !0
                    });
                    var Text/*a*/;
                    Text/*a*/ = r.getFullYear() == i.getFullYear() ? formatDate/*u*/(r, "F j", React/*o*/) : formatDate/*u*/(r, "F j, Y", React/*o*/);
                    var TimerMixin/*s*/, c = formatDate/*u*/(r, "g:i A", React/*o*/);
                    return TimerMixin/*s*/ = n ? fbt/*l*/({
                        type: "text",
                        texts: ["{date}"],
                        desc: "Date as Text/*a*/ string"
                    }, [fbt/*l*/.param("date", Text/*a*/)]) : fbt/*l*/({
                        type: "text",
                        texts: ["{date} at {time}"],
                        desc: "Date at time as Text/*a*/ string"
                    }, [fbt/*l*/.param("date", Text/*a*/), fbt/*l*/.param("time", c)]), {
                        text: TimerMixin/*s*/,
                        next: -1
                    }
                }
                var g = {
                        text: "",
                        next: -1
                    },
                    _ = e - t,
                    y = Math.floor(_ / p),
                    v = Math.floor(y / f);
                return 1 > y ? (n ? (g.text = fbt/*l*/({
                    type: "text",
                    texts: ["Just now"],
                    desc: "Timestamp for something posted less than Text/*a*/ minute ago"
                }), g.next = 20 - _ % 20) : (g.text = fbt/*l*/({
                    type: "text",
                    texts: ["A few seconds ago"],
                    desc: "Timestamp for something posted Text/*a*/ few seconds ago"
                }), g.next = p - _ % p), g) : 1 > v ? (n && 1 == y ? g.text = fbt/*l*/({
                    type: "text",
                    texts: ["1 min"],
                    desc: "Shorthand timestamp for something posted Text/*a*/ minute ago"
                }) : n ? g.text = fbt/*l*/({
                    type: "text",
                    texts: ["{num_minutes} mins"],
                    desc: "Shorthand timestamp for something posted num_minutes minutes ago"
                }, [fbt/*l*/.param("num_minutes", y)]) : (g.text = 1 === y ? "about Text/*a*/ minute ago" : y + " minutes ago", g.text = 1 === y ? fbt/*l*/({
                    type: "text",
                    texts: ["about Text/*a*/ minute ago"],
                    desc: "Timestamp for something posted Text/*a*/ minute ago"
                }) : fbt/*l*/({
                    type: "text",
                    texts: ["{num_minutes} minutes ago"],
                    desc: "Timestamp for something posted num_minutes minutes ago"
                }, [fbt/*l*/.param("num_minutes", y)])), g.next = p - _ % p, g) : (11 > v && (g.next = d - _ % d), n && 1 === v ? g.text = fbt/*l*/({
                    type: "text",
                    texts: ["1 hr"],
                    desc: "Shorthand timestamp for something posted an hour ago"
                }) : n ? g.text = fbt/*l*/({
                    type: "text",
                    texts: ["{num_hours} hrs"],
                    desc: "Shorthand timestamp for something posted num_hours hours ago"
                }, [fbt/*l*/.param("num_hours", v)]) : (g.text = 1 === v ? "about an hour ago" : v + " hours ago", g.text = 1 === v ? fbt/*l*/({
                    type: "text",
                    texts: ["about an hour ago"],
                    desc: "Timestamp for something posted an hour ago"
                }) : fbt/*l*/({
                    type: "text",
                    texts: ["{num_hours} hours ago"],
                    desc: "Timestamp for something posted num_hours hours ago"
                }, [fbt/*l*/.param("num_hours", v)])), g)
            }
        });
    i.exports = m
});