import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import InstanceofValidatable from "../validatable/instance-parameters";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
import Class from "../class";
import DynamicParameter from "@dikac/t-validator/message/function/dynamic-parameter";
import InstanceParameters from "./instance-parameters";

export default function InstanceParameter<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
>(
    instance : InstanceT,
    message : DynamicParameter<InstanceT, MessageT>,
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>> {

    return InstanceParameters(instance, (value, valid) => message({value, valid}));
}
