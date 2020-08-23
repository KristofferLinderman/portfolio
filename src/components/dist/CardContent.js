"use strict";
exports.__esModule = true;
var react_1 = require("react");
var signature_png_1 = require("../assets/signature.png");
var MenuContext_1 = require("../MenuContext");
var CardContent_style_1 = require("./CardContent.style");
var CardContent = function () {
    var menuContext = react_1.useContext(MenuContext_1.MenuContext);
    return (react_1["default"].createElement(CardContent_style_1.ContentContainer, { onClick: function () { return menuContext === null || menuContext === void 0 ? void 0 : menuContext.setIsOpen(false); }, isOverlayOpen: menuContext === null || menuContext === void 0 ? void 0 : menuContext.isOpen },
        react_1["default"].createElement(CardContent_style_1.CardTitle, null,
            "Hello, my name is ",
            react_1["default"].createElement("br", null),
            "Kristoffer Linderman"),
        react_1["default"].createElement(CardContent_style_1.CardSubTitle, null, "I write code and always want to become better. Check out my projects to see some of my work, or just say hi by email or linkedin."),
        react_1["default"].createElement(CardContent_style_1.SignatureImg, { src: signature_png_1["default"], alt: "Signature" })));
};
exports["default"] = CardContent;
