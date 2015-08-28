
var itertools = require( "aureooms-js-itertools" ) ;

var t = function ( iterable ) {

	iterable = itertools.list( iterable ) ;

	assert.equal( sll.len( sll.list( iterable ) ) , itertools.len( iterable ) , iterable ) ;

} ;

test( "len" , function ( assert ) {

	t( [ ] ) ;
	t( [ 1 ] ) ;
	t( [ 1 , 2 ] ) ;
	t( itertools.range( 100 ) ) ;

} ) ;
