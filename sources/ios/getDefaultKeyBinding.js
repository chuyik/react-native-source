__d("getDefaultKeyBinding",["DocumentCommands","Keys","UserAgent"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/) {
        return global/*e*/.ctrlKey && !global/*e*/.altKey
    }

    function a(global/*e*/) {
        return Keys/*m*/ ? global/*e*/.metaKey && !global/*e*/.altKey : o(global/*e*/)
    }

    function s(global/*e*/) {
        return Keys/*m*/ ? global/*e*/.altKey : o(global/*e*/)
    }

    function l(global/*e*/) {
        return a(global/*e*/) ? global/*e*/.shiftKey ? d.REDO : d.UNDO : void 0
    }

    function u(global/*e*/) {
        return UserAgent/*g*/ && global/*e*/.shiftKey ? null : s(global/*e*/) ? d.DELETE_WORD : d.DELETE
    }

    function c(global/*e*/) {
        return a(global/*e*/) && Keys/*m*/ ? d.BACKSPACE_TO_END_OF_BLOCK : s(global/*e*/) ? d.BACKSPACE_WORD : d.BACKSPACE
    }

    function p(global/*e*/) {
        switch (global/*e*/.keyCode) {
            case 66:
                return a(global/*e*/) ? d.BOLD : null;
            case 68:
                return o(global/*e*/) ? d.DELETE : null;
            case 72:
                return o(global/*e*/) ? d.BACKSPACE : null;
            case 73:
                return a(global/*e*/) ? d.ITALIC : null;
            case 74:
                return a(global/*e*/) ? d.CODE : null;
            case 75:
                return o(global/*e*/) ? d.DELETE_TO_END_OF_BLOCK : null;
            case 79:
                return o(global/*e*/) ? d.INSERT_BLOCK_DELIMITER : null;
            case 84:
                return o(global/*e*/) ? d.TRANSPOSE_CHARACTERS : null;
            case 85:
                return a(global/*e*/) ? d.UNDERLINE : null;
            case 90:
                return l(global/*e*/) || null;
            case exports/*h*/.DELETE:
                return u(global/*e*/);
            case exports/*h*/.BACKSPACE:
                return c(global/*e*/);
            case exports/*h*/.LEFT:
                return y && a(global/*e*/) ? d.MOVE_SELECTION_TO_START_OF_BLOCK : null;
            case exports/*h*/.RIGHT:
                return y && a(global/*e*/) ? d.MOVE_SELECTION_TO_END_OF_BLOCK : null;
            default:
                return null
        }
    }
    var d = require/*t*/("DocumentCommands"),
        exports/*h*/ = require/*t*/("Keys"),
        DocumentCommands/*f*/ = require/*t*/("UserAgent"),
        Keys/*m*/ = DocumentCommands/*f*/.osx(),
        UserAgent/*g*/ = DocumentCommands/*f*/.windows(),
        _ = DocumentCommands/*f*/.firefox(),
        y = Keys/*m*/ && _ && 29 > _;
    module/*i*/.exports = p
});