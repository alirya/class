(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/class", "@dikac/t-function/assert/callback", "./throwable/class"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const class_1 = require("../boolean/class");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const class_2 = require("./throwable/class");
    function Class(value, error = class_2.default) {
        callback_1.default(value, class_1.default, error);
    }
    exports.default = Class;
});
//# sourceMappingURL=class.js.map