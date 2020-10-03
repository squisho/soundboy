import { Worker } from 'worker_threads';

import db from '../db';
import getAppPath from '../../util/getAppPath';

/**
 * This function spawns a worker thread to analyze the given sound files
 * @param filenames
 * @param callback called after each analysis
 */
export function analyzeSounds(filenames: string[], callback: (data: Record<string, any>) => void) {
    console.log('spawning analyzer worker');
    const worker = new Worker(`${getAppPath()}/main/analyzer/worker.js`, {
        workerData: {
            path: '../main/analyzer/worker.ts',
            filenames,
        },
    });

    const handlers = {
        online: () => {
            console.log('analyzer worker online');
            worker.postMessage(filenames);
        },
        message: async (data: Record<string, any>) => {
            console.log('analyzer worker message handler: ', data);
            await db.sounds.insert(data);
            callback(data);
        },
        error: (error: string) => {
            console.log('analyzer worker error handler: ', error);
            callback({ error });
        },
        exit: (code: string) => {
            console.log('analyzer worker exited with status code: ', code);
        },
    };

    Object.entries(handlers).forEach(([event, handler]) => worker.on(event, handler));
}
