export function createAccountCreationMessage(walletAddress: string, name: string) : string {
    const message = `CREATE_ACCOUNT_${walletAddress}_WITH_NAME_${name}`;
    return message
}

export function createERC721TicketUsageMessage(walletAddress: string, contractAddress:string, ticketId: number) : string {
    const message = `ACCOUNT_${walletAddress}_USE_ERC721_TICKET_${contractAddress}_TOKEN_ID_${ticketId}`;
    return message
}