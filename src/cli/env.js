import { env } from 'process';

const parseEnv = () => {
    for (const [key, value] of Object.entries(env)) {
        if (key.includes('RSS')) console.log(`${key}=${value}`);
    }
};

parseEnv();