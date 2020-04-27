import test from 'ava';
import * as sll from '../../src';

import * as itertools from "@aureooms/js-itertools" ;

function len ( t, iterable ) {

	const array = itertools.list( iterable ) ;

	t.deepEqual( sll.len( sll.list( array ) ) , itertools.len( array ) ) ;

}

len.title = ( title , iterable ) => `len ${title || JSON.stringify(iterable)}` ;

test( len , [ ] ) ;
test( len , [ 1 ] ) ;
test( len , [ 1 , 2 ] ) ;
test( 'itertools.range(100)', len , itertools.range( 100 ) ) ;
