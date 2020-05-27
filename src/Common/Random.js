const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}
const getRandomNumber = max => Math.floor(Math.random() * max);

const getRANDOMcenter = function() {
    const RANDOM_CENTER_NAME = ["Marrickville", "Bankstown" , "Liverpool" , "Burwood" ,"Castle Hill ", "Chatswood " , "Goulburn" , "Haymarke"];

    return RANDOM_CENTER_NAME[Math.floor(Math.random() * RANDOM_CENTER_NAME.length)];
}

const getPostion = function(){
    const RANDOM_POSTION = ["CSR","DSR","Coordinator","Concierge"];
    return RANDOM_POSTION[Math.floor(Math.random() * RANDOM_POSTION.length)];
}

module.exports = {
    getRandomGivenName,
    getRandomFamilyName,
    getRandomNumber,
    getRANDOMcenter,
    getPostion
}