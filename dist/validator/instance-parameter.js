import InstanceParameters from "./instance-parameters";
export default function InstanceParameter(
//instance : InstanceT,
//message : DynamicParameter<InstanceT, MessageT>,
argument) {
    return InstanceParameters(argument.value || argument.class, (value, valid) => argument.message({ value, valid }));
}
//# sourceMappingURL=instance-parameter.js.map