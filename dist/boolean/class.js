const handler = { construct() { return {}; } };
/**
 * check if {@param value} is class/constructable
 * @param value
 */
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