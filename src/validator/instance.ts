import InstanceParameter, {InstanceArgumentValue, InstanceArgumentClass} from "./instance-parameter";
import InstanceParameters from "./instance-parameters";
import Class from "../class";

/**
 *  validate if array is Instance
 */

namespace Instance {

    export const Parameter = InstanceParameter;
    export const Parameters = InstanceParameters;

    export type ArgumentValue<
        InstanceT extends Class<object, unknown[]>,
        MessageT = unknown
    > = InstanceArgumentValue<InstanceT, MessageT>;

    export type ArgumentClass<
        InstanceT extends Class<object, unknown[]>,
        MessageT = unknown
    > = InstanceArgumentClass<InstanceT, MessageT>;
}

export default Instance;
