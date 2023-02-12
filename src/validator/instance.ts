import Validator from '@alirya/validator/simple.js';
import InstanceofValidatable from '../validatable/instance.js';
import Return from '@alirya/validator/validatable/simple.js';
import Class from '../class.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import StringInstance from '../assert/string/instance.js';
import Message from '@alirya/message/message.js';
import ClassContainer from '../class/class.js';
import Dynamic from '@alirya/validator/value/validatable.js';

export function InstanceParameters<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
    >(
    instance : InstanceT,
    message : ValidatableParameters<InstanceT, MessageT, [InstanceT]>,
) : Validator<unknown, InstanceT, MessageT, InstanceofValidatable.Context<InstanceT>>;

export function InstanceParameters<
    InstanceT extends Class<object, unknown[]>,
    >(
    instance : InstanceT,
) : Validator<unknown, InstanceT, string, InstanceofValidatable.Context<InstanceT>>;

export function InstanceParameters<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
>(
    instance : InstanceT,
    message : ValidatableParameters<InstanceT, MessageT|string, [InstanceT]> = StringInstance.Parameters,
) : Validator<unknown, InstanceT, MessageT|string, InstanceofValidatable.Context<InstanceT>> {

    return function(value) {

        return <Return<unknown, InstanceT, MessageT, InstanceofValidatable.Context<InstanceT>>> new InstanceofValidatable.Parameters(value, instance, message);

    } as Validator<unknown, InstanceT, MessageT, InstanceofValidatable.Context<InstanceT>>;
}


export type InstanceArgument<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
> = ClassContainer<InstanceT> & Partial<Message<ValidatableParameter<InstanceT, MessageT, Dynamic<InstanceT> & {instance:InstanceT}>>>;

export function InstanceParameter<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
>(
    argument : InstanceArgument<InstanceT, MessageT>
) : Validator<any, InstanceT, MessageT, InstanceofValidatable.Context<InstanceT>>;

export function InstanceParameter<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
>(
    argument :  InstanceArgument<InstanceT,  MessageT|string>
) : Validator<any, InstanceT,  MessageT|string, InstanceofValidatable.Context<InstanceT>> {

     const message : ValidatableParameter<InstanceT, MessageT|string, Dynamic<InstanceT> & {instance:InstanceT}>
         = argument.message
         ? argument.message
         : StringInstance.Parameter;

    return InstanceParameters(
        argument.class,
        (value, valid, instance) => message({value, valid, instance})
    );
}


namespace Instance {
    export const Parameters = InstanceParameters;
    export const Parameter = InstanceParameter;
}
export default Instance;
