import {CallbackParameters} from '@alirya/validator/validatable/callback';
import ClassGuard from '../boolean/class';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';

export function ClassParameters<MessageT, Argument>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT>,
) : Return<Argument, string, MessageT> {

    return <Return<Argument, string, MessageT>> CallbackParameters(value, ClassGuard, message);
}

import Value from '@alirya/value/value';
import Message from '@alirya/message/message';

export function ClassParameter<MessageT, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageT>>
) : Return<Argument, string, MessageT> {

    return ClassParameters(value, (value, valid) => message({value, valid}));
}


namespace Class {
    export const Parameters = ClassParameters;
    export const Parameter = ClassParameter;
}
export default Class;
