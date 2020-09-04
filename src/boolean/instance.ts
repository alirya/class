import {Class} from "ts-toolbelt";

export default function Instance<
    InstanceT extends {new(...a:unknown[]): any}
>(
    value : unknown,
    instance : InstanceT
) : value is Class.InstanceOf<InstanceT> {

    return value instanceof instance;
}
