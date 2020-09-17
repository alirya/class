import InstanceofValidatable from "../validatable/instance";
export default class Instanceof {
    constructor(instance, message) {
        this.instance = instance;
        this.message = message;
    }
    validate(value) {
        return new InstanceofValidatable(value, this.instance, this.message);
    }
}
//# sourceMappingURL=instance.js.map