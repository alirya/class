import Validator from "@dikac/t-validator/simple";
import InstanceofValidatable from "../validatable/instance-parameters";
import Class from "../class";
import DynamicParameter from "@dikac/t-validator/message/function/dynamic-parameter";
export default function InstanceParameter<InstanceT extends Class<object, unknown[]>, MessageT = unknown>(instance: InstanceT, message: DynamicParameter<InstanceT, MessageT>): Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>;
