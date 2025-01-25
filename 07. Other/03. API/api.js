let btn = document.querySelector("button");

btn.addEventListener("click", response);

function response() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      // This gives value of selected items

      //   document.querySelector(".id").innerHTML = data.id;
      //   document.querySelector(".title").innerHTML = data.title;
      //   document.querySelector(".body").innerHTML = data.body;

      // Iteration through API

      let iteration = document.querySelector(".all-posts");
      data.forEach((index) => {
        iteration.innerHTML += `
        <div> (ID) : ${index.id} </div>
        <div> (Title) : ${index.title} </div>
        <div> (Body) : ${index.body} </div> <br>`;
      });
    });
}
