[js-sll](http://aureooms.github.io/js-sll)
==

Singly linked list code bricks for JavaScript

[![NPM license](http://img.shields.io/npm/l/aureooms-js-sll.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-sll/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-sll.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-sll)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-sll.svg?style=flat)](http://bower.io/search/?q=aureooms-js-sll)
[![Build Status](http://img.shields.io/travis/aureooms/js-sll.svg?style=flat)](https://travis-ci.org/aureooms/js-sll)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-sll.svg?style=flat)](https://coveralls.io/r/aureooms/js-sll)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-sll.svg?style=flat)](https://david-dm.org/aureooms/js-sll#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-sll.svg?style=flat)](https://david-dm.org/aureooms/js-sll#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-sll.svg?style=flat)](https://codeclimate.com/github/aureooms/js-sll)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-sll.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-sll)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-sll.svg?style=flat)](https://github.com/aureooms/js-sll/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-sll.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-sll)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-sll
# or
jspm install npm:aureooms-js-sll
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-sll
```

### bower
```terminal
bower install aureooms-js-sll
```

### ender
```terminal
ender add aureooms-js-sll
```

### jam
```terminal
jam install aureooms-js-sll
```

### spm
```terminal
spm install aureooms-js-sll --save
```

### npm
```terminal
npm install aureooms-js-sll --save
```

## Require
### jspm
```js
let sll = require( "github:aureooms/js-sll" ) ;
// or
import sll from 'aureooms-js-sll' ;
```
### duo
```js
let sll = require( "aureooms/js-sll" ) ;
```

### component, ender, spm, npm
```js
let sll = require( "aureooms-js-sll" ) ;
```

### bower
The script tag exposes the global variable `sll`.
```html
<script src="bower_components/aureooms-js-sll/js/dist/sll.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-sll" ] , function ( sll ) { ... } ) ;
```