"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Business;

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

            _export("Business", Business = function () {
                function Business(date, amount, value) {
                    _classCallCheck(this, Business);

                    this._date = new Date(date.getTime());
                    this._amount = amount;
                    this._value = value;
                }

                _createClass(Business, [{
                    key: "isEquals",
                    value: function isEquals(otherNegotiation) {
                        return JSON.stringify(this) == JSON.stringify(otherNegotiation);
                    }
                }, {
                    key: "volume",
                    get: function get() {
                        return this._amount * this._value;
                    }
                }, {
                    key: "date",
                    get: function get() {
                        return new Date(this._date.getTime());
                    }
                }, {
                    key: "amount",
                    get: function get() {
                        return this._amount;
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this._value;
                    }
                }]);

                return Business;
            }());

            _export("Business", Business);
        }
    };
});
//# sourceMappingURL=Business.js.map