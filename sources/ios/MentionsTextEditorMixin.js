__d("MentionsTextEditorMixin",["BaseTextEditorMixin","DocumentEntity","ComposedEntityType","ComposedEntityMutability","DocumentModifier","getCurrentInlineStyle","merge"],function (e, t, n, r, i) {
    function o(e, t, n) {
        for (var r = n; r <= t.length; r++) e.substr(-r) == t.substr(0, r) && (n = r);
        return n
    }

    function a(e) {
        var t = "user" === e.getType().toLowerCase() ? ComposedEntityMutability/*c*/.SEGMENTED : ComposedEntityMutability/*c*/.IMMUTABLE,
            n = e.getAuxiliaryData();
        return DocumentEntity/*l*/.create(ComposedEntityType/*u*/.MENTION, t, {
            id: e.getUniqueID(),
            isWeak: n && "non_member" === n.renderType
        })
    }
    var BaseTextEditorMixin/*s*/ = t("BaseTextEditorMixin"),
        DocumentEntity/*l*/ = t("DocumentEntity"),
        ComposedEntityType/*u*/ = t("ComposedEntityType"),
        ComposedEntityMutability/*c*/ = t("ComposedEntityMutability"),
        DocumentModifier/*p*/ = t("DocumentModifier"),
        getCurrentInlineStyle/*d*/ = t("getCurrentInlineStyle"),
        merge/*h*/ = t("merge"),
        f = {
            onShowMentions: function(e, t) {
                this._mentionOffset = t, this.props.onShowMentions && this.props.onShowMentions(e, t)
            },
            onAddMention: function(e, t) {
                var n = this.props.selectionState,
                    r = n.getStartOffset(),
                    i = r - o(this.props.documentContent.getText().substr(0, r), e.getTitle(), this._mentionOffset);
                DocumentModifier/*p*/.replaceText(this.props.documentContent, e.getTitle(), getCurrentInlineStyle/*d*/(this.props.documentContent, n), a(e), i, r, this.updateDocumentAndCollapseSelection), this.props.onAddMention && this.props.onAddMention(e, t)
            }
        },
        m = merge/*h*/(BaseTextEditorMixin/*s*/, f);
    i.exports = m
});