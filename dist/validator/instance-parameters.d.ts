import Validator from "@dikac/t-validator/simple";
import InstanceofValidatable from "../validatable/instance-parameters";
import Class from "../class";
import DynamicParameters from "@dikac/t-validator/message/function/dynamic-parameters";
export default function InstanceParameters<InstanceT extends Class<object, unknown[]>, MessageT = unknown>(instance: InstanceT, message: DynamicParameters<InstanceT, MessageT>): Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>;
