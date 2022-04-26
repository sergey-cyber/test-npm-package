#!/usr/bin/env node
const _ = require("lodash");

exports.getLastItem = (arr) => {
    return _.last(arr);
}