import React from 'react'
import UpdatesNav from '../components/UpdatesNav'
import UpdatesSwitch from '../components/UpdatesSwitch'
import UpdatesList from '../components/UpdatesList'

function updates() {
  return (
    <div>
      <UpdatesNav/>
      <UpdatesSwitch/>
      <UpdatesList/>
    </div>
  )
}

export default updates
