// Insert Elements ----------------

// createElement()
const h1 = document.createElement("h1");
const body = document.body;
h1.innerHTML = "<em>Thor is here</em>";
h1.classList.add("greetings");

// appendChild()
body.appendChild(h1);

const list = document.querySelector("ul");
const newList = document.createElement("li");
newList.textContent = "New li tag added";
list.appendChild(newList);

// insertBefore(what, where)
const firstlist = document.querySelector("li");
list.insertBefore(newList, firstlist);

// Insert adjacent elements -------
const para = document.querySelector("p");
const i = document.createElement("i");
i.textContent = "i Element";
i.style.color = "green";
i.style.fontSize = "larger";

// beforebegin
para.insertAdjacentElement("beforebegin", i);

// afterbegin
para.insertAdjacentElement("afterbegin", i);

// beforeend
para.insertAdjacentElement("beforeend", i);

// afterend
para.insertAdjacentElement("afterend", i);

// ------------------------------------------------

const section = document.querySelector("section");
const j = document.createElement("j");
j.textContent = "Blue";
j.style.color = "darkblue";
j.style.fontSize = "larger";

const span = document.createElement("span");
span.innerHTML = "<em>Thor Odinson</em>";
span.style.color = "crimson";

// append()
section.append(span);

// prepend()
section.prepend(j);

// -------------------------------------------------

const list2 = document.querySelector(".new-list");
const some = document.querySelector(".third");

// removeChild()
list2.removeChild(some);

// remove()
list2.remove();
