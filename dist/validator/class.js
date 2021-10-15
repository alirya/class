import ClassValidatable from "../validatable/class";
export default function Class(message) {
    return function (value) {
        return ClassValidatable(value, message);
    };
}
//# sourceMappingURL=class.js.map