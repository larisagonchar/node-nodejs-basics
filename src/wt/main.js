import { isMainThread, Worker, MessageChannel, receiveMessageOnPort } from 'worker_threads';
import { availableParallelism } from 'os';

const performCalculations = async () => {
    const cpus = availableParallelism();

    if (isMainThread) {
        const promises = [];
        for (let i = 0; i < cpus; i++) {
            promises.push(createPromise(i));
        }

        const resultOfPromises = await Promise.allSettled(promises);
        const info = resultOfPromises.map((value) => {
            return {
                status: value.status === 'fulfilled' ? 'resolved' : 'error',
                data: value.value ?? null
            }
        });

        console.log(info);
    }

};

function createPromise(workerId) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js');
        const workerPort = new MessageChannel();

            workerPort.port2.on('message', (message) => {
                resolve(message);
            });

            worker.on('error', (error) => {
                reject(error);
            });

            worker.postMessage({
                data: workerId + 10,
                port: workerPort.port1
            }, [workerPort.port1]);
    });
}

await performCalculations();