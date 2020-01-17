# SimpleJS

A simple, light-weight, component-based Javascript "Framework" I wrote because most of them are too heavy-weight for simple designwork in my opinion.

## Installation

Just clone the repo from Github and you're good to go!

## Setup

For the framework to function properly you need to run the **server.js**-file.
**This is not necessarily needed. You could also run your own server with the webroot set to the _public_-folder.**

## Usage

This framework splits components into three pieces:

* **M**odel   

This part contains all the data that is needed for the component to function. For it to work you have to provide a Javascript-file inside the **components/models**-folder that includes variables or functions which will be used to replaced the spaceholders placed in the component-specific HTML-Markup. In the case of functions the replacement-value will be the return-value of the function.   

* **V**iew   

This part contains all the HTML-Markup that the component will display. The view of a component has to be provided as HTML-file inside the **components/views**-folder.   

* **C**ontroller   

This part of the component contains all the logic to make it work properly. It has to be provided as Javascript-file inside the **components/controllers**-folder.   


For a component to function properly you have to create three files as mentioned above. Those three files need to have the same name for them to be associated with each other.   

The two Javascript-files need to be included in index.html and be given the attribute type="module".   


``` html
<script type="module" src="./app/components/controllers/component.js"></script>
<script type="module" src="./app/components/models/component.js"></script>
```
   

This is used for ES6-modules to work correctly.   


To access the model from inside the controller of a component you have to import the model into the controller.   


`import { component } from "../models/component.js";`   


To use a component you just have to give an already existing element inside of **app.html** or any other component a class-attribute with the name of the component. When assigning more than one component-class to an element pay attention to the order of the classes. The respective components will be appended to the element in the same order.   


**Components will not replace the HTML-Tags they are used on. They will be placed inside in the respective order as mentioned above.**   


## Dependencies

These dependencies are only needed if you decide to run your project with the provided **server.js**-file.
In case you decide to set up your own server you just need to set the webroot to the **public**-folder. In that case NodeJS and ExpressJS are not necessarily needed as they are only used inside the **server.js**-file.

* NodeJS
* ExpressJS

### TODO

* [x] Fix recursion issue in components
* [ ] [Next] Add templates folder for already prepared components to be ready to use
* [x] Add functionality for a HTML element to have multiple components associated with it
* [x] Switch from PHP tp NodeJS
* [ ] [Current] Add MVC Concept
* [x] Remove dependency of server.js-file
* [x] [Optional] Implement Service Workers for cache handling
* [x] ~~Implement the option to use JSON-files as model of a component~~
* [ ] Implement HTML-Markup variable replacement.
