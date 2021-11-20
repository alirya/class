import Guard from "../boolean/instance";
import Callback from "@dikac/t-function/assert/callback-parameters";
import InstanceError from "./throwable/instance-parameters";
export default function InstanceParameters(value, instance, error = InstanceError) {
    Callback(value, Guard, error, instance);
}
//# sourceMappingURL=instance-parameters.js.map