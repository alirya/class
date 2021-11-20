import InstanceParameters from "./instance-parameters";
export default function InstanceParameter(instance, message) {
    return InstanceParameters(instance, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=instance-parameter.js.map