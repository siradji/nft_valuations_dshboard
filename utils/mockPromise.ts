/**
 *
 * @param mockData Mock data that will be returned
 * @param timeout Timeout in MS that will take the promise to resolve
 */
export async function mockPromise<T> (mockData: T, timeout: number = 2000): Promise<T> {
    return new Promise<T>((res, _rej) => {
        setTimeout(() => res(mockData), timeout)
    })
}
