import { Interface } from "./instance";
export default function InstanceStandard<InstanceT extends {
    new (...a: unknown[]): any;
}>(instance: InstanceT): Interface<InstanceT, string>;
