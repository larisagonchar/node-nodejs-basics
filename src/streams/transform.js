const transform = async () => {
    process.stdin.on('data', data => {
        data.reverse();
        process.stdout.write(`${data}\n`);
    })
};

await transform();