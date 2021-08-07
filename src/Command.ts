import {Channel, Client, Message} from "discord.js";

export abstract class Command {

    protected channel(payload: TextPayload): Channel {
        const channel = payload.client.channels.cache.get(payload.message.channelId);
        if (!channel)
            throw new Error('Failed to locate channel');

        return channel;
    }

    abstract run(payload: TextPayload | any): void;

}

export interface TextPayload {
    client: Client,
    message: Message,
    args: string,
}
