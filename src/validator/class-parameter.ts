import Validator from '@alirya/validator/simple';
import Instance from '@alirya/validator/validatable/validatable';
import DynamicParameter from '@alirya/validator/message/function/validatable-parameter';
import ClassParameters from './class-parameters';

export default function ClassParameter<MessageT>(
    message : DynamicParameter<unknown, MessageT>,
) : Validator<unknown, string, Readonly<Instance<unknown, MessageT>>> {

    return ClassParameters((value, valid) => message({value, valid}));
}
