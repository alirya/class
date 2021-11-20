import InstanceParameter from "./instance-parameter";
export default class InstanceParameters extends InstanceParameter {
    constructor(value, class_, message) {
        super({
            value,
            message: (argument) => message(argument.value, argument.valid, argument.class),
            class: class_
        });
    }
}
//# sourceMappingURL=instance-parameters.js.map