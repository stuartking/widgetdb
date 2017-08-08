Widget DB
=========

A very basic node module for storing and retriving widgets. Widget DB is an in-memory datastore that is not persisted after runtime termination. This module has been created for coding exercises and is not designed for any real world use. 

## Installation

```shell
  npm install git+https://github.com/stuartking/widgetdb.git
```

## Initialization

```js
  const widgetdb = require('widgetdb')
```

## Functions

### widgetdb.get(id) ⇒ <code>Promise.&lt;object&gt;</code>
Get a widget by its id.

**Returns**: <code>Promise.&lt;object&gt;</code> - A promise that contiains
the value of the widget when fulfilled.

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The widget id |

<a name="WidgetDB+put"></a>

### widgetdb.put(id, value) ⇒ <code>Promise.&lt;object&gt;</code>
Stores a new value for a widget

**Returns**: <code>Promise.&lt;object&gt;</code> - A promise that contiains
the value stored when fulfilled.

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The widget id |
| value | <code>Object</code> | The value of the widget |


## Release History

* 1.0.0 Initial release