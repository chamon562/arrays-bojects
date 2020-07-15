var name = 'Channee';
console.log(name);

var myLocation = 'Long Beach';
console.log(myLocation);

var favoriteNumber = 8;
console.log(favoriteNumber);

var teams = ['Rockets', 'Lakers', 'Warriors', 'Clippers', 'Blazers', 'Celtics', 'Nets']
console.log(teams);

// while loops
var number = 10;
var otherNumber = 1;
while (otherNumber < number){
    console.log(otherNumber);
    // otherNumber += 1;
    otherNumber = otherNumber + 1; // will keep looping added number to stop at 10
}

var numberTwo = 20;
var myOtherNumber = 10;
while (myOtherNumber < numberTwo){
    console.log(myOtherNumber); //this will print 10,11,12
    myOtherNumber += 1; //11,12,13 this is the counter to stop it looping
}

var people = 15;
var morePeople = 5
while (morePeople < people) {
    console.log(morePeople);
    morePeople +=1;
}

// for loops

for (var i = 0; i < 10; i++){
    console.log(i); // 0, 1, going to change to 2 then less than 10, 3, ...
}

// printing teams 
for(var i = 0; i < teams.length; i++){
    // console.log(teams[i])
    var eachTeam = teams[i]; // Rockets 0, Lakers 1, Warriors 2 ...
    console.log(eachTeam);
}

// make an array 
// use for loop iterate(go one by one)
//print each element

var myFavArtist = ['Nipsey Hussle', 'Tupac Shakur', 'Bruce Lee']
console.log(myFavArtist)

for(var i = 0; i < myFavArtist.length; i++) {
    var eachPerson = myFavArtist[i]; // first starts at index 0 Nipsey Hussle, Tupac Shakur, Bruce Lee
    console.log(eachPerson)
}

//with array use const allows you not change that data type
const cars = ['Honda', 'Tesla', 'Toyota'] //error array to string
console.log(cars);

for(let i = 0; i < cars.length; i++) {
    let eachCar = cars[i]; // Honda, Tesla, Toyota..
    console.log(eachCar)
}


// var otherNumbers = 1
// otherNumbers =+ 1
// otherNumbers = otherNubers + 1

// let i = 0; 
// i = i + 1;
// i =+ 1;
// i==;

//Objects 
//key: value pairs 

const rome = {
    fullName: 'Rome Bell', 
    age: 32, 
    myLocation: 'Los Angelos',
    placesTraveled: [ 'Kentucky', 'Ohio', 'New York', 'Washington DC']
}

console.log(rome);

//myLocation

console.log(rome.myLocation);

//print New York

console.log(rome.placesTraveled[2])

const myReallyCoolPost = {
    username: '@generalassembly',
    likes: 1200,
    comments: ['really cool post', 'nice', 'javascript is cool', 'woah'],
    caption: 'Day 3 of SEI',
    picture: 'https://instagramd.com/generallassembly..',
    shares: 12 

}

console.log(myReallyCoolPost)
myReallyCoolPost.myLocation = 'San Fran';
console.log(myReallyCoolPost)
//likes, captions, shares, comments, username, picture


//instagram post object

const myGrabPost = {
    myUserName = '@chamon562',
    likes: 20,
    comments: ['nice post', 'fresh', 'java is dope'],
    caption: 'Day 3 of SEI is tough',
    picture: 'https://instagram.com/chamon562...'
    shared: 4
}
console.log(myGrabPost)

const fourthOfJulyPost = {
    username: '@ga'
};

fourthOfJulyPost.pictures = 'https://instagram.com/..';
fourthOfJulyPost['likes'] = 15;
fourthOfJulyPost.comments = ['ok'];
fourthOfJulyPost.caption = 'writing code on the 4th';
console.log(fourthOfJulyPost);