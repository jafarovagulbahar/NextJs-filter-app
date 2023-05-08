import React, { Fragment } from 'react'

import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import { getEventById, getFeaturedEvents } from '@/helpers/api-until';

const EventDetailPage = (props) => {
 const event = props.selectedEvent;
 
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

export async function getStaticProps(context){
  const eventId = context.params.eventId;
 const event =  await getEventById(eventId)

 return {
  props: {
    selectedEvent: event,
  },
  revelidate: 30

 }
}


export async function getStaticPaths(){

  const events = await getFeaturedEvents();

  const path= events.map(event=> ({params: {eventId: event.id}}))
  return {
    paths: path,
       fallback: 'blocking'}
    
  
}
export default EventDetailPage
