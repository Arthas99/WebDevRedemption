/**
 * NodeJS allows you to create functions in seperated files
 * and with require function it's possible to use all functionalities 
 * of that "file"
 */


 /**
  * In this example we will export simple function with 2 string parameters
  * 
  */

const fullName = require("./fullName");

console.log(fullName("Billy", "Kid")); // Billy Kid