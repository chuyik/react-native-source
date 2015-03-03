__d("TextEditorDragHandler",["DataTransfer"],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*DataTransfer/*r*/*/, module/*i*/) {
    function o(global/*e*/, require/*exports/*t*/*/) {
        var requireDynamic/*n*/, requireLazy/*DataTransfer/*r*/*/;
        if (document.caretRangeFromPoint) {
            var module/*i*/ = document.caretRangeFromPoint(require/*exports/*t*/*/.x, require/*exports/*t*/*/.y);
            requireDynamic/*n*/ = module/*i*/.startContainer, requireLazy/*DataTransfer/*r*/*/ = module/*i*/.startOffset
        } else require/*exports/*t*/*/.rangeParent && (requireDynamic/*n*/ = require/*exports/*t*/*/.rangeParent, requireLazy/*DataTransfer/*r*/*/ = require/*exports/*t*/*/.rangeOffset);
        if (requireDynamic/*n*/) {
            var o = document.createRange();
            o.setStart(global/*e*/, 0), o.setEnd(requireDynamic/*n*/, requireLazy/*DataTransfer/*r*/*/);
            var a = o.toString().length;
            return o.detach(), a
        }
    }
    var a = require/*exports/*t*/*/("DataTransfer"),
        s = {
            onDragEnd: function() {
                this.exitCurrentMode()
            },
            onDrop: function(global/*e*/) {
                var require/*exports/*t*/*/ = new a(global/*e*/.nativeEvent.dataTransfer),
                    requireDynamic/*n*/ = o(this.refs.editorContainer.getDOMNode(), global/*e*/.nativeEvent);
                if (null != requireDynamic/*n*/) {
                    var requireLazy/*DataTransfer/*r*/*/ = require/*exports/*t*/*/.getFiles();
                    this.props.onDropFiles && requireLazy/*DataTransfer/*r*/*/.length > 0 ? this.props.onDropFiles(requireDynamic/*n*/, requireLazy/*DataTransfer/*r*/*/) : this._internalDrag ? this.props.onDropSelection(requireDynamic/*n*/) : this.props.onDropText(requireDynamic/*n*/, require/*exports/*t*/*/.getText())
                }
                global/*e*/.preventDefault(), this.exitCurrentMode()
            }
        };
    module/*i*/.exports = s
});