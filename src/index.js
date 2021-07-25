// import { cube } from "./math.js";
import * as module from './math.js'
const { cube } = module


function component() {
  var element = document.createElement("pre");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );

  return element;
}

document.body.appendChild(component());
