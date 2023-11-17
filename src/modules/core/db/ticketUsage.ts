import { SupabaseClient } from "@supabase/supabase-js";
import { TICKET_USAGE_TABLE_NAME, USERS_TABLE_NAME } from "../../constants/constants"
import { TicketUsageInstance } from "../../types/types";
import { SupabaseResult } from "./supabase"


// Get usage of a particular ticket
// tokenId is the number id of the individual ticket erc721 contract
export async function getTicketUsage(sb: SupabaseClient, ticketContractAddress: string, tokenId: number) : Promise<SupabaseResult> {
    try {
        let data = await sb
          .from(TICKET_USAGE_TABLE_NAME)
          .select(
            `id, signature, created_at, token_id, ticket_contract_address, wallet_address`
          )
          .eq('ticket_contract_address', ticketContractAddress)
          .eq('token_id', tokenId)
          .then((res) => res)

        if(data.data && data.data.length > 0) {

            const ticketUsageData = data.data[0];

            const ticketUsage: TicketUsageInstance = {
                id: ticketUsageData["id"],
                signature: ticketUsageData["signature"],
                createdAt: ticketUsageData["created_at"],
                ticketContractAddress: ticketUsageData["ticket_contract_address"],
                tokenId: ticketUsageData["token_id"],
                walletAddress: ticketUsageData["wallet_address"],
            };

            return {
                result: ticketUsage,
                success: true
            }
        }

        return {
            result: null,
            success: true,
        }
    } catch (error) {
        return {
            result: null,
            success: false
        }
    }
}


// Create usage of a particular ticket
// tokenId is the number id of the individual ticket erc721 contract
export async function createTicketUsage(
    sb: SupabaseClient,
    ticketContractAddress: string,
    tokenId: number,
    walletAddress: string,
    signature: string
) : Promise<boolean> {
    try {
        

        let data = await sb
          .from(TICKET_USAGE_TABLE_NAME)
          .insert({
            signature,
            created_at: Date.now(),
            token_id: tokenId,
            ticket_contract_address: ticketContractAddress,
            wallet_address: walletAddress,
          });
        console.log(data);

        return true;

    } catch (error) {}
    return false
}

// Get list of ticket usages for an event based on section of name supplied
export async function getTicketUsageByName(sb: SupabaseClient, ticketContractAddress: string, stringName: string) : Promise<SupabaseResult> {
    try {
        // Get wallet addresses from names
        let data = await sb
          .from(USERS_TABLE_NAME)
          .select(
            `martian_id, wallet_address, date_created, name`
          )
          .ilike('name',`%${stringName}%`)
          .eq('ticket_contract_address', ticketContractAddress)
          .then((res) => res);

        if(data.data && data.data.length > 0) {

            const ticketUsageData = data.data[0];

            const ticketUsage: TicketUsageInstance = {
                id: ticketUsageData["id"],
                signature: ticketUsageData["signature"],
                createdAt: ticketUsageData["created_at"],
                ticketContractAddress: ticketUsageData["ticket_contract_address"],
                tokenId: ticketUsageData["token_id"],
                walletAddress: ticketUsageData["wallet_address"],
            };

            return {
                result: ticketUsage,
                success: true
            }
        }

        return {
            result: null,
            success: true,
        }
    } catch (error) {
        return {
            result: null,
            success: false
        }
    }
}