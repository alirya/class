import Value from "@dikac/t-value/value";
import Class from "../../class/class";
export default function Instance<Instance extends {
    new (...a: unknown[]): any;
}>(value: Value<unknown> & Class<Instance>): boolean;
