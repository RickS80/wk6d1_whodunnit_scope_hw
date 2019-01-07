// Episode 1
//
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// The murder is Miss Scarlet. The const creates a variable that cannot be changed in block scope. However
// verdict scope can look outward to the outer scoopes of declarerMurderer and scenario

// Episode 2

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// This will produce an error as a constant variable cannot be changed. If murderer was changed
// to 'let' then it would produce Mrs Peacock

// Episode 3
//
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The first verdict will be Mrs Peacock, the second verdict will be Prof Plum. In the first verdict the
// 'let' scope allows for the murderer to be changed by the declareMurderer function.


// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Declare all suspects = "Miss Scarlet, Prof Plum, Col Mustard".
//    This is due to the suspect 3 being changed by the declare all suspects function
// Suspect three = Mrs Peacock.
//    This is just calling suspectthree from the initital section

// Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// The weapon is the revolver as items within a constant object can be changed but not the object itself.

// Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}


const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}
changeMurderer();

const verdict = declareMurderer();
console.log(verdict);

// The murderer is Mrs White. After the plot twist, the murderer becomes Mrs White. The verdict
// is a result of the declareMurderer fucntion which happens after the plot twist but before the change
// murderer function
