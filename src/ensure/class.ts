import Assert from '../assert/class.js';
import StringError from '../assert/throwable/class.js';
import ClassInterface from '../class.js';

export default function Class(
    value : unknown,
    error : (value:unknown)=>Error = StringError.Parameters
) : ClassInterface<object, unknown[]> {

    Assert(value, error);

    return value;
}
