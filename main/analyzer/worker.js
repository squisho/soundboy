/**
 * This file is the main analyzer script, designed to run as worker thread.
 * This script expects to receive a message containing a list of soundfiles.
 * Each sound file is classified and analyzed, streaming results back to the
 * parent along the way.
 */
// TODO: figure out typescript: https://wanago.io/2019/05/06/node-js-typescript-12-worker-threads/
// import meyda from 'meyda';
// import * as tf from '@tensorflow/tfjs-node';
const { parentPort, workerData } = require('worker_threads');

const parent = parentPort;
const filenames = workerData.filenames || []

console.log('Analyzer Worker - filenames: ', filenames);

const postMessage = (data) => parent.postMessage(data);

filenames.forEach((filename) => {
    const result = { filename };
    // load soundfile
    // classify
    // extract perceptual features
    postMessage(result);
});

process.exit(0);
