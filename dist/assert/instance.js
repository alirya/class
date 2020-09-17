import Guard from "../boolean/instance";
import Callback from "@dikac/t-function/assert/callback";
import InstanceError from "./throwable/instance";
export default function Instance(value, instance, error = InstanceError) {
    Callback(value, Guard, error, instance);
}
//# sourceMappingURL=instance.js.map