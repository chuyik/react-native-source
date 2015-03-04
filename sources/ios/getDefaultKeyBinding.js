__d("getDefaultKeyBinding",["DocumentCommands","Keys","UserAgent"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return global/*e*/.ctrlKey && !global/*e*/.altKey
    }

    function a(global/*e*/) {
        return m ? global/*e*/.metaKey && !global/*e*/.altKey : o(global/*e*/)
    }

    function s(global/*e*/) {
        return m ? global/*e*/.altKey : o(global/*e*/)
    }

    function l(global/*e*/) {
        return a(global/*e*/) ? global/*e*/.shiftKey ? DocumentCommands/*d*/.REDO : DocumentCommands/*d*/.UNDO : void 0
    }

    function u(global/*e*/) {
        return g && global/*e*/.shiftKey ? null : s(global/*e*/) ? DocumentCommands/*d*/.DELETE_WORD : DocumentCommands/*d*/.DELETE
    }

    function c(global/*e*/) {
        return a(global/*e*/) && m ? DocumentCommands/*d*/.BACKSPACE_TO_END_OF_BLOCK : s(global/*e*/) ? DocumentCommands/*d*/.BACKSPACE_WORD : DocumentCommands/*d*/.BACKSPACE
    }

    function p(global/*e*/) {
        switch (global/*e*/.keyCode) {
            case 66:
                return a(global/*e*/) ? DocumentCommands/*d*/.BOLD : null;
            case 68:
                return o(global/*e*/) ? DocumentCommands/*d*/.DELETE : null;
            case 72:
                return o(global/*e*/) ? DocumentCommands/*d*/.BACKSPACE : null;
            case 73:
                return a(global/*e*/) ? DocumentCommands/*d*/.ITALIC : null;
            case 74:
                return a(global/*e*/) ? DocumentCommands/*d*/.CODE : null;
            case 75:
                return o(global/*e*/) ? DocumentCommands/*d*/.DELETE_TO_END_OF_BLOCK : null;
            case 79:
                return o(global/*e*/) ? DocumentCommands/*d*/.INSERT_BLOCK_DELIMITER : null;
            case 84:
                return o(global/*e*/) ? DocumentCommands/*d*/.TRANSPOSE_CHARACTERS : null;
            case 85:
                return a(global/*e*/) ? DocumentCommands/*d*/.UNDERLINE : null;
            case 90:
                return l(global/*e*/) || null;
            case Keys/*h*/.DELETE:
                return u(global/*e*/);
            case Keys/*h*/.BACKSPACE:
                return c(global/*e*/);
            case Keys/*h*/.LEFT:
                return y && a(global/*e*/) ? DocumentCommands/*d*/.MOVE_SELECTION_TO_START_OF_BLOCK : null;
            case Keys/*h*/.RIGHT:
                return y && a(global/*e*/) ? DocumentCommands/*d*/.MOVE_SELECTION_TO_END_OF_BLOCK : null;
            default:
                return null
        }
    }
    var DocumentCommands/*d*/ = require/*t*/("DocumentCommands"),
        Keys/*h*/ = require/*t*/("Keys"),
        UserAgent/*f*/ = require/*t*/("UserAgent"),
        m = UserAgent/*f*/.osx(),
        g = UserAgent/*f*/.windows(),
        _ = UserAgent/*f*/.firefox(),
        y = m && _ && 29 > _;
    module/*i*/.exports = p
});