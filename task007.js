// ctx.prototype.__applyStyleState = function (styleState) {
//     var keys = Object.keys(styleState), i, key;
//     for (i=0; i<keys.length; i++) {
//         key = keys[i];
//         this[key] = styleState[key];
//     }
// };
// ctx.prototype.__setDefaultStyles = function () {
//     var keys = Object.keys(STYLES), i, key; // keys of object - object selection
//     for (i=0; i<keys.length; i++) {
//         key = keys[i];
//         this[key] = STYLES[key].canvas; // field selection
//     }
// };
// ctx.prototype.__getStyleState = function () {
//     var i, styleState = {}, keys = Object.keys(STYLES), key;
//     for (i=0; i<keys.length; i++) {
//         key = keys[i];
//         styleState[key] = this[key];
//     }
//     return styleState;
// };

//использовал метод forEach, который будет перебирать массив ключей и использовать их для доступа к полям объекта styleState. Также использовал контекст this для удобства;
// forEach перебрал мне ключи объектов, для уменьшение дублирование кода =);

ctx.prototype.__applyStyleState = function (styleState) {
    Object.keys(styleState).forEach(key => {
        this[key] = styleState[key];
    });
};

ctx.prototype.__setDefaultStyles = function () {
    Object.keys(STYLES).forEach(key => {
        this[key] = STYLES[key].canvas;
    });
};

ctx.prototype.__getStyleState = function () {
    const styleState = {};
    Object.keys(STYLES).forEach(key => {
        styleState[key] = this[key];
    });
    return styleState;
};