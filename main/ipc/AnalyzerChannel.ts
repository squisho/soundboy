import { IpcMainEvent } from 'electron';

import { analyzeSounds } from '../analyzer';
import ChannelInterface from './ChannelInterface';

export default class AnalyzerChannel implements ChannelInterface {
    getName() {
        return 'analyzer';
    }

    /**
     * Analyzes a list of sound files and stores the results in the database.
     * Progress is streamed to the client with each db entry.
     * @param event 
     * @param request { responseChannel, params: a list of sound file names }
     */
    handler(event: IpcMainEvent, request: IPC.Request) {
        const responseChannel = request.responseChannel || `${this.getName()}_response`;
        event.sender.send(responseChannel, 'pong');

        const filenames = request.params;
        if (!filenames || filenames.length === 0) {
            // TODO: error message
            return;
        }

        const sendUpdate = (data: Record<string, any>) => {
            event.sender.send(responseChannel, data);
        };

        analyzeSounds(filenames, sendUpdate);
    }
}
