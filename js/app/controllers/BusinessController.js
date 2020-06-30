"use strict";

System.register(["../models/BusinessList.js", "../models/Message.js", "../views/BusinessView.js", "../views/MessageView.js", "../services/BusinessService.js", "../helpers/DateHelper.js", "../helpers/Bind.js", "../models/Business.js"], function (_export, _context) {
    "use strict";

    var BusinessList, Message, BusinessView, MessageView, BusinessService, DateHelper, Bind, Business, _createClass, BusinessController, businessController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function currentInstance() {
        return businessController;
    }

    _export("currentInstance", currentInstance);

    return {
        setters: [function (_modelsBusinessListJs) {
            BusinessList = _modelsBusinessListJs.BusinessList;
        }, function (_modelsMessageJs) {
            Message = _modelsMessageJs.Message;
        }, function (_viewsBusinessViewJs) {
            BusinessView = _viewsBusinessViewJs.BusinessView;
        }, function (_viewsMessageViewJs) {
            MessageView = _viewsMessageViewJs.MessageView;
        }, function (_servicesBusinessServiceJs) {
            BusinessService = _servicesBusinessServiceJs.BusinessService;
        }, function (_helpersDateHelperJs) {
            DateHelper = _helpersDateHelperJs.DateHelper;
        }, function (_helpersBindJs) {
            Bind = _helpersBindJs.Bind;
        }, function (_modelsBusinessJs) {
            Business = _modelsBusinessJs.Business;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            BusinessController = function () {
                function BusinessController() {
                    _classCallCheck(this, BusinessController);

                    var $ = document.querySelector.bind(document);
                    this._inputDate = $("#date");
                    this._inputAmount = $("#amount");
                    this._inputValue = $("#value");
                    this._currentSort = '';
                    this._service = new BusinessService();

                    this._businessList = new Bind(new BusinessList(), new BusinessView($("#businessView")), 'add', 'delete', 'sortting', 'reverseSortting');

                    this._message = new Bind(new Message(), new MessageView($("#messageView")), 'text');

                    this._init();
                }

                _createClass(BusinessController, [{
                    key: "_init",
                    value: function _init() {
                        var _this = this;

                        this._service.list().then(function (businessList) {
                            return businessList.forEach(function (business) {
                                return _this._businessList.add(business);
                            });
                        }).catch(function (err) {
                            return _this._message.text = err;
                        });
                    }
                }, {
                    key: "add",
                    value: function add(event) {
                        var _this2 = this;

                        event.preventDefault();

                        var negotiation = this._createNegotiation();

                        this._service.register(negotiation).then(function (message) {
                            _this2._businessList.add(negotiation);
                            _this2._message.text = message;
                            _this2._cleanForm();
                        }).catch(function (err) {
                            return _this2._message.text = err;
                        });
                    }
                }, {
                    key: "importBusiness",
                    value: function importBusiness() {
                        var _this3 = this;

                        this._service.import(this._businessList.negotiations).then(function (businessList) {
                            return businessList.forEach(function (business) {
                                _this3._businessList.add(business);
                                _this3._message.text = 'Negociaçoes do período importadas';
                            });
                        }).catch(function (err) {
                            return _this3._message.text = err;
                        });
                    }
                }, {
                    key: "exclude",
                    value: function exclude() {
                        var _this4 = this;

                        this._service.delete().then(function (message) {
                            _this4._message.text = message;
                            _this4._businessList.delete();
                        }).catch(function (err) {
                            return _this4._message.text = err;
                        });
                    }
                }, {
                    key: "_createNegotiation",
                    value: function _createNegotiation() {
                        return new Business(DateHelper.stringToDate(this._inputDate.value), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
                    }
                }, {
                    key: "_cleanForm",
                    value: function _cleanForm() {
                        this._inputDate.value = "";
                        this._inputAmount.value = 1;
                        this._inputValue.value = 0.0;
                        this._inputDate.focus();
                    }
                }, {
                    key: "sortting",
                    value: function sortting(column) {
                        if (this._currentSort == column) {
                            this._businessList.reverseSortting();
                        } else {
                            this._businessList.sortting(function (a, b) {
                                return a[column] - b[column];
                            });
                        }
                        this._currentSort = column;
                    }
                }]);

                return BusinessController;
            }();

            businessController = new BusinessController();
        }
    };
});
//# sourceMappingURL=BusinessController.js.map