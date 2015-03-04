#!/usr/bin/node

var fs = require("fs");
var analyse = require("./utils/analyse");

if (process.argv.length < 3) {
    console.log("Usage:", process.argv[0], process.argv[1], "[input_file]");
    return;
}

var inputFile = process.argv[2];
var input = fs.readFileSync(inputFile, "utf8");
var codeParts = analyse(input, "__d(", ",require(\"RCTMainBundle\")", "__d");
var modules = [];

var outputVars = [];
var outputRules = [];

if (!codeParts) {
    throw new Error("code analyse error");
}

outputVars.push("NODE:=node");
outputVars.push("#BEAUTIFY:=cat");
outputVars.push("BEAUTIFY:=js-beautify --type \"javascript\" -q");

outputRules.push("all:$(OUTPUTS)");

codeParts.modules.forEach(function (mod) {
    var modName = mod.name;
    var jsFile = modName + ".js";
    var minFile = modName + ".min.js";
    modules.push(modName);

    outputRules.push(jsFile + ":" + minFile + " ../../var.js");
    outputRules.push("\t@echo beautify \"$@\"");
    outputRules.push("\t@mkdir -p $$(dirname \"$@\")");
    outputRules.push("\t@$(BEAUTIFY) -f \'$<\' -o \'$@\'");
    outputRules.push("\t@$(NODE) \"../../var.js\" \'$@\'");

    outputRules.push(minFile + ":../../" + inputFile + " ../../unpack.js");
    outputRules.push("\t@echo unpack \"$@\"");
    outputRules.push("\t@mkdir -p $$(dirname \"$@\")");
    outputRules.push("\t@$(NODE) \"../../unpack.js\" \"../../" + inputFile + "\" \"" + modName + "\" \".min.js\"");
});

outputVars.push("MODULES:=" + modules.join(" ").replace("$", "$$$$"));
outputVars.push("OUTPUTS:=$(addsuffix .js, $(MODULES))");
outputVars.push("MIN_FILES:=$(addsuffix .min.js, $(MODULES))");

outputRules.push(".PHONY:all");
outputRules.push(".INTERMEDIATE:$(MIN_FILES)");

console.log(outputVars.join("\n"));
console.log(outputRules.join("\n"));
