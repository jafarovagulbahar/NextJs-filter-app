

import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-until";
// import { getFeaturedEvents } from "@/dummy-data";


import React from "react";

function HomePage(props) {

  console.log(props.events);
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(){

  const featureEvents = await getFeaturedEvents()
  return {
    props: {
      events: featureEvents
    }
  }
}

export default HomePage;
