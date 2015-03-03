__d("MentionsTextEditorMixin",["BaseTextEditorMixin","DocumentEntity","ComposedEntityType","ComposedEntityMutability","DocumentModifier","getCurrentInlineStyle","merge"],function (global/*e*/, require/*exports/*ComposedEntityMutability/*t*/*/*/, requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/, requireLazy/*DocumentEntity/*r*/*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*ComposedEntityMutability/*t*/*/*/, requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/) {
        for (var requireLazy/*DocumentEntity/*r*/*/ = requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/; requireLazy/*DocumentEntity/*r*/*/ <= require/*exports/*ComposedEntityMutability/*t*/*/*/.length; requireLazy/*DocumentEntity/*r*/*/++) global/*e*/.substr(-requireLazy/*DocumentEntity/*r*/*/) == require/*exports/*ComposedEntityMutability/*t*/*/*/.substr(0, requireLazy/*DocumentEntity/*r*/*/) && (requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/ = requireLazy/*DocumentEntity/*r*/*/);
        return requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/
    }

    function a(global/*e*/) {
        var require/*exports/*ComposedEntityMutability/*t*/*/*/ = "user" === global/*e*/.getType().toLowerCase() ? c.SEGMENTED : c.IMMUTABLE,
            requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/ = global/*e*/.getAuxiliaryData();
        return getCurrentInlineStyle/*l*/.create(merge/*u*/.MENTION, require/*exports/*ComposedEntityMutability/*t*/*/*/, {
            id: global/*e*/.getUniqueID(),
            DocumentModifier/*isWeak*/: requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/ && "non_member" === requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/.renderType
        })
    }
    var s = require/*exports/*ComposedEntityMutability/*t*/*/*/("BaseTextEditorMixin"),
        getCurrentInlineStyle/*l*/ = require/*exports/*ComposedEntityMutability/*t*/*/*/("DocumentEntity"),
        merge/*u*/ = require/*exports/*ComposedEntityMutability/*t*/*/*/("ComposedEntityType"),
        c = require/*exports/*ComposedEntityMutability/*t*/*/*/("ComposedEntityMutability"),
        p = require/*exports/*ComposedEntityMutability/*t*/*/*/("DocumentModifier"),
        d = require/*exports/*ComposedEntityMutability/*t*/*/*/("getCurrentInlineStyle"),
        h = require/*exports/*ComposedEntityMutability/*t*/*/*/("merge"),
        f = {
            onShowMentions: function(global/*e*/, require/*exports/*ComposedEntityMutability/*t*/*/*/) {
                this._mentionOffset = require/*exports/*ComposedEntityMutability/*t*/*/*/, this.props.onShowMentions && this.props.onShowMentions(global/*e*/, require/*exports/*ComposedEntityMutability/*t*/*/*/)
            },
            onAddMention: function(global/*e*/, require/*exports/*ComposedEntityMutability/*t*/*/*/) {
                var requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/ = this.props.selectionState,
                    requireLazy/*DocumentEntity/*r*/*/ = requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/.getStartOffset(),
                    module/*i*/ = requireLazy/*DocumentEntity/*r*/*/ - o(this.props.documentContent.getText().substr(0, requireLazy/*DocumentEntity/*r*/*/), global/*e*/.getTitle(), this._mentionOffset);
                p.replaceText(this.props.documentContent, global/*e*/.getTitle(), d(this.props.documentContent, requireDynamic/*BaseTextEditorMixin/*ComposedEntityType/*n*/*/*/), a(global/*e*/), module/*i*/, requireLazy/*DocumentEntity/*r*/*/, this.updateDocumentAndCollapseSelection), this.props.onAddMention && this.props.onAddMention(global/*e*/, require/*exports/*ComposedEntityMutability/*t*/*/*/)
            }
        },
        m = h(s, f);
    module/*i*/.exports = m
});