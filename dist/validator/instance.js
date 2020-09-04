(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const instance_1 = require("../validatable/instance");
    class Instanceof {
        constructor(instance, message) {
            this.instance = instance;
            this.message = message;
        }
        validate(value) {
            return new instance_1.default(value, this.instance, this.message);
        }
    }
    exports.default = Instanceof;
});
//# sourceMappingURL=instance.js.map