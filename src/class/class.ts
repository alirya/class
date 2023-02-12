import ClassInterface from '../class.js';
/**
 * multi purpose type interface
 */

export default interface Class<ClassType extends ClassInterface<object, unknown[]> = ClassInterface<object, unknown[]>>  {

    class : ClassType;
}


