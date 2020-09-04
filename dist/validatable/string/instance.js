(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const instance_1 = require("../../assert/string/instance");
    function Instance(object) {
        return instance_1.default(object.valid, object.value, object.class);
    }
    exports.default = Instance;
});
//# sourceMappingURL=instance.js.map