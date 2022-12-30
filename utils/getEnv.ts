export function getEnv<T> (envKey: string, fallbackValue?: T): string | T {
    const envValue = process.env[envKey]

    if(envValue === undefined && fallbackValue === undefined) {
        throw new Error('Can not fetch env var.')
    }
        return envValue !== undefined ? envValue :  fallbackValue as T
}
