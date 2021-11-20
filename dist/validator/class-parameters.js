import ClassValidatable from "../validatable/class-parameters";
export default function ClassParameters(message) {
    return function (value) {
        return ClassValidatable(value, message);
    };
}
//# sourceMappingURL=class-parameters.js.map