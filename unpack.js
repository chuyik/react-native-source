#!/usr/bin/node

var fs = require("fs");
var path = require("path");
var analyse = require("./utils/analyse");

if (process.argv.length < 5) {
    console.log("Usage:", process.argv[0], process.argv[1], "[input_file] [modname] [extname]");
    return;
}

var inputFile = process.argv[2];
var modName = process.argv[3];
var extName = process.argv[4];
var input = fs.readFileSync(inputFile, "utf8");
var codeParts = analyse(input, "__d(", ",require(\"RCTMainBundle\")", "__d");
var modules = codeParts.modules;
var needModule;

var hasModule = codeParts.modules.some(function (mod) {
    var CONTINUE = false;
    var BREAK = true;

    if (mod.name === modName) {
        needModule = mod;
        return BREAK;
    }

    return CONTINUE;
});

if (!hasModule) {
    throw new Error("module \"" + modName + "\" not found!");
}

var output = [];
var filename = modName.replace(/[ :]/g, ".") + extName;
var dirname = path.dirname(filename);

//output.push("(", needModule.factory.toString(), ")(global,/*require*/global.__react_native_require,/*requireDynamic*/null,/*requireLazy*/null,module,exports);");
output.push("__d(", JSON.stringify(modName), ",", JSON.stringify(needModule.deps), ",", needModule.factory.toString(), ");");

if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
}
fs.writeFileSync(filename, output.join(""));
