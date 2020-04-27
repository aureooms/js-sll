import { Node } from '..' ;

export function list ( iterable ) {

	const pt = new Node( null , undefined ) ;

	let current = pt ;

	for ( let value of iterable ) {
		current = current.next = new Node( null , value ) ;
	}

	return pt.next ;

}

