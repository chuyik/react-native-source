__d("CommentMenu",["ActionRow","Popover","React","ReactGraphQL","NativeModulesDeprecated","fbt","ix","keyOf"],function (e, t, n, r, i) {
    "use strict";
    var ActionRow/*o*/ = t("ActionRow"),
        Popover/*a*/ = t("Popover"),
        React/*s*/ = t("React"),
        ReactGraphQL/*l*/ = t("ReactGraphQL"),
        NativeModulesDeprecated/*u*/ = t("NativeModulesDeprecated").RKPasteboard,
        fbt/*c*/ = t("fbt"),
        ix/*p*/ = t("ix"),
        keyOf/*d*/ = t("keyOf"),
        h = keyOf/*d*/({
            popRef: null
        }),
        f = React/*s*/.createClass({
            displayName: "CommentMenu",
            propTypes: {
                comment: React/*s*/.PropTypes.object.isRequired,
                onDelete: React/*s*/.PropTypes.func,
                onEdit: React/*s*/.PropTypes.func
            },
            mixins: [ReactGraphQL/*l*/.Mixin],
            statics: {
                queries: {
                    comment: function(e, t) {
                        return function() {
                            var e = t.__GraphQL;
                            return new e.QueryFragment("CommentMenu_comment", "Comment", [new e.Field("can_viewer_delete"), new e.Field("can_viewer_edit"), new e.Field("body", [new e.Field("text")]), new e.Field("attachments", [new e.Field("url", null, null, [new e.Callv("site", ["mobile"])]), new e.Field("media", [new e.Field("image", [new e.Field("uri")], null, null, "image_menu")]), new e.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            })], null, null, null, null, {
                                plural: !0
                            }), new e.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], null, {
                                scope: "CommentMenu_comment"
                            })
                        }()
                    }
                }
            },
            open: function() {
                this.refs[h].open()
            },
            copyLink: function() {
                var e = this.props.comment;
                NativeModulesDeprecated/*u*/.setPasteboardString(e.url), this.refs[h].close()
            },
            openLink: function() {
                this.state.openLink()
            },
            deleteComment: function() {
                this.refs[h].close(this.props.onDelete)
            },
            editComment: function() {
                this.refs[h].close(this.props.onEdit)
            },
            copyComment: function() {
                var e = this.props.comment,
                    t = e && e.attachments && e.attachments[0],
                    n = t && t.media && t.media.image_menu && t.media.image_menu.uri;
                NativeModulesDeprecated/*u*/.setPasteboardString(e.body && e.body.text || t && t.url || n), this.refs[h].close()
            },
            renderContent: function() {
                var e = [],
                    t = this.props.comment,
                    n = t && t.attachments && t.attachments[0];
                if (t.can_viewer_edit && this.props.onEdit) {
                    var r = n && n.style_list && n.style_list[0];
                    "sticker" !== r && (e.push(React/*s*/.createElement(ActionRow/*o*/, {
                        onPress: this.editComment,
                        iconSource: ix/*p*/("ActionSheetIconCompose"),
                        title: fbt/*c*/({
                            type: "text",
                            texts: ["Edit Comment"],
                            desc: "Button to edit comment"
                        })
                    })), e.push(Popover/*a*/.renderSeparator()))
                }
                return t.can_viewer_delete && this.props.onDelete && (e.push(React/*s*/.createElement(ActionRow/*o*/, {
                    onPress: this.deleteComment,
                    iconSource: ix/*p*/("ActionSheetIconDelete"),
                    title: fbt/*c*/({
                        type: "text",
                        texts: ["Delete Comment"],
                        desc: "Button to delete comment"
                    })
                })), e.push(Popover/*a*/.renderSeparator())), e.push(React/*s*/.createElement(ActionRow/*o*/, {
                    key: "copyComment",
                    onPress: this.copyComment,
                    iconSource: ix/*p*/("ActionSheetIconCopy"),
                    title: fbt/*c*/({
                        type: "text",
                        texts: ["Copy Comment"],
                        desc: "Button to copy comment text to pasteboard"
                    })
                })), e
            },
            render: function() {
                return React/*s*/.createElement(Popover/*a*/, {
                    ref: h,
                    contentFactory: this.renderContent
                })
            }
        });
    i.exports = f
});