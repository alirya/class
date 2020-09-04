(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/instance", "../assert/throwable/instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const instance_1 = require("../assert/instance");
    const instance_2 = require("../assert/throwable/instance");
    function Instance(value, instance, error = instance_2.default) {
        instance_1.default(value, instance, error);
        return value;
    }
    exports.default = Instance;
});
//# sourceMappingURL=instance.js.map