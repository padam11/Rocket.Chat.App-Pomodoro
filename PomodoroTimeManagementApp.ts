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

    
}
