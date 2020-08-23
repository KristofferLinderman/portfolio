"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SocialContainer_1 = require("./SocialContainer");
var MenuContext_1 = require("../MenuContext");
var CardMenu_style_1 = require("./CardMenu.style");
var close_icon_svg_1 = require("../assets/close-icon.svg");
var menuItems = ['PROJECTS', 'ABOUT', 'CONTACT'];
var CardMenu = function (_a) {
    var setOverlay = _a.setOverlay;
    var menuContext = react_1.useContext(MenuContext_1.MenuContext);
    var onClick = function (event) {
        var element = event.target;
        setOverlay(menuItems.indexOf(element.innerText));
    };
    var exitClicked = function () {
        console.log('Exit clicked');
        console.log(menuContext);
        menuContext === null || menuContext === void 0 ? void 0 : menuContext.setIsOpen(false);
    };
    return (react_1["default"].createElement(CardMenu_style_1.MenuContainer, null,
        ((menuContext === null || menuContext === void 0 ? void 0 : menuContext.isOpen) && react_1["default"].createElement(CardMenu_style_1.MenuCloseBtn, { onClick: function () { return exitClicked(); } },
            react_1["default"].createElement(CardMenu_style_1.LogoImg, { src: close_icon_svg_1["default"], alt: "Close menu button" }))),
        react_1["default"].createElement(CardMenu_style_1.MenuList, null, menuItems.map(function (menuItem, index) {
            return (react_1["default"].createElement(CardMenu_style_1.MenuItem, { key: index, onClick: function (event) { return onClick(event); } },
                " ",
                menuItem));
        })),
        react_1["default"].createElement(SocialContainer_1["default"], null)));
};
exports["default"] = CardMenu;
