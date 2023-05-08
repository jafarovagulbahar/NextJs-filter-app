import ResultsTitle from "@/components/events/ResultTitle/result-title";
import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/helpers/api-until";
import { useRouter } from "next/router";
import React from "react";

const FilterdEventPage = (props) => {
  // const router = useRouter();

  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <div>Loading...</div>;
  // }

  // const yearData = filterData[0];
  // const monthData = filterData[1];

  // const numYear = +yearData;
  // const numMonth = +monthData;

  if (props.hasError ) {
    return <div>InvalidFilter</div>;
  }


  const filteredEvents = props.events


  if(!filteredEvents || filteredEvents.length===0){
    return <div>No event found</div>
  }
 
  const date = new Date(props.date.year, props.date.month-1)

  return <div>
    <ResultsTitle date={date}/>
    <EventList items={filteredEvents}/>
  </div>;
};

export async function getServerSideProps(context){
  const {params} = context

  const filterData= params.slug
  
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
    return {
     props: {hasError: true}
    }
  }


  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  })


  return {
    props: {
    events: filteredEvents,
    date: {
       year: numYear,
       month: numMonth
    }
    }
  }
}
export default FilterdEventPage;
