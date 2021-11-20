import InstanceofValidatable from "../validatable/instance-parameters";
export default function InstanceParameters(instance, message) {
    return function (value) {
        return new InstanceofValidatable(value, instance, message);
    };
}
//# sourceMappingURL=instance-parameters.js.map