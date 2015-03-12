__d("BaseTextWithEntities.react",["Newline.react","React","Text.react","UnicodeUtils"],function (e, t, n, r, i) {
    "use strict";

    function o(e, t) {
        return e.offset - t.offset
    }
    var a = t("Newline.react"),
        React/*s*/ = t("React"),
        l = t("Text.react"),
        UnicodeUtils/*u*/ = t("UnicodeUtils"),
        c = /(\r\n|[\r\n])/,
        p = React/*s*/.PropTypes.shape({
            length: React/*s*/.PropTypes.number.isRequired,
            offset: React/*s*/.PropTypes.number.isRequired
        }),
        d = React/*s*/.createClass({
            displayName: "BaseTextWithEntities",
            propTypes: {
                aggregatedRanges: React/*s*/.PropTypes.array,
                imageRanges: React/*s*/.PropTypes.array,
                ranges: React/*s*/.PropTypes.arrayOf(p),
                rangeRenderer: React/*s*/.PropTypes.func.isRequired,
                text: React/*s*/.PropTypes.string.isRequired,
                textRenderer: React/*s*/.PropTypes.func.isRequired
            },
            _getSortedRanges: function() {
                var e = [];
                return [this.props.ranges, this.props.aggregatedRanges, this.props.imageRanges].filter(function(e) {
                    return null != e
                }).forEach(function(t) {
                    return e = e.concat(t)
                }), e.sort(o)
            },
            _renderText: function(e) {
                for (var t = e.split(c), n = {}, r = 0; r < t.length; r++) {
                    var i = t[r];
                    i && (n[r] = r % 2 === 1 ? React/*s*/.createElement(a, null) : this.props.textRenderer(t[r]))
                }
                return n
            },
            render: function() {
                for (var e = 0, t = this.props.text, n = this._getSortedRanges(), r = {}, i = n.length, o = 0, a = i; a > o; o++) {
                    var c = n[o];
                    if (!(c.offset < e)) {
                        c.offset > e && (r["text" + o] = this._renderText(UnicodeUtils/*u*/.substring(t, e, c.offset)));
                        var p = UnicodeUtils/*u*/.substr(t, c.offset, c.length);
                        r["range" + o] = this.props.rangeRenderer(p, c), e = c.offset + c.length
                    }
                }
                return t.length > e && (r.end = this._renderText(UnicodeUtils/*u*/.substr(t, e))), React/*s*/.createElement(l, {
                    className: this.props.className,
                    style: this.props.style
                }, r)
            }
        });
    i.exports = d
});