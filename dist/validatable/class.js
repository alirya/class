(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/validatable/callback-function", "../boolean/class"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_function_1 = require("@dikac/t-validator/validatable/callback-function");
    const class_1 = require("../boolean/class");
    function Class(value, message) {
        return callback_function_1.default(value, class_1.default, message);
    }
    exports.default = Class;
});
//# sourceMappingURL=class.js.map