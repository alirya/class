import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ClassValidatable from "../validatable/class-parameters";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Return from "@dikac/t-validator/validatable/simple";
import DynamicParameter from "@dikac/t-validator/message/function/dynamic-parameter";
import ClassParameters from "./class-parameters";

export default function ClassParameter<MessageT>(
    message : DynamicParameter<unknown, MessageT>,
) : Validator<unknown, string, Readonly<Instance<unknown, MessageT>>> {

    return ClassParameters((value, valid) => message({value, valid}))
}
