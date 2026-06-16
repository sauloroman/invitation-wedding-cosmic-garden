interface EnvVars {
    [key: string]: string;
}

export const getEnvVariables = (): EnvVars => {
    const envs = import.meta.env;

    return {
        ...envs
    }
}