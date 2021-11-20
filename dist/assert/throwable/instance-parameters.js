import InstanceString from "../string/instance-parameters";
export default function InstanceParameters(value, instance, message = InstanceString, error = (v) => new Error(v)) {
    return error(message(value, false, instance));
}
//# sourceMappingURL=instance-parameters.js.map