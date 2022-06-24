import { IHttp, IMessageBuilder, IModify, IModifyCreator, IPersistence, IRead} from '@rocket.chat/apps-engine/definition/accessors'
import { IMessageAttachment } from '@rocket.chat/apps-engine/definition/messages';
import { MessageActionType } from '@rocket.chat/apps-engine/definition/messages/MessageActionType';
//import { sendNotification } from ''../lib/helpers/sendNotification';
import { ISlashCommand, SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
import {Buffer} from 'buffer';

export class PomodoroCommand implements ISlashCommand {
    public command = 'pomodoro'
    public i18nDescription = 'use pomodoro timer'
    public providesPreview = false
    public i18nParamsExample = ''

    public async executor(
        context: SlashCommandContext,
        read: IRead,
        modify: IModify,
        http: IHttp,
        persis: IPersistence
    ): Promise<void> {

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
                .setText('Start Timer')
                .setAttachments([joinButton])
            
            await modify.getCreator().finish(builder);
        }
        
    }
    

    //public async executor. for message do modify.getCreator().startMessage
