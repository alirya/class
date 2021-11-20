import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import DynamicParameter from "@dikac/t-validator/message/function/dynamic-parameter";
export default function ClassParameter<MessageT>(message: DynamicParameter<unknown, MessageT>): Validator<unknown, string, Readonly<Instance<unknown, MessageT>>>;
