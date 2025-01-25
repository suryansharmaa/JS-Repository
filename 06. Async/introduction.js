// Synchronization : When code compiles in top down manner

func = () => `I'm in a function`;

console.log("Start");
console.log(func());
console.log("End");

// Asynchronization : When code have some content which compiles independently unrelated to other compilations

console.log("Start");
setTimeout(() => console.log(`This will show up after 2s`), 2000);
console.log("End");
