var wantedBandits = [];

function addWantedBandits(banditNames) {
    banditNames.forEach(bandit => {
        wantedBandits.push(bandit);

    });
}

function addWantedBandit(banditName) {
    wantedBandits.push(banditName);
}


function getAllWantedBandits() {
    return wantedBandits;
}

module.exports = {
    addWantedBandits,
    addWantedBandit,
    getAllWantedBandits
}