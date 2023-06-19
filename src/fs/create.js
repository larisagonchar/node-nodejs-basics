import fs from 'fs';

const create = async () => {
    const path = 'src/fs/files/fresh.txt';

    fs.access(path, (err) => {
        if (err) {
            fs.writeFile(path, 'I am fresh and young', () => {
                console.log('File was created');
            });
        }
        else {
            throw new Error('FS operation failed');
        }
    });
};

await create();