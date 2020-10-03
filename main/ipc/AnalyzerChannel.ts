import { IpcMainEvent } from 'electron';

import ChannelInterface from './ChannelInterface';

export default class AnalyzerChannel implements ChannelInterface {
    getName() {
        return 'analyzer';
    }

    handler(event: IpcMainEvent, request: IPC.Request) {
        const responseChannel = request.responseChannel || `${this.getName()}_response`;
        event.sender.send(responseChannel, 'pong');
    }
}
