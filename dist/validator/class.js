(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/class"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const class_1 = require("../validatable/class");
    class Class {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return class_1.default(value, this.message);
        }
    }
    exports.default = Class;
});
//# sourceMappingURL=class.js.map