"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var constants_1 = require("../utils/constants");
var signature_png_1 = require("../assets/signature.png");
var MenuContext_1 = require("../MenuContext");
var ContentContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", " ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: ", ";\n"], ["\n  padding: ", " ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: ", ";\n"])), constants_1.SPACING.LARGE, constants_1.SPACING.MEDIUM, function (props) { return props.isOverlayOpen ? 'pointer' : ''; });
var CardTitle = styled_components_1["default"].h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  line-height: ", ";\n  text-transform: uppercase;\n"], ["\n  font-size: ", ";\n  line-height: ", ";\n  text-transform: uppercase;\n"])), constants_1.FONT_SIZE.LARGE, constants_1.FONT_SIZE.LARGE);
var CardSubTitle = styled_components_1["default"].h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", ";\n  line-height: ", ";\n  max-width: 70%;\n  text-transform: uppercase;\n  padding-bottom: ", ";\n"], ["\n  font-size: ", ";\n  line-height: ", ";\n  max-width: 70%;\n  text-transform: uppercase;\n  padding-bottom: ", ";\n"])), constants_1.FONT_SIZE.MEDIUM, constants_1.FONT_SIZE.LARGE, constants_1.SPACING.LARGE);
var SignatureImg = styled_components_1["default"].img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 33%;\n"], ["\n  width: 33%;\n"])));
var CardContent = function () {
    var menuContext = react_1.useContext(MenuContext_1.MenuContext);
    return (react_1["default"].createElement(ContentContainer, { onClick: function () { return menuContext === null || menuContext === void 0 ? void 0 : menuContext.setIsOpen(false); }, isOverlayOpen: menuContext === null || menuContext === void 0 ? void 0 : menuContext.isOpen },
        react_1["default"].createElement(CardTitle, null,
            "Hello, my name is ",
            react_1["default"].createElement("br", null),
            "Kristoffer Linderman"),
        react_1["default"].createElement(CardSubTitle, null, "I write code and always want to become better. Check out my projects to see some of my work, or just say hi by email or linkedin."),
        react_1["default"].createElement(SignatureImg, { src: signature_png_1["default"], alt: "Signature" })));
};
exports["default"] = CardContent;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
