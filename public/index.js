const VIEWS = "app/components/views/";

//Create an EventListener to wait for the DOM to be loaded
//And wait for the page content to be rendered 
export let initRender = () => {
    document.addEventListener("DOMContentLoaded", async () => {
    await render();
  });
}
//For each element of the page check if it has a class that is associated with a component
//If so wait for the content of the component-file to be fetched 
//Then load the component template inside the element
//If not log that it is an invalid component
let render = async () => {
    let siteElements = Array.from(document.body.getElementsByTagName("*"));
    let components = await fetch("./components").then(res => {
      return res.text();
    });
    console.log("Components:", components);
  
    siteElements.forEach(elem => {
      let classes = elem.classList;
      classes.forEach(async compClass => {
        if (components.includes(compClass)) {
          elem.insertAdjacentHTML(
            "beforeend",
            await getContent(VIEWS + compClass + ".html")
          );
        } else {
          //console.log(compClass + ".html: Invalid Component!");
        }
      });
    });
  };

let interpolate = async (component) => {

    let content = await getContent(VIEWS + component + ".html");

    let regex = /{{ ?.+ ?}}/g;
    let found = content.match(regex);

    content.replace(content.match(regex));

    console.log(found);
}

//Function to remove all characters from a given string starting at the first occurrence of the provided chracter
let trimFromChar = (char, text) => {
    let strArr = text.split("");
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == char) {
            strArr.splice(i, strArr.length - 1);
            return strArr.join("");
        }
    }
}

//Async function to read the content of a file
let getContent = async (fileName) => {
    return fetch(fileName).then(response => {
        return response.text();
    });
}
