import InstanceParameters from "./instance-parameters";
export default function InstanceParameter(argument) {
    return InstanceParameters(argument.class, (value, valid) => argument.message({ value, valid }));
}
//# sourceMappingURL=instance-parameter.js.map