(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/class"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const class_1 = require("../../assert/string/class");
    function Class(object) {
        return class_1.default(object.valid, object.value);
    }
    exports.default = Class;
});
//# sourceMappingURL=class.js.map