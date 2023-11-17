import { SupabaseClient } from "@supabase/supabase-js";
import { PROFILES_TABLE_NAME } from "../../../constants";
import { SupabaseResult } from "./supabase";
import { User } from '@supabase/auth-helpers-react'

// Get profile of user
export async function getProfile(sb: SupabaseClient, user: User | null) : Promise<SupabaseResult> {
    try {
        let { data, error, status } = await sb
          .from(PROFILES_TABLE_NAME)
          .select(
            `username, website, avatar_url`
          )
          .eq('id', user)
          .single()

        if (error && status !== 406) {
            throw error
        }

        return {
            result: data,
            success: true
        }
    } catch (error) {
        return {
            result: null,
            success: false
        }
    }
}