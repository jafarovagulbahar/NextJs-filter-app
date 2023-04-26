import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";
import Link from "next/link";
import React from "react";

function HomePage() {
  const featureEvent = getFeaturedEvents();

  return (
    <div>
      <EventList items={featureEvent} />
    </div>
  );
}

export default HomePage;
