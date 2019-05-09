const wanted = require("./wantedMenu");

wanted.addWantedBandits(["Buffalo Kid", "Annie Two Guns", "Brother Daltons"]);

console.log(wanted.getAllWantedBandits());


const { addWantedBandits, getAllWantedBandits } = require("./wantedMenu");

addWantedBandits([`James "Killin Jim" Muller`]);

console.log(getAllWantedBandits());