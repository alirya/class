import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import ClassGuard from "../boolean/class";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";

export default function ClassParameters<MessageT, Argument>(
    value : Argument,
    message : Dynamic<Argument, MessageT>,
) : Return<unknown, Argument, string, Readonly<Instance<unknown, MessageT>>> {

    return <Return<unknown, Argument, string, Readonly<Instance<unknown, MessageT>>>> Callback(value, ClassGuard, message);
}
