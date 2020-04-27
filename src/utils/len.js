
const len = function ( head ) {

	let length = 0 ;

	while ( head !== null ) {

		++length ;
		head = head.next ;

	}

	return length ;

} ;

exports.len = len ;
