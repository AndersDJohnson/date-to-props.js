(function (root, factory) {
  var name = 'dateToProps';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
        return (root[name] = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root[name] = factory();
  }
}(this, function () {

  var methods = [
    { get: 'Date' },
    { get: 'Day' },
    { get: 'FullYear' },
    { get: 'Hours' },
    { get: 'Milliseconds' },
    { get: 'Minutes' },
    { get: 'Month' },
    { get: 'Seconds' },
    { get: 'Time' },
    { get: 'TimezoneOffset'},
    { get: 'UTCDate', noLower: true },
    { get: 'UTCDay', noLower: true },
    { get: 'UTCFullYear', noLower: true },
    { get: 'UTCHours', noLower: true },
    { get: 'UTCMilliseconds', noLower: true },
    { get: 'UTCMinutes', noLower: true },
    { get: 'UTCMonth', noLower: true },
    { get: 'UTCSeconds', noLower: true },
    { get: 'Time' },
    { get: 'TimezoneOffset'},
    { get: 'Year'}
  ];

  var firstToLower = function (str) {
    if (str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1);
  };

  var parseFunctionName = function (name) {
    return name.match(/get(.+)/);
  };

  var dateToProps = function (date) {
    if (! date) {
      return;
    }
    var props = {};

    var key;
    for (key in methods) {
      var method = methods[key];
      var fn = 'get' + method.get;
      var val = date[fn]();
      var prop = method.get;
      if (! method.noLower) {
        prop = firstToLower(prop);
      }
      props[prop] = val;
    }

    return props;
  };

  return dateToProps;
}));
