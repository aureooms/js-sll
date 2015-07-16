( function ( ) {

'use strict' ;

var definition = function ( exports , undefined ) {


/* js/src/dummy.js */

return exports ;
} ;
if ( typeof exports === "object" ) {
	definition( exports ) ;
}
else if ( typeof define === "function" && define.amd ) {
	define( "aureooms-js-sll" , [ ] , function ( ) { return definition( { } ) ; } ) ;
}
else if ( typeof window === "object" && typeof window.document === "object" ) {
	definition( window["sll"] = { } ) ;
}
else console.error( "unable to detect type of module to define for aureooms-js-sll") ;
} )( ) ;
