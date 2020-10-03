import { parentPort } from 'worker_threads';

const parent = parentPort!;

console.log('Analyzer Worker - Started');

const postMessage = (data: Record<string, any>) => parent.postMessage(data);

parent.on('message', (filenames: string[]) => {
    filenames.forEach(filename => {
        // load soundfile
        // classify
        // extract perceptual features
        const result = {};
        postMessage(result);
    });

    process.exit(0);
});
