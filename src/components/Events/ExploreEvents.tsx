import { useAppDispatch, useAppSelector } from "../../modules/core/redux/hooks"
import { selectEvents, selectEventConstraints, selectEventErrors, selectLoadingStatus} from "../../modules/events/eventsSlice";
import React from "react"

const ExploreEvents = () => {
    const events = useAppSelector((state) => selectEvents(state.events));


    return(
        <div>
            {/* This is explore section */}
            <h2>ExploreEvents Events</h2>
            <h3>Filters</h3>
            <h4>Other stuff</h4>
        </div>
    )
}

export default ExploreEvents