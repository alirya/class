import {Class} from 'ts-toolbelt';
import Constructor from '../class.js';

export default function Instance<
    InstanceT extends Constructor<object, unknown[]>
>(
    value : unknown,
    instance : InstanceT
) : value is Class.Instance<InstanceT> {

    return value instanceof instance;
}
