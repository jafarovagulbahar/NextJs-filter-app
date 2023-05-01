import EventSearch from '@/components/events/EventSearch/event-search'
import EventList from '@/components/events/event-list'
import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'


const AllEventPages = () => {

  const event = getAllEvents()

 const router = useRouter()
  function findEventHandle(year, month){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandle}/>
      <EventList items={event}/>
    </Fragment>
  )
}

export default AllEventPages