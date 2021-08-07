import {Client, Message} from "discord.js";
import commandRegistrar from "./commandRegistrar";

export function messageCreateHandler(client: Client, prefix: string): (message: Message) => void {
    return (message: Message) => {
        const content = message.content;

        if (content.indexOf(prefix) !== 0)
            return;

        const body = content.substr(prefix.length),
            match = /^([A-Za-z0-9-]+)(\s.*$|$)/.exec(body);

        if (!match)
            return;

        const keyword = match[1],
            args = match[2],
            command = commandRegistrar.get(keyword);

        if (!command)
            return;

        command.run({
            client,
            message,
            args: args.trim()
        });
    };
}
