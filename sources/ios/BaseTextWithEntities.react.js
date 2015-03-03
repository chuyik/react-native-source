__d("BaseTextWithEntities.react",["Newline.react","React","Text.react","UnicodeUtils"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o(global/*e*/, require/*t*/) {
        return global/*e*/.offset - require/*t*/.offset
    }
    var a = require/*t*/("Newline.react"),
        s = require/*t*/("React"),
        l = require/*t*/("Text.react"),
        u = require/*t*/("UnicodeUtils"),
        c = /(\requireLazy/*r*/\requireDynamic/*n*/|[\requireLazy/*r*/\requireDynamic/*n*/])/,
        p = s.PropTypes.shape({
            length: s.PropTypes.number.isRequired,
            offset: s.PropTypes.number.isRequired
        }),
        d = s.createClass({
            displayName: "BaseTextWithEntities",
            propTypes: {
                aggregatedRanges: s.PropTypes.array,
                imageRanges: s.PropTypes.array,
                ranges: s.PropTypes.arrayOf(p),
                rangeRenderer: s.PropTypes.func.isRequired,
                text: s.PropTypes.string.isRequired,
                textRenderer: s.PropTypes.func.isRequired
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
                    module/*i*/ && (requireDynamic/*n*/[requireLazy/*r*/] = requireLazy/*r*/ % 2 === 1 ? s.createElement(a, null) : this.props.textRenderer(require/*t*/[requireLazy/*r*/]))
                }
                return requireDynamic/*n*/
            },
            render: function() {
                for (var global/*e*/ = 0, require/*t*/ = this.props.text, requireDynamic/*n*/ = this._getSortedRanges(), requireLazy/*r*/ = {}, module/*i*/ = requireDynamic/*n*/.length, o = 0, a = module/*i*/; a > o; o++) {
                    var c = requireDynamic/*n*/[o];
                    if (!(c.offset < global/*e*/)) {
                        c.offset > global/*e*/ && (requireLazy/*r*/["text" + o] = this._renderText(u.substring(require/*t*/, global/*e*/, c.offset)));
                        var p = u.substr(require/*t*/, c.offset, c.length);
                        requireLazy/*r*/["range" + o] = this.props.rangeRenderer(p, c), global/*e*/ = c.offset + c.length
                    }
                }
                return require/*t*/.length > global/*e*/ && (requireLazy/*r*/.end = this._renderText(u.substr(require/*t*/, global/*e*/))), s.createElement(l, {
                    className: this.props.className,
                    style: this.props.style
                }, requireLazy/*r*/)
            }
        });
    module/*i*/.exports = d
});