import Class from "../class";
import DynamicParameters from "@dikac/t-validator/message/function/dynamic-parameters";
import InstanceParameter from "./instance-parameter";

export default class InstanceParameters<ValueT, InstanceT extends Class<object, unknown[]>, MessageT>
    extends InstanceParameter<ValueT, InstanceT, MessageT>
{

    constructor(
        value : ValueT,
        class_ : InstanceT,
        message : DynamicParameters<ValueT, MessageT, [InstanceT]>,
    ) {

        super({
            value,
            message: (argument)=>message(argument.value, argument.valid, argument.class),
            class:class_
        })
    }
}
