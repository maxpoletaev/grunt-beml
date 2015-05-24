# grunt-beml

> Plugin for processing [BEML](https://github.com/zenwalker/node-beml) templates.

## Installing

```shell
$ npm install --save-dev grunt-beml
```

## Usage

```js
grunt.initConfig({
  beml: {
    options: {
      elemPrefix: '__',
      modPrefix: '_',
      modDlmtr: '_'
    },
    files: {
      'dest/index.html': 'src/index.html'
    }
  }
});
```
