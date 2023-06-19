import fs from 'fs/promises';

const remove = async () => {
    const path = 'src/fs/files/fileToRemove.txt';

    try {
        await fs.unlink(path);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();