# Examples

> More examples in [the test files](https://github.com/make-github-pseudonymous-again/js-sll/tree/master/test/src).

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
