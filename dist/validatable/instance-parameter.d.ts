import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import ClassInterface from "../class/class";
import Class from "../class";
import DynamicParameter from "@dikac/t-validator/message/function/validatable-parameter";
import Dynamic from "@dikac/t-validator/value/validatable";
export default class InstanceParameter<ValueT, InstanceT extends Class<object, unknown[]>, MessageT> extends MergeWrapper<Value<ValueT>, Message<MessageT>, Validatable> {
    readonly class: InstanceT;
    constructor(argument: Value<ValueT> & Message<DynamicParameter<ValueT, MessageT, Dynamic<ValueT> & ClassInterface<InstanceT>>> & ClassInterface<InstanceT>);
}
