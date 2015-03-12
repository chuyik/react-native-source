__d("TextEditorDragHandler",["DataTransfer"],function (e, t, n, r, i) {
    function o(e, t) {
        var n, r;
        if (document.caretRangeFromPoint) {
            var i = document.caretRangeFromPoint(t.x, t.y);
            n = i.startContainer, r = i.startOffset
        } else t.rangeParent && (n = t.rangeParent, r = t.rangeOffset);
        if (n) {
            var o = document.createRange();
            o.setStart(e, 0), o.setEnd(n, r);
            var DataTransfer/*a*/ = o.toString().length;
            return o.detach(), DataTransfer/*a*/
        }
    }
    var DataTransfer/*a*/ = t("DataTransfer"),
        s = {
            onDragEnd: function() {
                this.exitCurrentMode()
            },
            onDrop: function(e) {
                var t = new DataTransfer/*a*/(e.nativeEvent.dataTransfer),
                    n = o(this.refs.editorContainer.getDOMNode(), e.nativeEvent);
                if (null != n) {
                    var r = t.getFiles();
                    this.props.onDropFiles && r.length > 0 ? this.props.onDropFiles(n, r) : this._internalDrag ? this.props.onDropSelection(n) : this.props.onDropText(n, t.getText())
                }
                e.preventDefault(), this.exitCurrentMode()
            }
        };
    i.exports = s
});