[js-sll](http://aureooms.github.io/js-sll)
==

Singly linked list code bricks for JavaScript. Parent is
[aureooms/js-data-structures](https://github.com/aureooms/js-data-structures).

```js
let head = sll.list( [ 9 , 2 , 5 ] ) ; // { next : Node , value : 9 }
```

[![License](https://img.shields.io/github/license/aureooms/js-sll.svg)](https://raw.githubusercontent.com/aureooms/js-sll/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-sll.svg)](https://www.npmjs.org/package/@aureooms/js-sll)
[![Build](https://img.shields.io/travis/aureooms/js-sll/master.svg)](https://travis-ci.org/aureooms/js-sll/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-sll.svg)](https://david-dm.org/aureooms/js-sll)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-sll.svg)](https://david-dm.org/aureooms/js-sll?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-sll.svg)](https://github.com/aureooms/js-sll/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-sll.svg)](https://www.npmjs.org/package/@aureooms/js-sll)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-sll.svg)](https://codeclimate.com/github/aureooms/js-sll/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-sll.svg)](https://codeclimate.com/github/aureooms/js-sll/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-sll/master.svg)](https://codecov.io/gh/aureooms/js-sll)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-sll.svg)](https://codeclimate.com/github/aureooms/js-sll/trends/technical_debt)
[![Documentation](http://aureooms.github.io/js-sll//badge.svg)](http://aureooms.github.io/js-sll//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-sll)](https://bundlephobia.com/result?p=@aureooms/js-sll)

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
jspm install npm:@aureooms/js-sll
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-sll
```

### bower
```terminal
bower install @aureooms/js-sll
```

### ender
```terminal
ender add @aureooms/js-sll
```

### jam
```terminal
jam install @aureooms/js-sll
```

### spm
```terminal
spm install @aureooms/js-sll --save
```

### npm
```terminal
npm install @aureooms/js-sll --save
```

## Require
### jspm
```js
let sll = require( "github:aureooms/js-sll" ) ;
// or
import sll from '@aureooms/js-sll' ;
```
### duo
```js
let sll = require( "aureooms/js-sll" ) ;
```

### component, ender, spm, npm
```js
let sll = require( "@aureooms/js-sll" ) ;
```

### bower
The script tag exposes the global variable `sll`.
```html
<script src="bower_components/@aureooms/js-sll/js/dist/sll.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-sll" ] , function ( sll ) { ... } ) ;
```

## Use


```js
let head = sll.list( [ 9 , 2 , 5 ] ) ; // { next : Node , value : 9 }

head.value ; // 9
head.next.value ; // 2
head.next.next.value ; // 5
head.next.next.next ; // null

for ( let value of sll.iter( head ) ) {

	// yields 9 then 2 then  5

}
```
