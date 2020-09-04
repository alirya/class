(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./instance", "../validatable/string/instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const instance_1 = require("./instance");
    const instance_2 = require("../validatable/string/instance");
    function InstanceStandard(instance) {
        return new instance_1.default(instance, instance_2.default);
    }
    exports.default = InstanceStandard;
});
//# sourceMappingURL=instance-standard.js.map