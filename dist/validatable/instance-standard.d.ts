import Instance from "./instance";
import Class from "../class";
export default function InstanceStandard<InstanceT extends Class<object, unknown[]>, Value = unknown>(value: unknown, instance: InstanceT): Instance<Value, InstanceT, string>;
