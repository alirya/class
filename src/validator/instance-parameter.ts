import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import InstanceofValidatable from "../validatable/instance-parameters";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
import Class from "../class";
import ClassContainer from "../class/class";
import DynamicParameter from "@dikac/t-validator/message/function/dynamic-parameter";
import InstanceParameters from "./instance-parameters";
import Value from "@dikac/t-value/value";
import Instance from "./instance";

export type InstanceArgumentValue<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
> = Value<InstanceT> & Message<DynamicParameter<InstanceT, MessageT>>

export type InstanceArgumentClass<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
> = ClassContainer<InstanceT> & Message<DynamicParameter<InstanceT, MessageT>>

export default function InstanceParameter<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
    >(
    //instance : InstanceT,
    //message : DynamicParameter<InstanceT, MessageT>,
    argument : InstanceArgumentClass<InstanceT, MessageT>
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>

export default function InstanceParameter<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
    >(
    //instance : InstanceT,
    //message : DynamicParameter<InstanceT, MessageT>,
    {
        value,
        message,
    } : InstanceArgumentValue<InstanceT, MessageT>
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>

export default function InstanceParameter<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
>(
    //instance : InstanceT,
    //message : DynamicParameter<InstanceT, MessageT>,
    argument : InstanceArgumentValue<InstanceT, MessageT> & InstanceArgumentClass<InstanceT, MessageT>
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>> {

    return InstanceParameters(
        argument.value || argument.class,
        (value, valid) => argument.message({value, valid})
    );
}
