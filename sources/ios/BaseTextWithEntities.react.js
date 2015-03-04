__d("BaseTextWithEntities.react",["Newline.react","React","Text.react","UnicodeUtils"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        return global/*e*/.offset - require/*t*/.offset
    }
    var a = require/*t*/("Newline.react"),
        React/*s*/ = require/*t*/("React"),
        l = require/*t*/("Text.react"),
        UnicodeUtils/*u*/ = require/*t*/("UnicodeUtils"),
        c = /(\requireLazy/*r*/\requireDynamic/*n*/|[\requireLazy/*r*/\requireDynamic/*n*/])/,
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
                var global/*e*/ = [];
                return [this.props.ranges, this.props.aggregatedRanges, this.props.imageRanges].filter(function(global/*e*/) {
                    return null != global/*e*/
                }).forEach(function(require/*t*/) {
                    return global/*e*/ = global/*e*/.concat(require/*t*/)
                }), global/*e*/.sort(o)
            },
            _renderText: function(global/*e*/) {
                for (var require/*t*/ = global/*e*/.split(c), requireDynamic/*n*/ = {}, requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*t*/.length; requireLazy/*r*/++) {
                    var module/*i*/ = require/*t*/[requireLazy/*r*/];
                    module/*i*/ && (requireDynamic/*n*/[requireLazy/*r*/] = requireLazy/*r*/ % 2 === 1 ? React/*s*/.createElement(a, null) : this.props.textRenderer(require/*t*/[requireLazy/*r*/]))
                }
                return requireDynamic/*n*/
            },
            render: function() {
                for (var global/*e*/ = 0, require/*t*/ = this.props.text, requireDynamic/*n*/ = this._getSortedRanges(), requireLazy/*r*/ = {}, module/*i*/ = requireDynamic/*n*/.length, o = 0, a = module/*i*/; a > o; o++) {
                    var c = requireDynamic/*n*/[o];
                    if (!(c.offset < global/*e*/)) {
                        c.offset > global/*e*/ && (requireLazy/*r*/["text" + o] = this._renderText(UnicodeUtils/*u*/.substring(require/*t*/, global/*e*/, c.offset)));
                        var p = UnicodeUtils/*u*/.substr(require/*t*/, c.offset, c.length);
                        requireLazy/*r*/["range" + o] = this.props.rangeRenderer(p, c), global/*e*/ = c.offset + c.length
                    }
                }
                return require/*t*/.length > global/*e*/ && (requireLazy/*r*/.end = this._renderText(UnicodeUtils/*u*/.substr(require/*t*/, global/*e*/))), React/*s*/.createElement(l, {
                    className: this.props.className,
                    style: this.props.style
                }, requireLazy/*r*/)
            }
        });
    module/*i*/.exports = d
});