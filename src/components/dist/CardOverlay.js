"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var constants_1 = require("../utils/constants");
var styled_components_1 = require("styled-components");
var CardMenu_1 = require("./CardMenu");
var OverlayContent_1 = require("./OverlayContent");
var MenuContext_1 = require("../MenuContext");
var OverlayContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nposition: absolute;\ndisplay: flex;\noverflow: hidden;\nright: 10%;\nwidth: ", ";\nheight: 75%;\nbackground: ", ";\ntransition: width 0.5s ease-in-out;\n"], ["\nposition: absolute;\ndisplay: flex;\noverflow: hidden;\nright: 10%;\nwidth: ", ";\nheight: 75%;\nbackground: ", ";\ntransition: width 0.5s ease-in-out;\n"])), function (props) { return props.isOpen ? '74%' : '12%'; }, constants_1.COLORS.SECONDARY_LIGHT);
var CardOverlay = function () {
    var _a = react_1.useState(0), overlayToShow = _a[0], setOverlayToShow = _a[1];
    var menuContext = react_1.useContext(MenuContext_1.MenuContext);
    var setOverlay = function (index) {
        console.log('Showing index: ', index);
        setOverlayToShow(index);
        menuContext === null || menuContext === void 0 ? void 0 : menuContext.setIsOpen(true);
    };
    return (react_1["default"].createElement(OverlayContainer, { isOpen: menuContext === null || menuContext === void 0 ? void 0 : menuContext.isOpen },
        react_1["default"].createElement(CardMenu_1["default"], { setOverlay: function (index) { setOverlay(index); } }),
        react_1["default"].createElement(OverlayContent_1["default"], { overlayToShow: overlayToShow })));
};
exports["default"] = CardOverlay;
var templateObject_1;
