import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';

const decompress = async () => {
  const gunzip = createGunzip();
  const readStream = createReadStream('src/zip/files/archive.gz');
  const writeStream = createWriteStream('src/zip/files/fileToCompress.txt');
  pipeline(readStream, gunzip, writeStream, (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
  });
};

await decompress();