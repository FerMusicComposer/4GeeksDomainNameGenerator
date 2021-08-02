let pronouns = ['the', 'our', 'my', 'i-'];
let adjectives = ['big', 'red', 'amazing', 'modern'];
let nouns = ['jogger', 'racer', 'doctor', 'bike'];
let suffixes = ['.com', '.us', '.es', '.org'];

function generateDomainName(
    pronounArray,
    adjetiveArray,
    nounArray,
    suffixArray,
) {
    let domainNames = [];

    for (let pronoun = 0; pronoun < pronounArray.length; pronoun++) {
        for (let adjective = 0; adjective < adjetiveArray.length; adjective++) {
            for (let noun = 0; noun < nounArray.length; noun++) {
                for (let suffix = 0; suffix < suffixArray.length; suffix++) {
                    domainNames.push(
                        pronounArray[pronoun] +
                            adjetiveArray[adjective] +
                            nounArray[noun] +
                            suffixArray[suffix],
                    );
                }
            }
        }
    }

    return domainNames;
}

console.log(generateDomainName(pronouns, adjectives, nouns, suffixes));
