const consonant = 'bsdfghjklmnpqrstvwxz'
const vowel = 'aeiouy'

function generateSyllable() {
    const i1 = Math.floor(Math.random() * consonant.length);
    const i2 = Math.floor(Math.random() * vowel.length);
    return consonant[i1] + vowel[i2];
}

function generateSyllableBatch(batchSize) {
    const batch = [];

    for (let i = 0; i < batchSize; i++) {
        batch.push(generateSyllable());
    }

    return batch;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateName() {
    const batch1 = generateSyllableBatch(20);
    const batch2 = generateSyllableBatch(20);
    const batch3 = generateSyllableBatch(20);

    const i1 = Math.floor(Math.random() * batch1.length);
    const i2 = Math.floor(Math.random() * batch2.length);
    const i3 = Math.floor(Math.random() * batch3.length);
    
    return capitalizeFirstLetter(batch1[i1] + batch2[i2] + batch3[i3]);
}

console.log("Now, you'll be named: " + generateName())