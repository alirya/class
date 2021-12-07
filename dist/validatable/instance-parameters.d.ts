import Class from "../class";
import DynamicParameters from "@dikac/t-validator/message/function/validatable-parameters";
import InstanceParameter from "./instance-parameter";
export default class InstanceParameters<ValueT, InstanceT extends Class<object, unknown[]>, MessageT> extends InstanceParameter<ValueT, InstanceT, MessageT> {
    constructor(value: ValueT, class_: InstanceT, message: DynamicParameters<ValueT, MessageT, [InstanceT]>);
}
