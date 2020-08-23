"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var constants_1 = require("../utils/constants");
var github_svg_1 = require("../assets/github.svg");
var linkedin_svg_1 = require("../assets/linkedin.svg");
var LogoContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-evenly;\n  margin: ", " 0;\n"], ["\n  display: flex;\n  justify-content: space-evenly;\n  margin: ", " 0;\n"])), constants_1.SPACING.SMALL);
var LogoImg = styled_components_1["default"].img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  filter: brightness(0.1) invert(0.9);\n  width: 35%;\n  margin: auto;\n  user-select: none;\n"], ["\n  filter: brightness(0.1) invert(0.9);\n  width: 35%;\n  margin: auto;\n  user-select: none;\n"])));
var SocialContainer = function () {
    return (react_1["default"].createElement(LogoContainer, null,
        react_1["default"].createElement(LogoImg, { src: github_svg_1["default"], alt: "" }),
        react_1["default"].createElement(LogoImg, { src: linkedin_svg_1["default"], alt: "" })));
};
exports["default"] = SocialContainer;
var templateObject_1, templateObject_2;
