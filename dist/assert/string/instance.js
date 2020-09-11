(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name", "@dikac/t-string/message/sentences-must"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    const sentences_must_1 = require("@dikac/t-string/message/sentences-must");
    function Instance(valid, value, instance, subject = '') {
        const sentences = sentences_must_1.default(valid, [subject]);
        sentences.expect = ['instanceof of', instance.name];
        sentences.comma.push('expect');
        sentences.actual.push('actual', `"${name_1.default(value)}"`);
        return sentences.message;
    }
    exports.default = Instance;
});
//# sourceMappingURL=instance.js.map