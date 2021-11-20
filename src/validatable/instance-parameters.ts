import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import MessageCallback from "@dikac/t-validator/validatable/callback-function-parameters";
import InstanceBoolean from "../value/boolean/instance";
import ClassInterface from "../class/class";
import Class from "../class";
import DynamicParameter from "@dikac/t-validator/message/function/dynamic-parameter";
import Dynamic from "@dikac/t-validator/value/dynamic";
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
