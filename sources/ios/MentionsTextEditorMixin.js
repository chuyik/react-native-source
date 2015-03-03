__d("MentionsTextEditorMixin",["BaseTextEditorMixin","DocumentEntity","ComposedEntityType","ComposedEntityMutability","DocumentModifier","getCurrentInlineStyle","merge"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        for (var requireLazy/*r*/ = requireDynamic/*n*/; requireLazy/*r*/ <= require/*t*/.length; requireLazy/*r*/++) global/*e*/.substr(-requireLazy/*r*/) == require/*t*/.substr(0, requireLazy/*r*/) && (requireDynamic/*n*/ = requireLazy/*r*/);
        return requireDynamic/*n*/
    }

    function a(global/*e*/) {
        var require/*t*/ = "user" === global/*e*/.getType().toLowerCase() ? c.SEGMENTED : c.IMMUTABLE,
            requireDynamic/*n*/ = global/*e*/.getAuxiliaryData();
        return l.create(u.MENTION, require/*t*/, {
            id: global/*e*/.getUniqueID(),
            isWeak: requireDynamic/*n*/ && "non_member" === requireDynamic/*n*/.renderType
        })
    }
    var s = require/*t*/("BaseTextEditorMixin"),
        l = require/*t*/("DocumentEntity"),
        u = require/*t*/("ComposedEntityType"),
        c = require/*t*/("ComposedEntityMutability"),
        p = require/*t*/("DocumentModifier"),
        d = require/*t*/("getCurrentInlineStyle"),
        h = require/*t*/("merge"),
        f = {
            onShowMentions: function(global/*e*/, require/*t*/) {
                this._mentionOffset = require/*t*/, this.props.onShowMentions && this.props.onShowMentions(global/*e*/, require/*t*/)
            },
            onAddMention: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = this.props.selectionState,
                    requireLazy/*r*/ = requireDynamic/*n*/.getStartOffset(),
                    module/*i*/ = requireLazy/*r*/ - o(this.props.documentContent.getText().substr(0, requireLazy/*r*/), global/*e*/.getTitle(), this._mentionOffset);
                p.replaceText(this.props.documentContent, global/*e*/.getTitle(), d(this.props.documentContent, requireDynamic/*n*/), a(global/*e*/), module/*i*/, requireLazy/*r*/, this.updateDocumentAndCollapseSelection), this.props.onAddMention && this.props.onAddMention(global/*e*/, require/*t*/)
            }
        },
        m = h(s, f);
    module/*i*/.exports = m
});