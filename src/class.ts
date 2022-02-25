import {Class as ToolbeltClass} from 'ts-toolbelt';

type Class<ObjectType extends object = object, Arguments extends unknown[] = unknown[]> = ToolbeltClass.Class<Arguments, ObjectType>;

export default Class;
