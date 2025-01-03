export interface LorryType { 
    sn: number, 
    name: string, 
    price: number, 
    description: string, 
    imageUrl: string, 
    type: string, 
    user_id: number, 
    quantity: number, 
    createdAt: Date, 
    updatedAt: Date
}
export interface TransactionType {
    sn: number
    amount: number
    date: string
    createdAt: Date
    updatedAt: Date
    lorry_id: number
    user_id: number
}

export interface IncomeType {
    Amount: number
    Month: number
}

export interface IncomeContext {
    transaction: TransactionType[]
    netIncome: IncomeType[]
    loading: boolean | null
    error: string| null
}

export interface ReviewsType {
    sn: number
    first_name: string
    rating: number
    text: string
    date: string
    createdAt: string
    updatedAt: string
}

export interface ReviewContext {
    reviews: ReviewsType[]
    loadingB: boolean | null
    errorB: string| null
}

export interface StarsObject {
    [key: number]: number;
}