import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";
export default function ClassParameters<MessageT, Argument>(value: Argument, message: Dynamic<Argument, MessageT>): Return<Argument, string, Readonly<Instance<unknown, MessageT>>>;
