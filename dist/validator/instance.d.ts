import InstanceParameter, { InstanceArgumentValue, InstanceArgumentClass } from "./instance-parameter";
import InstanceParameters from "./instance-parameters";
import Class from "../class";
/**
 *  validate if array is Instance
 */
declare namespace Instance {
    const Parameter: typeof InstanceParameter;
    const Parameters: typeof InstanceParameters;
    type ArgumentValue<InstanceT extends Class<object, unknown[]>, MessageT = unknown> = InstanceArgumentValue<InstanceT, MessageT>;
    type ArgumentClass<InstanceT extends Class<object, unknown[]>, MessageT = unknown> = InstanceArgumentClass<InstanceT, MessageT>;
}
export default Instance;
