const handler = { construct() { return {}; } };
export default function Class(value) {
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
//# sourceMappingURL=class.js.map