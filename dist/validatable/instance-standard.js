import Instance from "./instance";
import StringInstance from "./string/instance";
export default function InstanceStandard(value, instance) {
    return new Instance(value, instance, StringInstance);
}
//# sourceMappingURL=instance-standard.js.map