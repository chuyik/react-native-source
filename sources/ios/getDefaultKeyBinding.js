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
        return a(global/*e*/) ? global/*e*/.shiftKey ? d.REDO : d.UNDO : void 0
    }

    function u(global/*e*/) {
        return g && global/*e*/.shiftKey ? null : s(global/*e*/) ? d.DELETE_WORD : d.DELETE
    }

    function c(global/*e*/) {
        return a(global/*e*/) && m ? d.BACKSPACE_TO_END_OF_BLOCK : s(global/*e*/) ? d.BACKSPACE_WORD : d.BACKSPACE
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
            case h.DELETE:
                return u(global/*e*/);
            case h.BACKSPACE:
                return c(global/*e*/);
            case h.LEFT:
                return y && a(global/*e*/) ? d.MOVE_SELECTION_TO_START_OF_BLOCK : null;
            case h.RIGHT:
                return y && a(global/*e*/) ? d.MOVE_SELECTION_TO_END_OF_BLOCK : null;
            default:
                return null
        }
    }
    var d = require/*t*/("DocumentCommands"),
        h = require/*t*/("Keys"),
        f = require/*t*/("UserAgent"),
        m = f.osx(),
        g = f.windows(),
        _ = f.firefox(),
        y = m && _ && 29 > _;
    module/*i*/.exports = p
});