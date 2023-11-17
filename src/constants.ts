export const RPC_ENDPOINT = process.env.RPC_TYPE == "mainnet" ? "https://bsc-dataseed.binance.org/" : "https://data-seed-prebsc-1-s1.binance.org:8545/";

export const RPC_TIMEOUT_MS = 30000; // 30 Seconds

export const EVENTS_TABLE_NAME = "martian_events";
export const TICKETS_TABLE_NAME = "ticket_address";
export const EVENT_TICKETS_TABLE_NAME = "martian_event_tickets";
export const USERS_TABLE_NAME = "martian_users";
export const PROFILES_TABLE_NAME = "profiles";

export const TICKET_TABLE_QUERY = "id, contract_address, owner_address, ticket_generation_available, fiat_cost, fiat_currency, number_of_reserved_tickets_for_fiat_payments, number_of_tickets_for_direct_minting"

export const TICKET_USAGE_TABLE_NAME = "ticket_usage";


export const MARTIAN_VERIFIER_CONTRACT_ADDRESS = "";
export const ERC721_TICKET_CONTRACT_ADDRESS = "";

export const TICKET_MINT_QUEUE = "";
export const LOCK_TICKET_QUEUE = "lock_queue";