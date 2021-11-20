import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import ClassGuard from "../boolean/class";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
import ClassParameters from "./class-parameters";

export default function ClassParameter<MessageT, Argument>(
    // value : Argument,
    // message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT,
    {
        value,
        message,
    } : Value<Argument> & Message<Dynamic<Argument, MessageT>>
) : Return<unknown, Argument, string, Readonly<Instance<unknown, MessageT>>> {

    return ClassParameters(value, (value, valid) => message({value, valid}))
}
