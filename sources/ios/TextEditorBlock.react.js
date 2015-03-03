__d("TextEditorBlock.react",["UnicodeBidiDirection","ReactPropTypes","React","Text","cx","joinClasses","mergeInto"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = require/*t*/("UnicodeBidiDirection"),
        a = require/*t*/("ReactPropTypes"),
        s = require/*t*/("React"),
        l = require/*t*/("Text"),
        u = (require/*t*/("cx"), require/*t*/("joinClasses"), require/*t*/("mergeInto")),
        c = o.LTR,
        p = o.RTL,
        d = s.createClass({
            displayName: "TextEditorBlock",
            propTypes: {
                offsetKey: a.string.isRequired,
                text: a.string.isRequired,
                blockProps: a.object,
                blockStyleFn: a.func.isRequired,
                style: a.number,
                direction: a.string.isRequired
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
                return u(module/*i*/, this.props.blockProps), s.createElement(l, Object.assign({}, module/*i*/), this.props.children)
            }
        });
    module/*i*/.exports = d
});