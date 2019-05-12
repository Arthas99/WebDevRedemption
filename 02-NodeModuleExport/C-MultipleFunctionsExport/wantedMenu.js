
/**
 * Fake database
 */
var wantedBandits = [];

/**
 * Function to add wanted bandits
 * This function can accept array of names(string) addWantedBandits(["Buffalo bill", "Dalton Brothers"])
 * 
 */
function addWantedBandits(banditNames) {
    banditNames.forEach(bandit => {
        wantedBandits.push(bandit);

    });
}


/**
 * Function to add wanted bandits
 * This function can name(string) addWantedBandit("Buffalo bill")
 * 
 */

function addWantedBandit(banditName) {
    wantedBandits.push(banditName);
}

/**
 * Function just return all bandits from our fake database
 * 
 */

function getAllWantedBandits() {
    return wantedBandits;
}

module.exports = {
    addWantedBandits,
    addWantedBandit,
    getAllWantedBandits
}