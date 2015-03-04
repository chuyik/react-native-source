#!/usr/bin/node

var fs = require("fs");
var path = require("path");

if (process.argv.length < 5) {
    console.log("Usage:", process.argv[0], process.argv[1], "[input_file] [modname] [extname]");
    return;
}

var inputFile = process.argv[2],
    modName = process.argv[3],
    extName = process.argv[4],
    input = fs.readFileSync(inputFile, "utf8"),
    start = input.indexOf("__d("),
    end = input.indexOf("require(\"RCTMainBundle\")"),
    code = input.substring(start, end) + "undefined;";

function __d(name, deps, factory) {
    if (name !== modName) {
        return;
    }
    var output = [];
    var filename = name.replace(/[ :]/g, ".") + extName;
    var dirname = path.dirname(filename);

    output.push("__d(");
    output.push(JSON.stringify(name));
    output.push(",");
    output.push(JSON.stringify(deps));
    output.push(",");
    output.push(factory.toString());
    output.push(");");
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }
    fs.writeFileSync(filename, output.join(""));
}

(new Function("__d", code))(__d);
