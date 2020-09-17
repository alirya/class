import InstanceString from "../string/instance";
export default function Instance(value, instance, message = InstanceString, error = (v) => new Error(v)) {
    return error(message(false, value, instance));
}
//# sourceMappingURL=instance.js.map