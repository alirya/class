import Guard from '../boolean/class';
import {CallbackParameters} from '@alirya/function/assert/callback';
import ClassError from './throwable/class';
import ClassInterface from '../class';

export default function Class<Instance extends ClassInterface<object, unknown[]>>(
    value : unknown,
    error : (value:unknown)=>Error = ClassError.Parameters
) : asserts value is Instance {

    CallbackParameters(value, Guard, error);
}
