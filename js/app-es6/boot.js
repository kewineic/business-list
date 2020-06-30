import {BusinessController} from "./controllers/BusinessController.js";

let businessController = new BusinessController();

document.querySelector(".form").onsubmit = businessController.add.bind(businessController);
document.querySelector("#import_button").onclick = businessController.importBusiness.bind(businessController);
document.querySelector("#exclude_button").onclick = businessController.exclude.bind(businessController);