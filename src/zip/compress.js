import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';

const compress = async () => {
    const gzip = createGzip();
    const readStream = createReadStream('src/zip/files/fileToCompress.txt');
    const writeStream = createWriteStream('src/zip/files/archive.gz');
    pipeline(readStream, gzip, writeStream, (err) => {
        if (err) {
          console.error('Pipeline failed.', err);
        } else {
          console.log('Pipeline succeeded.');
        }
    });
};

await compress();