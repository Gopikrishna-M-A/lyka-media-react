import React from 'react'
import Branding from './ServiceSections/Branding'
import Digital from './ServiceSections/Digital'
import Events from './ServiceSections/Events'
import Media from './ServiceSections/Media'
import Pr from './ServiceSections/Pr'
import Social from './ServiceSections/Social'
import Stratergy from './ServiceSections/Stratergy'
import Video from './ServiceSections/Video'

export default function Services() {
  return (
    <div>

      <Stratergy id="service-stratergy"/>
      <Branding id="service-branding"/>
      <Social id="service-social"/>
      <Digital id="service-digital"/>
      <Video id="service-video"/>
      <Pr id="service-pr"/>
      <Media id="service-media"/>
      <Events id="service-events"/>

    </div>
  )
}
