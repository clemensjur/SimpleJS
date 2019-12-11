# SimpleJS
A simple, light-weight, component-based Javascript "Framework" I wrote because most of them are too heavy-weight for simple designwork in my opinion.

### Installation
Just clone the repo from Github and you're good to go!

### Usage
For the framework to function properly you need to run the **server.js**-file. This will be changed in future releases.
To use the framework just create a new HTML-file in the **components**-folder and give an already existing element inside of **app.html** a class-attribute with the name of the HTML-file. When assigning more than one class to an element pay attention to the order of the classes. The respective components will be appended to the element in the same order.

### Dependencies
* NodeJS
* ExpressJS

### TODO
- [x] Fix recursion issue in components
- [ ] Add functionality for subfolders in the components directory
- [ ] Add templates folder for already prepared components to be ready to use
- [x] Add functionality for a HTML element to have multiple components associated with it
- [x] Switch from PHP tp NodeJS
- [ ] Add MVC Concept
- [ ] Remove dependency of server.js-file
- [x] [Optional] Implement Service Workers for cache handling
