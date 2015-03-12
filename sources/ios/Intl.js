__d("Intl",[],function (e, t, n, r, i) {
    function o(e) {
        return "string" != typeof e ? !1 : e.match(new RegExp(o.punct_char_class + "[)\"'»༻༽’”›〉》」』】〕〗〙〛〞〟﴿＇）］\\s]*$"))
    }

    function a(e) {
        if (s) {
            var t = [],
                n = [];
            for (var r in s.patterns) {
                var i = s.patterns[r];
                for (var o in s.meta) {
                    var a = new RegExp(o.slice(1, -1), "g"),
                        l = s.meta[o];
                    r = r.replace(a, l), i = i.replace(a, l)
                }
                t.push(r), n.push(i)
            }
            for (var u = 0; u < t.length; u++) {
                var c = new RegExp(t[u].slice(1, -1), "g");
                "javascript" == n[u] ? e.replace(c, function(e) {
                    return e.slice(1).toLowerCase()
                }) : e = e.replace(c, n[u])
            }
        }
        return e.replace(/\x01/g, "")
    }
    var s;
    o.punct_char_class = "[.!?。！？।…ຯ᠁ฯ．]", i.exports = {
        endsInPunct: o,
        applyPhonologicalRules: a,
        setPhonologicalRules: function(e) {
            s = e
        }
    }
});