import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import MessageCallback from "@dikac/t-validator/validatable/callback-function";
import InstanceBoolean from "../value/boolean/instance";
export default class Instance extends MergeWrapper {
    constructor(value, class_, message) {
        let container = {
            class: class_,
            value: value,
        };
        let msg = MessageCallback(container, InstanceBoolean, () => message(this));
        super(container, msg, msg);
        this.class = class_;
    }
}
//# sourceMappingURL=instance.js.map