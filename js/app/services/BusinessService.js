"use strict";

System.register(["./HttpService.js", "./ConnectionFactory.js", "../dao/BusinessDao.js", "../models/Business.js"], function (_export, _context) {
    "use strict";

    var HttpService, ConnectionFactory, BusinessDao, Business, _createClass, BusinessService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_HttpServiceJs) {
            HttpService = _HttpServiceJs.HttpService;
        }, function (_ConnectionFactoryJs) {
            ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
        }, function (_daoBusinessDaoJs) {
            BusinessDao = _daoBusinessDaoJs.BusinessDao;
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

            _export("BusinessService", BusinessService = function () {
                function BusinessService() {
                    _classCallCheck(this, BusinessService);

                    this.http = new HttpService();
                }

                _createClass(BusinessService, [{
                    key: "getAllBusiness",
                    value: function getAllBusiness() {
                        return Promise.all([this.importBusiness(), this.businessImportLastWeek(), this.businessImportWeekBeforeLast()]).then(function (periods) {
                            var business = periods.reduce(function (data, period) {
                                return data.concat(period);
                            }, []);
                            return business;
                        }).catch(function (err) {
                            throw new Error(err);
                        });
                    }
                }, {
                    key: "importBusiness",
                    value: function importBusiness() {
                        return this.http.get('negociacoes/semana').then(function (response) {
                            return response.map(function (business) {
                                return new Business(new Date(business.data), business.quantidade, business.valor);
                            });
                        }).catch(function (err) {
                            console.log(err);
                            throw new Error('Não foi possível obter as negociações da semana..');
                        });
                    }
                }, {
                    key: "businessImportLastWeek",
                    value: function businessImportLastWeek() {
                        return this.http.get('negociacoes/anterior').then(function (response) {
                            return response.map(function (business) {
                                return new Business(new Date(business.data), business.quantidade, business.valor);
                            });
                        }).catch(function (err) {
                            console.log(err);
                            throw new Error('Não foi possível obter as negociações da semana anterior..');
                        });
                    }
                }, {
                    key: "businessImportWeekBeforeLast",
                    value: function businessImportWeekBeforeLast() {
                        return this.http.get('negociacoes/retrasada').then(function (response) {
                            return response.map(function (business) {
                                return new Business(new Date(business.data), business.quantidade, business.valor);
                            });
                        }).catch(function (err) {
                            console.log(err);
                            throw new Error('Não foi possível obter as negociações da semana retrasada..');
                        });
                    }
                }, {
                    key: "exclude",
                    value: function exclude() {
                        this._businessList.delete();
                        this._message.text = "Lista de negociação apagada com sucesso!";
                    }
                }, {
                    key: "register",
                    value: function register(business) {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new BusinessDao(connection);
                        }).then(function (dao) {
                            return dao.add(business);
                        }).then(function () {
                            return 'Negociaçao cadastrada com sucesso';
                        }).catch(function (err) {
                            console.log(err);
                            throw new Error('Nao foi possível adicionar a negociaçao');
                        });
                    }
                }, {
                    key: "list",
                    value: function list() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new BusinessDao(connection);
                        }).then(function (dao) {
                            return dao.listAll();
                        }).catch(function (err) {
                            console.log(err);
                            throw new Error('Nao foi possível obter as negociaçoes');
                        });
                    }
                }, {
                    key: "delete",
                    value: function _delete() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new BusinessDao(connection);
                        }).then(function (dao) {
                            return dao.clearAll();
                        }).then(function () {
                            return 'Negociaçoes apagadas com sucesso';
                        }).catch(function (err) {
                            console.log(err);
                            throw new Error('Nao foi possível apagar as negociaçoes');
                        });
                    }
                }, {
                    key: "import",
                    value: function _import(currentList) {
                        return this.getAllBusiness().then(function (businessList) {
                            return businessList.filter(function (business) {
                                return !currentList.some(function (existentBusiness) {
                                    return business.isEquals(existentBusiness);
                                });
                            });
                        }).catch(function (err) {
                            console.log(err);
                            throw new Error('Nao foi possível importar as negociaçoes');
                        });
                    }
                }]);

                return BusinessService;
            }());

            _export("BusinessService", BusinessService);
        }
    };
});
//# sourceMappingURL=BusinessService.js.map