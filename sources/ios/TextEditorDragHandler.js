__d("TextEditorDragHandler",["DataTransfer"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    function o(global/*e*/, require/*t*/) {
        var requireDynamic/*n*/, requireLazy/*r*/;
        if (document.caretRangeFromPoint) {
            var module/*i*/ = document.caretRangeFromPoint(require/*t*/.x, require/*t*/.y);
            requireDynamic/*n*/ = module/*i*/.startContainer, requireLazy/*r*/ = module/*i*/.startOffset
        } else require/*t*/.rangeParent && (requireDynamic/*n*/ = require/*t*/.rangeParent, requireLazy/*r*/ = require/*t*/.rangeOffset);
        if (requireDynamic/*n*/) {
            var o = document.createRange();
            o.setStart(global/*e*/, 0), o.setEnd(requireDynamic/*n*/, requireLazy/*r*/);
            var DataTransfer/*a*/ = o.toString().length;
            return o.detach(), DataTransfer/*a*/
        }
    }
    var DataTransfer/*a*/ = require/*t*/("DataTransfer"),
        s = {
            onDragEnd: function() {
                this.exitCurrentMode()
            },
            onDrop: function(global/*e*/) {
                var require/*t*/ = new DataTransfer/*a*/(global/*e*/.nativeEvent.dataTransfer),
                    requireDynamic/*n*/ = o(this.refs.editorContainer.getDOMNode(), global/*e*/.nativeEvent);
                if (null != requireDynamic/*n*/) {
                    var requireLazy/*r*/ = require/*t*/.getFiles();
                    this.props.onDropFiles && requireLazy/*r*/.length > 0 ? this.props.onDropFiles(requireDynamic/*n*/, requireLazy/*r*/) : this._internalDrag ? this.props.onDropSelection(requireDynamic/*n*/) : this.props.onDropText(requireDynamic/*n*/, require/*t*/.getText())
                }
                global/*e*/.preventDefault(), this.exitCurrentMode()
            }
        };
    module/*i*/.exports = s
});