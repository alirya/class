import Instance from "./instance";
import StringInstance from "../validatable/string/instance";
export default function InstanceStandard(instance) {
    return Instance(instance, StringInstance);
}
//# sourceMappingURL=instance-standard.js.map