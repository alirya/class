import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import MessageCallback from "@dikac/t-validator/validatable/callback-function-parameters";
import InstanceBoolean from "../value/boolean/instance";
export default class InstanceParameter extends MergeWrapper {
    constructor(
    // value : ValueT,
    // class_ : InstanceT,
    // message : DynamicParameter<ValueT, MessageT, Dynamic<ValueT> & ClassInterface<InstanceT>>,
    argument /* = {
        value,
        class,
        message,
    }*/) {
        // let container : Value<ValueT> & ClassInterface<InstanceT> = {
        //      class: argument.class,
        //      value: argument.value,
        // };
        let msg = MessageCallback(argument, InstanceBoolean, () => argument.message(this));
        super(argument, msg, msg);
        this.class = argument.class;
    }
}
//# sourceMappingURL=instance-parameter.js.map