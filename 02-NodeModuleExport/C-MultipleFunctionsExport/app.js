/**
 * NodeJS allows you to create functions in seperated files
 * and with require function it's possible to use all functionalities 
 * of that "file"
 */


 /**
  * In this example we will export multiple functions
  * 
  */



const wanted = require("./wantedMenu"); // We require menu

wanted.addWantedBandits(["Buffalo Kid", "Annie Two Guns", "Brother Daltons"]); // We are adding 3 bandits to the list

console.log(wanted.getAllWantedBandits()); // [ 'Buffalo Kid', 'Annie Two Guns', 'Brother Daltons' ]


/**
 * This is another way of destructuring module.exports
 */

 // We just need to write name of functions and we will extract those functions
const { addWantedBandits, getAllWantedBandits } = require("./wantedMenu");

addWantedBandits([`James "Killin Jim" Muller`]);

console.log(getAllWantedBandits());

/**
 * [ 'Buffalo Kid',
 * 'Annie Two Guns',
 * 'Brother Daltons',
 * 'James "Killin Jim" Muller' ]
 */