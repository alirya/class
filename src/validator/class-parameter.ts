import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import DynamicParameter from "@dikac/t-validator/message/function/validatable-parameter";
import ClassParameters from "./class-parameters";

export default function ClassParameter<MessageT>(
    message : DynamicParameter<unknown, MessageT>,
) : Validator<unknown, string, Readonly<Instance<unknown, MessageT>>> {

    return ClassParameters((value, valid) => message({value, valid}))
}
