
export function len ( head ) {

	let length = 0 ;

	while ( head !== null ) {

		++length ;
		head = head.next ;

	}

	return length ;

}

