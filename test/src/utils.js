import test from 'ava';
import * as sll from '../../src';

import array from "@aureooms/js-array" ;
import itertools from "@aureooms/js-itertools" ;

var alloc = array.alloc ;
var fill = array.fillfn ;

var list = itertools.list ;
var iter = sll.iter ;
var nods = sll.list ;

var t = function ( n ) {

	var A = alloc( n ) ;

	fill( A , 0 , n , Math.random ) ;

	t.deepEqual( list( iter( nods( A ) ) ) , A , A ) ;

} ;

test( "iter and list" , t => {

	[
		0 , 1 , 2 , 3 , 4 , 5 ,
		10 , 11 , 13 ,
		63 , 64 , 65 ,
		100000
	].map( t ) ;

} ) ;
