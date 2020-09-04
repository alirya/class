(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const handler = { construct() { return {}; } };
    function Class(value) {
        if (value && value.prototype && value.prototype.constructor.name) {
            return true;
        }
        try {
            const proxy = new Proxy(value, handler);
            new proxy();
            return true;
        }
        catch (e) {
            return false;
        }
    }
    exports.default = Class;
});
//# sourceMappingURL=class.js.map