import fs from 'fs/promises';

const read = async () => {
    const path = 'src/fs/files/fileToRead.txt';

    try {
        const data = await fs.readFile(path, 'utf-8');
        console.log(data);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();