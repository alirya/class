(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/class"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const class_1 = require("../string/class");
    function Class(string, subject = 'type', conversion = value => typeof value) {
        return new Error(class_1.default(false, string, subject, conversion));
    }
    exports.default = Class;
});
//# sourceMappingURL=class.js.map