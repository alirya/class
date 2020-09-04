import Instance from "./instance";
export default function InstanceStandard<InstanceT extends {
    new (...a: unknown[]): any;
}, Value = unknown>(value: unknown, instance: InstanceT): Instance<Value, InstanceT, string>;
