(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/instance", "@dikac/t-function/assert/callback", "./throwable/instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const instance_1 = require("../boolean/instance");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const instance_2 = require("./throwable/instance");
    function Type(value, instance, error = instance_2.default) {
        callback_1.default([value, instance], instance_1.default, error);
    }
    exports.default = Type;
});
//# sourceMappingURL=instance.js.map