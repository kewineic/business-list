"use strict";

System.register(["./View.js", "../helpers/DateHelper.js"], function (_export, _context) {
    "use strict";

    var View, DateHelper, _createClass, BusinessView;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_ViewJs) {
            View = _ViewJs.View;
        }, function (_helpersDateHelperJs) {
            DateHelper = _helpersDateHelperJs.DateHelper;
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

            _export("BusinessView", BusinessView = function (_View) {
                _inherits(BusinessView, _View);

                function BusinessView(element) {
                    _classCallCheck(this, BusinessView);

                    return _possibleConstructorReturn(this, (BusinessView.__proto__ || Object.getPrototypeOf(BusinessView)).call(this, element));
                }

                _createClass(BusinessView, [{
                    key: "template",
                    value: function template(model) {
                        return "\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n                <tr>\n                    <th onclick=\"businessController.sortting('date')\">DATA</th>\n                    <th onclick=\"businessController.sortting('amount')\">QUANTIDADE</th>\n                    <th onclick=\"businessController.sortting('value')\">VALOR</th>\n                    <th onclick=\"businessController.sortting('volume')\">VOLUME</th>\n                </tr>\n            </thead>\n        \n            <tbody>\n                " + model.negotiations.map(function (item) {
                            return "\n                        <tr>\n                            <td>" + DateHelper.dateToString(item.date) + "</td>\n                            <td>" + item.amount + "</td>\n                            <td>" + item.value + "</td>\n                            <td>" + item.volume.toFixed(2) + "</td>\n                        </tr>\n                    ";
                        }).join('') + "\n            </tbody>\n        \n            <tfoot>\n                <td colspan=\"3\"></td>\n                <td>\n                    " + model.totalVolume.toFixed(2) + "\n                </td>\n            </tfoot>\n        </table>";
                    }
                }]);

                return BusinessView;
            }(View));

            _export("BusinessView", BusinessView);
        }
    };
});
//# sourceMappingURL=BusinessView.js.map