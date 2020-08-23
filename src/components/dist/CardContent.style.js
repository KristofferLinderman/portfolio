"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.SignatureImg = exports.CardSubTitle = exports.CardTitle = exports.ContentContainer = void 0;
var styled_components_1 = require("styled-components");
var constants_1 = require("../utils/constants");
exports.ContentContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", " ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: ", ";\n"], ["\n  padding: ", " ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: ", ";\n"])), constants_1.SPACING.LARGE, constants_1.SPACING.MEDIUM, function (props) { return props.isOverlayOpen ? 'pointer' : ''; });
exports.CardTitle = styled_components_1["default"].h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  line-height: ", ";\n  text-transform: uppercase;\n"], ["\n  font-size: ", ";\n  line-height: ", ";\n  text-transform: uppercase;\n"])), constants_1.FONT_SIZE.LARGE, constants_1.FONT_SIZE.LARGE);
exports.CardSubTitle = styled_components_1["default"].h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", ";\n  line-height: ", ";\n  max-width: 70%;\n  text-transform: uppercase;\n  padding-bottom: ", ";\n"], ["\n  font-size: ", ";\n  line-height: ", ";\n  max-width: 70%;\n  text-transform: uppercase;\n  padding-bottom: ", ";\n"])), constants_1.FONT_SIZE.MEDIUM, constants_1.FONT_SIZE.LARGE, constants_1.SPACING.LARGE);
exports.SignatureImg = styled_components_1["default"].img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 33%;\n"], ["\n  width: 33%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
