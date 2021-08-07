import {Command} from "./Command";
import TestCommand from "./commands/TestCommand";

const registrar = new Map<string, Command>();

registrar.set('test', new TestCommand());

export default registrar;
