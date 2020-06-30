"use strict";

System.register(["./controllers/BusinessController.js"], function (_export, _context) {
  "use strict";

  var BusinessController, businessController;
  return {
    setters: [function (_controllersBusinessControllerJs) {
      BusinessController = _controllersBusinessControllerJs.BusinessController;
    }],
    execute: function () {
      businessController = new BusinessController();


      document.querySelector(".form").onsubmit = businessController.add.bind(businessController);
      document.querySelector("#import_button").onclick = businessController.importBusiness.bind(businessController);
      document.querySelector("#exclude_button").onclick = businessController.exclude.bind(businessController);
    }
  };
});
//# sourceMappingURL=boot.js.map