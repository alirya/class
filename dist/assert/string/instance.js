(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name", "@dikac/t-string/message/sentences-is"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    const sentences_is_1 = require("@dikac/t-string/message/sentences-is");
    function Instance(valid, value, instance, subject = '') {
        const sentence = sentences_is_1.default(valid, [subject, name_1.default(value)], {
            valid: ['is instanceof of'],
            invalid: ['is not instanceof of'],
        }, [instance.name]);
        return sentence.message;
    }
    exports.default = Instance;
});
//# sourceMappingURL=instance.js.map