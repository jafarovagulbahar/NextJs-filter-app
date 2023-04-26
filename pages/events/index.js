import EventList from '@/components/events/event-list'
import { getAllEvents } from '@/dummy-data'
import React from 'react'

const AllEventPages = () => {

  const event = getAllEvents()

  return (
    <div>
      <EventList items={event}/>
    </div>
  )
}

export default AllEventPages