import {
    IAppAccessors,
    IConfigurationExtend,
    IHttp,
    ILogger,
    IModify,
    IPersistence,
    IRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IMessageAttachment } from '@rocket.chat/apps-engine/definition/messages';
import { MessageActionType } from '@rocket.chat/apps-engine/definition/messages';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
import { PomodoroCommand } from './commands/PomodoroCommand';

export class PomodoroTimeManagementApp extends App {
    private readonly appLogger: ILogger //notsure
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async extendConfirguration(configuration: IConfigurationExtend): Promise<void> 
    {
        const pomodoroCommand: PomodoroCommand = new PomodoroCommand()
        await configuration.slashCommands.provideSlashCommand(pomodoroCommand)
    }

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp): Promise<void> {
        let meetingUrl = 'https://pomofocus.io/';
        const joinButton: IMessageAttachment = {
            actions: [{
                type: MessageActionType.BUTTON,
                text: 'Start Timer',
                url: meetingUrl
            }],
        
        };

        const builder = modify.getCreator().startMessage()
            .setSender(context.getSender())
            .setRoom(context.getRoom())
            .setText('Start Timer');
            .setAttachments([joinButton]);
        
        await modify.getCreator().finish(builder);
    }
    
}
function setAttachments(arg0: IMessageAttachment[]) {
    throw new Error('Function not implemented.');
}

