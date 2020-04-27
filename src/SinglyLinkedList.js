/**
 * Doubly linked list implementation
 * making use of dummy nodes for the
 * sake of simplicity.
 */

export function SinglyLinkedList ( iterable = null ) {

	this.front = null ;
	this.back = null ;
	this.length = 0 ;

	if ( iterable !== null ) {

		for ( let value of iterable ) this.push( value ) ;

	}

}

export function Iterator ( current ) {

	this.current = current ;

}

SinglyLinkedList.prototype.insertAfter = function ( iterator , value ) {

	let prev = iterator.current ;

	let node = new Node( prev.next , value ) ;
	prev.next = node ;

	++this.length ;
	return this.iterator( node ) ;

}

SinglyLinkedList.prototype.unshift = function ( value ) {

	++this.length ;
	this.front = new Node( this.front , value ) ;
	return this.begin( ) ;

}

SinglyLinkedList.prototype.push = function ( value ) {

	++this.length ;
	this.back = this.back.next = new Node( null , value ) ;
	return this.iterator( this.back ) ;

}

SinglyLinkedList.prototype.shift = function ( ) {

	if ( this.length === 0 ) return null ;

	const node = this.front ;
	this.front = this.front.next ;

	--this.length ;

	return node.value ;

}

SinglyLinkedList.prototype.eraseAfter = function ( iterator ) {

	const node = iterator.current ;

	node.next = node.next.next ;

	return node.next ;

}

SinglyLinkedList.prototype.clear = function ( ) {

	this.front = null ;
	this.back = null ;
	this.length = 0 ;

	return this ;

}

SinglyLinkedList.prototype.iterator = function ( node ) {
	return new Iterator( node ) ;
}

SinglyLinkedList.prototype.begin = function ( ) {
	return this.iterator( this.front ) ;
}

SinglyLinkedList.prototype.end = function(){
	return this.iterator( this.back ) ;
}

Iterator.prototype.copy = function ( ) {
	return new Iterator( this.current ) ;
}

Iterator.prototype.next = function ( ) {

	const c = this.current ;

	if ( c === null )

	this.current = c.next ;

	return c === this.back ? { done : true } : { value : c.value , done : false } ;

}

SinglyLinkedList.prototype[Symbol.iterator] = SinglyLinkedList.prototype.begin ;
SinglyLinkedList.Node = Node;
SinglyLinkedList.Iterator = Iterator;

// For convenience only, non efficient implementations
SinglyLinkedList.prototype.prev = function ( node ) {

	let current = this.front ;

	if ( current === null && node === null ) return null ;

	if ( current === node ) return null ;

	while ( current.next !== node ) current = current.next ;

	return current ;

}

SinglyLinkedList.prototype.pop = function ( ) {

	if ( this.length === 0 ) return null ;

	const node = this.back ;
	this.back = this.prev( this.back ) ;

	--this.length ;

	return node.value ;

}

SinglyLinkedList.prototype.insertBefore = function ( iterator , value ) {

	const next = iterator.current ;
	const prev = this.prev( next ) ;

	if ( prev === null ) return this.unshift( value ) ;

	return this.insertAfter( this.iterator( prev ) , value ) ;

}

SinglyLinkedList.prototype.erase = function ( iterator ) {

	const prev = this.prev( iterator.current ) ;

	return this.eraseAfter( prev ) ;

}


