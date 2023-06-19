import fs from 'fs';

const rename = async () => {
    const pathWrongName = 'src/fs/files/wrongFilename.txt';
    const pathProperName = 'src/fs/files/properFilename.md';

    fs.access(pathWrongName, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }

        fs.access(pathProperName, (err) => {
            if (err) {
                fs.rename(pathWrongName, pathProperName, () => {});
            } else {
                throw new Error('FS operation failed');
            }
        });

    });
};

await rename();