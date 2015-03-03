__d("CommentMenu",["ActionRow","Popover","React","ReactGraphQL","NativeModulesDeprecated","fbt","ix","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("ActionRow"),
        exports/*a*/ = require/*t*/("Popover"),
        ActionRow/*s*/ = require/*t*/("React"),
        Popover/*l*/ = require/*t*/("ReactGraphQL"),
        React/*u*/ = require/*t*/("NativeModulesDeprecated").RKPasteboard,
        ReactGraphQL/*c*/ = require/*t*/("fbt"),
        NativeModulesDeprecated/*p*/ = require/*t*/("ix"),
        fbt/*d*/ = require/*t*/("keyOf"),
        ix/*h*/ = fbt/*d*/({
            popRef: null
        }),
        keyOf/*f*/ = ActionRow/*s*/.createClass({
            displayName: "CommentMenu",
            propTypes: {
                comment: ActionRow/*s*/.PropTypes.object.isRequired,
                onDelete: ActionRow/*s*/.PropTypes.func,
                onEdit: ActionRow/*s*/.PropTypes.func
            },
            mixins: [Popover/*l*/.Mixin],
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
                this.refs[ix/*h*/].open()
            },
            copyLink: function() {
                var global/*e*/ = this.props.comment;
                React/*u*/.setPasteboardString(global/*e*/.url), this.refs[ix/*h*/].close()
            },
            openLink: function() {
                this.state.openLink()
            },
            deleteComment: function() {
                this.refs[ix/*h*/].close(this.props.onDelete)
            },
            editComment: function() {
                this.refs[ix/*h*/].close(this.props.onEdit)
            },
            copyComment: function() {
                var global/*e*/ = this.props.comment,
                    require/*t*/ = global/*e*/ && global/*e*/.attachments && global/*e*/.attachments[0],
                    requireDynamic/*n*/ = require/*t*/ && require/*t*/.media && require/*t*/.media.image_menu && require/*t*/.media.image_menu.uri;
                React/*u*/.setPasteboardString(global/*e*/.body && global/*e*/.body.text || require/*t*/ && require/*t*/.url || requireDynamic/*n*/), this.refs[ix/*h*/].close()
            },
            renderContent: function() {
                var global/*e*/ = [],
                    require/*t*/ = this.props.comment,
                    requireDynamic/*n*/ = require/*t*/ && require/*t*/.attachments && require/*t*/.attachments[0];
                if (require/*t*/.can_viewer_edit && this.props.onEdit) {
                    var requireLazy/*r*/ = requireDynamic/*n*/ && requireDynamic/*n*/.style_list && requireDynamic/*n*/.style_list[0];
                    "sticker" !== requireLazy/*r*/ && (global/*e*/.push(ActionRow/*s*/.createElement(o, {
                        onPress: this.editComment,
                        iconSource: NativeModulesDeprecated/*p*/("ActionSheetIconCompose"),
                        title: ReactGraphQL/*c*/({
                            type: "text",
                            texts: ["Edit Comment"],
                            desc: "Button to edit comment"
                        })
                    })), global/*e*/.push(exports/*a*/.renderSeparator()))
                }
                return require/*t*/.can_viewer_delete && this.props.onDelete && (global/*e*/.push(ActionRow/*s*/.createElement(o, {
                    onPress: this.deleteComment,
                    iconSource: NativeModulesDeprecated/*p*/("ActionSheetIconDelete"),
                    title: ReactGraphQL/*c*/({
                        type: "text",
                        texts: ["Delete Comment"],
                        desc: "Button to delete comment"
                    })
                })), global/*e*/.push(exports/*a*/.renderSeparator())), global/*e*/.push(ActionRow/*s*/.createElement(o, {
                    key: "copyComment",
                    onPress: this.copyComment,
                    iconSource: NativeModulesDeprecated/*p*/("ActionSheetIconCopy"),
                    title: ReactGraphQL/*c*/({
                        type: "text",
                        texts: ["Copy Comment"],
                        desc: "Button to copy comment text to pasteboard"
                    })
                })), global/*e*/
            },
            render: function() {
                return ActionRow/*s*/.createElement(exports/*a*/, {
                    ref: ix/*h*/,
                    contentFactory: this.renderContent
                })
            }
        });
    module/*i*/.exports = keyOf/*f*/
});