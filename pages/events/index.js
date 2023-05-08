import EventSearch from '@/components/events/EventSearch/event-search'
import EventList from '@/components/events/event-list'
import { getAllEvents } from '@/helpers/api-until'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'


const AllEventPages = (props) => {

  const {events} = props;


 const router = useRouter()
  function findEventHandle(year, month){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandle}/>
      <EventList items={events}/>
    </Fragment>
  )
}

export async  function getStaticProps(){
  const events = await getAllEvents()

  return {
    props: {
      events: events
    },
    revalidate: 60
  }
}
export default AllEventPages