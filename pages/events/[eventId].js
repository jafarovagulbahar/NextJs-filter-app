import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

const EventDetailPage = () => {

  const router = useRouter()

  const eventId= router.query.eventId;

 const event = getEventById(eventId);

 console.log(event);
 
 if(!event){
  return <div>Wrong pagee Gulichka</div>
 }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  )
}

export default EventDetailPage