async function render() {
	let components = await fetchComponents();
	//console.log(components);

	components.forEach(async component => {
		document.getElementById(trimFromChar(".", component)).innerHTML = await getContent("./components/" + component);
		console.log(component, trimFromChar(".", component));
	});
}

//Asynchronous funcion to get all components as JSON and render them to the DOM
async function fetchComponents() {
  return fetch("index.php?json")
    .then(resp => {
      return resp.json();
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
