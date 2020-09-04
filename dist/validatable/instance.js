(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/validatable/readonly-merge", "@dikac/t-validator/validatable/callback-function", "../value/boolean/instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-validator/validatable/readonly-merge");
    const callback_function_1 = require("@dikac/t-validator/validatable/callback-function");
    const instance_1 = require("../value/boolean/instance");
    class Instance extends readonly_merge_1.default {
        constructor(value, class_, message) {
            let container = {
                class: class_,
                value: value,
            };
            let msg = callback_function_1.default(container, instance_1.default, () => message(this));
            super(container, msg, msg);
            this.class = class_;
        }
    }
    exports.default = Instance;
});
//# sourceMappingURL=instance.js.map