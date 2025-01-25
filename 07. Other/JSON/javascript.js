const screen = document.querySelector(".web");

async function dataJSON() {
  try {
    let response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);

    let result = await response.json();
    screen.innerHTML = result.name;
    // screen.innerHTML = result.age;
  } catch (error) {
    console.log(error);
  }
}

dataJSON();
