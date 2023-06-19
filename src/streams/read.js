import { createReadStream } from 'fs';

const read = async () => {
    const readStream = createReadStream('src/streams/files/fileToRead.txt', 'utf-8');
    readStream.on('data', chunk => process.stdout.write(chunk));
};

await read();