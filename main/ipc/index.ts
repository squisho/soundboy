import { ipcMain } from 'electron';

import AnalyzerChannel from './AnalyzerChannel';
import ChannelInterface from './ChannelInterface';

const channels: ChannelInterface[] = [
    new AnalyzerChannel(),
];

export function registerIpcChannels() {
    channels.forEach(channel => {
        // register the ipc channel to the main process with it's corresponding handler
        ipcMain.on(channel.getName(), (event, request) => channel.handler(event, request))
    });
}
