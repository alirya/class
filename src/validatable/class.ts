import Callback from "@dikac/t-validator/validatable/callback-function";
import StringGuard from "../boolean/class";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function Class<MessageT, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT
) : Return<unknown, Argument, string, Readonly<Instance<unknown, MessageT>>> {

    return <Return<unknown, Argument, string, Readonly<Instance<unknown, MessageT>>>> Callback(value, StringGuard, message);
}
