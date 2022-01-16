import Value from "@alirya/value/value";
import Return from "@alirya/validator/validatable/simple";
import Instance from "@alirya/validator/validatable/validatable";
import Message from "@alirya/message/message";
import Dynamic from "@alirya/validator/message/function/validatable-parameter";
import ClassParameters from "./class-parameters";

export default function ClassParameter<MessageT, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<Dynamic<Argument, MessageT>>
) : Return<Argument, string, Readonly<Instance<unknown, MessageT>>> {

    return ClassParameters(value, (value, valid) => message({value, valid}))
}
