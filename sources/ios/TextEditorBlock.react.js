__d("TextEditorBlock.react",["UnicodeBidiDirection","ReactPropTypes","React","Text","cx","joinClasses","mergeInto"],function (e, t, n, r, i) {
    var UnicodeBidiDirection/*o*/ = t("UnicodeBidiDirection"),
        ReactPropTypes/*a*/ = t("ReactPropTypes"),
        React/*s*/ = t("React"),
        Text/*l*/ = t("Text"),
        u = (t("cx"), t("joinClasses"), t("mergeInto")),
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
                var e = this.props.direction === p,
                    t = this.props.direction === c,
                    n = e ? "right" : t ? "left" : "auto",
                    r = e ? "rtl" : t ? "ltr" : "auto",
                    i = {
                        style: [this.props.style, {
                            writingDirection: r,
                            textAlign: n
                        }]
                    };
                return u(i, this.props.blockProps), React/*s*/.createElement(Text/*l*/, Object.assign({}, i), this.props.children)
            }
        });
    i.exports = d
});