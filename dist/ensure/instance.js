import Assert from "../assert/instance";
import StringError from "../assert/throwable/instance";
export default function Instance(value, instance, error = StringError) {
    Assert(value, instance, error);
    return value;
}
//# sourceMappingURL=instance.js.map