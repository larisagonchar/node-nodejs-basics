import { createHash } from 'crypto';
import fs from 'fs/promises';

const calculateHash = async () => {
    const data = await fs.readFile('src/hash/files/fileToCalculateHashFor.txt');
    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
};

await calculateHash();