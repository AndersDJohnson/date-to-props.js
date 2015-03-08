var dateToProps = require('..');
var assert = require('assert');

var props;
var date;

date = new Date();
props = dateToProps(date);
