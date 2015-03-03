__d("TextEditorBlock.react",["UnicodeBidiDirection","ReactPropTypes","React","Text","cx","joinClasses","mergeInto"],function (global/*e*/, require/*Text/*cx/*t*/*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*Text/*cx/*t*/*/*/("UnicodeBidiDirection"),
        exports/*a*/ = require/*Text/*cx/*t*/*/*/("ReactPropTypes"),
        UnicodeBidiDirection/*s*/ = require/*Text/*cx/*t*/*/*/("React"),
        ReactPropTypes/*l*/ = require/*Text/*cx/*t*/*/*/("Text"),
        React/*u*/ = (require/*Text/*cx/*t*/*/*/("cx"), require/*Text/*cx/*t*/*/*/("joinClasses"), require/*Text/*cx/*t*/*/*/("mergeInto")),
        joinClasses/*c*/ = o.LTR,
        mergeInto/*p*/ = o.RTL,
        d = UnicodeBidiDirection/*s*/.createClass({
            displayName: "TextEditorBlock",
            propTypes: {
                offsetKey: exports/*a*/.string.isRequired,
                text: exports/*a*/.string.isRequired,
                blockProps: exports/*a*/.object,
                blockStyleFn: exports/*a*/.func.isRequired,
                style: exports/*a*/.number,
                direction: exports/*a*/.string.isRequired
            },
            render: function() {
                var global/*e*/ = this.props.direction === mergeInto/*p*/,
                    require/*Text/*cx/*t*/*/*/ = this.props.direction === joinClasses/*c*/,
                    requireDynamic/*n*/ = global/*e*/ ? "right" : require/*Text/*cx/*t*/*/*/ ? "left" : "auto",
                    requireLazy/*r*/ = global/*e*/ ? "rtl" : require/*Text/*cx/*t*/*/*/ ? "ltr" : "auto",
                    module/*i*/ = {
                        style: [this.props.style, {
                            writingDirection: requireLazy/*r*/,
                            textAlign: requireDynamic/*n*/
                        }]
                    };
                return React/*u*/(module/*i*/, this.props.blockProps), UnicodeBidiDirection/*s*/.createElement(ReactPropTypes/*l*/, Object.assign({}, module/*i*/), this.props.children)
            }
        });
    module/*i*/.exports = d
});