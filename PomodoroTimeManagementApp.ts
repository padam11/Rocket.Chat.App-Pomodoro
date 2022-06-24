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
//import { IMessageAttachment } from '@rocket.chat/apps-engine/definition/messages';
import { MessageActionType } from '@rocket.chat/apps-engine/definition/messages';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
import { PomodoroCommand } from './commands/PomodoroCommand';

export class PomodoroTimeManagementApp extends App {
    private readonly appLogger: ILogger //notsure
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async extendConfiguration(configuration: IConfigurationExtend): Promise<void> 
    {
        const pomodoroCommand: PomodoroCommand = new PomodoroCommand()
        await configuration.slashCommands.provideSlashCommand(pomodoroCommand)
    }
}


