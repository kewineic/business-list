import {currentInstance} from "./controllers/BusinessController.js";

let businessController = currentInstance();

document.querySelector(".form").onsubmit = businessController.add.bind(businessController);
document.querySelector("#import_button").onclick = businessController.importBusiness.bind(businessController);
document.querySelector("#exclude_button").onclick = businessController.exclude.bind(businessController);