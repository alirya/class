import { Interface } from "./instance";
import Class from "../class";
export default function InstanceStandard<InstanceT extends Class<object, unknown[]>>(instance: InstanceT): Interface<InstanceT, string>;
