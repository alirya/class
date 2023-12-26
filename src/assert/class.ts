import Guard from '../boolean/class.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import ClassError from './throwable/class.js';
import ClassInterface from '../class.js';

export default function Class<Instance extends ClassInterface<object, unknown[]>>(
    value : unknown,
    error : (value:unknown)=>Error = ClassError.Parameters
) : asserts value is Instance {

    CallbackParameters(value, Guard, error);
}
