import React from 'react'
import InterestsNav from '../components/InterestsNav'
import InterestsList from '../components/InterestList'
import InterestsSwitch from '../components/InterestsSwitch'

function interests() {
  return (
    <div>
      <InterestsNav/>
      <InterestsSwitch/>
      <InterestsList/>
    </div>
  )
}

export default interests
