import path from 'path';
import { Worker } from 'worker_threads';

import db from '../db';

export function analyzeSounds(filenames: string[], callback: (data: Record<string, any>) => void) {
    console.log('spawning analyzer worker');
    const worker = new Worker(path.resolve(__dirname, './worker.ts'));

    const handlers = {
        online: () => {
            console.log('analyzer worker online');
            worker.postMessage(filenames);
        },
        message: (data: Record<string, any>) => {
            console.log('analyzer worker message handler: ', data);
            db.sounds.insert(data);
            callback(data);
        },
        error: (error: string) => {
            console.log('analyzer worker error handler: ', error);
            callback({ error });
        },
        exit: (code: string) => {
            console.log('analyzer worker exited with status code: ', code);
        },
    }

    Object.entries(handlers).forEach(([event, handler]) => worker.on(event, handler));
}
