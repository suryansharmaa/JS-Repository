const text = document.querySelector("p");

// innerText
console.log(text.innerText);

// textContent
console.log(text.textContent);

// innerHTML
console.log(text.innerHTML);

// Text Manipulation --------------------

const heading = document.querySelector("h1");
heading.innerText = "God of Thunder";
heading.innerHTML = "<em>Thor Ragnarok</em>";
