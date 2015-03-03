__d("TypeaheadNavigation",[],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = {
        moveUp: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = global/*e*/.indexOf(require/*t*/),
                module/*i*/ = -1 == requireLazy/*r*/ ? global/*e*/.length - 1 : requireLazy/*r*/ - 1;
            requireDynamic/*n*/(-1 == module/*i*/ ? null : global/*e*/[module/*i*/])
        },
        moveDown: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = global/*e*/.indexOf(require/*t*/) + 1;
            requireDynamic/*n*/(requireLazy/*r*/ == global/*e*/.length ? null : global/*e*/[requireLazy/*r*/])
        }
    };
    module/*i*/.exports = o
});