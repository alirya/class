import Validator from '@alirya/validator/simple';
import ClassValidatable from '../validatable/class';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';

export function ClassParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT>,
) : Validator<unknown, string, MessageT> {

    return function<Argument extends unknown, Match extends string>(value : Argument|Match) {

        return  ClassValidatable.Parameters(value, message);

    } as Validator<unknown, string, MessageT>;
}


export function ClassParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT>,
) : Validator<unknown, string, MessageT> {

    return ClassParameters((value, valid) => message({value, valid}));
}


namespace Class {
    export const Parameters = ClassParameters;
    export const Parameter = ClassParameter;
}
export default Class;
