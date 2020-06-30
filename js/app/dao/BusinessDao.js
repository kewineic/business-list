'use strict';

System.register(['../models/Business.js'], function (_export, _context) {
    "use strict";

    var Business, _createClass, BusinessDao;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsBusinessJs) {
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

            _export('BusinessDao', BusinessDao = function () {
                function BusinessDao(connection) {
                    _classCallCheck(this, BusinessDao);

                    this._connection = connection;
                    this._store = 'business';
                }

                _createClass(BusinessDao, [{
                    key: 'add',
                    value: function add(business) {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            var request = _this._connection.transaction([_this._store], 'readwrite').objectStore(_this._store).add(business);

                            request.onsuccess = function () {
                                resolve();
                            };

                            request.onerror = function () {
                                console.log(e.target.error);
                                reject('Nao foi possível adicionar a negociaçao.');
                            };
                        });
                    }
                }, {
                    key: 'listAll',
                    value: function listAll() {
                        var _this2 = this;

                        return new Promise(function (resolve, reject) {
                            var cursor = _this2._connection.transaction([_this2._store], 'readwrite').objectStore(_this2._store).openCursor();

                            var business = [];
                            cursor.onsuccess = function (e) {
                                var current = e.target.result;
                                if (current) {
                                    var data = current.value;
                                    business.push(new Business(data._date, data._amount, data._value));
                                    current.continue();
                                } else {
                                    resolve(business);
                                }
                            };

                            cursor.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Nao foi possível listar as negociaçoes');
                            };
                        });
                    }
                }, {
                    key: 'clearAll',
                    value: function clearAll() {
                        var _this3 = this;

                        return new Promise(function (resolve, reject) {
                            var request = _this3._connection.transaction([_this3._store], 'readwrite').objectStore(_this3._store).clear();

                            request.onsuccess = function (e) {
                                return resolve('Negociaçoes removidas com sucesso.');
                            };
                            request.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Nao foi possível remover as negociaçoes.');
                            };
                        });
                    }
                }]);

                return BusinessDao;
            }());

            _export('BusinessDao', BusinessDao);
        }
    };
});
//# sourceMappingURL=BusinessDao.js.map