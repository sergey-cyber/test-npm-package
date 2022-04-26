#!/usr/bin/env node
const _ = require("lodash");

const getLastItem = (arr) => {
    return _.last(arr);
}

module.exports.getLastItem = getLastItem;