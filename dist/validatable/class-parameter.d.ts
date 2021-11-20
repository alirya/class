import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
export default function ClassParameter<MessageT, Argument>({ value, message, }: Value<Argument> & Message<Dynamic<Argument, MessageT>>): Return<unknown, Argument, string, Readonly<Instance<unknown, MessageT>>>;
