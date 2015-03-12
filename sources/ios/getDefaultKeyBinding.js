__d("getDefaultKeyBinding",["DocumentCommands","Keys","UserAgent"],function (e, t, n, r, i) {
    function o(e) {
        return e.ctrlKey && !e.altKey
    }

    function a(e) {
        return m ? e.metaKey && !e.altKey : o(e)
    }

    function s(e) {
        return m ? e.altKey : o(e)
    }

    function l(e) {
        return a(e) ? e.shiftKey ? DocumentCommands/*d*/.REDO : DocumentCommands/*d*/.UNDO : void 0
    }

    function u(e) {
        return g && e.shiftKey ? null : s(e) ? DocumentCommands/*d*/.DELETE_WORD : DocumentCommands/*d*/.DELETE
    }

    function c(e) {
        return a(e) && m ? DocumentCommands/*d*/.BACKSPACE_TO_END_OF_BLOCK : s(e) ? DocumentCommands/*d*/.BACKSPACE_WORD : DocumentCommands/*d*/.BACKSPACE
    }

    function p(e) {
        switch (e.keyCode) {
            case 66:
                return a(e) ? DocumentCommands/*d*/.BOLD : null;
            case 68:
                return o(e) ? DocumentCommands/*d*/.DELETE : null;
            case 72:
                return o(e) ? DocumentCommands/*d*/.BACKSPACE : null;
            case 73:
                return a(e) ? DocumentCommands/*d*/.ITALIC : null;
            case 74:
                return a(e) ? DocumentCommands/*d*/.CODE : null;
            case 75:
                return o(e) ? DocumentCommands/*d*/.DELETE_TO_END_OF_BLOCK : null;
            case 79:
                return o(e) ? DocumentCommands/*d*/.INSERT_BLOCK_DELIMITER : null;
            case 84:
                return o(e) ? DocumentCommands/*d*/.TRANSPOSE_CHARACTERS : null;
            case 85:
                return a(e) ? DocumentCommands/*d*/.UNDERLINE : null;
            case 90:
                return l(e) || null;
            case Keys/*h*/.DELETE:
                return u(e);
            case Keys/*h*/.BACKSPACE:
                return c(e);
            case Keys/*h*/.LEFT:
                return y && a(e) ? DocumentCommands/*d*/.MOVE_SELECTION_TO_START_OF_BLOCK : null;
            case Keys/*h*/.RIGHT:
                return y && a(e) ? DocumentCommands/*d*/.MOVE_SELECTION_TO_END_OF_BLOCK : null;
            default:
                return null
        }
    }
    var DocumentCommands/*d*/ = t("DocumentCommands"),
        Keys/*h*/ = t("Keys"),
        UserAgent/*f*/ = t("UserAgent"),
        m = UserAgent/*f*/.osx(),
        g = UserAgent/*f*/.windows(),
        _ = UserAgent/*f*/.firefox(),
        y = m && _ && 29 > _;
    i.exports = p
});