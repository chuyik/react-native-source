#!/usr/bin/node

var fs = require("fs");

if (process.argv.length < 3) {
    console.log("Usage:", process.argv[0], process.argv[1], "[input_file]");
    return;
}

var inputFile = process.argv[2],
    code = fs.readFileSync(inputFile, "utf8");

var varExpStr = "[\\w\\-\\$\\.]+",
    argExpStr = "\\s*,\\s*(" + varExpStr + ")",
    funcExpStr = "^function\\s*\\(\\s*(" + varExpStr + ")",
    argExp = new RegExp(argExpStr, "g"),
    funcExp = new RegExp(funcExpStr, "g");

function getArg(str) {
    console.log(argExp.lastIndex, str.substring(argExp.lastIndex, argExp.lastIndex + 3) + "...");
    var result = argExp.exec(str);
    if (result) {
        return result[1];
    }
    return false;
}

function getFirstArg(str) {
    funcExp.lastIndex = 0;
    argExp.lastIndex = 0;

    var result = funcExp.exec(str);
    if (result) {
        argExp.lastIndex = funcExp.lastIndex;
        return result[1];
    }
    return false;
}

function getArgs(fnStr) {
    if (fnStr.indexOf("function") != 0) {
        return null;
    }

    var start = fnStr.indexOf("(");
    var end = fnStr.indexOf(")");

    if (start < 8 || start > end) {
        return null;
    }

    var args = fnStr.substring(start + 1, end);
    return args.split(",").map(function (arg) {
        return arg.replace(/^\s*|\s*$/g, "");
    });
}

function replaceVar(str, from, to) {
    from = from.replace(/([\[\]\(\)\.\?\*\{\}\+\$\^\:])/g, "\\$1");
    return str.replace(new RegExp("\\b" + from + "\\b", "g"), to);
}

function replaceRequire(str, arg) {
    var output = str;
    //console.log(str, arg);
    //str.replace(new RegExp("\\s\\w+\\s*=" + arg + "\\s*([\"\']\\w+[\"\'])", "g"), function () {
    str.replace(new RegExp("\\s(\\w+)\\s*=\\s*" + arg + "\\s*\\(([\"\'])(\\w+)\\2\\)", "g"), function ($0, varName, $2, modName) {
        output = replaceVar(output, varName, modName + "/*" + varName + "*/");
    });
    return output;
}

var defaultDeps = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'];
var output = [];

function __d(name, deps, factory) {
    var arg, dep, i, count;

    factory = factory.toString();
    //console.log(factory);

    var allDeps = defaultDeps.concat(deps);
    var allArgs = getArgs(factory);
    for (i = 0, count = allDeps.length; i < count; i++) {
        arg = allArgs[i];
        dep = allDeps[i];
        if (arg) {
            if (dep === "require") {
                factory = replaceRequire(factory, arg);
            }
            //console.log(arg + " -> " + allDeps[i]);
            //factory = replaceVar(factory, arg, dep + "/*" + arg + "*/");
        } else {
            break;
        }
    }

    output.push("__d(");
    output.push(JSON.stringify(name));
    output.push(",");
    output.push(JSON.stringify(deps));
    output.push(",");
    output.push(factory);
    output.push(");");
}

(new Function("__d", code))(__d);
fs.writeFileSync(inputFile, output.join(""));
