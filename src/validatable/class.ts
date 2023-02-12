import {CallbackParameters} from '@alirya/validator/validatable/callback.js';
import ClassGuard from '../boolean/class.js';
import Return from '@alirya/validator/validatable/simple.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';

export function ClassParameters<MessageT, Argument>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT>,
) : Return<Argument, string, MessageT> {

    return <Return<Argument, string, MessageT>> CallbackParameters(value, ClassGuard, message);
}

import Value from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';

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
