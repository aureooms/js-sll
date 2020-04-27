
export function* iter ( head ) {

	while ( head !== null ) {

		yield head.value ;
		head = head.next ;

	}

}

