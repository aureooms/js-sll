
const iter = function* ( head ) {

	while ( head !== null ) {

		yield head.value ;
		head = head.next ;

	}

} ;

exports.iter = iter ;
