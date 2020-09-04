import ClassInterface from "../class";
/**
 * multi purpose type interface
 */
export default interface Class<ClassType extends ClassInterface> {
    class: ClassType;
}
