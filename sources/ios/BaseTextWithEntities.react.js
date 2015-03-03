__d("BaseTextWithEntities.react",["Newline.react","React","Text.react","UnicodeUtils"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*exports/*t*/*/) {
        return global/*e*/.offset - require/*exports/*t*/*/.offset
    }
    var a = require/*exports/*t*/*/("Newline.react"),
        Newline.react/*s*/ = require/*exports/*t*/*/("React"),
        React/*l*/ = require/*exports/*t*/*/("Text.react"),
        Text.react/*u*/ = require/*exports/*t*/*/("UnicodeUtils"),
        UnicodeUtils/*c*/ = /(\requireLazy/*r*/\requireDynamic/*n*/|[\requireLazy/*r*/\requireDynamic/*n*/])/,
        p = Newline.react/*s*/.PropTypes.shape({
            length: Newline.react/*s*/.PropTypes.number.isRequired,
            offset: Newline.react/*s*/.PropTypes.number.isRequired
        }),
        d = Newline.react/*s*/.createClass({
            displayName: "BaseTextWithEntities",
            propTypes: {
                aggregatedRanges: Newline.react/*s*/.PropTypes.array,
                imageRanges: Newline.react/*s*/.PropTypes.array,
                ranges: Newline.react/*s*/.PropTypes.arrayOf(p),
                rangeRenderer: Newline.react/*s*/.PropTypes.func.isRequired,
                text: Newline.react/*s*/.PropTypes.string.isRequired,
                textRenderer: Newline.react/*s*/.PropTypes.func.isRequired
            },
            _getSortedRanges: function() {
                var global/*e*/ = [];
                return [this.props.ranges, this.props.aggregatedRanges, this.props.imageRanges].filter(function(global/*e*/) {
                    return null != global/*e*/
                }).forEach(function(require/*exports/*t*/*/) {
                    return global/*e*/ = global/*e*/.concat(require/*exports/*t*/*/)
                }), global/*e*/.sort(o)
            },
            _renderText: function(global/*e*/) {
                for (var require/*exports/*t*/*/ = global/*e*/.split(UnicodeUtils/*c*/), requireDynamic/*n*/ = {}, requireLazy/*r*/ = 0; requireLazy/*r*/ < require/*exports/*t*/*/.length; requireLazy/*r*/++) {
                    var module/*i*/ = require/*exports/*t*/*/[requireLazy/*r*/];
                    module/*i*/ && (requireDynamic/*n*/[requireLazy/*r*/] = requireLazy/*r*/ % 2 === 1 ? Newline.react/*s*/.createElement(a, null) : this.props.textRenderer(require/*exports/*t*/*/[requireLazy/*r*/]))
                }
                return requireDynamic/*n*/
            },
            render: function() {
                for (var global/*e*/ = 0, require/*exports/*t*/*/ = this.props.text, requireDynamic/*n*/ = this._getSortedRanges(), requireLazy/*r*/ = {}, module/*i*/ = requireDynamic/*n*/.length, o = 0, a = module/*i*/; a > o; o++) {
                    var UnicodeUtils/*c*/ = requireDynamic/*n*/[o];
                    if (!(UnicodeUtils/*c*/.offset < global/*e*/)) {
                        UnicodeUtils/*c*/.offset > global/*e*/ && (requireLazy/*r*/["text" + o] = this._renderText(Text.react/*u*/.substring(require/*exports/*t*/*/, global/*e*/, UnicodeUtils/*c*/.offset)));
                        var p = Text.react/*u*/.substr(require/*exports/*t*/*/, UnicodeUtils/*c*/.offset, UnicodeUtils/*c*/.length);
                        requireLazy/*r*/["range" + o] = this.props.rangeRenderer(p, UnicodeUtils/*c*/), global/*e*/ = UnicodeUtils/*c*/.offset + UnicodeUtils/*c*/.length
                    }
                }
                return require/*exports/*t*/*/.length > global/*e*/ && (requireLazy/*r*/.end = this._renderText(Text.react/*u*/.substr(require/*exports/*t*/*/, global/*e*/))), Newline.react/*s*/.createElement(React/*l*/, {
                    className: this.props.className,
                    style: this.props.style
                }, requireLazy/*r*/)
            }
        });
    module/*i*/.exports = d
});