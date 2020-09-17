import ClassValidatable from "../validatable/class";
export default class Class {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return ClassValidatable(value, this.message);
    }
}
//# sourceMappingURL=class.js.map