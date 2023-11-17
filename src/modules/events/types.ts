import { Ticket } from "../tickets/types";

export type ExploreEventsState = {
    // TODO ! ..
    constraints: any | null,
    // -- 
    events: EventDetails[];
    loading: boolean; 
    error: ExploreEventsError;
}

export enum ExploreEventsError {
    NONE,
    LOADING_FAILED = 'Event loading has failed',
    ACCESS_BLOCKED = 'User access has been blocked',
}

export type EventDetails = {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    totalHoursLive: number;
    predictedAttendance: number;
    actualAttendance: number;
    onchainSolution: string;
    ticketContractAddress: string;
    ticketCollectionImageUrl?: string;
    tags: string[];
    validTickets?: Ticket[];
};
