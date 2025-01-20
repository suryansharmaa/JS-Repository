let posts = [
  { id: 101, content: "Aesthetic" },
  { id: 102, content: "Clouds" },
  { id: 103, content: "B&W" },
  { id: 101, content: "Draft" },
];

let gram = posts.find((post) => post.id === 101);
console.log(gram);
