import Assert from '../assert/class';
import StringError from '../assert/throwable/class-parameters';
import ClassInterface from '../class';

export default function Class(
    value : unknown,
    error : (value:unknown)=>Error = StringError
) : ClassInterface<object, unknown[]> {

    Assert(value, error);

    return value;
}
