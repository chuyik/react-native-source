__d("CommentMenu",["ActionRow","Popover","React","ReactGraphQL","NativeModulesDeprecated","fbt","ix","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var ActionRow/*o*/ = require/*t*/("ActionRow"),
        Popover/*a*/ = require/*t*/("Popover"),
        React/*s*/ = require/*t*/("React"),
        ReactGraphQL/*l*/ = require/*t*/("ReactGraphQL"),
        NativeModulesDeprecated/*u*/ = require/*t*/("NativeModulesDeprecated").RKPasteboard,
        fbt/*c*/ = require/*t*/("fbt"),
        ix/*p*/ = require/*t*/("ix"),
        keyOf/*d*/ = require/*t*/("keyOf"),
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
                    comment: function(global/*e*/, require/*t*/) {
                        return function() {
                            var global/*e*/ = require/*t*/.__GraphQL;
                            return new global/*e*/.QueryFragment("CommentMenu_comment", "Comment", [new global/*e*/.Field("can_viewer_delete"), new global/*e*/.Field("can_viewer_edit"), new global/*e*/.Field("body", [new global/*e*/.Field("text")]), new global/*e*/.Field("attachments", [new global/*e*/.Field("url", null, null, [new global/*e*/.Callv("site", ["mobile"])]), new global/*e*/.Field("media", [new global/*e*/.Field("image", [new global/*e*/.Field("uri")], null, null, "image_menu")]), new global/*e*/.Field("style_list", null, null, null, null, null, {
                                plural: !0
                            })], null, null, null, null, {
                                plural: !0
                            }), new global/*e*/.Field("id", null, null, null, null, null, {
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
                var global/*e*/ = this.props.comment;
                NativeModulesDeprecated/*u*/.setPasteboardString(global/*e*/.url), this.refs[h].close()
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
                var global/*e*/ = this.props.comment,
                    require/*t*/ = global/*e*/ && global/*e*/.attachments && global/*e*/.attachments[0],
                    requireDynamic/*n*/ = require/*t*/ && require/*t*/.media && require/*t*/.media.image_menu && require/*t*/.media.image_menu.uri;
                NativeModulesDeprecated/*u*/.setPasteboardString(global/*e*/.body && global/*e*/.body.text || require/*t*/ && require/*t*/.url || requireDynamic/*n*/), this.refs[h].close()
            },
            renderContent: function() {
                var global/*e*/ = [],
                    require/*t*/ = this.props.comment,
                    requireDynamic/*n*/ = require/*t*/ && require/*t*/.attachments && require/*t*/.attachments[0];
                if (require/*t*/.can_viewer_edit && this.props.onEdit) {
                    var requireLazy/*r*/ = requireDynamic/*n*/ && requireDynamic/*n*/.style_list && requireDynamic/*n*/.style_list[0];
                    "sticker" !== requireLazy/*r*/ && (global/*e*/.push(React/*s*/.createElement(ActionRow/*o*/, {
                        onPress: this.editComment,
                        iconSource: ix/*p*/("ActionSheetIconCompose"),
                        title: fbt/*c*/({
                            type: "text",
                            texts: ["Edit Comment"],
                            desc: "Button to edit comment"
                        })
                    })), global/*e*/.push(Popover/*a*/.renderSeparator()))
                }
                return require/*t*/.can_viewer_delete && this.props.onDelete && (global/*e*/.push(React/*s*/.createElement(ActionRow/*o*/, {
                    onPress: this.deleteComment,
                    iconSource: ix/*p*/("ActionSheetIconDelete"),
                    title: fbt/*c*/({
                        type: "text",
                        texts: ["Delete Comment"],
                        desc: "Button to delete comment"
                    })
                })), global/*e*/.push(Popover/*a*/.renderSeparator())), global/*e*/.push(React/*s*/.createElement(ActionRow/*o*/, {
                    key: "copyComment",
                    onPress: this.copyComment,
                    iconSource: ix/*p*/("ActionSheetIconCopy"),
                    title: fbt/*c*/({
                        type: "text",
                        texts: ["Copy Comment"],
                        desc: "Button to copy comment text to pasteboard"
                    })
                })), global/*e*/
            },
            render: function() {
                return React/*s*/.createElement(Popover/*a*/, {
                    ref: h,
                    contentFactory: this.renderContent
                })
            }
        });
    module/*i*/.exports = f
});