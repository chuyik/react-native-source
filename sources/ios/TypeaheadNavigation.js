__d("TypeaheadNavigation",[],function (global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    var o = {
        moveUp: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = global/*e*/.indexOf(require/*exports/*t*/*/),
                module/*i*/ = -1 == requireLazy/*r*/ ? global/*e*/.length - 1 : requireLazy/*r*/ - 1;
            requireDynamic/*n*/(-1 == module/*i*/ ? null : global/*e*/[module/*i*/])
        },
        moveDown: function(global/*e*/, require/*exports/*t*/*/, requireDynamic/*n*/) {
            var requireLazy/*r*/ = global/*e*/.indexOf(require/*exports/*t*/*/) + 1;
            requireDynamic/*n*/(requireLazy/*r*/ == global/*e*/.length ? null : global/*e*/[requireLazy/*r*/])
        }
    };
    module/*i*/.exports = o
});