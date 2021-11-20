import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ClassValidatable from "../validatable/class-parameters";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Return from "@dikac/t-validator/validatable/simple";
import DynamicParameters from "@dikac/t-validator/message/function/dynamic-parameters";

export default function ClassParameters<MessageT>(
    message : DynamicParameters<unknown, MessageT>,
) : Validator<unknown, string, Readonly<Instance<unknown, MessageT>>> {

    return function<Argument extends unknown, Match extends string>(value : Argument|Match) {

        return  ClassValidatable(value, message);

    } as Validator<unknown, string, Readonly<Instance<unknown, MessageT>>>
}
