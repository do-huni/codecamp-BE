export interface IPointsTransactionsServiceCreate {
    impUid: string;
    amount: number;
    user: {
        id: string;
    };
}
