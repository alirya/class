import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ClassValidatable from "../validatable/class";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default function Class<MessageT>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageT
) : Validator<unknown, string, Readonly<Instance<unknown, MessageT>>> {

    return function<Argument extends unknown, Match extends string>(value : Argument|Match) {

        return  ClassValidatable(value, message);

    } as Validator<unknown, string, Readonly<Instance<unknown, MessageT>>>
}
