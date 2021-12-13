import Validator from "@dikac/t-validator/simple";
import ClassValidatable from "../validatable/class-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import DynamicParameters from "@dikac/t-validator/message/function/validatable-parameters";

export default function ClassParameters<MessageT>(
    message : DynamicParameters<unknown, MessageT>,
) : Validator<unknown, string, Readonly<Instance<unknown, MessageT>>> {

    return function<Argument extends unknown, Match extends string>(value : Argument|Match) {

        return  ClassValidatable(value, message);

    } as Validator<unknown, string, Readonly<Instance<unknown, MessageT>>>
}
