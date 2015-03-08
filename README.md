# date-to-props.js

Get simple properties from Date object.

## Install

Node
```
npm install --save date-to-props
```

Bower (AMD, Global)
```
bower install --save date-to-props
```

## Use

```js
var dateToProps = require('date-to-props');

var date = new Date();
var props = dateToProps(date);

// props is now something like:
{
  date: 7,
  day: 6,
  fullYear: 2015,
  hours: 19,
  milliseconds: 707,
  minutes: 59,
  month: 2,
  seconds: 34,
  time: 1425779974707,
  timezoneOffset: 360,
  UTCDate: 8,
  UTCDay: 0,
  UTCFullYear: 2015,
  UTCHours: 1,
  UTCMilliseconds: 707,
  UTCMinutes: 59,
  UTCMonth: 2,
  UTCSeconds: 34,
  year: 115
}
```
