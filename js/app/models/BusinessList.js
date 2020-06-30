"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, BusinessList;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
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

            _export("BusinessList", BusinessList = function () {
                function BusinessList() {
                    _classCallCheck(this, BusinessList);

                    this._businessList = [];
                }

                _createClass(BusinessList, [{
                    key: "add",
                    value: function add(negotiation) {
                        this._businessList.push(negotiation);
                    }
                }, {
                    key: "delete",
                    value: function _delete() {
                        this._businessList = [];
                    }
                }, {
                    key: "sortting",
                    value: function sortting(criterion) {
                        this._businessList.sort(criterion);
                    }
                }, {
                    key: "reverseSortting",
                    value: function reverseSortting() {
                        this._businessList.reverse();
                    }
                }, {
                    key: "negotiations",
                    get: function get() {
                        return [].concat(this._businessList);
                    }
                }, {
                    key: "totalVolume",
                    get: function get() {
                        return this.negotiations.reduce(function (total, item) {
                            return total + item.volume;
                        }, 0.0);
                    }
                }]);

                return BusinessList;
            }());

            _export("BusinessList", BusinessList);
        }
    };
});
//# sourceMappingURL=BusinessList.js.map