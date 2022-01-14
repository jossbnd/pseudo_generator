const consonant = 'bsdfghjklmnpqrstvwxz'
const vowel = 'aeiouy'

function generateSyllable() {
    const i1 = Math.floor(Math.random() * consonant.length);
    const i2 = Math.floor(Math.random() * vowel.length);
    return consonant[i1] + vowel[i2];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateName() {  
    return capitalizeFirstLetter(generateSyllable() + generateSyllable() + generateSyllable());
}

console.log("Now, you'll be named: " + generateName())