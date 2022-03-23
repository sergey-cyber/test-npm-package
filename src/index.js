#!/usr/bin/env node
const _ = require("lodash");
console.log("App has been started\nApp version 1.0.2");

exports.getLastItem = (arr) => {
    return _.last(arr);
}