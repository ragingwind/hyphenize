# hyphenize [![Build Status](https://travis-ci.org/ragingwind/node-hyphenize.svg?branch=master)](https://travis-ci.org/ragingwind/hyphenize)

> Normalize key for object. Convert string from unfitting string as a object key to fitting string in style of hyphen


## Install

```
$ npm install --save hyphenize
```


## Usage

```js
var hyphenize = require('hyphenize');

hyphenize('lowerUpper'); //=> 'lower-upper'
hyphenize('lowerUpper'); //=> 'lower-upper'
hyphenize('_lowerUpper'); //=> '_lower-upper'
hyphenize('.lowerUpper'); //=> 'lower-upper'
hyphenize('/lowerUpper'); //=> 'lower-upper'
hyphenize(' /._lowerUpper'); //=> '_lower-upper'
hyphenize('lower-Upper'); //=> 'lower-upper'
hyphenize('lower Upper'); //=> 'lower-upper'
hyphenize('lower.Upper'); //=> 'lower-upper'
hyphenize('lower.Upper'); //=> 'lower-upper'
hyphenize('lower upper'); //=> 'lower-upper'
```


## API

### hyphenize(input)

#### input

Type: `string`

Target string

## License

MIT © [Jimmy Moon](http://ragingwind.me)
