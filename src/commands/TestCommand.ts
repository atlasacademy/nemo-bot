import {TextChannel} from "discord.js";
import {Command, TextPayload} from "../Command";

export default class TestCommand extends Command {

    run(payload: TextPayload) {
        const channel = this.channel(payload);
        if (!(channel instanceof TextChannel)) {
            console.log('Message permission not available');
            return;
        }

        channel.send('TEST');
    }

}
