"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LogoImg = exports.MenuList = exports.MenuContainer = exports.MenuCloseBtn = exports.MenuItem = void 0;
var constants_1 = require("../utils/constants");
var styled_components_1 = require("styled-components");
exports.MenuItem = styled_components_1["default"].p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: white;\n  cursor: pointer;\n  font-size: ", ";\n  margin-left: ", ";\n  user-select: none;\n"], ["\n  color: white;\n  cursor: pointer;\n  font-size: ", ";\n  margin-left: ", ";\n  user-select: none;\n"])), constants_1.FONT_SIZE.MENU_ITEM, constants_1.SPACING.SMALL);
exports.MenuCloseBtn = styled_components_1["default"](exports.MenuItem)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    margin-top: ", ";\n"], ["\n    position: absolute;\n    margin-top: ", ";\n"])), constants_1.SPACING.XSMALL);
exports.MenuContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  max-width: 12vw;\n  min-width: 12vw;\n  background-color: #333;\n  margin: auto 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"], ["\n  height: 100%;\n  max-width: 12vw;\n  min-width: 12vw;\n  background-color: #333;\n  margin: auto 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));
exports.MenuList = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: auto 0;\n"], ["\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: auto 0;\n"])));
exports.LogoImg = styled_components_1["default"].img(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\nfilter: brightness(0.1) invert(0.9);\nmargin: auto;\n"], ["\nfilter: brightness(0.1) invert(0.9);\nmargin: auto;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
