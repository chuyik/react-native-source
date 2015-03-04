module.exports = function (src, startSymbol, endSymbol, defineName) {
    var start;
    var end;
    var moduleCode;
    var modules;

    start = src.indexOf(startSymbol);
    end = src.lastIndexOf(endSymbol);

    if (start < 0 || end < 0 || end < start) {
        return null;
    }

    moduleCode = src.substring(start, end);
    modules = [];

    function define(name, deps, factory) {
        modules.push({
            name: name,
            deps: deps,
            factory: factory
        });
    }

    //try {
    (new Function(defineName, moduleCode))(define);
    //} catch (e) {
    //}
    return {
        preCode: src.substring(0, start),
        modules: modules,
        postCode: src.substring(end)
    };
};
