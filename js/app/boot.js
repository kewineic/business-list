"use strict";

System.register(["./controllers/BusinessController.js"], function (_export, _context) {
  "use strict";

  var currentInstance, businessController;
  return {
    setters: [function (_controllersBusinessControllerJs) {
      currentInstance = _controllersBusinessControllerJs.currentInstance;
    }],
    execute: function () {
      businessController = currentInstance();


      document.querySelector(".form").onsubmit = businessController.add.bind(businessController);
      document.querySelector("#import_button").onclick = businessController.importBusiness.bind(businessController);
      document.querySelector("#exclude_button").onclick = businessController.exclude.bind(businessController);
    }
  };
});
//# sourceMappingURL=boot.js.map