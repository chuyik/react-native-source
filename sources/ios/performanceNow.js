__d("performanceNow",["performance"],function (e, t, n, r, i) {
    var performance/*o*/ = t("performance");
    performance/*o*/ && performance/*o*/.now || (performance/*o*/ = Date);
    var a = performance/*o*/.now.bind(performance/*o*/);
    i.exports = a
});