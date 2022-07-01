import Assert from '../assert/class';
import StringError from '../assert/throwable/class';
import ClassInterface from '../class';

export default function Class(
    value : unknown,
    error : (value:unknown)=>Error = StringError.Parameters
) : ClassInterface<object, unknown[]> {

    Assert(value, error);

    return value;
}
