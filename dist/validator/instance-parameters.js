import InstanceofValidatable from "../validatable/instance-parameters";
import StringInstance from "../assert/string/instance-parameters";
export default function InstanceParameters(instance, message = StringInstance) {
    return function (value) {
        return new InstanceofValidatable(value, instance, message);
    };
}
//# sourceMappingURL=instance-parameters.js.map