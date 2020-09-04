(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/class", "../assert/throwable/class"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const class_1 = require("../assert/class");
    const class_2 = require("../assert/throwable/class");
    function Class(value, error = class_2.default) {
        class_1.default(value, error);
        return value;
    }
    exports.default = Class;
});
//# sourceMappingURL=class.js.map