let songs = [
  { name: "Call out my name", singer: "The Weeknd", duration: 3.48 },
  { name: "Snowman", singer: "Sia", duration: 2.46 },
  { name: "The night we met", singer: "Lord Huron", duration: 3.28 },
  { name: "Apocalypse", singer: "CAS", duration: 4.51 },
  { name: "I wanna be yours", singer: "Arctic Monkeys", duration: 3.04 },
];

let everyResult = songs.every((song) => song.duration > 2);
let someResult = songs.every((song) => song.duration > 5);

console.log(everyResult);
console.log(someResult);
