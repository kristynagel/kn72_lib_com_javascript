// <--- MATH --->

/*
* finds two numbers in the array that when
* added together equals the target value
* @param {Array} arr [searching for combinations]
* @param {Number} target [sum needs to equal this]
* @return {}
*/
const findAdd = ( arr, target) => {
    arr.sort( function( a, b) { return a - b});
    let matches = [];
    for( n1 of arr) 	{
        for( n2 of arr) {
			if( (n1 != n2) && (n1 + n2 == target)) {
				matches.push( n1);
				matches.push( n2);
				return matches;
			}
		}
	}
    return 'match not found';
}

/*
* @param {Array} items [numbers to be sorted]
* @return {Array} parents [outer array container inner arrays]
*/
const splitArrays = ( items) => {
    items.sort(function(a, b){return a-b});     // stupid but works
    let parents = [];           // outer container
    let children = [];          // inner container
	let c = '';   
	for( item of items) {
		if( c == '') {	// beginning of items
			c = item;
		} else if( c !== item) { // not blank, and different values
			c = item;
			parents.push( children);
			children = [];
			ccd( 1, {c});
		}
		children.push( item);
	}
	if( children.length > 0) {
		parents.push( children);
	}
    return parents;
}

// <--- MESSAGE --->

/*
* prompt user with an alert
* @param {String} msg [the alert we're sending]
*/
const ca = ( msg) => { alert(msg); }

/*
* prompts user with a message
* @param {String} msg [the message being sent in a prompt]
*/
const cp = ( msg) => { prompt(msg); }

/*
* wraps the console.log() method
* @param {String} msg [message to print]
*/
const cc = ( msg) => { console.log( msg) }

/*
* prints debug messages
* @param {Integer} s [the debug step]
* @param {Any Type} v [the variable]
*/
const ccd = (s, v) => { cc(`Debug ${s}: ${Object.keys(v)[0]} -> ${Object.values(v)[0]}`); }

// <--- STRING --->

/*
* returns the length of the input
* il = Input Length
* @param {Number} n [the value ]
* @return {Number} [the length in Integer format]
*/
const il = ( n) => { return n.value.length; }

/*
* counts number of occurances in a string
* @param {String} s [the string]
* @param {Character} c [what we're looking for]
* @return {Number} [number of occurances]
*/
const findChar = ( s, c) => {
	let n = 0;
	for( char of s) {
		if( char == c) {
			n++;
		}
	}
	return n;
}

/*
* replaces characters in a string
* @param {String} s [the string]
* @param {Char} oc [the old character]
* @param {Char} nc [the new character]
* @return {String} ns [the new string]
*/
const modString = ( s, oc, nc) => {
	let ns = s.split(oc).join(nc);
	return ns;

}

/*
* converts a HEX to RGB, or RGB to HEX
* @param {String} s [string we are converting]
* @argument {Array} hexCharLetters [0-9, A-F]
* @return {String} color_code [encoded string]
*/
const convert_HEX_RGB = ( s) => {
    let hexCharLetters = [ 
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'
    ];
    let n = findChar( s, ',');
    let color_code = '';
    switch( n ) {
        case 0: color_code = hex_to_rgb( s, hexCharLetters); break;
        case 2:  color_code = rgb_to_hex( s, hexCharLetters); break;
        default: color_code = 'invalid code'; return;
    }
    return color_code;
}

/*
* helper function, converts RGB to HEX
* @param {String} s [RGB string we are converting]
* @param {Array} hexCharLetters [0-9, A-F]
* @return {String} hex [HEX string]
*/
const rgb_to_hex = ( s, hexCharLetters) => {
    let hex = '#';
    s = s.split( ',');
    let hex_char_1 = hex_char_2 = '0';
    for( color_band of s) {
        // convert to integer so we can do calculations
        color_band = parseInt( color_band, 10);
        // invalid color band slots
        if( color_band < 0 || color_band > 255) { 
            return 'invalid rgb string';
        // first color band slot unchanged
        } else if( color_band < 16) { 
            hex_char_2 = hexCharLetters[ color_band];
        // might need letters in both color band slots
        } else {
            hex_char_1 = hexCharLetters[ Math.floor( (color_band / 16))];
            hex_char_2 = hexCharLetters[ color_band % 16];
        }
        // convert to string so that we can concatenate
        color_band = hex_char_1.toString() + hex_char_2.toString();
        hex += color_band;
    } 
    return hex;
}

/*
* helper function, converts HEX to RGB
* @param {String} s [HEX string we are converting]
* @param {Array} hexCharLetters [0-9, A-F]
* @return {String} rgb [RGB string]
*/
const hex_to_rgb = ( s, hexCharLetters) => {
    // Thank you: http://gristle.tripod.com/hexconv.html
    let rgb = [];
    for( let i = 1; i < 7; i += 2) {
        // RGB is split up into Red, ignore the '#'
        let bit_1 = s[i];
        let bit_2 = s[i + 1];
        // the first bit we are multiplying by 16
        if( isNaN( bit_1)) {
            bit_1 = hexCharLetters.indexOf( bit_1[ 0]) * 16;
        } else if( bit_1 > 0 ) {
            bit_1 *= 16;
        }
        // the second bit is at face value
        if( isNaN( bit_2)) { bit_2 = hexCharLetters.indexOf( bit_2); }
        if( bit_1 > 0) { bit_1 = parseInt( bit_1); }
        if( bit_2 > 0) { bit_2 = parseInt( bit_2); }

        // before adding the two bits we need to convert them to number
        rgb.push( bit_1 + bit_2);
    }
    return rgb.toString();
}

// <--- TABLE --->

/*
* adds a value to an HTML field
* @param {String/Number} cell [the cell we're affecting]
* @param {String} value [what we're putting in the cell]
*/
const field = ( cell, value) => { let t = document.getElementById(cell).innerHTML = value;  }





// <--- TEST BED --->




