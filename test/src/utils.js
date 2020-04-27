import test from 'ava';
import * as sll from '../../src';

import * as array from "@aureooms/js-array" ;
import * as itertools from "@aureooms/js-itertools" ;

var alloc = array.alloc ;
var fill = array.fillfn ;

var list = itertools.list ;
var iter = sll.iter ;
var nodes = sll.list ;

function macro ( t , n ) {

	const A = alloc( n ) ;

	fill( A , 0 , n , Math.random ) ;

	t.deepEqual( list( iter( nodes( A ) ) ) , A ) ;

}

macro.title = ( title , n ) => `iter(list([...])) <${n}>` ;

[
	0 , 1 , 2 , 3 , 4 , 5 ,
	10 , 11 , 13 ,
	63 , 64 , 65 ,
	100000
].map( x => test(macro, x) ) ;
