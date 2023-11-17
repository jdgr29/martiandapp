import { SupabaseClient } from "@supabase/supabase-js";
import { EVENTS_TABLE_NAME } from "../../../constants";
import { EventDetails } from "../../events/types";
import { SupabaseResult } from "./supabase"

const EVENT_TABLE_QUERY = "event_id, event_name, event_description, start_date, end_date, total_hours_live, predicted_attendance, actual_attendance, tags, contract_address, onchain_solution";

// Get single event based on event id supplied
export async function getEvent(sb: SupabaseClient, event_id: number) : Promise<SupabaseResult> {
    try {
        console.log(event_id);
        let data = await sb
          .from(EVENTS_TABLE_NAME)
          .select(EVENT_TABLE_QUERY)
          .eq('event_id', event_id)
          .then((res) => res)
        console.log(data);


        if(!data.data || data.data.length == 0) {
            return {
                result: [],
                success: true
            }
        }

        const eventData = data.data[0];

        const event: EventDetails = {
            id: eventData["event_id"],
            title: eventData["event_name"],
            description: eventData["event_description"],
            startDate: eventData["start_date"],
            endDate: eventData["end_date"],
            totalHoursLive: eventData["total_hours_live"],
            predictedAttendance: eventData["predicted_attendance"],
            actualAttendance: eventData["actual_attendance"],
            onchainSolution: eventData["onchain_solution"],
            ticketContractAddress: eventData["contract_address"],
            // tags may not exist
            tags: eventData["tags"] == "" ? undefined :( eventData["tags"] as string[]),
        };

        return {
            result: event,
            success: true
        }
    } catch (error) {
        return {
            result: [error],
            success: false
        }
    }
}

// NOTE: This will return a single event
export async function getEventsByTicketAddress(sb: SupabaseClient, ticketAddress: string) : Promise<SupabaseResult> {
    try {
        let data = await sb
          .from(EVENTS_TABLE_NAME)
          .select(EVENT_TABLE_QUERY)
          .eq('contract_address', ticketAddress)
          .then((res) => res);


        if(!data.data || data.data.length == 0) {
            return {
                result: [],
                success: true
            }
        }

        const events = data.data;

        let martianEvents: EventDetails[] = [];

        if(events && events.length > 0) {
            for (let index = 0; index < events.length; index++) {
                const eventData = events[index];

                const event: EventDetails = {
                    id: eventData["event_id"],
                    title: eventData["event_name"],
                    description: eventData["event_description"],
                    startDate: eventData["start_date"],
                    endDate: eventData["end_date"],
                    totalHoursLive: eventData["total_hours_live"],
                    predictedAttendance: eventData["predicted_attendance"],
                    actualAttendance: eventData["actual_attendance"],
                    onchainSolution: eventData["onchain_solution"],
                    ticketContractAddress: eventData["contract_address"],
                    // tags may not exist
                    tags: eventData["tags"] == "" ? undefined :( eventData["tags"] as string[]),
                };
                martianEvents.push(event);
            }

            if(martianEvents.length > 0) {
                return {
                    result: martianEvents[0],
                    success: true
                }
            }
        }

        return {
            result: null,
            success: true
        }
    } catch (error) {
        return {
            result: [error],
            success: false
        }
    }
}

// Get single event based on event name
// TODO - may need improvments
export async function getEventByName(sb: SupabaseClient, event_name: string) : Promise<SupabaseResult> {
    try {
        let data = await sb
          .from(EVENTS_TABLE_NAME)
          .select(EVENT_TABLE_QUERY)
          .eq('event_name', event_name)
          .then((res) => res);

        if(!data.data || data.data.length == 0) {
            return {
                result: [],
                success: true
            }
        }


        const eventData = data.data[0];

        const event: EventDetails = {
            id: eventData["event_id"],
            title: eventData["event_name"],
            description: eventData["event_description"],
            startDate: eventData["start_date"],
            endDate: eventData["end_date"],
            totalHoursLive: eventData["total_hours_live"],
            predictedAttendance: eventData["predicted_attendance"],
            actualAttendance: eventData["actual_attendance"],
            onchainSolution: eventData["onchain_solution"],
            ticketContractAddress: eventData["contract_address"],
            // tags may not exist
            tags: eventData["tags"] == "" ? undefined :( eventData["tags"] as string[]),
        };

        return {
            result: event,
            success: true
        }
    } catch (error) {
        return {
            result: [error],
            success: false
        }
    }
}

// Get list of martian events from most recently with limit and offset
// TODO - offset not used for now
export async function getEvents(sb: SupabaseClient, limit: number, offset: number) : Promise<SupabaseResult> {
    try {
        let data = await sb
          .from(EVENTS_TABLE_NAME)
          .select(EVENT_TABLE_QUERY)
          .order('event_id', { ascending: false})
          .limit(limit)
          .then((res) => res);
        
        const events = data.data;

        let martianEvents: EventDetails[] = [];

        if(events && events.length > 0) {
            for (let index = 0; index < events.length; index++) {
                const eventData = events[index];
                // Create martian event object
                const event: EventDetails = {
                    id: eventData["event_id"],
                    title: eventData["event_name"],
                    description: eventData["event_description"],
                    startDate: eventData["start_date"],
                    endDate: eventData["end_date"],
                    totalHoursLive: eventData["total_hours_live"],
                    predictedAttendance: eventData["predicted_attendance"],
                    actualAttendance: eventData["actual_attendance"],
                    onchainSolution: eventData["onchain_solution"],
                    ticketContractAddress: eventData["contract_address"],
                    // tags may not exist
                    tags: eventData["tags"] == "" ? undefined :( eventData["tags"] as string[]),
                };
                martianEvents.push(event);
            }
        }

        return {
            result: martianEvents,
            success: true
        }
    } catch (error) {
        return {
            result: [error],
            success: false
        }
    }
}


// Get list of all martian events
export async function getAllEvents(sb: SupabaseClient) : Promise<SupabaseResult> {
    try {
        let data = await sb
          .from(EVENTS_TABLE_NAME)
          .select(EVENT_TABLE_QUERY)
          .then((res) => res)
          const events = data.data;

          let martianEvents: EventDetails[] = [];
  
          if(events && events.length > 0) {
              for (let index = 0; index < events.length; index++) {
                  const eventData = events[index];
                  // Create martian event object
                  const event: EventDetails = {
                      id: eventData["event_id"],
                      title: eventData["event_name"],
                      description: eventData["event_description"],
                      startDate: eventData["start_date"],
                      endDate: eventData["end_date"],
                      totalHoursLive: eventData["total_hours_live"],
                      predictedAttendance: eventData["predicted_attendance"],
                      actualAttendance: eventData["actual_attendance"],
                      onchainSolution: eventData["onchain_solution"],
                      ticketContractAddress: eventData["contract_address"],
                      // tags may not exist
                      tags: eventData["tags"] == "" ? undefined :( eventData["tags"] as string[]),                  };
                  martianEvents.push(event);
              }
          }
         
          return {
              result: martianEvents,
              success: true
          }
    } catch (error) {
        return {
            result: [error],
            success: false
        }
    }
}