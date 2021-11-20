import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import InstanceofValidatable from "../validatable/instance-parameters";
import Class from "../class";
import ClassContainer from "../class/class";
import DynamicParameter from "@dikac/t-validator/message/function/dynamic-parameter";
import Value from "@dikac/t-value/value";
export declare type InstanceArgumentValue<InstanceT extends Class<object, unknown[]>, MessageT = unknown> = Value<InstanceT> & Message<DynamicParameter<InstanceT, MessageT>>;
export declare type InstanceArgumentClass<InstanceT extends Class<object, unknown[]>, MessageT = unknown> = ClassContainer<InstanceT> & Message<DynamicParameter<InstanceT, MessageT>>;
export default function InstanceParameter<InstanceT extends Class<object, unknown[]>, MessageT = unknown>(argument: InstanceArgumentClass<InstanceT, MessageT>): Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>;
export default function InstanceParameter<InstanceT extends Class<object, unknown[]>, MessageT = unknown>({ value, message, }: InstanceArgumentValue<InstanceT, MessageT>): Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>;
