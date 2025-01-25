//  .text() method return promise
// if resolved, it'll return text representation of the body

// It will only show errors of networks nothing else

// fetch("texttt.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Best way to do it
fetch("text.txt")
  .then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.text();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//  Cool Stuff and using Async/Await
const screen = document.querySelector(".webpage");

async function fetcher() {
  try {
    let response = await fetch("text.txt");
    if (!response.ok) throw Error(response.statusText);

    let result = await response.text();
    screen.innerHTML = result;
  } catch (error) {
    console.log(error);
  }
}

fetcher();
