import { IpcMainEvent } from 'electron';

import Channel from './Channel';
import db from '../db';

export default class SoundsChannel extends Channel {
    /**
     * Fetches sounds from the DB given a query
     * @param event
     * @param request { responseChannel, params: [DB query object] }
     */
    async handler(event: IpcMainEvent, request: IPC.Request) {
        console.log('SoundsChannel request: ', request.params);
        const responseChannel = this.getResponseChannel(request);
        const query = request.params?.[0];
        if (!query) {
            // TODO: error message
            return;
        }

        const sounds = await db.sounds.fetch(JSON.parse(query));
        event.sender.send(responseChannel, sounds);
    }
}
