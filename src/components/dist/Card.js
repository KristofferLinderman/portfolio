"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var constants_1 = require("../utils/constants");
var CardContent_1 = require("./CardContent");
var CardOverlay_1 = require("./CardOverlay");
var CardContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 80%;\n  max-width: 100rem;\n  height: 75%;\n  margin: auto;\n  display: flex;\n  overflow: hidden;\n  background-color: ", ";\n  box-shadow: 7px 11px 15px rgba(0, 0, 0, 0.25);\n  "], ["\n  width: 80%;\n  max-width: 100rem;\n  height: 75%;\n  margin: auto;\n  display: flex;\n  overflow: hidden;\n  background-color: ", ";\n  box-shadow: 7px 11px 15px rgba(0, 0, 0, 0.25);\n  "])), function (props) { return props.theme.secondary; });
var theme = function (isDarkMode) {
    return ({
        main: constants_1.COLORS.BACKGROUND_LIGHT,
        secondary: isDarkMode ? constants_1.COLORS.SECONDARY_DARK : constants_1.COLORS.SECONDARY_LIGHT
    });
};
var Card = function (_a) {
    var isDarkMode = _a.isDarkMode;
    return (react_1["default"].createElement(CardContainer, { theme: theme(!!isDarkMode) },
        react_1["default"].createElement(CardContent_1["default"], null),
        react_1["default"].createElement(CardOverlay_1["default"], null)));
};
exports["default"] = Card;
var templateObject_1;
