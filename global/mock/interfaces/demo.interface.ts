export interface IProduct {
    readonly _id: string;
    readonly restaurant: any;
    readonly item: string;
    readonly price: number;
    readonly allergy: string;
    readonly description: string;
    isActive: boolean;
    readonly isDeleted: boolean;
}