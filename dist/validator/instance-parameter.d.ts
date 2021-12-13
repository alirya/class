import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import InstanceofValidatable from "../validatable/instance-parameters";
import Class from "../class";
import ClassContainer from "../class/class";
import DynamicParameter from "@dikac/t-validator/message/function/dynamic-parameter";
export declare type InstanceArgument<InstanceT extends Class<object, unknown[]>, MessageT = unknown> = ClassContainer<InstanceT> & Message<DynamicParameter<InstanceT, MessageT>>;
export default function InstanceParameter<InstanceT extends Class<object, unknown[]>, MessageT = unknown>(argument: InstanceArgument<InstanceT, MessageT>): Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>;
