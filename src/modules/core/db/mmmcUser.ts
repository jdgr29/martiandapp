import { SupabaseClient } from "@supabase/supabase-js";
import { TICKET_USAGE_TABLE_NAME, USERS_TABLE_NAME } from "../../constants/constants";
import { MartianUser } from "../../types/types";
import { SupabaseResult } from "./supabase";

// Create a new user
export async function createMartianUser(sb: SupabaseClient, walletAddress: string, name: string) : Promise<boolean> {
    try {
        let data = await sb
          .from(USERS_TABLE_NAME)
          .insert({
            wallet_address: walletAddress,
            name,
            date_created: Date.now()
        })
        console.log(data);
        return true
    } catch (error) {
        return false
    }
}

// Get single user for martian from wallet address if present
export async function getMartianUser(sb: SupabaseClient, wallet_address: string) : Promise<SupabaseResult> {
    try {
        let data = await sb
          .from(USERS_TABLE_NAME)
          .select(
            `martian_id, wallet_address, date_created, name`
          )
          .eq('wallet_address', wallet_address)
          .then((res) => res)

        if(!data.data || data.data.length == 0) {
            return {
                result: [],
                success: true
            }
        }

        const userData = data.data[0];

        const user: MartianUser = {
            id: userData["martian_id"],
            address: userData["wallet_address"],
            dateCreated: userData["date_created"],
            name: userData["name"],
        };

        return {
            result: user,
            success: true
        }
    } catch (error) {
        return {
            result: [error],
            success: false
        }
    }
}


// Get martian user by name
export async function getMartianUserByName(sb: SupabaseClient, martian_name: string) : Promise<SupabaseResult> {
    try {
        let data = await sb
          .from(USERS_TABLE_NAME)
          .select(
            `martian_id, wallet_address, date_created, name`
          )
          .eq('name', martian_name)
          .then((res) => res)

        if(!data.data || data.data.length == 0) {
            return {
                result: [],
                success: true
            }
        }

        const userData = data.data[0];

        const user: MartianUser = {
            id: userData["martian_id"],
            address: userData["wallet_address"],
            dateCreated: userData["date_created"],
            name: userData["name"],
        };

        return {
            result: user,
            success: true
        }
    } catch (error) {
        return {
            result: [error],
            success: false
        }
    }
}

// Get people who used a martian ticket with a particular ticket address
export async function getMartianUserAttendees(sb: SupabaseClient, ticketAddress: string, nameLike: string) : Promise<SupabaseResult> {
    try {
        // Need to get all MMMC users who used ticket for supplied ticketAddress
        let usersOfTicket: {name: string, address: string}[] = [];

        // Get users
        let userData = await sb
          .from(USERS_TABLE_NAME)
          .select(
            `martian_id, wallet_address, date_created, name`
          )
          .ilike('name', `%${nameLike}%`)
          .then((res) => res.data);

        console.log(userData);

        if(userData && userData.length > 0) {
            for (let i = 0; i < userData.length; i++) {
                const userRec = userData[i];
                console.log(userRec["wallet_address"]);
                
                // Check ticket usage for musers
                let ticketData = await sb
                    .from(TICKET_USAGE_TABLE_NAME)
                    .select(
                        `wallet_address, ticket_contract_address, signature`
                    )
                    .eq('wallet_address', userRec["wallet_address"])
                    .eq('ticket_contract_address', ticketAddress)
                    .then((res) => res.data);
                console.log(ticketData);

                if(ticketData && ticketData.length) {
                    // ticket usage exists
                    usersOfTicket.push({name: userRec["name"], address: userRec["wallet_address"]})
                }
            }
        }

        if(usersOfTicket.length == 0) {
            return {
                result: [],
                success: false
            }
        }

        return {
            result: usersOfTicket,
            success: true
        }
    } catch (error) {
        console.log(error);
        return {
            result: [],
            success: false
        }
    }
}