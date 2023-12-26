import Value from '@axiona/value/value.js';
import BooleanInstance from '../../boolean/instance.js';
import ClassContainer from '../../class/class.js';
import Class from '../../class.js';

export default function Instance<
    Instance extends Class<object, unknown[]>
>(
    value : Value<unknown> & ClassContainer<Instance>
) : boolean {

    return BooleanInstance(value.value, value.class);
}
