export function signAndSendTransaction({ blockchain, params, provider }: {
    blockchain: any;
    params: any;
    provider: any;
}): Promise<any>;
export function getSignatureStatus({ signature }: {
    signature: any;
}): {
    context: {
        apiVersion: string;
        slot: number;
    };
    value: {
        confirmationStatus: string;
        confirmations: number;
        err: {
            InstructionError: (string | number)[];
        };
        slot: number;
        status: {
            Err: {
                InstructionError: (string | number)[];
            };
            Ok?: undefined;
        } | {
            Ok: any;
            Err?: undefined;
        };
    };
};
export function getConfirmedTransaction({ signature }: {
    signature: any;
}): {
    blockTime: number;
    slot: number;
    transaction: {};
    meta: {
        err: {
            InstructionError: (string | number)[];
        };
        logMessages: any[];
    };
    context?: undefined;
    value?: undefined;
} | {
    context: {
        apiVersion: string;
        slot: number;
    };
    value: any;
    blockTime?: undefined;
    slot?: undefined;
    transaction?: undefined;
    meta?: undefined;
};
