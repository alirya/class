import Assert from "../assert/instance-parameters";
import StringError from "../assert/throwable/instance-parameters";
export default function Instance(value, instance, error = StringError) {
    Assert(value, instance, error);
    return value;
}
//# sourceMappingURL=instance.js.map