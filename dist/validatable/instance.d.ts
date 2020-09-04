import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import ClassInterface from "../class/class";
import Class from "../class";
export default class Instance<ValueT, InstanceT extends Class<object, unknown[]>, MessageT> extends MergeWrapper<Value<ValueT>, Message<MessageT>, Validatable> {
    readonly class: InstanceT;
    constructor(value: ValueT, class_: InstanceT, message: (result: Readonly<Value<ValueT> & ClassInterface<InstanceT> & Validatable>) => MessageT);
}
