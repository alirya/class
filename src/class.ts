import {Class as ToolbeltClass} from 'ts-toolbelt';

type Class<ObjectType extends object, Arguments extends unknown[]> = ToolbeltClass.Class<Arguments, ObjectType>;

export default Class;
