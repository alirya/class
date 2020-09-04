(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./instance", "./string/instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const instance_1 = require("./instance");
    const instance_2 = require("./string/instance");
    function InstanceStandard(value, instance) {
        return new instance_1.default(value, instance, instance_2.default);
    }
    exports.default = InstanceStandard;
});
//# sourceMappingURL=instance-standard.js.map