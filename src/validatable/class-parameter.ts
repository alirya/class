import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import ClassParameters from "./class-parameters";

export default function ClassParameter<MessageT, Argument>(
    // value : Argument,
    // message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT,
    {
        value,
        message,
    } : Value<Argument> & Message<Dynamic<Argument, MessageT>>
) : Return<Argument, string, Readonly<Instance<unknown, MessageT>>> {

    return ClassParameters(value, (value, valid) => message({value, valid}))
}
