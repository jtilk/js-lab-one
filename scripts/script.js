const name = "Jake";
const age = 25;
const birthday = "July 24";
let detroitGC = true;
let lifeEvents = [
  "I was born in Wyandotte, Michigan.",
  "I went to Western Michigan University and obtained a Bachelor's in Marketing and Business.",
  "I am an Eagle Scout",
  "After five years of trying, on April 7th, 2018, I finally got inducted into the Pro Players club for a card game I play."
];

if (!!detroitGC) {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Detroit, MI. I am currently " +
      age +
      " years old and my birthday is " +
      birthday +
      "."
  );
} else {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Grand Rapids, MI. I am currently " +
      age +
      " years old and my birthday is " +
      birthday +
      "."
  );
}
for (i = 0; i < lifeEvents.length; i++) {
  console.log(`
    ${lifeEvents[0]}
    ${lifeEvents[1]}
    ${lifeEvents[2]}
    ${lifeEvents[3]}`);
}

let randomNumberBetween0and10 = Math.floor(Math.random() * 10);
let counter = 0;

function randomWholeNum() {
  return Math.floor(Math.random() * 11);
}
console.log(randomWholeNum());

while (true) {
  if (randomWholeNum !== 5) {
    console.log("randomNumber !==5");
    randomNumber = [Math.floor(Math.random() * 11)];
    counter++;
  } else {
    console.log(
      `5 === 5. It took $(counter) iterations to randomly generate the number 5.`
    );
    break;
  }
}
