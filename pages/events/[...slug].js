import ResultsTitle from "@/components/events/ResultTitle/result-title";
import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

const FilterdEventPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <div>Loading...</div>;
  }

  const yearData = filterData[0];
  const monthData = filterData[1];

  const numYear = +yearData;
  const numMonth = +monthData;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <div>InvalidFilter</div>;
  }


  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })


  if(!filteredEvents || filteredEvents.length===0){
    return <div>No event found</div>
  }
 
  const date = new Date(numYear, numMonth-1)

  return <div>
    <ResultsTitle date={date}/>
    <EventList items={filteredEvents}/>
  </div>;
};

export default FilterdEventPage;
