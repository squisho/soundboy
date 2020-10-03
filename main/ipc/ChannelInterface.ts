import { IpcMainEvent } from 'electron';

export default interface ChannelInterface {
    getName(): string;
    handler(event: IpcMainEvent, request: IPC.Request): void;
}
