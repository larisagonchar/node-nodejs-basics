import { argv } from 'process';

const parseArgs = () => {
    const args = argv.slice(2);
    for (let i = 0; i < args.length; i = i + 2) {
        const prop = args[i].slice(2).split('-').join(' ');
        const value = args[i+1];
        console.log(`${prop} is ${value}`);
    }
};

parseArgs();