import React, { Fragment } from 'react'
import MainHeader from './Header/main-header'

const Layout = (props) => {
  return (
    <Fragment>
       <MainHeader/>
        <main>
            {props.children}
        </main>
    </Fragment>
  )
}

export default Layout