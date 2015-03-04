__d("TextEditorBlock.react",["UnicodeBidiDirection","ReactPropTypes","React","Text","cx","joinClasses","mergeInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var UnicodeBidiDirection/*o*/ = require/*t*/("UnicodeBidiDirection"),
        ReactPropTypes/*a*/ = require/*t*/("ReactPropTypes"),
        React/*s*/ = require/*t*/("React"),
        Text/*l*/ = require/*t*/("Text"),
        u = (require/*t*/("cx"), require/*t*/("joinClasses"), require/*t*/("mergeInto")),
        c = UnicodeBidiDirection/*o*/.LTR,
        p = UnicodeBidiDirection/*o*/.RTL,
        d = React/*s*/.createClass({
            displayName: "TextEditorBlock",
            propTypes: {
                offsetKey: ReactPropTypes/*a*/.string.isRequired,
                text: ReactPropTypes/*a*/.string.isRequired,
                blockProps: ReactPropTypes/*a*/.object,
                blockStyleFn: ReactPropTypes/*a*/.func.isRequired,
                style: ReactPropTypes/*a*/.number,
                direction: ReactPropTypes/*a*/.string.isRequired
            },
            render: function() {
                var global/*e*/ = this.props.direction === p,
                    require/*t*/ = this.props.direction === c,
                    requireDynamic/*n*/ = global/*e*/ ? "right" : require/*t*/ ? "left" : "auto",
                    requireLazy/*r*/ = global/*e*/ ? "rtl" : require/*t*/ ? "ltr" : "auto",
                    module/*i*/ = {
                        style: [this.props.style, {
                            writingDirection: requireLazy/*r*/,
                            textAlign: requireDynamic/*n*/
                        }]
                    };
                return u(module/*i*/, this.props.blockProps), React/*s*/.createElement(Text/*l*/, Object.assign({}, module/*i*/), this.props.children)
            }
        });
    module/*i*/.exports = d
});