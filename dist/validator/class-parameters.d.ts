import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import DynamicParameters from "@dikac/t-validator/message/function/dynamic-parameters";
export default function ClassParameters<MessageT>(message: DynamicParameters<unknown, MessageT>): Validator<unknown, string, Readonly<Instance<unknown, MessageT>>>;
