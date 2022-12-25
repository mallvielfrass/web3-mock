export function request({ blockchain, provider, method, params }: {
    blockchain: any;
    provider: any;
    method: any;
    params: any;
}): Promise<{
    jsonrpc: string;
    id: string;
    result: any;
}> | {
    jsonrpc: string;
    id: string;
    result: any;
};
