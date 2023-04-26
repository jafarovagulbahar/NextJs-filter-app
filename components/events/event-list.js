import React from 'react'
import Eventİtem from './event-item'
import classes from './event-list.module.css'

const EventList = (props) => {
    const {items} =props
  return (
   <ul className={classes.list}>
    {items?.map(({id, title, image, date, location})=><Eventİtem key={id} {...{title, image, date, location, id}}/>)}
   </ul>
  )
}

export default EventList