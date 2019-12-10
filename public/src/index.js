document.addEventListener("DOMContentLoaded", async () => {
  await render();
});

async function render() {
  let siteElements = Array.from(document.body.getElementsByTagName("*"));

    siteElements.forEach(elem => {
      let components = elem.classList;
      components.forEach(async component => {
        try {
          elem.insertAdjacentHTML("beforeend", await getContent("./components/" + component + ".html"));
        } catch (error) {
          console.log("Invald component!");
        }
      });
    });
}

//Asynchronous funcion to get all components as JSON and render them to the DOM
async function fetchComponents() {
  return fetch("./json").then(res => {
    return res.json();
  });
}

//Function to remove all characters from a given string starting at the first occurrence of the provided chracter
function trimFromChar(char, text) {
  let strArr = text.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == char) {
      strArr.splice(i, strArr.length - 1);
      return strArr.join("");
    }
  }
}

//Async function to read the content of a file
async function getContent(fileName) {
  return fetch(fileName).then(response => {
    return response.text();
  });
}

