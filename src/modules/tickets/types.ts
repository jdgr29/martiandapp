export type Ticket = {
    id: number;
    contractAddress: string;
    reserveAmount: number;
    onchainMintsAmount: number;
    fiatCost: number;
    fiatCurrency: string;
    ticketGenerationAvailable: boolean;
};

export type TicketPurchase = {
    ticketId: number,
    quantity: number
}

export type TicketsState = {
    tickets: Ticket[];
    loading: boolean; 
    error: TicketsError;
}

export enum TicketsError {
    NONE,
    LOADING_FAILED = 'Ticket loading has failed',
    BLACKLISTED_TICKET = 'Access to ticket has been blocked on the platform.',
}
