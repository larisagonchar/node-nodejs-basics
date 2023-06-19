import fs from 'fs';

const copy = async () => {
    fs.readdir('src/fs/files', (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }

        fs.readdir('src/fs/files_copy', (err) => {
            if (err) {
                fs.cp('src/fs/files', 'src/fs/files_copy', { recursive: true }, () => {});
            }
            else throw new Error('FS operation failed');
        });
    });
};

await copy();
