// Question 1
function InstagramPost(handleOfAuthor, content, imagelink, numberOfViews, numberOflikes){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imagelink = imagelink;
    this.numberOfViews = numberOfViews;
    this.numberOflikes = numberOflikes;
}

const post = new InstagramPost ('oyinbrandy', 'skincare', 'https://www.instagram.com/reel/CmUCXooIHtZ/?igshid=YmMyMTA2M2Y=', '1050', '440')

console.log(post)


//Question 2
const post2 = new InstagramPost ('temiotedola', 'investbamboo', 'https://www.instagram.com/reel/Cnmmio9pV_v/?igshid=YmMyMTA2M2Y=', '500,000', '47,510')

console.log(post2)

const post3 = new InstagramPost ('fentybeauty', 'gloss', 'https://www.instagram.com/reel/Co0yMNHNdiJ/?igshid=YmMyMTA2M2Y=', '45,120', '13,071')

console.log(post3)

//Question 3A
function createPerson (name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    }
}

const person = createPerson ('Musa Dawodu', '19', 'Leke, Lagos state')

console.log(person)

//Question 3B
function createJambScores (eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    }
}

const result = createJambScores ('70', '85', '82', '94')
person.createJambScores = result

console.log(person); 

//Question 4
// 1. Object.assign()
const firstCar = {
    brand: "benz",
    color: "white",
    mirror: "two",
};
const secondCar = Object.assign({}, firstCar);

console.log(firstCar);
console.log(secondCar);

secondCar.color = "black";

console.log("After changing the color of secondCar");
console.log(firstCar);
console.log(secondCar);

// 2. Spread syntax i.e ...
const thirdCar = { ...firstCar };

thirdCar.color = "Pink";

console.log({ firstCar });
console.log({ thirdCar });

// 3. JSON.parse(JSON.stringify())
const fourthCar = JSON.parse;

fourthCar.color= "Gold";
console.log({ firstCar });
console.log({ fourthCar });

// Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }

 for (const party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`)
 }